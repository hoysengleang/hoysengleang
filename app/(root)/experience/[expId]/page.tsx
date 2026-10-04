import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import { ExperienceStructuredData } from "@/components/common/structured-data";
import ExperienceDescription from "@/components/experience/exp-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import hoysengleang from "@/public/hoysengleang-bg-black.jpg";

interface ExperiencePageProps {
  params: {
    expId: string;
  };
}

const githubUsername = "hoysengleang";

// Generate dynamic metadata for each experience page
export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const exp = Experiences.find((val) => val.id === params.expId);

  if (!exp) {
    return {
      title: "Experience Not Found",
      description: "The requested experience could not be found.",
    };
  }

  const pageUrl = `${siteConfig.url}/experience/${exp.id}`;
  const imageUrl = `${siteConfig.url}${exp.companyLogoImg}`;

  return {
    title: `${exp.companyName} | ${exp.type} - HOUY SENGLEANG`,
    description: exp.shortDescription,
    keywords: [
      exp.companyName,
      ...exp.techStack,
      ...exp.category,
      "project showcase",
      "portfolio",
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
      title: `${exp.companyName} - ${exp.type}`,
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
      title: `${exp.companyName} - ${exp.type}`,
      description: exp.shortDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// Generate static params for all experiences (for SSG)
export async function generateStaticParams() {
  return Experiences.map((exp) => ({
    expId: exp.id,
  }));
}

export default function Experience({ params }: ExperiencePageProps) {
  let exp = Experiences.find((val) => val.id === params.expId);
  if (!exp) {
    redirect("/experience");
  }

  return (
    <>
      <ExperienceStructuredData expId={params.expId} />
      <article className="container relative max-w-4xl py-4 sm:py-6 lg:py-10 px-4 sm:px-6 lg:px-8">
        <Link
          href="/experience"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex hover:bg-accent hover:text-black"
          )}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Experience
        </Link>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
            <time
              dateTime={Date.now().toString()}
              className="text-xs sm:text-sm font-medium text-muted-foreground"
            >
              {formatDateFromObj(exp.startDate)} -{" "}
              {exp.endDate.getTime() > new Date().getTime() - 86400000
                ? "Present"
                : formatDateFromObj(exp.endDate)}
            </time>
            <div className="flex items-center gap-2">
              {exp.githubLink && (
                <CustomTooltip text="View source code on GitHub">
                  <Link
                    href={exp.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-accent hover:text-black sm:h-10 sm:text-sm"
                  >
                    <Icons.gitHub className="w-4 h-4 sm:w-5 sm:h-5" />
                    Source
                  </Link>
                </CustomTooltip>
              )}
              {exp.websiteLink && (
                <CustomTooltip text="Visit live website">
                  <Link
                    href={exp.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-accent hover:text-black sm:h-10 sm:text-sm"
                  >
                    <Icons.externalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    Live project
                  </Link>
                </CustomTooltip>
              )}
            </div>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            {exp.companyName}
          </h1>
          <ChipContainer textArr={exp.category} />
          <div className="flex space-x-2 sm:space-x-3 pt-2">
            <Link
              href={siteConfig.links.github}
              className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm group"
            >
              <Image
                src={hoysengleang}
                alt={"hoysengleang"}
                width={36}
                height={36}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background ring-2 ring-border group-hover:ring-primary transition-all"
              />
              <div className="flex-1 text-left leading-tight">
                <p className="font-semibold group-hover:text-primary transition-colors text-sm sm:text-base">
                  Hoysengleang
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  @{githubUsername}
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative my-6 sm:my-8 md:my-10 overflow-hidden rounded-lg sm:rounded-xl border bg-muted">
          <Image
            src={exp.companyLogoImg}
            alt={exp.companyName}
            width={1200}
            height={675}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>

        <div className="mb-8 sm:mb-10 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight">
            Tech Stack
          </h2>
          <ChipContainer textArr={exp.techStack} />
        </div>

        <div className="mb-8 sm:mb-10 space-y-4 sm:space-y-6">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight">
            Overview
          </h2>
          <ExperienceDescription
            paragraphs={exp.descriptionDetails.paragraphs}
            bullets={exp.descriptionDetails.bullets}
          />
        </div>

        {exp.caseStudy && (
          <section className="mb-10 sm:mb-12 rounded-2xl border border-border/70 bg-card/60 p-5 sm:p-7 md:p-8">
            <div className="mb-6 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Case study
              </p>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight">
                How I approached the work
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                A concise view of the problem, ownership, engineering decisions,
                and value delivered.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-background/60 p-4 sm:p-5">
                <h3 className="mb-2 font-semibold">The problem</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.caseStudy.problem}
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/60 p-4 sm:p-5">
                <h3 className="mb-2 font-semibold">My role</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.caseStudy.role}
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/60 p-4 sm:p-5">
                <h3 className="mb-2 font-semibold">The approach</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.caseStudy.approach.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
                <h3 className="mb-2 font-semibold">The outcome</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.caseStudy.outcome}
                </p>
              </div>
              {exp.caseStudy.evidence && (
                <div className="rounded-xl border border-border/70 bg-background/60 p-4 sm:col-span-2 sm:p-5">
                  <h3 className="mb-2 font-semibold">Evidence and context</h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.caseStudy.evidence.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Icons.check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {exp.pagesInfoArr && exp.pagesInfoArr.length > 0 && (
          <div className="mb-10 sm:mb-12 space-y-8 sm:space-y-10">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight">
              Project Highlights
            </h2>
            {exp.pagesInfoArr.map((page, ind) => (
              <div key={ind} className="space-y-3 sm:space-y-4">
                <h3 className="flex items-start sm:items-center font-heading text-lg sm:text-xl md:text-2xl leading-tight">
                  <Icons.star className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary flex-shrink-0 mt-1 sm:mt-0" />
                  <span className="flex-1">{page.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-0 sm:pl-7">
                  {page.description}
                </p>
                <div className="grid gap-4 sm:gap-6 pl-0 sm:pl-7">
                  {page.imgArr.map((img, imgInd) => (
                    <div
                      key={imgInd}
                      className="relative overflow-hidden rounded-lg sm:rounded-xl border bg-muted group"
                    >
                      <Image
                        src={img}
                        alt={`${page.title} - Image ${imgInd + 1}`}
                        width={1200}
                        height={675}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <hr className="mt-10 sm:mt-12 border-border" />
        <div className="flex justify-center py-6 sm:py-8 lg:py-12">
          <Link
            href="/experience"
            className={cn(
              buttonVariants({ variant: "ghost", size: "default" }),
              "group text-sm sm:text-base hover:bg-accent hover:text-black"
            )}
          >
            <Icons.chevronLeft className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:-translate-x-1" />
            Back to All Projects
          </Link>
        </div>
      </article>
    </>
  );
}
