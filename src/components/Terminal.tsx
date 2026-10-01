import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'system' | 'error' | 'success';
  text: string | React.ReactNode;
}

const COMMANDS = [
  'help',
  'projects',
  'about',
  'skills',
  'architecture',
  'benchmarks',
  'github',
  'resume',
  'contact',
  'clear',
  'status',
  'whoami',
];

export const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose, onNavigateSection }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      type: 'system',
      text: 'STARBOY PRIME v2.0 (Autonomous Sovereign OS) — Session initialized.',
    },
    {
      id: 'init-2',
      type: 'system',
      text: 'Connected: NVIDIA A10G Cloud Twin (24GB VRAM) @ https://starboy001-antigravity-cloud.hf.space',
    },
    {
      id: 'init-3',
      type: 'output',
      text: 'Type "help" for a list of available commands or click quick suggestions below.',
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const inputLog: CommandLog = {
      id: `cmd-${Date.now()}`,
      type: 'input',
      text: trimmed,
    };

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();

    let outputLog: CommandLog;

    switch (mainCmd) {
      case 'help':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1.5 text-xs font-mono">
              <div className="text-gold-400 font-bold">AVAILABLE COMMANDS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                <div><span className="text-gold-300 font-bold">about</span> - Craig Zifunzi & core mission</div>
                <div><span className="text-gold-300 font-bold">projects</span> - 4 Flagship sovereign architectures</div>
                <div><span className="text-gold-300 font-bold">skills</span> - AI/ML, Agentic loops & full-stack matrix</div>
                <div><span className="text-gold-300 font-bold">architecture</span> - Distributed edge-to-cloud topology</div>
                <div><span className="text-gold-300 font-bold">benchmarks</span> - 98.4% TCR & 140ms latency verification</div>
                <div><span className="text-gold-300 font-bold">resume</span> - Career resume specification path</div>
                <div><span className="text-gold-300 font-bold">github</span> - Direct link to GitHub Starboy001</div>
                <div><span className="text-gold-300 font-bold">status</span> - Live A10G Cloud GPU telemetry</div>
                <div><span className="text-gold-300 font-bold">contact</span> - Email & sovereign social links</div>
                <div><span className="text-gold-300 font-bold">clear</span> - Flush terminal screen</div>
              </div>
            </div>
          ),
        };
        break;

      case 'about':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 text-xs font-mono">
              <div className="text-gold-400 font-bold">{PROFILE.name} ("{PROFILE.alias}")</div>
              <div className="text-slate-300">{PROFILE.title}</div>
              <p className="text-slate-400 leading-relaxed">{PROFILE.summary}</p>
              <div className="text-slate-400">
                <span className="text-cyan-400 font-semibold">Location:</span> {PROFILE.location}
              </div>
            </div>
          ),
        };
        break;

      case 'projects':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-3 text-xs font-mono">
              <div className="text-gold-400 font-bold">FLAGSHIP SOVEREIGN ARCHITECTURES:</div>
              {PROFILE.projects.map((p, idx) => (
                <div key={idx} className="border-l-2 border-gold-500/50 pl-3 py-0.5 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-gold-300 font-bold">{p.title}</span>
                    <span className="text-[10px] px-1.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-mono">
                      {p.status}
                    </span>
                  </div>
                  <div className="text-slate-300">{p.subtitle}</div>
                  <div className="text-slate-400">{p.description}</div>
                  <div className="text-cyan-400 text-[11px]">
                    Stack: {p.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          ),
        };
        if (onNavigateSection) onNavigateSection('projects');
        break;

      case 'skills':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-3 text-xs font-mono">
              <div className="text-gold-400 font-bold">AUTONOMOUS & ML COMPETENCY MATRIX:</div>
              {PROFILE.skills.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-slate-200 font-semibold text-cyan-300">[{cat.title}]</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2">
                    {cat.skills.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-slate-300 pr-4">
                        <span>{s.name}</span>
                        <span className="text-gold-400 font-bold">{s.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        };
        if (onNavigateSection) onNavigateSection('skills');
        break;

      case 'architecture':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 text-xs font-mono">
              <div className="text-gold-400 font-bold">SYSTEM TOPOLOGY CLUSTER:</div>
              <div className="text-slate-300 leading-relaxed">
                • Edge Tier: Termux / Android Local Host with direct POSIX shell execution & native Git tools.<br />
                • Agent Coordinator: Autonomous state graph engine with AST recursion & zero-halt auto-approvals.<br />
                • Sovereign Cloud Twin: STARBOY PRIME on NVIDIA A10G (24GB VRAM) via multiplexed SSE streaming.<br />
                • Telemetry Fabric: P95 140ms round-trip latency bridge with 128k persistent memory brain sync.
              </div>
            </div>
          ),
        };
        if (onNavigateSection) onNavigateSection('architecture');
        break;

      case 'benchmarks':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 text-xs font-mono">
              <div className="text-gold-400 font-bold">VERIFIED BENCHMARK TELEMETRY:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PROFILE.benchmarks.map((b, idx) => (
                  <div key={idx} className="bg-obsidian-900 p-2 rounded border border-obsidian-800">
                    <div className="text-gold-300 font-bold text-sm">{b.name}: {b.value}</div>
                    <div className="text-slate-400 text-[11px]">{b.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ),
        };
        if (onNavigateSection) onNavigateSection('benchmarks');
        break;

      case 'github':
        window.open(PROFILE.github, '_blank');
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'success',
          text: `Opened GitHub in new window: ${PROFILE.github}`,
        };
        break;

      case 'resume':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-gold-400 font-bold">RESUME SPECIFICATION LOCATION:</div>
              <div className="text-emerald-400">{PROFILE.resumePath}</div>
              <div className="text-slate-400">
                Type 'contact' or visit the Experience section to view full career milestones.
              </div>
            </div>
          ),
        };
        if (onNavigateSection) onNavigateSection('experience');
        break;

      case 'status':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-emerald-400 font-bold">STATUS: 24/7 ONLINE</div>
              <div className="text-slate-300">• Twin: STARBOY PRIME (Hugging Face Spaces)</div>
              <div className="text-slate-300">• Host GPU: 24GB NVIDIA A10G (ZeroGPU)</div>
              <div className="text-slate-300">• Autonomy Mode: 100% Pre-Approved Execution</div>
              <div className="text-slate-300">• Dispatch Latency: 140ms P95</div>
            </div>
          ),
        };
        break;

      case 'whoami':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: `Guest Operator authenticated via Sovereign Antigravity Gateway. Clearance: Level 4 Architect.`,
        };
        break;

      case 'contact':
        outputLog = {
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1.5 text-xs font-mono">
              <div className="text-gold-400 font-bold">CONTACT DIRECTORY:</div>
              <div className="text-slate-300">• Email: <a href={`mailto:${PROFILE.email}`} className="text-gold-300 underline">{PROFILE.email}</a></div>
              <div className="text-slate-300">• GitHub: <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PROFILE.github}</a></div>
              <div className="text-slate-300">• Hugging Face: <a href={PROFILE.huggingface} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PROFILE.huggingface}</a></div>
            </div>
          ),
        };
        if (onNavigateSection) onNavigateSection('contact');
        break;

      case 'clear':
        setLogs([]);
        return;

      default:
        outputLog = {
          id: `err-${Date.now()}`,
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`,
        };
        break;
    }

    setLogs((prev) => [...prev, inputLog, outputLog]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < history.length) {
          setHistoryIdx(nextIdx);
          setInputVal(history[nextIdx]);
        } else {
          setHistoryIdx(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(inputVal.toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 shadow-2xl flex flex-col ${
        isExpanded
          ? 'inset-3 sm:inset-6 rounded-2xl'
          : 'bottom-4 right-4 left-4 sm:left-auto sm:w-[650px] h-[520px] rounded-xl'
      } bg-obsidian-950/95 border border-gold-500/40 backdrop-blur-xl`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-obsidian-900 border-b border-obsidian-800 rounded-t-xl select-none">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer hover:bg-yellow-400" onClick={() => setIsExpanded(!isExpanded)} />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 ml-2">
            <TerminalIcon className="w-3.5 h-3.5 text-gold-400" />
            <span>starboy@sovereign: ~</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/40">
              A10G ONLINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-400">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:text-slate-200 hover:bg-obsidian-800 rounded transition-colors"
            title={isExpanded ? 'Restore' : 'Maximize'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:text-slate-200 hover:bg-obsidian-800 rounded transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Output Log Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs select-text">
        {logs.map((log) => {
          if (log.type === 'input') {
            return (
              <div key={log.id} className="flex items-start gap-2 text-slate-200">
                <span className="text-gold-400 select-none">star-king@antigravity:~$</span>
                <span className="font-semibold">{log.text}</span>
              </div>
            );
          }
          if (log.type === 'error') {
            return (
              <div key={log.id} className="text-red-400 pl-4 border-l-2 border-red-500/60">
                {log.text}
              </div>
            );
          }
          if (log.type === 'success') {
            return (
              <div key={log.id} className="text-emerald-400 pl-4 border-l-2 border-emerald-500/60">
                {log.text}
              </div>
            );
          }
          if (log.type === 'system') {
            return (
              <div key={log.id} className="text-cyan-400/90 text-[11px]">
                {log.text}
              </div>
            );
          }
          return (
            <div key={log.id} className="text-slate-300 pl-2">
              {log.text}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Quick Suggestion Chips */}
      <div className="px-4 py-2 bg-obsidian-900/60 border-t border-obsidian-800/80 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
        <span className="text-slate-400 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-gold-500" />
          <span>Quick:</span>
        </span>
        {['help', 'projects', 'architecture', 'benchmarks', 'skills', 'resume', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded bg-obsidian-800 text-gold-300 hover:bg-gold-500/20 hover:text-gold-200 border border-obsidian-700 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <div className="p-3 bg-obsidian-900 border-t border-obsidian-800 rounded-b-xl flex items-center gap-2">
        <span className="text-gold-400 font-mono text-xs font-semibold select-none">
          star-king@antigravity:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. 'help', 'projects', 'benchmarks')..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 font-mono text-xs focus:outline-none"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          className="p-1.5 rounded bg-gold-500/20 text-gold-300 hover:bg-gold-500/30 transition-colors"
          title="Send command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
