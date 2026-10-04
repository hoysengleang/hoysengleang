export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
  language?: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "images-analystic-search",
    contibutionDescription:
      "OpenVisionSearch: self-hosted visual product search with OpenCLIP and Qdrant. Search by image, by text, or both.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/images-analystic-search",
    language: "Python",
  },
  {
    repo: "free-remoter",
    contibutionDescription:
      "Remote desktop in Rust with per-capability permissions checked on every message and Noise XX encryption.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/free-remoter",
    language: "Rust",
  },
  {
    repo: "local-model-free-form",
    contibutionDescription:
      "Knowledge Assistant: answers from your own documents with citations, runs offline on Ollama, supports Khmer.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/local-model-free-form",
    language: "Python",
  },
  {
    repo: "api-check",
    contibutionDescription:
      "Non-destructive API security scanner mapped to the OWASP API Top 10, with SARIF output for CI.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/api-check",
    language: "TypeScript",
  },
  {
    repo: "train-model-shift-ai",
    contibutionDescription:
      "ShiftAI: LoRA fine-tuning studio that evaluates the model and retrains on the questions it failed.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/train-model-shift-ai",
    language: "Python",
  },
  {
    repo: "Mimic-Mock-Api-Best",
    contibutionDescription:
      "Full-stack mock API platform built with FastAPI and Vue 3 for prototyping and integration testing.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/Mimic-Mock-Api-Best",
    language: "Python",
  },
  {
    repo: "localnet",
    contibutionDescription:
      "Share localhost across your LAN with QR codes, token auth and allow/deny rules. Published on PyPI.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/localnet",
    language: "Python",
  },
  {
    repo: "QuickNotes-Docker",
    contibutionDescription:
      "Containerised notes app with Vue 3, ASP.NET Core 8, SQL Server and Redis, wired together with Docker Compose.",
    repoOwner: "hoysengleang",
    link: "https://github.com/hoysengleang/QuickNotes-Docker",
    language: "Vue",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 6);
