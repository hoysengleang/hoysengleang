import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contributions.map((contribution, id) => (
        <Link href={contribution.link} target="_blank" key={id} className="group">
          <div className="backend-panel backend-grid flex h-full flex-col justify-between p-5 transition-all hover:-translate-y-1 hover:border-primary/50">
            <div className="flex items-start justify-between">
              <h3 className="flex items-center gap-2 text-base font-semibold">
                <Icons.gitRepoIcon size={18} />
                <span className="line-clamp-1">{contribution.repo}</span>
              </h3>
              <Icons.externalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {contribution.contibutionDescription}
            </p>

            <div className="mt-6 flex items-center justify-between gap-2 border-t border-border/70 pt-3">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icons.gitOrgBuilding size={14} />
                <span>{contribution.repoOwner}</span>
              </p>
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                <Icons.gitBranch size={14} />
                Source
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
