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
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { careerExperiences, education } from "@/config/career";
import { featuredContributions } from "@/config/contributions";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills, skills } from "@/config/skills";
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
  const currentYear = new Date().getFullYear();
  const firstCareerYear = Math.min(
    ...careerExperiences.map((experience) => experience.startDate.getFullYear())
  );
  const yearsExperience = Math.max(1, currentYear - firstCareerYear);

  const profileNumbers = [
    { label: "Years", value: `${yearsExperience}+` },
    { label: "Projects", value: String(featuredExperiences.length) },
    { label: "Skills", value: String(skills.length) },
    { label: "Open Source", value: String(featuredContributions.length) },
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Backend Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="pb-10 pt-2 sm:pb-14">
        <div className="backend-panel p-5 sm:p-7 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="terminal-kicker">Hi, I am Sengleang</span>

              <div className="space-y-4">
                <h1 className="font-heading text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Backend developer focused on clean, reliable systems.
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {siteConfig.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {profileNumbers.map((item) => (
                  <span key={item.label} className="metric-chip">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto"
                  )}
                >
                  <Icons.contact className="h-4 w-4" />
                  Contact
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={hoysengleang}
                  alt="Houy Sengleang profile"
                  width={54}
                  height={54}
                  className="h-14 w-14 rounded-lg border border-border object-cover"
                  priority
                />
                <div>
                  <p className="font-heading text-lg">HOUY SENGLEANG</p>
                  <p className="text-sm text-muted-foreground">Backend Developer</p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-4">
                <p className="text-sm font-medium">What I care about</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>APIs that are easy to maintain and safe to scale</li>
                  <li>Database design that protects business data integrity</li>
                  <li>Backend code that teams can understand and extend</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="space-y-5 pb-8 sm:pb-12" id="skills">
        <div className="space-y-3">
          <span className="terminal-kicker">Skills</span>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Tools I use in real projects
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            A practical stack for building and maintaining backend applications.
          </p>
        </div>
        <SkillsCard skills={featuredSkills} />
        <Link href="/skills" className="inline-flex">
          <Button variant="outline">
            View all skills
            <Icons.chevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </AnimatedSection>

      <AnimatedSection className="pb-10 sm:pb-14">
        <div className="space-y-5">
          <span className="terminal-kicker">How I work</span>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workStyle.map((item) => (
              <div key={item.title} className="backend-panel p-4">
                <item.icon className="h-5 w-5 text-foreground" />
                <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-8 sm:pb-12">
        <CurrentlyLearning />
      </AnimatedSection>

      <AnimatedSection className="space-y-5 pb-8 sm:pb-12" id="career">
        <div className="space-y-3">
          <span className="terminal-kicker">Career</span>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Career timeline</h2>
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            My professional journey in backend development so far.
          </p>
        </div>
        <div className="backend-panel p-2 sm:p-4">
          <Timeline experiences={careerExperiences} />
        </div>
        <Link href="/career" className="inline-flex">
          <Button variant="outline">
            View full timeline
            <Icons.chevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </AnimatedSection>

      <AnimatedSection className="space-y-5 pb-8 sm:pb-12" id="experience">
        <div className="space-y-3">
          <span className="terminal-kicker">Projects</span>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Selected work</h2>
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            Projects that represent how I design and ship backend systems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={0.08 * (index + 1)} direction="up">
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <Link href="/experience" className="inline-flex">
          <Button variant="outline">
            Explore all projects
            <Icons.chevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </AnimatedSection>

      <AnimatedSection className="space-y-5 pb-8 sm:pb-12" id="contributions">
        <div className="space-y-3">
          <span className="terminal-kicker">Open source</span>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Contributions</h2>
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            Repositories and improvements I have contributed to.
          </p>
        </div>
        <ContributionCard contributions={featuredContributions} />
      </AnimatedSection>

      <AnimatedSection className="space-y-5" id="education">
        <div className="space-y-3">
          <span className="terminal-kicker">Education</span>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Education</h2>
        </div>
        <div className="backend-panel p-2 sm:p-4">
          <Timeline experiences={education} baseUrl="/education" />
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
