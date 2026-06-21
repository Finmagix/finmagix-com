import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

import { imageDimensions, urlForImage } from "@/lib/sanity/image";

// Renders a post's Portable Text body into the site's design system.
// Headings/lists/quotes/links are styled by the .post-body rules in
// globals.css; inline images go through next/image with their intrinsic
// aspect ratio and required alt text.
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const img = value as { asset?: { _ref?: string }; alt?: string };
      const dims = imageDimensions(img);
      if (!img?.asset?._ref || !dims) return null;
      const url = urlForImage(img).width(Math.min(dims.width, 1600)).url();
      return (
        <figure className="post-figure">
          <Image
            src={url}
            alt={img.alt || ""}
            width={dims.width}
            height={dims.height}
            sizes="(max-width: 800px) 100vw, 720px"
            className="post-figure__img"
          />
          {img.alt ? (
            <figcaption className="post-figure__cap">{img.alt}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = (value as { href?: string })?.href || "#";
      const external = /^https?:\/\//.test(href);
      return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export default function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="post-body">
      <PortableText value={value} components={components} />
    </div>
  );
}
