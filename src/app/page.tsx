// Home page. Composes the marketing sections.
//
// 2026-05-25 reorder:
//   - ModulesShowcase (the 12-tile module flip grid, formerly named
//     ClosingCTA) moved up to sit between Comparison and HowItWorks.
//   - ModulesPreview (the standalone "Twelve sides of your financial
//     life" 3-card section) removed entirely — its role is subsumed
//     by ModulesShowcase, which surfaces all twelve modules.
//   - PartnerStrip is now the last section before the footer; the
//     page no longer has a dedicated closing CTA. The persistent
//     <Disclosure> in the footer handles the end-of-page closure.
//
// See docs/CLAUDE_CODE_HANDOFF.md § 5 for the original section list.
//
// The page is a Server Component — all interactive bits (NavBar's
// hamburger menu) are isolated in their own Client Component
// boundaries. <main id="main"> is provided by src/app/layout.tsx
// for the skip-to-content target.

import Hero from "@/components/marketing/Hero";
import ProofStrip from "@/components/marketing/ProofStrip";
import Comparison from "@/components/marketing/Comparison";
import ModulesShowcase from "@/components/marketing/ModulesShowcase";
import HowItWorks from "@/components/marketing/HowItWorks";
import PlatformPreview from "@/components/marketing/PlatformPreview";
import UnderTheHood from "@/components/marketing/UnderTheHood";
import Testimonial from "@/components/marketing/Testimonial";
import PartnerStrip from "@/components/marketing/PartnerStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ModulesShowcase />
      <Comparison />
      <HowItWorks />
      <PlatformPreview />
      <UnderTheHood />
      <Testimonial />
      <PartnerStrip />
    </>
  );
}
