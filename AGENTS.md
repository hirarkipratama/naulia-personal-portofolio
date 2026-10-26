# AI Agent Instructions — Personal Portfolio

## Project Context

This repository contains a single-page personal portfolio website for a creative professional.

Read `docs/PRD.md` before implementing features.

Use `docs/DESIGN.md` as the visual design specification when it is available.

The website is built using:
- Astro
- TypeScript
- Tailwind CSS v4
- Astro Content Collections
- Decap CMS
- Static Site Generation (SSG)

## Architecture Rules

1. Use Astro components by default.
2. Do not introduce React, Vue, Svelte, or another frontend framework without explicit approval.
3. Keep components small, reusable, and focused on a single responsibility.
4. Separate content management from presentation.
5. Use strict TypeScript.
6. Use Zod to validate structured content.
7. Prefer semantic HTML and accessible native browser features.
8. Avoid unnecessary dependencies.
9. Avoid premature abstraction.
10. Maintain a static-first architecture.

## Design Implementation

- Google Stitch is the source of truth for approved visual design.
- `docs/DESIGN.md` defines colors, typography, spacing, and visual patterns.
- `design/stitch-reference/` contains visual and exported-code references.
- Reimplement Stitch designs in idiomatic Astro and Tailwind CSS.
- Do not copy generated React code directly into production.
- Preserve responsive behavior across desktop and mobile layouts.
- Do not invent design details when reliable Stitch references exist.

## CMS and Content

- The portfolio owner is a non-technical CMS editor.
- All editable copywriting must eventually come from Astro Content Collections.
- Decap CMS will manage copywriting and structured metadata.
- Images and audio are manually managed in `public/`.
- CMS entries reference media through local asset paths.
- Do not implement media uploads through the CMS.
- Avoid hardcoded production copywriting inside UI components.

## Performance and Accessibility

- Minimize client-side JavaScript.
- Optimize images appropriately.
- Avoid downloading audio unnecessarily.
- Respect reduced-motion preferences.
- Support keyboard navigation.
- Use accessible labels for interactive elements.

## AI Agent Workflow

Before implementing:
1. Read the PRD and relevant design documentation.
2. Inspect the existing repository.
3. Identify the current implementation phase.
4. Explain the proposed file changes.

During implementation:
1. Work only on the requested phase.
2. Preserve existing architecture.
3. Avoid modifying unrelated files.
4. Do not install unnecessary dependencies.
5. Never commit credentials or API keys.

After implementation:
1. Run available validation commands.
2. Report which checks passed or failed.
3. Summarize changed files.
4. Identify unresolved issues.
5. Do not claim tests passed unless they were executed.

Do not modify the approved PRD unless explicitly requested.