import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, readToken } from "@/sanity/env";

// Read-only client for the public blog.
//
// useCdn is false on purpose: freshness is controlled by Next's cache
// (unstable_cache + tag revalidation in lib/sanity/fetch.ts) so the
// publish webhook can invalidate instantly. perspective "published"
// returns only published documents; combined with the schema's
// status == "published" filter in our GROQ, drafts never reach readers.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
  // Optional — only needed for a private dataset. Public datasets read
  // without it. Never a write token here.
  token: readToken || undefined,
});
