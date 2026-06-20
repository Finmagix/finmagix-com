import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

// Builds CDN URLs for Sanity images with on-the-fly transforms.
// Built from { projectId, dataset } rather than the client so this stays
// a thin, dependency-light helper usable anywhere.
const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).auto("format").fit("max");
}

// Intrinsic dimensions are encoded in the Sanity asset _ref
// (e.g. `image-abc123-1600x1200-jpg`). Parsing them lets next/image set a
// correct aspect ratio with no extra GROQ round-trip — preventing layout
// shift without distorting the image.
export function imageDimensions(
  source: unknown,
): { width: number; height: number } | undefined {
  const ref = (source as { asset?: { _ref?: string } } | null | undefined)
    ?.asset?._ref;
  if (!ref) return undefined;
  const match = /-(\d+)x(\d+)-/.exec(ref);
  if (!match) return undefined;
  return { width: Number(match[1]), height: Number(match[2]) };
}
