// Advisors — featured advisor cards.
//
// Source: prototype/site/pages/other-pages.jsx AdvisorsPage. Replaces
// WS-2 /advisors placeholder.
//
// Featured advisors (in order):
//   1. William Tincup — workplace, HR, and talent-acquisition analyst.
//      Founder decision F1 (May 2026): use the prototype's 4-paragraph
//      bio (concise, Finmagix-relevant), NOT the longer discursive
//      version in prototype/uploads/William Tincup - 2025 Bio (2).docx.
//   2. Prashant Palsokar — senior engineering executive (added
//      2026-06-03). Founder-supplied bio + photo; labeled "Technology
//      advisor" to differentiate his engineering / AI focus from
//      Tincup's "Strategic advisor" label. Consolidated to 4
//      paragraphs to match Tincup's pacing.

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our advisors",
  description:
    "The professionals who shape our principles — and challenge our thinking. William Tincup on workplace financial wellness, Prashant Palsokar on AI, engineering org design, and fintech platform development.",
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

        {/* Featured advisor — Prashant Palsokar */}
        <article className="advisor-feature">
          <div className="advisor-feature__photo">
            <Image
              src="/advisors/prashant-palsokar.jpg"
              alt="Prashant Palsokar, mid-shot portrait in a white shirt with dark-framed round glasses, photographed in warm interior light with abstract green-toned artwork behind him."
              fill
              sizes="(max-width: 720px) 280px, 320px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="advisor-feature__body">
            <div className="advisor-feature__label">Technology advisor</div>
            <h2 className="advisor-feature__name">Prashant Palsokar</h2>
            <div className="advisor-feature__creds">
              M.Eng. Computer Science · Cornell University
            </div>
            <div className="advisor-feature__role">
              Sr. Engineering Manager · Meta
              <br />
              Past CTO · Finmagix
            </div>

            <div className="advisor-feature__bio">
              <p>
                Palsokar is a senior engineering executive with extensive experience building product, platform, and AI-driven engineering organizations across fintech, healthcare, and enterprise software.
              </p>
              <p>
                Prashant&apos;s fintech experience spans both operator and advisory roles. As{" "}
                <strong>past CTO at Finmagix</strong>, he partnered with the founder to build architecture, staffing and development and product strategy while assisting with go-to-market across B2C and B2B2C channels. Earlier in his career he led technical delivery at Mindspan Systems for clients including State Street Bank and built financial and options modeling applications. At NIIT he developed reporting and financial applications for SEI Investments. Across his broader career he has been a VP Engineering at Y Media Labs (Stagwell Group, NASDAQ: STGW) and Director of Engineering at Ciitizen — an a16z- and Google-backed platform later acquired by Invitae.
              </p>
              <p>
                Most recently he has been a{" "}
                <strong>Sr. Engineering Manager at Meta</strong>, working on AI-driven detection and scaling of frameworks to prevent a multitude of harms on Instagram, including school shootings, extortion and drug sales.
              </p>
              <p>
                He has consistently operated at the intersection of regulated data environments, complex integrations, and high-stakes product delivery. Prashant holds a Master of Engineering in Computer Science from Cornell University, brings advisory depth in AI and ML product architecture, engineering org design, fintech platform development, and scaling technical teams, and is based in San Francisco.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
