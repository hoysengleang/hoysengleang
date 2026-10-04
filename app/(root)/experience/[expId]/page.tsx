import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { ExperienceStructuredData } from "@/components/common/structured-data";
import CopyCommand from "@/components/experience/copy-command";
import { buttonVariants } from "@/components/ui/button";
import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, formatMonthYear, isOngoing } from "@/lib/utils";

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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[1.6rem] font-medium leading-tight tracking-[-0.01em]">
      {children}
    </h2>
  );
}

export default function Experience({ params }: ExperiencePageProps) {
  const index = Experiences.findIndex((val) => val.id === params.expId);
  if (index === -1) {
    redirect("/experience");
  }
  const exp = Experiences[index];
  const next = Experiences[(index + 1) % Experiences.length];

  const startLabel = formatMonthYear(exp.startDate);
  const endLabel = isOngoing(exp.endDate) ? "now" : formatMonthYear(exp.endDate);
  const timeframe = startLabel === endLabel ? startLabel : `${startLabel} – ${endLabel}`;

  return (
    <>
      <ExperienceStructuredData expId={params.expId} />
      <ClientPageWrapper>
        <article className="page-shell">
          <div className="pt-8">
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icons.arrowLeft className="h-3.5 w-3.5" />
              All work
            </Link>
          </div>

          <header className="border-b border-border pb-10 pt-8">
            <p className="eyebrow">
              {exp.type === "Professional" ? "Client work" : "Open source"} ·{" "}
              {exp.category[0]}
            </p>
            <h1 className="mt-4 font-heading text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem]">
              {exp.companyName}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {exp.shortDescription}
            </p>

            {(exp.githubLink || exp.websiteLink) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {exp.githubLink && (
                  <a
                    href={exp.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                  >
                    <Icons.gitHub className="h-4 w-4" />
                    Read the source
                  </a>
                )}
                {exp.websiteLink && (
                  <a
                    href={exp.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    <Icons.externalLink className="h-4 w-4" />
                    {exp.websiteLink.includes("pypi.org") ? "View on PyPI" : "Visit live site"}
                  </a>
                )}
              </div>
            )}
          </header>

          <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
            <div className="min-w-0 space-y-12">
              <figure className="figure-frame">
                <Image
                  src={exp.companyLogoImg}
                  alt={`Diagram of how ${exp.companyName} works`}
                  width={1200}
                  height={675}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 760px"
                  priority
                />
              </figure>

              {exp.highlight && (
                <p className="border-l-2 border-brand pl-5 font-heading text-[1.35rem] leading-snug">
                  {exp.highlight}
                </p>
              )}

              <section className="space-y-4">
                <SectionHeading>Overview</SectionHeading>
                <div className="space-y-4 text-[1.0625rem] leading-[1.75] text-foreground/85">
                  {exp.descriptionDetails.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {exp.caseStudy && (
                <section className="space-y-8">
                  <div className="space-y-3">
                    <SectionHeading>The problem</SectionHeading>
                    <p className="text-[1.0625rem] leading-[1.75] text-foreground/85">
                      {exp.caseStudy.problem}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <SectionHeading>What I did</SectionHeading>
                    <p className="text-[1.0625rem] leading-[1.75] text-foreground/85">
                      {exp.caseStudy.role}
                    </p>
                    <ol className="space-y-3 pt-1">
                      {exp.caseStudy.approach.map((step, stepIndex) => (
                        <li key={step} className="flex gap-4 text-[1.0625rem] leading-[1.7]">
                          <span className="mt-[0.35rem] font-mono text-xs text-brand">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="text-foreground/85">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="space-y-3">
                    <SectionHeading>The result</SectionHeading>
                    <p className="text-[1.0625rem] leading-[1.75] text-foreground/85">
                      {exp.caseStudy.outcome}
                    </p>
                    {exp.caseStudy.evidence && (
                      <ul className="space-y-1.5 pt-1 text-sm text-muted-foreground">
                        {exp.caseStudy.evidence.map((item) => (
                          <li key={item} className="flex gap-2">
                            <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              )}

              {exp.descriptionDetails.bullets.length > 0 && (
                <section className="space-y-4">
                  <SectionHeading>In short</SectionHeading>
                  <ul className="divide-y divide-border border-y border-border">
                    {exp.descriptionDetails.bullets.map((bullet) => (
                      <li key={bullet} className="py-3 text-[0.975rem] leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {exp.pagesInfoArr.length > 0 && (
                <section className="space-y-8">
                  <SectionHeading>Notes</SectionHeading>
                  {exp.pagesInfoArr.map((page) => (
                    <div key={page.title} className="space-y-3">
                      <h3 className="text-base font-semibold">{page.title}</h3>
                      {page.description && (
                        <p className="leading-[1.75] text-foreground/85">{page.description}</p>
                      )}
                      {page.imgArr.map((img, imgIndex) => (
                        <figure key={img} className="figure-frame">
                          <Image
                            src={img}
                            alt={`${page.title}, image ${imgIndex + 1}`}
                            width={1200}
                            height={675}
                            className="h-auto w-full"
                            sizes="(max-width: 1024px) 100vw, 760px"
                          />
                        </figure>
                      ))}
                    </div>
                  ))}
                </section>
              )}
            </div>

            <aside className="h-fit space-y-8 text-sm lg:sticky lg:top-24">
              <dl className="space-y-5">
                <div>
                  <dt className="eyebrow">When</dt>
                  <dd className="mt-1.5">{timeframe}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Type</dt>
                  <dd className="mt-1.5">
                    {exp.type === "Professional"
                      ? "Client work (details anonymised)"
                      : "Personal, open source"}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Built with</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              {exp.install && (
                <div>
                  <p className="eyebrow mb-2">Try it</p>
                  <CopyCommand command={exp.install} />
                  {exp.githubLink && !exp.install.startsWith("pip install") && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Run inside a clone of the repository.
                    </p>
                  )}
                </div>
              )}
            </aside>
          </div>

          <nav
            aria-label="Next project"
            className="mt-16 border-t border-border pt-8"
          >
            <Link href={`/experience/${next.id}`} className="group block">
              <span className="eyebrow">Next project</span>
              <span className="mt-2 flex items-center gap-2 font-heading text-[1.75rem] leading-tight">
                <span className="decoration-brand decoration-1 underline-offset-4 group-hover:underline">
                  {next.companyName}
                </span>
                <Icons.arrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </nav>
        </article>
      </ClientPageWrapper>
    </>
  );
}
