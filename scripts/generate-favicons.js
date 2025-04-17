const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Only generate the sizes we need for the metadata
const sizes = [16, 32];
const inputSvg = path.join(process.cwd(), 'public', 'icon.svg');
const outputDir = path.join(process.cwd(), 'public');

async function generateFavicons() {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Generate PNG favicons in different sizes
    for (const size of sizes) {
      await sharp(inputSvg)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
      
      console.log(`Generated ${size}x${size} favicon`);
    }

    // Generate apple-touch-icon
    await sharp(inputSvg)
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    
    console.log('Generated apple-touch-icon.png');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons(); 