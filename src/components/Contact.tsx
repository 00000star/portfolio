import React, { useState } from 'react';
import { Mail, Github, ExternalLink, Send, Copy, Check, MessageSquare, Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('Architectural Inquiry / Sovereign AI Collaboration');
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setStatusMsg('Redirecting to mail client...');
    setTimeout(() => setStatusMsg(null), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="mb-12 border-b border-obsidian-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gold-400 uppercase tracking-widest mb-2">
          <Mail className="w-4 h-4 text-gold-400" />
          <span>Encrypted Gateway & Inquiries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Initialize Communications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Direct sovereign bridge to Craig Zifunzi. For autonomous system advisory, GPU cluster orchestration, or custom agent architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Links & Badges (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Direct Card */}
          <div className="p-6 rounded-2xl bg-obsidian-900/80 border border-gold-500/30 backdrop-blur-md shadow-xl hover:border-gold-500/60 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-semibold text-gold-400 uppercase">Primary Direct Channel</span>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-lg bg-obsidian-800 text-slate-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-lg sm:text-xl font-bold font-mono text-white group-hover:text-gold-300 transition-colors flex items-center gap-2"
            >
              <span>{PROFILE.email}</span>
              <ArrowUpRight className="w-4 h-4 text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              PGP & End-to-end encrypted dispatch ready. P95 response SLA &lt; 4 hours.
            </p>
          </div>

          {/* Social / Ecosystem Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-obsidian-900/80 border border-obsidian-800 hover:border-gold-500/40 backdrop-blur-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Github className="w-5 h-5 text-slate-200 group-hover:text-gold-400 transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors" />
              </div>
              <div className="text-sm font-bold text-white">GitHub</div>
              <div className="text-xs font-mono text-slate-400 mt-0.5">@Starboy001</div>
            </a>

            <a
              href={PROFILE.huggingface}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-obsidian-900/80 border border-obsidian-800 hover:border-gold-500/40 backdrop-blur-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">🤗</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors" />
              </div>
              <div className="text-sm font-bold text-white">Hugging Face</div>
              <div className="text-xs font-mono text-slate-400 mt-0.5">@Starboy001</div>
            </a>
          </div>

          {/* Security / Twin Telemetry Card */}
          <div className="p-4 rounded-xl bg-obsidian-950/90 border border-obsidian-800 text-xs font-mono text-slate-400 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>SOVEREIGN DISPATCH VERIFIED</span>
            </div>
            <div>Host: STARBOY PRIME Cloud GPU (NVIDIA A10G)</div>
            <div>Cluster: Harare & Distributed Cloud Edge</div>
          </div>
        </div>

        {/* Interactive Dispatch Form (7 cols) */}
        <div className="lg:col-span-7 bg-obsidian-900/90 border border-obsidian-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-gold-400" />
            <span>Transmit Autonomous Dispatch</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Fill in your objective or inquiry below to generate an immediate formatted dispatch to Craig Zifunzi.
          </p>

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                Mission Subject / Project Scope
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-obsidian-800 text-slate-100 text-xs font-mono focus:outline-none focus:border-gold-500/60"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                Telemetry & Requirements Payload
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
                placeholder="Detail your architecture requirements, timeline, compute specifications, or inquiry..."
                className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-obsidian-800 text-slate-100 text-xs font-mono focus:outline-none focus:border-gold-500/60"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <span className="text-[11px] font-mono text-slate-500">
                Transmitted via TLS 1.3 straight to {PROFILE.email}
              </span>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-xs font-mono flex items-center justify-center gap-2 hover:from-gold-400 hover:to-amber-500 shadow-gold-md transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISPATCH TRANSMISSION</span>
              </button>
            </div>

            {statusMsg && (
              <div className="text-xs font-mono text-emerald-400 mt-2 text-center">
                {statusMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
