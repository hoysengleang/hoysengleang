import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "peng-huoth-group",
    position: "Full Stack Developer",
    company: "Peng Huoth Group",
    location: "Phnom Penh, Cambodia",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    description: [
      "Build web admin systems and REST APIs in Laravel for the group's business operations, from database design to deployment.",
      "Built the NestJS backend API for the Peng Huoth mobile app.",
      "Extend the Angular web admin with new features for managing the mobile app.",
      "Set up and configure the staging and production servers our applications run on.",
      "Troubleshoot production issues and make practical performance and reliability fixes.",
    ],
    achievements: [
      "Own web admin systems and REST APIs end to end in Laravel and NestJS, from database design through to the production server.",
      "Delivered the NestJS backend for the Peng Huoth mobile app, with Angular admin features to manage it.",
      "Configured separate staging and production environments so changes are tested before they reach users.",
    ],
    skills: [
      "Laravel",
      "Nest.js",
      "Angular",
      "PHP",
      "Typescript",
      "MySQL",
      "RESTful APIs",
      "Linux",
    ],
    logo: "/career/peng-huoth.jpeg",
  },
  // {
  //   id: "east-group",
  //   position: "R&D Software Engineer",
  //   company: "East Group",
  //   location: "Phnom Penh",
  //   startDate: new Date("2025-01-01"),
  //   endDate: "Present",
  //   description: [
  //     "Leading research and development initiatives to innovate and optimize internal business processes through advanced software solutions.",
  //     "Developing high-performance, scalable applications by applying modern software engineering principles and best practices.",
  //     "Collaborating with cross-functional teams to design and implement robust system architectures for enterprise-grade applications.",
  //     "Exploring and integrating emerging technologies to enhance system efficiency and user experience across platforms.",
  //   ],
  //   achievements: [
  //     "System Innovation: Spearheaded the research and implementation of new technologies, significantly improving operational workflows.",
  //     "Performance Optimization: Enhanced application performance and stability through rigorous code reviews and architectural improvements.",
  //     "Technical Leadership: Mentored junior developers and established best practices for secure and maintainable codebases.",
  //   ],
  //   skills: ["System Optimization", "Database Design", "RESTful APIs", "OOP", "MVC Architecture"],
  //   companyUrl: "#", // Placeholder URL
  //   logo: "/east-group.png", // Use logo if available
  // },
  {
    id: "wintech",
    position: "Backend Developer (R&D Officer)",
    company: "Wintech Software Development",
    location: "Phnom Penh, Cambodia",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2025-12-31"),
    description: [
      "Pawn System: Architected and developed a robust Loan and Pawn Management System using Laravel as the core framework.",
      "API Architecture: Designed and implemented secure, scalable RESTful APIs to handle complex financial transactions, pawn collateral tracking, and interest calculation schedules.",
      "API Documentation: Documented the entire RESTful API enabling smoother collaboration with the frontend team and reducing integration bugs.",
      "Feature Development: Built critical modules for loan origination, repayment tracking, and automated penalty calculations with centralized validation and transactional writes.",
      "Background Processing: Leveraged Redis-backed queues for heavy lifting tasks like batch interest calculations and mass notification sending, preventing system lag during peak hours.",
      "System Optimization: Optimized database queries and backend logic to support high-volume transactions across multiple branches.",
    ],
    achievements: [
      "Built financial workflows for core banking and pawn management with consistent business rules and data-integrity safeguards",
      "Specialized in technical research, environment standardization using Docker, and performance benchmarking",
      "Designed and documented complete RESTful API architecture for seamless frontend integration",
      "Implemented Redis-backed queue system for high-volume batch processing",
    ],
    skills: ["Laravel", "PHP", "MySQL", "RESTful APIs", "Docker"],
    companyUrl: "#",
    logo: "/wintech.png",
  },
];

export const education: CareerExperienceInterface[] = [
  {
    id: "beltei",
    position: "Bachelor of Software Engineering",
    company: "BELTEI International University",
    location: "Phnom Penh",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2025-01-01"),
    description: [
      "Completed core software engineering coursework focused on algorithms, object-oriented design, and database systems.",
      "Built academic projects using MVC architecture, RESTful API principles, and normalized relational database design.",
      "Practiced collaborative development through team assignments, code reviews, and project documentation.",
      "Strengthened software testing, debugging, and requirement analysis skills through practical lab work.",
    ],
    achievements: [
      "Graduated with strong practical foundation in backend engineering and system design concepts.",
      "Delivered multiple end-to-end course projects with clear technical documentation and presentation.",
      "Consistently applied clean coding practices and structured problem-solving in capstone assignments.",
      "Built confidence in translating business requirements into maintainable software modules.",
    ],
    skills: [
      "OOP",
      "Database Design",
      "MVC Architecture",
      "RESTful APIs",
      "MySQL",
      "Git",
    ],
    logo: "/beltei.png",
  },
];
