// Part 4 forbidden-pattern gate for marketing copy.
//
// Scans src/ for phrases that strategy.md Part 4 / the counsel
// remediation forbid outright — the ones that should NEVER appear in
// any surface, in any framing. Deliberately conservative: it only
// matches affirmative forbidden claims, NOT the disclaimer negations
// in src/lib/legal.ts (e.g. "Finmagix does not provide personalized
// investment allocation percentages" is compliant and must not trip
// the gate). Broaden only with care to avoid false positives.
//
// Usage:  node scripts/check-compliance-copy.mjs
// Exit 0 = clean, exit 1 = one or more forbidden phrases found.
//
// Added session-06 (legal/compliance copy pass). Tracked in
// docs/tech-debt-marketing.md "CI grep gate for Part 4 forbidden patterns".

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = "src";
const EXTS = new Set([".ts", ".tsx", ".mdx"]);

// src/lib/legal.ts is the counsel-authored disclaimer source of truth: it
// enumerates the Part 4 prohibitions as explicit negations ("the Service
// does not provide personalized investment allocation percentages"), so it
// legitimately contains forbidden phrases in a compliant framing. It is
// gated separately (counsel review) and excluded here.
const EXCLUDE = new Set(["src/lib/legal.ts", "src\\lib\\legal.ts"]);

// Lines that are pure code comments are skipped — several components carry
// comments that quote a forbidden phrase specifically to warn against it.
const isComment = (line) => {
  const t = line.trim();
  return t.startsWith("//") || t.startsWith("*") || t.startsWith("/*");
};

// Each pattern is a phrase that is forbidden regardless of surrounding
// context. Keep these unambiguous so the gate stays false-positive-free.
const FORBIDDEN = [
  /\bCFP[-\s]?(grade|standard|certified|level|quality)\b/i,
  /\bCFA[-\s]?(grade|standard|certified|level|quality)\b/i,
  /\bAI[-\s]?powered financial planning\b/i,
  /\bas good as (a )?(financial )?(advisor|adviser|planner)\b/i,
  /\bguaranteed returns?\b/i,
  /\bbeat the market\b/i,
  /\brisk[-\s]?free returns?\b/i,
  /\bgrow your (wealth|money|savings|net worth)\b/i,
  /\b(we'?ll|we will) grow your\b/i,
  /\bget started in seconds\b/i,
  /\bpersonalized (investment )?(asset )?allocation\b(?![^.]*\bdoes not\b)/i,
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (EXTS.has(extname(p))) out.push(p);
  }
  return out;
}

let violations = 0;
for (const file of walk(ROOT)) {
  if (EXCLUDE.has(file.split("\\").join("/"))) continue;
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    if (isComment(line)) return;
    for (const re of FORBIDDEN) {
      const m = line.match(re);
      if (m) {
        violations++;
        console.error(`${file}:${i + 1}  forbidden phrase "${m[0]}"`);
        console.error(`    ${line.trim()}`);
      }
    }
  });
}

if (violations > 0) {
  console.error(`\n✗ ${violations} forbidden-phrase match(es) found.`);
  process.exit(1);
}
console.log("✓ compliance copy gate: no forbidden Part 4 phrases found.");
