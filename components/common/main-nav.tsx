"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { MobileNav } from "@/components/common/mobile-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
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
      <Link href="/" className="font-medium">
        Houy Sengleang
      </Link>

      <div className="flex items-center gap-5">
        <nav aria-label="Main" className="hidden items-center gap-5 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "text-sm transition-colors",
                isActive(item.href)
                  ? "text-foreground"
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
          className="inline-flex h-9 w-9 items-center justify-center rounded text-muted-foreground hover:text-foreground md:hidden"
          aria-expanded={showMobileMenu}
          aria-controls="mobile-nav"
          aria-label="Menu"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          {showMobileMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {showMobileMenu && <MobileNav items={items} isActive={isActive} />}
    </div>
  );
}
