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
    id: "wintech",
    position: "Software Developer",
    company: "Wintech Software Development",
    location: "Phnom Penh",
    startDate: new Date("2023-01-01"), // Approximate start of 2023
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
    description: [],
    achievements: [],
    skills: [],
    logo: "/beltei.png",
  },
];
