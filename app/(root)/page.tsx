import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import Timeline from "@/components/career/timeline";
import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import CurrentlyLearning from "@/components/common/currently-learning";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/experience/project-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { careerExperiences, education } from "@/config/career";
import { featuredContributions } from "@/config/contributions";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { skills } from "@/config/skills";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";
import hoysengleang from "@/public/hoysengleang-bg-black.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Backend Portfolio`,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const workStyle = [
  {
    title: "Understand the business problem",
    description: "Before coding, I make sure the requirements and edge cases are clear.",
    icon: Icons.user,
  },
  {
    title: "Design for reliability first",
    description: "I focus on clean architecture, data integrity, and maintainable APIs.",
    icon: Icons.server,
  },
  {
    title: "Build with practical trade-offs",
    description: "I choose tools that solve the problem well and keep the team productive.",
    icon: Icons.code,
  },
  {
    title: "Review and improve continuously",
    description: "I revisit performance, security, and developer experience after shipping.",
    icon: Icons.database,
  },
];

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Backend Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  const currentYear = new Date().getFullYear();
  const firstCareerYear = Math.min(
    ...careerExperiences.map((experience) => experience.startDate.getFullYear())
  );
  const yearsExperience = Math.max(1, currentYear - firstCareerYear);

  const quickStats = [
    { label: "Years of Experience", value: `${yearsExperience}+` },
    { label: "Completed Projects", value: `${featuredExperiences.length}+` },
    { label: "Open Source", value: `${featuredContributions.length}+` },
  ];

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="page-shell">
        <section className="pb-2 pt-2 sm:pt-4">
          <div className="backend-panel p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <Image
                  src={hoysengleang}
                  alt="Houy Sengleang profile"
                  width={106}
                  height={106}
                  className="h-[92px] w-[92px] rounded-full border-4 border-primary object-cover sm:h-[106px] sm:w-[106px]"
                  priority
                />

                <div className="min-w-0 flex-1 space-y-2.5 pr-1 sm:pr-4">
                  <h1 className="font-heading text-4xl leading-none tracking-tight sm:text-5xl">
                    {siteConfig.authorName}
                  </h1>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Backend Engineer | API Systems | Reliability Focus
                  </p>

                  <div className="flex items-center gap-2.5 pt-1">
                    {SocialLinks.slice(0, 4).map((social) => (
                      <Link
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        className="terminal-icon-btn h-9 w-9"
                        aria-label={social.name}
                      >
                        <social.icon
                          className="terminal-icon-brand h-4 w-4"
                          style={{ color: social.color ?? "hsl(var(--foreground))" }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <p className="w-full max-w-none text-center text-sm leading-8 tracking-[0.01em] text-muted-foreground sm:text-left sm:text-justify sm:text-base">
                {siteConfig.description}
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {quickStats.map((item) => (
                  <div key={item.label} className="terminal-surface p-3 text-center sm:p-4">
                    <p className="font-heading text-xl text-foreground sm:text-2xl">{item.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/resume"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full bg-foreground text-background hover:bg-foreground/90 sm:flex-1"
                  )}
                >
                  Download CV
                  <Icons.arrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className="terminal-icon-btn h-12 w-full sm:w-12"
                  aria-label="GitHub"
                >
                  <Icons.gitHub className="terminal-icon-glyph h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="terminal-icon-btn h-12 w-full sm:w-12"
                  aria-label="Contact"
                >
                  <Icons.contact className="terminal-icon-glyph h-5 w-5" />
                </Link>
              </div>

              <div className="grid max-w-xl grid-cols-2 gap-1 rounded-xl bg-muted/70 p-1">
                <span className="rounded-lg bg-background px-3 py-2 text-center font-mono text-xs text-foreground">
                  Portfolio
                </span>
                <span className="rounded-lg px-3 py-2 text-center font-mono text-xs text-muted-foreground">
                  About
                </span>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="pb-4 sm:pb-6" id="experience">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl leading-tight">Projects</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredExperiences.slice(0, 2).map((exp, index) => (
                <AnimatedSection key={exp.id} delay={0.08 * (index + 1)} direction="up">
                  <ProjectCard project={exp} />
                </AnimatedSection>
              ))}
            </div>
            <div className="pt-1 text-center">
              <Link href="/experience" className="inline-flex">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  See All Projects
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10" id="skills">
          <div className="backend-panel p-5 sm:p-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <span className="terminal-kicker">Tools</span>
                <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
                  Tools I use in real projects
                </h2>
                <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
                  Core tools I use for backend and API-focused production work.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="terminal-surface flex items-center gap-3 p-4">
                    <span className="terminal-icon-wrap">
                      <skill.icon
                        className="terminal-icon-brand h-6 w-6"
                        style={{ color: skill.color ?? "hsl(var(--foreground))" }}
                      />
                    </span>
                    <div className="space-y-0.5">
                      <p className="font-medium">{skill.name}</p>
                      <p className="line-clamp-1 text-xs text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10">
          <div className="backend-panel p-5 sm:p-6">
            <div className="space-y-5">
              <span className="terminal-kicker">How I work</span>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {workStyle.map((item) => (
                  <div key={item.title} className="terminal-surface p-4">
                    <item.icon className="terminal-icon-glyph h-5 w-5" />
                    <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10">
          <div className="backend-panel p-5 sm:p-6">
            <CurrentlyLearning />
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10" id="career">
          <div className="backend-panel p-5 sm:p-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <span className="terminal-kicker">Career</span>
                <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Career timeline</h2>
              </div>
              <div className="terminal-surface p-2 sm:p-4">
                <Timeline experiences={careerExperiences} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10" id="contributions">
          <div className="backend-panel p-5 sm:p-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <span className="terminal-kicker">Open source</span>
                <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Contributions</h2>
              </div>
              <ContributionCard contributions={featuredContributions} />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-5" id="education">
          <div className="backend-panel p-5 sm:p-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <span className="terminal-kicker">Education</span>
                <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Education</h2>
              </div>
              <div className="terminal-surface p-2 sm:p-4">
                <Timeline experiences={education} baseUrl="/education" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
