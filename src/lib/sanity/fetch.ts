import "server-only";
import { unstable_cache } from "next/cache";

import { client } from "./client";

// Broad cache tag applied to every Sanity read. The publish webhook
// (src/app/api/revalidate/route.ts) revalidates this tag on any content
// change, so publish -> live needs no redeploy. Per-type tags can be
// added by callers for finer-grained invalidation later.
export const SANITY_TAG = "sanity";

interface SanityFetchOptions {
  query: string;
  params?: Record<string, unknown>;
  /** Extra tags in addition to the always-present SANITY_TAG. */
  tags?: string[];
  /** Time-based safety net (seconds) in case the webhook is not wired. */
  revalidate?: number;
}

// Wraps client.fetch in Next's data cache via unstable_cache so results
// are cached with tags (for on-demand revalidation) and a time-based
// fallback. Returns null on failure so a CMS hiccup degrades to an empty
// state rather than crashing the page; failures are not cached.
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = 60,
}: SanityFetchOptions): Promise<T | null> {
  const cacheTags = [SANITY_TAG, ...tags];
  try {
    const run = unstable_cache(
      () => client.fetch<T>(query, params),
      ["sanity", query, JSON.stringify(params)],
      { tags: cacheTags, revalidate },
    );
    return await run();
  } catch (err) {
    console.error("[sanityFetch] query failed:", err);
    return null;
  }
}
