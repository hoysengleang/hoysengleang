export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Mimic-Mock-Api-Best",
    contibutionDescription:
      "Open-source full-stack mock API platform built with FastAPI and Vue 3 for rapid prototyping, API testing, integration testing, and Docker-first internal workflows.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/Mimic-Mock-Api-Best",
  },
  {
    repo: "localnet",
    contibutionDescription:
      "LAN-first dev sharing tool that exposes local services across network devices with QR support, optional Cloudflare Tunnel, token auth, and access control rules.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/localnet",
  },
  {
    repo: "QuickNotes-Docker",
    contibutionDescription:
      "Containerized full-stack notes app using Vue 3, ASP.NET Core 8, SQL Server, Redis, and Docker Compose with secure auth, search, recovery, and admin monitoring.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/QuickNotes-Docker",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
