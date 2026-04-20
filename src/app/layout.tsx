import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finmagix — Know Your Complete Financial Picture",
  description:
    "12 CFP-standard financial planning modules. Personalized roadmap. AI-powered insights. Start free.",
  openGraph: {
    title: "Finmagix — Know Your Complete Financial Picture",
    description:
      "12 CFP-standard financial planning modules. Personalized roadmap. AI-powered insights. Start free.",
    url: "https://finmagix.com",
    siteName: "Finmagix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
