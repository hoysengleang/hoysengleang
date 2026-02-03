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
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Hoysengleang's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Hoysengleang's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Hoysengleang's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Hoysengleang.",
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
    description: "Hoysengleang's resume.",
    metadata: {
      title: "Resume",
      description: "Hoysengleang's resume.",
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
    description: "Technical articles, tutorials, and insights about web development, databases, and software engineering.",
    metadata: {
      title: "Blog & Articles",
      description: "In-depth technical articles, tutorials, and insights from Hoysengleang's development journey.",
    },
  },
};
