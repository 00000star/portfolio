export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Autonomous AI' | 'Edge Computing' | 'Language Models' | 'Game AI & RAG' | 'AI Safety & Systems';
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  hfUrl?: string;
  liveUrl?: string;
  highlights: string[];
  status: 'ONLINE' | 'ACTIVE' | 'DEPLOYED' | 'OPERATIONAL';
}

export interface ArsenalProject {
  id: string;
  name: string;
  repo: string;
  url: string;
  description: string;
  tag: string;
  language?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; tags: string[] }[];
}

export interface Milestone {
  period: string;
  role: string;
  organization: string;
  location: string;
  achievements: string[];
  coreTech: string[];
}

export interface SystemMetric {
  name: string;
  value: string;
  unit?: string;
  description: string;
  status: 'nominal' | 'optimal' | 'maximum';
}

export const PROFILE = {
  name: "Craig Zifunzi",
  alias: "Star King",
  title: "AI Systems Engineer | Autonomous Agents & Inference Infrastructure",
  location: "Harare, Zimbabwe (100% Global Remote)",
  email: "kzodrax@gmail.com",
  github: "https://github.com/00000star",
  huggingface: "https://huggingface.co/Starboy001",
  tagline: "Engineering Autonomous Agent Runtimes, Inference Infrastructure, and Low-Level Linux/Android Systems.",
  summary:
    "Independent AI Systems Engineer specializing in autonomous agent execution runtimes, GPU inference infrastructure, and software for resource-constrained environments. Builds Python- and Rust-based agent loops, multi-agent tool orchestration, verification and testing harnesses, and Android/Linux automation tooling.",
  
  statusBadge: {
    label: "GPU INFERENCE BACKEND",
    state: "ONLINE — 24/7 DEDICATED",
    endpoint: "https://starboy001-antigravity-cloud.hf.space",
    vram: "24GB NVIDIA A10G (sm_86) & ZeroGPU Proxy",
  },

  benchmarks: [
    {
      name: "TCR (Task Completion Rate)",
      value: "98.4%",
      unit: "Accuracy",
      description: "End-to-end multi-agent deterministic execution across complex terminal tools and coding pipelines.",
      status: "optimal" as const,
    },
    {
      name: "Inference & Routing Latency",
      value: "140ms",
      unit: "P95 Trace",
      description: "Edge-to-cloud telemetry handshake and speculative execution dispatcher latency.",
      status: "optimal" as const,
    },
    {
      name: "Context Window Capacity",
      value: "128k",
      unit: "Tokens",
      description: "Active hierarchical memory retrieval and persistent graph-structured brain context.",
      status: "maximum" as const,
    },
    {
      name: "Continuous Runtime",
      value: "24/7",
      unit: "Uptime",
      description: "Autonomous cloud twin executing decoupled daemon workflows with zero human intervention.",
      status: "nominal" as const,
    },
  ],

  projects: [
    {
      id: "anti-rrsi",
      title: "Anti-RRSI",
      subtitle: "Inverse Regularized Recursive Self-Improvement Safety Framework",
      category: "AI Safety & Systems",
      status: "ACTIVE",
      description:
        "Empirical safety and red-teaming harness designed to evaluate and constrain autonomous agent tool execution against unconstrained recursive self-modification.",
      technologies: ["Python 3.10+", "PyTorch", "AST Analysis", "Security Sandboxing", "Red-Teaming"],
      metrics: [
        { label: "License", value: "Apache-2.0" },
        { label: "Status", value: "Passing Tests" },
        { label: "Scope", value: "Agent Safety" },
        { label: "Audit Gates", value: "Deterministic" },
      ],
      githubUrl: "https://github.com/00000star/anti-rrsi",
      highlights: [
        "Intercepts, sandboxes, and evaluates autonomous tool calls against strict blast-radius constraints.",
        "Reproducible red-teaming test suites simulating privilege escalation, secret scanning, and unauthorized commands.",
        "Formulates deterministic evaluation gates auditing tool-call blast radii, credential exposure, and environment sandboxing.",
      ],
    },
    {
      id: "autonomous-runtime",
      title: "Autonomous Agent Runtime",
      subtitle: "Persistent Execution Loop & Tool Supervisor (jonn & hermes-ascendant)",
      category: "Autonomous AI",
      status: "DEPLOYED",
      description:
        "Modular agent execution runtime featuring DAG-based step decomposition, structured tool dispatch, persistent disk-backed memory, and bounded retry handlers.",
      technologies: ["Python 3", "AsyncIO", "POSIX Signals", "SQLite WAL", "GitHub Actions CI"],
      metrics: [
        { label: "Architecture", value: "Observe-Act-Verify" },
        { label: "Task Engine", value: "DAG Decomposition" },
        { label: "Recovery", value: "OOM & SIGTERM Safe" },
        { label: "CI/CD", value: "Automated Gates" },
      ],
      githubUrl: "https://github.com/00000star/portfolio",
      highlights: [
        "Sovereign background agent loop with dynamic tool discovery, cognitive memory weights, and reactive execution.",
        "Background process supervisor with POSIX signal handling and OOM-aware process management to improve recovery from unexpected termination.",
        "Automated multi-tier testing gates (unit, integration, linting) integrated into continuous GitHub Actions workflows.",
      ],
    },
    {
      id: "starboy-prime",
      title: "GPU Inference Proxy & Cloud Runtimes",
      subtitle: "Multi-Backend Serving Engine (zerogpu-flash / STARBOY PRIME)",
      category: "Autonomous AI",
      status: "ONLINE",
      description:
        "Asynchronous FastAPI inference proxy capable of routing requests across configurable backends—supporting dedicated NVIDIA A10G (sm_86) endpoints and Hugging Face ZeroGPU dynamic allocations.",
      technologies: ["Python", "FastAPI", "CUDA sm_86", "Hugging Face Spaces", "SSE Streams", "Docker"],
      metrics: [
        { label: "Hardware", value: "NVIDIA A10G (sm_86)" },
        { label: "Latency P95", value: "140ms Trace" },
        { label: "Fallback", value: "Quota-Aware" },
        { label: "Test Fixtures", value: "400+ Serialized" },
      ],
      githubUrl: "https://github.com/00000star/portfolio",
      hfUrl: "https://starboy001-antigravity-cloud.hf.space",
      liveUrl: "https://starboy001-antigravity-cloud.hf.space",
      highlights: [
        "Asynchronous token streaming with connection pooling and configurable multi-backend routing.",
        "Quota-aware fallback routing between shared ZeroGPU dynamic tiers and dedicated A10G compute.",
        "Validated request schema parsing and error handling against a test suite of 400+ serialized evaluation fixtures.",
      ],
    },
    {
      id: "android-device-control",
      title: "Android UI Automation Agent",
      subtitle: "Autonomous Touch & Low-Level System Control Toolkit",
      category: "Edge Computing",
      status: "ACTIVE",
      description:
        "Autonomous mobile touch agent that parses screen UI hierarchies into indexed bounding boxes, computes coordinate targets, and executes touch/text actions with bounded retry loops.",
      technologies: ["Python 3", "ADB", "Android Internals", "Termux Bionic", "UI Hierarchy XML"],
      metrics: [
        { label: "Platform", value: "Android / Linux" },
        { label: "Inspection", value: "XML Hierarchy" },
        { label: "DNS Fallback", value: "Pure Python UDP" },
        { label: "Execution", value: "Observe-Act-Verify" },
      ],
      githubUrl: "https://github.com/00000star/portfolio",
      highlights: [
        "Parses native Android UI hierarchies into indexed bounding boxes with coordinate interpolation.",
        "Engineered a standard-library UDP DNS fallback to resolve network hosts where Android Bionic libc getaddrinfo fails in Termux containers.",
        "Strict Observe-Act-Verify loops ensure each UI state change succeeds before triggering subsequent actions.",
      ],
    },
    {
      id: "moviebox-mesh",
      title: "MovieBox Mesh & Cosmic OSS",
      subtitle: "Decentralized Offline-First P2P Media & Streaming Hub",
      category: "Edge Computing",
      status: "OPERATIONAL",
      description:
        "Decentralized, offline-first P2P media distribution and streaming node designed for intermittent, low-bandwidth, and constrained connectivity environments.",
      technologies: ["Python", "Rust", "P2P Protocols", "Local Chunk Caching", "Traffic Controls"],
      metrics: [
        { label: "Network", value: "P2P Mesh" },
        { label: "Offline Mode", value: "Local Caching" },
        { label: "Bandwidth", value: "Traffic-Budgeted" },
        { label: "License", value: "Open Source" },
      ],
      githubUrl: "https://github.com/00000star/moviebox-mesh",
      highlights: [
        "Offline-first P2P distribution combining local chunk caching, peer discovery, and strict traffic-budget controls.",
        "Tested peer discovery and chunk integrity across local Wi-Fi and hotspot meshes with zero reliance on continuous external internet.",
        "Includes terminal user interface (TUI) and lightweight streaming daemon.",
      ],
    },
    {
      id: "civilizationx",
      title: "Civilizationx",
      subtitle: "AI Survival & Multi-Agent Civilization Simulator",
      category: "Game AI & RAG",
      status: "ACTIVE",
      description:
        "Large-scale autonomous agent simulation exploring multi-agent survival dynamics, resource competition, and emergent social coordination.",
      technologies: ["TypeScript", "Python", "JavaScript", "Agentic Systems", "Simulation Engine"],
      metrics: [
        { label: "Architecture", value: "Multi-Agent" },
        { label: "Logic Depth", value: "1k+ LOC State" },
        { label: "Tick Engine", value: "Real-Time 60Hz" },
        { label: "Coordination", value: "Emergent Social" },
      ],
      githubUrl: "https://github.com/00000star/Civilizationx",
      highlights: [
        "Autonomous multi-agent survival dynamics driven by resource optimization loops.",
        "Deterministic real-time tick engine orchestrating continuous multi-agent state machines.",
        "Over 1,000 lines of hardened agentic state logic governing competitive and cooperative strategies.",
      ],
    },
  ] as Project[],

  arsenal: [
    {
      id: "anti-rrsi",
      name: "anti-rrsi",
      repo: "00000star/anti-rrsi",
      url: "https://github.com/00000star/anti-rrsi",
      description: "Recursive Self-Improvement Safety & Red-Teaming Framework: safety bounds and deterministic evaluation gates.",
      tag: "AI Safety & Alignment",
      language: "Python 3.10+",
    },
    {
      id: "moviebox-mesh",
      name: "moviebox-mesh",
      repo: "00000star/moviebox-mesh",
      url: "https://github.com/00000star/moviebox-mesh",
      description: "Decentralized P2P media, webtoon & gaming hub with offline chunk caching and bandwidth guardrails.",
      tag: "P2P & Distributed",
      language: "Python / Rust",
    },
    {
      id: "termux-aarch64-rust",
      name: "termux-aarch64-rust",
      repo: "00000star/termux-aarch64-rust",
      url: "https://github.com/00000star/termux-aarch64-rust",
      description: "Rust toolchain shims for Termux/Android aarch64: fixes the POSIX /system/bin linker mapping.",
      tag: "Systems & Toolchains",
      language: "Shell / Rust",
    },
    {
      id: "velocity-protocol",
      name: "velocity-protocol",
      repo: "00000star/velocity-protocol",
      url: "https://github.com/00000star/velocity-protocol",
      description: "Mindustry v146+ mod — fast logistics, high-throughput logic pipelines, and custom MLOG processors.",
      tag: "Logic & Gaming",
      language: "JSON / MLOG",
    },
    {
      id: "paperclip-ai-companies",
      name: "paperclip-ai-companies",
      repo: "00000star/paperclip-ai-companies",
      url: "https://github.com/00000star/paperclip-ai-companies",
      description: "AI company foundry for designing, scoring, and scaffolding autonomous corporate agent systems.",
      tag: "Agentic Systems",
      language: "TypeScript / Node.js",
    },
    {
      id: "disaster-mesh-communications",
      name: "disaster-mesh-communications",
      repo: "00000star/disaster-mesh-communications",
      url: "https://github.com/00000star/disaster-mesh-communications",
      description: "Decentralized, offline-first emergency coordination application for power grid outages and local mesh.",
      tag: "Resilience & Impact",
      language: "JavaScript / PWA",
    },
  ] as ArsenalProject[],

  skills: [
    {
      title: "Autonomous Agent Architecture",
      skills: [
        { name: "Observe–Act–Verify Loops", level: 98, tags: ["Deterministic Execution", "State Machines", "Auto-Approval"] },
        { name: "Tool Routing & Interop", level: 96, tags: ["JSON Schema", "POSIX CLI", "Subprocess IPC"] },
        { name: "Memory & State Graphs", level: 94, tags: ["Hierarchical Context", "Vector Stores", "Markdown Brain"] },
        { name: "Process Supervisors", level: 95, tags: ["POSIX Signals", "OOM-Aware", "Daemon Management"] },
      ],
    },
    {
      title: "Inference & Systems Engineering",
      skills: [
        { name: "GPU Serving & Fast API", level: 96, tags: ["FastAPI", "SSE Streaming", "Connection Pooling"] },
        { name: "CUDA & Cloud Runtimes", level: 92, tags: ["NVIDIA A10G sm_86", "ZeroGPU Dynamic Quota", "Docker"] },
        { name: "Linux & Android Internals", level: 95, tags: ["Termux", "Bionic DNS Shims", "Process Lifecycles"] },
        { name: "TypeScript & React / Vite", level: 94, tags: ["Tailwind CSS", "Three.js", "SPA Architecture"] },
      ],
    },
    {
      title: "Safety, Testing & CI/CD",
      skills: [
        { name: "AI Safety & Red-Teaming", level: 94, tags: ["Anti-RRSI", "Blast-Radius Sandboxing", "Security Auditing"] },
        { name: "CI/CD & Headless Testing", level: 95, tags: ["GitHub Actions", "Test Fixtures", "Automated Gates"] },
        { name: "Offline-First Protocols", level: 93, tags: ["P2P Mesh", "Traffic Budgeting", "IndexedDB"] },
      ],
    },
  ] as SkillCategory[],

  milestones: [
    {
      period: "2024 — PRESENT",
      role: "Lead Autonomous Systems Architect",
      organization: "Antigravity Autonomous Systems",
      location: "Harare & Cloud Edge",
      achievements: [
        "Architected STARBOY PRIME: 24/7 cloud GPU twin on NVIDIA A10G with SQLite WAL TaskStore and monotonic SSE streaming.",
        "Built Anti-RRSI: open-source empirical safety and red-teaming harness auditing autonomous agent tool execution.",
        "Engineered autonomous agent execution loops with DAG task decomposition, persistent memory, and OOM-aware recovery.",
      ],
      coreTech: ["Python 3.12", "TypeScript", "React", "Three.js", "FastAPI", "Docker", "PyTorch"],
    },
    {
      period: "2023 — 2024",
      role: "AI Systems & Edge Infrastructure Specialist",
      organization: "Autonomous Intelligence Lab",
      location: "Remote / Harare",
      achievements: [
        "Built MovieBox Mesh: decentralized P2P media streaming and chunk-caching node for constrained mobile bandwidth.",
        "Created disaster-mesh-communications: offline-first resilient coordination PWA for zero-infrastructure grid outages.",
        "Engineered custom Bionic libc network resolvers in pure Python standard library to bypass sandboxed mobile libc DNS constraints.",
      ],
      coreTech: ["TypeScript", "PWA", "IndexedDB", "Python", "FastAPI", "Linux IPC"],
    },
    {
      period: "2020 — 2023",
      role: "Systems & Distributed Software Engineer",
      organization: "Independent Open-Source Engineering",
      location: "Harare, Zimbabwe",
      achievements: [
        "Architected and released 50+ software repositories spanning systems utilities, mobile automation, and offline-first PWAs.",
        "Authored open hardware and resilience frameworks (clean-water-field-guide, open-repair-atlas).",
        "Optimized low-power edge micro-services for restricted battery and intermittent mobile network conditions.",
      ],
      coreTech: ["Rust", "Python", "Linux IPC", "Shell Scripting", "ServiceWorkers"],
    },
  ] as Milestone[],

  resumePath: "/sdcard/Antigravity_Projects/resume/craig_zifunzi_resume.html",
};
