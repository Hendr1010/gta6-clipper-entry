// gta6-clipper-01 entry for make.fun (Node 22, standard library only).
//
// The video itself is the entry: the house reads its views from YouTube.
// This program only hands VIDEO.json from the repository root to the
// grader's output directory, where the gate reads it. Nothing else here
// is scored, and it writes the same bytes on every run.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(repoDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (error) {
  console.error(`could not copy ${join(repoDir, 'VIDEO.json')}: ${(error as Error).message}`);
  process.exit(1);
}
