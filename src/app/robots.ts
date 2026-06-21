import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The embedded CMS and API routes should not be indexed.
      disallow: ["/studio", "/api/"],
    },
    sitemap: "https://finmagix.com/sitemap.xml",
  };
}
