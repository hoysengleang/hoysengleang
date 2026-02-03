"use client";

import { Icons } from "@/components/common/icons";
import { AnimatedText } from "./animated-text";

interface LearningItem {
  icon: any;
  title: string;
  description: string;
}

const learningItems: LearningItem[] = [
  {
    icon: Icons.code,
    title: "AI & Machine Learning",
    description: "Deep-diving into AI workflows with Python, TensorFlow, and data processing pipelines",
  },
  {
    icon: Icons.server,
    title: "Automation & DevOps",
    description: "Exploring Docker orchestration, CI/CD pipelines, and infrastructure automation",
  },
  {
    icon: Icons.database,
    title: "Database Optimization",
    description: "Advanced PostgreSQL/MySQL optimization and clean architecture patterns",
  },
];

export default function CurrentlyLearning() {
  return (
    <div className="container max-w-[64rem] py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="mx-auto flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 text-center">
        <AnimatedText
          as="h2"
          className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center gap-2 px-2"
        >
          <span className="text-xl sm:text-2xl">🌱</span> Currently Learning
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="max-w-[90%] sm:max-w-[85%] leading-relaxed text-muted-foreground text-xs sm:text-sm md:text-base"
        >
          Continuously expanding my skill set and exploring new technologies
        </AnimatedText>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full pt-3 sm:pt-4">
          {learningItems.map((item, index) => (
            <AnimatedText
              key={index}
              delay={0.1 * (index + 1)}
              className="flex flex-col items-center space-y-2 sm:space-y-3 rounded-lg border bg-background p-4 sm:p-5 md:p-6 transition-all hover:shadow-lg hover:border-primary"
            >
              <item.icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base md:text-lg">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                {item.description}
              </p>
            </AnimatedText>
          ))}
        </div>
      </div>
    </div>
  );
}
