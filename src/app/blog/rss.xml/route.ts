import { sanityFetch } from "@/lib/sanity/fetch";
import { RSS_POSTS_QUERY } from "@/lib/sanity/queries";
import type { RssPost } from "@/lib/sanity/types";

// RSS 2.0 feed — built so a future newsletter (deferred to its own
// session) is a clean follow-on rather than a rebuild. Excerpt-only by
// design; readers click through for the full post.
const SITE = "https://finmagix.com";

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return char;
    }
  });
}

export async function GET() {
  const posts =
    (await sanityFetch<RssPost[]>({
      query: RSS_POSTS_QUERY,
      tags: ["post"],
      revalidate: 3600,
    })) ?? [];

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${post.slug}</guid>${
        post.publishedAt
          ? `\n      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`
          : ""
      }${
        post.excerpt
          ? `\n      <description>${escapeXml(post.excerpt)}</description>`
          : ""
      }
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Finmagix Blog</title>
    <link>${SITE}/blog</link>
    <description>Plain-language writing on financial fitness, planning, and the life events in between.</description>
    <language>en-us</language>
    <atom:link href="${SITE}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
