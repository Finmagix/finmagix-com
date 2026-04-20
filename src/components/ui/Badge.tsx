import type { CSSProperties, ReactNode } from "react";

export type BadgeVariant = "lime" | "gold" | "sage" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  style?: CSSProperties;
}

const VARIANT_STYLES: Record<BadgeVariant, CSSProperties> = {
  lime: {
    background: "rgba(184,224,74,0.14)",
    color: "var(--lime)",
    border: "1px solid rgba(184,224,74,0.25)",
  },
  gold: {
    background: "rgba(200,168,75,0.15)",
    color: "var(--gold)",
    border: "1px solid rgba(200,168,75,0.3)",
  },
  sage: {
    background: "#f0f7f0",
    color: "var(--sage)",
    border: "1px solid rgba(61,107,66,0.15)",
  },
  outline: {
    background: "transparent",
    color: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(255,255,255,0.22)",
  },
};

export default function Badge({
  variant = "lime",
  children,
  style,
}: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 11px",
        borderRadius: 999,
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        lineHeight: 1.4,
        ...VARIANT_STYLES[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
