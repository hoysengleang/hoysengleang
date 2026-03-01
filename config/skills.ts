import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  color?: string;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "PHP",
    description: "Server-side scripting language.",
    rating: 5,
    icon: Icons.php,
    color: "#777BB4",
  },
  {
    name: "Laravel",
    description: "PHP web application framework.",
    rating: 5,
    icon: Icons.laravel,
    color: "#FF2D20",
  },
  {
    name: "Javascript",
    description: "Versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
    color: "#F7DF1E",
  },
  {
    name: "Python",
    description: "Interpreted, high-level programming language.",
    rating: 5,
    icon: Icons.python,
    color: "#3776AB",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript.",
    rating: 4,
    icon: Icons.typescript,
    color: "#3178C6",
  },
  {
    name: "Django",
    description: "High-level Python web framework.",
    rating: 4,
    icon: Icons.django,
    color: "#092E20",
  },
  {
    name: "FastAPI",
    description: "Modern Python web framework for APIs.",
    rating: 4,
    icon: Icons.fastapi,
    color: "#009688",
  },
  {
    name: "Vue.js",
    description: "Progressive JavaScript framework.",
    rating: 4,
    icon: Icons.vuejs,
    color: "#4FC08D",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Docker",
    description: "Containerization platform.",
    rating: 3,
    icon: Icons.docker,
    color: "#2496ED",
  },
  {
    name: "AI & Machine Learning",
    description: "TensorFlow, Pandas, NumPy, scikit-learn.",
    rating: 3,
    icon: Icons.tensorflow,
    color: "#FF6F00",
  },
  {
    name: "MySQL",
    description: "Relational database management system.",
    rating: 5,
    icon: Icons.mysql,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    description: "Advanced open source relational database.",
    rating: 4,
    icon: Icons.postgresql,
    color: "#4169E1",
  },
  {
    name: "Database Design",
    description: "Designing efficient database schemas.",
    rating: 5,
    icon: Icons.database,
    color: "#64748B",
  },
  {
    name: "Git/GitHub",
    description: "Version control and collaboration.",
    rating: 5,
    icon: Icons.gitRepoIcon,
    color: "#181717",
  },
  {
    name: "Postman",
    description: "API development and testing.",
    rating: 5,
    icon: Icons.postman,
    color: "#FF6C37",
  },
  {
    name: "Linux (Ubuntu)",
    description: "Open source operating system.",
    rating: 4,
    icon: Icons.linux,
    color: "#FCC624",
  },
  {
    name: "Nginx",
    description: "Web server and reverse proxy.",
    rating: 4,
    icon: Icons.nginx,
    color: "#009639",
  },
  {
    name: "Composer",
    description: "Dependency manager for PHP.",
    rating: 5,
    icon: Icons.composer,
    color: "#885630",
  },
  {
    name: "RESTful APIs",
    description: "Architectural style for web services.",
    rating: 5,
    icon: Icons.laptop,
    color: "#0EA5E9",
  },
  {
    name: "OOP",
    description: "Object-Oriented Programming.",
    rating: 5,
    icon: Icons.code,
    color: "#8B5CF6",
  },
  {
    name: "MVC Architecture",
    description: "Model-View-Controller pattern.",
    rating: 5,
    icon: Icons.layout,
    color: "#14B8A6",
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
