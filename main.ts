// Fortune Cookie Wisdom for Developers — make.fun entry
// (u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
//
// Writes a single original line of fortune-cookie wisdom for a software
// developer (one sentence, <= 120 chars) to /output/entry.txt.
// Deterministic: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. One balanced sentence in fortune-cookie voice: a developer's
// honest estimate meets a codebase with plans of its own.
const LINE =
  "Your estimate was honest; the codebase simply had other plans for your week.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
