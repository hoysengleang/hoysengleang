import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hoysengleang Portfolio",
    short_name: "Hoysengleang's Portfolio",
    description:
      "Hoysengleang's modern developer portfolio built with Next.js - available as an open-source template",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#0f0f0f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "template",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
      "open source",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
