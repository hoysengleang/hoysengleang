import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "mimic",
    companyName: "Mimic (Open-Source Mock API Tool)",
    type: "Personal Project",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Architecting a professional-grade mock API engine to streamline integration testing between complex backend and frontend systems.",
    websiteLink: "",
    githubLink: "https://github.com/hoysengleang",
    techStack: ["Python", "Vue.js", "Docker"],
    startDate: new Date("2024-10-01"),
    endDate: new Date(), // Present / Active Development
    companyLogoImg: "/experience/mimic-logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Status: Active Development / In Progress",
        "The Goal: Architecting a professional-grade mock API engine to streamline integration testing between complex backend and frontend systems.",
        "Current Focus: Implementing a dynamic response engine using Python and Vue 3 to simulate high-frequency multi-system environments.",
        "Infrastructure: Utilizing Docker to ensure the tool is easily portable and scalable across different development environments.",
      ],
      bullets: [
        "Building mock API engine for integration testing automation",
        "Implementing dynamic response engine with Python and Vue 3",
        "Dockerized infrastructure for portability and scalability",
        "Simulating high-frequency multi-system environments",
      ],
    },
  },
  {
    id: "pawn-system",
    companyName: "Loan and Pawn Management System",
    type: "Professional",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "A robust system for managing loans, pawns, and financial transactions, built with Laravel and RESTful APIs.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Laravel", "PHP", "MySQL", "RESTful APIs", "System Optimization"],
    startDate: new Date("2023-01-01"),
    endDate: new Date(), // Present
    companyLogoImg: "/experience/pawn-system.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Architected and developed a robust Loan and Pawn Management System using Laravel, serving 5+ branches with 10,000+ daily transactions.",
        "Designed and implemented 50+ secure, scalable RESTful APIs to handle complex financial transactions, pawn collateral tracking, and interest calculation schedules.",
        "Optimized database queries and backend logic, reducing response time by 60% and improving system performance by 45%.",
        "Built critical modules for loan origination, repayment tracking, and automated penalty calculations, ensuring 100% financial accuracy with zero calculation errors.",
      ],
      bullets: [
        "Deployed system processing $500K+ in daily transactions across multiple branches.",
        "Reduced database query response time by 60% through optimization.",
        "Implemented 50+ secure RESTful API endpoints for financial operations.",
        "Maintained 100% financial accuracy with zero calculation errors.",
      ],
    },
  },
  {
    id: "school-system",
    companyName: "School Management System",
    type: "Professional",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "A comprehensive School Management System for American Intercon Institute (Aii) and American Intercon School (AIS).",
    websiteLink: "",
    githubLink: "",
    techStack: ["Laravel", "PHP", "MySQL", "Database Design"],
    startDate: new Date("2023-01-01"), // Approximate
    endDate: new Date("2023-12-01"), // Approximate
    companyLogoImg: "/experience/school-system.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developed and maintained a large-scale School Management System for Aii and AIS, managing 5,000+ students and 200+ staff members.",
        "Implemented comprehensive features for student enrollment, academic grading, attendance tracking, and class scheduling, processing 50,000+ records monthly.",
        "Optimized database performance by 70%, handling 100,000+ concurrent requests during peak exam periods and enrollment seasons.",
        "Ensured data security and integrity for sensitive student and financial records with 99.9% uptime.",
      ],
      bullets: [
        "Managed system for 5,000+ students and 200+ staff members.",
        "Processed 50,000+ academic records monthly with 100% accuracy.",
        "Improved database performance by 70% during peak traffic.",
        "Achieved 99.9% system uptime with zero data breaches.",
      ],
    },
  },
  {
    id: "hotel-management",
    companyName: "Hotel Management System",
    type: "Personal Project",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "A web application to streamline guest bookings and room management, featuring a custom availability algorithm.",
    websiteLink: "",
    githubLink: "",
    techStack: ["PHP", "MySQL", "Database Design"],
    startDate: new Date("2023-01-01"), // Approximate
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/experience/hotel-management.png", // Generated image
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Built a comprehensive web application to streamline guest bookings and room management for a 50-room hotel.",
        "Designed a normalized relational database handling 1,000+ bookings annually, eliminating data redundancy by 80%.",
        "Created an efficient 'Room Availability' algorithm that automatically filters rooms based on check-in/out dates, reducing booking errors by 95%.",
      ],
      bullets: [
        "Streamlined booking process for 50-room hotel with 1,000+ annual bookings.",
        "Reduced data redundancy by 80% through normalized database design.",
        "Decreased booking errors by 95% with automated availability checking.",
      ],
    },
  },
  {
    id: "banking-system",
    companyName: "Mini Core Banking System",
    type: "Personal Project",
    category: ["Full Stack"],
    shortDescription:
      "A web-based system simulating core banking operations like deposits, withdrawals, and transfers.",
    websiteLink: "",
    githubLink: "",
    techStack: ["C#", ".NET", "Database Design"], // Guessing C#/.NET as it is in skills
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/experience/banking-system.png", // Generated image
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developed a web-based system simulating core banking operations, supporting 500+ virtual customer accounts.",
        "Built a comprehensive Customer Information File (CIF) module with automated unique account number generation, processing 100+ registrations.",
        "Implemented real-time transaction processing for Deposits, Withdrawals, and Fund Transfers with 100% accuracy and instant balance updates.",
      ],
      bullets: [
        "Simulated banking operations for 500+ virtual customer accounts.",
        "Automated account generation with 100+ successful registrations.",
        "Processed transactions with 100% accuracy and real-time updates.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
