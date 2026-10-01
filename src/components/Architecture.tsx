import React, { useState } from 'react';
import { Network, Server, Smartphone, Cloud, ArrowDownUp, RefreshCw, Cpu, Activity, ShieldCheck, Database, Zap } from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  category: 'Edge' | 'Orchestrator' | 'Cloud GPU' | 'Memory Fabric';
  role: string;
  specs: string[];
  protocol: string;
  latency: string;
  status: string;
}

export const Architecture: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('cloud-twin');

  const nodes: Record<string, NodeDetail> = {
    'edge-terminal': {
      id: 'edge-terminal',
      name: 'Android / Termux Local Edge',
      category: 'Edge',
      role: 'Hardware-adjacent POSIX runtime executing localized tooling and offline file modifications.',
      specs: [
        'Proot Linux & hardened POSIX environment',
        'Direct Android Storage IPC (/sdcard/)',
        'Low memory envelope (<180MB footprint)',
        'Zero-dependency local bash tool dispatchers',
      ],
      protocol: 'Local IPC / POSIX Standard Streams',
      latency: '12ms Internal Dispatch',
      status: 'OPERATIONAL',
    },
    'orchestrator': {
      id: 'orchestrator',
      name: 'Autonomous Agent Coordinator',
      category: 'Orchestrator',
      role: 'Reasoning core governing task decomposition, AST self-healing loops, and pre-approved autonomous dispatch.',
      specs: [
        'Auto-Approval pipeline prevents human blocking stalls',
        'Recursive AST parser for runtime self-repair',
        'Tree-of-Thoughts exploration heuristic',
        'Deterministic tool caller with strict schema validation',
      ],
      protocol: 'Dynamic JSON-RPC / Async Event Queue',
      latency: '28ms Task Scheduling',
      status: 'OPTIMAL',
    },
    'cloud-twin': {
      id: 'cloud-twin',
      name: 'STARBOY PRIME Cloud GPU Twin',
      category: 'Cloud GPU',
      role: 'High-throughput 24/7 sovereign GPU worker hosted on Hugging Face Spaces powering heavy agent tasks.',
      specs: [
        'NVIDIA A10G (24GB GDDR6 VRAM / Tensor Cores)',
        'FastAPI async backend with bi-directional SSE streams',
        'Detached background daemon job execution',
        'Multi-agent concurrent sandbox container',
      ],
      protocol: 'HTTPS / WSS / Server-Sent Events (SSE)',
      latency: '140ms P95 Round-Trip',
      status: 'ONLINE — 24/7 SOVEREIGN',
    },
    'memory-fabric': {
      id: 'memory-fabric',
      name: '128k Persistent Memory Brain',
      category: 'Memory Fabric',
      role: 'Long-term episodic and semantic memory graph maintaining architectural continuity across reboots.',
      specs: [
        'Hierarchical markdown & JSONL graph transcripts',
        'ChromaDB vector embeddings for MLOG & domain RAG',
        'Bi-directional delta state synchronization',
        'Zero context window truncation or amnesia',
      ],
      protocol: 'Vector Embeddings / Automated Sync Bundles',
      latency: '45ms Vector Retrieval',
      status: 'SYNCHRONIZED',
    },
  };

  const active = nodes[selectedNode];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="mb-12 border-b border-obsidian-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gold-400 uppercase tracking-widest mb-2">
          <Network className="w-4 h-4 text-gold-400" />
          <span>Distributed System Topology</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Cloud-Edge Autonomous Topology
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          An ultra-resilient hybrid architecture decoupling local edge execution from 24/7 cloud GPU workers with sub-140ms telemetry synchronization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Topology Visualizer (7 Columns) */}
        <div className="lg:col-span-7 bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Subtle circuit backdrop lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="flex flex-col gap-6 relative z-10">
            {/* Top: Cloud Twin */}
            <div
              onClick={() => setSelectedNode('cloud-twin')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                selectedNode === 'cloud-twin'
                  ? 'bg-gold-500/15 border-gold-500 shadow-gold-sm'
                  : 'bg-obsidian-950/70 border-obsidian-750 hover:border-gold-500/40 hover:bg-obsidian-850'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gold-500/20 text-gold-400">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gold-400 font-semibold uppercase">Cloud Tier</div>
                    <div className="text-base font-bold text-white">STARBOY PRIME (NVIDIA A10G)</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  24/7 ACTIVE
                </span>
              </div>
            </div>

            {/* Connecting Telemetry Bridge Indicator */}
            <div className="flex items-center justify-center my-[-4px]">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-950 border border-obsidian-800 text-[11px] font-mono text-cyan-400 shadow-sm">
                <ArrowDownUp className="w-3.5 h-3.5 animate-bounce" />
                <span>140ms P95 Telemetry Bridge & SSE Stream</span>
              </div>
            </div>

            {/* Middle: Coordinator Engine */}
            <div
              onClick={() => setSelectedNode('orchestrator')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                selectedNode === 'orchestrator'
                  ? 'bg-gold-500/15 border-gold-500 shadow-gold-sm'
                  : 'bg-obsidian-950/70 border-obsidian-750 hover:border-gold-500/40 hover:bg-obsidian-850'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold uppercase">Reasoning Engine</div>
                    <div className="text-base font-bold text-white">Autonomous Agent Coordinator</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-obsidian-800 text-slate-300 border border-obsidian-700">
                  AUTO-APPROVAL
                </span>
              </div>
            </div>

            {/* Bottom Split: Edge Device + Memory Fabric */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setSelectedNode('edge-terminal')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedNode === 'edge-terminal'
                    ? 'bg-gold-500/15 border-gold-500 shadow-gold-sm'
                    : 'bg-obsidian-950/70 border-obsidian-750 hover:border-gold-500/40 hover:bg-obsidian-850'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Edge Tier</div>
                </div>
                <div className="text-sm font-bold text-white">Android / Termux</div>
                <div className="text-xs text-slate-400 mt-1">POSIX Shell & Local FS</div>
              </div>

              <div
                onClick={() => setSelectedNode('memory-fabric')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedNode === 'memory-fabric'
                    ? 'bg-gold-500/15 border-gold-500 shadow-gold-sm'
                    : 'bg-obsidian-950/70 border-obsidian-750 hover:border-gold-500/40 hover:bg-obsidian-850'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Database className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-mono text-purple-400 font-semibold uppercase">Context Fabric</div>
                </div>
                <div className="text-sm font-bold text-white">128k Memory Brain</div>
                <div className="text-xs text-slate-400 mt-1">Vector Graph & State Sync</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Inspector Pane (5 Columns) */}
        <div className="lg:col-span-5 bg-obsidian-900/90 border border-gold-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between min-h-[460px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-gold-500/20 text-gold-300 border border-gold-500/40 text-xs font-mono font-semibold uppercase tracking-wider">
                {active.category} Node Telemetry
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {active.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{active.name}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{active.role}</p>

            <div className="space-y-4">
              <div className="text-xs font-mono uppercase text-gold-400 font-semibold tracking-wider">
                Key Technical Specifications
              </div>
              <ul className="space-y-2">
                {active.specs.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-obsidian-800/90 grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Transport Protocol</div>
              <div className="text-xs font-mono font-bold text-cyan-400 mt-0.5 truncate">{active.protocol}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Latency Benchmark</div>
              <div className="text-xs font-mono font-bold text-gold-300 mt-0.5">{active.latency}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
