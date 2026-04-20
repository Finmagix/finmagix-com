import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://finmagix.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = getAllPosts();

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}${post.url}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: `${BASE}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/advisors`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/pricing`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/partners`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/demo`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, priority: 0.3 },
    ...postUrls,
  ];
}
