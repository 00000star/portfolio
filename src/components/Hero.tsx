import React from 'react';
import { Terminal as TerminalIcon, Sparkles, Cpu, ExternalLink, ShieldCheck, ArrowRight, Activity, Zap } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenPalette: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenPalette }) => {
  return (
    <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Live Sovereign A10G Twin Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-md shadow-gold-sm mb-8 animate-fade-in hover:border-gold-500/60 transition-all cursor-pointer">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
          <span className="text-gold-400 font-semibold">{PROFILE.statusBadge.label}</span>
          <span className="mx-1.5 text-obsidian-600">|</span>
          <span className="text-emerald-400">{PROFILE.statusBadge.state}</span>
        </span>
        <div className="hidden sm:flex items-center gap-1 pl-1 text-[11px] font-mono text-slate-400 border-l border-obsidian-750">
          <Cpu className="w-3 h-3 text-gold-500" />
          <span>{PROFILE.statusBadge.vram}</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono tracking-widest text-gold-400 uppercase font-semibold">
          <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
          <span>Sovereign Intelligence & Agentic Control</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
          <span className="block text-slate-100">{PROFILE.name}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 text-glow mt-1">
            "{PROFILE.alias}"
          </span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto pt-2">
          {PROFILE.title}
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed pt-1">
          {PROFILE.tagline}
        </p>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 sm:mt-10">
        <button
          onClick={onOpenTerminal}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-semibold text-sm flex items-center gap-2 hover:from-gold-400 hover:to-amber-500 shadow-gold-md hover:shadow-gold-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <TerminalIcon className="w-4 h-4" />
          <span>Launch Starboy CLI</span>
        </button>

        <a
          href="#projects"
          className="px-5 py-2.5 rounded-xl bg-obsidian-900/80 border border-gold-500/25 text-slate-200 font-semibold text-sm flex items-center gap-2 hover:bg-obsidian-800 hover:border-gold-500/50 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
        >
          <span>Flagship Projects</span>
          <ArrowRight className="w-4 h-4 text-gold-400" />
        </a>

        <button
          onClick={onOpenPalette}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-900/60 border border-obsidian-750 text-slate-400 hover:text-slate-200 text-xs font-mono backdrop-blur-md hover:border-gold-500/30 transition-all"
        >
          <Zap className="w-3.5 h-3.5 text-gold-400" />
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 rounded bg-obsidian-800 border border-obsidian-700 text-gold-300 text-[11px]">
            /
          </kbd>
          <span>for Command Matrix</span>
        </button>
      </div>

      {/* Telemetry Snapshot Ticker */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mt-12 sm:mt-16 pt-8 border-t border-obsidian-800/80">
        {PROFILE.benchmarks.map((item, index) => (
          <div
            key={index}
            className="p-3.5 rounded-xl bg-obsidian-900/60 border border-obsidian-800 backdrop-blur-sm flex flex-col items-center sm:items-start text-center sm:text-left hover:border-gold-500/30 transition-all group"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              <Activity className="w-3 h-3 text-gold-500 group-hover:text-gold-400" />
              <span>{item.name.split(' ')[0]}</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-gold-300 transition-colors">
              {item.value}
            </div>
            <div className="text-[11px] text-slate-400 truncate max-w-full font-mono mt-0.5">
              {item.unit}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
