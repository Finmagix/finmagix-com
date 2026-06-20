import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/lib/sanity/image";
import type { PostCard as PostCardType } from "@/lib/sanity/types";

function formatDate(iso?: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostCardType }) {
  const date = formatDate(post.publishedAt);
  const img = post.mainImage
    ? urlForImage(post.mainImage).width(800).height(500).fit("crop").url()
    : null;

  return (
    <article className="post-card">
      <Link href={`/blog/${post.slug}`} className="post-card__link">
        {img ? (
          <div className="post-card__media">
            <Image
              src={img}
              alt={post.mainImage?.alt || ""}
              fill
              sizes="(max-width: 720px) 100vw, 360px"
              className="post-card__img"
            />
          </div>
        ) : (
          <div className="post-card__media post-card__media--empty" aria-hidden="true" />
        )}
        <div className="post-card__body">
          {post.categories?.[0] ? (
            <span className="post-card__cat">{post.categories[0].title}</span>
          ) : null}
          <h3 className="post-card__title">{post.title}</h3>
          {post.excerpt ? (
            <p className="post-card__excerpt">{post.excerpt}</p>
          ) : null}
          <div className="post-card__meta">
            {post.author?.name ? <span>{post.author.name}</span> : null}
            {post.author?.name && date ? <span aria-hidden="true">·</span> : null}
            {date ? (
              <time dateTime={post.publishedAt ?? undefined}>{date}</time>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
