interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={className}>
      <div className="rounded-2xl border border-border bg-card px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
