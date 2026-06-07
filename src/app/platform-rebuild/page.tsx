// /platform rebuild — staging route.
//
// Mounts the new platform/* components under the same .home-rebuild
// wrapper that scopes the paper surface, Hanken Grotesk body font,
// and noise overlay. All copy verbatim from finmagix-platform-full.html
// per the brief.
//
// After founder QA, src/app/platform/page.tsx will swap to render
// the same composition and this staging route can be removed.

import type { Metadata } from "next";
import PlatformHero from "@/components/platform/Hero";
import PlatformWhatFinmagixIs from "@/components/platform/WhatFinmagixIs";
import PlatformHowItWorks from "@/components/platform/HowItWorks";
import PlatformWhatsInside from "@/components/platform/WhatsInside";
import PlatformWhatWeWontDo from "@/components/platform/WhatWeWontDo";
import PlatformThePromise from "@/components/platform/ThePromise";
import PlatformFinalCTA from "@/components/platform/FinalCTA";
import PlatformDisclaimer from "@/components/platform/Disclaimer";

export const metadata: Metadata = {
  title: "Platform rebuild preview",
  description:
    "Internal preview of the rebuilt Finmagix Platform page. Not for public traffic.",
  robots: { index: false, follow: false },
};

export default function PlatformRebuildPreview() {
  return (
    <div className="home-rebuild">
      {/* Top notice strip — matches the mockup's topbar. */}
      <div className="pf-topbar">
        Inspired by CFP &amp; CFA planning principles ·{" "}
        <b>Free to start — no credit card</b>
      </div>
      <PlatformHero />
      <PlatformWhatFinmagixIs />
      <PlatformHowItWorks />
      <PlatformWhatsInside />
      <PlatformWhatWeWontDo />
      <PlatformThePromise />
      <PlatformFinalCTA />
      <PlatformDisclaimer />
    </div>
  );
}
