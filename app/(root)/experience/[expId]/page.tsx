import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DocHeader } from "@/components/common/doc-header";
import { ExperienceStructuredData } from "@/components/common/structured-data";
import CopyCommand from "@/components/experience/copy-command";
import { hasSketch, ProjectSketch } from "@/components/home/project-sketch";
import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { formatMonthYear, isOngoing } from "@/lib/utils";

interface ExperiencePageProps {
  params: {
    expId: string;
  };
}

function ogImageFor(title: string, subtitle: string) {
  const params = new URLSearchParams({ title, subtitle });
  return `${siteConfig.url}/og-image?${params.toString()}`;
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const exp = Experiences.find((val) => val.id === params.expId);

  if (!exp) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const pageUrl = `${siteConfig.url}/experience/${exp.id}`;
  const imageUrl = ogImageFor(exp.companyName, exp.shortDescription);

  return {
    title: `${exp.companyName} | ${exp.type}`,
    description: exp.shortDescription,
    keywords: [
      exp.companyName,
      ...exp.techStack,
      ...exp.category,
      "project case study",
      exp.type,
    ],
    authors: [
      {
        name: siteConfig.authorName,
        url: siteConfig.url,
      },
    ],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: pageUrl,
      title: exp.companyName,
      description: exp.shortDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: exp.companyName,
        },
      ],
      publishedTime: exp.startDate.toISOString(),
      modifiedTime: exp.endDate.toISOString(),
      tags: [...exp.techStack, ...exp.category],
    },
    twitter: {
      card: "summary_large_image",
      title: exp.companyName,
      description: exp.shortDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export async function generateStaticParams() {
  return Experiences.map((exp) => ({
    expId: exp.id,
  }));
}

function websiteLabel(url: string) {
  if (url.includes("npmjs.com")) return "npm";
  if (url.includes("pypi.org")) return "PyPI";
  return "Website";
}

export default function Experience({ params }: ExperiencePageProps) {
  const index = Experiences.findIndex((val) => val.id === params.expId);
  if (index === -1) {
    redirect("/experience");
  }
  const exp = Experiences[index];
  const next = Experiences[(index + 1) % Experiences.length];

  const startLabel = formatMonthYear(exp.startDate);
  const endLabel = isOngoing(exp.endDate)
    ? "now"
    : formatMonthYear(exp.endDate);
  const timeframe =
    startLabel === endLabel ? startLabel : `${startLabel} – ${endLabel}`;

  const links = [
    exp.githubLink && { label: "Source", href: exp.githubLink },
    exp.websiteLink && {
      label: websiteLabel(exp.websiteLink),
      href: exp.websiteLink,
    },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <ExperienceStructuredData expId={params.expId} />
      <article className="page-shell">
        <div className="mx-auto max-w-[640px] pb-8 pt-10">
          <DocHeader
            back={{ href: "/experience", label: "Projects" }}
            title={exp.companyName}
            lead={exp.shortDescription}
            meta={
              <>
                {timeframe} ·{" "}
                {exp.type === "Professional" ? "Client work" : "Open source"} ·{" "}
                {exp.techStack.join(", ")}
              </>
            }
          >
            {links.length > 0 && (
              <ul className="mt-3 flex gap-5 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ink-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </DocHeader>

          {hasSketch(exp.id) && (
            <figure className="crop-marks mt-8 h-56 p-6 text-muted-foreground sm:h-64">
              <ProjectSketch id={exp.id} />
            </figure>
          )}

          <div className="doc mt-8">
            {exp.highlight && (
              <p className="text-foreground">{exp.highlight}</p>
            )}

            <h2>Overview</h2>
            {exp.descriptionDetails.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {exp.caseStudy && (
              <>
                <h2>The problem</h2>
                <p>{exp.caseStudy.problem}</p>

                <h2>What I did</h2>
                <p>{exp.caseStudy.role}</p>
                <ol>
                  {exp.caseStudy.approach.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>

                <h2>The result</h2>
                <p>{exp.caseStudy.outcome}</p>
                {exp.caseStudy.evidence && (
                  <ul>
                    {exp.caseStudy.evidence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {exp.descriptionDetails.bullets.length > 0 && (
              <>
                <h2>Features</h2>
                <ul>
                  {exp.descriptionDetails.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </>
            )}

            {exp.install && (
              <>
                <h2>Try it</h2>
                <CopyCommand command={exp.install} />
                {exp.githubLink &&
                  !exp.install.startsWith("pip install") &&
                  !exp.install.startsWith("npx ") && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Run inside a clone of the repository.
                    </p>
                  )}
              </>
            )}

            {exp.pagesInfoArr.length > 0 && (
              <>
                <h2>Notes</h2>
                {exp.pagesInfoArr.map((page) => (
                  <div key={page.title}>
                    <h3>{page.title}</h3>
                    {page.description && <p>{page.description}</p>}
                    {page.imgArr.map((img, imgIndex) => (
                      <figure key={img} className="figure-frame mb-5">
                        <Image
                          src={img}
                          alt={`${page.title}, image ${imgIndex + 1}`}
                          width={1200}
                          height={675}
                          className="h-auto w-full"
                          sizes="(max-width: 768px) 100vw, 640px"
                        />
                      </figure>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>

          <nav
            aria-label="Next project"
            className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground"
          >
            Next:{" "}
            <Link
              href={`/experience/${next.id}`}
              className="ink-link text-foreground"
            >
              {next.companyName}
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
