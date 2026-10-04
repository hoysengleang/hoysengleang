import Link from "next/link";
import * as React from "react";

import { NavItem } from "@/config/routes";
import { SocialLinks } from "@/config/socials";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: NavItem[];
  isActive: (href: string) => boolean;
}

export function MobileNav({ items, isActive }: MobileNavProps) {
  useLockBody();

  return (
    <div
      id="mobile-nav"
      className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-auto border-t border-border bg-background md:hidden"
    >
      <nav aria-label="Mobile" className="page-shell py-4">
        <ul className="divide-y divide-border">
          {[{ title: "Home", href: "/" }, ...items].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between py-4 font-heading text-2xl",
                  isActive(item.href) ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.title}
                {isActive(item.href) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {SocialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target={social.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="ink-link"
            >
              {social.name === "Gmail" ? "Email" : social.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
