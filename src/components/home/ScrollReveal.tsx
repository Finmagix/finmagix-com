// Scroll-reveal client component — wraps children with a .home-rv
// class and switches to .home-rv.is-in when the element enters the
// viewport via IntersectionObserver. Mockup parity for the
// `.rv` → `.in` mechanic used throughout the brief.
//
// Respects prefers-reduced-motion via the CSS rule on .home-rv
// (transition: none + opacity: 1 when reduce is set).

"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Optional one-shot delay before the reveal triggers, in ms. */
  delay?: number;
  style?: React.CSSProperties;
};

export default function ScrollReveal({
  children,
  as,
  className = "",
  delay = 0,
  style,
}: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If the user prefers reduced motion, never animate — just show.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (delay > 0) {
            window.setTimeout(() => entry.target.classList.add("is-in"), delay);
          } else {
            entry.target.classList.add("is-in");
          }
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      className={`home-rv ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
