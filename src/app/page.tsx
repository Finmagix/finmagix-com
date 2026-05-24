// Home page. Composes the 9 marketing sections per Session 01.
// See docs/CLAUDE_CODE_HANDOFF.md § 5 for the canonical section list.
//
// The page is a Server Component — all interactive bits (NavBar's
// hamburger menu) are isolated in their own Client Component
// boundaries. <main id="main"> is provided by src/app/layout.tsx
// for the skip-to-content target.

import Hero from "@/components/marketing/Hero";
import ProofStrip from "@/components/marketing/ProofStrip";
import HowItWorks from "@/components/marketing/HowItWorks";
import PlatformPreview from "@/components/marketing/PlatformPreview";
import UnderTheHood from "@/components/marketing/UnderTheHood";
import Testimonial from "@/components/marketing/Testimonial";
import ModulesPreview from "@/components/marketing/ModulesPreview";
import PartnerStrip from "@/components/marketing/PartnerStrip";
import ClosingCTA from "@/components/marketing/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <HowItWorks />
      <PlatformPreview />
      <UnderTheHood />
      <Testimonial />
      <ModulesPreview />
      <PartnerStrip />
      <ClosingCTA />
    </>
  );
}
