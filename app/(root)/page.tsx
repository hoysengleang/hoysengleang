import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import Timeline from "@/components/career/timeline";
import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import CurrentlyLearning from "@/components/common/currently-learning";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/experience/project-card";
import { Button } from "@/components/ui/button";
import { ThemedProfileImage } from "@/components/common/themed-profile-image";
import { careerExperiences, education } from "@/config/career";
import { featuredContributions } from "@/config/contributions";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { skills } from "@/config/skills";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

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
    {
      label: "Experience",
      value: `${yearsExperience}+`,
      detail: "Years building and maintaining backend systems",
    },
    {
      label: "Projects",
      value: `${featuredExperiences.length}+`,
      detail: "Production and personal apps shipped end-to-end",
    },
    {
      label: "Open Source",
      value: "2+",
      detail: "Community contributions and tools",
    },
  ];

  const focusAreas = ["API architecture", "Database optimization", "System reliability"];
  const marqueeSkills = skills.slice(0, 12);

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="page-shell">
        <section className="pb-3 pt-2 sm:pt-5">
          <div className="hero-panel">
            <div className="grid items-start gap-6 md:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_420px]">
              <div className="order-2 min-w-0 xl:order-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                  Scalable Backend Systems
                </p>

                <div className="mt-5 space-y-6">
                  <h1 className="hero-display max-w-[8ch]">Backend Engineer</h1>

                  <div className="w-full text-sm leading-8 text-muted-foreground sm:text-base">
                    <p className="text-left md:text-justify [text-align-last:left] hyphens-auto">
                      Detail-oriented Backend Developer with over 3 years of experience in Fintech systems and API architecture. Currently serving as an R&D Officer specializing in technical research, environment standardization using Docker, and performance benchmarking. Proven track record in architecting secure, 100% accurate financial systems including Core Banking and Pawn Management, with a focus on high-volume transaction reliability and scalable system design. I design and ship practical APIs with strong architecture, clear data flow, and stable performance in production.
                    </p>
                  </div>

                  <div className="pt-1">
                    <Link href="/contact" className="hero-cta-link">
                      Get In Touch
                      <Icons.arrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-md bg-background/70 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.07em] text-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {quickStats.map((item) => (
                      <div key={item.label} className="stat-tile">
                        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 font-heading text-3xl leading-none text-foreground">{item.value}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
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

              <div className="order-1 pb-1 xl:order-2 xl:pb-0 xl:pt-6">
                <div className="hero-photo-shell">
                  <ThemedProfileImage
                    alt={`${siteConfig.authorName} profile`}
                    priority
                    sizes="(max-width: 1024px) 82vw, 440px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="pb-8 sm:pb-10" id="experience">
          <div className="section-panel-alt">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <span className="terminal-kicker">Selected projects</span>
                <h2 className="section-title">Projects</h2>
                <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Backend-heavy work with clean architecture, practical trade-offs, and reliable delivery.
                </p>
              </div>
              <Link href="/experience" className="inline-flex w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  See All Projects
                </Button>
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredExperiences.slice(0, 3).map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  delay={0.07 * (index + 1)}
                  direction="up"
                  className={cn(index === 0 ? "sm:col-span-2" : "")}
                >
                  <ProjectCard project={exp} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10" id="skills">
          <div className="section-panel">
            <div className="space-y-2">
              <span className="terminal-kicker">Core stack</span>
              <h2 className="section-title">Tools I use in real projects</h2>
              <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
                Technology choices centered on stability, speed of delivery, and long-term maintainability.
              </p>
            </div>

            <div className="mt-5">
              <p className="pb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                Hover this row to slow down
              </p>
              <div className="skills-marquee-mask">
                <div className="skills-marquee-track">
                  {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="skills-marquee-item section-panel-soft flex min-w-[260px] items-center gap-3 sm:min-w-[300px]"
                    >
                      <span className="terminal-icon-wrap">
                        <skill.icon
                          className="terminal-icon-brand h-6 w-6"
                          style={{ color: skill.color ?? "hsl(var(--foreground))" }}
                        />
                      </span>
                      <div className="space-y-0.5">
                        <p className="font-semibold">{skill.name}</p>
                        <p className="line-clamp-1 text-xs text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10" id="how-i-work">
          <div className="section-panel-alt">
            <div className="space-y-2">
              <span className="terminal-kicker">Approach</span>
              <h2 className="section-title">How I work</h2>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {workStyle.map((item, index) => (
                <div key={item.title} className="section-panel-soft">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "rounded-md bg-background/70 px-2 py-1 font-mono text-[11px] text-foreground"
                      )}
                    >
                      0{index + 1}
                    </span>
                    <item.icon className="terminal-icon-glyph h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10">
          <div className="section-panel">
            <div className="space-y-2 pb-4">
              <span className="terminal-kicker">Now learning</span>
              <h2 className="section-title">Learning Roadmap</h2>
            </div>
            <div className="section-panel-soft">
              <CurrentlyLearning />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10" id="career">
          <div className="section-panel-alt">
            <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-8 xl:items-start">
              <div className="space-y-3 xl:pt-2">
                <span className="terminal-kicker">Career</span>
                <h2 className="section-title">Career timeline</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Milestones from hands-on backend development, real business constraints, and continuous improvement.
                </p>
              </div>
              <div className="section-panel-soft p-3 sm:p-4 xl:p-5">
                <Timeline experiences={careerExperiences} className="max-w-[760px] py-1" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-8 sm:pb-10" id="contributions">
          <div className="section-panel">
            <div className="space-y-2 pb-4">
              <span className="terminal-kicker">Open source</span>
              <h2 className="section-title">Contributions</h2>
            </div>
            <div className="section-panel-soft">
              <ContributionCard contributions={featuredContributions} />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-5" id="education">
          <div className="section-panel-alt">
            <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-8 xl:items-start">
              <div className="space-y-3 xl:pt-2">
                <span className="terminal-kicker">Education</span>
                <h2 className="section-title">Education</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Academic foundation that supports practical engineering work and system thinking.
                </p>
              </div>
              <div className="section-panel-soft p-3 sm:p-4 xl:p-5">
                <Timeline experiences={education} baseUrl="/education" className="max-w-[760px] py-1" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
