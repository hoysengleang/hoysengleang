import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isPersonalProject = project.type === "Personal Project";

  return (
    <div className="group terminal-surface flex h-full w-full flex-col overflow-hidden p-3.5 transition-all duration-300 hover:-translate-y-0.5">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
        <Image
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        <div className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.09em] text-foreground backdrop-blur-sm">
          {isPersonalProject ? "Personal" : "Professional"}
        </div>

        <div className="absolute right-3 top-3 rounded-md bg-background/95 p-2">
          {isPersonalProject ? (
            <Icons.userFill className="h-4 w-4 text-foreground" />
          ) : (
            <Icons.work className="h-4 w-4 text-foreground" />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-3 p-3.5">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-md bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.07em] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex-1 space-y-2">
          <p className="line-clamp-1 font-mono text-[11px] uppercase tracking-[0.08em] text-primary/90">
            {project.category.slice(0, 2).join(" / ")}
          </p>
          <h5 className="line-clamp-2 text-2xl font-semibold tracking-tight text-foreground">
            {project.companyName}
          </h5>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>
        </div>
        <Link href={`/experience/${project.id}`} className="mt-auto">
          <Button
            variant={"secondary"}
            className="group/btn w-full bg-foreground font-mono text-xs uppercase tracking-[0.08em] text-background hover:bg-foreground/90"
          >
            Open Project
            <Icons.chevronRight className="ml-1 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
