// Sanity environment configuration for the finmagix.com blog.
//
// projectId is PUBLIC (not a secret) and is documented in the session
// brief (docs/sessions/session-02-blog-mvp.md). It is exposed to the
// browser via NEXT_PUBLIC_*. The read token and webhook secret are NOT
// here — they live in Vercel env / .env.local and are never committed.
//
// Defaults are provided so a local `next build` and preview deploy work
// even before the founder sets the env vars; any env value overrides them.

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "i7v8b5ym";

// Optional. Present only if the production dataset is private or we want
// to read drafts. Public datasets read fine without it.
export const readToken = process.env.SANITY_API_READ_TOKEN || "";
