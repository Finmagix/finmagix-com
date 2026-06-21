import type { StructureResolver } from "sanity/structure";

// Desk structure for the Studio — explicit, ordered lists for the three
// document types so the editing experience reads top-to-bottom: Posts,
// then the curated Categories, then Authors.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
