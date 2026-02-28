interface RatingProps {
  stars: number;
}

export default function Rating({ stars }: RatingProps) {
  const levels = Array.from({ length: 5 }, (_, index) => index < stars);

  return (
    <div className="flex items-center gap-1.5">
      {levels.map((isActive, index) => (
        <span
          key={index}
          className={`h-1.5 w-6 rounded-full transition-colors ${
            isActive ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}
