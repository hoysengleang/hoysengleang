"use client";

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactUnified() {
  return (
    <Card className="backend-grid w-full max-w-5xl overflow-hidden p-1">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
        <div className="code-texture p-7 md:p-9">
          <span className="terminal-kicker">Channel Status</span>
          <h3 className="mt-5 font-heading text-3xl leading-tight">Open For Backend Roles</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            If you need API architecture, fintech-grade reliability, or system integration support,
            send a message.
          </p>

          <div className="mt-6 space-y-3">
            <Link href="https://t.me/hoysengleang" target="_blank" className="block">
              <Button className="w-full justify-start">
                <Icons.contact className="h-5 w-5" />
                Telegram
              </Button>
            </Link>
            <Link href="mailto:hoysengleang617@gmail.com" className="block">
              <Button variant="outline" className="w-full justify-start">
                <Icons.gmail className="h-5 w-5" />
                Email
              </Button>
            </Link>
            <Link href="/resume" className="block">
              <Button variant="secondary" className="w-full justify-start">
                <Icons.page className="h-5 w-5" />
                Resume
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-7 md:p-9">
          <h4 className="font-heading text-2xl">Contact Information</h4>
          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Telegram / Phone
              </p>
              <p className="mt-2 text-sm sm:text-base">+855 784-197-60</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Email
              </p>
              <a
                href="mailto:hoysengleang617@gmail.com"
                className="mt-2 block text-sm transition-colors hover:text-primary sm:text-base"
              >
                hoysengleang617@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Address
              </p>
              <p className="mt-2 text-sm sm:text-base">
                Kol village, sangkat KunTok, Khan KomBol, Phnom Penh
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="https://github.com/hoysengleang" target="_blank">
                <Button size="icon" variant="ghost" className="rounded-xl border border-border/70">
                  <Icons.gitHub className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/hoysengleang" target="_blank">
                <Button size="icon" variant="ghost" className="rounded-xl border border-border/70">
                  <Icons.linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://t.me/hoysengleang" target="_blank">
                <Button size="icon" variant="ghost" className="rounded-xl border border-border/70">
                  <Icons.contact className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
