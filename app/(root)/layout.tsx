import { MainNav } from "@/components/common/main-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background print:hidden">
        <MainNav items={routesConfig.mainNav} />
      </header>
      <main
        id="main"
        className="flex-1 pb-16 print:!m-0 print:!max-w-full print:!p-0"
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
