"use client";

import { AnimatedText } from "./animated-text";
import { Icons } from "./icons";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Project Manager",
    role: "Technical Lead",
    company: "Wintech Software Development",
    content:
      "Exceptional developer who consistently delivers high-quality code. His expertise in Laravel and API architecture significantly improved our loan management system's performance and reliability.",
    rating: 5,
  },
  {
    name: "Database Administrator",
    role: "Senior DBA",
    company: "Enterprise Client",
    content:
      "Impressive database optimization skills. Reduced query response times by 60% and implemented clean, maintainable schemas that handle high-volume transactions flawlessly.",
    rating: 5,
  },
  {
    name: "Development Team",
    role: "Software Engineer",
    company: "Wintech Software Development",
    content:
      "Great team player with strong problem-solving abilities. Always willing to help colleagues and share knowledge. His contributions to our school management system were invaluable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="container max-w-[68rem] py-10">
      <div className="mx-auto flex flex-col items-center space-y-8 text-center">
        <div className="space-y-4">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            What People Say
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] mx-auto leading-normal text-muted-foreground sm:text-lg"
          >
            Feedback from colleagues and clients I&apos;ve worked with
          </AnimatedText>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full pt-4">
          {testimonials.map((testimonial, index) => (
            <AnimatedText
              key={index}
              delay={0.1 * (index + 1)}
              className="flex flex-col space-y-4 rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-all"
            >
              {/* Rating Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Icons.star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground italic text-left flex-grow">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t pt-4 text-left">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonial.company}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </div>
  );
}
