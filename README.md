# Naulia Zahra Creative Portfolio

A responsive single-page personal portfolio built with Astro, TypeScript, and Tailwind CSS v4.

## Tech Stack

- [Astro](https://astro.build/) — Static site generator
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [ESLint](https://eslint.org/) — Linting
- [Prettier](https://prettier.io/) — Code formatting

## Project Structure

```text
/
├── public/
│   ├── admin/            # Decap CMS admin interface
│   ├── audio/            # Audio samples (manually managed)
│   ├── fonts/            # Web fonts (Outfit, Hanken Grotesk)
│   ├── images/           # Hero, project, audio, and common images
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/       # Reusable UI primitives
│   │   ├── audio/        # Audio-specific components
│   │   ├── portfolio/    # Portfolio-specific components
│   │   └── sections/     # Page section components
│   ├── content/
│   │   ├── pages/        # Page content collections
│   │   ├── projects/     # Project entries
│   │   └── audio/        # Audio entries
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/              # Utility modules
│   ├── pages/
│   │   └── index.astro   # Single-page entry
│   ├── scripts/          # Build-time validation scripts
│   └── styles/
│       ├── global.css    # Tailwind CSS import
│       └── tokens.css    # Design system tokens
├── tests/
│   ├── unit/
│   └── e2e/
├── astro.config.mjs
├── eslint.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Commands

| Command                | Action                                     |
| ---------------------- | ------------------------------------------ |
| `npm install`          | Install dependencies                       |
| `npm run dev`          | Start local dev server at `localhost:4321` |
| `npm run build`        | Build production site to `./dist/`         |
| `npm run preview`      | Preview production build locally           |
| `npm run check`        | Run Astro TypeScript checking              |
| `npm run lint`         | Run ESLint                                 |
| `npm run format`       | Run Prettier to format all files           |
| `npm run format:check` | Check Prettier formatting without writing  |
| `npm run astro`        | Run Astro CLI commands                     |

## Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:4321` in your browser.

4. Before committing, run validation:

   ```bash
   npm run check
   npm run lint
   npm run format:check
   npm run build
   ```

## Design

The visual design follows the **"Curated Lumina"** design system from Google Stitch (Project `Naulia Zahra Creative Portfolio`). Design tokens are defined in `src/styles/tokens.css` per `docs/DESIGN.md`.

## Deployment

Deployed via Cloudflare Pages with the build command `npm run build` and output directory `dist/`.
