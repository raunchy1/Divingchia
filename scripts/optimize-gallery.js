#!/usr/bin/env node
// Optimize the 145 gallery photos in place. Two variants:
//   /public/images/gallery/*.jpeg        — full ~1600px (lightbox)
//   /public/images/gallery/thumb/*.jpeg  — thumb ~720px  (masonry grid)
// EXIF orientation is honored (some IMG_*.jpeg arrived rotated).

const path = require("node:path");
const fs = require("node:fs/promises");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const GALLERY = path.join(ROOT, "public", "images", "gallery");
const THUMB = path.join(GALLERY, "thumb");

const FULL_MAX = 1600;
const THUMB_MAX = 720;
const FULL_Q = 82;
const THUMB_Q = 76;

async function main() {
  await fs.mkdir(THUMB, { recursive: true });

  const all = await fs.readdir(GALLERY);
  const files = all.filter((f) => /\.jpe?g$/i.test(f) && !f.startsWith("."));
  files.sort();

  console.log(`Optimizing ${files.length} photos in place + generating thumbs…`);

  const startedAt = Date.now();
  let bytesBefore = 0;
  let bytesAfter = 0;

  const POOL = 4;
  let cursor = 0;
  async function worker() {
    while (cursor < files.length) {
      const i = cursor++;
      const f = files[i];
      const srcPath = path.join(GALLERY, f);
      const thumbPath = path.join(THUMB, f);

      try {
        // Read source bytes once
        const srcStat = await fs.stat(srcPath);
        bytesBefore += srcStat.size;
        const buf = await fs.readFile(srcPath);

        // Already optimized? If width <= FULL_MAX and a sibling thumb exists, skip.
        const meta = await sharp(buf).metadata();
        const alreadySmall =
          (meta.width || 0) <= FULL_MAX && (meta.height || 0) <= FULL_MAX;
        let thumbExists = false;
        try {
          await fs.access(thumbPath);
          thumbExists = true;
        } catch {}

        if (alreadySmall && thumbExists) {
          const dstStat = await fs.stat(srcPath);
          bytesAfter += dstStat.size;
          process.stdout.write(`  [${i + 1}/${files.length}] ${f} (skip)\n`);
          continue;
        }

        // FULL (overwrite in place via temp file)
        const tmpPath = srcPath + ".tmp.jpeg";
        await sharp(buf, { failOn: "none" })
          .rotate()
          .resize({
            width: FULL_MAX,
            height: FULL_MAX,
            fit: "inside",
            withoutEnlargement: true,
          })
          .jpeg({ quality: FULL_Q, mozjpeg: true, progressive: true })
          .toFile(tmpPath);
        await fs.rename(tmpPath, srcPath);

        // THUMB
        await sharp(buf, { failOn: "none" })
          .rotate()
          .resize({
            width: THUMB_MAX,
            height: THUMB_MAX,
            fit: "inside",
            withoutEnlargement: true,
          })
          .jpeg({ quality: THUMB_Q, mozjpeg: true, progressive: true })
          .toFile(thumbPath);

        const newStat = await fs.stat(srcPath);
        bytesAfter += newStat.size;
        process.stdout.write(
          `  [${i + 1}/${files.length}] ${f}  ${(srcStat.size / 1024 / 1024).toFixed(1)}MB → ${(newStat.size / 1024).toFixed(0)}KB\n`
        );
      } catch (err) {
        console.error(`  [${i + 1}/${files.length}] ${f} FAILED:`, err.message);
      }
    }
  }
  await Promise.all(Array.from({ length: POOL }, worker));

  console.log(
    `Done in ${((Date.now() - startedAt) / 1000).toFixed(1)}s. ` +
      `${(bytesBefore / 1024 / 1024).toFixed(0)}MB → ${(bytesAfter / 1024 / 1024).toFixed(0)}MB ` +
      `(${((1 - bytesAfter / bytesBefore) * 100).toFixed(0)}% smaller)`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
