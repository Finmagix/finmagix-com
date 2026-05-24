// Advisors — William Tincup feature card.
//
// Source: prototype/site/pages/other-pages.jsx AdvisorsPage. Replaces
// WS-2 /advisors placeholder.
//
// Founder decision F1: use the prototype's 4-paragraph bio (concise,
// Finmagix-relevant), NOT the longer discursive version in the docx
// (prototype/uploads/William Tincup - 2025 Bio (2).docx).

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our advisors",
  description:
    "The professionals who shape our principles — and challenge our thinking. William Tincup, MBA, SHRM-SCP, SPHR, on the workplace-financial-wellness category.",
};

export default function AdvisorsPage() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="eyebrow">Our advisors</div>
        <h1
          className="t-page-title"
          style={{ marginTop: 16, marginBottom: 24, maxWidth: 820 }}
        >
          The professionals who shape our principles — and challenge our thinking.
        </h1>
        <p className="t-lede" style={{ maxWidth: 720 }}>
          Our advisors make us better every day, helping us build on our mission.
        </p>

        {/* Featured advisor — William Tincup */}
        <article className="advisor-feature">
          <div className="advisor-feature__photo">
            <Image
              src="/advisors/william-tincup.jpg"
              alt="William Tincup, smiling slightly, wearing a cream beanie with a leather patch reading 'Love Your Melon' and dark-framed glasses, photographed in warm indoor light."
              fill
              sizes="(max-width: 720px) 280px, 320px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="advisor-feature__body">
            <div className="advisor-feature__label">Strategic advisor</div>
            <h2 className="advisor-feature__name">William Tincup</h2>
            <div className="advisor-feature__creds">
              MBA, SHRM-SCP, SPHR
            </div>
            <div className="advisor-feature__role">
              Editor, Analyst, Advisor &amp; Host · WRKdefined
              <br />
              Venture Partner · Evergreen Mountain Equity Partners &amp; Future Wrk Ventures
            </div>

            <div className="advisor-feature__bio">
              <p>
                William is a workplace, HR, and talent-acquisition analyst with twenty-plus years studying how people work, how organizations support them, and how technology serves both. He is a co-founder of WRKdefined, a podcast network covering everything from onboarding and compensation to recruiting and safety, and a venture partner at two investment firms focused on the future of work.
              </p>
              <p>
                He sits on the boards of advisors of{" "}
                <strong>twenty-five-plus HR and workplace-tech companies</strong>, where he counsels founders on market positioning, go-to-market, messaging, pricing, partnerships, and product roadmap. He has been featured as an expert in the{" "}
                <em>NYT, WSJ, HBR, Fortune, MSNBC, CNN, Business Insider, Bloomberg, Fast Company, WIRED,</em> and the bulk of major HR publications.
              </p>
              <p>
                At Finmagix, William advises on{" "}
                <strong>the workplace-financial-wellness category</strong> — how the product fits into the employer-benefits ecosystem, how to talk to HR buyers without losing the plain-language voice that serves end users, and how to keep the line between an educational benefit and a regulated advice product visible to everyone involved.
              </p>
              <p>
                His academic background runs from a BA in Art History (University of Alabama at Birmingham) to an MA in American Indian Studies (Arizona) to an MBA (Case Western Reserve). He calls himself a{" "}
                <em>thought provocateur</em> — someone who looks at what is and keeps asking why. We agree.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
