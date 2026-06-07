// Finmagix Platform — founder-approved 2026-06-07 rebuild.
//
// Source of truth: finmagix-platform-full.html in the
// "Redesign of Platform Page.zip" handoff. All visible copy is
// verbatim from that mockup. Composition + section order match
// the brief; mounted under the same .home-rebuild wrapper that
// scopes paper + Hanken Grotesk + noise overlay.
//
// Replaces the prior Session 02 long-form narrative product story
// (Our_Platform.docx era). The "What Finmagix is" section was
// dropped in feedback round 2; "Five" → "Six small steps" in the
// How it works heading.

import type { Metadata } from "next";
import PlatformHero from "@/components/platform/Hero";
import PlatformHowItWorks from "@/components/platform/HowItWorks";
import PlatformWhatsInside from "@/components/platform/WhatsInside";
import PlatformWhatWeWontDo from "@/components/platform/WhatWeWontDo";
import PlatformThePromise from "@/components/platform/ThePromise";
import PlatformFinalCTA from "@/components/platform/FinalCTA";
import PlatformDisclaimer from "@/components/platform/Disclaimer";

export const metadata: Metadata = {
  title: "Finmagix Platform",
  description:
    "The thinking of a financial planner, finally priced for the rest of us. Twelve AI-driven modules informed by CFP and CFA principles.",
};

export default function PlatformPage() {
  return (
    <div className="home-rebuild">
      {/* Top notice strip — matches the mockup's topbar. */}
      <div className="pf-topbar">
        Inspired by CFP &amp; CFA planning principles ·{" "}
        <b>Free to start — no credit card</b>
      </div>
      <PlatformHero />
      <PlatformHowItWorks />
      <PlatformWhatsInside />
      <PlatformWhatWeWontDo />
      <PlatformThePromise />
      <PlatformFinalCTA />
      <PlatformDisclaimer />
    </div>
  );
}
