import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

import CategoryChips from "@/components/blog/CategoryChips";
import PostCard from "@/components/blog/PostCard";
import { sanityFetch } from "@/lib/sanity/fetch";
import {
  CATEGORIES_QUERY,
  CATEGORY_QUERY,
  CATEGORY_SLUGS_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/lib/sanity/queries";
import type { Category, PostCard as PostCardType } from "@/lib/sanity/types";

const getCategory = cache((slug: string) =>
  sanityFetch<Category>({
    query: CATEGORY_QUERY,
    params: { slug },
    tags: ["category"],
  }),
);

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: CATEGORY_SLUGS_QUERY,
    tags: ["category"],
  });
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: `${category.title} — Blog`,
    description:
      category.description ??
      `Posts in ${category.title} from the Finmagix blog.`,
    alternates: { canonical: `/blog/category/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [category, posts, categories] = await Promise.all([
    getCategory(slug),
    sanityFetch<PostCardType[]>({
      query: POSTS_BY_CATEGORY_QUERY,
      params: { slug },
      tags: ["post", "category"],
    }),
    sanityFetch<Category[]>({ query: CATEGORIES_QUERY, tags: ["category"] }),
  ]);

  if (!category) notFound();
  const postList = posts ?? [];
  const categoryList = categories ?? [];

  return (
    <>
      <section className="section section--tight blog-hero">
        <div className="wrap">
          <Link href="/blog" className="post__back">
            ← All posts
          </Link>
          <div className="eyebrow" style={{ marginTop: 16 }}>
            Category
          </div>
          <h1 className="t-page-title" style={{ marginTop: 12, marginBottom: 16 }}>
            {category.title}
          </h1>
          {category.description ? (
            <p className="t-lede" style={{ maxWidth: 640 }}>
              {category.description}
            </p>
          ) : null}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {categoryList.length > 0 ? (
            <CategoryChips categories={categoryList} activeSlug={category.slug} />
          ) : null}

          {postList.length > 0 ? (
            <div className="post-grid">
              {postList.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p className="t-card-title">No posts in this category yet.</p>
              <p className="t-body-secondary" style={{ marginTop: 8 }}>
                Try another category, or{" "}
                <Link href="/blog" className="post-inline-link">
                  browse all posts
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
