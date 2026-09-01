import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Award, ArrowRight, ShieldCheck, Sparkles, RefreshCw, Send, Check } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Interactive state for PSSMS simulation
  const [bays, setBays] = useState<('AVAILABLE' | 'RESERVED' | 'OCCUPIED')[]>([
    'AVAILABLE', 'OCCUPIED', 'RESERVED', 'AVAILABLE', 'OCCUPIED', 'AVAILABLE', 'AVAILABLE', 'RESERVED'
  ]);
  const [selectedHours, setSelectedHours] = useState<number>(3);
  const hourlyRate = 500; // RWF

  // Interactive state for ConnectX simulation
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: 'Peer-Kigali', text: 'Socket connection established via Redis pub/sub.', time: '10:02' },
    { sender: 'You', text: 'Sub-100ms latency verified on MERN cluster.', time: '10:03' }
  ]);
  const [newMsg, setNewMsg] = useState('');

  // Interactive state for SFPS simulation
  const [students, setStudents] = useState([
    { name: 'Mugisha Eric', term: 'Term 2', paid: 150000, total: 150000, status: 'CLEARED' },
    { name: 'Uwase Aline', term: 'Term 2', paid: 90000, total: 150000, status: 'PENDING' },
    { name: 'Kamanzi Jean', term: 'Term 2', paid: 150000, total: 150000, status: 'CLEARED' }
  ]);

  const toggleBay = (index: number) => {
    setBays(prev => {
      const next = [...prev];
      if (next[index] === 'AVAILABLE') next[index] = 'RESERVED';
      else if (next[index] === 'RESERVED') next[index] = 'OCCUPIED';
      else next[index] = 'AVAILABLE';
      return next;
    });
  };

  const handleSendMockMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages(prev => [
      ...prev,
      { sender: 'You', text: newMsg.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setNewMsg('');
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Delivered':
        return 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300';
      case 'In progress':
        return 'border-amber-500/40 bg-amber-950/40 text-amber-300';
      case 'National exam project':
        return 'border-blue-500/40 bg-blue-950/40 text-blue-300';
      case 'Prototype':
        return 'border-purple-500/40 bg-purple-950/40 text-purple-300';
      default:
        return 'border-neutral-700 bg-neutral-800 text-neutral-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-neutral-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950/70 px-6 py-4">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="rounded bg-neutral-800 px-2.5 py-0.5 font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
              {project.category}
            </span>
            <span className={`rounded border px-2 py-0.5 text-[11px] font-semibold ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <span className="text-neutral-400 hidden sm:inline">
              ROLE: <strong className="text-white">{project.role}</strong>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Header info */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-emerald-400 font-mono">
              {project.tagline}
            </p>
            <p className="mt-4 text-base text-neutral-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-1 font-mono text-xs font-medium text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Section */}
          {project.highlights && (
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
                Architecture & Engineering Deliverables
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-neutral-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specialized Interactive Simulator for the project */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/90 p-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Live Architecture & Workflow Simulation
              </span>
              <span className="font-mono text-[11px] text-neutral-400">
                Interactive Preview
              </span>
            </div>

            {/* Simulation logic based on project */}
            {project.id === 'stockhub-ltd' && project.chartData && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-300 font-mono">
                  Weekly Stock Velocity vs. Minimum Reorder Threshold (lowdb & Recharts):
                </p>
                <div className="h-56 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={project.chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="name" stroke="#71717a" fontSize={12} />
                      <YAxis stroke="#71717a" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff' }} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Bar dataKey="value" name="Units Sold" fill="#10b981" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="benchmark" name="Reorder Point" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {project.id === 'educonnect-rwanda' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-xs">
                  <div className="rounded border border-emerald-500/50 bg-emerald-950/40 p-2.5">
                    <div className="font-bold text-emerald-400">Phase 1</div>
                    <div className="text-neutral-300 text-[11px] mt-1">Foundation & Architecture</div>
                  </div>
                  <div className="rounded border border-emerald-500/50 bg-emerald-950/40 p-2.5">
                    <div className="font-bold text-emerald-400">Phase 2</div>
                    <div className="text-neutral-300 text-[11px] mt-1">JWT Auth & RBAC</div>
                  </div>
                  <div className="rounded border border-emerald-500/50 bg-emerald-950/40 p-2.5">
                    <div className="font-bold text-emerald-400">Phase 3</div>
                    <div className="text-neutral-300 text-[11px] mt-1">Schools & Courses Core</div>
                  </div>
                  <div className="rounded border border-amber-500/50 bg-amber-950/40 p-2.5">
                    <div className="font-bold text-amber-400">Phase 4</div>
                    <div className="text-neutral-300 text-[11px] mt-1">Dashboards & Moderation</div>
                  </div>
                  <div className="rounded border border-neutral-700 bg-neutral-900 p-2.5">
                    <div className="font-bold text-neutral-400">Phase 5</div>
                    <div className="text-neutral-400 text-[11px] mt-1">EduBot AI & Maps</div>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 font-mono mt-2">
                  ✓ Modular iterative releases tested for high uptime and accessibility across Rwanda TVET centers.
                </p>
              </div>
            )}

            {project.id === 'pssms' && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-300 font-mono">
                  Rwanda TVET Board Exam Scenario: Click parking bay to toggle status (Available → Reserved → Occupied):
                </p>
                <div className="grid grid-cols-4 gap-2.5">
                  {bays.map((status, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleBay(idx)}
                      className={`p-3 rounded-lg border text-xs font-mono font-bold transition-all text-center ${
                        status === 'AVAILABLE'
                          ? 'border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/50'
                          : status === 'RESERVED'
                          ? 'border-amber-500/40 bg-amber-950/30 text-amber-300 hover:bg-amber-900/50'
                          : 'border-red-500/40 bg-red-950/30 text-red-300 hover:bg-red-900/50'
                      }`}
                    >
                      <div>BAY 0{idx + 1}</div>
                      <div className="text-[10px] font-normal mt-0.5">{status}</div>
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between font-mono text-xs border-t border-neutral-800 pt-3 text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span>Duration:</span>
                    <select
                      value={selectedHours}
                      onChange={(e) => setSelectedHours(Number(e.target.value))}
                      className="rounded bg-neutral-900 border border-neutral-700 px-2 py-1 text-white text-xs"
                    >
                      <option value={1}>1 Hour</option>
                      <option value={2}>2 Hours</option>
                      <option value={3}>3 Hours</option>
                      <option value={5}>5 Hours</option>
                    </select>
                  </div>
                  <div>
                    Estimated Tariff: <strong className="text-emerald-400 font-bold">{selectedHours * hourlyRate} RWF</strong>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'sfps' && (
              <div className="space-y-3 font-mono text-xs">
                <p className="text-neutral-300">Student Fee Clearance Status (RBAC Bursar View):</p>
                <div className="divide-y divide-neutral-800 border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/50">
                  {students.map((st, i) => (
                    <div key={i} className="flex items-center justify-between p-3">
                      <div>
                        <div className="font-bold text-white">{st.name}</div>
                        <div className="text-[11px] text-neutral-400">{st.term} · Paid: {st.paid.toLocaleString()} / {st.total.toLocaleString()} RWF</div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${st.status === 'CLEARED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-amber-950 text-amber-300 border border-amber-500/40'}`}>
                        {st.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.id === 'connectx' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="h-36 overflow-y-auto space-y-2 border border-neutral-800 rounded-lg p-3 bg-neutral-900/50">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex flex-col ${m.sender === 'You' ? 'items-end' : 'items-start'}`}>
                      <div className="text-[10px] text-neutral-500">{m.sender} · {m.time}</div>
                      <div className={`mt-0.5 rounded px-2.5 py-1 text-xs max-w-xs ${m.sender === 'You' ? 'bg-emerald-600 text-white' : 'bg-neutral-800 text-neutral-200'}`}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMockMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    placeholder="Broadcast real-time socket event..."
                    className="flex-1 rounded bg-neutral-900 border border-neutral-700 px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button type="submit" className="rounded bg-emerald-500 px-3 py-1.5 font-bold text-neutral-950 hover:bg-emerald-400">
                    Send
                  </button>
                </form>
              </div>
            )}

            {project.id === 'webrtc-p2p-chat' && (
              <div className="space-y-2 font-mono text-xs text-neutral-300">
                <div className="rounded border border-neutral-800 bg-neutral-900/60 p-3 space-y-1.5">
                  <div className="text-emerald-400 font-bold">✓ RTCPeerConnection initialized</div>
                  <div className="text-neutral-400">→ SDP Offer / Answer exchanged through temporary signaling socket</div>
                  <div className="text-emerald-400 font-bold">✓ RTCDataChannel "p2p-channel" established</div>
                  <div className="text-neutral-400">→ Direct byte packets streamed without intermediate server retention</div>
                </div>
              </div>
            )}

          </div>

          {/* Architecture details breakdown */}
          {project.architecture && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-4">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                  <Layers className="h-3.5 w-3.5" />
                  Frontend Layer
                </div>
                <p className="text-neutral-300 font-sans text-xs">
                  {project.architecture.frontend}
                </p>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-4">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                  <Cpu className="h-3.5 w-3.5" />
                  Backend Engine
                </div>
                <p className="text-neutral-300 font-sans text-xs">
                  {project.architecture.backend}
                </p>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-4">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                  <Database className="h-3.5 w-3.5" />
                  Persistence Model
                </div>
                <p className="text-neutral-300 font-sans text-xs">
                  {project.architecture.database}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950/90 px-6 py-4">
          <span className="font-mono text-xs text-neutral-400">
            Djamali · Software Development Portfolio
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-neutral-800 px-4 py-2 font-mono text-xs font-semibold text-neutral-200 hover:bg-neutral-700 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
