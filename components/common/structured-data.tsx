import { siteConfig } from "@/config/site";
import { Experiences } from "@/config/experience";
import { careerExperiences } from "@/config/career";

interface StructuredDataProps {
  type?: "person" | "organization" | "website" | "portfolio";
}

export function StructuredData({ type = "person" }: StructuredDataProps) {
  // Person Schema - Main profile
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    alternateName: siteConfig.username,
    url: siteConfig.url,
    image: `${siteConfig.url}/hoysengleang-bg-black.jpg`,
    description: siteConfig.description,
    jobTitle: "Backend Developer & R&D Officer",
    knowsAbout: [
      "Backend Development",
      "API Architecture",
      "Laravel",
      "PHP",
      "Python",
      "FastAPI",
      "Vue.js",
      "Docker",
      "MySQL",
      "PostgreSQL",
      "System Architecture",
      "Fintech Systems",
      "Core Banking",
      "RESTful APIs",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Backend Developer",
      occupationalCategory: "15-1252.00",
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "Backend Developer Salary",
        currency: "USD",
      },
      responsibilities:
        "Technical research, environment standardization using Docker, performance benchmarking, API architecture, and financial system development",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "American Intercon School (AIS)",
        description: "Foundation Level Education",
      },
      {
        "@type": "EducationalOrganization",
        name: "BELTEI International University",
        description: "Bachelor's Degree in Information Technology",
      },
    ],
    worksFor: careerExperiences.map((exp) => ({
      "@type": "Organization",
      name: exp.company,
      startDate: exp.startDate.toISOString().split("T")[0],
      endDate: exp.endDate && exp.endDate !== "Present" ? exp.endDate.toISOString().split("T")[0] : undefined,
      jobTitle: exp.position,
    })),
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.twitter,
      siteConfig.url,
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Portfolio Schema
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.authorName,
      description: siteConfig.description,
      url: siteConfig.url,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Experience",
          item: `${siteConfig.url}/experience`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Skills",
          item: `${siteConfig.url}/skills`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Career",
          item: `${siteConfig.url}/career`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: `${siteConfig.url}/contact`,
        },
      ],
    },
  };

  // ItemList Schema for Projects/Experience
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Projects",
    description: "Portfolio of software development projects by HOUY SENGLEANG",
    numberOfItems: Experiences.length,
    itemListElement: Experiences.map((exp, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: exp.companyName,
        description: exp.shortDescription,
        url: `${siteConfig.url}/experience/${exp.id}`,
        dateCreated: exp.startDate.toISOString().split("T")[0],
        genre: exp.category.join(", "),
        keywords: exp.techStack.join(", "),
        creator: {
          "@type": "Person",
          name: siteConfig.authorName,
        },
      },
    })),
  };

  const schemas = {
    person: personSchema,
    organization: personSchema,
    website: websiteSchema,
    portfolio: portfolioSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas[type]),
        }}
      />
      {type === "person" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(projectsSchema),
            }}
          />
        </>
      )}
    </>
  );
}

// Experience detail page structured data
export function ExperienceStructuredData({ expId }: { expId: string }) {
  const exp = Experiences.find((e) => e.id === expId);
  if (!exp) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: exp.companyName,
    description: exp.shortDescription,
    url: `${siteConfig.url}/experience/${exp.id}`,
    dateCreated: exp.startDate.toISOString().split("T")[0],
    dateModified: exp.endDate.toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    genre: exp.category.join(", "),
    keywords: exp.techStack.join(", "),
    image: `${siteConfig.url}${exp.companyLogoImg}`,
    ...(exp.githubLink && {
      codeRepository: exp.githubLink,
    }),
    ...(exp.websiteLink && {
      url: exp.websiteLink,
    }),
    about: exp.descriptionDetails.bullets.map((bullet) => ({
      "@type": "Thing",
      description: bullet,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
