import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

// Curated category document. The author can add a new category in the
// Studio with no code change; references (not free-form tags) keep the
// set consistent rather than fragmenting. Per session-02 brief scope:
// flat, curated categories only — no nesting, no per-category access.
export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 2,
      description:
        "Optional short description shown on the category landing page.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
