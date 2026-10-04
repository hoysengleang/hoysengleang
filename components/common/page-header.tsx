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
      <div className="border-b border-border pb-10 pt-12 sm:pb-12 sm:pt-16">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="font-heading text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
