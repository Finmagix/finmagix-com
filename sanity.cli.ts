import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./src/sanity/env";

// Used by the `sanity` CLI (e.g. `npx sanity deploy`, `sanity dataset`,
// `sanity cors`, `sanity typegen`). The embedded Studio itself is served
// by Next.js at /studio; this config is for command-line management.
export default defineCliConfig({
  api: { projectId, dataset },
  autoUpdates: true,
});
