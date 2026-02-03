import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/experience/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

const renderContent = (tabVal: string) => {
  let expArr = Experiences;
  if (tabVal === "personal") {
    expArr = expArr.filter((val) => val.type === "Personal Project");
  } else if (tabVal === "professional") {
    expArr = expArr.filter((val) => val.type === "Professional");
  }

  if (expArr.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 sm:py-16 px-4">
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg text-center">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto my-6 sm:my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl px-2 sm:px-0">
      {expArr.map((exp) => (
        <ProjectCard project={exp} key={exp.id} />
      ))}
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Tabs defaultValue="all" className="w-full space-y-4 sm:space-y-6">
        <div className="flex justify-center px-2 sm:px-0">
          <TabsList className="grid max-w-[30rem] w-full grid-cols-3 h-10 sm:h-11">
            <TabsTrigger value="all" className="text-xs sm:text-sm font-medium px-2 sm:px-3">All Projects</TabsTrigger>
            <TabsTrigger value="personal" className="text-xs sm:text-sm font-medium px-2 sm:px-3">Personal</TabsTrigger>
            <TabsTrigger value="professional" className="text-xs sm:text-sm font-medium px-2 sm:px-3">Professional</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="w-full mt-0">
          {renderContent("all")}
        </TabsContent>
        <TabsContent value="professional" className="w-full mt-0">
          {renderContent("professional")}
        </TabsContent>
        <TabsContent value="personal" className="w-full mt-0">
          {renderContent("personal")}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
