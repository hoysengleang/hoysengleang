interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={className}>
      <div className="flex flex-col mt-4 sm:mt-6 md:mt-8 items-start gap-3 sm:gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4">
          <h1 className="inline-block font-heading text-2xl sm:text-3xl md:text-4xl tracking-tight lg:text-5xl capitalize">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>
      <hr className="my-4 sm:my-6 md:my-8 border-border" />
    </div>
  );
}
