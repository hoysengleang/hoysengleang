"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { MobileNav } from "@/components/common/mobile-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { siteConfig } from "@/config/site";
import { NavItem } from "@/config/routes";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="page-shell flex h-16 items-center justify-between gap-6">
      <Link
        href="/"
        className="font-heading text-[1.2rem] font-medium tracking-[-0.01em]"
      >
        {toTitleCase(siteConfig.authorName)}
      </Link>

      <div className="flex items-center gap-1">
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded px-3 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "text-foreground underline decoration-brand decoration-2 underline-offset-[10px]"
                  : "text-muted-foreground hover:text-foreground",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <ModeToggle />

        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded px-2 text-sm text-muted-foreground hover:text-foreground md:hidden"
          aria-expanded={showMobileMenu}
          aria-controls="mobile-nav"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          {showMobileMenu ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
          Menu
        </button>
      </div>

      {showMobileMenu && <MobileNav items={items} isActive={isActive} />}
    </div>
  );
}

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
