import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hoysengleang Portfolio",
    short_name: "Hoysengleang",
    description:
      "Hoysengleang's modern developer portfolio built with Next.js - available as an open-source template",
    start_url: "/",
    display: "standalone",
    background_color: "#d4e9f2",
    theme_color: "#020826",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
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
