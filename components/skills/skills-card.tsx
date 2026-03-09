import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="backend-panel backend-grid h-full overflow-hidden p-1"
        >
          <div className="code-texture flex h-[210px] flex-col justify-between rounded-[1.2rem] p-5">
            <div className="flex items-start justify-between gap-3">
              <span className="terminal-icon-wrap h-10 w-10">
                <skill.icon
                  size={30}
                  className="terminal-icon-brand h-8 w-8"
                  style={{ color: skill.color ?? "hsl(var(--foreground))" }}
                />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                Skill Node
              </span>
            </div>
            <div className="space-y-2.5">
              <h3 className="font-semibold text-base">{skill.name}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
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
