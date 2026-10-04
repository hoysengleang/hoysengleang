import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CareerExperienceInterface } from "@/config/career";
import { cn, formatYearRange } from "@/lib/utils";

interface TimelineProps {
  experiences: CareerExperienceInterface[];
  baseUrl?: string;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  experiences,
  baseUrl = "/career",
  className,
}) => {
  const sorted = [...experiences].sort((a, b) => {
    const endA = a.endDate === "Present" ? new Date() : a.endDate;
    const endB = b.endDate === "Present" ? new Date() : b.endDate;
    return endB.getTime() - endA.getTime();
  });

  return (
    <ol className={cn("-mt-10 divide-y divide-border border-b border-border sm:-mt-12", className)}>
      {sorted.map((item) => (
        <li
          key={item.id}
          className="grid gap-x-10 gap-y-4 py-10 md:grid-cols-[180px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-xs text-muted-foreground">
              {formatYearRange(item.startDate, item.endDate)}
            </p>
            {item.logo && (
              <div className="relative h-10 w-10 overflow-hidden rounded border border-border bg-white">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h2 className="font-heading text-[1.6rem] leading-tight">
              {item.position}
            </h2>
            <p className="mt-1 text-muted-foreground">
              {item.company} · {item.location}
            </p>

            <ul className="mt-5 max-w-[68ch] list-disc space-y-2 pl-5 leading-relaxed marker:text-brand">
              {item.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href={`${baseUrl}/${item.id}`}
              className="ink-link mt-5 inline-block text-sm"
            >
              Read more about this role
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
