// Home page rebuild — test/preview route.
//
// Mounts the new home/* components under a `.home-rebuild` wrapper
// so the design-system tokens scoped to that class (--home-paper
// background, Hanken Grotesk body font, paper-grain overlay) apply
// here without leaking onto the existing / route.
//
// Once the rebuild is approved (founder QA on
// preview.finmagix.com/home-rebuild), src/app/page.tsx will be
// updated to use these same components and this test route can
// be deleted.

import type { Metadata } from "next";
import HomeHero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Home rebuild preview",
  description:
    "Internal preview of the rebuilt Finmagix marketing home page. Not for public traffic.",
  // No-index this preview route so search engines never list it.
  robots: { index: false, follow: false },
};

export default function HomeRebuildPreview() {
  return (
    <div className="home-rebuild">
      <HomeHero />
      {/* Phases 3-9 components mount here as they're built:
          SampleOutput, WhatYouGet, SocialProof, TrustBand,
          WhoThisIsFor, HowItWorks, ComparisonTable, JourneyStages,
          TwelveModules, UnderTheHood, ForPartners, FinalCTA,
          StickyCTA. */}
    </div>
  );
}
