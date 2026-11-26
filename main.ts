// office-artifacts — make.fun "Office Artifacts: The One-Line Placard Contest"
// Writes the single-line museum placard entry to <output>/entry.txt
// (default /output, overridable with MAKEFUN_OUTPUT_DIR for local testing).
// Node 22, standard library only; deterministic, no network. The program
// enforces the bounty's 1-180 character gate before writing, then reads the
// file back and fails loudly if the written text differs by even one byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a one-line museum placard for an ordinary office stapler,
// reframed as an ancient ritual object. 147 characters.
const ENTRY =
  "Stapler, c. 2024. Pressed steel. Employed in the Rite of Binding, joining two sheets irrevocably before witnesses. Gift of the Accounts Department.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 180;

if (ENTRY.length < MIN_LENGTH || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${ENTRY.length}.`
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, ENTRY, "utf8");

const readBack = readFileSync(outputPath, "utf8");
if (readBack !== ENTRY) {
  throw new Error(`Read-back mismatch in ${outputPath}.`);
}

console.log(`Wrote ${ENTRY.length}-character entry to ${outputPath}`);
