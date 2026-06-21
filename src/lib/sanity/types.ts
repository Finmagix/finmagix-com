import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";

// A Sanity image with our schema's custom `alt` field alongside the asset.
export type SanityImage = SanityImageSource & { alt?: string | null };

export interface CategoryRef {
  title: string;
  slug: string;
}

// Shape returned by POST_CARD_FIELDS (index + category listings).
export interface PostCard {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  mainImage?: SanityImage | null;
  author?: { name: string } | null;
  categories?: CategoryRef[] | null;
}

// Full post (POST_QUERY).
export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  mainImage?: SanityImage | null;
  body?: PortableTextBlock[] | null;
  author?: {
    name: string;
    image?: SanityImage | null;
    bio?: string | null;
  } | null;
  categories?: CategoryRef[] | null;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string | null;
}

export interface RssPost {
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
}
