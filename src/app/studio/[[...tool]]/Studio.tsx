"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

// Client boundary for the embedded Studio. Keeping the `sanity` config
// import here (not in the server page) ensures the Studio's React.createContext
// usage only evaluates in the client graph — otherwise Next tries to collect
// it in the RSC/server graph and throws "createContext is not a function".
export default function Studio() {
  return <NextStudio config={config} />;
}
