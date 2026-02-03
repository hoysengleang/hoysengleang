import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-full w-full bg-background border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-background/95 backdrop-blur-sm border border-border shadow-lg">
          {project.type === "Personal Project" ? (
            <Icons.userFill className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          ) : (
            <Icons.work className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          )}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        <div className="flex-1 space-y-2 sm:space-y-3">
          <h5 className="text-lg sm:text-xl font-bold tracking-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {project.companyName}
          </h5>
          <p className="line-clamp-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex gap-1.5 sm:gap-2 flex-wrap pt-2">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/experience/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="w-full group/btn text-sm sm:text-base">
            View Details
            <Icons.chevronRight className="w-3.5 sm:w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
