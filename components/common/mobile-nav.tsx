import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-12 sm:top-16 z-50 grid h-[calc(100vh-3rem)] sm:h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-4 sm:p-6 pb-24 sm:pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-4 sm:gap-6 rounded-lg sm:rounded-md bg-popover p-4 sm:p-5 text-popover-foreground shadow-md border border-border">
        <Link href="/" className="flex items-center space-x-2 pb-2 border-b border-border">
          <span className={cn(norican.className, "text-xl sm:text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max gap-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-lg p-3 sm:p-3.5 text-sm sm:text-base font-medium hover:bg-accent transition-colors active:scale-95",
                item.disabled && "cursor-not-allowed opacity-60"
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
