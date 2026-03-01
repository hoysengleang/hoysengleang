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
    <div className="flex items-center gap-7">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <Link href="/" className="hidden items-center gap-3 md:flex">
          <span className="h-3 w-3 rotate-45 rounded-[2px] bg-primary" />
          <span className={cn("font-heading text-2xl tracking-tight")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>

      {items?.length ? (
        <nav className="hidden items-center gap-1 md:flex">
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
                    "inline-flex items-center rounded-lg px-3 py-2 font-mono text-[12px] font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
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
        className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/50 px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] md:hidden"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        {showMobileMenu ? <Icons.close className="h-4 w-4" /> : <Icons.menu className="h-4 w-4" />}
        Menu
      </button>

      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  );
}
