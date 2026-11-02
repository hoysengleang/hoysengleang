"use client";

import PageContainer from "@/components/common/page-container";
import { careerExperiences, education } from "@/config/career";
import { siteConfig } from "@/config/site";

const resumeProjects = [
  {
    name: "wslog",
    summary: "WebSocket debugging proxy",
    stack: "TypeScript · Node.js · React · SQLite · Docker",
    points: [
      "Proxy between any WebSocket client and server that records every frame and streams it to a live dashboard, with no code changes.",
      "Masks sensitive fields before storage; published on npm as wslog-proxy and as a Docker image.",
    ],
  },
  {
    name: "OpenVisionSearch",
    summary: "Self-hosted visual search API",
    stack: "Python · FastAPI · OpenCLIP · Qdrant · Docker · GitHub Actions",
    points: [
      "Image, text and hybrid product search over HTTP; indexes from URLs, uploads, folders or S3.",
      "Measured stock CLIP framing on 300 portrait products and switched to padded framing: Recall@1 75% → 90%.",
    ],
  },
  {
    name: "Knowledge Assistant",
    summary: "Document Q&A with citations",
    stack: "FastAPI · PostgreSQL + pgvector · React · Ollama · Tesseract OCR",
    points: [
      'Hybrid retrieval (pgvector + full-text, fused with RRF); every answer cites its source or says "not found".',
      "Runs fully offline with Ollama; Khmer and English OCR for scanned PDFs.",
    ],
  },
  {
    name: "apicheck",
    summary: "API security scanner",
    stack: "TypeScript · Node.js · OpenAPI · OWASP API Top 10",
    points: [
      "11 non-destructive checks across 6 OWASP API categories, discovered from an OpenAPI spec.",
      "Terminal, JSON and SARIF output with exit codes for CI gating.",
    ],
  },
  {
    name: "localnet-control",
    summary: "Published developer CLI",
    stack: "Python · Networking · Security · PyPI",
    points: [
      "LAN-first localhost sharing with QR output, token auth, IP/CIDR rules and optional tunnels.",
      "Released on PyPI as localnet-control with public source and documentation.",
    ],
  },
];

const skills = [
  {
    label: "Languages",
    value:
      "PHP (Laravel), TypeScript (NestJS), Python (FastAPI), JavaScript; also React, Vue, Rust",
  },
  {
    label: "Databases",
    value: "MySQL, PostgreSQL, Redis, database design; Qdrant and pgvector",
  },
  {
    label: "Tools",
    value: "Git, GitHub Actions, Docker, Linux, Nginx, Postman",
  },
  {
    label: "Concepts",
    value:
      "REST APIs, RBAC and JWT auth, OWASP API security, RAG and LLM evaluation, LoRA fine-tuning",
  },
  { label: "Spoken", value: "Khmer (native), English (professional)" },
];

const contact = [
  "+855 784-197-60 (Telegram)",
  "hoysengleang617@gmail.com",
  siteConfig.url.replace("https://", ""),
  "github.com/hoysengleang",
  "linkedin.com/in/sengleang-houy-825801268",
];

function monthYear(date: Date | "Present") {
  return date === "Present"
    ? "Present"
    : date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6 print:mt-3.5">
      <h2 className="mb-3 border-b border-border pb-1 text-[13px] font-semibold print:mb-1.5">
        {title}
      </h2>
      {children}
    </section>
  );
}

// Title on the left, date flush right on the same baseline.
function Row({
  title,
  subtitle,
  date,
}: {
  title: string;
  subtitle?: string;
  date?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <p>
        <span className="font-medium text-foreground">{title}</span>
        {subtitle && (
          <span className="text-muted-foreground"> · {subtitle}</span>
        )}
      </p>
      {date && (
        <p className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {date}
        </p>
      )}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-1.5 list-disc space-y-1 pl-4 marker:text-muted-foreground print:mt-0.5 print:space-y-0">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  return (
    <PageContainer
      title="Résumé"
      description="The one-page version. Print it, or download the PDF."
    >
      <div className="mb-6 flex gap-5 text-sm print:hidden">
        <a
          href="/HOUY_SENGLEANG.pdf"
          download="HOUY_SENGLEANG_Resume.pdf"
          className="ink-link"
        >
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="ink-link"
        >
          Print
        </button>
      </div>

      <div className="resume-sheet paper max-w-[760px] rounded-md border border-border bg-card p-6 text-[13px] leading-relaxed text-foreground/90 shadow-sm sm:p-10 print:!max-w-none print:!rounded-none print:!border-0 print:!px-[1.3cm] print:!py-[1cm] print:!text-[12px] print:!leading-[1.35] print:!shadow-none">
        {/* Header */}
        <header>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Houy Sengleang
          </h1>
          <p className="mt-0.5 text-muted-foreground">
            Software Engineer · Phnom Penh, Cambodia
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
            {contact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </header>

        <Section title="Summary">
          <p>{siteConfig.description}</p>
        </Section>

        <Section title="Experience">
          <div className="space-y-4 print:space-y-2.5">
            {careerExperiences.map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <Row
                  title={exp.position}
                  subtitle={`${exp.company}, ${exp.location.split(",")[0]}`}
                  date={`${monthYear(exp.startDate)} – ${monthYear(exp.endDate)}`}
                />
                <Bullets items={exp.description.slice(0, 3)} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Selected projects">
          <div className="space-y-3 print:space-y-2">
            {resumeProjects.map((project) => (
              <div key={project.name} className="break-inside-avoid">
                <Row title={project.name} subtitle={project.summary} />
                <p className="text-xs text-muted-foreground">{project.stack}</p>
                <Bullets items={project.points} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          {education.map((edu) => (
            <Row
              key={edu.id}
              title={edu.position}
              subtitle={edu.company}
              date={`${edu.startDate.getFullYear()} – ${
                edu.endDate === "Present"
                  ? "Present"
                  : edu.endDate.getFullYear()
              }`}
            />
          ))}
        </Section>

        <Section title="Skills">
          <dl className="space-y-1">
            {skills.map((skill) => (
              <div key={skill.label} className="flex gap-4">
                <dt className="w-20 shrink-0 font-medium text-foreground">
                  {skill.label}
                </dt>
                <dd>{skill.value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            /* The sheet carries its own padding, so the result is the same
               whatever "Margins" is set to in the print dialog. */
            margin: 0;
          }

          html,
          body,
          main,
          .resume-sheet {
            background: white !important;
          }

          body * {
            color: black !important;
          }

          .resume-sheet .text-muted-foreground,
          .resume-sheet .text-muted-foreground * {
            color: #444 !important;
          }

          .resume-sheet h2 {
            border-color: #999 !important;
          }
        }
      `}</style>
    </PageContainer>
  );
}
