import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "PHP",
    description: "Server-side scripting language.",
    rating: 5,
    icon: Icons.php,
  },
  {
    name: "Laravel",
    description: "PHP web application framework.",
    rating: 5,
    icon: Icons.laravel,
  },
  {
    name: "Javascript",
    description: "Versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Python",
    description: "Interpreted, high-level programming language.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "MySQL",
    description: "Relational database management system.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "PostgreSQL",
    description: "Advanced open source relational database.",
    rating: 4,
    icon: Icons.database, // using generic or closest
  },
  {
    name: "Database Design",
    description: "Designing efficient database schemas.",
    rating: 5,
    icon: Icons.server, // using generic or closest
  },
  {
    name: "Git/GitHub",
    description: "Version control and collaboration.",
    rating: 5,
    icon: Icons.gitRepoIcon,
  },
  {
    name: "Postman",
    description: "API development and testing.",
    rating: 5,
    icon: Icons.postman,
  },
  {
    name: "Linux (Ubuntu)",
    description: "Open source operating system.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "Nginx",
    description: "Web server and reverse proxy.",
    rating: 4,
    icon: Icons.nginx,
  },
  {
    name: "Composer",
    description: "Dependency manager for PHP.",
    rating: 5,
    icon: Icons.php, // No specific icon
  },
  {
    name: "RESTful APIs",
    description: "Architectural style for web services.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "OOP",
    description: "Object-Oriented Programming.",
    rating: 5,
    icon: Icons.code, // Generic
  },
  {
    name: "MVC Architecture",
    description: "Model-View-Controller pattern.",
    rating: 5,
    icon: Icons.layout, // Generic
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
