import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

// Simple author document — a single reference field on posts, per the
// brief's out-of-scope note (no author/user management beyond this).
export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "image",
      title: "Photo",
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
      name: "bio",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
});
