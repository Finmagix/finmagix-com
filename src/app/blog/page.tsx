import type { Metadata } from "next";

import CategoryChips from "@/components/blog/CategoryChips";
import PostCard from "@/components/blog/PostCard";
import { sanityFetch } from "@/lib/sanity/fetch";
import { CATEGORIES_QUERY, POSTS_QUERY } from "@/lib/sanity/queries";
import type { Category, PostCard as PostCardType } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain-language writing on financial fitness, college planning, debt, retirement, taxes, and the life events in between — from the team at Finmagix.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default async function BlogIndexPage() {
  const [posts, categories] = await Promise.all([
    sanityFetch<PostCardType[]>({ query: POSTS_QUERY, tags: ["post"] }),
    sanityFetch<Category[]>({ query: CATEGORIES_QUERY, tags: ["category"] }),
  ]);
  const postList = posts ?? [];
  const categoryList = categories ?? [];

  return (
    <>
      <section className="section section--tight blog-hero">
        <div className="wrap">
          <div className="eyebrow">The Finmagix blog</div>
          <h1 className="t-page-title" style={{ marginTop: 16, marginBottom: 16 }}>
            Money, in plain language.
          </h1>
          <p className="t-lede" style={{ maxWidth: 640 }}>
            Structured thinking on the areas that actually move your financial
            life — written to inform, never to pressure. You decide what to do
            with it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {categoryList.length > 0 ? (
            <CategoryChips categories={categoryList} />
          ) : null}

          {postList.length > 0 ? (
            <div className="post-grid">
              {postList.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p className="t-card-title">No posts yet.</p>
              <p className="t-body-secondary" style={{ marginTop: 8 }}>
                New writing is on the way. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
