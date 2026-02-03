import { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/common/page-container";
import { blogPosts } from "@/config/blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";

export const metadata: Metadata = {
  title: "Blog | Articles & Tutorials",
  description: "Technical articles, tutorials, and insights about web development, databases, and software engineering.",
};

export default function BlogPage() {
  return (
    <PageContainer
      title="Blog & Articles"
      description="In-depth technical articles, tutorials, and insights from my development journey"
    >
      <div className="max-w-6xl mx-auto">
        {/* Featured Article */}
        {blogPosts.length > 0 && (
          <AnimatedSection delay={0.1} className="mb-16">
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  <div className="flex gap-2">
                    {blogPosts[0].tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Icons.user className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                    <span>•</span>
                    <time>
                      {blogPosts[0].publishedAt.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    <Button size="lg" className="shadow-lg">
                      Read Full Article
                      <Icons.arrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        )}

        {/* Other Articles */}
        {blogPosts.length > 1 && (
          <>
            <h3 className="text-2xl font-bold mb-6">More Articles</h3>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {blogPosts.slice(1).map((post, index) => (
                <AnimatedSection key={post.id} delay={0.1 * (index + 2)} direction="up">
                  <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border hover:border-primary/30 group">
                    <CardHeader className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <time className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icons.page className="w-3 h-3" />
                        {post.publishedAt.toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/blog/${post.slug}`} className="w-full">
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          Read Article
                          <Icons.arrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}

        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <Icons.page className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground text-xl font-medium">
              No articles yet. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
