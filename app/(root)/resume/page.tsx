"use client";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { Button } from "@/components/ui/button";
import { careerExperiences, education } from "@/config/career";
import { siteConfig } from "@/config/site";

const resumeProjects = [
  {
    name: "OpenVisionSearch — Self-hosted Visual Search API",
    stack: "Python · FastAPI · OpenCLIP · Qdrant · Docker · GitHub Actions",
    points: [
      "Image, text and hybrid product search over HTTP; indexes from URLs, uploads, folders or S3.",
      "Measured stock CLIP framing on 300 portrait products and switched to padded framing: Recall@1 75% → 90%.",
    ],
  },
  {
    name: "Knowledge Assistant — Document Q&A with Citations",
    stack: "FastAPI · PostgreSQL + pgvector · React · Ollama · Tesseract OCR",
    points: [
      "Hybrid retrieval (pgvector + full-text, fused with RRF); every answer cites its source or says \"not found\".",
      "Runs fully offline with Ollama; Khmer and English OCR for scanned PDFs.",
    ],
  },
  {
    name: "apicheck — API Security Scanner",
    stack: "TypeScript · Node.js · OpenAPI · OWASP API Top 10",
    points: [
      "11 non-destructive checks across 6 OWASP API categories, discovered from an OpenAPI spec.",
      "Terminal, JSON and SARIF output with exit codes for CI gating.",
    ],
  },
  {
    name: "localnet-control — Published Developer CLI",
    stack: "Python · Networking · Security · PyPI",
    points: [
      "LAN-first localhost sharing with QR output, token auth, IP/CIDR rules and optional tunnels.",
      "Released on PyPI as localnet-control with public source and documentation.",
    ],
  },
];

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    try {
      // Simple, direct download approach that works best with Next.js
      const link = document.createElement("a");
      link.href = "/HOUY_SENGLEANG.pdf";
      link.download = "HOUY_SENGLEANG_Resume.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Trigger click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // Fallback: open in new tab
      window.open("/HOUY_SENGLEANG.pdf", "_blank");
    }
  };

  return (
    <PageContainer
      title="Résumé"
      description="The one-page version. Print it, or download the PDF."
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-wrap gap-3 print:hidden">
          <Button onClick={handleDownloadPDF}>
            <Icons.download className="w-4 h-4" />
            Download PDF
          </Button>
          <Button onClick={handlePrint} variant="outline">
            <Icons.page className="w-4 h-4" />
            Print Resume
          </Button>
          {/* <a href="/HOUY_SENGLEANG.pdf" download="HOUY_SENGLEANG_Resume.pdf">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              <Icons.externalLink className="w-5 h-5 mr-2" />
              Direct Download
            </Button>
          </a> */}
        </div>

        <div className="resume-sheet bg-card border border-border rounded-md p-8 md:p-12 print:shadow-none print:p-0 print:bg-white">
          {/* Header */}
          <div className="text-center border-b border-gray-300 pb-4 mb-6 print:pb-3 print:mb-4">
            <h1 className="font-heading text-4xl font-medium mb-2 print:text-3xl print:mb-1 print:text-black">
              {siteConfig.authorName}
            </h1>
            <p className="text-xl text-muted-foreground mb-3 print:text-lg print:mb-2 print:text-gray-700">
              Backend-Focused Full Stack Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm print:gap-3 print:text-xs">
              <span className="flex items-center gap-1 print:text-black">
                <Icons.contact className="w-4 h-4 print:hidden" />
                +855 784-197-60 (TELEGRAM)
              </span>
              <span className="flex items-center gap-1 print:text-black">
                <Icons.gmail className="w-4 h-4 print:hidden" />
                hoysengleang617@gmail.com
              </span>
              <span className="flex items-center gap-1 print:text-black">
                <Icons.globe className="w-4 h-4 print:hidden" />
                {siteConfig.url.replace("https://", "")}
              </span>
              <span className="flex items-center gap-1 print:text-black">
                <Icons.gitHub className="w-4 h-4 print:hidden" />
                github.com/hoysengleang
              </span>
              <span className="flex items-center gap-1 print:text-black">
                <Icons.linkedin className="w-4 h-4 print:hidden" />
                linkedin.com/in/sengleang-houy-825801268
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 print:text-xs print:mt-1 print:text-gray-600">
              Phnom Penh, Cambodia
            </p>
          </div>

          {/* About Me */}
          <section className="mb-6 print:mb-3">
            <h2 className="font-heading text-2xl font-medium mb-3 text-primary print:text-xl print:mb-2 print:text-black">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed print:text-sm print:leading-snug print:text-black">
              {siteConfig.description}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6 print:mb-3">
            <h2 className="font-heading text-2xl font-medium mb-4 text-primary print:text-xl print:mb-2 print:text-black">
              Experience
            </h2>
            {careerExperiences.map((exp) => (
              <div
                key={exp.id}
                className="mb-6 print:mb-3 print:break-inside-avoid"
              >
                <div className="mb-3 print:mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-bold print:text-base print:text-black">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground print:text-xs print:text-gray-700">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground print:text-xs print:text-black whitespace-nowrap">
                      {exp.startDate.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      –{" "}
                      {exp.endDate === "Present"
                        ? "Present"
                        : exp.endDate.toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground print:text-xs print:text-gray-600">
                    {exp.location}
                  </p>
                </div>
                <ul className="list-none space-y-2 text-sm text-muted-foreground print:space-y-1 print:text-xs print:text-black">
                  {exp.description.slice(0, 3).map((desc, index) => (
                    <li key={index} className="flex gap-2 print:gap-1">
                      <span className="text-primary font-bold print:text-black">
                        -
                      </span>
                      <span className="print:leading-tight">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Selected Projects */}
          <section className="mb-6 print:mb-3">
            <h2 className="font-heading text-2xl font-medium mb-4 text-primary print:text-xl print:mb-2 print:text-black">
              Selected Projects
            </h2>
            <div className="space-y-4 print:space-y-2">
              {resumeProjects.map((project) => (
                <div key={project.name} className="print:break-inside-avoid">
                  <h3 className="text-lg font-bold print:text-base print:text-black">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic print:text-xs print:text-gray-600">
                    {project.stack}
                  </p>
                  <ul className="mt-1.5 list-none space-y-1.5 text-sm text-muted-foreground print:space-y-0.5 print:text-xs print:text-black">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2 print:gap-1">
                        <span className="text-primary font-bold print:text-black">-</span>
                        <span className="print:leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-6 print:mb-3 print:break-inside-avoid">
            <h2 className="font-heading text-2xl font-medium mb-4 text-primary print:text-xl print:mb-2 print:text-black">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 print:mb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold print:text-base print:text-black">
                      {edu.position}
                    </h3>
                    <p className="text-sm text-muted-foreground print:text-xs print:text-gray-600">
                      {edu.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground print:text-xs print:text-black">
                    <p>
                      {edu.startDate.getFullYear()} -{" "}
                      {edu.endDate === "Present"
                        ? "Present"
                        : (edu.endDate as Date).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section className="mb-6 print:mb-3 print:break-inside-avoid">
            <h2 className="font-heading text-2xl font-medium mb-4 text-primary print:text-xl print:mb-2 print:text-black">
              Technical
            </h2>
            <div className="space-y-3 print:space-y-1">
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">
                  Languages & Frameworks
                </h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">
                  <strong>Core:</strong> PHP (Laravel), TypeScript (NestJS),
                  Python (FastAPI), JavaScript. <strong>Also:</strong> React,
                  Vue, Rust.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">
                  Databases
                </h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">
                  MySQL, PostgreSQL, Redis, Database Design. Vector search with
                  Qdrant and pgvector.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">
                  Tools & DevOps
                </h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">
                  Git/GitHub, GitHub Actions, Docker, Linux, Nginx, Postman.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">
                  Concepts
                </h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">
                  RESTful APIs, RBAC and JWT auth, OWASP API security, RAG and
                  LLM evaluation, LoRA fine-tuning.
                </p>
              </div>
            </div>
          </section>

          {/* Language */}
          <section className="mb-6 print:mb-3 print:break-inside-avoid">
            <h2 className="font-heading text-2xl font-medium mb-4 text-primary print:text-xl print:mb-2 print:text-black">
              Language
            </h2>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground print:text-xs print:text-black">
                - Khmer (Native)
              </p>
              <p className="text-sm text-muted-foreground print:text-xs print:text-black">
                - English (Professional)
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center text-xs text-muted-foreground pt-6 border-t print:block hidden">
            <p>This resume was generated from {siteConfig.url}</p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          /* Force light theme colors */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            opacity: 1 !important;
            filter: none !important;
            transform: none !important;
            animation: none !important;
            transition: none !important;
          }

          html,
          body {
            background: white !important;
            color: black !important;
          }

          /* Force all containers to white background */
          div,
          section,
          main,
          article {
            background: white !important;
            background-color: white !important;
          }

          @page {
            margin: 0.5cm 0.8cm;
            size: A4 portrait;
          }

          .resume-sheet {
            font-size: 11px !important;
          }

          .resume-sheet > div:first-child {
            margin-bottom: 6px !important;
            padding-bottom: 6px !important;
          }

          .resume-sheet h1 {
            font-size: 24px !important;
            line-height: 1.05 !important;
            margin-bottom: 2px !important;
          }

          .resume-sheet h2 {
            font-size: 16px !important;
            line-height: 1.1 !important;
            margin-bottom: 4px !important;
          }

          .resume-sheet h3 {
            font-size: 13px !important;
            line-height: 1.15 !important;
          }

          .resume-sheet section {
            margin-bottom: 6px !important;
          }

          .resume-sheet section > div {
            margin-bottom: 4px !important;
          }

          .resume-sheet ul > :not([hidden]) ~ :not([hidden]) {
            margin-top: 2px !important;
            margin-bottom: 0 !important;
          }

          /* Remove container constraints */
          .container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .max-w-4xl {
            max-width: 100% !important;
          }

          /* Hide all non-resume content */
          nav,
          header,
          footer,
          .print\\:hidden {
            display: none !important;
          }

          /* Force all text to black */
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          li,
          span,
          div,
          a {
            color: black !important;
            orphans: 3;
            widows: 3;
          }

          /* Override any theme colors */
          .text-primary,
          .text-muted-foreground,
          .text-foreground {
            color: black !important;
          }

          /* Prevent page breaks in important sections */
          section,
          .print\\:break-inside-avoid {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Ensure proper line heights for readability */
          p,
          li {
            font-size: 11px !important;
            line-height: 1.25 !important;
          }

          /* Remove shadows and rounded corners */
          .shadow-xl,
          .shadow-lg,
          .shadow-md,
          .shadow {
            box-shadow: none !important;
          }

          .rounded-lg,
          .rounded-xl {
            border-radius: 0 !important;
          }

          /* Ensure borders are visible and black */
          .border,
          .border-b,
          .border-t {
            border-color: #000000 !important;
          }

          /* Remove any dark mode specific styling */
          .dark\\:bg-card,
          .dark\\:text-white {
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </PageContainer>
  );
}
