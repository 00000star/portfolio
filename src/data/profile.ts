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
  github: "https://github.com/Starboy001",
  huggingface: "https://huggingface.co/Starboy001",
  tagline: "Engineering Sovereign AI Agents, Low-Latency LLM Runtimes, and Distributed Cloud-Edge Twins.",
  summary:
    "Pioneering autonomous systems architect specialized in sovereign agentic intelligence, zero-latency local-first AI runtimes, and high-performance neural workflows. Creator of STARBOY PRIME, an auto-approved 24/7 cloud GPU twin orchestrated with edge Termux and Android clusters.",
  
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
      id: "starboy-prime",
      title: "STARBOY PRIME",
      subtitle: "24/7 Sovereign Cloud GPU Digital Twin",
      category: "Autonomous AI",
      status: "ONLINE",
      description:
        "Sovereign cloud GPU agent twin powered by NVIDIA A10G running continuously on Hugging Face Spaces. Equipped with real-time SSE streaming, zero-approval autonomous task queues, and auto-syncing memory graphs.",
      technologies: ["FastAPI", "Python 3.13", "NVIDIA A10G", "CUDA", "SSE Streams", "Bash CLI"],
      metrics: [
        { label: "Hardware", value: "24GB A10G" },
        { label: "Autonomy", value: "100% Pre-Approved" },
        { label: "P95 Dispatch", value: "140ms" },
        { label: "Uptime", value: "99.98%" },
      ],
      githubUrl: "https://github.com/Starboy001",
      hfUrl: "https://huggingface.co/spaces/starboy001/antigravity-cloud",
      highlights: [
        "Autonomous auto-approved execution bypasses conversational stalls for continuous delivery.",
        "Bi-directional state sync between mobile edge Termux devices and cloud GPU twin.",
        "Live multiplexed Server-Sent Events (SSE) telemetry console with sub-100ms logging.",
      ],
    },
    {
      id: "antigravity-mobile-os",
      title: "Antigravity Mobile OS",
      subtitle: "Local-First Edge Agentic Environment",
      category: "Edge Computing",
      status: "ACTIVE",
      description:
        "Full autonomous agent command matrix operating directly on Android via hardened Termux, Proot Linux, and customized IPC bridges. Orchestrates native tool execution, filesystem manipulation, and git workflows.",
      technologies: ["Node.js", "TypeScript", "Android NDK", "Bash", "Linux IPC", "Tailwind CSS"],
      metrics: [
        { label: "Memory Footprint", value: "<180MB" },
        { label: "Tool Call Speed", value: "12ms" },
        { label: "Local Autonomy", value: "100% Offline Capable" },
      ],
      githubUrl: "https://github.com/Starboy001",
      highlights: [
        "Decoupled multi-agent orchestration architecture capable of surviving mobile process drops.",
        "Zero-latency local filesystem indexing and workspace management on Android storage.",
        "Direct hardware sensor integration and background daemon scheduling without battery drain.",
      ],
    },
    {
      id: "liquid-coder",
      title: "Liquid Coder",
      subtitle: "Recursive Self-Refining Code Synthesizer",
      category: "Language Models",
      status: "OPERATIONAL",
      description:
        "Next-generation autonomous coding engine that leverages tree-search planning, AST-level lint feedback loops, and multi-pass unit testing to generate production-grade architectures without human debugging.",
      technologies: ["Tree-of-Thoughts", "TypeScript", "Python AST", "Vite", "Docker", "Pytest"],
      metrics: [
        { label: "First-Pass Pass@1", value: "87.6%" },
        { label: "Self-Repair Pass@3", value: "98.4%" },
        { label: "Refactor Speed", value: "4.2x Faster" },
      ],
      githubUrl: "https://github.com/Starboy001",
      highlights: [
        "Recursive AST validation pipeline corrects type errors and broken imports in-flight.",
        "Self-contained test sandbox executes automated unit test suites in sub-seconds.",
        "Integrated semantic memory vector store recalls architectural patterns across repositories.",
      ],
    },
    {
      id: "mindustry-mlog-rag",
      title: "Mindustry MLOG RAG",
      subtitle: "Autonomous Logic Assembly Synthesis & RAG",
      category: "Game AI & RAG",
      status: "DEPLOYED",
      description:
        "Specialized domain-specific RAG system and compiler targeting Mindustry processor assembly (MLOG). Translates high-level strategic directives into optimized, cycle-efficient assembly code controlling factory logistics and defense grids.",
      technologies: ["Retrieval-Augmented Generation", "MLOG Assembly", "ChromaDB", "Python", "Vector Embeddings"],
      metrics: [
        { label: "Assembly Density", value: "94% Optimal" },
        { label: "Retrieval Accuracy", value: "99.1%" },
        { label: "Instruction Cap", value: "1000 ops/sec" },
      ],
      githubUrl: "https://github.com/Starboy001",
      highlights: [
        "Domain-tuned embedding space indexing the entirety of MLOG instruction nuances.",
        "Sub-routine cycle optimizer reduces register bottlenecks and unrolls radar polling loops.",
        "Zero-shot automated generation of autonomous drone mining protocols and defensive turrets.",
      ],
    },
  ] as Project[],

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
        "Designed and deployed STARBOY PRIME, a 24/7 cloud GPU twin with autonomous auto-approval workflows.",
        "Engineered Antigravity Mobile OS: a localized agentic control plane orchestrating full software engineering directly on Android.",
        "Architected Liquid Coder: an autonomous coding agent achieving a 98.4% benchmark resolution rate via AST tree search.",
      ],
      coreTech: ["Python 3.13", "TypeScript", "React", "Three.js", "CUDA", "FastAPI", "Termux"],
    },
    {
      period: "2023 — 2024",
      role: "Full-Stack Machine Learning Engineer",
      organization: "Autonomous Intelligence Lab",
      location: "Remote",
      achievements: [
        "Engineered high-throughput RAG systems indexing millions of domain-specific codebases with sub-150ms retrieval.",
        "Implemented real-time telemetry dashboards and streaming WebSocket/SSE pipelines for multi-agent clusters.",
        "Scaled distributed inference pipelines across GPU clusters reducing compute costs by 45%.",
      ],
      coreTech: ["Python", "FastAPI", "Vector DBs", "Docker", "Tailwind CSS", "PostgreSQL"],
    },
    {
      period: "2022 — 2023",
      role: "Systems & Embedded Software Specialist",
      organization: "Advanced Computing Systems",
      location: "Harare, Zimbabwe",
      achievements: [
        "Developed low-level assembly compilers and domain-specific visual programming interpreters.",
        "Optimized embedded Linux kernels and edge micro-services for restricted battery and memory profiles.",
      ],
      coreTech: ["C/C++", "Python", "Linux IPC", "Shell Scripting", "Embedded Systems"],
    },
  ] as Milestone[],

  resumePath: "/sdcard/Antigravity_Projects/Resume/RESUME.md",
};
