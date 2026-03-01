import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-card/90 backdrop-blur-md print:hidden">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto flex h-[66px] w-full max-w-[1220px] items-center justify-between">
            <MainNav items={routesConfig.mainNav} />
            <nav className="flex items-center gap-3 sm:gap-4">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="container flex-1 px-0 pb-12 pt-6 print:!m-0 print:!max-w-full print:!p-0 sm:px-6">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
