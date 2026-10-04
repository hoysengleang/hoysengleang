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

export interface CaseStudyInterface {
  problem: string;
  role: string;
  approach: string[];
  outcome: string;
  evidence?: string[];
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
  caseStudy?: CaseStudyInterface;
  /** Shown on the homepage "Selected work" list. */
  featured?: boolean;
  /** One measured result or fact worth reading first. */
  highlight?: string;
  /** A command visitors can copy to try the project. */
  install?: string;
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "openvisionsearch",
    companyName: "OpenVisionSearch",
    type: "Personal Project",
    category: ["AI & Search", "Backend"],
    shortDescription:
      "A self-hosted visual search API. Index product images from URLs, uploads, folders or S3, then search by photo, by text, or both, over plain HTTP.",
    githubLink: "https://github.com/hoysengleang/images-analystic-search",
    techStack: ["Python", "FastAPI", "OpenCLIP", "Qdrant", "SQLite", "Docker", "GitHub Actions"],
    startDate: new Date("2026-05-01"),
    endDate: new Date(),
    companyLogoImg: "/experience/covers/openvisionsearch.svg",
    featured: true,
    highlight:
      "Recall@1 went from 75% to 90% on 300 portrait product photos after replacing CLIP's centre-crop with padded framing.",
    install: "docker compose up --build",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "OpenVisionSearch is an open-source, self-hosted visual search platform. It turns images into vectors with OpenCLIP, stores them in Qdrant, and returns the closest matches for a photo, a sentence, or a photo nudged by words (\"this shoe, but in blue\").",
        "Images can come from URLs, multipart uploads, local folders, base64 payloads, or signed S3/R2 URLs. Only vectors and metadata are stored, never the original files.",
        "Searching part of a picture is supported two ways: the caller can send a normalised crop box, or the server can detect objects itself and search each region, keeping the best score per image.",
        "The project ships with CI and CodeQL, written decision records, and a spec for the next milestone: a multi-tenant product-level API that returns one result per product instead of per image.",
      ],
      bullets: [
        "Image, text and hybrid search from one index (OpenCLIP shares a vector space for both)",
        "Padded framing keeps the whole photo in view, lifting Recall@1 from 75% to 90%",
        "Optional three-view embedding adds another 5 points of Recall@1",
        "Each collection is pinned to the model it was built with, so vectors never get mixed",
        "Runs without PyTorch through an ONNX path for lighter deployments",
        "A search-quality harness for measuring recall before changing defaults",
      ],
    },
    caseStudy: {
      problem:
        "Shoppers take product photos on phones. A stock CLIP pipeline centre-crops portrait photos and throws away about 40% of the frame, often including part of the product.",
      role: "I designed and built the service end to end: the ingestion API, embedding pipeline, Qdrant integration, configuration, tests, CI and documentation.",
      approach: [
        "Measured stock CLIP against alternatives on 300 portrait products with degraded query photos before changing anything.",
        "Switched the default to padded framing and stored the framing per collection so old indexes keep working.",
        "Added text and hybrid search, region search with crop boxes or object detection, and an ONNX runtime option.",
      ],
      outcome:
        "A visual search API anyone can self-host with one Docker command, with measured quality instead of guessed quality.",
      evidence: [
        "Benchmark table and method are published in the README.",
        "Public repository with CI, CodeQL, decision records and a roadmap.",
      ],
    },
  },
  {
    id: "knowledge-assistant",
    companyName: "Knowledge Assistant",
    type: "Personal Project",
    category: ["AI & Search", "Full Stack"],
    shortDescription:
      "A self-hosted assistant that answers questions from your own documents and databases, cites the exact source, and says \"not found\" instead of guessing. Works in English and Khmer.",
    githubLink: "https://github.com/hoysengleang/local-model-free-form",
    techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "React", "Ollama", "Tesseract OCR", "Docker"],
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-07-31"),
    companyLogoImg: "/experience/covers/knowledge-assistant.svg",
    featured: true,
    highlight:
      "Runs fully offline with Ollama: no API key, and no document ever leaves your server.",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Knowledge Assistant lets a team upload PDFs, Word, Excel, PowerPoint and other files, or connect a Postgres, MySQL or SQLite database, and ask questions in plain language. Every answer links back to the excerpt it came from.",
        "Retrieval is hybrid: pgvector similarity is fused with Postgres full-text search using Reciprocal Rank Fusion, so paraphrased questions and exact names, IDs or numbers both find the right passage.",
        "It is built for Cambodian teams as much as English ones. Scanned Khmer PDFs are OCR'd automatically, and the default local models handle Khmer questions and answers.",
        "Model providers are small adapters, so the same app runs on Ollama, Gemini, Claude, OpenAI, or any OpenAI-compatible API by changing one environment variable.",
      ],
      bullets: [
        "Answers stream token by token over SSE, each with source citations",
        "Hybrid retrieval: pgvector + Postgres full-text, fused with RRF",
        "SQL connector imports tables as searchable sources",
        "Khmer and English OCR built into the Docker image",
        "Telegram bot that answers from the same knowledge base",
        "Evaluation harness with a golden-question set, usable as a deploy gate",
      ],
    },
    caseStudy: {
      problem:
        "HR policies, payroll rules and contracts are exactly the documents teams should not paste into someone else's chat product, and most assistants guess when they do not know.",
      role: "I built the whole product: ingestion and OCR, chunking and embeddings, hybrid retrieval, the FastAPI backend, the React interface, and the Docker deployment.",
      approach: [
        "Kept everything local-first in one Postgres database: documents, vectors and chat history.",
        "Combined vector and keyword search so tables and exact values are found as reliably as prose.",
        "Required a citation for every answer and an explicit \"not found\" when the sources do not cover the question.",
      ],
      outcome:
        "A private document assistant that a small company can run on its own machine, in Khmer or English, with answers it can check.",
      evidence: [
        "Public repository with architecture and data-model diagrams.",
        "Built-in evaluation harness for retrieval and answer quality.",
      ],
    },
  },
  {
    id: "apicheck",
    companyName: "apicheck",
    type: "Personal Project",
    category: ["Security", "Developer Tools"],
    shortDescription:
      "A command-line scanner that checks your own HTTP APIs for common security holes, mapped to the OWASP API Security Top 10. Observes and reports; never exploits.",
    githubLink: "https://github.com/hoysengleang/api-check",
    techStack: ["Typescript", "Node.js", "OpenAPI", "OWASP API Top 10"],
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-07-31"),
    companyLogoImg: "/experience/covers/apicheck.svg",
    featured: true,
    highlight:
      "11 checks across 6 OWASP API categories, with SARIF output and a non-zero exit code so it can block a CI build.",
    install: "npm install && npm run build && npm link",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "apicheck sits between running curl by hand and setting up a heavyweight scanner. Point it at a base URL and an OpenAPI spec and it discovers every endpoint, then runs independent checks against each one.",
        "Checks cover missing security headers, endpoints that return data without auth, missing rate limits, broken object-level access (IDOR) using two identities, sensitive fields in responses, loose CORS, cookie flags, information disclosure, and privilege escalation between roles.",
        "Scan-level checks look for undocumented endpoints that still respond and for deprecated operations that are still published.",
        "Safety is a design rule: it never sends destructive requests, and a scan will not start without an explicit --i-am-authorized flag.",
      ],
      bullets: [
        "Auto-discovers endpoints from an OpenAPI / Swagger spec",
        "11 checks mapped to OWASP API1, API3, API4, API5, API8 and API9",
        "Terminal, JSON and SARIF 2.1.0 reports",
        "Fails the build when findings meet a chosen severity",
        "Config file and .apicheckignore for accepted findings",
        "Strict TypeScript, non-destructive by design",
      ],
    },
    caseStudy: {
      problem:
        "Most API security problems in business apps are boring and preventable, but teams rarely check for them before shipping.",
      role: "I designed the check-module contract and built the CLI, spec discovery, HTTP client, every check, and the reporters.",
      approach: [
        "Made each check an independent module with a shared contract so new checks are easy to add and test.",
        "Mapped every finding to an OWASP API Top 10 category so results are easy to explain.",
        "Added SARIF output and exit codes so the scan fits into existing CI dashboards.",
      ],
      outcome:
        "A small tool a backend team can run on every pull request to catch the obvious holes before a pentester does.",
    },
  },
  {
    id: "free-remote",
    companyName: "free-remote",
    type: "Personal Project",
    category: ["Security", "Developer Tools"],
    shortDescription:
      "A cross-platform remote desktop tool written in Rust, where permission is checked on every single message, not just once at connect time.",
    githubLink: "https://github.com/hoysengleang/free-remoter",
    techStack: ["Rust", "Noise Protocol", "Linux"],
    startDate: new Date("2026-09-01"),
    endDate: new Date(),
    companyLogoImg: "/experience/covers/free-remote.svg",
    highlight:
      "Sending only changed 128×128 tiles cut an idle desktop from 31 Mbit/s to 5.9 Mbit/s.",
    install: "cargo build --release",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "free-remote shares a machine's screen and lets someone else use its mouse and keyboard, but only with permission that a person explicitly granted, and only as much as was granted.",
        "Permissions are per capability (view screen, mouse, keyboard), nothing is granted by default, and every inbound message is re-checked against the live grant. Revoking access takes effect on the very next event, including events already queued.",
        "Every session runs over a Noise XX handshake (25519, ChaChaPoly, BLAKE2s). It builds on Linux, Windows and macOS with no system libraries and no C toolchain.",
      ],
      bullets: [
        "Per-capability permissions: watch without touching",
        "Encrypted transport with host fingerprints and peer pinning",
        "Tile diffing sends only what changed on screen",
        "Frames are dropped, not queued, so latency cannot build up",
        "Idle capture backs off, taking CPU from about 38% of a core to 6%",
        "End-to-end tests that drive the real host binary",
      ],
    },
    caseStudy: {
      problem:
        "Remote desktop tools usually treat permission as a checkbox at connect time. After that, the remote side can do anything.",
      role: "I wrote it from scratch in Rust: the wire protocol, encrypted transport, screen capture and encoding, input injection, and both binaries.",
      approach: [
        "Split the code into small crates for protocol, transport, capture, input, host and viewer.",
        "Enforced the permission model on the host for every message rather than trusting the viewer.",
        "Measured the video path and fixed the real bottleneck with tile diffing and back-off.",
      ],
      outcome:
        "A remote desktop tool that a nervous user can trust, with published performance numbers and reproducible benchmarks.",
      evidence: [
        "Benchmark commands and results are published in the README.",
        "Marked clearly as not yet independently audited.",
      ],
    },
  },
  {
    id: "shiftai",
    companyName: "ShiftAI",
    type: "Personal Project",
    category: ["AI & Search", "Full Stack"],
    shortDescription:
      "A self-hosted studio for fine-tuning small language models on your own data, then scoring what they actually learned and retraining on the questions they got wrong.",
    githubLink: "https://github.com/hoysengleang/train-model-shift-ai",
    techStack: ["Python", "FastAPI", "LoRA / PEFT", "Hugging Face", "Redis", "React", "Typescript", "Ollama"],
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-07-31"),
    companyLogoImg: "/experience/covers/shiftai.svg",
    highlight:
      "Closes the loop: after training it auto-evaluates, finds the failed questions, and generates targeted data to retrain on.",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "ShiftAI takes documents, spreadsheets or a SQL database and turns them into training data with a teacher model, including reasoning traces, honest refusal pairs, and questions that need two passages to answer. A judge filter drops pairs that are not faithful to the source.",
        "Training is LoRA / PEFT on any Hugging Face causal model, run as a background job with live loss curves, presets, and options like QLoRA, DoRA and answer-only loss.",
        "After training, the model is automatically quizzed on the source. One click synthesises more data for the weak passages and retrains, so you can watch the score go up.",
        "Results can be chatted with locally, compared side by side with the base model, or exported to GGUF and registered in Ollama.",
      ],
      bullets: [
        "Ingests CSV, JSONL, Excel, PDF, DOCX, Markdown, or any SQLAlchemy database",
        "LLM teacher with judge filtering for training-data quality",
        "LoRA / QLoRA fine-tuning with live progress and cancellation",
        "Auto-eval and an improve loop that retrains on failures",
        "Export to GGUF and Ollama",
        "Heavy ML libraries are lazy-loaded, so the API and UI run anywhere",
      ],
    },
  },
  {
    id: "hr-saas",
    companyName: "HR Management System",
    type: "Personal Project",
    category: ["Business Systems", "Backend", "Full Stack"],
    shortDescription:
      "An HR management backend in NestJS and PostgreSQL with JWT access and refresh tokens, role-based permissions, and Swagger docs, paired with an Angular client.",
    githubLink: "https://github.com/hoysengleang/hr-sass-backend",
    techStack: ["Nest.js", "Typescript", "PostgreSQL", "Sequelize", "JWT / RBAC", "Angular"],
    startDate: new Date("2026-05-01"),
    endDate: new Date("2026-05-31"),
    companyLogoImg: "/experience/covers/hr-saas.svg",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A NestJS backend for an HR management product, built on PostgreSQL with Sequelize and sequelize-typescript.",
        "Authentication uses short-lived JWT access tokens with refresh tokens. Authorisation is role-based, with users, roles and permissions modelled in the database and enforced by guards.",
        "Input is validated with class-validator and every endpoint is documented in Swagger, so the Angular frontend can integrate against a clear contract.",
      ],
      bullets: [
        "JWT access + refresh token flow",
        "Users, roles and permissions (RBAC) enforced with NestJS guards",
        "PostgreSQL via Sequelize with typed models",
        "Swagger documentation for every endpoint",
        "Separate Angular frontend repository",
      ],
    },
  },
  {
    id: "mimic",
    companyName: "Mimic (Open-Source Mock API Tool)",
    type: "Personal Project",
    category: ["Developer Tools", "Backend", "Full Stack"],
    shortDescription:
      "A professional-grade, open-source mock API platform for rapid prototyping and integration testing. Built with FastAPI, Vue 3, and Docker for seamless development workflows.",
    websiteLink: "",
    githubLink: "https://github.com/hoysengleang/Mimic-Mock-Api-Best",
    techStack: ["Python", "FastAPI", "Vue.js", "Typescript", "Docker"],
    startDate: new Date("2024-10-01"),
    endDate: new Date(), // Present / Active Development
    companyLogoImg: "/experience/covers/mimic.svg",
    install: "docker compose up",
    pagesInfoArr: [
      {
        title: "Backend Architecture (FastAPI)",
        description:
          "Built a robust FastAPI backend with Python 3.12, featuring dynamic mock endpoint management, JSON-backed storage, and hot-reload development support with Uvicorn. The backend exposes RESTful APIs for creating, reading, updating, and deleting mock endpoints with customizable responses.",
        imgArr: [],
      },
      {
        title: "Frontend Interface (Vue 3 + TypeScript)",
        description:
          "Developed a modern, responsive UI using Vue 3 with TypeScript, Vite for instant HMR, and a clean component architecture for managing mock APIs visually. The interface provides an intuitive way to manage endpoints, configure responses, and monitor request statistics.",
        imgArr: [],
      },
      {
        title: "Docker Infrastructure",
        description:
          "Implemented a Docker-first development approach with multi-container orchestration using Docker Compose. The architecture ensures portability across all development environments with automatic dependency installation, volume mounting for hot-reload, and isolated networking between services.",
        imgArr: [],
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
    caseStudy: {
      problem:
        "Frontend teams needed a dependable way to develop and test integrations before every real backend endpoint was available.",
      role: "I designed and built the full-stack tool, including the API, management interface, local development workflow, and Docker setup.",
      approach: [
        "Defined a RESTful model for dynamic mock endpoints and response configuration.",
        "Built the FastAPI service and Vue 3 interface with TypeScript for a clear, type-safe workflow.",
        "Containerized the services with Docker Compose so the project is easy to run consistently.",
      ],
      outcome:
        "A self-hosted developer tool that lets teams simulate APIs, test integrations, and iterate without waiting for dependent services.",
      evidence: [
        "Public source code and setup documentation are available on GitHub.",
        "The repository includes separate FastAPI and Vue applications with Docker Compose orchestration.",
      ],
    },
  },
  {
    id: "localnet",
    companyName: "localnet-control",
    type: "Personal Project",
    category: ["Developer Tools", "Backend"],
    shortDescription:
      "A LAN-first developer tool to share localhost services instantly, now published on PyPI with optional tunnel mode, token auth, and network access controls.",
    websiteLink: "https://pypi.org/project/localnet-control/",
    githubLink: "https://github.com/hoysengleang/localnet",
    techStack: ["Python", "Linux", "Docker", "CI/CD", "Git"],
    startDate: new Date("2026-02-01"),
    endDate: new Date(),
    companyLogoImg: "/experience/covers/localnet.svg",
    highlight: "Published on PyPI as localnet-control.",
    install: "pip install localnet-control",
    pagesInfoArr: [
      {
        title: "What It Does",
        description:
          "localnet-control exposes localhost services to your LAN with a lightweight TCP proxy, so teammates and mobile devices can access your dev app instantly without internet dependency.",
        imgArr: [],
      },
      {
        title: "Install and Quick Start",
        description:
          "Install with `pip install localnet-control`, start your app locally, then run `localnet share 3000` to generate a LAN URL and QR code. You can also run from source via the GitHub repository for development mode.",
        imgArr: [],
      },
      {
        title: "Security and Access Controls",
        description:
          "The CLI supports token-based access (`--token`), allow/deny rules for IP and CIDR (`--allow` / `--deny`), live HTTP logs, and optional public sharing with Cloudflare Tunnel (`--tunnel`) when external access is needed.",
        imgArr: [],
      },
      {
        title: "Release and Ecosystem",
        description:
          "The package is published on PyPI as localnet-control (latest 0.2.0 released on March 4, 2026), with Linux-first support, clear command workflow (`share`, `list`, `stop`, `scan`), and full documentation in the project README.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "localnet-control is a lightweight LAN sharing tool for development workflows. It exposes local services to devices on the same network without requiring internet access.",
        "The CLI supports fast sharing, QR output for mobile access, service discovery, and request visibility using HTTP logs. It is designed for practical day-to-day frontend and API collaboration.",
        "Security and control features include token-based access, allow/deny IP and CIDR filters, and optional Cloudflare tunnel support for temporary public URLs when needed.",
        "The project is fully released on PyPI as localnet-control, making installation and updates straightforward for teams through standard Python tooling.",
      ],
      bullets: [
        "Published package: localnet-control on PyPI",
        "LAN-first TCP proxy for sharing localhost apps quickly",
        "Token auth and IP/CIDR allow-deny access controls",
        "Optional Cloudflare tunnel support for public sharing",
        "QR code output and LAN discovery for team workflows",
        "Linux-first CLI with practical commands for dev environments",
        "README and source: github.com/hoysengleang/localnet",
      ],
    },
    caseStudy: {
      problem:
        "Sharing a local frontend or API with teammates and mobile devices often required extra setup or an external service.",
      role: "I built and released the CLI end to end, from the local proxy and access controls to packaging, documentation, and PyPI delivery.",
      approach: [
        "Created a LAN-first sharing workflow with simple share, list, stop, and scan commands.",
        "Added token authentication, IP/CIDR rules, request logging, QR output, and optional tunnel support.",
        "Automated a repeatable Python package release workflow and documented practical usage examples.",
      ],
      outcome:
        "A published developer tool that makes local testing and collaboration faster while keeping access controls visible and configurable.",
      evidence: [
        "Published on PyPI as localnet-control with an installable CLI package.",
        "Public source, command documentation, and release history are available on GitHub.",
      ],
    },
  },
  {
    id: "pawn-system",
    companyName: "Loan and Pawn Management System",
    type: "Professional",
    category: ["Business Systems", "Backend", "Full Stack"],
    shortDescription:
      "A robust system for managing loans, pawns, and financial transactions, built with Laravel and RESTful APIs.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "RESTful APIs",
      "System Optimization",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date(), // Present
    companyLogoImg: "/experience/covers/pawn-system.svg",
    featured: true,
    highlight:
      "Serves 5+ branches and 10,000+ daily transactions; cut response time by 60% in the slowest workflows.",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Architected and developed a robust Loan and Pawn Management System using Laravel, serving 5+ branches with 10,000+ daily transactions.",
        "Designed and implemented 50+ secure, scalable RESTful APIs to handle complex financial transactions, pawn collateral tracking, and interest calculation schedules.",
        "Reduced response time by 60% in targeted workflows by profiling slow queries, adding appropriate indexes, and simplifying backend logic.",
        "Built loan origination, repayment, and penalty modules with centralized validation and transactional database writes to protect financial data consistency.",
      ],
      bullets: [
        "Supported daily financial workflows across 5+ operating branches.",
        "Reduced response time by 60% in measured, high-traffic workflows.",
        "Implemented 50+ secure RESTful API endpoints for financial operations.",
        "Protected related financial updates with validation, database transactions, and consistent business rules.",
      ],
    },
    caseStudy: {
      problem:
        "Loan and pawn operations needed one dependable system for financial transactions, collateral tracking, repayments, and branch workflows.",
      role: "I worked across the application lifecycle, from Laravel backend architecture and database design to API integration, optimization, and production support.",
      approach: [
        "Modeled financial workflows and implemented RESTful APIs for loan, repayment, collateral, and penalty operations.",
        "Protected related financial writes with validation, clear business rules, and reliable database handling.",
        "Improved query and backend performance while using queues for heavier batch processing and notifications.",
      ],
      outcome:
        "A production financial management platform supporting branch operations with consistent data flow and reliable transaction processing.",
      evidence: [
        "The project details are anonymized because the production system and business data are confidential.",
        "The case study focuses on my responsibilities, technical approach, and measured workflow improvements.",
      ],
    },
  },
  {
    id: "school-system",
    companyName: "School Management System",
    type: "Professional",
    category: ["Business Systems", "Backend", "Full Stack"],
    shortDescription:
      "A comprehensive School Management System for American Intercon Institute (Aii) and American Intercon School (AIS).",
    websiteLink: "",
    githubLink: "",
    techStack: ["Laravel", "PHP", "MySQL", "Database Design"],
    startDate: new Date("2023-01-01"), // Approximate
    endDate: new Date("2023-12-01"), // Approximate
    companyLogoImg: "/experience/covers/school-system.svg",
    highlight: "Used by 5,000+ students and 200+ staff across two schools.",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developed and maintained a large-scale School Management System for Aii and AIS, managing 5,000+ students and 200+ staff members.",
        "Implemented comprehensive features for student enrollment, academic grading, attendance tracking, and class scheduling, processing 50,000+ records monthly.",
        "Improved database performance for peak exam and enrollment workflows by reviewing execution plans, indexing high-use fields, and reducing expensive queries.",
        "Applied role-based access, validation, and database constraints to protect sensitive student and financial records.",
      ],
      bullets: [
        "Managed system for 5,000+ students and 200+ staff members.",
        "Supported enrollment, grading, attendance, and scheduling workflows for 5,000+ students.",
        "Improved high-use database queries for peak academic periods.",
        "Strengthened record integrity with access controls, validation, and relational constraints.",
      ],
    },
  },
  {
    id: "hotel-management",
    companyName: "Hotel Management System",
    type: "Personal Project",
    category: ["Business Systems", "Full Stack"],
    shortDescription:
      "A web application to streamline guest bookings and room management, featuring a custom availability algorithm.",
    websiteLink: "",
    githubLink: "",
    techStack: ["PHP", "MySQL", "Database Design"],
    startDate: new Date("2023-01-01"), // Approximate
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/experience/covers/hotel-management.svg",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Built a comprehensive web application to streamline guest bookings and room management for a 50-room hotel.",
        "Designed a normalized relational database for rooms, guests, reservations, and payment records.",
        "Created a room-availability algorithm that filters inventory by check-in and check-out dates to prevent overlapping bookings.",
      ],
      bullets: [
        "Streamlined booking process for 50-room hotel with 1,000+ annual bookings.",
        "Reduced duplicated booking data through a normalized relational schema.",
        "Prevented overlapping reservations with automated availability checks.",
      ],
    },
  },
  {
    id: "banking-system",
    companyName: "Mini Core Banking System",
    type: "Personal Project",
    category: ["Business Systems", "Full Stack"],
    shortDescription:
      "A web-based system simulating core banking operations like deposits, withdrawals, and transfers.",
    websiteLink: "",
    githubLink: "",
    techStack: ["C#", ".NET", "Database Design"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/experience/covers/banking-system.svg",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developed a web-based system simulating core banking operations, supporting 500+ virtual customer accounts.",
        "Built a comprehensive Customer Information File (CIF) module with automated unique account number generation, processing 100+ registrations.",
        "Implemented deposits, withdrawals, and fund transfers with transactional balance updates and validation for insufficient funds.",
      ],
      bullets: [
        "Simulated banking operations for 500+ virtual customer accounts.",
        "Automated account generation with 100+ successful registrations.",
        "Protected balance changes with transactional updates and business-rule validation.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.filter((exp) => exp.featured);
