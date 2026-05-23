// Home page. Composes the 9 marketing sections per Session 01.
// See docs/CLAUDE_CODE_HANDOFF.md § 5 for the canonical section list.
//
// The page is a Server Component — all interactive bits (NavBar's
// hamburger menu) are isolated in their own Client Component
// boundaries. <main id="main"> is provided by src/app/layout.tsx
// for the skip-to-content target.

import Hero from "@/components/marketing/Hero";
import EmpathyBand from "@/components/marketing/EmpathyBand";
import ValueProps from "@/components/marketing/ValueProps";
import HowItWorks from "@/components/marketing/HowItWorks";
import UnderTheHood from "@/components/marketing/UnderTheHood";
import Testimonial from "@/components/marketing/Testimonial";
import ModulesPreview from "@/components/marketing/ModulesPreview";
import PartnerStrip from "@/components/marketing/PartnerStrip";
import ClosingCTA from "@/components/marketing/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <EmpathyBand />
      <ValueProps />
      <HowItWorks />
      <UnderTheHood />
      <Testimonial />
      <ModulesPreview />
      <PartnerStrip />
      <ClosingCTA />
    </>
  );
}
