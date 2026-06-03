#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, 'build');
const clientDir = path.join(__dirname, 'dist', 'client');

// Create build directory if it doesn't exist
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy files from dist/client to build
function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

try {
  copyRecursive(clientDir, buildDir);
  console.log('✓ Build files copied from dist/client to build/');
  
  // Fix the index.html to reference the bundled JavaScript instead of source files
  const indexPath = path.join(buildDir, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf-8');
  
  // Find the main bundle file - the largest index-*.js file (typically > 100KB)
  const assetsDir = path.join(buildDir, 'assets');
  const files = fs.readdirSync(assetsDir);
  let mainBundle = null;
  let maxSize = 0;
  
  files.forEach(f => {
    if (f.match(/^index-[a-z0-9_-]+\.js$/i)) {
      const size = fs.statSync(path.join(assetsDir, f)).size;
      if (size > maxSize) {
        maxSize = size;
        mainBundle = f;
      }
    }
  });
  
  if (mainBundle) {
    // Replace any script src pointing to /src/ with the bundled file
    html = html.replace(
      /src="\/src\/[^"]+"/g,
      `src="/assets/${mainBundle}"`
    );
    fs.writeFileSync(indexPath, html, 'utf-8');
    console.log(`✓ Fixed index.html to reference /assets/${mainBundle}`);
  }
} catch (error) {
  console.error('✗ Error copying build files:', error);
  process.exit(1);
}
