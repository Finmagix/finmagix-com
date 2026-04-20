import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Button from "@/components/ui/Button";
import PostCard from "@/components/blog/PostCard";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/posts";
import styles from "./page.module.css";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found | Finmagix" };

  const url = `https://finmagix.com${post.url}`;

  return {
    title: `${post.title} | Finmagix`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Finmagix",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: RouteParams) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 2);

  return (
    <>
      <article className={styles.article}>
        <div className={styles.articleInner}>
          <Link href="/blog" className={styles.back}>
            ← Back to blog
          </Link>

          {post.tags.length > 0 && (
            <div className={styles.tagRow}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span>{post.author}</span>
            <span className={styles.metaDot} aria-hidden="true" />
            <span>{formatPostDate(post.date)}</span>
            <span className={styles.metaDot} aria-hidden="true" />
            <span>{post.readMinutes} min read</span>
          </div>

          <hr className={styles.divider} />

          <div className={styles.prose}>
            <MDXRemote source={post.content} />
          </div>

          <aside className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Ready to understand your own financial picture?
            </h2>
            <p className={styles.ctaSub}>
              Start with the free Financial Health Checkup. No credit card
              required. Takes 5 minutes.
            </p>
            <Button
              variant="lime"
              size="md"
              href="https://lite.finmagix.com/signup"
              target="_blank"
            >
              Start free →
            </Button>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <h3 className={styles.relatedH3}>More reading</h3>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className={styles.pageDisclaimer}>
        For educational purposes only. Not financial advice.
      </div>
    </>
  );
}
