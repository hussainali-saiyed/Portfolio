# Hussain Ali Saiyed Portfolio

A fast, accessible static portfolio site with detailed engineering case studies.

## Project Structure

```
src/
  index.html
  assets/
    styles.css
    resume.pdf
  projects/
    ras.html
    gearbox.html
    stm32-water-level.html
    pic24-labs.html
  notes/
    index.html
scripts/
  build.js
```

## Update Content

- **Hero & sections**: Edit `src/index.html` to update the hero copy, About, Skills, and other sections.
- **Projects**: Each project has a dedicated case study page in `src/projects/`. Duplicate an existing page to add a new project, then update the card list in `src/index.html` to link it.
- **Notes**: Add short posts in `src/notes/index.html`.
- **Resume**: Replace `src/assets/resume.pdf` with your real PDF (keep the same filename).

## Local Development

Use any static server for quick previews:

```bash
python -m http.server --directory src 8000
```

## Build

```bash
npm install
npm run build
```

The build script copies `src/` into `dist/` for deployment.

## Deploy

- Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages).
- If using GitHub Pages, configure it to serve from the `dist/` directory.
- Update `og:url` and social images in `src/index.html` to match your real domain.
