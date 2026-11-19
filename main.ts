// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: this program only hands the house the
// post's address, by copying POST.json from the repository root into
// /output. Nothing it writes is judged — the house reads the post from X
// (its first picture and its text) and hands that to the judge.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json out of ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
