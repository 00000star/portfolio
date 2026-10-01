import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, CheckCircle2, Cpu, Shield, Layers, Sparkles } from 'lucide-react';
import { PROFILE, Project } from '../data/profile';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', 'Autonomous AI', 'Edge Computing', 'Language Models', 'Game AI & RAG'];

  const filteredProjects = selectedCategory === 'All'
    ? PROFILE.projects
    : PROFILE.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-obsidian-800 pb-6 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gold-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Sovereign Fleet Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Flagship Autonomous Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Hardened autonomous agents, local-first mobile operating engines, and self-improving synthetic LLM loops designed for zero-halt continuous operation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-500/20 text-gold-300 border border-gold-500/50 shadow-gold-sm'
                  : 'bg-obsidian-900/80 text-slate-400 border border-obsidian-800 hover:text-slate-200 hover:border-obsidian-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div
              key={project.id}
              className="group rounded-2xl bg-obsidian-900/70 border border-obsidian-800 hover:border-gold-500/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between hover:shadow-gold-sm"
            >
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-emerald-400">
                      {project.status}
                    </span>
                    <span className="text-obsidian-700">•</span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-obsidian-800 text-slate-400 hover:text-white hover:bg-obsidian-750 transition-colors"
                        title="View Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.hfUrl && (
                      <a
                        href={project.hfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 transition-colors"
                        title="Open Cloud Twin on Hugging Face"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gold-500 font-medium mt-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Telemetry Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 p-3 rounded-xl bg-obsidian-950/80 border border-obsidian-800/80">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-gold-300 mt-0.5">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Expandable Architecture Highlights */}
                {isExpanded && (
                  <div className="mt-6 pt-5 border-t border-obsidian-800 space-y-2.5 animate-fade-in">
                    <div className="text-xs font-mono font-semibold uppercase text-gold-400 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Architecture Highlights</span>
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer: Tech tags + Accordion toggle */}
              <div className="mt-6 pt-5 border-t border-obsidian-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-obsidian-800 border border-obsidian-750 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-obsidian-800/50 text-[10px] font-mono text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="text-xs font-mono text-gold-400 hover:text-gold-300 flex items-center gap-1 self-end sm:self-auto transition-colors"
                >
                  <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
