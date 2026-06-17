/**
 * Image resize pre-processor
 *
 * Walks src/assets/images/ and resizes any PNG/JPG/JPEG that exceeds
 * MAX_DIMENSION on either axis. Uses sharp's `fit: 'inside'` so that
 * both landscape AND portrait images are handled correctly:
 *   - landscape 3840×2160  →  1920×1080
 *   - portrait  1200×3000  →   768×1920
 *   - already-small images are left untouched (withoutEnlargement: true)
 *
 * Run once whenever large new images are added to the project:
 *   npm run optimize:images
 *
 * Also runs automatically as part of:
 *   npm run build
 *
 * vite-plugin-image-optimizer then applies quality compression on top
 * of these already-resized files during `npm run build`.
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, relative } from 'path';

// ─── ANSI colour helpers ────────────────────────────────────────────────────
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  red: '\x1b[31m',
};
const bold = s => `${c.bold}${s}${c.reset}`;
const green = s => `${c.green}${s}${c.reset}`;
const yellow = s => `${c.yellow}${s}${c.reset}`;
const cyan = s => `${c.cyan}${s}${c.reset}`;
const gray = s => `${c.gray}${s}${c.reset}`;
const dim = s => `${c.dim}${s}${c.reset}`;

// ─── Config ─────────────────────────────────────────────────────────────────
const MAX_DIMENSION = 1920;
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png']);
const IMAGE_DIR = 'src/assets/images';

// ─── Helpers ─────────────────────────────────────────────────────────────────
const kb = bytes => (bytes / 1024).toFixed(1) + ' KB';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

// ─── Main ────────────────────────────────────────────────────────────────────
console.log(
  `\n${bold(cyan('┌─────────────────────────────────────────────┐'))}`,
);
console.log(
  `${bold(cyan('│'))}  ${bold('🖼  Image Optimiser')}  ${dim(`(max ${MAX_DIMENSION}px)`)}              ${bold(cyan('│'))}`,
);
console.log(
  `${bold(cyan('└─────────────────────────────────────────────┘'))}\n`,
);

const files = await walk(IMAGE_DIR);
console.log(dim(`  Scanning ${IMAGE_DIR}/ — found ${files.length} image(s)\n`));

let resized = 0;
let skipped = 0;
let savedKb = 0;

for (const filePath of files) {
  const rel = relative('.', filePath);
  const image = sharp(filePath);
  const meta = await image.metadata();
  const sizeBefore = (await stat(filePath)).size;

  if (meta.width > MAX_DIMENSION || meta.height > MAX_DIMENSION) {
    const buffer = await image
      .resize(MAX_DIMENSION, MAX_DIMENSION, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .toBuffer();

    await sharp(buffer).toFile(filePath);

    const after = await sharp(filePath).metadata();
    const sizeAfter = (await stat(filePath)).size;
    const saved = sizeBefore - sizeAfter;
    savedKb += saved;

    console.log(
      `  ${green('✓ resized')}  ${bold(rel)}\n` +
        `             ${dim(`${meta.width}×${meta.height}`)} → ${cyan(`${after.width}×${after.height}`)}` +
        `   ${dim(kb(sizeBefore))} → ${green(kb(sizeAfter))}  ${yellow(`(−${kb(saved)})`)}`,
    );
    resized++;
  } else {
    console.log(
      `  ${gray('· skipped')}  ${dim(rel)}  ${gray(`${meta.width}×${meta.height} — within limit`)}`,
    );
    skipped++;
  }
}

const summaryColour = resized > 0 ? yellow : gray;
console.log(
  `\n${summaryColour('─'.repeat(49))}\n` +
    `  ${bold(`${resized} resized`)}  ·  ${dim(`${skipped} skipped`)}` +
    (resized > 0 ? `  ·  ${green(`${kb(savedKb)} saved`)}` : '') +
    `\n${summaryColour('─'.repeat(49))}\n`,
);
