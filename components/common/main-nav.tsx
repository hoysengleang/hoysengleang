"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-5">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <Link href="/" className="hidden items-center gap-3 md:flex">
          <span className="h-2 w-2 rounded-full bg-foreground/70" />
          <span className={cn("font-heading text-lg tracking-tight")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>

      {items?.length ? (
        <nav className="hidden items-center gap-1 rounded-xl border border-border bg-background p-1 md:flex">
          {items.map((item, index) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "inline-flex items-center rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  {item.title}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      ) : null}

      <button
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium md:hidden"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        {showMobileMenu ? <Icons.close className="h-4 w-4" /> : <Icons.menu className="h-4 w-4" />}
        Menu
      </button>

      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  );
}
