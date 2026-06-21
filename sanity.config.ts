import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

// Configuration for the Studio embedded at /studio in the Next app.
// Imports use relative paths (not the "@/" alias) so the Sanity CLI —
// which loads this file outside Next's bundler for `sanity` commands —
// resolves them correctly.
export default defineConfig({
  name: "finmagix-blog",
  title: "Finmagix Blog",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is a GROQ playground for the author/developer to test queries.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
