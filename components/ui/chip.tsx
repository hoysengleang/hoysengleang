interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="relative inline-flex items-center select-none whitespace-nowrap rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1.5 align-baseline font-mono text-[10px] font-semibold uppercase leading-none tracking-[0.08em] text-primary transition-colors hover:bg-primary/20 sm:px-3">
      {content}
    </div>
  );
}
