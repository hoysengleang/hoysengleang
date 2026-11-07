import { Metadata } from "next";
import Link from "next/link";

import { ProjectSketch } from "@/components/home/project-sketch";
import { blogPosts } from "@/config/blog";
import { careerExperiences, education } from "@/config/career";
import { Experiences, featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { formatYearRange } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const contactLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Email", href: "mailto:hoysengleang617@gmail.com" },
  { label: "Résumé", href: "/HOUY_SENGLEANG.pdf" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 border-b border-border pb-3 font-medium">{children}</h2>
  );
}

export default function IndexPage() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 4);
  const timeline = [...careerExperiences, ...education];

  return (
    <div className="page-shell">
      {/* Intro */}
      <section className="max-w-[60ch] py-14 sm:py-20">
        <h1 className="text-2xl font-semibold tracking-tight">
          Houy Sengleang
        </h1>
        <p className="mt-1 text-muted-foreground">
          Software engineer in Phnom Penh
        </p>

        <div className="mt-6 space-y-4 leading-7 text-foreground/90">
          <p>
            I build admin systems and APIs for a local business group. Before
            that I spent three years at a software company, working on a loan
            and pawn system used across 5+ branches.
          </p>
          <p>On the side I write open-source tools. A few of them are below.</p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="ink-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects as numbered figures */}
      <section className="pb-6">
        <SectionHeading>Projects</SectionHeading>
        <ol>
          {featuredExperiences.map((project, index) => (
            <li
              key={project.id}
              className="border-b border-border last:border-b-0"
            >
              <Link
                href={`/experience/${project.id}`}
                className="group grid gap-6 py-8 sm:grid-cols-[280px_minmax(0,1fr)] sm:items-center sm:gap-10"
              >
                <figure>
                  <div className="crop-marks h-40 p-4 text-muted-foreground transition-colors group-hover:text-foreground">
                    <ProjectSketch id={project.id} />
                  </div>
                  <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                    Fig. {index + 1}
                  </figcaption>
                </figure>
                <div>
                  <h3 className="text-lg font-medium underline-offset-4 group-hover:underline">
                    {project.companyName}
                  </h3>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {formatYearRange(project.startDate, project.endDate)} ·{" "}
                    {project.techStack.slice(0, 3).join(", ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-sm">
          <Link
            href="/experience"
            className="ink-link text-muted-foreground hover:text-foreground"
          >
            All {Experiences.length} projects
          </Link>
        </p>
      </section>

      <div className="grid gap-14 py-14 lg:grid-cols-2 lg:gap-16">
        {/* Career, drawn like a commit log */}
        <section>
          <SectionHeading>Career</SectionHeading>
          <ol className="relative ml-[5px] border-l border-foreground/40">
            {timeline.map((item, index) => {
              const isEducation = education.some((edu) => edu.id === item.id);
              return (
                <li key={item.id} className="relative pb-7 pl-6 last:pb-0">
                  <span
                    aria-hidden
                    className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full border border-foreground ${
                      index === 0 ? "bg-foreground" : "bg-background"
                    }`}
                  />
                  <Link
                    href={`/${isEducation ? "education" : "career"}/${item.id}`}
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {item.position}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {item.company} ·{" "}
                    {formatYearRange(item.startDate, item.endDate)}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Writing */}
        <section>
          <SectionHeading>Writing</SectionHeading>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex gap-4">
                <time
                  dateTime={post.publishedAt.toISOString()}
                  className="w-16 shrink-0 pt-0.5 text-sm tabular-nums text-muted-foreground"
                >
                  {post.publishedAt.toLocaleDateString("en-US", {
                    month: "short",
                    year: "2-digit",
                  })}
                </time>
                <Link href={`/blog/${post.slug}`} className="ink-link">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link
              href="/blog"
              className="ink-link text-muted-foreground hover:text-foreground"
            >
              All writing
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
