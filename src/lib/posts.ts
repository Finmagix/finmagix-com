import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

export interface Post {
  slug: string;
  url: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  published: boolean;
  content: string;
  readMinutes: number;
  wordCount: number;
}

function parseFile(file: string): Post | null {
  const fullPath = path.join(POSTS_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  if (!data.title || !data.date || !data.excerpt) return null;

  const slug = file.replace(/\.mdx$/, "");
  const dateIso = new Date(data.date as string | Date).toISOString();
  const stats = readingTime(content);

  return {
    slug,
    url: `/blog/${slug}`,
    title: String(data.title),
    date: dateIso,
    excerpt: String(data.excerpt),
    author: typeof data.author === "string" ? data.author : "Finmagix Team",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    published: data.published !== false,
    content,
    readMinutes: Math.max(1, Math.round(stats.minutes)),
    wordCount: stats.words,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files
    .map((file) => parseFile(file))
    .filter((p): p is Post => p !== null && p.published);

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const file = `${slug}.mdx`;
  const fullPath = path.join(POSTS_DIR, file);
  if (!fs.existsSync(fullPath)) return null;
  const post = parseFile(file);
  if (!post || !post.published) return null;
  return post;
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);

  const scored = all
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      overlap: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      return a.post.date < b.post.date ? 1 : -1;
    });

  return scored.slice(0, limit).map((s) => s.post);
}

export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}
