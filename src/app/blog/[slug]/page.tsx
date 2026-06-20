import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

import PortableBody from "@/components/blog/PortableBody";
import { sanityFetch } from "@/lib/sanity/fetch";
import { imageDimensions, urlForImage } from "@/lib/sanity/image";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/types";

// React cache dedupes the fetch between generateMetadata and the page
// within a single request.
const getPost = cache((slug: string) =>
  sanityFetch<Post>({ query: POST_QUERY, params: { slug }, tags: ["post"] }),
);

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: POST_SLUGS_QUERY,
    tags: ["post"],
  });
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };

  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt ?? undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt ?? undefined,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
  const dims = post.mainImage ? imageDimensions(post.mainImage) : undefined;
  const heroUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1600).url()
    : null;

  return (
    <article className="section post">
      <div className="wrap wrap--narrow">
        <Link href="/blog" className="post__back">
          ← All posts
        </Link>
        {post.categories && post.categories.length > 0 ? (
          <div className="post__cats">
            {post.categories.map((c) => (
              <Link key={c.slug} href={`/blog/category/${c.slug}`} className="cat-chip">
                {c.title}
              </Link>
            ))}
          </div>
        ) : null}
        <h1 className="t-page-title post__title">{post.title}</h1>
        <div className="post__meta">
          {post.author?.name ? <span>{post.author.name}</span> : null}
          {post.author?.name && date ? <span aria-hidden="true">·</span> : null}
          {date ? (
            <time dateTime={post.publishedAt ?? undefined}>{date}</time>
          ) : null}
        </div>
      </div>

      {heroUrl && dims ? (
        <div className="wrap wrap--medium">
          <div className="post__hero">
            <Image
              src={heroUrl}
              alt={post.mainImage?.alt || ""}
              width={dims.width}
              height={dims.height}
              sizes="(max-width: 920px) 100vw, 920px"
              className="post__hero-img"
              priority
            />
          </div>
        </div>
      ) : null}

      <div className="wrap wrap--narrow">
        {post.excerpt ? (
          <p className="t-lede post__excerpt">{post.excerpt}</p>
        ) : null}
        {post.body ? <PortableBody value={post.body} /> : null}

        {post.author?.bio ? (
          <footer className="post__author">
            {post.author.image ? (
              <Image
                src={urlForImage(post.author.image).width(96).height(96).fit("crop").url()}
                alt={post.author.image?.alt || post.author.name}
                width={48}
                height={48}
                className="post__author-img"
              />
            ) : null}
            <div>
              <div className="post__author-name">{post.author.name}</div>
              <p className="post__author-bio">{post.author.bio}</p>
            </div>
          </footer>
        ) : null}
      </div>
    </article>
  );
}
