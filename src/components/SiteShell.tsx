"use client";

import { usePathname } from "next/navigation";

import NavBar from "./NavBar";
import Footer from "./Footer";

// Conditionally renders the marketing chrome (skip link, nav, footer).
// The embedded Sanity Studio at /studio is a full-screen application and
// must render WITHOUT the marketing chrome, so we omit it there. This keeps
// a single root layout — no route-group restructuring of existing pages.
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
