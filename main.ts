// Office Artifacts: The One-Line Placard Contest
//
// Entry program for the make.fun bounty
// "Office Artifacts: The One-Line Placard Contest"
// (https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2).
//
// The bounty asks for a single museum-placard line (1-180 characters)
// for an ordinary modern office object, written as if it were an ancient
// artifact. This program writes that line, exactly, to entry.txt.
//
// Node 22, standard library only. No network, no dependencies,
// deterministic output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The placard line: a stapler reframed as a ritual object.
const ENTRY =
  "Stapler, c. 2024. Pressed steel. Employed in the Rite of Binding, joining two sheets irrevocably before witnesses. Gift of the Accounts Department.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 180;

const DEFAULT_OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

function fail(message) {
  throw new Error(message);
}

function checkLength(text) {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    fail(
      `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}.`,
    );
  }
}

function main() {
  checkLength(ENTRY);

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || DEFAULT_OUTPUT_DIR;
  mkdirSync(outputDir, { recursive: true });

  const outputPath = join(outputDir, OUTPUT_FILE);

  // Write exactly the entry text — no trailing newline — so the file
  // content is byte-identical to the placard line.
  writeFileSync(outputPath, ENTRY, "utf8");

  const written = readFileSync(outputPath, "utf8");
  if (written !== ENTRY) {
    fail(`Read-back mismatch in ${outputPath}: file does not match the entry.`);
  }

  console.log(`Wrote ${ENTRY.length} characters to ${outputPath}`);
}

main();
