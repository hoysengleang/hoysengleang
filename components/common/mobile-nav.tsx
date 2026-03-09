import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div className="fixed inset-0 top-[72px] z-50 h-[calc(100vh-72px)] overflow-auto bg-background/70 p-4 backdrop-blur-md md:hidden">
      <div className="backend-panel backend-grid space-y-5 p-5">
        <div className="border-b border-border/80 pb-4">
          <p className="mt-1 font-heading text-xl">{siteConfig.authorName}</p>
        </div>

        <nav className="grid gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-all",
                "hover:border-primary/50 hover:bg-primary/10",
                item.disabled && "pointer-events-none opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {children}
      </div>
    </div>
  );
}
