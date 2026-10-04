import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { blogPosts } from "@/config/blog";

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
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
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
          html += `<pre class="my-7 overflow-x-auto rounded-md border border-border bg-[#1F1D1A] p-5 text-[#EDE8DF]"><code class="font-mono text-sm">`;
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
          html += `<h2 class="mb-4 mt-12 text-[1.9rem] font-medium leading-tight">${inline(line.slice(2))}</h2>`;
        }
      } else if (line.startsWith("## ")) {
        closeList();
        html += `<h2 class="mb-4 mt-12 text-[1.75rem] font-medium leading-tight">${inline(line.slice(3))}</h2>`;
      } else if (line.startsWith("### ")) {
        closeList();
        html += `<h3 class="mb-3 mt-9 text-[1.35rem] font-medium leading-snug">${inline(line.slice(4))}</h3>`;
      } else if (line.startsWith("- ")) {
        if (list !== "ul") {
          closeList();
          html += '<ul class="my-5 list-disc space-y-2 pl-6 marker:text-brand">';
          list = "ul";
        }
        html += `<li>${inline(line.slice(2))}</li>`;
      } else if (ordered) {
        if (list !== "ol") {
          closeList();
          html += '<ol class="my-5 list-decimal space-y-2 pl-6 marker:font-mono marker:text-sm marker:text-brand">';
          list = "ol";
        }
        html += `<li>${inline(ordered[1])}</li>`;
      } else if (line.startsWith("> ")) {
        closeList();
        html += `<blockquote class="my-6 border-l-2 border-brand pl-5 font-heading text-[1.2rem] leading-snug text-foreground">${inline(line.slice(2))}</blockquote>`;
      } else if (line.trim() === "") {
        closeList();
      } else {
        closeList();
        html += `<p class="mb-5">${inline(line)}</p>`;
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
        <div className="pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icons.arrowLeft className="h-3.5 w-3.5" />
            All writing
          </Link>
        </div>

        <header className="mx-auto max-w-[68ch] border-b border-border pb-10 pt-10">
          <p className="eyebrow">
            <time dateTime={post.publishedAt.toISOString()}>{dateLabel}</time>
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
          </p>
          <h1 className="mt-4 font-heading text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[3rem]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <p className="mt-5 font-mono text-[11px] text-muted-foreground">
            {post.tags.join(" · ")}
          </p>
        </header>

        <div
          className="article-content mx-auto max-w-[68ch] pt-8"
          dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
        />

        <footer className="mx-auto mt-14 flex max-w-[68ch] flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-muted-foreground">
            Thanks for reading. Questions or corrections are welcome on{" "}
            <Link href="/contact" className="ink-link text-foreground">
              the contact page
            </Link>
            .
          </p>
          <Link href="/blog" className="ink-link text-sm">
            More writing
          </Link>
        </footer>
      </article>
    </ClientPageWrapper>
  );
}
