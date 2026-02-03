import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageContainer from "@/components/common/page-container";
import { blogPosts } from "@/config/blog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";

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

  // Enhanced markdown parser
  const parseContent = (content: string) => {
    const lines = content.split("\n");
    let html = "";
    let inCodeBlock = false;
    let inList = false;

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          const lang = line.slice(3).trim();
          html += `<pre class="bg-slate-900 dark:bg-slate-950 text-slate-100 p-6 rounded-xl overflow-x-auto my-8 border border-slate-700 shadow-lg"><code class="text-sm font-mono">`;
          inCodeBlock = true;
        } else {
          html += `</code></pre>`;
          inCodeBlock = false;
        }
        return;
      }

      if (inCodeBlock) {
        html += line + "\n";
        return;
      }

      // Headings
      if (line.startsWith("# ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += `<h1 class="text-5xl font-extrabold mb-8 mt-12 leading-tight tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">${line.slice(2)}</h1>`;
      } else if (line.startsWith("## ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += `<h2 class="text-4xl font-bold mb-6 mt-10 leading-tight text-foreground border-l-4 border-primary pl-4">${line.slice(3)}</h2>`;
      } else if (line.startsWith("### ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += `<h3 class="text-2xl font-semibold mb-4 mt-8 leading-snug text-foreground">${line.slice(4)}</h3>`;
      } else if (line.startsWith("- ")) {
        // List items
        if (!inList) {
          html += '<ul class="space-y-3 my-6 ml-6">';
          inList = true;
        }
        html += `<li class="text-lg leading-relaxed text-muted-foreground flex items-start gap-3"><span class="text-primary font-bold mt-1">•</span><span>${line.slice(2)}</span></li>`;
      } else if (line.trim() === "") {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += "<div class='h-4'></div>";
      } else if (line.trim()) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        // Regular paragraphs with better formatting
        const formattedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
          .replace(/`(.*?)`/g, '<code class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-primary font-mono text-sm">$1</code>');
        html += `<p class="text-lg leading-relaxed mb-6 text-muted-foreground">${formattedLine}</p>`;
      }
    });

    if (inList) html += "</ul>";
    return html;
  };

  return (
    <PageContainer title="" description="">
      <article className="max-w-5xl mx-auto px-4">
        {/* Article Header - Book Style */}
        <header className="mb-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground py-6 border-y border-border">
            <span className="flex items-center gap-2 font-medium">
              <Icons.user className="w-4 h-4" />
              {post.author}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <time className="font-medium">
              {post.publishedAt.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            {post.updatedAt && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span className="italic">
                  Updated: {post.updatedAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </header>

        {/* Article Content - Typography Optimized */}
        <div 
          className="article-content max-w-4xl mx-auto mb-16 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
        />

        {/* Article Footer */}
        <footer className="max-w-4xl mx-auto pt-12 mt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-1">Thanks for reading!</p>
              <p className="text-lg font-semibold">{post.author}</p>
            </div>
            <Link href="/blog">
              <Button variant="default" size="lg" className="shadow-lg">
                <Icons.chevronLeft className="w-4 h-4 mr-2" />
                More Articles
              </Button>
            </Link>
          </div>
        </footer>
      </article>
    </PageContainer>
  );
}
