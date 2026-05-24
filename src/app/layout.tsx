import type { Metadata } from "next";
import {
  Fraunces,
  DM_Sans,
  DM_Serif_Display,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Primary serif — headlines, section titles, card titles
// Variable font with opsz axis enables size-appropriate optical sizing
// via `font-variation-settings: 'opsz' N` in globals.css.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

// Primary sans — body, UI, navigation
const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

// LEGACY — preserved for WS-1/2/3 pages until each gets its own redesign
// session. The bare h1/h2/h3 rule in globals.css references --font-dm-serif.
// New marketing components use Fraunces via the .t-* utility classes.
// See docs/tech-debt-marketing.md "Other pages still on WS-2/WS-3 styling" —
// remove this import (and the legacy h1/h2/h3 rule) once all pages migrate.
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

// Mono — disclosure stamps, model tags, technical labels
const geistMono = Geist_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finmagix.com"),
  title: {
    default:
      "Finmagix — A plain-language thinking platform for your money",
    template: "%s · Finmagix",
  },
  description:
    "Twelve areas of structured financial thinking — retirement, tax, debt, estate, college, Social Security, and more — in plain language, with you in charge. Inspired by CFP and CFA frameworks.",
  openGraph: {
    title:
      "Finmagix — A plain-language thinking platform for your money",
    description:
      "Twelve areas of structured financial thinking — in plain language, with you in charge. Inspired by CFP and CFA frameworks.",
    url: "https://finmagix.com",
    siteName: "Finmagix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Finmagix — A plain-language thinking platform for your money",
    description:
      "Twelve areas of structured financial thinking — in plain language, with you in charge. Inspired by CFP and CFA frameworks.",
  },
  // Explicit icon declaration. Next.js auto-detects /src/app/icon.svg,
  // but spelling it out here (a) locks the MIME type, (b) bumps cache
  // by giving us a stable URL we control, and (c) prevents any fall-
  // back to Vercel's default favicon if the auto-detection ever drifts.
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${dmSerif.variable} ${geistMono.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
