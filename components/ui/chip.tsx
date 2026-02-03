interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="relative inline-flex items-center select-none whitespace-nowrap rounded-full py-1 px-2 sm:py-1.5 sm:px-3 align-baseline text-[10px] sm:text-xs font-semibold leading-none text-primary border border-primary/20 bg-primary/5 transition-colors hover:bg-primary/10">
      {content}
    </div>
  );
}
