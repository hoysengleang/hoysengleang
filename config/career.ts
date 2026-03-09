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
    position: "Backend Developer (R&D Officer)",
    company: "Wintech Software Development",
    location: "1363 National Road No. 2, Phnom Penh 120602",
    startDate: new Date("2023-01-01"), 
    endDate: "Present",
    description: [
      "Pawn System: Architected and developed a robust Loan and Pawn Management System using Laravel as the core framework.",
      "API Architecture: Designed and implemented secure, scalable RESTful APIs to handle complex financial transactions, pawn collateral tracking, and interest calculation schedules.",
      "API Documentation: Documented the entire RESTful API enabling smoother collaboration with the frontend team and reducing integration bugs.",
      "Feature Development: Built critical modules for loan origination, repayment tracking, and automated penalty calculations, ensuring 100% financial accuracy.",
      "Background Processing: Leveraged Redis-backed queues for heavy lifting tasks like batch interest calculations and mass notification sending, preventing system lag during peak hours.",
      "System Optimization: Optimized database queries and backend logic to support high-volume transactions across multiple branches.",
    ],
    achievements: [
      "Architected secure, 100% accurate financial systems including Core Banking and Pawn Management",
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
    skills: ["OOP", "Database Design", "MVC Architecture", "RESTful APIs", "MySQL", "Git"],
    logo: "/beltei.png",
  },
];
