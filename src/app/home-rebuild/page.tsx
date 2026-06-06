// Home page rebuild — test/preview route.
//
// Mounts all 14 new home/* section components under a `.home-rebuild`
// wrapper. All visible copy is verbatim from finmagix-home.html per
// the founder handoff brief 2026-06-06.
//
// Once the rebuild is approved on
// preview.finmagix.com/home-rebuild, src/app/page.tsx will swap to
// use these same components and this test route can be deleted.

import type { Metadata } from "next";
import HomeHero from "@/components/home/Hero";
import HomeSampleOutput from "@/components/home/SampleOutput";
import HomeWhatYouGet from "@/components/home/WhatYouGet";
import HomeSocialProof from "@/components/home/SocialProof";
import HomeTrustBand from "@/components/home/TrustBand";
import HomeWhoThisIsFor from "@/components/home/WhoThisIsFor";
import HomeHowItWorks from "@/components/home/HowItWorks";
import HomeComparisonTable from "@/components/home/ComparisonTable";
import HomeJourneyStages from "@/components/home/JourneyStages";
import HomeTwelveModules from "@/components/home/TwelveModules";
import HomeUnderTheHood from "@/components/home/UnderTheHood";
import HomeForPartners from "@/components/home/ForPartners";
import HomeFinalCTA from "@/components/home/FinalCTA";
import HomeStickyCTA from "@/components/home/StickyCTA";

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
      <HomeSampleOutput />
      <HomeWhatYouGet />
      <HomeSocialProof />
      <HomeTrustBand />
      <HomeWhoThisIsFor />
      <HomeHowItWorks />
      <HomeComparisonTable />
      <HomeJourneyStages />
      <HomeTwelveModules />
      <HomeUnderTheHood />
      <HomeForPartners />
      <HomeFinalCTA />
      <HomeStickyCTA />
    </div>
  );
}
