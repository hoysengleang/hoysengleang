"use client";

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactUnified() {
  const actionLinks = [
    {
      label: "Telegram",
      href: "https://t.me/houysengleang",
      icon: Icons.telegram,
      className:
        "w-full justify-between border border-[#229ED9] bg-[#229ED9] text-white hover:bg-[#1f8fc4]",
    },
    {
      label: "Email",
      href: "mailto:hoysengleang617@gmail.com",
      icon: Icons.gmail,
      className:
        "w-full justify-between border border-[#EA4335] bg-[#EA4335] text-white hover:bg-[#d83d30]",
    },
    {
      label: "Resume",
      href: "/resume",
      icon: Icons.page,
      className:
        "w-full justify-between border border-border/70 bg-background/40 text-foreground hover:bg-background/65",
    },
  ];

  return (
    <Card className="backend-grid w-full max-w-5xl overflow-hidden p-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="code-texture border-b border-border/60 p-7 md:border-b-0 md:border-r md:p-9">
          <span className="terminal-kicker">Channel Status</span>
          <h3 className="mt-5 font-heading text-3xl leading-tight">Open For Backend Roles</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            If you need API architecture, fintech-grade reliability, or system integration support,
            send a message.
          </p>

          <div className="mt-6 space-y-2.5">
            {actionLinks.map((item) => (
              <Button
                key={item.label}
                asChild
                variant="default"
                className={item.className}
              >
                <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}>
                  <span className="inline-flex items-center gap-2.5">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <Icons.arrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Usually replies within 24 hours.
          </p>
        </div>

        <div className="p-7 md:p-9">
          <h4 className="font-heading text-2xl">Contact Information</h4>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Telegram / Phone
              </p>
              <a
                href="tel:+85578419760"
                className="mt-2 inline-flex items-center gap-2 text-sm transition-colors hover:text-foreground sm:text-base"
              >
                <Icons.contact className="h-4 w-4" />
                +855 784-197-60
              </a>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Email
              </p>
              <a
                href="mailto:hoysengleang617@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-sm transition-colors hover:text-foreground sm:text-base"
              >
                <Icons.gmail className="h-4 w-4" />
                hoysengleang617@gmail.com
              </a>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Address
              </p>
              <p className="mt-2 text-sm sm:text-base">
                Kol village, sangkat KunTok, Khan KomBol, Phnom Penh
              </p>
            </div>
            <div className="flex gap-2 pt-1">
              <Link href="https://github.com/hoysengleang" target="_blank">
                <Button size="icon" variant="ghost" className="rounded-xl border border-border/70 bg-background/40 hover:bg-background/65">
                  <Icons.gitHub className="h-5 w-5" style={{ color: "hsl(var(--foreground))" }} />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/hoysengleang" target="_blank">
                <Button size="icon" variant="ghost" className="rounded-xl border border-border/70 bg-background/40 hover:bg-background/65">
                  <Icons.linkedin className="h-5 w-5" style={{ color: "#0A66C2" }} />
                </Button>
              </Link>
              <Link href="https://t.me/houysengleang" target="_blank">
                <Button size="icon" variant="ghost" className="rounded-xl border border-border/70 bg-background/40 hover:bg-background/65">
                  <Icons.telegram className="h-5 w-5" style={{ color: "#229ED9" }} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
