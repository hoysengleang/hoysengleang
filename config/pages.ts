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
      "Backend-focused Full Stack Developer building reliable Laravel and NestJS applications in Phnom Penh, Cambodia.",
    metadata: {
      title: "Backend-Focused Full Stack Developer",
      description:
        "Explore Houy Sengleang's backend-focused portfolio, featuring Laravel, NestJS, API design, database engineering, and production projects.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Technologies I use across backend, full-stack, and delivery work.",
    metadata: {
      title: "Backend & Full-Stack Skills",
      description:
        "Laravel, NestJS, PHP, TypeScript, databases, Docker, and the supporting tools Houy Sengleang uses to deliver reliable applications.",
    },
  },
  experience: {
    title: "Projects",
    description:
      "Professional systems and open-source tools, with the problem, role, approach, and outcome behind each project.",
    metadata: {
      title: "Backend & Full-Stack Projects",
      description:
        "Case studies from Houy Sengleang's Laravel, NestJS, FastAPI, Vue, database, and developer-tool projects.",
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
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Hoysengleang's open-source contributions and community involvement.",
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
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Hoysengleang's professional journey and career timeline.",
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
