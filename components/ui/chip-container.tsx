import Chip from "./chip";

interface ChipContainerProps {
  textArr: string[];
}

export default function ChipContainer({ textArr }: ChipContainerProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {textArr.map((it, ind) => (
        <Chip key={ind} content={it} />
      ))}
    </div>
  );
}
