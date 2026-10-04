import Image from "next/image";
import Link from "next/link";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { CareerExperienceInterface } from "@/config/career";
import { formatMonthYear } from "@/lib/utils";

interface RoleDetailProps {
  role: CareerExperienceInterface;
  backHref: string;
  backLabel: string;
  descriptionHeading: string;
  achievementsHeading: string;
}

export default function RoleDetail({
  role,
  backHref,
  backLabel,
  descriptionHeading,
  achievementsHeading,
}: RoleDetailProps) {
  const end = role.endDate === "Present" ? "now" : formatMonthYear(role.endDate);

  return (
    <ClientPageWrapper>
      <article className="page-shell">
        <div className="pt-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icons.arrowLeft className="h-3.5 w-3.5" />
            {backLabel}
          </Link>
        </div>

        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10 pt-8">
          <div>
            <p className="eyebrow">
              {formatMonthYear(role.startDate)} – {end}
            </p>
            <h1 className="mt-4 font-heading text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem]">
              {role.position}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {role.company} · {role.location}
            </p>
          </div>
          {role.logo && (
            <div className="relative h-16 w-16 overflow-hidden rounded-md border border-border bg-white">
              <Image
                src={role.logo}
                alt={`${role.company} logo`}
                fill
                sizes="64px"
                className="object-contain p-1.5"
              />
            </div>
          )}
        </header>

        <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <div className="min-w-0 max-w-[68ch] space-y-12">
            <section className="space-y-4">
              <h2 className="font-heading text-[1.6rem] font-medium leading-tight">
                {descriptionHeading}
              </h2>
              <ul className="list-disc space-y-3 pl-5 text-[1.0625rem] leading-[1.7] text-foreground/85 marker:text-brand">
                {role.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-[1.6rem] font-medium leading-tight">
                {achievementsHeading}
              </h2>
              <ul className="divide-y divide-border border-y border-border">
                {role.achievements.map((line) => (
                  <li key={line} className="py-3 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit space-y-2 text-sm lg:sticky lg:top-24">
            <p className="eyebrow">Worked with</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {role.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </ClientPageWrapper>
  );
}
