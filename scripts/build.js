const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "..", "src");
const outputDir = path.join(__dirname, "..", "dist");

const copyRecursive = (src, dest) => {
  if (!fs.existsSync(src)) {
    return;
  }

  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
};

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}

copyRecursive(sourceDir, outputDir);
console.log("Build complete: dist/ created.");
