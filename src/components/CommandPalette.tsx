import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, FolderKanban, Cpu, Gauge, Briefcase, Mail, Github, ExternalLink, X, Zap, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionKey: string) => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectAction }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: PaletteItem[] = [
    {
      id: 'terminal',
      title: 'Launch Starboy CLI Terminal',
      category: 'System Control',
      description: 'Open interactive sovereign shell with A10G cloud commands',
      icon: <Terminal className="w-4 h-4 text-gold-400" />,
      action: () => {
        onClose();
        onSelectAction('terminal');
      },
    },
    {
      id: 'projects',
      title: 'Explore Flagship Projects',
      category: 'Navigation',
      description: 'View Civilizationx, STARBOY PRIME, paperclip-ai-companies & disaster-mesh',
      icon: <FolderKanban className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        onSelectAction('projects');
      },
    },
    {
      id: 'civilizationx',
      title: 'Civilizationx Multi-Agent Sim',
      category: 'Featured Repos',
      description: 'AI Survival & Multi-Agent Civilization Simulator on GitHub',
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.open('https://github.com/00000star/Civilizationx', '_blank');
        onClose();
      },
    },
    {
      id: 'architecture',
      title: 'System Topology & Architecture',
      category: 'Deep Dive',
      description: 'Examine edge-to-cloud distributed node cluster topology',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onSelectAction('architecture');
      },
    },
    {
      id: 'benchmarks',
      title: 'Run Benchmark Harness',
      category: 'Validation',
      description: 'Simulate 140ms latency trace and 98.4% TCR execution pipeline',
      icon: <Gauge className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose();
        onSelectAction('benchmarks');
      },
    },
    {
      id: 'experience',
      title: 'Career Milestones & Experience',
      category: 'Navigation',
      description: 'Review sovereign autonomous systems engineering history',
      icon: <Briefcase className="w-4 h-4 text-purple-400" />,
      action: () => {
        onClose();
        onSelectAction('experience');
      },
    },
    {
      id: 'github',
      title: 'Visit GitHub (@00000star)',
      category: 'External Links',
      description: 'Inspect open repositories and autonomous codebases',
      icon: <Github className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open(PROFILE.github, '_blank');
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Contact Craig Zifunzi',
      category: 'Communication',
      description: `Send email directly to ${PROFILE.email}`,
      icon: <Mail className="w-4 h-4 text-gold-400" />,
      action: () => {
        onClose();
        onSelectAction('contact');
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-obsidian-950/80 backdrop-blur-md">
      <div
        className="w-full max-w-2xl bg-obsidian-900 border border-gold-500/40 rounded-2xl shadow-gold-lg overflow-hidden animate-fade-in flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-obsidian-800 gap-3">
          <Search className="w-5 h-5 text-gold-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search commands, sections, benchmarks, systems..."
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-obsidian-800 border border-obsidian-750 text-[11px] font-mono text-slate-400">
            ESC to close
          </kbd>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No matching commands or destinations found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gold-500/15 border border-gold-500/40 text-slate-100'
                      : 'hover:bg-obsidian-850 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-obsidian-950 text-gold-400' : 'bg-obsidian-800 text-slate-400'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-obsidian-800 text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">{item.description}</div>
                    </div>
                  </div>

                  <Zap className={`w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-transparent'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-obsidian-950/80 border-t border-obsidian-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <span className="text-slate-400">↑ / ↓ to navigate</span>
            <span>•</span>
            <span className="text-slate-400">Enter to select</span>
          </div>
          <div>Craig Zifunzi Matrix</div>
        </div>
      </div>
    </div>
  );
};
