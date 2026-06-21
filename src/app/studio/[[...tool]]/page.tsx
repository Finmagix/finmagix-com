import Studio from "./Studio";

// The Studio is a single-page app rendered client-side (the heavy `sanity`
// import lives in the "use client" Studio wrapper, so it never evaluates in
// the RSC/server graph). force-static keeps Next from dynamically rendering
// the shell; its marketing chrome is omitted by SiteShell. metadata/viewport
// from next-sanity set robots: noindex and the correct mobile viewport.
export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
