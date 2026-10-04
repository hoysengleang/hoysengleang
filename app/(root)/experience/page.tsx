import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectsBrowser from "@/components/experience/projects-browser";
import { Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

export default function ExperiencePage() {
  return (
    <PageContainer
      eyebrow={`${Experiences.length} projects`}
      title="Work"
      description={pagesConfig.experience.description}
    >
      <ProjectsBrowser projects={Experiences} />
    </PageContainer>
  );
}
