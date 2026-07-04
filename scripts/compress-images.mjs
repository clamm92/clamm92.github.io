import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const MIN_BYTES = 150 * 1024;
const MAX_DIMENSION = 1920;
const JPEG_QUALITY = 82;

async function compressJpeg(filePath, sizeBefore) {
  const metadata = await sharp(filePath).rotate().metadata();
  const needsResize =
    (metadata.width ?? 0) > MAX_DIMENSION ||
    (metadata.height ?? 0) > MAX_DIMENSION;

  let pipeline = sharp(filePath).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const tempPath = `${filePath}.tmp`;
  await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(tempPath);

  const sizeAfter = (await stat(tempPath)).size;
  if (sizeAfter < sizeBefore) {
    await sharp(tempPath).toFile(filePath);
    await import("node:fs/promises").then(({ unlink }) => unlink(tempPath));
    return sizeAfter;
  }

  await import("node:fs/promises").then(({ unlink }) => unlink(tempPath));
  return sizeBefore;
}

async function compressPng(filePath, sizeBefore) {
  const metadata = await sharp(filePath).rotate().metadata();
  const isProfile = path.basename(filePath) === "profile.png";
  let pipeline = sharp(filePath).rotate();

  if (isProfile) {
    pipeline = pipeline.resize(210, 280, {
      fit: "inside",
      withoutEnlargement: true,
    });
  } else if (
    (metadata.width ?? 0) > MAX_DIMENSION ||
    (metadata.height ?? 0) > MAX_DIMENSION
  ) {
    pipeline = pipeline.resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const tempPath = `${filePath}.tmp`;
  await pipeline
    .png({ compressionLevel: 9, palette: isProfile })
    .toFile(tempPath);

  const sizeAfter = (await stat(tempPath)).size;
  if (sizeAfter < sizeBefore) {
    await sharp(tempPath).toFile(filePath);
    await import("node:fs/promises").then(({ unlink }) => unlink(tempPath));
    return sizeAfter;
  }

  await import("node:fs/promises").then(({ unlink }) => unlink(tempPath));
  return sizeBefore;
}

const files = await readdir(PUBLIC_DIR);
let totalBefore = 0;
let totalAfter = 0;

for (const file of files.sort()) {
  const filePath = path.join(PUBLIC_DIR, file);
  const fileStat = await stat(filePath);
  if (!fileStat.isFile()) continue;

  const ext = path.extname(file).toLowerCase();
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") continue;
  if (fileStat.size < MIN_BYTES) continue;

  const sizeBefore = fileStat.size;
  let sizeAfter = sizeBefore;

  if (ext === ".jpg" || ext === ".jpeg") {
    sizeAfter = await compressJpeg(filePath, sizeBefore);
  } else {
    sizeAfter = await compressPng(filePath, sizeBefore);
  }

  totalBefore += sizeBefore;
  totalAfter += sizeAfter;
  console.log(
    `${file}: ${Math.round(sizeBefore / 1024)}K -> ${Math.round(sizeAfter / 1024)}K`
  );
}

console.log(
  `Saved ${Math.round((totalBefore - totalAfter) / 1024)}K across ${files.length} public files`
);
