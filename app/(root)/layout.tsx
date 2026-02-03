import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background print:hidden px-4 sm:px-6 md:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between py-4 sm:py-6">
          <MainNav items={routesConfig.mainNav} />
          <nav className="flex items-center gap-3 sm:gap-5">
            {/* <Link
                            href={"https://github.com/hoysengleang"}
                            target="_blank"
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                }),
                                "h-8 w-8 px-0"
                            )}
                        >
                            <Icons.gitHub className="w-5 h-5" />
                        </Link> */}
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1 print:!p-0 print:!m-0 print:!max-w-full px-0 sm:px-6 md:px-8">{children}</main>
      <SiteFooter />
    </div>
  );
}
