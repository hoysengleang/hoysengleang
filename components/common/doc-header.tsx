import Link from "next/link";

interface DocHeaderProps {
  back: { href: string; label: string };
  title: string;
  /** One or two sentences under the title. */
  lead?: string;
  /** Small grey line: dates, tags or tech. */
  meta?: React.ReactNode;
  /** Optional row under the meta line, e.g. source links. */
  children?: React.ReactNode;
}

// Shared opening for long-form pages (blog posts, project write-ups) so they
// line up with each other and with the `.doc` body below.
export function DocHeader({
  back,
  title,
  lead,
  meta,
  children,
}: DocHeaderProps) {
  return (
    <header className="border-b border-border pb-8">
      <Link
        href={back.href}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← {back.label}
      </Link>
      <h1 className="mt-10 text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]">
        {title}
      </h1>
      {lead && <p className="mt-3 leading-7 text-muted-foreground">{lead}</p>}
      {meta && <p className="mt-4 text-sm text-muted-foreground">{meta}</p>}
      {children}
    </header>
  );
}
