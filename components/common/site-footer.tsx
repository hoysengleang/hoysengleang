import * as React from "react";

import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("print:hidden", className)}>
      <div className="page-shell flex flex-wrap justify-between gap-2 border-t border-border py-8 text-sm text-muted-foreground">
        <span>© {year} Houy Sengleang</span>
        <span>Phnom Penh, Cambodia</span>
      </div>
    </footer>
  );
}
