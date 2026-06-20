import sharp from 'sharp';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from 'fs';
import { join, relative, dirname, parse } from 'path';

const QUALITY = 80;

const imageExtensions = new Set([
  '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif',
]);

const dirs = [
  'public/images',
  'Assests',
];

async function convertFile(inputPath, outputPath) {
  const outputDir = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const inputSize = statSync(inputPath).size;
    const outputSize = statSync(outputPath).size;
    const saved = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`✓ ${parse(inputPath).base} → ${parse(outputPath).base} (${saved}% saved)`);
    return { inputSize, outputSize };
  } catch (err) {
    console.error(`✗ Error converting ${inputPath}: ${err.message}`);
    return null;
  }
}

async function walkDir(dir) {
  let totalSaved = 0;
  let totalOriginal = 0;
  let converted = 0;
  let failed = 0;

  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      const result = await walkDir(fullPath);
      totalSaved += result.totalSaved;
      totalOriginal += result.totalOriginal;
      converted += result.converted;
      failed += result.failed;
    } else if (entry.isFile() && imageExtensions.has(parse(entry.name).ext.toLowerCase())) {
      const parsed = parse(fullPath);
      const webpPath = join(parsed.dir, `${parsed.name}.webp`);

      const result = await convertFile(fullPath, webpPath);
      if (result) {
        totalSaved += result.outputSize;
        totalOriginal += result.inputSize;
        converted++;
      } else {
        failed++;
      }
    }
  }

  return { totalSaved, totalOriginal, converted, failed };
}

for (const dir of dirs) {
  const fullDir = join(process.cwd(), dir);
  if (!existsSync(fullDir)) {
    console.log(`\n⚠ Directory not found: ${dir}`);
    continue;
  }

  console.log(`\n📁 Processing: ${dir}`);
  const result = await walkDir(fullDir);

  if (result.converted > 0) {
    const percent = ((1 - result.totalSaved / result.totalOriginal) * 100).toFixed(1);
    const savedMB = ((result.totalOriginal - result.totalSaved) / (1024 * 1024)).toFixed(2);
    console.log(`\n📊 ${dir}: ${result.converted} images converted, ${result.failed} failed`);
    console.log(`   Original: ${(result.totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`   WebP:     ${(result.totalSaved / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`   Saved:    ${savedMB} MB (${percent}%)`);
  } else {
    console.log(`   No images found to convert`);
  }
}

console.log('\n✅ Conversion complete!');
