import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, "print:hidden px-4 sm:px-6")}>
      <div className="container flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 py-8 sm:py-10 md:h-24">
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
                "h-10 w-10 sm:h-11 sm:w-11 p-2 sm:p-2.5 hover:scale-110 transition-transform"
              )}
              aria-label={`Visit ${item.username} on ${item.icon.name}`}
            >
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </CustomTooltip>
        ))}
      </div>
    </footer>
  );
}
