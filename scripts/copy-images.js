const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\NEW BAG COLLECTION\\.gemini\\antigravity\\brain\\c9b0047c-96eb-4c85-9afc-429b374e8997';
const destDir = path.join(__dirname, '..', 'public', 'bg');

// Create directory
fs.mkdirSync(destDir, { recursive: true });

// Copy wide
fs.copyFileSync(
  path.join(srcDir, 'scene_wide_1786550275945.jpg'),
  path.join(destDir, 'scene-wide.png')
);

// Copy tall
fs.copyFileSync(
  path.join(srcDir, 'scene_tall_1786550290703.jpg'),
  path.join(destDir, 'scene-tall.png')
);

console.log('Done! Images copied to', destDir);
