import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { blogPosts } from "@/config/blog";

export const metadata: Metadata = {
  title: "Writing | Articles & Tutorials",
  description:
    "Notes and tutorials on backend engineering, databases, APIs and the tools I build.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  return (
    <PageContainer
      title="Writing"
      description="Notes on backend engineering, databases and APIs, plus write-ups of the tools I build."
    >
      {posts.length === 0 ? (
        <p className="text-muted-foreground">Nothing here yet.</p>
      ) : (
        <ol className="-mt-6 divide-y divide-border border-b border-border sm:-mt-8">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-x-10 gap-y-2 py-8 md:grid-cols-[180px_minmax(0,1fr)]"
              >
                <time
                  dateTime={post.publishedAt.toISOString()}
                  className="font-mono text-xs text-muted-foreground md:pt-2"
                >
                  {post.publishedAt.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <div className="min-w-0">
                  <h2 className="font-heading text-[1.6rem] leading-tight decoration-brand decoration-1 underline-offset-4 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-[65ch] leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                    {post.tags.slice(0, 4).join(" · ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </PageContainer>
  );
}
