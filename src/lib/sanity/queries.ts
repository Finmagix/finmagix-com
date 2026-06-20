import { defineQuery } from "next-sanity";

// Shared projection for post cards (index, category pages).
const POST_CARD_FIELDS = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "author": author->{name},
  "categories": categories[]->{title, "slug": slug.current}
`;

// Only published posts, with a real slug, not scheduled in the future.
const PUBLISHED_POST = `_type == "post" && status == "published" && defined(slug.current) && publishedAt <= now()`;

export const POSTS_QUERY = defineQuery(
  `*[${PUBLISHED_POST}] | order(publishedAt desc){${POST_CARD_FIELDS}}`,
);

export const POST_SLUGS_QUERY = defineQuery(
  `*[_type == "post" && status == "published" && defined(slug.current)].slug.current`,
);

export const POST_QUERY = defineQuery(`*[
  _type == "post" && status == "published" && slug.current == $slug
][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  body,
  "author": author->{name, image, bio},
  "categories": categories[]->{title, "slug": slug.current}
}`);

export const CATEGORIES_QUERY = defineQuery(
  `*[_type == "category" && defined(slug.current)] | order(title asc){
    _id, title, "slug": slug.current, description
  }`,
);

export const CATEGORY_SLUGS_QUERY = defineQuery(
  `*[_type == "category" && defined(slug.current)].slug.current`,
);

export const CATEGORY_QUERY = defineQuery(
  `*[_type == "category" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, description
  }`,
);

export const POSTS_BY_CATEGORY_QUERY = defineQuery(`*[
  ${PUBLISHED_POST} && $slug in categories[]->slug.current
] | order(publishedAt desc){${POST_CARD_FIELDS}}`);

// Latest posts for the RSS feed (excerpt only — keeps the feed light;
// readers click through for the full post).
export const RSS_POSTS_QUERY = defineQuery(`*[
  ${PUBLISHED_POST}
] | order(publishedAt desc)[0...50]{
  title, "slug": slug.current, excerpt, publishedAt
}`);
