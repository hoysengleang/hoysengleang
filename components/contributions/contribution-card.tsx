import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({ contributions }: ContributionCardProps) {
  return (
    <ul className="-mt-6 divide-y divide-border border-b border-border sm:-mt-8">
      {contributions.map((contribution) => (
        <li key={contribution.link}>
          <a
            href={contribution.link}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-x-10 gap-y-2 py-6 sm:grid-cols-[minmax(0,260px)_minmax(0,1fr)_auto]"
          >
            <p className="font-mono text-[0.95rem] decoration-brand underline-offset-4 group-hover:underline">
              {contribution.repoOwner}/{contribution.repo}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {contribution.contibutionDescription}
            </p>
            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground sm:justify-end">
              {contribution.language}
              <Icons.arrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
