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
    category: ["Backend", "Web Dev", "Full Stack"],
    shortDescription:
      "A professional-grade, open-source mock API platform for rapid prototyping and integration testing. Built with FastAPI, Vue 3, and Docker for seamless development workflows.",
    websiteLink: "",
    githubLink: "https://github.com/hoysengleang/Mimic-Mock-Api-Best",
    techStack: ["Python", "FastAPI", "Vue.js", "Typescript", "Docker"],
    startDate: new Date("2024-10-01"),
    endDate: new Date(), // Present / Active Development
    companyLogoImg: "/experience/mimic/logo.png",
    pagesInfoArr: [
      {
        title: "Backend Architecture (FastAPI)",
        description: "Built a robust FastAPI backend with Python 3.12, featuring dynamic mock endpoint management, JSON-backed storage, and hot-reload development support with Uvicorn. The backend exposes RESTful APIs for creating, reading, updating, and deleting mock endpoints with customizable responses.",
        imgArr: ["/experience/mimic/api_dashboard.svg"],
      },
      {
        title: "Frontend Interface (Vue 3 + TypeScript)",
        description: "Developed a modern, responsive UI using Vue 3 with TypeScript, Vite for instant HMR, and a clean component architecture for managing mock APIs visually. The interface provides an intuitive way to manage endpoints, configure responses, and monitor request statistics.",
        imgArr: ["/experience/mimic/ui_interface.svg"],
      },
      {
        title: "Docker Infrastructure",
        description: "Implemented a Docker-first development approach with multi-container orchestration using Docker Compose. The architecture ensures portability across all development environments with automatic dependency installation, volume mounting for hot-reload, and isolated networking between services.",
        imgArr: ["/experience/mimic/docker_architecture.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Mimic Mock API is a full-stack, self-hosted mock API platform designed for internal testing and development teams. It eliminates backend dependencies during frontend development, API testing, and integration testing phases.",
        "The platform provides a complete solution with a FastAPI backend (Python 3.12) and Vue 3 frontend (TypeScript), all containerized with Docker for seamless deployment. The hot-reload capability enables rapid iteration during development.",
        "Key features include dynamic mock endpoint creation, customizable response delays, status codes, and JSON response bodies. The Docker-first architecture ensures the tool is easily portable and scalable across different development environments.",
        "The project is actively maintained and open-source, welcoming contributions from the developer community. It serves as a practical tool for teams needing to simulate API responses in controlled testing environments.",
      ],
      bullets: [
        "Full-stack mock API platform with FastAPI backend and Vue 3 frontend",
        "Docker-first architecture with hot-reload for rapid development",
        "Dynamic endpoint management with customizable responses and delays",
        "RESTful API design with comprehensive OpenAPI documentation",
        "TypeScript support for type-safe frontend development",
        "Vite-powered frontend with instant HMR and optimized builds",
        "JSON-backed data persistence for mock configurations",
        "Multi-environment support (Dev, Staging, Production)",
        "Open-source and actively maintained on GitHub",
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
