import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { SANITY_TAG } from "@/lib/sanity/fetch";

// Sanity publish webhook -> on-demand revalidation. Configure a webhook in
// the Sanity project (Manage -> API -> Webhooks) pointing at
// /api/revalidate, projecting at least `{ _type }`, with a secret that
// matches SANITY_REVALIDATE_SECRET in Vercel. parseBody validates the
// signature (and waits for Content Lake consistency) before we revalidate.
//
// Secure by default: if the secret is unset, isValidSignature is null and
// the request is rejected — nothing revalidates without a configured secret.
type WebhookPayload = { _type?: string };

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }
    if (!body?._type) {
      return new Response("Bad request: missing _type", { status: 400 });
    }

    // Broad tag refreshes every blog read; the per-type tag is there for
    // finer-grained invalidation later. The "max" profile gives the longest
    // stale-while-revalidate window (Next 16 requires the profile argument).
    revalidateTag(SANITY_TAG, "max");
    revalidateTag(body._type, "max");

    return NextResponse.json({
      revalidated: true,
      type: body._type,
      now: Date.now(),
    });
  } catch (err) {
    console.error("[revalidate] webhook error:", err);
    return new Response("Internal error", { status: 500 });
  }
}
