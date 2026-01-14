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
        "Architected and developed a robust Loan and Pawn Management System using Laravel as the core framework.",
        "Designed and implemented secure, scalable RESTful APIs to handle complex financial transactions, pawn collateral tracking, and interest calculation schedules.",
        "Optimized database queries and backend logic to support high-volume transactions across multiple branches.",
        "Built critical modules for loan origination, repayment tracking, and automated penalty calculations, ensuring 100% financial accuracy.",
      ],
      bullets: [
        "Architected a robust Loan and Pawn Management System using Laravel.",
        "Designed secure, scalable RESTful APIs for financial transactions.",
        "Optimized backend logic for high-volume transactions.",
        "Built critical modules for loan origination and penalty calculations.",
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
        "Developed and maintained a large-scale School Management System for Aii and AIS, handling thousands of students and staff.",
        "Implemented features for student enrollment, academic grading, attendance tracking, and class scheduling.",
        "Optimized database performance to handle heavy traffic during exam periods and enrollment seasons.",
        "Ensured data security and integrity for sensitive student and financial records.",
      ],
      bullets: [
        "Developed a large-scale School Management System for Aii and AIS.",
        "Implemented modules for enrollment, grading, and attendance.",
        "Optimized database performance for high-traffic periods.",
        "Ensured data security for sensitive academic records.",
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
        "The Goal: Built a web application to streamline guest bookings and room management.",
        "Designed a relational database to handle Guest, Room, and Booking tables, preventing data redundancy.",
        "Created a 'Room Availability' algorithm that automatically filters rooms based on check-in/out dates.",
      ],
      bullets: [
        "Built a web application to streamline guest bookings and room management.",
        "Designed a relational database to handle Guest, Room, and Booking tables.",
        "Created a 'Room Availability' algorithm specific to date filtering.",
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
        "The Goal: A web-based system simulating the core banking operations of a financial institution.",
        "Customer Information File (CIF): Built a module to register customers and generate unique bank account numbers.",
        "Transaction Processing: Developed the logic for Deposits, Withdrawals, and Fund Transfers, ensuring real-time balance updates.",
      ],
      bullets: [
        "Simulated core banking operations of a financial institution.",
        "Built Customer Information File (CIF) module for registrations.",
        "Developed logic for Deposits, Withdrawals, and Fund Transfers with real-time updates.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
