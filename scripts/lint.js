const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src");
const allowedExtensions = new Set([".html", ".css", ".md"]);

const issues = [];

const scan = (dir) => {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      scan(fullPath);
    } else if (allowedExtensions.has(path.extname(entry))) {
      const content = fs.readFileSync(fullPath, "utf8");
      if (!content.trim()) {
        issues.push(`${fullPath} is empty`);
      }
      const lines = content.split(/\r?\n/);
      lines.forEach((line, index) => {
        if (line.endsWith(" ")) {
          issues.push(`${fullPath}:${index + 1} has trailing spaces`);
        }
      });
      if (path.extname(entry) === ".html" && !content.includes("<!DOCTYPE html>")) {
        issues.push(`${fullPath} missing <!DOCTYPE html>`);
      }
    }
  }
};

scan(root);

if (issues.length) {
  console.error("Lint issues found:\n" + issues.join("\n"));
  process.exit(1);
}

console.log("Lint passed.");
