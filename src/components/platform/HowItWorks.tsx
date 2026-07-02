// /platform rebuild — Section 3: How it works (6 steps).
// Verbatim copy from finmagix-platform-full.html.

import Image from "next/image";
import ScrollReveal from "@/components/home/ScrollReveal";

type FeatureProps = {
  step: string;
  title: string;
  lead: string;
  caption: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  imageLeft?: boolean;
};

function Feature({
  step,
  title,
  lead,
  caption,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  imageLeft = false,
}: FeatureProps) {
  const text = (
    <ScrollReveal className="pf-feature__text">
      <span className="pf-flabel">
        <span className="pf-flabel__sn">{step}</span>
        How it works
      </span>
      <h3 className="pf-feature__h3">{title}</h3>
      <p className="pf-feature__lead">{lead}</p>
      <p className="pf-feature__cap">{caption}</p>
    </ScrollReveal>
  );
  const shot = (
    <ScrollReveal className="pf-feature__shot">
      <figure className="pf-shot">
        <span className="pf-sample" aria-label="Sample data, for illustration">
          Sample
        </span>
        <div className="pf-shot__bar">
          <i />
          <i />
          <i />
          <span className="pf-shot__url">lite.finmagix.com</span>
        </div>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          sizes="(max-width: 880px) 100vw, 560px"
        />
      </figure>
    </ScrollReveal>
  );
  return (
    <div className={`pf-feature${imageLeft ? " pf-feature--rev" : ""}`}>
      {imageLeft ? (
        <>
          {shot}
          {text}
        </>
      ) : (
        <>
          {text}
          {shot}
        </>
      )}
    </div>
  );
}

export default function PlatformHowItWorks() {
  return (
    <section className="pf-sec" id="how">
      <div className="pf-wrap">
        <ScrollReveal className="pf-sec-head">
          <span className="pf-eyebrow">How it works</span>
          <h2 className="pf-sec-head__h2">
            Six small steps.{" "}
            <span className="pf-serif-em">Nothing demanding.</span>
          </h2>
          <p className="pf-lede">
            From a three-minute intake to a structured read of your financial
            life. You move at your pace.
          </p>
        </ScrollReveal>

        {/* Step 1 — text-only, matches the inline label pattern used by
            the other steps (clay circle + "How it works", no card wrapper). */}
        <ScrollReveal className="pf-step-one">
          <span className="pf-flabel">
            <span className="pf-flabel__sn">1</span>
            How it works
          </span>
          <h3 className="pf-step-one__h3">Tell us a little.</h3>
          <p className="pf-step-one__p">
            Up to ten short questions. About three minutes. Skip what you
            want.
          </p>
        </ScrollReveal>
      </div>

      <div className="pf-wrap">
        {/* Step 2 — text-left, image-right (welcome screen) */}
        <Feature
          step="2"
          title="We point you somewhere to start."
          lead="Based on what you told us, we suggest up to five places to start — the ones people in similar spots often find useful first. You can ignore us. You can start anywhere."
          caption="Your dashboard — we call it Your Quiet Index — shows where you've explored, what scored where, and where the next interesting thread might be. No streaks. No shame. Just a clean read of where you are."
          imgSrc="/platform/welcome-john.jpg"
          imgAlt="Finmagix welcome screen — 'Good to have you here, John' with a green banner, two starter modules in 'Get the lay of the land', and a 'Cover the bases' section listing Protection & Insurance, Debt Strategy, Social Security Planner, College Planning, and Estate & Legacy Planner."
          imgWidth={1400}
          imgHeight={1978}
        />

        {/* Step 3 — image-left, text-right (fitness overview) */}
        <Feature
          step="3"
          title="Run a module."
          lead="Five to fifteen minutes. Each one gives you a structured read of one slice of your financial picture."
          caption="Intuitive charts that show where you stand. Six dimensions of financial fitness, with how you compare to the average American at your age."
          imgSrc="/product/fitness-overview.png"
          imgAlt="Financial Fitness Overview — a radar chart of six dimensions, an overall score gauge, and bar charts comparing your scores to peers."
          imgWidth={895}
          imgHeight={730}
          imageLeft
        />

        {/* Step 4 — centered, two phones */}
        <ScrollReveal as="div" className="pf-results">
          <span className="pf-flabel pf-flabel--centered">
            <span className="pf-flabel__sn">4</span>
            How it works
          </span>
          <h3 className="pf-results__h3">Review your Results.</h3>
          <p className="pf-results__sub">
            Finmagix will display your results using intuitive charts and
            graphs. You can also review a PDF summary.
          </p>
          <div className="pf-phones">
            <div className="pf-phone">
              <span className="pf-sample" aria-label="Sample data, for illustration">
                Sample
              </span>
              <Image
                src="/platform/phone-1.png"
                alt="Phone screen showing Net Worth — $70,000 — with a Score Breakdown listing Savings Rate 22/22, Liquidity 6/15, Net Worth 4/20, Retirement 8/25, Risk Protection 0/10, and Estate Planning 0/8."
                width={720}
                height={1279}
                sizes="(max-width: 720px) 100vw, 300px"
              />
            </div>
            <div className="pf-phone">
              <span className="pf-sample" aria-label="Sample data, for illustration">
                Sample
              </span>
              <Image
                src="/platform/phone-2.png"
                alt="Phone screen showing Projected Portfolio at Retirement — $738,846 at age 65 in today's dollars — with a Portfolio Growth Projection chart and an Applied withdrawal rate of 3.75% (25–35 year horizon)."
                width={720}
                height={1279}
                sizes="(max-width: 720px) 100vw, 300px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Step 5 — text-left, image-right (Finmagician's read) */}
        <Feature
          step="5"
          title="Read the Finmagician's (your AI friend's) analysis."
          lead={
            'After every analysis, you get a human-language summary. Not a list of "next steps." Not a sales pitch. A read of your situation, with paths worth thinking about and what to watch for.'
          }
          caption="Explicit assumptions. Alternative paths. Honest limitations. Always for thinking, not prescribing."
          imgSrc="/product/finmagicians-read.png"
          imgAlt="The Finmagician's read for Social Security — a structured snapshot, the case for claiming at 67, and things to watch."
          imgWidth={765}
          imgHeight={842}
        />

        {/* Step 6 — image-left, text-right (bigger picture) */}
        <Feature
          step="6"
          title="See the bigger picture."
          lead="Once you've run a couple of modules, we surface what they confirm, where they pull in different directions, and what we still don't know enough to speak to. We don't pick winners. You do."
          caption="Scores at a glance across everything you've run, where things converge and pull apart, and a ranked list of areas worth thinking about next."
          imgSrc="/product/bigger-picture.png"
          imgAlt="Cross-module summary — scores across eight assessments, key findings, and a ranked list of priority areas to explore."
          imgWidth={657}
          imgHeight={769}
          imageLeft
        />
      </div>
    </section>
  );
}
