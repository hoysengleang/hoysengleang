"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { CareerExperienceInterface } from "@/config/career";

interface TimelineItemProps {
  experience: CareerExperienceInterface;
  isLast: boolean;
  expandedId: string | null;
  toggleExpand: (id: string) => void;
  baseUrl: string;
}

const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  isLast,
  expandedId,
  toggleExpand,
  baseUrl,
}) => {
  const isExpanded = expandedId === experience.id;

  return (
    <div className="relative pb-6">
      {!isLast && (
        <div className="absolute left-[17px] top-10 h-full w-px bg-border sm:left-[23px]" />
      )}

      <div className="flex gap-3 sm:gap-5">
        <motion.div
          className="relative z-10 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-background sm:h-11 sm:w-11"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {experience.logo ? (
            <div className="relative h-7 w-7 overflow-hidden rounded-md bg-white sm:h-9 sm:w-9">
              <Image
                src={experience.logo}
                alt={experience.company}
                fill
                className="object-contain p-1"
              />
            </div>
          ) : (
            <Icons.work className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
          )}
        </motion.div>

        <motion.div
          className="backend-panel flex-1 p-4 sm:p-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          layout
        >
          <button
            type="button"
            onClick={() => toggleExpand(experience.id)}
            className="w-full text-left"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">{experience.position}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
                  <span>{experience.company}</span>
                  {experience.companyUrl && (
                    <Link
                      href={experience.companyUrl}
                      target="_blank"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icons.externalLink className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {experience.location}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start">
                <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                  {typeof experience.endDate === "string"
                    ? `${getYearFromDate(experience.startDate)} - Now`
                    : `${getYearFromDate(experience.startDate)} - ${getYearFromDate(
                        experience.endDate
                      )}`}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icons.chevronDown className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </div>
            </div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 16 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-border/80 pt-4">
              <div>
                <h4 className="text-xs font-semibold text-foreground sm:text-sm">
                  Summary
                </h4>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
                  {experience.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-foreground sm:text-sm">
                  Achievements
                </h4>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-foreground sm:text-sm">
                  Stack
                </h4>
                <div className="mt-2">
                  <ChipContainer textArr={experience.skills} />
                </div>
              </div>

              <Link
                href={`${baseUrl}/${experience.id}`}
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                onClick={(event) => event.stopPropagation()}
              >
                View Details
                <Icons.chevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

interface TimelineProps {
  experiences: CareerExperienceInterface[];
  baseUrl?: string;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, baseUrl = "/career" }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  useEffect(() => {
    if (sortedExperiences.length > 0 && expandedId === null) {
      setExpandedId(sortedExperiences[0].id);
    }
  }, [sortedExperiences, expandedId]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-5xl py-2 sm:py-4">
      {sortedExperiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          experience={experience}
          isLast={index === sortedExperiences.length - 1}
          expandedId={expandedId}
          toggleExpand={toggleExpand}
          baseUrl={baseUrl}
        />
      ))}
    </div>
  );
};

export default Timeline;
