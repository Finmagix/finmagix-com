/**
 * Seeds the eight confirmed blog categories (session-02 brief).
 *
 * Run with the Sanity CLI — uses your CLI login, so there is no write token
 * to manage:
 *
 *   npx sanity exec scripts/seed-categories.ts --with-user-token
 *
 * Idempotent: createIfNotExists is keyed by a stable _id, so re-running is
 * safe and never duplicates or overwrites titles/descriptions you have
 * since edited in the Studio.
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient();

const categories = [
  { slug: "financial-fitness", title: "Financial Fitness" },
  { slug: "college-planning", title: "College Planning" },
  { slug: "debt", title: "Debt" },
  { slug: "retirement", title: "Retirement" },
  { slug: "taxes", title: "Taxes" },
  { slug: "insurance-and-protection", title: "Insurance & Protection" },
  { slug: "saving-and-investing-basics", title: "Saving & Investing Basics" },
  { slug: "life-events", title: "Life Events" },
];

async function seed() {
  for (const { slug, title } of categories) {
    await client.createIfNotExists({
      _id: `category-${slug}`,
      _type: "category",
      title,
      slug: { _type: "slug", current: slug },
    });
    console.log(`✓ ensured category: ${title}`);
  }
  console.log(`\nDone — ${categories.length} categories ensured.`);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
