import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Compass, Grid, History, Bell, User,
  ShieldAlert, ShieldCheck, BrainCircuit, Crosshair, 
  LockKeyhole, Activity, Fingerprint, MoreVertical, 
  ChevronDown, Server, Network, AlertTriangle, CheckCircle2,
  Terminal, Shield, Zap, Target, Check, X, Clock, Database, Users, Trash, Cpu, Lock, Unlock
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  ReferenceLine, CartesianGrid, BarChart, Bar, Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const mockTelemetry = [
  { time: '08:00', risk: 12, volume: 120 }, { time: '08:30', risk: 11, volume: 135 },
  { time: '09:00', risk: 14, volume: 150 }, { time: '09:30', risk: 15, volume: 140 },
  { time: '10:00', risk: 18, volume: 210 }, { time: '10:30', risk: 17, volume: 190 },
  { time: '11:00', risk: 22, volume: 180 }, { time: '11:30', risk: 35, volume: 250 },
  { time: '12:00', risk: 89, volume: 600 }, { time: '12:30', risk: 95, volume: 650 },
  { time: '13:00', risk: 92, volume: 400 }, { time: '13:30', risk: 98, volume: 300 }
];

const behavioralData = [
  { subject: 'API Volume', A: 120, B: 40, fullMark: 150 },
  { subject: 'Query Size', A: 98, B: 30, fullMark: 150 },
  { subject: 'Geo Anomaly', A: 86, B: 20, fullMark: 150 },
  { subject: 'Auth Speed', A: 99, B: 50, fullMark: 150 },
  { subject: 'Time Access', A: 85, B: 45, fullMark: 150 },
];

// Dynamic Users Data from Baseline
import employeeBaselines from '../employee_baselines.json';

const mockUsers = Object.entries(employeeBaselines).map(([emp_id, info]) => {
  const isHighRisk = emp_id === 'EMP007' || emp_id === 'EMP015' || emp_id === 'EMP025';
  return {
    id: emp_id,
    name: `User ${emp_id}`,
    role: info.role.includes('Admin') ? 'Admin' : 'Employee',
    dept: info.role.replace('_', ' '),
    risk: isHighRisk ? 98 : 0,
    status: isHighRisk ? 'Critical' : 'Active',
    activity: isHighRisk ? 'Anomalous Activity Detected' : 'Awaiting telemetry...',
    pendingRequest: info.role.includes('Admin') ? 'Core_Vault_01' : null
  };
});

// Soft glass container
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/30 backdrop-blur-[40px] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] rounded-[24px] ${className}`}>
    {children}
  </div>
);



const QuantumSimulation = ({ quantumLogs }) => {
  const [simState, setSimState] = useState('idle'); // idle, normal, rsa, pqc
  const [packetPos, setPacketPos] = useState(0); // 0 (start), 1 (middle), 2 (intercepted), 3 (vault)
  const [attackProgress, setAttackProgress] = useState(0);
  const [attackResult, setAttackResult] = useState(null); // null, 'cracked', 'held'

  const resetSim = () => {
    setSimState('idle');
    setPacketPos(0);
    setAttackProgress(0);
    setAttackResult(null);
  };

  const runNormal = () => {
    resetSim();
    setSimState('normal');
    setTimeout(() => setPacketPos(1), 500);
    setTimeout(() => setPacketPos(3), 1500);
    setTimeout(() => setSimState('idle'), 3000);
  };

  const runRSA = () => {
    resetSim();
    setSimState('rsa');
    setTimeout(() => setPacketPos(1), 500);
    setTimeout(() => setPacketPos(2), 1000); // Intercepted
    
    // Shor's Algorithm running
    let prog = 0;
    const interval = setInterval(() => {
      prog += 25;
      setAttackProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setAttackResult('cracked');
      }
    }, 400);
  };

  const runPQC = () => {
    resetSim();
    setSimState('pqc');
    setTimeout(() => setPacketPos(1), 500);
    setTimeout(() => setPacketPos(2), 1000); // Intercepted
    
    // Shor's Algorithm failing
    let prog = 0;
    const interval = setInterval(() => {
      prog += 15;
      setAttackProgress(prog);
      if (prog >= 45) {
        clearInterval(interval);
        setAttackResult('held');
        setTimeout(() => setPacketPos(3), 1000);
        setTimeout(() => resetSim(), 4000);
      }
    }, 400);
  };

  const runDSA = () => {
    resetSim();
    setSimState('dsa');
    setTimeout(() => setPacketPos(1), 500);
    setTimeout(() => setPacketPos(2), 1000); // Intercepted for signature validation
    
    let prog = 0;
    const interval = setInterval(() => {
      prog += 20;
      setAttackProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setAttackResult('dsa_verified');
        setTimeout(() => setPacketPos(3), 1000);
        setTimeout(() => resetSim(), 4000);
      }
    }, 400);
  };

  return (
    <GlassCard className="flex-1 p-8 shadow-2xl relative overflow-hidden flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="flex justify-between items-center z-10 border-b border-white/20 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-indigo-600" />
            Interactive Quantum Threat Simulator
          </h2>
          <p className="text-slate-500 font-mono mt-2">FIPS 204 ML DSA-65 & FIPS 203 ML KEM-512 ACTIVE</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 flex-1">
        {/* Left Side: Controls & Info (Full height matching visualizer) */}
        <div className="lg:col-span-1 flex flex-col h-full">
          <div className="bg-white/40 border border-white/60 rounded-2xl p-5 backdrop-blur-md shadow-sm h-full flex flex-col justify-between">
            <div className="flex flex-col h-full flex-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Select Scenario</h3>
              <div className="flex flex-col gap-4 flex-1">
                <button 
                  onClick={runNormal}
                  disabled={simState !== 'idle'}
                  className="flex-1 flex items-center justify-between px-5 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors disabled:opacity-50 text-left"
                >
                  <div>
                    <div className="font-semibold text-base">Normal Flow</div>
                    <div className="text-xs text-slate-400">Standard safe encryption.</div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                </button>
                
                <button 
                  onClick={runRSA}
                  disabled={simState !== 'idle'}
                  className="flex-1 flex items-center justify-between px-5 py-2 rounded-xl bg-rose-500/10 text-rose-700 border border-rose-500/20 hover:bg-rose-500/20 transition-colors disabled:opacity-50 text-left"
                >
                  <div>
                    <div className="font-semibold text-base">RSA-2048 Attack (SNDL)</div>
                    <div className="text-xs opacity-80">Shor's Algorithm breaking RSA.</div>
                  </div>
                  <AlertTriangle className="w-6 h-6 shrink-0" />
                </button>

                <button 
                  onClick={runPQC}
                  disabled={simState !== 'idle'}
                  className="flex-1 flex items-center justify-between px-5 py-2 rounded-xl bg-indigo-500/10 text-indigo-700 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors disabled:opacity-50 text-left"
                >
                  <div>
                    <div className="font-semibold text-base">Aegis ML KEM-512</div>
                    <div className="text-xs opacity-80">Quantum key encapsulation.</div>
                  </div>
                  <Shield className="w-6 h-6 shrink-0" />
                </button>

                <button 
                  onClick={runDSA}
                  disabled={simState !== 'idle'}
                  className="flex-1 flex items-center justify-between px-5 py-2 rounded-xl bg-purple-500/10 text-purple-700 border border-purple-500/20 hover:bg-purple-500/20 transition-colors disabled:opacity-50 text-left"
                >
                  <div>
                    <div className="font-semibold text-base">Aegis ML DSA-65</div>
                    <div className="text-xs opacity-80">Post-quantum digital signature.</div>
                  </div>
                  <Fingerprint className="w-6 h-6 shrink-0" />
                </button>
              </div>
            </div>

            {simState !== 'idle' && (
              <button onClick={resetSim} className="text-xs text-center text-slate-500 hover:text-slate-800 mt-4 font-medium py-1">
                Reset Simulator
              </button>
            )}
          </div>
        </div>
        
        {/* Right Side: Visualizer (Wider 2/3 column) */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden flex flex-col shadow-2xl min-h-[520px]">
          
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
          
          {/* Attacker Node (Drops down if attack) */}
          <div className={`absolute top-6 left-[40%] -translate-x-1/2 transition-all duration-700 flex flex-col items-center ${simState === 'rsa' || simState === 'pqc' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-90'}`}>
            <div className="w-16 h-16 rounded-2xl bg-rose-950 border border-rose-500 flex items-center justify-center shadow-[0_0_40px_rgba(225,29,72,0.4)] z-20 relative">
              <Cpu className="w-8 h-8 text-rose-500" />
              <div className="absolute inset-0 rounded-2xl border border-rose-500 animate-ping opacity-20" />
            </div>
            <div className="text-rose-500 font-mono text-xs mt-3 font-bold bg-slate-950 px-3 py-1 rounded-full border border-rose-900 shadow-sm z-20">QUANTUM ADVERSARY</div>
          </div>
          
          {/* Main Horizontal Track */}
          <div className="absolute top-[60%] left-[15%] right-[15%] h-1 bg-slate-800 rounded-full -translate-y-1/2 z-0 overflow-hidden">
            <div className={`h-full bg-indigo-500/50 w-[35%] transition-all duration-1000 ${packetPos > 0 ? 'translate-x-0' : '-translate-x-full'}`} />
            <div className={`h-full bg-emerald-500/50 w-[40%] ml-auto transition-all duration-1000 delay-500 ${packetPos === 3 ? 'translate-x-0' : 'translate-x-full'}`} />
          </div>
          
          {/* Intercept Beam */}
          <div className={`absolute top-24 bottom-[40%] left-[40%] w-1 -translate-x-1/2 transition-all duration-500 bg-gradient-to-b from-rose-500/80 to-transparent z-0 ${(simState === 'rsa' || simState === 'pqc') && packetPos >= 1 ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />

          {/* Nodes Container */}
          <div className="absolute top-[60%] -translate-y-1/2 left-0 right-0 flex items-center justify-between px-[10%] z-10">
            {/* Employee Node */}
            <div className="flex flex-col items-center w-24">
              <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center z-10 relative">
                <User className="w-8 h-8 text-slate-400" />
                {packetPos === 0 && <div className="absolute inset-0 rounded-full border border-slate-500 animate-ping opacity-30" />}
              </div>
              <div className="text-slate-400 font-mono text-xs mt-3 font-semibold tracking-wider">EMPLOYEE</div>
            </div>
            
            {/* Encryption Node */}
            <div className="flex flex-col items-center w-32 relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-150" />
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-indigo-500 flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="text-indigo-400 font-mono text-xs mt-3 text-center font-bold tracking-wider relative z-10">ENCRYPTION<br/>LAYER</div>
            </div>

            {/* Vault Node */}
            <div className="flex flex-col items-center w-24 relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-150" />
              <div className="w-20 h-20 rounded-xl bg-slate-900 border-2 border-emerald-500 flex items-center justify-center z-10 relative shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                <Database className="w-10 h-10 text-emerald-400" />
              </div>
              <div className="text-emerald-400 font-mono text-xs mt-3 font-bold tracking-wider relative z-10">QUANTUM<br/>VAULT</div>
            </div>
          </div>

          {/* Floating Attack Progress & Results */}
          {(simState === 'rsa' || simState === 'pqc') && packetPos >= 1 && (
            <div className="absolute top-[35%] left-[40%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-40 w-full pointer-events-none">
              
              {/* Shor's Algorithm Progress */}
              {packetPos === 2 && attackResult === null && (
                <div className="w-56 bg-slate-900/90 backdrop-blur-md rounded-full h-3 border border-slate-700 overflow-hidden relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-300" 
                    style={{ width: `${attackProgress}%` }}
                  />
                </div>
              )}
              
              {/* Attack Results Text */}
              {attackResult === 'cracked' && (
                <div className="text-rose-500 font-mono text-xs font-bold animate-in zoom-in text-center bg-rose-950/90 backdrop-blur-md px-6 py-3 rounded-xl border border-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.6)]">
                  <span className="text-rose-400 block mb-1">SHOR'S ALGORITHM SUCCESS</span>
                  <span className="text-white text-sm">RSA-2048 BROKEN</span>
                </div>
              )}
              {attackResult === 'held' && (
                <div className="text-indigo-400 font-mono text-xs font-bold animate-in zoom-in text-center bg-indigo-950/90 backdrop-blur-md px-6 py-3 rounded-xl border border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                  <span className="text-indigo-300 block mb-1">LATTICE ENCAPSULATION HELD</span>
                  <span className="text-white text-sm">ATTACK FAILED</span>
                </div>
              )}
              {attackResult === 'dsa_verified' && (
                <div className="text-purple-400 font-mono text-xs font-bold animate-in zoom-in text-center bg-purple-950/90 backdrop-blur-md px-6 py-3 rounded-xl border border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                  <span className="text-purple-300 block mb-1">FIPS 204 ML DSA-65 VERIFIED</span>
                  <span className="text-white text-sm">IDENTITY AUTHENTICATED</span>
                </div>
              )}
            </div>
          )}

          {/* Data Packet */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out flex items-center justify-center z-30"
            style={{
              left: packetPos === 0 ? '15%' : packetPos === 1 ? '40%' : packetPos === 2 ? '40%' : '85%',
              top: packetPos === 2 ? '60%' : '60%',
              opacity: packetPos === 0 && simState === 'idle' ? 0 : 1,
              transform: `translate(-50%, -50%) scale(${packetPos === 2 ? 1.4 : 1})`
            }}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              packetPos === 0 ? 'bg-slate-300 shadow-[0_0_15px_rgba(203,213,225,0.6)]' : 
              attackResult === 'cracked' ? 'bg-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.9)]' : 
              'bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.9)]'
            }`}>
              {packetPos > 0 && attackResult !== 'cracked' && <Lock className="w-5 h-5 text-white" />}
              {attackResult === 'cracked' && <Unlock className="w-5 h-5 text-white animate-pulse" />}
            </div>
          </div>
          
          {/* Bottom Explanation Panel */}
          <div className="mt-auto pt-8 z-20">
            <div className="bg-slate-950/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 text-center">
              {simState === 'idle' && (
                <p className="text-slate-400 text-sm">Select a scenario on the left to begin the simulation.</p>
              )}
              {simState === 'normal' && (
                <p className="text-emerald-400 text-sm font-medium">
                  Normal Operation: Data is encrypted and safely stored in the vault.<br/>
                  <span className="text-slate-400 text-xs font-normal">No active threats detected.</span>
                </p>
              )}
              {simState === 'rsa' && attackResult !== 'cracked' && (
                <p className="text-amber-400 text-sm font-medium">
                  SNDL Attack: Attacker intercepts standard AES/RSA encrypted data.<br/>
                  <span className="text-slate-400 text-xs font-normal">A quantum computer begins factoring the prime numbers to break the key...</span>
                </p>
              )}
              {simState === 'rsa' && attackResult === 'cracked' && (
                <p className="text-rose-400 text-sm font-medium">
                  Data Compromised: The quantum computer broke the AES/RSA encryption in seconds.<br/>
                  <span className="text-slate-400 text-xs font-normal">The attacker now has full access to the plain text data.</span>
                </p>
              )}
              {simState === 'pqc' && attackResult !== 'held' && (
                <p className="text-amber-400 text-sm font-medium">
                  Quantum Attack: Attacker intercepts Aegis ML-KEM encrypted data.<br/>
                  <span className="text-slate-400 text-xs font-normal">A quantum computer attempts to break the multi-dimensional lattice...</span>
                </p>
              )}
              {simState === 'pqc' && attackResult === 'held' && (
                <p className="text-indigo-400 text-sm font-medium">
                  Data Secured: The complex ML-KEM lattice cannot be broken by Shor's Algorithm.<br/>
                  <span className="text-slate-400 text-xs font-normal">The encrypted data remains perfectly safe inside the Quantum Vault.</span>
                </p>
              )}
              {simState === 'dsa' && attackResult !== 'dsa_verified' && (
                <p className="text-purple-400 text-sm font-medium">
                  Digital Signature Check: Validating identity using FIPS 204 ML DSA-65.<br/>
                  <span className="text-slate-400 text-xs font-normal">Attacker attempts to forge identity signature key...</span>
                </p>
              )}
              {simState === 'dsa' && attackResult === 'dsa_verified' && (
                <p className="text-purple-400 text-sm font-medium">
                  Identity Authenticated: ML DSA-65 signature verified authentic.<br/>
                  <span className="text-slate-400 text-xs font-normal">Quantum computers cannot forge lattice-based identity proofs.</span>
                </p>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </GlassCard>
  );
};

const UserDatabase = ({ usersList, setUsersList }) => {
  const [authStatus, setAuthStatus] = useState('pending');
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = usersList.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 flex-1 h-full animate-in fade-in duration-500 relative">
      {/* Centered Popup Modal Overlay */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedUser(null)} />
          
          <div className="relative w-full max-w-md h-full bg-white/70 backdrop-blur-[60px] border-l border-white/50 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] p-8 flex flex-col overflow-y-auto animate-slide-in-right">
            <div className="flex justify-between items-start mb-8 shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{selectedUser.name}</h3>
                <p className="font-mono text-sm text-slate-500 mt-1">{selectedUser.id} • {selectedUser.dept}</p>
              </div>
              <button onClick={() => setSelectedUser(null)} className="p-2.5 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm text-slate-400 hover:text-slate-700 hover:bg-white transition-all border border-white/60">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-white/50 border border-white p-5 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-700">Behavioral Risk Profile</span>
                  <span className={`font-mono font-bold text-xl ${selectedUser.risk > 75 ? 'text-rose-500' : selectedUser.risk > 40 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {Math.round(selectedUser.risk)}/100
                  </span>
                </div>
                <div className="w-full bg-slate-200/50 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${selectedUser.risk > 75 ? 'bg-rose-500' : selectedUser.risk > 40 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    style={{ width: `${selectedUser.risk}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-4 leading-relaxed font-medium">
                  {selectedUser.risk > 75 ? 'Critical anomalies detected in API volume and resource access.' : selectedUser.risk > 40 ? 'Elevated access patterns outside normal baseline.' : 'Behavior matches historical AI baselines.'}
                </p>
              </div>

              {/* Optional Pending Request */}
              {selectedUser.pendingRequest && (
                <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-2xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[30px] -mr-10 -mt-10 pointer-events-none" />
                  <h4 className="text-sm font-semibold text-indigo-900 mb-1 flex items-center gap-2 relative z-10">
                    <LockKeyhole className="w-4 h-4 text-indigo-500" /> Pending Access Request
                  </h4>
                  <p className="text-xs text-indigo-700 font-medium mb-4 relative z-10">
                    Target: <span className="font-mono bg-white/60 px-1.5 py-0.5 rounded text-indigo-900 border border-white/50">{selectedUser.pendingRequest}</span>
                  </p>
                  
                  <div className="flex items-start gap-2 bg-rose-50/50 p-3 rounded-xl border border-rose-100/50 mb-4 relative z-10">
                    <BrainCircuit className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-rose-700 font-medium leading-relaxed">
                      AI Warning: Authorizing this access deviates from baseline behavior and will elevate Risk Score by +40.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      const updatedUsers = usersList.map(u => 
                        u.id === selectedUser.id ? { ...u, risk: Math.min(100, u.risk + 40), pendingRequest: null } : u
                      );
                      setUsersList(updatedUsers);
                      setSelectedUser({ ...selectedUser, risk: Math.min(100, selectedUser.risk + 40), pendingRequest: null });
                    }}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-2 relative z-10"
                  >
                    <Check className="w-4 h-4" /> Authorize & Accept Risk
                  </button>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-400" /> Recent Activity Logs
                </h4>
                <div className="bg-slate-900 rounded-[16px] p-4 font-mono text-xs text-slate-300 shadow-inner flex flex-col gap-2.5">
                  <div className="flex gap-2 border-b border-slate-700/50 pb-2.5">
                    <span className="text-slate-500 shrink-0">[10:42:01]</span>
                    <span className="text-slate-300">Session authenticated via SSO</span>
                  </div>
                  <div className="flex gap-2 border-b border-slate-700/50 pb-2.5">
                    <span className="text-slate-500 shrink-0">[10:45:11]</span>
                    <span className="text-slate-300">Navigating identity ledger</span>
                  </div>
                  <div className="flex gap-2 text-rose-400">
                    <span className="text-slate-500 shrink-0">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                    <span className="font-semibold">{selectedUser.activity}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <button 
                  onClick={() => {
                    const updatedUsers = usersList.map(u => 
                      u.id === selectedUser.id ? { ...u, status: 'Quarantined', risk: 100 } : u
                    );
                    setUsersList(updatedUsers);
                    setSelectedUser({ ...selectedUser, status: 'Quarantined', risk: 100 });
                  }}
                  className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-[16px] shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <ShieldAlert className="w-5 h-5" /> Terminate Session & Isolate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar for User Database */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-800 tracking-tight">Identity Intelligence</h2>
            <p className="text-xs text-slate-500 font-medium">Real-time workforce behavioral monitoring</p>
          </div>
        </div>
        
        {/* Search Bar moved here */}
        <div className="flex-1 max-w-4xl mx-4 lg:mx-12 hidden md:flex items-center bg-white/40 border border-white/60 rounded-full px-4 py-2.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] backdrop-blur-md">
          <Search className="w-4 h-4 text-slate-500 mr-2" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search employees, IDs, or departments..." 
            className="bg-transparent border-none outline-none w-full text-sm placeholder:text-slate-500 text-slate-800 font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Pending Authorizations Panel - Spans 12 cols */}
        <div className="lg:col-span-12">
          <GlassCard className="p-6 border-rose-200/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-2xl ${authStatus === 'pending' ? 'bg-rose-50 text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.2)]' : 'bg-emerald-50 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]'}`}>
                  {authStatus === 'pending' ? <ShieldAlert className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                    Authorization Request: <span className="font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Core_DB_01</span>
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Requested by <span className="font-medium text-slate-700">Elena Rostova (ADM_422)</span> • Dept: SecOps
                  </p>
                  {authStatus === 'pending' ? (
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-lg">
                      <BrainCircuit className="w-4 h-4 animate-pulse" />
                      AI FLAG: High Risk - Anomalous time of access. Expected risk score spike.
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4" />
                      AI FLAG CLEARED - Exception granted by User. Risk score normalized.
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setAuthStatus('denied')}
                  disabled={authStatus !== 'pending'}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${authStatus === 'pending' ? 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm' : 'opacity-50 cursor-not-allowed bg-slate-100 text-slate-400'}`}
                >
                  <X className="w-4 h-4" /> Deny
                </button>
                <button 
                  onClick={() => setAuthStatus('approved')}
                  disabled={authStatus !== 'pending'}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${authStatus === 'pending' ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]' : 'bg-emerald-500 text-white shadow-sm'}`}
                >
                  {authStatus === 'pending' ? <Check className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                  {authStatus === 'pending' ? 'Override & Approve' : 'Approved'}
                </button>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Identity Ledger Table - Spans 12 cols */}
        <div className="lg:col-span-12">
          <GlassCard className="p-0 overflow-hidden flex flex-col h-full min-h-[400px]">
            <div className="p-6 border-b border-white/50 flex justify-between items-center bg-white/10">
              <h3 className="text-lg font-semibold text-slate-800">Identity Ledger</h3>
              <div className="flex gap-2">
                <button className="text-xs font-semibold bg-white/60 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-white text-slate-600 flex items-center gap-1.5 hover:bg-white transition-colors">
                  <Database className="w-4 h-4" /> Export Ledger
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 font-medium bg-slate-50/50 backdrop-blur-sm border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">Identity</th>
                    <th className="px-6 py-4">Role & Dept</th>
                    <th className="px-6 py-4">Behavioral Risk Score</th>
                    <th className="px-6 py-4">Current Activity</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/50 bg-white/20">
                  {filteredUsers.map((user, i) => (
                    <tr key={i} onClick={() => setSelectedUser(user)} className="hover:bg-white/60 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-800">{user.name}</div>
                        <div className="font-mono text-xs text-slate-500 mt-0.5">{user.id}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${user.role === 'Admin' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                            {user.role}
                          </span>
                          <span className="text-slate-500 text-xs font-medium">{user.dept}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono font-semibold w-16 ${user.risk > 75 ? 'text-rose-500' : user.risk > 40 ? 'text-amber-500' : 'text-emerald-500'}`}>
                            {Math.round(user.risk)}/100
                          </span>
                          <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${user.risk > 75 ? 'bg-rose-500' : user.risk > 40 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                              style={{ width: `${user.risk}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {user.activity}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`px-3 py-1 rounded-md text-xs font-semibold ${user.status === 'Critical' ? 'bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)] animate-pulse' : user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

// Minimal stat card
const StatCard = ({ title, value, subtext, icon: Icon, colorClass, trend }) => (
  <GlassCard className="p-5 flex flex-col justify-between h-full">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 rounded-2xl`}>
        <Icon className={`w-5 h-5 ${colorClass}`} strokeWidth={1.5} />
      </div>
      {trend && <span className="text-xs font-medium text-slate-400 bg-white/50 px-2 py-1 rounded-lg">{trend}</span>}
    </div>
    <div>
      <h4 className="text-2xl font-semibold text-slate-800 tracking-tight">{value}</h4>
      <div className="flex items-center justify-between mt-1">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        {subtext && <p className="text-xs text-slate-400">{subtext}</p>}
      </div>
    </div>
  </GlassCard>
);

export default function App() {
  const [time, setTime] = useState(new Date());
  const [chartView, setChartView] = useState('24H');
  const [activePage, setActivePage] = useState('dashboard');
  const [deleteAttempt, setDeleteAttempt] = useState(null);

  const [usersList, setUsersList] = useState(mockUsers);
  const [telemetryData, setTelemetryData] = useState([]);
  const [mainThreatKilled, setMainThreatKilled] = useState(false);

  const triggerSimulation = () => {
    // Phase 1 (0ms) - Initial Anomaly (Supply Chain Worm)
    setTimeout(() => {
      const t = new Date().toLocaleTimeString([], { hour12: false });
      setTelemetryData(prev => [...prev, { time: t.slice(0, 8), risk: 65, volume: 500 }].slice(-20));
      setGlobalStats(prev => ({...prev, totalEvents: prev.totalEvents + 1, avgRisk: 45}));
      setActiveAlerts(prev => [{ id: `ALT-WRN-${Math.floor(Math.random()*1000)}`, user: 'EMP001', trap: 'Abnormal Volume Spike', ip: '10.0.0.99', time: 'Just now', severity: 'warning' }, ...prev].slice(0, 4));
    }, 0);

    // Phase 2 (800ms) - Lateral Movement (Worm spreading)
    setTimeout(() => {
      const t = new Date().toLocaleTimeString([], { hour12: false });
      setTelemetryData(prev => [...prev, { time: t.slice(0, 8), risk: 85, volume: 2000 }].slice(-20));
      setLiveRadar([
        { subject: 'API Volume', A: 100, B: 40, fullMark: 150 },
        { subject: 'Anomaly Score', A: 80, B: 30, fullMark: 150 },
        { subject: 'Rule Score', A: 40, B: 20, fullMark: 150 },
        { subject: 'Sensitivity', A: 60, B: 50, fullMark: 150 },
        { subject: 'Geo Anomaly', A: 40, B: 45, fullMark: 150 },
      ]);
      setUsersList(prevList => prevList.map(u => 
        ['EMP001', 'EMP002', 'EMP003'].includes(u.id) ? { ...u, risk: 85, status: 'Active', activity: 'Lateral Movement Detected' } : u
      ));
      setHoneytokens(prev => {
        const next = [...prev];
        next[42] = true; next[17] = true;
        return next;
      });
    }, 800);

    // Phase 3 (1800ms) - Insider Threat Data Exfiltration
    setTimeout(() => {
      const t = new Date().toLocaleTimeString([], { hour12: false });
      setTelemetryData(prev => [...prev, { time: t.slice(0, 8), risk: 92, volume: 3000 }].slice(-20));
      setLiveRadar([
        { subject: 'API Volume', A: 120, B: 40, fullMark: 150 },
        { subject: 'Anomaly Score', A: 150, B: 30, fullMark: 150 },
        { subject: 'Rule Score', A: 40, B: 20, fullMark: 150 },
        { subject: 'Sensitivity', A: 90, B: 50, fullMark: 150 },
        { subject: 'Geo Anomaly', A: 150, B: 45, fullMark: 150 },
      ]);
      setActiveAlerts(prev => [{ id: `ALT-GEO-${Math.floor(Math.random()*1000)}`, user: 'EMP007', trap: 'Massive DB Export (Admin)', ip: '198.51.100.14', time: 'Just now', severity: 'critical' }, ...prev].slice(0, 4));
      setUsersList(prevList => prevList.map(u => u.id === 'EMP007' ? { ...u, risk: 95, status: 'Active', activity: 'Abnormal Geo-Login / DB Export' } : u));
    }, 1800);

    // Phase 4 (2800ms) - Ransomware Speed Run
    setTimeout(() => {
      const t = new Date().toLocaleTimeString([], { hour12: false });
      setTelemetryData(prev => [...prev, { time: t.slice(0, 8), risk: 98, volume: 4500 }].slice(-20));
      setLiveRadar([
        { subject: 'API Volume', A: 140, B: 40, fullMark: 150 },
        { subject: 'Anomaly Score', A: 150, B: 30, fullMark: 150 },
        { subject: 'Rule Score', A: 150, B: 20, fullMark: 150 },
        { subject: 'Sensitivity', A: 150, B: 50, fullMark: 150 },
        { subject: 'Geo Anomaly', A: 150, B: 45, fullMark: 150 },
      ]);
      setActiveAlerts(prev => [{ id: `ALT-RANSOM-${Math.floor(Math.random()*1000)}`, user: 'EMP015', trap: 'High-Freq File Encryption', ip: '10.0.1.22', time: 'Just now', severity: 'critical' }, ...prev].slice(0, 4));
      setUsersList(prevList => prevList.map(u => u.id === 'EMP015' ? { ...u, risk: 99, status: 'Critical', activity: 'Ransomware Execution' } : u));
      setHoneytokens(prev => {
        const next = [...prev];
        next[55] = true; next[2] = true; next[99] = true;
        return next;
      });
    }, 2800);

    // Phase 5 (3800ms) - Full Lockdown (Aegis Action)
    setTimeout(() => {
      const t = new Date().toLocaleTimeString([], { hour12: false });
      setTelemetryData(prev => [...prev, { time: t.slice(0, 8), risk: 100, volume: 5500 }].slice(-20));
      setGlobalStats(prev => ({...prev, activeThreats: prev.activeThreats + 3, systems: prev.systems + 12, avgRisk: 99}));
      
      setQuantumLogs(prev => [
        { id: Date.now()+1, time: t, msg: `CRITICAL: Ransomware isolated.`, signature: "0xPQC" + Math.random().toString(16).slice(2, 10).toUpperCase(), risk_tier: "HIGH" },
        { id: Date.now()+2, time: t, msg: `CRITICAL: Data Exfil stopped.`, signature: "0xPQC" + Math.random().toString(16).slice(2, 10).toUpperCase(), risk_tier: "HIGH" },
        { id: Date.now()+3, time: t, msg: `CRITICAL: Worm propagation halted.`, signature: "0xPQC" + Math.random().toString(16).slice(2, 10).toUpperCase(), risk_tier: "HIGH" },
        ...prev
      ].slice(0, 8));

      setAuditLogs(prev => [
        { id: Date.now()+1, action: 'Multi-Vector Attack - ALL SESSIONS KILLED', target: 'GLOBAL', time: t, status: 'warning' },
        ...prev
      ].slice(0, 5));
      
      setUsersList(prevList => prevList.map(u => 
        ['EMP001', 'EMP002', 'EMP003', 'EMP004', 'EMP005', 'EMP007', 'EMP015'].includes(u.id) ? { ...u, risk: 100, status: 'Critical', activity: 'Aegis Quantum Lockdown Executed' } : u
      ));
      setHoneytokens(prev => {
        const next = [...prev];
        next[88] = true; next[5] = true; next[23] = true; next[77] = true;
        return next;
      });
      setMainThreatKilled(true);
    }, 3800);
  };

  const resetSimulation = () => {
    setMainThreatKilled(false);
    setUsersList(mockUsers);
    setTelemetryData([]);
    setQuantumLogs([]);
    setActiveAlerts([]);
    setAuditLogs([]);
    setHoneytokens(Array.from({ length: 100 }, () => false));
    setGlobalStats({ totalEvents: 0, activeThreats: 0, avgRisk: 0, systems: 0 });
    setLiveRadar([
      { subject: 'API Volume', A: 0, B: 40, fullMark: 150 },
      { subject: 'Anomaly Score', A: 0, B: 30, fullMark: 150 },
      { subject: 'Rule Score', A: 0, B: 20, fullMark: 150 },
      { subject: 'Sensitivity', A: 0, B: 50, fullMark: 150 },
      { subject: 'Geo Anomaly', A: 0, B: 45, fullMark: 150 },
    ]);
  };
  
  const [globalStats, setGlobalStats] = useState({
    totalEvents: 0,
    activeThreats: 0,
    avgRisk: 0,
    systems: 0
  });

  const [honeytokens, setHoneytokens] = useState(Array.from({ length: 100 }, () => false));
  const [liveRadar, setLiveRadar] = useState([
    { subject: 'API Volume', A: 0, B: 40, fullMark: 150 },
    { subject: 'Anomaly Score', A: 0, B: 30, fullMark: 150 },
    { subject: 'Rule Score', A: 0, B: 20, fullMark: 150 },
    { subject: 'Sensitivity', A: 0, B: 50, fullMark: 150 },
    { subject: 'Geo Anomaly', A: 0, B: 45, fullMark: 150 },
  ]);

  const [quantumLogs, setQuantumLogs] = useState([]);
  const [activeAlerts, setActiveAlerts] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://project-aegis-rnw6.onrender.com/ws/stream");
    
    ws.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.error) return;

        const timeStr = new Date().toLocaleTimeString([], { hour12: false });
        
        // Push event to logs if high risk
        if (data.final_risk_score >= 35) {
          setQuantumLogs(prev => [...prev, {
            id: Date.now() + Math.random(),
            time: timeStr,
            msg: `ML Alert: ${data.reasons[0] || 'Anomalous behavior'}`,
            signature: data.signature,
            risk_tier: data.risk_tier
          }].slice(-8)); // keep last 8
        }

        // Push telemetry
        setTelemetryData(prev => [...prev, {
          time: timeStr.slice(0, 8), // 'HH:MM:SS'
          risk: data.final_risk_score,
          volume: data.event.num_files_downloaded || 0
        }].slice(-20)); // Keep last 20 points for a simple, working graph

        // Update global stats
        setGlobalStats(prev => ({
          ...prev,
          totalEvents: prev.totalEvents + 1,
          avgRisk: Math.round((prev.avgRisk * 9 + data.final_risk_score) / 10),
          activeThreats: data.final_risk_score >= 65 ? prev.activeThreats + 1 : prev.activeThreats,
          systems: prev.systems + (data.event.new_system_flag ? 1 : 0)
        }));

        // Update Radar
        setLiveRadar([
          { subject: 'API Volume', A: Math.min(150, data.event.num_files_downloaded || 0), B: 40, fullMark: 150 },
          { subject: 'Anomaly Score', A: Math.min(150, data.isolation_forest_score || 0), B: 30, fullMark: 150 },
          { subject: 'Rule Score', A: Math.min(150, (data.rule_score || 0) * 10), B: 20, fullMark: 150 },
          { subject: 'Sensitivity', A: Math.min(150, (data.event.sensitivity_score || 0) * 50), B: 50, fullMark: 150 },
          { subject: 'Geo Anomaly', A: data.event.new_system_flag ? 120 : 10, B: 45, fullMark: 150 },
        ]);

        // Trip honeytoken if risk > 25
        if (data.final_risk_score >= 25) {
          setHoneytokens(prev => {
            const next = [...prev];
            const unTripped = next.map((v, i) => v ? -1 : i).filter(i => i !== -1);
            if (unTripped.length > 0) {
              const randIdx = unTripped[Math.floor(Math.random() * unTripped.length)];
              next[randIdx] = true;
            }
            return next;
          });
        }

        // Push Audit Log
        setAuditLogs(prev => [{
          id: Date.now() + Math.random(),
          action: data.final_risk_score >= 25 ? 'High Risk Intercept' : 'Identity Verification',
          target: data.event.employee_id || 'Unknown',
          time: timeStr,
          status: data.final_risk_score >= 25 ? 'warning' : 'success'
        }, ...prev].slice(0, 5));

        // Update specific user risk in the User Database if it matches
        if (data.event.employee_id) {
          setUsersList(prevList => prevList.map(u => {
            if (u.id === data.event.employee_id) {
              return { 
                ...u, 
                risk: data.final_risk_score, 
                status: data.final_risk_score >= 65 ? 'Critical' : 'Active',
                activity: data.final_risk_score >= 65 ? 'Critical Threat Isolated' : (data.final_risk_score >= 35 ? data.reasons[0] || 'Anomalous Activity' : 'Normal Telemetry')
              };
            }
            return u;
          }));
        }

        // Push to active alerts if risk > 25
        if (data.final_risk_score >= 25) {
          setActiveAlerts(prev => [{
            id: `ALT-${Math.floor(Math.random()*1000)}`,
            user: data.event.employee_id || 'Unknown',
            trap: data.rule_reasons?.[0] || 'AI_Baseline_Deviation',
            ip: data.event.ip_address || '10.X.X.X',
            time: 'Just now',
            severity: 'critical'
          }, ...prev].slice(0, 4));
        }
      } catch (err) {
        console.error("WS parse error", err);
      }
    };

    return () => ws.close();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const quantumMsgs = [
      "Lattice parameter calibration...",
      "QKD key exchange successful...",
      "Kyber-1024 entropy check passed.",
      "Validating post-quantum signature...",
      "Dilithium verification: OK",
      "Symmetric key rotated safely."
    ];
    const timer = setInterval(() => {
      setQuantumLogs(prev => {
        const msg = quantumMsgs[Math.floor(Math.random() * quantumMsgs.length)];
        return [...prev, {
          id: Date.now() + Math.random(),
          time: new Date().toLocaleTimeString([], { hour12: false }),
          msg: msg,
          signature: "0xPQC" + Math.random().toString(16).slice(2, 10).toUpperCase()
        }].slice(-6); // Keep last 6 logs
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const maxRiskUser = usersList.find(u => u.risk >= 80);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F1F5F9] text-slate-800 font-sans selection:bg-blue-100 flex p-3 md:p-5 z-0">
      
      {/* Animated Background Mesh for true glassmorphism reveal */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-400/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-rose-300/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply animate-[spin_25s_linear_infinite_reverse]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-400/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply animate-[spin_30s_linear_infinite]" />

      <div className="relative w-full max-w-[1600px] mx-auto flex gap-6 z-10">
        
        {/* Floating Side Nav */}
        <aside className="hidden lg:flex flex-col items-center py-6 px-3 bg-white/30 backdrop-blur-[40px] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] rounded-[32px] gap-4 shrink-0 w-20">
          <nav className="flex flex-col gap-4 w-full items-center">
            {[Activity, Grid, Cpu].map((Icon, i) => {
              const pageName = i === 0 ? 'dashboard' : i === 1 ? 'users' : 'quantum';
              const isActive = activePage === pageName;
              return (
                <button 
                  key={i} 
                  onClick={() => setActivePage(pageName)}
                  className={`p-3 rounded-2xl transition-all shadow-md ${isActive ? 'bg-slate-900 text-white' : 'bg-white/50 text-slate-500 hover:bg-slate-900 hover:text-white'}`}
                  title={i === 0 ? 'Dashboard' : i === 1 ? 'Users' : 'Quantum'}
                >
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
                </button>
              );
            })}
            
            {/* Simulation Injector Button */}
            <div className="w-8 border-t border-slate-300/50 my-2"></div>
            <button 
              onClick={triggerSimulation}
              className="p-3 rounded-2xl transition-all shadow-md bg-rose-500/10 text-rose-600 hover:bg-rose-600 hover:text-white border border-rose-500/20 group relative"
              title="Inject Malware Simulation"
            >
              <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" strokeWidth={2} />
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col gap-6 h-full">
          
          {/* Top Command Bar */}
          <header className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight">Project Aegis</h1>
                <p className="text-xs text-slate-500 font-medium">Active Defense Center</p>
              </div>
            </div>



            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-sm font-semibold text-slate-700 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                System Active
              </div>
              <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 p-1.5 pr-4 shadow-sm cursor-pointer hover:bg-white/60 transition-colors">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-sm">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-800 leading-none">Admin / Manager</span>
                  <span className="text-[10px] text-slate-500 font-medium">SecOps Team</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area Routing */}
          {activePage === 'quantum' ? (
            <QuantumSimulation quantumLogs={quantumLogs} />
          ) : activePage === 'dashboard' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 animate-in fade-in duration-500">
            
            {/* Left Column (Main Data) - Spans 8 cols */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* KPIs Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard 
                  title="Events Analyzed" 
                  value={globalStats.totalEvents.toLocaleString()} 
                  trend="live"
                  icon={BrainCircuit} 
                  colorClass="text-indigo-600" 
                />
                <StatCard 
                  title="Active Honeytokens" 
                  value={globalStats.systems.toString()} 
                  trend={`${globalStats.activeThreats} tripped`}
                  icon={Crosshair} 
                  colorClass="text-rose-500" 
                />
                <StatCard 
                  title="Quantum Vault" 
                  value="Secured" 
                  subtext="ML-KEM Active"
                  icon={LockKeyhole} 
                  colorClass="text-emerald-600" 
                />
              </div>

              {/* Primary Telemetry Graph */}
              <GlassCard className="p-6 flex-1 min-h-[400px] flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Behavioral Risk Telemetry</h3>
                    <p className="text-sm text-slate-500 mt-1">Real-time analysis of Identity <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">Admin_ID_773A</span></p>
                  </div>
                  
                </div>

                <div className="flex flex-col xl:flex-row gap-6 flex-1 w-full h-full min-h-[250px]">
                  <div className="flex-1 w-full h-full min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={telemetryData.length > 0 ? telemetryData : [{ time: '00:00', risk: 0, volume: 0 }]} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="time" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} dx={-10} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}
                          itemStyle={{ color: '#0F172A', fontWeight: 600 }}
                        />
                        <ReferenceLine y={75} stroke="#F43F5E" strokeDasharray="4 4" label={{ position: 'insideTopLeft', value: 'CONTAINMENT THRESHOLD', fill: '#F43F5E', fontSize: 10, fontWeight: 600 }} />
                        <Area 
                          type="monotone" 
                          dataKey="risk" 
                          stroke="#ef4444" 
                          strokeWidth={3}
                          fillOpacity={1} 
                          fill="url(#riskGradient)" 
                          activeDot={{ r: 6, fill: '#ef4444', stroke: '#fff', strokeWidth: 2 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Behavioral Identity Radar */}
                  <div className="w-full xl:w-[35%] h-full min-h-[250px] flex flex-col justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="50%" data={liveRadar} margin={{ top: 10, right: 35, bottom: 10, left: 35 }}>
                        <PolarGrid stroke="#E2E8F0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 10, fontWeight: 600 }} />
                        <Radar name="Current Session" dataKey="A" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} />
                        <Radar name="Historical Baseline" dataKey="B" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </GlassCard>

              {/* Deception Triage Table */}
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-500" />
                    Deception Intercepts
                  </h3>
                </div>
                
                <div className="bg-slate-900 border border-slate-700 shadow-xl rounded-[16px] p-4 font-mono text-xs flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                  {activeAlerts.map((alert) => (
                    <div key={alert.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-300 border-b border-white/10 pb-2.5 pt-1 last:border-0 last:pb-0">
                      <span className="text-slate-500 shrink-0">[{alert.time}]</span>
                      <span className="text-rose-400 font-semibold shrink-0">{alert.id}</span>
                      <span className="text-slate-400 shrink-0 hidden sm:inline">Intercepted:</span>
                      <span className="text-white bg-white/10 px-1.5 py-0.5 rounded">{alert.user}</span>
                      <span className="text-slate-400 shrink-0">via</span>
                      <span className="text-emerald-400 font-medium">{alert.trap}</span>
                      <span className="text-slate-500 sm:ml-auto">IP: {alert.ip}</span>
                    </div>
                  ))}
                  <div className="flex gap-2 text-slate-500 animate-pulse mt-1 pt-1">
                    <span>&gt;</span>
                    <span>Monitoring deception network...</span>
                  </div>
                </div>
              </GlassCard>

              {/* Honeytoken Deployment Matrix */}
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                      <Target className="w-4 h-4 text-indigo-500" />
                      Honeytoken Deployment Matrix
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Seeded active defense nodes across infrastructure</p>
                  </div>
                  <div className="flex gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400"></div>Active (99)</div>
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>Tripped ({honeytokens.filter(Boolean).length})</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-10 sm:grid-cols-[repeat(20,minmax(0,1fr))] gap-2 sm:gap-3">
                  {honeytokens.map((isTripped, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-[4px] transition-all ${isTripped ? 'bg-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.8)] border border-rose-400' : 'bg-emerald-400/30 hover:bg-emerald-400/80 cursor-pointer border border-emerald-400/20'}`}
                    />
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Right Column (Context & Actions) - Spans 4 cols */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Action Panel - Matching the dark button from the original aesthetic */}
              {mainThreatKilled ? (
                <div className="bg-emerald-500 border border-emerald-400 shadow-[0_16px_40px_rgba(16,185,129,0.4)] text-white rounded-[24px] p-6 relative overflow-hidden flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Threat Quarantined</h3>
                    <p className="text-emerald-100 text-sm">Session completely isolated. Keys rotated.</p>
                  </div>
                </div>
              ) : maxRiskUser ? (
                <div className="bg-black/90 backdrop-blur-[40px] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-white rounded-[24px] p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/20 blur-[50px] rounded-full pointer-events-none" />
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <h3 className="text-rose-400 font-semibold text-sm flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        Critical Threat Detected
                      </h3>
                      <p className="text-2xl font-semibold mt-1">{maxRiskUser.id}</p>
                    </div>
                    <div className="bg-white/10 p-2 rounded-xl">
                      <Fingerprint className="w-5 h-5 text-slate-300" />
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Behavioral Risk Score</span>
                        <span className="text-white font-mono">{maxRiskUser.risk}/100</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full rounded-full" style={{ width: `${maxRiskUser.risk}%` }} />
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Identity tripped decoy AWS credential <span className="text-slate-200">Prod_Decoy</span>. AI behavioral baseline shows massive deviance in query volume.
                    </p>
                    <button 
                      onClick={() => setMainThreatKilled(true)}
                      className="w-full mt-2 bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                    >
                      Kill Session & Isolate
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 text-slate-400 rounded-[24px] p-6 flex flex-col items-center justify-center min-h-[250px] shadow-sm">
                  <ShieldCheck className="w-12 h-12 text-emerald-500 mb-4 opacity-80" />
                  <h3 className="font-semibold text-white mb-1">Systems Normal</h3>
                  <p className="text-xs text-center">No critical identity threats detected across infrastructure.</p>
                </div>
              )}

              {/* System Audit Timeline */}
              <GlassCard className="p-6 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-slate-800">System Audit</h3>
                  <button className="text-slate-400 hover:text-slate-700">
                    <History className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-5 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-slate-200 before:to-transparent">
                  {auditLogs.map((log, i) => (
                    <div key={log.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      
                      {/* Timeline Dot */}
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 border-white bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10
                        ${log.status === 'success' ? 'text-emerald-500' : 'text-indigo-500'}
                      `}>
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      
                      <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-white/50 border border-white p-3 rounded-2xl shadow-sm group-hover:bg-white transition-colors overflow-hidden">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-slate-700 truncate block">{log.action}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                          <span className="font-mono bg-slate-100 px-1.5 rounded truncate max-w-full">{log.target}</span>
                          <span className="shrink-0 text-slate-400">•</span>
                          <span className="shrink-0 whitespace-nowrap">{log.time}</span>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </GlassCard>
              
              {/* Feature Deviance Tracker moved here to fill empty space */}
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-indigo-500" />
                    ML Feature Deviance
                  </h3>
                  <div className="text-xs font-mono text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">IsolationForest</div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                  {telemetryData.slice(-3).reverse().map((dataPoint, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 border-b border-slate-200 last:border-0 pb-3 last:pb-0">
                      <div className="flex justify-between text-xs font-semibold text-slate-700">
                        <span>Event Score: {Math.round(dataPoint.risk)}</span>
                        <span className="text-slate-400">{dataPoint.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span className="text-slate-600 font-medium">Vol: {dataPoint.volume}</span>
                        {dataPoint.risk > 35 && <span className="ml-auto text-rose-500 font-mono text-[10px] bg-rose-50 px-1 rounded">Deviant</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

            </div>
            </div>
          ) : (
            <UserDatabase usersList={usersList} setUsersList={setUsersList} />
          )}
        </main>
      </div>
    </div>
  );
}