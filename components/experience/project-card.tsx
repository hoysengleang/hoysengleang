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
    <div className="group backend-panel flex h-full w-full flex-col overflow-hidden p-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
      <div className="relative h-[190px] w-full overflow-hidden rounded-[1.15rem]">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute right-3 top-3 rounded-full border border-border/80 bg-background/95 p-2 backdrop-blur-sm">
          {project.type === "Personal Project" ? (
            <Icons.userFill className="h-4 w-4 text-primary" />
          ) : (
            <Icons.work className="h-4 w-4 text-primary" />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-4 p-5">
        <div className="flex-1 space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
            {project.type}
          </p>
          <h5 className="line-clamp-2 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {project.companyName}
          </h5>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/experience/${project.id}`} className="mt-auto">
          <Button variant={"outline"} className="w-full group/btn">
            View Details
            <Icons.chevronRight className="ml-1 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
