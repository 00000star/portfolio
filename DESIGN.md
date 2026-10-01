# Cyber-Monarch Design System Spec
**Craig Zifunzi ("Star King") Sovereign Portfolio Architecture**

## 1. Aesthetic Philosophy: "Cyber-Monarch Obsidian & Imperial Gold"
The visual language merges high-density sovereign AI engineering with majestic cybernetic aesthetics. It conveys autonomous power, low-latency execution, deep neural control planes, and uncompromising reliability.

---

## 2. Color Palette & Token Definitions

### Surface & Obsidian Scales
- **Void Space**: `#050608` (Deepest canvas background)
- **Obsidian 950**: `#08090C` (Main body backdrop)
- **Obsidian 900**: `#0C0E14` (Card & pane foundations)
- **Obsidian 800**: `#12151E` (Elevated card surfaces, glass modals)
- **Obsidian 700**: `#181C28` (Interactive hovers, borders)
- **Obsidian 600**: `#242938` (Subtle dividers & active states)

### Imperial & Cyber Gold Scales
- **Crown Gold**: `#FBBF24` (High-intensity text highlights & active beacons)
- **Imperial Gold**: `#F59E0B` (Primary brand accent, button gradients)
- **Dark Gold / Bronze**: `#B45309` (Muted glowing borders & low-contrast badges)
- **Gold Glow Filter**: `rgba(245, 158, 11, 0.25)` (Glow shadows & bloom envelopes)
- **Gold Wireframe**: `rgba(245, 158, 11, 0.45)` (Canvas 3D monolith edges)

### Telemetry & Signal Accents
- **Autonomous Emerald**: `#10B981` (Online/Healthy A10G twin indicators)
- **Pulse Cyan**: `#06B6D4` (Telemetry stream, packet traces)
- **Alert Crimson**: `#EF4444` (Critical anomalies, error outputs)

---

## 3. Typography
- **Primary Body & Display**: `Inter`, sans-serif (Weights: 300, 400, 500, 600, 700, 800)
- **Telemetry & Terminal**: `JetBrains Mono`, monospace (Weights: 400, 500, 700)

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
font-mono: 'JetBrains Mono', monospace;
```

---

## 4. Glassmorphism & Elevation
- **Glass Card**:
  - Background: `rgba(12, 14, 20, 0.75)`
  - Backdrop Filter: `blur(16px)`
  - Border: `1px solid rgba(245, 158, 11, 0.15)`
  - Shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.5)`
- **Glass Card Hover**:
  - Border: `1px solid rgba(245, 158, 11, 0.45)`
  - Shadow: `0 12px 40px 0 rgba(245, 158, 11, 0.12)`

---

## 5. 3D Canvas Spatial Experience
- **Central Obsidian Monolith**: 3D geometric polyhedral monolith rotating smoothly on Y/Z axes with gold wireframe and inner refractive depth.
- **4 Orbiting Holographic Beacons**: Representing 4 core pillars:
  1. STARBOY PRIME (A10G Cloud GPU Twin)
  2. Antigravity Mobile OS (Termux & Edge Autonomous Engine)
  3. Liquid Coder (Recursive Self-Prompting LLM Pipeline)
  4. Mindustry MLOG (Autonomous Strategy & Logic RAG)
- **Cyber Particle Matrix**: 1,200 golden stardust nodes floating in simulated zero-gravity with pointer parallax.
- **Infinite Cyber Grid**: Planar dark gold wire grid fading into the horizon.

---

## 6. Key Interactive Components
1. **Glassmorphic HUD Header**: Real-time Starboy twin status, FPS/performance ticker, terminal toggle, quick nav.
2. **Interactive Terminal Drawer**: Real bash-like CLI (`help`, `projects`, `skills`, `architecture`, `benchmarks`, `github`, `contact`).
3. **Command Palette (`/` shortcut)**: Instant keyboard-driven navigation across sections and actions.
4. **Interactive Architecture Topology**: Visual node cluster mapping local edge clients, autonomous coordinator, and cloud GPU twin.
5. **Interactive Benchmarking Engine**: Real-time simulated latency and benchmark execution harness.
