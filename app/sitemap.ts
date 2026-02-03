import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { Experiences } from "@/config/experience";
import { careerExperiences } from "@/config/career";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Main pages with updated priorities
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contributions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic experience pages
  const experienceRoutes: MetadataRoute.Sitemap = Experiences.map((exp) => ({
    url: `${baseUrl}/experience/${exp.id}`,
    lastModified: exp.endDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic career pages
  const careerRoutes: MetadataRoute.Sitemap = careerExperiences.map((career) => ({
    url: `${baseUrl}/career/${career.id}`,
    lastModified: career.endDate || new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...mainRoutes, ...experienceRoutes, ...careerRoutes];
}
