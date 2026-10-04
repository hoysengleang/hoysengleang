"use client";

import { useMemo, useState } from "react";

import ProjectCard from "@/components/experience/project-card";
import { ValidCategory } from "@/config/constants";
import { ExperienceInterface } from "@/config/experience";
import { cn } from "@/lib/utils";

const FILTERS: { label: string; value: ValidCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "AI & search", value: "AI & Search" },
  { label: "Developer tools", value: "Developer Tools" },
  { label: "Security", value: "Security" },
  { label: "Business systems", value: "Business Systems" },
];

interface ProjectsBrowserProps {
  projects: ExperienceInterface[];
}

export default function ProjectsBrowser({ projects }: ProjectsBrowserProps) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["value"]>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category.includes(filter)),
    [filter, projects]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects"
        className="-mx-1 flex flex-wrap gap-1"
      >
        {FILTERS.map((item) => {
          const count =
            item.value === "all"
              ? projects.length
              : projects.filter((p) =>
                  p.category.includes(item.value as ValidCategory)
                ).length;
          const active = filter === item.value;

          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item.value)}
              className={cn(
                "rounded px-3 py-1.5 text-sm transition-colors",
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "ml-1.5 font-mono text-[11px]",
                  active ? "text-background/70" : "text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard key={project.id} project={project} priority={index < 2} />
        ))}
      </div>
    </div>
  );
}
