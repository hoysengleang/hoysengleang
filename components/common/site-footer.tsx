import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border print:hidden", className)}>
      <div className="page-shell grid gap-8 py-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="space-y-3">
          <p className="font-heading text-2xl leading-snug">
            Have a backend problem worth solving?
          </p>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            I&apos;m open to backend and full-stack roles, in Phnom Penh or
            remote. The fastest way to reach me is{" "}
            <Link href="/contact" className="ink-link text-foreground">
              the contact page
            </Link>
            .
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {SocialLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="ink-link"
              >
                {item.name === "Gmail" ? "Email" : item.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground sm:col-span-2">
          © {year} Houy Sengleang. Built with Next.js and Tailwind CSS.{" "}
          <a
            href={`${siteConfig.links.github}/${siteConfig.username}`}
            target="_blank"
            rel="noreferrer"
            className="ink-link"
          >
            Source on GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
