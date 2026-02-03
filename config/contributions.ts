export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "portfolio-template",
    contibutionDescription:
      "Built a modern, responsive portfolio website using Next.js 14, TypeScript, and TailwindCSS with dark mode support.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang",
  },
  {
    repo: "api-architecture",
    contibutionDescription:
      "Designed and implemented scalable RESTful API architectures for enterprise applications handling high-volume transactions.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang",
  },
  {
    repo: "database-optimization",
    contibutionDescription:
      "Optimized complex database queries reducing response times by up to 60% using advanced indexing and query optimization techniques.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
