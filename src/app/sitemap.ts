import type { MetadataRoute } from "next";

// Sitemap for the marketing site. Per docs/CLAUDE_CODE_HANDOFF.md
// "Migration order" + the Session 01 founder decision to drop /pricing
// for the beta. Excluded from sitemap (some still exist as routes,
// either as stubs or as legacy WS-2/WS-3 pages not yet promoted):
//
//   /pricing            — page deleted in Session 01 (route removed)
//   /blog + /blog/*     — page set "removed May 2026" per handoff
//                          (route exists from WS-3 but is not promoted;
//                          full removal tracked in tech-debt-marketing.md)
//   /demo               — replaced by /platform; redirect TBD (migration
//                          step 3); route exists but not promoted
//   /privacy            — legacy WS-3 route; new canonical is
//                          /privacy-and-security; redirect TBD step 3
//   /sign-in, /sign-up  — auth surfaces live in lite.finmagix.com;
//                          these routes are local redirects (WS-2)
//
// When the deferred work in tech-debt-marketing.md lands, restore
// the affected entries here.

const BASE = "https://finmagix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/platform`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/partners`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/advisors`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/privacy-and-security`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/disclaimer`, lastModified: now, priority: 0.3 },
  ];
}
