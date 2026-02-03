import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-1.5 sm:p-2 hover:shadow-lg transition-shadow"
        >
          <div className="flex h-[200px] sm:h-[220px] md:h-[230px] flex-col justify-between rounded-md p-4 sm:p-5 md:p-6">
            <skill.icon size={40} className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="font-bold text-sm sm:text-base">{skill.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                {skill.description}
              </p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
