import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, "print:hidden px-4 pb-8 sm:px-6")}>
      <div className="container">
        <div className="backend-panel flex flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row">
          <div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
              status: open to backend engineering opportunities
            </p>
          </div>
          <div className="flex items-center gap-2">
            {SocialLinks.map((item, ind) => (
              <CustomTooltip icon={item.icon} text={item.username} key={ind}>
                <Link
                  href={item.link}
                  target="_blank"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    }),
                    "h-10 w-10 rounded-xl border border-border/70 bg-background/70 p-2 hover:border-primary/50 hover:bg-primary/10"
                  )}
                  aria-label={`Visit ${item.username} on ${item.icon.name}`}
                >
                  <item.icon
                    className="terminal-icon-brand h-5 w-5"
                    style={{ color: item.color ?? "hsl(var(--foreground))" }}
                  />
                </Link>
              </CustomTooltip>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
