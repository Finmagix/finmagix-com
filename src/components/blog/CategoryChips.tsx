import Link from "next/link";

import type { Category } from "@/lib/sanity/types";

// Category filter for the blog. Renders as links (each category has its
// own landing page), with the active one carrying aria-current so the
// state is conveyed to assistive tech, not by color alone.
export default function CategoryChips({
  categories,
  activeSlug,
}: {
  categories: Category[];
  activeSlug?: string;
}) {
  return (
    <nav className="cat-chips" aria-label="Filter posts by category">
      <Link
        href="/blog"
        className={`cat-chip ${!activeSlug ? "cat-chip--active" : ""}`}
        aria-current={!activeSlug ? "page" : undefined}
      >
        All
      </Link>
      {categories.map((c) => (
        <Link
          key={c._id}
          href={`/blog/category/${c.slug}`}
          className={`cat-chip ${activeSlug === c.slug ? "cat-chip--active" : ""}`}
          aria-current={activeSlug === c.slug ? "page" : undefined}
        >
          {c.title}
        </Link>
      ))}
    </nav>
  );
}
