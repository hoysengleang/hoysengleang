import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

const groups = [
  {
    level: "Core" as const,
    title: "Every week",
    description: "What I reach for in professional backend and full-stack work.",
  },
  {
    level: "Project Experience" as const,
    title: "Shipped with",
    description: "Used in real projects, at work or in open source.",
  },
  {
    level: "Familiar" as const,
    title: "Getting familiar",
    description: "I can work with these and I'm still getting better.",
  },
];

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="space-y-14">
      {groups.map((group) => {
        const groupSkills = skills.filter((skill) => skill.level === group.level);
        const headingId = `skills-${group.level.toLowerCase().replace(" ", "-")}`;

        return (
          <section
            key={group.level}
            aria-labelledby={headingId}
            className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10"
          >
            <div>
              <h2 id={headingId} className="font-heading text-2xl leading-tight">
                {group.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
            </div>

            <ul className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
              {groupSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-start gap-3 border-b border-border py-4"
                >
                  <skill.icon
                    aria-hidden
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-muted-foreground"
                  />
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
