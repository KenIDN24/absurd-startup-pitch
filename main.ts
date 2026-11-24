import * as fs from "node:fs";

const LINE =
  "Pitch: Screenshot Janitor \u2014 automatically deletes the 4,000 desktop screenshots lazy agents hoard, keeps the last three, charges $9 a month, no questions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Runtime guard: sealed gate is 1-200 UTF-8 chars, exactly one line.
// Refuse to emit an invalid entry rather than silently writing one.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry invalid: ${chars} chars (gate is 1-200, single line)`);
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
