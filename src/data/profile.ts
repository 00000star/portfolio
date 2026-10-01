export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Autonomous AI' | 'Edge Computing' | 'Language Models' | 'Game AI & RAG';
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
  title: "Full-Stack AI/ML & Autonomous Systems Architect",
  location: "Harare, Zimbabwe / Global Edge Mesh",
  email: "craigzifunzi@gmail.com",
  github: "https://github.com/00000star",
  huggingface: "https://huggingface.co/Starboy001",
  tagline: "Engineering Sovereign AI Agents, Low-Latency LLM Runtimes, and Distributed Cloud-Edge Twins.",
  summary:
    "Pioneering autonomous systems architect specialized in sovereign agentic intelligence, zero-latency local-first AI runtimes, and distributed neural workflows. Creator of STARBOY PRIME (NVIDIA A10G cloud GPU twin), Civilizationx (large-scale multi-agent simulation), and resilient offline-first mesh networks.",
  
  statusBadge: {
    label: "STARBOY PRIME A10G TWIN",
    state: "ONLINE — 24/7 SOVEREIGN",
    endpoint: "https://starboy001-antigravity-cloud.hf.space",
    vram: "24GB NVIDIA A10G (ZeroGPU)",
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
      name: "Zero-Loss Context Window",
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
    {
      id: "starboy-prime",
      title: "STARBOY PRIME",
      subtitle: "24/7 Sovereign Cloud GPU Twin (NVIDIA A10G)",
      category: "Autonomous AI",
      status: "ONLINE",
      description:
        "Antigravity's sovereign cloud twin operating continuously on Hugging Face Spaces. Features SQLite WAL TaskStore, monotonic SSE streaming, and 1:1 synchronized brain memory.",
      technologies: ["Python", "PyTorch", "CUDA", "FastAPI", "Docker", "SSE Streams"],
      metrics: [
        { label: "Hardware", value: "24GB NVIDIA A10G" },
        { label: "Handshake", value: "140ms P95" },
        { label: "Runtime", value: "24/7 Continuous" },
        { label: "Persistence", value: "SQLite WAL Store" },
      ],
      githubUrl: "https://github.com/00000star",
      hfUrl: "https://starboy001-antigravity-cloud.hf.space",
      liveUrl: "https://starboy001-antigravity-cloud.hf.space",
      highlights: [
        "SQLite WAL TaskStore architecture guaranteeing zero task loss and idempotent state recovery.",
        "Monotonic SSE streaming pipe delivers sub-100ms bidirectional event traces and execution telemetry.",
        "1:1 synchronized brain memory linking mobile edge Termux nodes to cloud GPU acceleration.",
      ],
    },
    {
      id: "paperclip-ai-companies",
      title: "paperclip-ai-companies",
      subtitle: "Autonomous AI Company Foundry & Scaffolding Engine",
      category: "Language Models",
      status: "DEPLOYED",
      description:
        "Enterprise-grade architecture for designing, scoring, and scaffolding Paperclip-compatible autonomous company packages and automated agent operations.",
      technologies: ["TypeScript", "Node.js", "Tailwind CSS", "Autonomous Workflows", "Scaffolding Engine"],
      metrics: [
        { label: "Engine Type", value: "Company Foundry" },
        { label: "Workflows", value: "Multi-Agent Ops" },
        { label: "Scaffolding", value: "Automated MVP" },
        { label: "Standard", value: "Paperclip Spec" },
      ],
      githubUrl: "https://github.com/00000star/paperclip-ai-companies",
      highlights: [
        "Autonomous company design and viability evaluation engine for agentic enterprises.",
        "Generates complete, production-ready runnable MVP packages from declarative specs.",
        "Multi-agent role assignment orchestrating CEO, CTO, and QA autonomous personas.",
      ],
    },
    {
      id: "disaster-mesh-communications",
      title: "disaster-mesh-communications",
      subtitle: "Offline-First Resilient Community Coordination PWA",
      category: "Edge Computing",
      status: "OPERATIONAL",
      description:
        "Decentralized, offline-first emergency coordination application designed for power grid blackouts, infrastructure collapse, and local mesh communication.",
      technologies: ["PWA", "JavaScript", "LocalStorage/IndexedDB", "ServiceWorkers", "Mesh Protocol"],
      metrics: [
        { label: "Offline Mode", value: "100% Offline" },
        { label: "Routing", value: "Zero-Infra Mesh" },
        { label: "Persistence", value: "IndexedDB P2P" },
        { label: "Resilience", value: "Grid Collapse Safe" },
      ],
      githubUrl: "https://github.com/00000star/disaster-mesh-communications",
      highlights: [
        "100% offline capable architecture running without centralized servers, internet, or cell towers.",
        "Zero-infrastructure routing protocol facilitating peer-to-peer message store-and-forward mesh.",
        "Progressive Web App with ServiceWorkers and IndexedDB synchronization for disaster resilience.",
      ],
    },
  ] as Project[],

  arsenal: [
    {
      id: "agi-engineering-forge",
      name: "AGI_engineering_forge",
      repo: "00000star/AGI_engineering_forge",
      url: "https://github.com/00000star/AGI_engineering_forge",
      description: "Cognitive architecture forge, reasoning engines, and autonomous multi-agent engineering workflows.",
      tag: "Autonomous AGI",
      language: "Python / TypeScript",
    },
    {
      id: "developer",
      name: "developer",
      repo: "00000star/developer",
      url: "https://github.com/00000star/developer",
      description: "Autonomous software development workspace, CLI scaffolding, and recursive self-improving coding engine.",
      tag: "Agentic Dev",
      language: "TypeScript / Node.js",
    },
    {
      id: "zimsmeai-solutions",
      name: "zimsmeai-solutions",
      repo: "00000star/zimsmeai-solutions",
      url: "https://github.com/00000star/zimsmeai-solutions",
      description: "Localized, practical AI automation platforms built specifically for African small-and-medium enterprises.",
      tag: "Applied AI",
      language: "Python / React",
    },
    {
      id: "clean-water-field-guide",
      name: "clean-water-field-guide",
      repo: "00000star/clean-water-field-guide",
      url: "https://github.com/00000star/clean-water-field-guide",
      description: "Offline-capable humanitarian survival handbook and technical field guide for emergency water purification.",
      tag: "Resilience & Impact",
      language: "Offline Web / Docs",
    },
    {
      id: "open-repair-atlas",
      name: "open-repair-atlas",
      repo: "00000star/open-repair-atlas",
      url: "https://github.com/00000star/open-repair-atlas",
      description: "Decentralized hardware diagnostics and repair knowledge atlas empowering grassroots local engineering.",
      tag: "Open Hardware",
      language: "Markdown / Schematics",
    },
  ] as ArsenalProject[],

  skills: [
    {
      title: "Autonomous Agent Architecture",
      skills: [
        { name: "Agentic Loop Orchestration", level: 98, tags: ["Autonomous Loops", "State Machines", "Auto-Approval"] },
        { name: "Tool Calling & Interop", level: 96, tags: ["JSON Schema", "POSIX CLI", "Subprocess IPC"] },
        { name: "Memory & State Graphs", level: 94, tags: ["Hierarchical Context", "Vector Stores", "Markdown Brain"] },
        { name: "Distributed AI Twins", level: 95, tags: ["Edge-to-Cloud", "SSE Streaming", "A10G GPU"] },
      ],
    },
    {
      title: "Full-Stack & Systems Engineering",
      skills: [
        { name: "TypeScript & React / Vite", level: 96, tags: ["Tailwind CSS", "Three.js", "SPA Architecture"] },
        { name: "Python Systems & Backend", level: 97, tags: ["FastAPI", "AsyncIO", "Pydantic", "PyTorch"] },
        { name: "Linux & Android Internals", level: 95, tags: ["Termux", "Proot", "Bash Automation", "Systemd"] },
        { name: "Docker & Cloud Infrastructure", level: 92, tags: ["Hugging Face Spaces", "Containerization", "CI/CD"] },
      ],
    },
    {
      title: "AI/ML Core & Generative Pipelines",
      skills: [
        { name: "RAG & Vector Retrieval", level: 94, tags: ["Embeddings", "ChromaDB", "Semantic Reranking"] },
        { name: "Prompt Architecture & Reasoning", level: 99, tags: ["Tree-of-Thoughts", "Chain-of-Density", "Few-Shot"] },
        { name: "CUDA & GPU Optimization", level: 90, tags: ["ZeroGPU", "vLLM", "Quantization", "BitsAndBytes"] },
      ],
    },
  ] as SkillCategory[],

  milestones: [
    {
      period: "2024 — PRESENT",
      role: "Lead Autonomous Systems Architect & Founder",
      organization: "Star King AI / Antigravity Autonomous Systems",
      location: "Harare & Cloud Edge",
      achievements: [
        "Architected STARBOY PRIME: 24/7 cloud GPU twin on NVIDIA A10G with SQLite WAL TaskStore and monotonic SSE streaming.",
        "Built Civilizationx: multi-agent AI survival simulator featuring 1k+ LOC agentic state logic and real-time tick engines.",
        "Engineered paperclip-ai-companies: automated foundry for designing, scoring, and scaffolding autonomous AI enterprises.",
      ],
      coreTech: ["Python 3.13", "TypeScript", "React", "Three.js", "CUDA", "FastAPI", "Docker"],
    },
    {
      period: "2023 — 2024",
      role: "Full-Stack AI & Edge Infrastructure Specialist",
      organization: "Autonomous Intelligence Lab",
      location: "Remote / Harare",
      achievements: [
        "Created disaster-mesh-communications: offline-first resilient coordination PWA for zero-infrastructure power grid outages.",
        "Developed AGI_engineering_forge and autonomous developer agent pipelines for automated codebase synthesis.",
        "Implemented real-time telemetry dashboards and streaming WebSocket/SSE pipelines for multi-agent clusters.",
      ],
      coreTech: ["TypeScript", "PWA", "IndexedDB", "Python", "FastAPI", "Tailwind CSS"],
    },
    {
      period: "2022 — 2023",
      role: "Systems & Distributed Software Engineer",
      organization: "Advanced Computing Systems",
      location: "Harare, Zimbabwe",
      achievements: [
        "Built localized AI solutions for emerging markets (zimsmeai-solutions) and open-access resilience tooling.",
        "Authored open hardware and resilience frameworks (clean-water-field-guide, open-repair-atlas).",
        "Optimized low-power edge micro-services for restricted battery and intermittent mobile network conditions.",
      ],
      coreTech: ["C/C++", "Python", "Linux IPC", "Shell Scripting", "ServiceWorkers"],
    },
  ] as Milestone[],

  resumePath: "/sdcard/Antigravity_Projects/Resume/RESUME.md",
};
