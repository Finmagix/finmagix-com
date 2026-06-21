import type { MetadataRoute } from "next";

import { sanityFetch } from "@/lib/sanity/fetch";
import { CATEGORY_SLUGS_QUERY, POST_SLUGS_QUERY } from "@/lib/sanity/queries";

// Sitemap for the marketing site. Static marketing routes plus the
// Sanity-backed blog (index + category landing pages + posts), fetched at
// build time and refreshed by the publish webhook's tag revalidation.
//
// Still excluded (some exist as routes but are not promoted): /pricing,
// /demo, /privacy, /sign-in, /sign-up. The legacy MDX /blog page set was
// removed before this Sanity blog; see tech-debt-marketing.md.

const BASE = "https://finmagix.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const [postSlugs, categorySlugs] = await Promise.all([
    sanityFetch<string[]>({ query: POST_SLUGS_QUERY, tags: ["post"] }),
    sanityFetch<string[]>({ query: CATEGORY_SLUGS_QUERY, tags: ["category"] }),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/platform`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/partners`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/advisors`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/privacy-and-security`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/disclaimer`, lastModified: now, priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = (categorySlugs ?? []).map(
    (slug) => ({
      url: `${BASE}/blog/category/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    }),
  );

  const postRoutes: MetadataRoute.Sitemap = (postSlugs ?? []).map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
