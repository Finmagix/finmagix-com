// /platform rebuild — Section 2: What Finmagix is (centered statement).

import ScrollReveal from "@/components/home/ScrollReveal";

export default function PlatformWhatFinmagixIs() {
  return (
    <section className="pf-whatis">
      <div className="pf-wrap">
        <ScrollReveal as="span" className="pf-eyebrow pf-whatis__eyebrow">
          What Finmagix is
        </ScrollReveal>
        <ScrollReveal as="h2" className="pf-whatis__h2">
          A structured-thinking platform for personal financial decisions.
        </ScrollReveal>
        <ScrollReveal as="p" className="pf-whatis__p">
          Not an advisor. Not a robo. Not a 200-question intake before you get
          any value. Just kind structure, honest perspective, and a small thing
          worth thinking about this week.
        </ScrollReveal>
      </div>
    </section>
  );
}
