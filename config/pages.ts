import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description:
      "Backend-focused full stack developer building reliable Laravel and NestJS applications, plus open-source search, AI and security tools, in Phnom Penh, Cambodia.",
    metadata: {
      title: "Backend-Focused Full Stack Developer",
      description:
        "Houy Sengleang's portfolio: Laravel and NestJS business systems, self-hosted visual search, document Q&A with citations, and API security tooling.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "What I use every week, what I have shipped with, and what I am still getting better at.",
    metadata: {
      title: "Backend & Full-Stack Skills",
      description:
        "Laravel, NestJS, Python, FastAPI, PostgreSQL, vector search, LLMs, Rust, and the tools Houy Sengleang uses to ship reliable software.",
    },
  },
  experience: {
    title: "Projects",
    description:
      "Production business systems and open-source tools. Each one says what the problem was, what I did, and what changed.",
    metadata: {
      title: "Backend & Full-Stack Projects",
      description:
        "Case studies from Houy Sengleang's Laravel, NestJS, FastAPI, vector search, RAG, Rust and API security projects.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch about backend and full-stack engineering opportunities.",
    metadata: {
      title: "Contact Houy Sengleang",
      description:
        "Contact Houy Sengleang in Phnom Penh about backend-focused full-stack roles and software engineering opportunities.",
    },
  },
  contributions: {
    title: "Open source",
    description: "Everything here is public on GitHub. Read the code, open an issue, or send a pull request.",
    metadata: {
      title: "Open Source",
      description:
        "Houy Sengleang's open-source projects: visual search, document Q&A, API security scanning, a Rust remote desktop, and developer CLIs.",
    },
  },
  resume: {
    title: "Resume",
    description:
      "View or download my backend-focused full-stack developer résumé.",
    metadata: {
      title: "Houy Sengleang Resume",
      description:
        "View or download Houy Sengleang's résumé covering Laravel, NestJS, API design, databases, and production support.",
    },
  },
  career: {
    title: "Experience",
    description: "Where I've worked and what I was responsible for.",
    metadata: {
      title: "Experience",
      description:
        "Houy Sengleang's work history: full stack development at Peng Huoth Group and backend R&D at Wintech Software Development.",
    },
  },
  blog: {
    title: "Blog & Articles",
    description:
      "Technical articles, tutorials, and insights about web development, databases, and software engineering.",
    metadata: {
      title: "Blog & Articles",
      description:
        "In-depth technical articles, tutorials, and insights from Hoysengleang's development journey.",
    },
  },
};
