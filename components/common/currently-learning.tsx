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
    <div className="container max-w-[64rem] py-10">
      <div className="mx-auto flex flex-col items-center space-y-6 text-center">
        <AnimatedText
          as="h2"
          className="font-heading text-2xl sm:text-3xl md:text-4xl flex items-center gap-2"
        >
          <span className="text-2xl">🌱</span> Currently Learning
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="max-w-[85%] leading-normal text-muted-foreground"
        >
          Continuously expanding my skill set and exploring new technologies
        </AnimatedText>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full pt-4">
          {learningItems.map((item, index) => (
            <AnimatedText
              key={index}
              delay={0.1 * (index + 1)}
              className="flex flex-col items-center space-y-3 rounded-lg border bg-background p-6 transition-all hover:shadow-lg hover:border-primary"
            >
              <item.icon className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {item.description}
              </p>
            </AnimatedText>
          ))}
        </div>
      </div>
    </div>
  );
}
