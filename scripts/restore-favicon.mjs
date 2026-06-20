import sharp from 'sharp';

await sharp('public/images/logo.webp')
  .resize(64, 64)
  .png()
  .toFile('public/images/logo.png');

console.log('✅ Favicon logo.png restored');
