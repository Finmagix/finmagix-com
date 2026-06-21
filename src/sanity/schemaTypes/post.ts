import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

// Blog post document.
//
// `status` (draft/published) is an EDITORIAL CONVENIENCE ONLY — it lets
// the author keep an unfinished post hidden from the public site. It is
// NOT a compliance gate: flipping it to "published" makes the post live
// immediately, and nothing in software can block that. (See the brief's
// Compliance check: publication is intentionally not software-gated.)
export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      description:
        'Editorial convenience only. "Published" makes the post public; "Draft" keeps it hidden. This is not a compliance gate.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description:
        "Short summary used on cards, in search-engine results, and in the RSS feed.",
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      status: "status",
    },
    prepare({ title, author, media, status }) {
      const state = status === "published" ? "● Published" : "○ Draft";
      return {
        title,
        subtitle: [state, author ? `by ${author}` : null]
          .filter(Boolean)
          .join("  ·  "),
        media,
      };
    },
  },
});
