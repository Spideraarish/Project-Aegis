# Project Aegis 🛡️

**Next-Generation SOC Identity Ledger with Quantum-Safe Infrastructure & AI Behavioral Telemetry**

Project Aegis is an advanced Security Operations Center (SOC) dashboard and backend intelligence system. It combines real-time behavioral analytics with post-quantum cryptography to actively monitor identity threats, detect anomalies via unsupervised machine learning, and isolate compromised sessions instantly.

## 🚀 Key Features

- **Unsupervised Behavioral AI**: Utilizes dynamic Isolation Forest algorithms to instantly baseline employee behavior and detect massive query volume spikes, unusual geolocations, or off-hours access.
- **Quantum Defense Grid (PQC)**: Incorporates Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM) and ML-DSA to ensure "Harvest Now, Decrypt Never" protection for the Identity Ledger.
- **Deception Intercepts (Honeytokens)**: Seamlessly blends fake credentials and decoy AWS databases into the environment. Interacting with these instantly spikes the behavioral risk score to 100%, flagging the user as a critical threat.
- **Unified Identity Ledger**: Merges cryptographic state, behavioral risk telemetry, and active threat containment into a single, cohesive glassmorphic UI.

## 💻 Tech Stack

### Frontend
- **React.js & Vite**: Ultra-fast frontend framework and build tool.
- **Tailwind CSS**: Custom styling with glassmorphism, bespoke CSS animations, and high-tech gradients.
- **Recharts & Lucide-React**: Real-time data visualization and crisp vector iconography.

### Backend & AI
- **Python & FastAPI**: High-performance asynchronous API and WebSocket server (`ws://localhost:8000/ws/stream`).
- **Scikit-Learn**: Implementing `IsolationForest` for unsupervised anomaly detection.
- **Pandas & NumPy**: Fast data ingestion and baseline scoring.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- Python (3.9+)

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/project-aegis.git
   cd "Project Aegis"
   ```

2. **Start the Frontend:**
   ```bash
   npm install
   npm run dev
   ```
   The dashboard will be available at `http://localhost:5173/`.

3. **Start the Backend (Telemetry Stream):**
   *(Ensure you have your python environment activated)*
   ```bash
   pip install -r backend/requirements.txt
   python backend/main.py
   ```
   The WebSocket stream will begin broadcasting to the frontend on port 8000.

## 🛡️ Architecture & Threat Containment
Aegis operates statelessly; the backend Isolation Forest scores each event against pre-calculated baselines asynchronously. When a threat is isolated via the SOC dashboard, the system simulates a symmetric key rotation secured by the Lattice algorithm to prevent retroactive decryption.
