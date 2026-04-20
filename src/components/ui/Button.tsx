import type { CSSProperties, ReactNode, MouseEventHandler } from "react";
import Link from "next/link";

export type ButtonVariant = "lime" | "outline" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: "_blank" | "_self";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

const SIZE_STYLES: Record<ButtonSize, CSSProperties> = {
  sm: { padding: "9px 18px", fontSize: 13 },
  md: { padding: "12px 24px", fontSize: 14 },
  lg: { padding: "14px 32px", fontSize: 16 },
};

const VARIANT_STYLES: Record<ButtonVariant, CSSProperties> = {
  lime: {
    background: "var(--lime)",
    color: "var(--deep)",
    border: "1px solid var(--lime)",
  },
  outline: {
    background: "transparent",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.55)",
  },
  dark: {
    background: "var(--deep)",
    color: "#ffffff",
    border: "1px solid var(--deep)",
  },
};

export default function Button({
  variant = "lime",
  size = "md",
  href,
  target,
  onClick,
  children,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 40,
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    fontWeight: 500,
    lineHeight: 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "filter 0.18s ease, background 0.18s ease, color 0.18s ease",
    cursor: "pointer",
    ...SIZE_STYLES[size],
    ...VARIANT_STYLES[variant],
  };

  if (href) {
    const external = target === "_blank" || /^https?:\/\//.test(href);
    if (external) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          style={style}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
