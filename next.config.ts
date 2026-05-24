import type { NextConfig } from "next";

// Marketing site config. Redirects per docs/CLAUDE_CODE_HANDOFF.md
// "Migration order" step 3 (set up before adding new routes that
// supersede old ones).
//
// 308 permanent redirects (the default for `permanent: true`) signal
// to search engines that the old URLs have moved permanently.

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/demo",
        destination: "/platform",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-and-security",
        permanent: true,
      },
      {
        source: "/security",
        destination: "/privacy-and-security",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
