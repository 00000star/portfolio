import React, { useState, useEffect } from 'react';
import { Canvas3D } from './components/Canvas3D';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { Benchmarks } from './components/Benchmarks';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';
import { CommandPalette } from './components/CommandPalette';
import { Terminal as TerminalIcon, Zap, Shield, Cpu, ExternalLink, Menu, X, ArrowUp } from 'lucide-react';
import { PROFILE } from './data/profile';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [paletteOpen, setPaletteOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Global Keyboard Shortcuts: '/' opens palette, '`' or Ctrl+` opens terminal
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when focused in an input/textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === '/') {
        e.preventDefault();
        setPaletteOpen(true);
      } else if (e.key === '`' || (e.ctrlKey && e.key === '`')) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Scroll to top tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handlePaletteAction = (actionKey: string) => {
    if (actionKey === 'terminal') {
      setTerminalOpen(true);
    } else {
      scrollToSection(actionKey);
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 overflow-x-hidden selection:bg-gold-500/20 selection:text-gold-300">
      {/* 3D WebGL Canvas Layer (Fixed Ambient Spatial Background) */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Canvas3D />
      </div>

      {/* Cyber Scanline Grid Overlay */}
      <div className="fixed inset-0 z-[1] cyber-scanlines opacity-40 pointer-events-none" />

      {/* Ambient Gradient Glow Accents */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gold-500/5 blur-[140px] pointer-events-none rounded-full z-[1]" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full z-[1]" />

      {/* Glassmorphic HUD Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-obsidian-950/80 backdrop-blur-xl border-b border-obsidian-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Call-sign */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-gold-500/40 flex items-center justify-center group-hover:border-gold-400 group-hover:shadow-gold-sm transition-all">
              <span className="font-mono text-xs font-bold text-gold-400 group-hover:text-gold-300">SK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-white font-mono group-hover:text-gold-300 transition-colors">
                CRAIG ZIFUNZI
              </span>
              <span className="text-[10px] font-mono text-gold-500 font-semibold tracking-widest uppercase">
                STAR KING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-gold-400 transition-colors"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="hover:text-gold-400 transition-colors"
            >
              TOPOLOGY
            </button>
            <button
              onClick={() => scrollToSection('benchmarks')}
              className="hover:text-gold-400 transition-colors"
            >
              BENCHMARKS
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-gold-400 transition-colors"
            >
              MILESTONES
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-gold-400 transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Header Actions: Starboy CLI & Palette */}
          <div className="flex items-center gap-2.5">
            {/* Live Status Pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-obsidian-900 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>A10G 24/7</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-obsidian-900 border border-obsidian-750 text-slate-400 hover:text-white hover:border-gold-500/30 transition-all text-xs font-mono"
              title="Open Command Matrix (Press '/')"
            >
              <Zap className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px]">/</span>
            </button>

            {/* Terminal Trigger Button */}
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium flex items-center gap-1.5 transition-all ${
                terminalOpen
                  ? 'bg-gold-500/20 text-gold-300 border border-gold-500/50 shadow-gold-sm'
                  : 'bg-obsidian-900 text-slate-300 border border-obsidian-750 hover:border-gold-500/30 hover:text-white'
              }`}
              title="Toggle interactive Starboy CLI (Press '`')"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden sm:inline">CLI</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-obsidian-900 border border-obsidian-750 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-4 bg-obsidian-950/95 border-b border-obsidian-800 space-y-2 font-mono text-xs">
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-obsidian-900 text-slate-300"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-obsidian-900 text-slate-300"
            >
              TOPOLOGY
            </button>
            <button
              onClick={() => scrollToSection('benchmarks')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-obsidian-900 text-slate-300"
            >
              BENCHMARKS
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-obsidian-900 text-slate-300"
            >
              MILESTONES
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-obsidian-900 text-slate-300"
            >
              CONTACT
            </button>
          </div>
        )}
      </header>

      {/* Main Content Sections (Layers over 3D Canvas) */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenPalette={() => setPaletteOpen(true)}
        />
        <Projects />
        <Architecture />
        <Benchmarks />
        <Experience />
        <Contact />
      </main>

      {/* Global Interactive Terminal Drawer */}
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigateSection={scrollToSection}
      />

      {/* Global Command Palette Modal */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onSelectAction={handlePaletteAction}
      />

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-30 p-2.5 rounded-xl bg-obsidian-900/90 border border-obsidian-750 text-slate-400 hover:text-gold-400 hover:border-gold-500/50 backdrop-blur-md transition-all shadow-lg"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Sovereign Footer */}
      <footer className="relative z-10 border-t border-obsidian-800/80 bg-obsidian-950/90 py-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name} ("{PROFILE.alias}"). All systems sovereign.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>STARBOY PRIME OPERATIONAL</span>
            </span>
            <span>•</span>
            <a
              href={PROFILE.huggingface}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-gold-400 transition-colors"
            >
              Hugging Face Twin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
