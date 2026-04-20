import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, formatPostDate } from "@/lib/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog | Finmagix",
  description:
    "Plain-language articles on financial planning — retirement gaps, tax efficiency, Social Security timing, and more.",
  openGraph: {
    title: "Blog | Finmagix",
    description:
      "Plain-language financial planning articles from the Finmagix team.",
    url: "https://finmagix.com/blog",
    siteName: "Finmagix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Finmagix",
    description:
      "Plain-language financial planning articles from the Finmagix team.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <SectionLabel tone="dark">Financial insights</SectionLabel>
          <h1 className={styles.heroH1}>
            Planning guides and financial education
          </h1>
          <p className={styles.heroSub}>
            Plain-language articles on financial planning topics — from
            retirement gaps to tax efficiency.
          </p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.mainInner}>
          {featured ? (
            <Link href={featured.url} className={styles.featured}>
              <span className={styles.featuredLabel}>Latest post</span>
              {featured.tags.length > 0 && (
                <div className={styles.featuredTagRow}>
                  {featured.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.featuredTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.featuredFooter}>
                <span>{featured.author}</span>
                <span aria-hidden="true">·</span>
                <span>{formatPostDate(featured.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readMinutes} min read</span>
                <span className={styles.featuredRead}>Read more →</span>
              </div>
            </Link>
          ) : (
            <div className={styles.empty}>No posts yet — check back soon.</div>
          )}

          {rest.length > 0 && (
            <div className={styles.grid}>
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          <p className={styles.disclaimer}>
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
