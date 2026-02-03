import React from "react";

const ExperienceDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="space-y-3 sm:space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      {bullets.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4 sm:p-5 md:p-6 border border-border/50">
          <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3">Key Achievements</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceDescription;
