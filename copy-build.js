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
  // Clean the build directory first to remove stale files
  if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true, force: true });
  }
  fs.mkdirSync(buildDir, { recursive: true });
  
  copyRecursive(clientDir, buildDir);
  console.log('✓ Build files copied from dist/client to build/');
  
  // Fix the index.html to reference the bundled JavaScript and CSS
  const indexPath = path.join(buildDir, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf-8');
  
  // Find the main bundle file - the largest index-*.js file (typically > 100KB)
  const assetsDir = path.join(buildDir, 'assets');
  const files = fs.readdirSync(assetsDir);
  let mainBundle = null;
  let maxSize = 0;
  let cssFile = null;
  
  files.forEach(f => {
    if (f.match(/^index-[a-z0-9_-]+\.js$/i)) {
      const size = fs.statSync(path.join(assetsDir, f)).size;
      if (size > maxSize) {
        maxSize = size;
        mainBundle = f;
      }
    }
    // Find the main CSS file
    if (f.match(/^styles-[a-z0-9_-]+\.css$/i)) {
      cssFile = f;
    }
  });
  
  // Inject CSS link into head if it exists
  if (cssFile) {
    html = html.replace(
      '</head>',
      `    <link rel="stylesheet" href="/assets/${cssFile}" />\n  </head>`
    );
    console.log(`✓ Injected CSS link for /assets/${cssFile}`);
  }
  
  if (mainBundle) {
    // Replace any script src pointing to /src/ with the bundled file
    html = html.replace(
      /src="\/src\/[^"]+"/g,
      `src="/assets/${mainBundle}"`
    );
    console.log(`✓ Fixed index.html to reference /assets/${mainBundle}`);
  }
  
  // Write the updated HTML
  fs.writeFileSync(indexPath, html, 'utf-8');
} catch (error) {
  console.error('✗ Error copying build files:', error);
  process.exit(1);
}
