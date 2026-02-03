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
    position: "Software Developer",
    company: "Wintech Software Development",
    location: "Phnom Penh",
    startDate: new Date("2023-01-01"), 
    // endDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Architected and developed a robust Loan and Pawn Management System using Laravel as the core framework.",
      "Designed and implemented secure, scalable RESTful APIs to handle complex financial transactions, pawn collateral tracking, and interest calculation schedules.",
      "Optimized database queries and backend logic to support high-volume transactions across multiple branches.",
      "Built critical modules for loan origination, repayment tracking, and automated penalty calculations, ensuring 100% financial accuracy.",
    ],
    achievements: [
      "Pawn System: Architected and developed a robust Loan and Pawn Management System using Laravel as the core framework.",
      "API Architecture: Designed and implemented secure, scalable RESTful APIs to handle complex financial transactions.",
      "System Optimization: Optimized database queries and backend logic to support high-volume transactions.",
      "Feature Development: Built critical modules for loan origination, ensuring 100% financial accuracy.",
    ],
    skills: ["Laravel", "PHP", "MySQL", "RESTful APIs", "System Optimization"],
    companyUrl: "#", // Website not explicit in resume section, maybe use main site or leave #
    logo: "/wintech.png", // User requested specific logo
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
      "Specialized in Software Engineering, focusing on full-stack development, database management, and system architecture.",
      "Completed intensive coursework in Algorithms, Data Structures, Web Development, and Mobile Application Development.",
      "Collaborated with peers on various group projects, leading technical implementation and code reviews.",
    ],
    achievements: [
      "Successfully developed and deployed a student management system prototype as a semester project.",
    ],
    skills: ["OOP", "Database Design", "MVC Architecture"],
    logo: "/beltei.png",
  },
];
