import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const entry = "A streetlamp flickers on at dusk and for one quiet second the whole ordinary street looks like it was lit just for me.";

// Output dir: argv wins, then $MAKEFUN_OUTPUT_DIR, then /output (./output fallback handled by resolve).
const outDir = resolve(process.argv[2] || process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
