import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  level: "Core" | "Project Experience" | "Familiar";
  icon: any;
  color?: string;
}

export const skillsUnsorted: skillsInterface[] = [
  // Core: what I reach for every week
  {
    name: "PHP",
    description: "Primary backend language for business applications.",
    level: "Core",
    icon: Icons.php,
    color: "#777BB4",
  },
  {
    name: "Laravel",
    description: "Production APIs, queues, validation, and business workflows.",
    level: "Core",
    icon: Icons.laravel,
    color: "#FF2D20",
  },
  {
    name: "NestJS",
    description: "Structured Node.js services with guards, RBAC, and Swagger.",
    level: "Core",
    icon: Icons.nestjs,
    color: "#E0234E",
  },
  {
    name: "TypeScript",
    description: "NestJS services, CLIs like apicheck, and React frontends.",
    level: "Core",
    icon: Icons.typescript,
    color: "#3178C6",
  },
  {
    name: "Python",
    description: "APIs, CLIs, search and ML pipelines.",
    level: "Core",
    icon: Icons.python,
    color: "#3776AB",
  },
  {
    name: "FastAPI",
    description: "The API layer behind OpenVisionSearch, ShiftAI and Mimic.",
    level: "Core",
    icon: Icons.fastapi,
    color: "#009688",
  },
  {
    name: "MySQL",
    description: "Transactional schemas for finance and school systems.",
    level: "Core",
    icon: Icons.mysql,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    description: "Relational data, full-text search, and pgvector.",
    level: "Core",
    icon: Icons.postgresql,
    color: "#4169E1",
  },
  {
    name: "Database Design",
    description: "Normalised schemas, indexes, and query tuning.",
    level: "Core",
    icon: Icons.database,
    color: "#64748B",
  },
  {
    name: "RESTful APIs",
    description: "Clear contracts, validation, and documentation.",
    level: "Core",
    icon: Icons.laptop,
    color: "#0EA5E9",
  },
  {
    name: "Git/GitHub",
    description: "Version control, reviews, and releases.",
    level: "Core",
    icon: Icons.gitRepoIcon,
    color: "#181717",
  },

  // Project experience: shipped in real or open-source work
  {
    name: "Vector search",
    description: "Qdrant and pgvector, with OpenCLIP and text embeddings.",
    level: "Project Experience",
    icon: Icons.search,
  },
  {
    name: "LLMs & RAG",
    description: "Ollama, OpenAI-compatible APIs, citations, evaluation.",
    level: "Project Experience",
    icon: Icons.brain,
  },
  {
    name: "Fine-tuning",
    description: "LoRA / PEFT on Hugging Face models, auto-eval loops.",
    level: "Project Experience",
    icon: Icons.pytorch,
    color: "#EE4C2C",
  },
  {
    name: "API security",
    description: "OWASP API Top 10 checks, auth, IDOR, rate limits.",
    level: "Project Experience",
    icon: Icons.shield,
  },
  {
    name: "Rust",
    description: "free-remote: encrypted transport, capture, input.",
    level: "Project Experience",
    icon: Icons.rust,
    color: "#000000",
  },
  {
    name: "Docker",
    description: "Compose setups for every project I ship.",
    level: "Project Experience",
    icon: Icons.docker,
    color: "#2496ED",
  },
  {
    name: "Redis",
    description: "Laravel queues and Python job workers.",
    level: "Project Experience",
    icon: Icons.redis,
    color: "#DC382D",
  },
  {
    name: "GitHub Actions",
    description: "CI, CodeQL, and release workflows.",
    level: "Project Experience",
    icon: Icons.githubActions,
    color: "#2088FF",
  },
  {
    name: "React",
    description: "Frontends for Knowledge Assistant and ShiftAI.",
    level: "Project Experience",
    icon: Icons.react,
    color: "#61DAFB",
  },
  {
    name: "Vue.js",
    description: "Mimic and QuickNotes interfaces.",
    level: "Project Experience",
    icon: Icons.vuejs,
    color: "#4FC08D",
  },
  {
    name: "JavaScript",
    description: "Frontend integration and browser logic.",
    level: "Project Experience",
    icon: Icons.javascript,
    color: "#F7DF1E",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first styling, including this site.",
    level: "Project Experience",
    icon: Icons.tailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Linux (Ubuntu)",
    description: "Daily driver and deployment target.",
    level: "Project Experience",
    icon: Icons.linux,
    color: "#FCC624",
  },
  {
    name: "Postman",
    description: "API exploration and shared collections.",
    level: "Project Experience",
    icon: Icons.postman,
    color: "#FF6C37",
  },

  // Familiar: used, still growing
  {
    name: "Angular",
    description: "HR system frontend.",
    level: "Familiar",
    icon: Icons.angular,
    color: "#DD0031",
  },
  {
    name: "Django",
    description: "High-level Python web framework.",
    level: "Familiar",
    icon: Icons.django,
    color: "#092E20",
  },
  {
    name: "Nginx",
    description: "Reverse proxy and static hosting.",
    level: "Familiar",
    icon: Icons.nginx,
    color: "#009639",
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
