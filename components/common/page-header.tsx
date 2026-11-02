interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
  eyebrow?: string;
}

export default function PageHeader({
  title,
  description,
  className,
  eyebrow,
}: PageHeaderProps) {
  return (
    <header className={className}>
      <div className="pb-8 pt-16 sm:pt-24">
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h1 className="text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-[60ch] leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
