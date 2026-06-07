// /platform rebuild — Section 6: The promise (centered pull quote).
// Verbatim from finmagix-platform-full.html.

import ScrollReveal from "@/components/home/ScrollReveal";

export default function PlatformThePromise() {
  return (
    <section className="pf-promise">
      <div className="pf-wrap">
        <ScrollReveal>
          <span className="pf-eyebrow">The promise</span>
          <blockquote className="pf-promise__quote">
            &ldquo;It&apos;s like having a friend who actually{" "}
            <em>understands money</em> — and won&apos;t make you feel dumb for
            asking.&rdquo;
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
