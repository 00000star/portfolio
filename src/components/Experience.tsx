import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText, Download, ExternalLink, Code2, Sparkles, ChevronRight, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Experience: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [copiedPath, setCopiedPath] = useState<boolean>(false);

  const copyPath = () => {
    navigator.clipboard?.writeText(PROFILE.resumePath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-obsidian-800 pb-6 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gold-400 uppercase tracking-widest mb-2">
            <Briefcase className="w-4 h-4 text-gold-400" />
            <span>Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Career Milestones & Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Sovereign systems design, multi-agent framework construction, and distributed AI engineering history.
          </p>
        </div>

        {/* Resume Specification Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowResumeModal(true)}
            className="px-4 py-2 rounded-xl bg-gold-500/15 border border-gold-500/40 text-gold-300 font-mono text-xs font-semibold flex items-center gap-2 hover:bg-gold-500/25 transition-all shadow-gold-sm"
          >
            <FileText className="w-4 h-4 text-gold-400" />
            <span>Inspect RESUME.md</span>
          </button>
          <button
            onClick={copyPath}
            className="px-3 py-2 rounded-xl bg-obsidian-900 border border-obsidian-750 text-slate-300 font-mono text-xs hover:border-gold-500/30 transition-colors"
            title="Copy absolute filesystem path to RESUME.md"
          >
            <span>{copiedPath ? 'COPIED PATH!' : 'COPY RESUME PATH'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-sm font-mono uppercase text-gold-400 font-semibold tracking-wider flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Chronological Milestones</span>
          </div>

          <div className="space-y-6 border-l-2 border-gold-500/30 pl-6 ml-2">
            {PROFILE.milestones.map((m, idx) => (
              <div
                key={idx}
                className="relative bg-obsidian-900/70 border border-obsidian-800 p-6 rounded-2xl backdrop-blur-md hover:border-gold-500/40 transition-all group"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-gold-400 border-2 border-obsidian-950 group-hover:scale-125 transition-transform" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/25">
                    {m.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{m.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  {m.role}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mb-4">{m.organization}</div>

                <ul className="space-y-2 mb-4">
                  {m.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-obsidian-800">
                  {m.coreTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-obsidian-800 text-[10px] font-mono text-slate-400 border border-obsidian-750"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-sm font-mono uppercase text-gold-400 font-semibold tracking-wider flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4" />
            <span>Autonomous Competency Matrix</span>
          </div>

          <div className="space-y-6">
            {PROFILE.skills.map((category, idx) => (
              <div
                key={idx}
                className="bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 backdrop-blur-md hover:border-gold-500/30 transition-all"
              >
                <h4 className="text-sm font-mono font-bold text-white mb-4 border-b border-obsidian-800 pb-2 text-glow">
                  {category.title}
                </h4>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-gold-400 font-bold">{skill.level}%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-obsidian-950 rounded-full overflow-hidden border border-obsidian-800">
                        <div
                          className="h-full bg-gradient-to-r from-gold-500 to-amber-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {skill.tags.map((t) => (
                          <span key={t} className="text-[9px] font-mono text-slate-500">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Specification Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-md">
          <div className="w-full max-w-3xl bg-obsidian-900 border border-gold-500/40 rounded-2xl shadow-gold-lg overflow-hidden flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between px-6 py-4 bg-obsidian-950 border-b border-obsidian-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-400" />
                <div>
                  <div className="text-sm font-bold text-white font-mono">RESUME.md Spec Viewer</div>
                  <div className="text-[11px] font-mono text-emerald-400 truncate max-w-md">{PROFILE.resumePath}</div>
                </div>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 font-mono text-xs space-y-4 text-slate-300 leading-relaxed select-text">
              <div className="p-4 bg-obsidian-950 rounded-xl border border-obsidian-800 space-y-3">
                <div className="text-gold-400 font-bold text-base"># {PROFILE.name} ("{PROFILE.alias}")</div>
                <div className="text-white font-semibold">**{PROFILE.title}**</div>
                <div className="text-slate-400">{PROFILE.location} | {PROFILE.email}</div>
                <div className="text-cyan-400">{PROFILE.github} | {PROFILE.huggingface}</div>
              </div>

              <div className="space-y-2">
                <div className="text-gold-400 font-bold">## Sovereign Professional Summary</div>
                <p className="text-slate-400">{PROFILE.summary}</p>
              </div>

              <div className="space-y-3">
                <div className="text-gold-400 font-bold">## Core Achievements & Systems</div>
                {PROFILE.projects.map((p, i) => (
                  <div key={i} className="pl-3 border-l-2 border-gold-500/40">
                    <span className="text-white font-bold">{p.title}</span> — <span className="text-slate-400">{p.subtitle}</span>
                    <div className="text-slate-400 mt-1">{p.description}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-gold-400 font-bold">## Verified Benchmark Metrics</div>
                <div className="grid grid-cols-2 gap-2">
                  {PROFILE.benchmarks.map((b, i) => (
                    <div key={i} className="p-2 bg-obsidian-950 rounded border border-obsidian-800">
                      <span className="text-gold-300 font-bold">{b.name}:</span> {b.value} ({b.unit})
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-3 bg-obsidian-950 border-t border-obsidian-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">File location: /sdcard/Antigravity_Projects/Resume/RESUME.md</span>
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-1.5 rounded-lg bg-gold-500/20 text-gold-300 hover:bg-gold-500/30 transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
