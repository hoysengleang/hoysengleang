import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group terminal-surface flex h-full w-full flex-col overflow-hidden p-3 transition-colors hover:border-primary/60">
      <div className="relative h-[190px] w-full overflow-hidden rounded-lg border border-border/70">
        <Image
          className="object-cover"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute right-3 top-3 rounded-md border border-border/80 bg-background/95 p-2">
          {project.type === "Personal Project" ? (
            <Icons.userFill className="h-4 w-4 text-foreground" />
          ) : (
            <Icons.work className="h-4 w-4 text-foreground" />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-3 p-3.5">
        <div className="flex-1 space-y-2">
          <p className="line-clamp-1 font-mono text-[11px] text-muted-foreground">
            {project.techStack.slice(0, 4).join(", ")}
          </p>
          <h5 className="line-clamp-2 text-2xl font-semibold tracking-tight text-foreground">
            {project.companyName}
          </h5>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>
        </div>
        <Link href={`/experience/${project.id}`} className="mt-auto">
          <Button variant={"outline"} className="w-full font-mono text-xs uppercase tracking-[0.08em] group/btn">
            Open Project
            <Icons.chevronRight className="ml-1 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
