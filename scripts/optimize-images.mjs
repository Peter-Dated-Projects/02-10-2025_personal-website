import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";

const COLLAGE_DIR = "public/collage";
const MAX_WIDTH = 800;

const filesToOptimize = [
  "IMG_6169.JPG",
  "IMG_6105.JPG",
  "IMG_6056.JPG",
  "gamedev1.png",
  "portfolio1.png",
  "ski1.png",
  "tremblant1.png",
  "groupphoto.png",
];

async function optimizeImage(filename) {
  const inputPath = path.join(COLLAGE_DIR, filename);
  const baseName = path.parse(filename).name;
  const outputPath = path.join(COLLAGE_DIR, `${baseName}.webp`);

  try {
    await stat(inputPath);
  } catch {
    console.log(`Skipping ${filename} (not found)`);
    return;
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  let pipeline = image.resize({
    width: Math.min(metadata.width ?? MAX_WIDTH, MAX_WIDTH),
    withoutEnlargement: true,
  });

  await pipeline.webp({ quality: 80 }).toFile(outputPath);

  const inputStats = await stat(inputPath);
  const outputStats = await stat(outputPath);
  const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
  console.log(
    `${filename} -> ${baseName}.webp (${(inputStats.size / 1024).toFixed(0)}KB -> ${(outputStats.size / 1024).toFixed(0)}KB, ${savings}% saved)`
  );
}

for (const file of filesToOptimize) {
  await optimizeImage(file);
}

console.log("Image optimization complete.");
