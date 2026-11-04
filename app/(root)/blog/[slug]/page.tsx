import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { DocHeader } from "@/components/common/doc-header";
import { blogPosts } from "@/config/blog";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const escapeHtml = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const inline = (value: string) =>
    escapeHtml(value)
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g,
        (_match, text: string, href: string) =>
          href.startsWith("http")
            ? `<a href="${href}" target="_blank" rel="noreferrer">${text}</a>`
            : `<a href="${href}">${text}</a>`
      );

  // Small markdown renderer for the hand-written posts in config/blog.ts.
  const parseContent = (content: string) => {
    const lines = content.split("\n");
    let html = "";
    let inCodeBlock = false;
    let list: "ul" | "ol" | null = null;
    let skippedTitle = false;

    const closeList = () => {
      if (list) {
        html += `</${list}>`;
        list = null;
      }
    };

    lines.forEach((line) => {
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          closeList();
          html += "<pre><code>";
          inCodeBlock = true;
        } else {
          html += `</code></pre>`;
          inCodeBlock = false;
        }
        return;
      }

      if (inCodeBlock) {
        html += escapeHtml(line) + "\n";
        return;
      }

      const ordered = line.match(/^\d+\.\s+(.*)$/);

      if (line.startsWith("# ")) {
        closeList();
        // The first top-level heading restates the title already shown in the header.
        if (!skippedTitle) {
          skippedTitle = true;
        } else {
          html += `<h2>${inline(line.slice(2))}</h2>`;
        }
      } else if (line.startsWith("## ")) {
        closeList();
        html += `<h2>${inline(line.slice(3))}</h2>`;
      } else if (line.startsWith("### ")) {
        closeList();
        html += `<h3>${inline(line.slice(4))}</h3>`;
      } else if (line.startsWith("- ")) {
        if (list !== "ul") {
          closeList();
          html += "<ul>";
          list = "ul";
        }
        html += `<li>${inline(line.slice(2))}</li>`;
      } else if (ordered) {
        if (list !== "ol") {
          closeList();
          html += "<ol>";
          list = "ol";
        }
        html += `<li>${inline(ordered[1])}</li>`;
      } else if (line.startsWith("> ")) {
        closeList();
        html += `<blockquote>${inline(line.slice(2))}</blockquote>`;
      } else if (line.trim() === "") {
        closeList();
      } else {
        closeList();
        html += `<p>${inline(line)}</p>`;
      }
    });

    closeList();
    return html;
  };

  const dateLabel = post.publishedAt.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <ClientPageWrapper>
      <article className="page-shell">
        <div className="mx-auto max-w-[640px] pb-8 pt-10">
          <DocHeader
            back={{ href: "/blog", label: "Writing" }}
            title={post.title}
            lead={post.excerpt}
            meta={
              <>
                <time dateTime={post.publishedAt.toISOString()}>
                  {dateLabel}
                </time>
                {post.updatedAt && (
                  <>
                    {" · Updated "}
                    {post.updatedAt.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </>
                )}
                {" · "}
                {post.tags.join(", ")}
              </>
            }
          />

          <div
            className="doc mt-8"
            dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
          />

          <footer className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">
            Questions or corrections?{" "}
            <Link href="/contact" className="ink-link text-foreground">
              Get in touch
            </Link>
            {" · "}
            <Link href="/blog" className="ink-link text-foreground">
              More writing
            </Link>
          </footer>
        </div>
      </article>
    </ClientPageWrapper>
  );
}
