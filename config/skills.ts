import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  level: "Core" | "Project Experience" | "Familiar";
  icon: any;
  color?: string;
}

export const skillsUnsorted: skillsInterface[] = [
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
    description: "Node.js framework for structured, scalable backend services.",
    level: "Core",
    icon: Icons.nestjs,
    color: "#E0234E",
  },
  {
    name: "Javascript",
    description: "Frontend integration and browser application logic.",
    level: "Project Experience",
    icon: Icons.javascript,
    color: "#F7DF1E",
  },
  {
    name: "Python",
    description: "APIs, command-line tools, and automation.",
    level: "Project Experience",
    icon: Icons.python,
    color: "#3776AB",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript.",
    level: "Core",
    icon: Icons.typescript,
    color: "#3178C6",
  },
  {
    name: "Django",
    description: "High-level Python web framework.",
    level: "Familiar",
    icon: Icons.django,
    color: "#092E20",
  },
  {
    name: "FastAPI",
    description: "Modern Python web framework for APIs.",
    level: "Project Experience",
    icon: Icons.fastapi,
    color: "#009688",
  },
  {
    name: "Vue.js",
    description: "Progressive JavaScript framework.",
    level: "Project Experience",
    icon: Icons.vuejs,
    color: "#4FC08D",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS framework.",
    level: "Project Experience",
    icon: Icons.tailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Docker",
    description: "Containerization platform.",
    level: "Project Experience",
    icon: Icons.docker,
    color: "#2496ED",
  },
  {
    name: "AI & Machine Learning",
    description: "TensorFlow, Pandas, NumPy, scikit-learn.",
    level: "Familiar",
    icon: Icons.tensorflow,
    color: "#FF6F00",
  },
  {
    name: "MySQL",
    description: "Relational database management system.",
    level: "Core",
    icon: Icons.mysql,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    description: "Advanced open source relational database.",
    level: "Project Experience",
    icon: Icons.postgresql,
    color: "#4169E1",
  },
  {
    name: "Database Design",
    description: "Designing efficient database schemas.",
    level: "Core",
    icon: Icons.database,
    color: "#64748B",
  },
  {
    name: "Git/GitHub",
    description: "Version control and collaboration.",
    level: "Core",
    icon: Icons.gitRepoIcon,
    color: "#181717",
  },
  {
    name: "Postman",
    description: "API development and testing.",
    level: "Project Experience",
    icon: Icons.postman,
    color: "#FF6C37",
  },
  {
    name: "Linux (Ubuntu)",
    description: "Open source operating system.",
    level: "Project Experience",
    icon: Icons.linux,
    color: "#FCC624",
  },
  {
    name: "Nginx",
    description: "Web server and reverse proxy.",
    level: "Familiar",
    icon: Icons.nginx,
    color: "#009639",
  },
  {
    name: "Composer",
    description: "Dependency manager for PHP.",
    level: "Core",
    icon: Icons.composer,
    color: "#885630",
  },
  {
    name: "RESTful APIs",
    description: "Architectural style for web services.",
    level: "Core",
    icon: Icons.laptop,
    color: "#0EA5E9",
  },
  {
    name: "OOP",
    description: "Object-Oriented Programming.",
    level: "Project Experience",
    icon: Icons.code,
    color: "#8B5CF6",
  },
  {
    name: "MVC Architecture",
    description: "Model-View-Controller pattern.",
    level: "Project Experience",
    icon: Icons.layout,
    color: "#14B8A6",
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
