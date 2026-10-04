import Image from "next/image";
import Link from "next/link";

import { ExperienceInterface } from "@/config/experience";
import { formatYearRange } from "@/lib/utils";

interface ProjectCardProps {
  project: ExperienceInterface;
  priority?: boolean;
}

export default function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <Link
      href={`/experience/${project.id}`}
      className="group block h-full focus-visible:outline-offset-8"
    >
      <article className="flex h-full flex-col">
        <div className="figure-frame relative aspect-[16/9]">
          <Image
            src={project.companyLogoImg}
            alt=""
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            sizes="(max-width: 640px) 100vw, 520px"
          />
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-heading text-[1.5rem] leading-tight decoration-brand decoration-1 underline-offset-4 group-hover:underline">
            {project.companyName}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {formatYearRange(project.startDate, project.endDate)}
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <p className="mt-auto pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
          <span className="text-foreground">
            {project.type === "Professional" ? "Client work" : "Open source"}
          </span>
          {" · "}
          {project.techStack.slice(0, 4).join(" · ")}
        </p>
      </article>
    </Link>
  );
}
