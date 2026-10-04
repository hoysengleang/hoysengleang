import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const channels = [
  {
    label: "Email",
    value: "hoysengleang617@gmail.com",
    href: "mailto:hoysengleang617@gmail.com",
  },
  {
    label: "Telegram",
    value: "@houysengleang",
    href: "https://t.me/houysengleang",
  },
  {
    label: "Phone",
    value: "+855 784-197-60",
    href: "tel:+85578419760",
  },
  {
    label: "LinkedIn",
    value: "in/sengleang-houy-825801268",
    href: "https://www.linkedin.com/in/sengleang-houy-825801268",
  },
  {
    label: "GitHub",
    value: "@hoysengleang",
    href: "https://github.com/hoysengleang",
  },
];

export default function ContactUnified() {
  return (
    <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
      <div className="space-y-5">
        <p className="font-heading text-[1.75rem] leading-snug">
          I&apos;m open to backend and full-stack roles, Laravel or NestJS
          projects, and good engineering conversations.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Based in Phnom Penh, happy to work remotely. Email or Telegram is the
          quickest way to reach me, and I usually reply within a day.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:hoysengleang617@gmail.com"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Icons.mail className="h-4 w-4" />
            Write an email
          </a>
          <a
            href="https://t.me/houysengleang"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.telegram className="h-4 w-4" />
            Message on Telegram
          </a>
        </div>
      </div>

      <dl className="divide-y divide-border border-y border-border">
        {channels.map((channel) => (
          <div
            key={channel.label}
            className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-4 py-4"
          >
            <dt className="eyebrow">{channel.label}</dt>
            <dd className="min-w-0 truncate">
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="ink-link"
              >
                {channel.value}
              </a>
            </dd>
          </div>
        ))}
        <div className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-4 py-4">
          <dt className="eyebrow">Location</dt>
          <dd>Phnom Penh, Cambodia (UTC+7)</dd>
        </div>
      </dl>
    </div>
  );
}
