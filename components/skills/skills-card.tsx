import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  const groups = [
    {
      level: "Core" as const,
      description:
        "Technologies I use most often in professional backend and full-stack delivery.",
    },
    {
      level: "Project Experience" as const,
      description:
        "Technologies I have applied in shipped professional, personal, or open-source work.",
    },
    {
      level: "Familiar" as const,
      description:
        "Technologies I can work with and continue developing through focused practice.",
    },
  ];

  return (
    <div className="mx-auto space-y-10">
      {groups.map((group) => {
        const groupSkills = skills.filter(
          (skill) => skill.level === group.level
        );

        return (
          <section
            key={group.level}
            aria-labelledby={`skills-${group.level.toLowerCase().replace(" ", "-")}`}
          >
            <div className="mb-4 space-y-1.5">
              <h2
                id={`skills-${group.level.toLowerCase().replace(" ", "-")}`}
                className="font-heading text-2xl font-semibold"
              >
                {group.level}
              </h2>
              <p className="max-w-3xl text-sm text-muted-foreground">
                {group.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groupSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="backend-panel backend-grid h-full overflow-hidden p-1"
                >
                  <div className="code-texture flex h-[190px] flex-col justify-between rounded-[1.2rem] p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="terminal-icon-wrap h-10 w-10">
                        <skill.icon
                          size={30}
                          className="terminal-icon-brand h-8 w-8"
                          style={{
                            color: skill.color ?? "hsl(var(--foreground))",
                          }}
                        />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                        {skill.level}
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      <h3 className="text-base font-semibold">{skill.name}</h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
