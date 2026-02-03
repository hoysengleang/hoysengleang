"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { careerExperiences, education } from "@/config/career";
import { siteConfig } from "@/config/site";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    try {
      // Simple, direct download approach that works best with Next.js
      const link = document.createElement('a');
      link.href = '/HOUY_SENGLEANG.pdf';
      link.download = 'HOUY_SENGLEANG_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Trigger click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Fallback: open in new tab
      window.open('/HOUY_SENGLEANG.pdf', '_blank');
    }
  };

  return (
    <PageContainer
      title="Resume"
      description="Download or view my professional resume"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-center gap-4 print:hidden">
          <Button onClick={handleDownloadPDF} size="lg" className="shadow-lg">
            <Icons.page className="w-5 h-5 mr-2" />
            Download PDF
          </Button>
          <Button onClick={handlePrint} variant="outline" size="lg">
            <Icons.page className="w-5 h-5 mr-2" />
            Print Resume
          </Button>
          {/* <a href="/HOUY_SENGLEANG.pdf" download="HOUY_SENGLEANG_Resume.pdf">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              <Icons.externalLink className="w-5 h-5 mr-2" />
              Direct Download
            </Button>
          </a> */}
        </div>

        <div className="bg-white dark:bg-card rounded-lg shadow-xl p-8 md:p-12 print:shadow-none print:p-4 print:bg-white">
          {/* Header */}
          <div className="text-center border-b border-gray-300 pb-4 mb-6 print:pb-3 print:mb-4">
            <h1 className="text-4xl font-bold mb-2 print:text-3xl print:mb-1 print:text-black">{siteConfig.authorName}</h1>
            <p className="text-xl text-muted-foreground mb-3 print:text-lg print:mb-2 print:text-gray-700">Backend Developer</p>
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
                {siteConfig.url.replace('https://', '')}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 print:text-xs print:mt-1 print:text-gray-600">
              Kol village, sangkat KunTok, Khan KomBol, Phnom Penh
            </p>
          </div>

          {/* About Me */}
          <section className="mb-6 print:mb-3">
            <h2 className="text-2xl font-bold mb-3 text-primary print:text-xl print:mb-2 print:text-black">About Me</h2>
            <p className="text-muted-foreground leading-relaxed print:text-sm print:leading-snug print:text-black">
              {siteConfig.description}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6 print:mb-3">
            <h2 className="text-2xl font-bold mb-4 text-primary print:text-xl print:mb-2 print:text-black">Experience</h2>
            {careerExperiences.map((exp) => (
              <div key={exp.id} className="mb-6 print:mb-3 print:break-inside-avoid">
                <div className="mb-3 print:mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold print:text-base print:text-black">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground print:text-xs print:text-black whitespace-nowrap">
                      {exp.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} – {exp.endDate === "Present" ? "Present" : exp.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground print:text-xs print:text-gray-600">{exp.location}</p>
                </div>
                <ul className="list-none space-y-2 text-sm text-muted-foreground print:space-y-1 print:text-xs print:text-black">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="flex gap-2 print:gap-1">
                      <span className="text-primary font-bold print:text-black">-</span>
                      <span className="print:leading-tight">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Feature Project */}
          <section className="mb-6 print:mb-3 print:break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 text-primary print:text-xl print:mb-2 print:text-black">Feature Project</h2>
            <div className="mb-4 print:mb-2">
              <div className="mb-3 print:mb-2">
                <h3 className="text-lg font-bold print:text-base print:text-black">Mimic (Open-Source Mock API Tool)</h3>
                <p className="text-sm text-muted-foreground italic print:text-xs print:text-gray-600">Status: Active Development / In Progress</p>
              </div>
              <ul className="list-none space-y-2 text-sm text-muted-foreground print:space-y-1 print:text-xs print:text-black">
                <li className="flex gap-2 print:gap-1">
                  <span className="text-primary font-bold print:text-black">-</span>
                  <span className="print:leading-tight"><strong className="print:font-semibold">The Goal:</strong> Architecting a professional-grade mock API engine to streamline integration testing between complex backend and frontend systems.</span>
                </li>
                <li className="flex gap-2 print:gap-1">
                  <span className="text-primary font-bold print:text-black">-</span>
                  <span className="print:leading-tight"><strong className="print:font-semibold">Current Focus:</strong> Implementing a dynamic response engine using Python and Vue 3 to simulate high-frequency multi-system environments.</span>
                </li>
                <li className="flex gap-2 print:gap-1">
                  <span className="text-primary font-bold print:text-black">-</span>
                  <span className="print:leading-tight"><strong className="print:font-semibold">Infrastructure:</strong> Utilizing Docker to ensure the tool is easily portable and scalable across different development environments.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6 print:mb-3 print:break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 text-primary print:text-xl print:mb-2 print:text-black">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 print:mb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold print:text-base print:text-black">{edu.position}</h3>
                    <p className="text-sm text-muted-foreground print:text-xs print:text-gray-600">{edu.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground print:text-xs print:text-black">
                    <p>{edu.startDate.getFullYear()} - {edu.endDate === "Present" ? "Present" : (edu.endDate as Date).getFullYear()}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section className="mb-6 print:mb-3 print:break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 text-primary print:text-xl print:mb-2 print:text-black">Technical</h2>
            <div className="space-y-3 print:space-y-1">
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">Languages & Frameworks</h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">PHP (Laravel), C#, Python, JavaScript.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">Databases</h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">MySQL, PostgreSQL, Database Design.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">Tools & DevOps</h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">Git/GitHub, Postman, Linux (Ubuntu), Nginx, Composer, Docker.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2 print:text-sm print:mb-1 print:text-black">Concepts</h3>
                <p className="text-sm text-muted-foreground print:text-xs print:text-black">RESTful APIs, OOP, MVC Architecture.</p>
              </div>
            </div>
          </section>

          {/* Language */}
          <section className="mb-6 print:mb-3 print:break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 text-primary print:text-xl print:mb-2 print:text-black">Language</h2>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground print:text-xs print:text-black">- Khmer (Native)</p>
              <p className="text-sm text-muted-foreground print:text-xs print:text-black">- English (Professional)</p>
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
          }
          
          html, body {
            background: white !important;
            color: black !important;
          }
          
          /* Force all containers to white background */
          div, section, main, article {
            background: white !important;
            background-color: white !important;
          }
          
          @page {
            margin: 0.75cm 1cm;
            size: A4 portrait;
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
          nav, header, footer, .print\\:hidden {
            display: none !important;
          }
          
          /* Force all text to black */
          h1, h2, h3, h4, h5, h6, p, li, span, div, a {
            color: black !important;
            orphans: 3;
            widows: 3;
          }
          
          /* Override any theme colors */
          .text-primary, .text-muted-foreground, .text-foreground {
            color: black !important;
          }
          
          /* Prevent page breaks in important sections */
          section, .print\\:break-inside-avoid {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          /* Ensure proper line heights for readability */
          p, li {
            line-height: 1.4 !important;
          }
          
          /* Remove shadows and rounded corners */
          .shadow-xl, .shadow-lg, .shadow-md, .shadow {
            box-shadow: none !important;
          }
          
          .rounded-lg, .rounded-xl {
            border-radius: 0 !important;
          }
          
          /* Ensure borders are visible and black */
          .border, .border-b, .border-t {
            border-color: #000000 !important;
          }
          
          /* Remove any dark mode specific styling */
          .dark\\:bg-card, .dark\\:text-white {
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </PageContainer>
  );
}
