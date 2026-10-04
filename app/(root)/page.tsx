import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts } from "@/config/blog";
import { careerExperiences, education } from "@/config/career";
import { featuredContributions } from "@/config/contributions";
import { Experiences, featuredExperiences } from "@/config/experience";
import { nowConfig } from "@/config/now";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { skills } from "@/config/skills";
import { cn, formatYearRange } from "@/lib/utils";
import portrait from "@/public/hoysengleang-bg-white.jpg";

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const workStyle = [
  {
    title: "Understand the business problem first.",
    description:
      "Before writing code I make sure the requirements and the awkward edge cases are clear.",
  },
  {
    title: "Design for reliability.",
    description:
      "Clean data, transactional writes, and APIs that are boring in the best way.",
  },
  {
    title: "Measure before changing.",
    description:
      "Benchmarks and evaluation sets decide defaults, not hunches. Most of my projects publish their numbers.",
  },
  {
    title: "Keep improving after shipping.",
    description:
      "I go back to performance, security and developer experience once real usage shows what matters.",
  },
];

const skillGroups = [
  { label: "Every week", level: "Core" as const },
  { label: "Shipped with", level: "Project Experience" as const },
  { label: "Getting familiar", level: "Familiar" as const },
];

function Section({
  label,
  aside,
  id,
  children,
}: {
  label: string;
  aside?: React.ReactNode;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-rule scroll-mt-20">
      <div className="space-y-2">
        <h2 className="eyebrow text-foreground">{label}</h2>
        {aside ? <div className="text-sm text-muted-foreground">{aside}</div> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function IndexPage() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 3);
  const timeline = [...careerExperiences, ...education];

  return (
    <div className="page-shell">
      {/* Intro */}
      <section className="rise grid gap-10 pb-16 pt-14 sm:pt-20 md:grid-cols-[minmax(0,1fr)_220px] md:gap-14">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Backend-focused full stack developer · Phnom Penh</p>

          <h1 className="mt-6 max-w-[19ch] font-heading text-[2.6rem] font-medium leading-[1.05] tracking-[-0.025em] sm:text-[3.6rem]">
            <span className="block">Hi, I&apos;m Sengleang.</span>
            <span className="text-muted-foreground">
              I build backends that businesses can count on.
            </span>
          </h1>

          <div className="mt-7 max-w-[60ch] space-y-4 text-[1.0625rem] leading-[1.75] text-foreground/85">
            <p>
              I&apos;m a full stack developer at Peng Huoth Group, where I build web
              admin systems and REST APIs in Laravel, the NestJS backend for the
              company&apos;s mobile app, and the servers they run on. Before that I spent three
              years at Wintech building a loan and pawn system that runs daily
              operations across 5+ branches.
            </p>
            <p>
              In my own time I build open-source tools:{" "}
              <Link href="/experience/openvisionsearch" className="ink-link text-foreground">
                visual product search
              </Link>
              , a{" "}
              <Link href="/experience/knowledge-assistant" className="ink-link text-foreground">
                document assistant that cites its sources
              </Link>
              , an{" "}
              <Link href="/experience/apicheck" className="ink-link text-foreground">
                API security scanner
              </Link>
              , and lately a{" "}
              <Link href="/experience/free-remote" className="ink-link text-foreground">
                remote desktop in Rust
              </Link>
              .
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/experience" className={cn(buttonVariants({ variant: "default" }))}>
              See my work
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/HOUY_SENGLEANG.pdf"
              download="HOUY_SENGLEANG_Resume.pdf"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Icons.download className="h-4 w-4" />
              Résumé (PDF)
            </a>
            <Link href="/contact" className="ink-link ml-1 text-sm text-muted-foreground">
              or get in touch
            </Link>
          </div>
        </div>

        <figure className="order-1 md:order-2">
          {/* Studio photo; dimmed a touch in dark mode so the white backdrop doesn't glare. */}
          <div className="relative aspect-[4/5] w-36 overflow-hidden rounded-md border border-border sm:w-44 md:w-full">
            <Image
              src={portrait}
              alt="Portrait of Houy Sengleang"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 176px, 220px"
              className="scale-[1.03] object-cover object-top dark:brightness-[0.88]"
            />
          </div>
          <figcaption className="mt-3 hidden space-y-1 text-xs text-muted-foreground md:block">
            <span className="block">Houy Sengleang</span>
            <span className="block">Phnom Penh, Cambodia</span>
          </figcaption>
        </figure>
      </section>

      {/* Selected work */}
      <Section
        id="work"
        label="Selected work"
        aside={
          <Link href="/experience" className="ink-link">
            All {Experiences.length} projects
          </Link>
        }
      >
        <ul className="-mt-6">
          {featuredExperiences.map((project) => (
            <li key={project.id} className="border-b border-border last:border-b-0">
              <Link
                href={`/experience/${project.id}`}
                className="group grid gap-x-10 gap-y-3 py-7 sm:grid-cols-[minmax(0,1fr)_150px]"
              >
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-[1.65rem] leading-tight">
                    <span className="decoration-brand decoration-1 underline-offset-4 group-hover:underline">
                      {project.companyName}
                    </span>
                    <Icons.arrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  {project.highlight && (
                    <p className="mt-4 max-w-[62ch] border-l-2 border-brand pl-4 text-[0.95rem] leading-relaxed">
                      {project.highlight}
                    </p>
                  )}
                </div>
                <div className="space-y-1 font-mono text-xs text-muted-foreground sm:pt-2 sm:text-right">
                  <p>{formatYearRange(project.startDate, project.endDate)}</p>
                  <p className="text-foreground">
                    {project.type === "Professional" ? "Client work" : "Open source"}
                  </p>
                  <p className="leading-relaxed">{project.techStack.slice(0, 3).join(" · ")}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Now */}
      <Section
        id="now"
        label="Now"
        aside={
          <span>
            Updated{" "}
            {nowConfig.updatedAt.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
        }
      >
        <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-[110px_minmax(0,1fr)]">
          {nowConfig.items.map((item) => (
            <div key={item.label} className="contents">
              <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground sm:pt-1">
                {item.label}
              </dt>
              <dd className="-mt-3 text-[1.0625rem] leading-relaxed sm:mt-0">
                {item.href ? (
                  <Link href={item.href} className="ink-link">
                    {item.text}
                  </Link>
                ) : (
                  item.text
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience">
        <ol className="space-y-8">
          {timeline.map((item) => {
            const isEducation = education.some((edu) => edu.id === item.id);
            return (
              <li
                key={item.id}
                className="grid gap-x-8 gap-y-1 sm:grid-cols-[110px_minmax(0,1fr)]"
              >
                <p className="font-mono text-xs text-muted-foreground sm:pt-1.5">
                  {formatYearRange(item.startDate, item.endDate)}
                </p>
                <div>
                  <h3 className="text-[1.0625rem] font-medium">
                    <Link
                      href={`/${isEducation ? "education" : "career"}/${item.id}`}
                      className="ink-link"
                    >
                      {item.position}
                    </Link>
                    <span className="text-muted-foreground">, {item.company}</span>
                  </h3>
                  <p className="mt-1.5 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.achievements[0] ?? item.description[0]}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* How I work */}
      <Section id="approach" label="How I work">
        <ol className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {workStyle.map((item, index) => (
            <li key={item.title} className="flex gap-4">
              <span className="pt-0.5 font-mono text-xs text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Toolbox */}
      <Section
        id="toolbox"
        label="Toolbox"
        aside={
          <Link href="/skills" className="ink-link">
            With notes
          </Link>
        }
      >
        <div className="grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.level}>
              <h3 className="text-sm text-muted-foreground">{group.label}</h3>
              <ul className="mt-3 space-y-1.5">
                {skills
                  .filter((skill) => skill.level === group.level)
                  .map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Open source */}
      <Section
        id="open-source"
        label="Open source"
        aside={
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="ink-link"
          >
            github.com/{siteConfig.username}
          </a>
        }
      >
        <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {featuredContributions.map((repo) => (
            <li key={repo.repo}>
              <a
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <p className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-sm decoration-brand underline-offset-4 group-hover:underline">
                    {repo.repo}
                  </span>
                  {repo.language && (
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {repo.language}
                    </span>
                  )}
                </p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {repo.contibutionDescription}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Writing */}
      <Section
        id="writing"
        label="Writing"
        aside={
          <Link href="/blog" className="ink-link">
            All posts
          </Link>
        }
      >
        <ul className="-mt-4 divide-y divide-border">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-x-8 gap-y-1 py-4 sm:grid-cols-[110px_minmax(0,1fr)]"
              >
                <time
                  dateTime={post.publishedAt.toISOString()}
                  className="font-mono text-xs text-muted-foreground sm:pt-1"
                >
                  {post.publishedAt.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                <span className="text-[1.0625rem] decoration-brand underline-offset-4 group-hover:underline">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
