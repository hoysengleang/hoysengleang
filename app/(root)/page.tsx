import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import CurrentlyLearning from "@/components/common/currently-learning";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import Timeline from "@/components/career/timeline";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { featuredExperiences } from "@/config/experience";
import { careerExperiences, education } from "@/config/career";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import hoysengleang from "@/public/hoysengleang-bg-black.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  description: `${pagesConfig.home.metadata.description} This open-source Next.js portfolio template is customizable to showcase your skills and projects.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Backend Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-4 sm:space-y-6 pb-6 pt-4 sm:pb-8 sm:pt-6 md:pb-12 md:py-20 lg:py-32 min-h-screen flex items-center px-4 sm:px-6">
        <div className="container flex max-w-[64rem] flex-col items-center gap-3 sm:gap-4 text-center mx-auto">
          <Image
            src={hoysengleang}
            height={100}
            width={100}
            sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 16rem"
            className="bg-primary rounded-full mb-1 sm:mb-0 md:mb-2 w-[45%] sm:w-[40%] md:w-[35%] max-w-[10rem] sm:max-w-[12rem] md:max-w-[16rem] border-4 sm:border-6 md:border-8 border-primary"
            alt="Hoysengleang - Backend Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-2xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2"
          >
            Houy Sengleang
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-2"
          >
            Backend Developer
          </AnimatedText>
          <div className="mt-2 sm:mt-4 max-w-[90%] sm:max-w-[85%] md:max-w-[42rem] text-center px-2">
            <p className="leading-relaxed text-muted-foreground text-xs sm:text-sm md:text-base line-clamp-6 sm:line-clamp-none">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col mt-6 sm:mt-8 md:mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-2.5 sm:gap-3 w-full sm:w-auto px-4 sm:px-0">
            <AnimatedText delay={0.6} className="w-full sm:w-auto">
              <Link
                href={"https://github.com/hoysengleang"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto min-w-[140px] h-11 sm:h-12 text-sm sm:text-base")}
                aria-label="View Hoy Sengleang's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8} className="w-full sm:w-auto">
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "w-full sm:w-auto min-w-[140px] h-11 sm:h-12 text-sm sm:text-base"
                )}
                aria-label="Contact Hoysengleang"
              >
                <Icons.contact className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-4 sm:space-y-6 bg-muted py-8 sm:py-10 md:py-12 px-4 sm:px-6"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-2">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[90%] sm:max-w-[85%] leading-relaxed text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center px-4">
          <Link href="/skills" className="w-full sm:w-auto">
            <Button variant={"outline"} className="rounded-xl w-full sm:w-auto min-w-[160px] h-11 sm:h-12 text-sm sm:text-base">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection className="py-8 sm:py-10 md:py-12 my-10 sm:my-12 md:my-14 px-4 sm:px-6">
        <CurrentlyLearning />
      </AnimatedSection>
      <AnimatedSection
        className="container space-y-4 sm:space-y-6 bg-muted py-8 sm:py-10 md:py-12 my-10 sm:my-12 md:my-14 px-4 sm:px-6"
        id="career"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-2">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          >
            Career Timeline
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[90%] sm:max-w-[85%] leading-relaxed text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {pagesConfig.career.description}
          </AnimatedText>
        </div>
        <Timeline experiences={careerExperiences} />
        <AnimatedText delay={0.4} className="flex justify-center px-4">
          <Link href="/career" className="w-full sm:w-auto">
            <Button variant={"outline"} className="rounded-xl w-full sm:w-auto min-w-[160px] h-11 sm:h-12 text-sm sm:text-base">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        className="container space-y-4 sm:space-y-6 bg-muted py-8 sm:py-10 md:py-12 my-10 sm:my-12 md:my-14 px-4 sm:px-6"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-2">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          >
            Education
          </AnimatedText>
        </div>
        <Timeline experiences={education} baseUrl="/education" />
      </AnimatedSection>

      <AnimatedSection
        direction="right"
        className="container space-y-4 sm:space-y-6 py-8 sm:py-10 md:py-12 my-10 sm:my-12 md:my-14 px-4 sm:px-6"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-2">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          >
            Key Projects
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[90%] sm:max-w-[85%] leading-relaxed text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:w-full">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center px-4">
          <Link href="/experience" className="w-full sm:w-auto">
            <Button variant={"outline"} className="rounded-xl w-full sm:w-auto min-w-[160px] h-11 sm:h-12 text-sm sm:text-base">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
