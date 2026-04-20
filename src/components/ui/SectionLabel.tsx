import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  tone?: "light" | "dark";
}

export default function SectionLabel({
  children,
  tone = "light",
}: SectionLabelProps) {
  return (
    <p
      style={{
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: tone === "dark" ? "var(--lime)" : "var(--sage)",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}
