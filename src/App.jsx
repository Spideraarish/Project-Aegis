import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Compass, Grid, History, Bell, User,
  ShieldAlert, ShieldCheck, BrainCircuit, Crosshair, 
  LockKeyhole, Activity, Fingerprint, MoreVertical, 
  ChevronDown, Server, Network, AlertTriangle, CheckCircle2,
  Terminal, Shield, Zap, Target, Check, X, Clock, Database, Users, Trash, Cpu, Lock
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

const mockUsers = Object.entries(employeeBaselines).map(([emp_id, info]) => ({
  id: emp_id,
  name: `User ${emp_id}`,
  role: info.role.includes('Admin') ? 'Admin' : 'Employee',
  dept: info.role.replace('_', ' '),
  risk: emp_id === 'EMP042' || emp_id === 'ADM_422' || emp_id === 'EMP025' ? 98 : 0,
  status: 'Active',
  activity: 'Awaiting telemetry...',
  pendingRequest: info.role.includes('Admin') ? 'Core_Vault_01' : null
}));

// Soft glass container
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/30 backdrop-blur-[40px] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] rounded-[24px] ${className}`}>
    {children}
  </div>
);

const QuantumSimulation = ({ quantumLogs }) => (
  <GlassCard className="flex-1 p-8 shadow-2xl relative overflow-hidden flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500">
    <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
    
    <div className="flex justify-between items-center z-10 border-b border-white/20 pb-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-indigo-600" />
          Quantum Defense Grid
        </h2>
        <p className="text-slate-500 font-mono mt-2">FIPS 204 ML-DSA & FIPS 203 ML-KEM ACTIVE</p>
      </div>
      <div className="flex gap-2">
        <div className="bg-white/50 text-indigo-700 border border-white/60 px-4 py-2 rounded-xl font-mono text-sm flex items-center gap-2 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          Lattice Tuned
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 flex-1">
      <div className="flex flex-col gap-6">
        <div className="bg-white/40 border border-white/60 rounded-2xl p-6 backdrop-blur-md shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">How PQC Protects Your Identity Ledger</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Traditional encryption relies on the difficulty of factoring large primes—a problem quantum computers will solve in seconds. Our active defense system utilizes <strong>Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM)</strong>.
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Ensures all internal state and ledger commits are quantum-safe.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> High-entropy lattice signatures defeat Shor's algorithm.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Real-time symmetric key rotation secured via ML-KEM encapsulation.</li>
          </ul>
        </div>
        
        <div className="flex-1 bg-white/40 border border-white/60 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[250px] shadow-sm">
          {/* Central Animation */}
          <div className="relative flex items-center justify-center w-32 h-32 mb-6 mt-4">
            {/* Outer Spinning Ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-indigo-500/20 border-t-indigo-600 animate-[spin_8s_linear_infinite]" />
            {/* Inner Spinning Dashed Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-500/40 animate-[spin_12s_linear_infinite_reverse]" />
            
            {/* Core Shield */}
            <div className="absolute inset-0 flex items-center justify-center animate-pulse">
              <Shield className="w-16 h-16 text-indigo-600 drop-shadow-md" strokeWidth={1.5} />
              <Lock className="w-6 h-6 text-white absolute" strokeWidth={2.5} />
            </div>
            
            {/* Hovering Data Packets */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-bounce" />
          </div>

          {/* Harvest Now Decrypt Never Badge */}
          <div className="text-center z-10 flex flex-col items-center gap-3">
            <span className="bg-indigo-100 text-indigo-700 font-bold text-xs tracking-widest px-4 py-2 rounded-full border border-indigo-200 shadow-sm uppercase w-max">
              Harvest Now, Decrypt Never
            </span>
            <div className="text-slate-500 font-mono text-xs">
              [ MULTI-DIMENSIONAL LATTICE ACTIVE ]
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-xs shadow-2xl relative overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 text-slate-400 mb-6 pb-4 border-b border-slate-800">
          <Terminal className="w-4 h-4" />
          <span className="font-semibold text-sm">pqc_vault_d.sh</span>
        </div>
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
          {quantumLogs.map((log) => (
            <div key={log.id} className="flex gap-4 items-start">
              <span className="text-slate-600 shrink-0">[{log.time}]</span>
              <div className="flex flex-col gap-1">
                <span className="text-indigo-400">{log.msg}</span>
                {log.signature && (
                  <span className="text-indigo-200 break-all text-[10px] bg-indigo-500/20 p-1 rounded inline-block w-fit">
                    {log.signature}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div className="flex gap-2 text-slate-500 animate-pulse mt-2">
            <span>&gt;</span>
            <span>Awaiting next cryptographic cycle...</span>
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
);

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
    const ws = new WebSocket("ws://localhost:8000/ws/stream");
    
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
                risk: data.final_risk_score >= 25 ? 100 : data.final_risk_score, 
                status: data.final_risk_score >= 25 ? 'Critical' : u.status,
                activity: data.final_risk_score >= 25 ? 'Honeytoken Tripped - Critical Threat' : (data.final_risk_score >= 35 ? data.reasons[0] || 'Anomalous Activity' : 'Normal Telemetry')
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
            {[Cpu, Grid, Activity].map((Icon, i) => {
              const isActive = (i === 2 && activePage === 'dashboard') || (i === 1 && activePage === 'users') || (i === 0 && activePage === 'quantum');
              return (
                <button 
                  key={i} 
                  onClick={() => i === 1 ? setActivePage('users') : i === 2 ? setActivePage('dashboard') : setActivePage('quantum')}
                  className={`p-3 rounded-2xl transition-all shadow-md ${isActive ? 'bg-slate-900 text-white' : 'bg-white/50 text-slate-500 hover:bg-slate-900 hover:text-white'}`}
                >
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
                </button>
              );
            })}
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
                  <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</button>
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