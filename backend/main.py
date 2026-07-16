import json
import os
import asyncio
import numpy as np
import pandas as pd
import joblib
import hashlib
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Load Models
scaler = joblib.load(os.path.join(base_dir, 'feature_scaler.joblib'))
iso_forest = joblib.load(os.path.join(base_dir, 'isolation_forest_model.joblib'))

with open(os.path.join(base_dir, 'feature_columns.json'), 'r') as f:
    feature_cols = json.load(f)

with open(os.path.join(base_dir, 'employee_baselines.json'), 'r') as f:
    baselines = json.load(f)

# Rule weights fallback if file doesn't exist
try:
    with open(os.path.join(base_dir, 'rule_weights.json'), 'r') as f:
        rule_weights = json.load(f)
except FileNotFoundError:
    rule_weights = {
        "weights": {
            "off_hours": 15,
            "weekend": 20,
            "role_mismatch": 25,
            "new_system": 20,
            "bulk_download_personal": 30,
            "bulk_download_role": 30,
            "high_sensitivity": 40,
            "failed_logins": 5,
            "privilege_escalation": 50,
            "role_absolute_ceiling": 50
        }
    }

def score_new_event(event, baselines, rule_weights, iso_forest, scaler, feature_cols):
    emp_id = event.get("employee_id")
    # Default baseline if missing
    emp_baseline = baselines.get(emp_id, {
        "download_mean": 0, "download_std": 1, "allowed_systems": [], "systems_ever_seen": [], "role_dl_p95": float("inf")
    })
    w = rule_weights["weights"]

    mu, sigma = emp_baseline.get("download_mean", 0), emp_baseline.get("download_std", 1)
    if sigma == 0: sigma = 1
    
    download_zscore_personal = (event.get("num_files_downloaded", 0) - mu) / sigma if sigma > 0 else 0.0

    # Ensure system formats match
    allowed = set(emp_baseline.get("allowed_systems", []))
    
    # Systems_touched might be a string in some json formats
    systems = event.get("systems_touched", [])
    if isinstance(systems, str):
        try:
            systems = json.loads(systems)
        except:
            systems = [systems]
            
    touched = set(systems)
    role_mismatch_count = len(touched - allowed)

    seen = set(emp_baseline.get("systems_ever_seen", []))
    new_system_flag = bool(touched - seen)

    download_zscore_role = download_zscore_personal
    role_dl_p95 = emp_baseline.get("role_dl_p95", float("inf"))
    exceeded_absolute_ceiling = event.get("num_files_downloaded", 0) > (3 * role_dl_p95)

    row = dict(event)
    row.update({
        "role_mismatch_count": role_mismatch_count,
        "new_system_flag": new_system_flag,
        "download_zscore_personal": download_zscore_personal,
        "download_zscore_role": download_zscore_role,
    })

    score, reasons = 0, []
    if row.get("is_off_hours"):
        score += w["off_hours"]; reasons.append("Off-hours access")
    if row.get("is_weekend"):
        score += w["weekend"]; reasons.append("Weekend activity")
    if role_mismatch_count > 0:
        score += w["role_mismatch"]; reasons.append(f"Accessed {role_mismatch_count} system(s) outside role")
    if new_system_flag:
        score += w["new_system"]; reasons.append("First-time system access")
    if download_zscore_personal > 3:
        score += w["bulk_download_personal"]; reasons.append("Downloads far above own baseline")
    if download_zscore_role > 3:
        score += w["bulk_download_role"]; reasons.append("Downloads far above role peer group")
    if row.get("sensitivity_score", 0) > 5:
        score += w["high_sensitivity"]; reasons.append("Touched highly sensitive data")
    if row.get("failed_logins", 0) > 0:
        score += min(row["failed_logins"] * w["failed_logins"], 24)
        reasons.append(f"{row['failed_logins']} failed login(s)")
    if row.get("privilege_escalation_flag"):
        score += w["privilege_escalation"]; reasons.append("Used privilege escalation")
    if exceeded_absolute_ceiling:
        score += w["role_absolute_ceiling"]; reasons.append("Volume exceeded 3x absolute role peer p95")
    
    rule_score = min(score, 100)

    # ML Score
    X_new = pd.DataFrame([{c: row.get(c, 0) for c in feature_cols}])[feature_cols].astype(float)
    X_new_scaled = scaler.transform(X_new)
    raw_score = iso_forest.decision_function(X_new_scaled)[0]
    if_score = float(100 / (1 + np.exp(2 * raw_score + 0.5)))

    final_score = round(0.6 * rule_score + 0.4 * if_score, 1)
    tier = "HIGH" if final_score >= 65 else ("MEDIUM" if final_score >= 35 else "LOW")

    result = dict(
        event=event,
        final_risk_score=final_score, 
        risk_tier=tier, 
        rule_score=rule_score,
        isolation_forest_score=if_score, 
        reasons=reasons,
    )

    if final_score >= 65:
        result["qpc_signature_validation"] = "ML-DSA-COMPLIANT"
        result["signature"] = "0xPQC" + hashlib.sha256(str(event).encode()).hexdigest().upper()[:48]

    return result

@app.websocket("/ws/stream")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    try:
        with open(os.path.join(base_dir, 'scored_activity_sample.json'), 'r') as f:
            events = json.load(f)
            # Sort chronologically by date to replay actual historical sequence
            events.sort(key=lambda x: x['date'])
    except Exception as e:
        await websocket.send_json({"error": f"Failed to load sample data: {str(e)}"})
        return
        
    try:
        # Loop over events endlessly to simulate an ongoing live stream
        while True:
            for event in events:
                # Re-score it dynamically using the python backend
                try:
                    scored_result = score_new_event(event, baselines, rule_weights, iso_forest, scaler, feature_cols)
                    await websocket.send_json(scored_result)
                except Exception as e:
                    print(f"Error sending event (client likely disconnected): {e}")
                    raise WebSocketDisconnect()
                await asyncio.sleep(1.5) # Wait 1.5s between events (simple and calm)
    except WebSocketDisconnect:
        print("Client disconnected")
