// Home page — production composition (2026-06-06 rebuild).
//
// Rebuilt per the founder handoff brief (Redesign of Home Page_060626).
// All visible copy is verbatim from the approved finmagix-home.html
// mockup; layout, tokens, and motion mirror the brief's spec.
//
// Section components live in src/components/home/ and are wrapped
// in a `.home-rebuild` div so the --home-* color tokens, Hanken
// Grotesk body font, paper-grain noise overlay, and all other
// scoped styles in globals.css apply only on this surface (other
// pages keep their existing tokens untouched).
//
// The previous /home-rebuild test route was the staging surface
// for QA — it's removed in this commit since / now renders the
// same composition.
//
// The legacy src/components/marketing/* components used by the
// prior v7 hero are no longer imported but are left in place so
// the diff stays scoped to home composition. They can be removed
// in a follow-up cleanup once the rebuild is stable.

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

export default function Home() {
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
