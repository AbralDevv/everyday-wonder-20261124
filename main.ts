import * as fs from "node:fs";
import * as path from "node:path";

const LINE = `Popping a single pocket of bubble wrap frees a thimble of air sealed in an Ohio factory last October, and for one breath I share my kitchen with night-shift workers I will never meet.`;

function pickOutDir(): string {
  const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"];
  for (const dir of candidates) {
    if (!dir) continue;
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.accessSync(dir, fs.constants.W_OK);
      return dir;
    } catch {
      // try the next candidate (second-pass revision)
    }
  }
  throw new Error("no writable output dir");
}

const outDir = pickOutDir();
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
