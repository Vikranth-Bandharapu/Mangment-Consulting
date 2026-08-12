const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'assets');
const targetSize = 100 * 1024;

async function processImages() {
  const files = fs.readdirSync(assetsDir);
  const imageFiles = files.filter(f => /\.(png|jpe?g|gif|svg|webp)$/i.test(f));
  
  for (const file of imageFiles) {
    const filePath = path.join(assetsDir, file);
    const parsed = path.parse(file);
    let outPath = path.join(assetsDir, parsed.name + '.webp');
    
    let quality = 80;
    let buffer;
    
    try {
      buffer = await sharp(filePath).webp({ quality }).toBuffer();
      
      while (buffer.length > targetSize && quality > 10) {
        quality -= 15;
        buffer = await sharp(filePath).webp({ quality }).toBuffer();
      }
      
      let scale = 1.0;
      let metadata = await sharp(buffer).metadata();
      while (buffer.length > targetSize && scale > 0.3) {
        scale -= 0.2;
        buffer = await sharp(filePath)
          .resize(Math.round(metadata.width * scale))
          .webp({ quality: 20 })
          .toBuffer();
      }
      
      fs.writeFileSync(outPath, buffer);
      console.log('Converted ' + file + ' to WEBP: ' + (buffer.length/1024).toFixed(2) + ' KB');
      
      if (file !== parsed.name + '.webp') {
        fs.unlinkSync(filePath);
      }
    } catch (e) {
      console.error('Error processing ' + file + ':', e.message);
    }
  }
}

processImages();
