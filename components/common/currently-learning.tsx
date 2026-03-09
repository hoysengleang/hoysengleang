"use client";

import { AnimatedText } from "./animated-text";
import { Icons } from "@/components/common/icons";

interface LearningItem {
  icon: any;
  title: string;
  description: string;
}

const learningItems: LearningItem[] = [
  {
    icon: Icons.code,
    title: "AI-Assisted Backend Flows",
    description:
      "Designing practical AI workflows for operational tooling and backend productivity.",
  },
  {
    icon: Icons.server,
    title: "Infrastructure Automation",
    description:
      "Improving deployment consistency with Docker-driven environments and CI pipelines.",
  },
  {
    icon: Icons.database,
    title: "Query Performance Engineering",
    description:
      "Benchmarking SQL execution plans and optimizing data access in transaction-heavy systems.",
  },
];

export default function CurrentlyLearning() {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <span className="terminal-kicker">Currently learning</span>
        <AnimatedText
          as="h2"
          className="font-heading text-3xl leading-tight sm:text-4xl"
        >
          Currently Learning
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="max-w-3xl text-sm text-muted-foreground sm:text-base"
        >
          Topics I am studying right now to improve code quality, reliability, and delivery speed.
        </AnimatedText>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learningItems.map((item, index) => (
          <AnimatedText
            key={index}
            delay={0.1 * (index + 1)}
            className="terminal-surface p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary">
              learning.node.{index + 1}
            </p>
            <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
