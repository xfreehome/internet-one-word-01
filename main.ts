// The Internet in One Word — make.fun bounty entry
// Writes a single word describing the whole internet
// to /output/entry.txt (gate: UTF-8, 1-30 chars, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Doomscroll";

if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  console.error("Gate failed: entry must be 1-30 non-whitespace characters");
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`Wrote entry: ${WORD} (${WORD.length} chars)`);
