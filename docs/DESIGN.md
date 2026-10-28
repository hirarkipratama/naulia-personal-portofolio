# Design Specification — Naulia Zahra Creative Portfolio

> **Source of Truth**: Google Stitch Project `Naulia Zahra Creative Portfolio`  
> **Project ID**: `projects/15143213659924096057`  
> **Design System**: `Curated Lumina`  
> **Design System Asset ID**: `assets/0282ebe3fce74f15b344c675bac28f88`  
> **Target Framework**: Astro + Tailwind CSS v4 + TypeScript  
> **Constraint**: Single Astro application. No separate desktop/mobile pages. No React.

---

## 1. Stitch Source Reference Mapping

| Resource Type  | Resource ID                                                              | Source Screen / Label                                                  | Device Type            | Dimensions | Language |
| -------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------- | ---------- | -------- |
| Project        | `projects/15143213659924096057`                                          | —                                                                      | MOBILE (project-level) | —          | EN       |
| Design System  | `assets/0282ebe3fce74f15b344c675bac28f88`                                | Curated Lumina                                                         | All                    | —          | —        |
| Desktop Screen | `projects/15143213659924096057/screens/9c32a22bd8b445afb939fd14114ffda8` | Naulia Zahra — Portfolio (Desktop) (Versi Bahasa Indonesia)            | DESKTOP                | 2560×11744 | ID       |
| Desktop Screen | `projects/15143213659924096057/screens/7bc30d367e21473cb3b8fde2f5cbfc20` | Naulia Zahra — Portfolio (Desktop) (Dedicated Audio Reel)              | DESKTOP                | 1280×1024  | EN       |
| Mobile Screen  | `projects/15143213659924096057/screens/530c66327dd74af89e80691200119fb0` | Naulia Zahra — Book Editor, MC & VO Portfolio (Versi Bahasa Indonesia) | MOBILE                 | 780×13018  | ID       |
| Mobile Screen  | `projects/15143213659924096057/screens/1efaa49062cc4c5489a6f3695a86e40c` | Naulia Zahra — Book Editor, MC & VO Portfolio (Animated Edition)       | MOBILE                 | 390×884    | EN       |

> **Note**: Project-level `deviceType` is `MOBILE`, but individual screen instances carry their own `deviceType` (DESKTOP / MOBILE) as listed above. Design tokens are shared across all screens via the `Curated Lumina` design system.

---

## 2. Executive Summary & Brand Identity

The visual design system for **Naulia Zahra's Creative Portfolio** embodies an elevated **"Curated Lumina"** aesthetic — an intersection of architectural precision, playful Gen-Z vitality, and warm editorial craftsmanship.

As a professional operating across three disciplines — **Children's & Science Book Editor**, **Event MC & Moderator**, and **Expressive Voice-Over Artist** — the design balances:

- **Warm Editorial Precision**: Generous white space, disciplined 12-column grid geometry, refined typography.
- **Vibrant Optimism**: Dynamic coral-peach tones (`#FF8E72`) supported by sun-drenched yellows (`#FECF27`), refreshing mints (`#55C09C`), and soft sky accents.
- **Tactile Depth**: Ambient warm-tinted shadows, frosted glassmorphism (`backdrop-blur-xl`), pill-shaped containers, and playful sticker badges.

---

## 3. Color Palette & Token System

All hex values below are **extracted directly** from the Stitch project design theme and exported markup, except opacity multipliers on ambient blur bubbles and scrim gradients (marked Inferred).

### 3.1 Brand & Accent Colors

| Role Token                   | Extracted Hex | Usage                                                                           | Source Status |
| ---------------------------- | ------------- | ------------------------------------------------------------------------------- | ------------- |
| `primary`                    | `#9D422C`     | Deep terra-cotta russet. Headings, brand anchors, primary button active states. | Extracted     |
| `primary-container`          | `#FF8E72`     | Signature Coral Peach. Key CTA fills, active navigation pills, hover halos.     | Extracted     |
| `on-primary`                 | `#FFFFFF`     | Text/icons on primary fills.                                                    | Extracted     |
| `on-primary-container`       | `#762612`     | Deep chestnut text on coral-peach containers.                                   | Extracted     |
| `primary-fixed`              | `#FFDAD2`     | Soft blush peach background for icon badges.                                    | Extracted     |
| `primary-fixed-dim`          | `#FFB4A2`     | Muted blush peach border/subtle hover.                                          | Extracted     |
| `on-primary-fixed`           | `#3C0700`     | Deepest mahogany text on fixed primary chips.                                   | Extracted     |
| `on-primary-fixed-variant`   | `#7E2C17`     | Secondary text on fixed primary chips.                                          | Extracted     |
| `inverse-primary`            | `#FFB4A2`     | Inverse primary tint.                                                           | Extracted     |
| `secondary`                  | `#735C00`     | Warm golden ochre. Subheadings, icons, status badges.                           | Extracted     |
| `secondary-container`        | `#FECF27`     | Marigold Sunny Yellow. High-energy hero CTA, highlight badges.                  | Extracted     |
| `on-secondary`               | `#FFFFFF`     | Text on secondary fills.                                                        | Extracted     |
| `on-secondary-container`     | `#705900`     | Golden brown text on yellow containers.                                         | Extracted     |
| `secondary-fixed`            | `#FFE087`     | Soft sunlight yellow for category tags.                                         | Extracted     |
| `secondary-fixed-dim`        | `#EFC112`     | Amber yellow for muted highlights.                                              | Extracted     |
| `on-secondary-fixed`         | `#231A00`     | High-contrast dark brown on fixed yellow.                                       | Extracted     |
| `on-secondary-fixed-variant` | `#574500`     | Muted brown on fixed yellow.                                                    | Extracted     |
| `tertiary`                   | `#006C52`     | Deep forest jade / emerald. Audio indicators, success states.                   | Extracted     |
| `tertiary-container`         | `#55C09C`     | Mint aqua / seafoam. Waveform bars, secondary interactive states.               | Extracted     |
| `on-tertiary`                | `#FFFFFF`     | Text on tertiary fills.                                                         | Extracted     |
| `on-tertiary-container`      | `#004B38`     | Deep pine green text on mint containers.                                        | Extracted     |
| `tertiary-fixed`             | `#8CF6D0`     | Soft pastel mint for availability pills, science tags.                          | Extracted     |
| `tertiary-fixed-dim`         | `#70DAB4`     | Mid-tone mint for hover states.                                                 | Extracted     |
| `on-tertiary-fixed`          | `#002117`     | Very dark pine text on mint pills.                                              | Extracted     |
| `on-tertiary-fixed-variant`  | `#00513D`     | Forest green text on mint pills.                                                | Extracted     |

### 3.2 Neutral Canvas & Surface Layers

| Role Token                  | Extracted Hex | Purpose & Usage                                                 | Source Status |
| --------------------------- | ------------- | --------------------------------------------------------------- | ------------- |
| `surface` / `background`    | `#FFF8F3`     | Warm Alabaster canvas. Organic backdrop avoiding sterile white. | Extracted     |
| `surface-bright`            | `#FFF8F3`     | Elevated surface variant.                                       | Extracted     |
| `surface-dim`               | `#DFD9D4`     | Muted background boundary.                                      | Extracted     |
| `surface-container-lowest`  | `#FFFFFF`     | Pure white. Primary surface for cards, content blocks, modals.  | Extracted     |
| `surface-container-low`     | `#F9F2ED`     | Warm tinted card inset, audio player scrub track.               | Extracted     |
| `surface-container`         | `#F3EDE7`     | Neutral tag pills, image fallbacks.                             | Extracted     |
| `surface-container-high`    | `#EDE7E2`     | Borders, subtle dividers, inactive scrubber tracks.             | Extracted     |
| `surface-container-highest` | `#E7E1DC`     | Secondary chip resting state, subtle field fills.               | Extracted     |
| `surface-variant`           | `#E7E1DC`     | Surface variant for subtle backgrounds.                         | Extracted     |
| `surface-tint`              | `#9D422C`     | Surface tint accent.                                            | Extracted     |
| `on-surface`                | `#1D1B18`     | Warm charcoal. Primary typography color.                        | Extracted     |
| `on-surface-variant`        | `#56423E`     | Muted espresso brown. Secondary body copy, timestamps.          | Extracted     |
| `outline`                   | `#89726D`     | Structural boundaries, high-contrast borders.                   | Extracted     |
| `outline-variant`           | `#DCC0BA`     | Hairline dividers, card outlines, subtle borders.               | Extracted     |
| `inverse-surface`           | `#32302D`     | Dark charcoal for badge backings and scrim gradients.           | Extracted     |
| `inverse-on-surface`        | `#F6F0EA`     | Off-white text on dark scrims and overlays.                     | Extracted     |

### 3.3 Semantic & Functional Tints

| Role Token           | Extracted Hex | Purpose                            | Source Status |
| -------------------- | ------------- | ---------------------------------- | ------------- |
| `error`              | `#BA1A1A`     | Form validation errors and alerts. | Extracted     |
| `error-container`    | `#FFDAD6`     | Error banner background.           | Extracted     |
| `on-error`           | `#FFFFFF`     | Text on error fills.               | Extracted     |
| `on-error-container` | `#93000A`     | Text on error banners.             | Extracted     |

---

## 4. Typography Hierarchy

The design combines **Outfit** (display/headings) for geometric warmth with **Hanken Grotesk** (body/labels) for humanist editorial legibility.

### 4.1 Font Families

| Token             | Family                       | Source Status |
| ----------------- | ---------------------------- | ------------- |
| `--font-headline` | `Outfit`, sans-serif         | Extracted     |
| `--font-body`     | `Hanken Grotesk`, sans-serif | Extracted     |

Iconography: **Google Material Symbols Outlined** (`opsz: 20..48`, `wght: 100..700`, `FILL: 0..1`) — Extracted from exported HTML `<link>` tags.

### 4.2 Type Scale (Extracted Specifications)

| Token Name            | Family         | Font Size          | Line Height | Weight | Letter Spacing | Source              |
| --------------------- | -------------- | ------------------ | ----------- | ------ | -------------- | ------------------- |
| `display-hero`        | Outfit         | `4.5rem` (72px)    | `1.05`      | 600    | `-0.03em`      | Extracted (Desktop) |
| `display-hero-mobile` | Outfit         | `2.75rem` (44px)   | `1.1`       | 600    | `-0.02em`      | Extracted (Mobile)  |
| `headline-lg`         | Outfit         | `3rem` (48px)      | `1.15`      | 600    | `-0.025em`     | Extracted (Desktop) |
| `headline-lg-mobile`  | Outfit         | `2rem` (32px)      | `1.2`       | 600    | `-0.02em`      | Extracted (Mobile)  |
| `headline-md`         | Outfit         | `2rem` (32px)      | `1.25`      | 500    | `-0.015em`     | Extracted           |
| `headline-sm`         | Outfit         | `1.375rem` (22px)  | `1.3`       | 500    | `-0.01em`      | Extracted           |
| `body-lg`             | Hanken Grotesk | `1.125rem` (18px)  | `1.6`       | 400    | `-0.005em`     | Extracted           |
| `body-md`             | Hanken Grotesk | `1rem` (16px)      | `1.55`      | 400    | `0em`          | Extracted           |
| `body-sm`             | Hanken Grotesk | `0.875rem` (14px)  | `1.5`       | 400    | `0.005em`      | Extracted           |
| `label-md`            | Hanken Grotesk | `0.8125rem` (13px) | `1.2`       | 600    | `0.04em`       | Extracted           |
| `label-sm`            | Hanken Grotesk | `0.6875rem` (11px) | `1.1`       | 700    | `0.06em`       | Extracted           |

> **Inferred**: Fallback font stack (`sans-serif`), font-loading strategy (`preconnect` Google Fonts vs local woff2 subset).

---

## 5. Spacing Scale

| Token           | CSS Value  | Pixel Equivalent | Typical Usage                                            |
| --------------- | ---------- | ---------------- | -------------------------------------------------------- |
| `space-xs`      | `0.375rem` | 6px              | Badge icon gaps, inline tag padding, micro-spacing.      |
| `space-sm`      | `0.75rem`  | 12px             | Card interior insets, chip gaps, small button padding.   |
| `space-md`      | `1.25rem`  | 20px             | Card internal padding, medium gaps, form field spacing.  |
| `space-lg`      | `2rem`     | 32px             | Section headers to grid spacing, large component insets. |
| `space-xl`      | `3.5rem`   | 56px             | Vertical rhythm between major sections, hero padding.    |
| `gutter`        | `1.5rem`   | 24px             | Desktop 12-column grid gap.                              |
| `gutter-mobile` | `1rem`     | 16px             | Mobile layout column gap.                                |
| `margin`        | `3rem`     | 48px             | Desktop outer page margin.                               |
| `margin-mobile` | `1.25rem`  | 20px             | Mobile outer page margin.                                |

All spacing values **extracted** from Stitch `designMd` spacing section.

---

## 6. Container Widths & Page Margins

| Property                   | Value                               | Source Status                                                 |
| -------------------------- | ----------------------------------- | ------------------------------------------------------------- |
| Max Container Width        | `1280px` (`max-w-[1280px] mx-auto`) | Extracted (from exported class `h-20 max-w-[1280px] mx-auto`) |
| Desktop Outer Margin       | `3rem` (48px)                       | Extracted (`margin` token)                                    |
| Mobile Outer Margin        | `1.25rem` (20px)                    | Extracted (`margin-mobile` token)                             |
| Desktop Header Height      | `h-20` (80px)                       | Extracted from exported desktop HTML class                    |
| Mobile Header Height       | `h-16` (64px)                       | Extracted from exported mobile HTML class                     |
| Mobile Bottom Dock Padding | `px-space-xs`                       | Extracted from mobile bottom nav classes                      |

---

## 7. Border Radius Conventions

| Radius Token     | Value            | Applied Components                                                                   | Source Status |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------ | ------------- |
| `sm` / `DEFAULT` | `0.25rem` (4px)  | Checkboxes, inline code badges.                                                      | Extracted     |
| `lg`             | `0.5rem` (8px)   | Form inputs (`input`, `textarea`, `select`), compact cards.                          | Extracted     |
| `xl`             | `0.75rem` (12px) | Waveform container, direct contact icon wrappers, small panels.                      | Extracted     |
| `2xl`            | `1rem` (16px)    | Book card nested image containers, event cards, audio player card.                   | Extracted     |
| `3xl`            | `1.5rem` (24px)  | Desktop book cards, hero portrait frame, stat cards.                                 | Extracted     |
| `full`           | `9999px`         | Buttons, navigation pills, status badges, tag filters, play/pause controls, avatars. | Extracted     |

---

## 8. Shadow & Elevation Styles

Visual hierarchy uses warm-tinted ambient lighting and blurred translucent backdrops rather than muddy black drop shadows.

### 8.1 Elevation Tiers

| Elevation Level                      | CSS Shadow Value                                                            | Usage                                                 | Source Status |
| ------------------------------------ | --------------------------------------------------------------------------- | ----------------------------------------------------- | ------------- |
| **Level 0 (Base Canvas)**            | `none`                                                                      | Background surface `#FFF8F3`.                         | Extracted     |
| **Level 1 (Resting Cards)**          | `shadow-[0_4px_16px_-2px_rgba(28,26,23,0.04)]`                              | Resting book cards, filter bars, stat blocks.         | Extracted     |
| **Level 1 (Subtle)**                 | `shadow-[0_1px_3px_0_rgba(28,26,23,0.02)]`                                  | Desktop nav pill, filter bars.                        | Extracted     |
| **Level 1 (Mobile)**                 | `shadow-[0_-2px_12px_rgba(28,26,23,0.04)]`                                  | Mobile bottom floating dock.                          | Extracted     |
| **Level 2 (Hover & Active Lift)**    | `shadow-[0_12px_28px_-4px_rgba(255,142,114,0.18)]` + `hover:-translate-y-1` | Hovered book cards, active cards.                     | Extracted     |
| **Level 2 (Studio Reel)**            | `shadow-[0_16px_36px_-6px_rgba(28,26,23,0.12)]`                             | Studio audio reel module container.                   | Extracted     |
| **Level 3 (Floating Bars & Modals)** | `shadow-[0_20px_40px_-8px_rgba(28,26,23,0.08)]`                             | Hero portrait container, mobile floating island dock. | Extracted     |

### 8.2 Colored Glows & Ambient Decorative Elements

| Element                   | CSS Value                                                                                  | Usage                                       | Source Status |
| ------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------- |
| Sunny Yellow CTA Shadow   | `shadow-[0_6px_20px_rgba(254,207,39,0.35)]`                                                | High-energy Sunny Yellow CTA button shadow. | Extracted     |
| Coral Peach Button Shadow | `shadow-[0_4px_16px_-2px_rgba(255,142,114,0.2)]`                                           | Coral Peach button outer glow.              | Extracted     |
| Coral Glow Bubble         | `absolute w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none`     | Ambient decorative backdrop bubble.         | Extracted     |
| Sunlight Glow Bubble      | `absolute w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none`       | Ambient decorative backdrop bubble.         | Extracted     |
| Mint Glow Bubble          | `absolute w-64 h-64 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none`        | Ambient decorative backdrop bubble.         | Extracted     |
| Desktop Header Glass      | `bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(28,26,23,0.04)]`                    | Fixed top header glassmorphism.             | Extracted     |
| Mobile Floating Nav Glass | `bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(28,26,23,0.04)]` | Bottom fixed dock glassmorphism.            | Extracted     |

> **Inferred**: Opacity multipliers on ambient blur bubbles (`/20`, `/30`) and scrim gradient stops (`from-inverse-surface/60`) were present in exported markup but opacity values like `20%`/`30%` are read directly from class strings.

---

## 9. Button Variations & Interaction States

### 9.1 Primary Call to Action (Sunny Yellow)

- **Classes**: `inline-flex items-center gap-space-xs px-7 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm shadow-[0_6px_20px_rgba(254,207,39,0.35)] transition-all`
- **Hover / Active**: `hover:bg-secondary-fixed hover:scale-[1.02] active:scale-95`
- **Source**: Extracted

### 9.2 Secondary / Neutral CTA

- **Classes**: `inline-flex items-center gap-space-xs px-6 py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md shadow-sm transition-all`
- **Hover / Active**: `hover:bg-surface-container-low hover:scale-[1.01] active:scale-95`
- **Source**: Extracted

### 9.3 Pill Action Button (Header CTA)

- **Classes**: `inline-flex items-center justify-center font-label-md bg-primary text-on-primary px-space-md py-2.5 rounded-full shadow-[0_4px_16px_-2px_rgba(255,142,114,0.2)] transition-all`
- **Hover / Active**: `hover:bg-primary-container hover:text-on-primary-container hover:scale-[1.02] active:scale-95`
- **Source**: Extracted

### 9.4 Round Audio Play / Pause Button

- **Desktop Size**: `w-11 h-11` (44px)
- **Mobile Size**: `w-10 h-10` (40px)
- **Classes**: `rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md transition-all active:scale-90`
- **Playing State**: shifts to `bg-tertiary` or displays animated pause icon
- **Source**: Extracted

### 9.5 Service Chip / Status Pill

- **Active Primary**: `px-3.5 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label-md font-semibold transition-all shadow-sm`
- **Inactive Neutral**: `px-3.5 py-2 rounded-full bg-surface-container-highest text-on-surface-variant hover:text-on-surface font-label-md font-semibold transition-all`
- **Source**: Extracted

### 9.6 Category Filter Tabs (Mobile)

- **Inactive**: `px-3.5 py-1.5 rounded-full text-on-surface font-label-sm font-semibold shrink-0 transition-all duration-200 active:scale-95`
- **Active**: `px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm font-semibold shadow-sm transition-all duration-200`
- **Source**: Extracted

### 9.7 Generic Pill Button (Mobile)

- **Classes**: `group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-primary-container text-on-primary font-label-md font-semibold tracking-wide shadow-md active:scale-95 transition-all duration-200`
- **Source**: Extracted

> **Inferred**: Exact hover transition timing functions (`transition-all duration-300 ease-out`), mobile active scale transforms (`active:scale-95`) were present but may vary per component.

---

## 10. Card Styles & Reusable Visual Patterns

### 10.1 Editorial Book Card

- **Container**: `rounded-3xl bg-surface-container-lowest p-space-sm shadow-[0_4px_16px_-2px_rgba(28,26,23,0.04)] hover:shadow-[0_12px_28px_-4px_rgba(255,142,114,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col`
- **Alternative Container**: `group rounded-3xl bg-surface-container-lowest overflow-hidden shadow-[0_4px_16px_-2px_rgba(28,26,23,0.04)] flex flex-col`
- **Image**: `w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`, `rounded-2xl overflow-hidden`
- **Aspect Ratio**: `aspect-[4/3]` (Desktop), `aspect-[4/5]` (Mobile) — **Inferred** from class analysis
- **Meta Row**: Role tag in `text-primary font-bold uppercase font-label-sm`, title in `font-headline-sm group-hover:text-primary transition-colors`, summary in `font-body-sm line-clamp-2`
- **Overlaid Badges**:
  - Top-left category: `px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm font-bold shadow-sm`
  - Bottom-right age rating: `px-2.5 py-1 rounded-full bg-inverse-surface/80 text-inverse-on-surface font-label-sm backdrop-blur-sm`
- **Source**: Extracted classes; aspect ratios inferred

### 10.2 Live Event Hosting Card

- **Container**: `rounded-3xl bg-surface-container-lowest overflow-hidden shadow-[0_4px_16px_-2px_rgba(28,26,23,0.04)] flex flex-col`
- **Banner Image**: `h-72` (Desktop) / `h-44` (Mobile) with overlaid location pill
- **Tags**: Pill badges `bg-surface-container text-on-surface-variant font-label-sm`
- **Source**: Extracted

### 10.3 Studio Audio Reel Module

- **Container**: `rounded-2xl bg-surface-container-lowest p-space-md shadow-[0_16px_36px_-6px_rgba(28,26,23,0.12)] flex flex-col gap-space-xs`
- **Audio Quality Chip**: `bg-tertiary-fixed/30 text-on-tertiary-container px-2 py-0.5 rounded-full font-label-sm font-bold` (e.g., `WAV • 48kHz`)
- **Waveform Visualizer**: `bg-surface-container-low rounded-xl px-2 py-1` with vertical bars `w-1.5 rounded-full`, animated alternating colors (`bg-primary`, `bg-primary-container`, `bg-secondary-container`, `bg-tertiary`)
- **Time Readout**: Monospace-style (`00:26 / 01:45`)
- **Waveform Bar Animation**: `@keyframes eqBounce` — `0%, 100% { height: 18%; transform: scaleY(0.7); } 50% { height: 100%; transform: scaleY(1); }`, duration `0.8s ease-in-out infinite alternate`
- **Source**: Extracted

### 10.4 Key Stat Counter Cards

- **Container Tints** (alternating):
  - Stat 1: `bg-surface-container-lowest`
  - Stat 2: `bg-secondary-container/40`
  - Stat 3: `bg-tertiary-fixed/30`
  - Stat 4: `bg-primary-fixed/40`
- **Stat Number**: `font-display-hero text-headline-lg font-semibold`
- **Source**: Extracted

### 10.5 Hover Lift Pattern

- **Classes**: `hover-lift flex flex-col p-5 rounded-3xl bg-surface-container-lowest shadow-md gap-3 relative overflow-hidden`
- **Source**: Extracted

---

## 11. Responsive Breakpoints & Inferred Layout Transitions

Breakpoints are **inferred** from Tailwind utility class patterns in exported markup (`lg:`, `md:`, `sm:` prefixes). Stitch designMd does not explicitly define breakpoint pixel values; these are engineering inferences from class usage.

| Breakpoint | Tailwind Prefix | Min Width | Source Status |
| ---------- | --------------- | --------- | ------------- |
| Mobile     | (base)          | 0px       | Base          |
| Tablet     | `md:`           | 768px     | Inferred      |
| Desktop    | `lg:`           | 1024px    | Inferred      |

### Grid Transitions

| Component           | Mobile (< 768px)                 | Tablet (768px–1023px) | Desktop (>= 1024px)        | Source Status                |
| ------------------- | -------------------------------- | --------------------- | -------------------------- | ---------------------------- |
| Book Showcase       | `grid-cols-2 gap-3.5`            | `grid-cols-3`         | `grid-cols-3 gap-space-md` | Inferred from class patterns |
| Event Showcase      | `grid-cols-1` stacked            | `grid-cols-2`         | `grid-cols-2 gap-space-md` | Inferred                     |
| Stage / Event Stats | `grid-cols-2 gap-2.5`            | `grid-cols-3`         | `grid-cols-4 gap-space-sm` | Inferred                     |
| About Capabilities  | Pill cloud (flex-wrap)           | Grid 2-col            | 6-item grid                | Inferred                     |
| Contact             | Stacked form + 2x2 contact cards | 5 cols + 7 cols       | 5 cols + 7 cols            | Inferred                     |
| Hero                | Single-column vertical stack     | Asymmetric grid       | Asymmetric 12-col grid     | Inferred                     |

> **Inferred**: Mid-tablet (768px–1023px) transitions between 2-column mobile and 3-column desktop layouts. Exact breakpoint thresholds are not defined in Stitch designMd and require engineering judgment.

---

## 12. Desktop vs. Mobile Layout Differences

| Layout Feature          | Desktop (>= 1024px)                                                                                                  | Mobile (< 768px)                                                                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Global Navigation**   | Top fixed pill dock header (`h-20`). Contains logo, inline section links, "Book Now" CTA, avatar anchor.             | Top minimal bar (`h-16`) + **Bottom fixed floating dock** (`fixed bottom-3 inset-x-0`) with 5 tab buttons (Home, Audio, Events, About, Contact). |
| **Hero Composition**    | Asymmetric 12-column grid (7 cols text/CTAs + 5 cols visual stage). Audio player overlays portrait card at `-mt-16`. | Single-column vertical stack. Audio player sits directly below the portrait card as a full-width module.                                         |
| **Book Showcase**       | 3-column bento grid (`grid-cols-3 gap-space-md`). Book covers `aspect-[4/3]`.                                        | 2-column compact grid (`grid-cols-2 gap-3.5`). Book covers `aspect-[4/5]`.                                                                       |
| **Stage & Event Stats** | 4-column single row (`grid-cols-4 gap-space-sm`).                                                                    | 2x2 grid (`grid-cols-2 gap-2.5`).                                                                                                                |
| **Event Showcase**      | 2-column wide cards (`grid-cols-2 gap-space-md`) with `h-72` image headers.                                          | Stacked 1-column cards with `h-44` image headers.                                                                                                |
| **About Section**       | 5 cols narrative & quote + 7 cols 6-item capability grid.                                                            | Stacked bio text + flex-wrap pill cloud of capabilities.                                                                                         |
| **Contact Section**     | 5 cols direct inquiry channels + 7 cols booking form card.                                                           | Stacked booking form followed by 2x2 grid of direct contact cards (WhatsApp, Email, IG, LinkedIn).                                               |
| **Footer**              | Expanded 12-column footer with navigation and agency columns.                                                        | Integrated with direct reach links above bottom floating dock.                                                                                   |
| **Safe Area**           | Not required.                                                                                                        | `pb-safe` / `pt-safe` using `env(safe-area-inset-*)`.                                                                                            |

---

## 13. Section Hierarchy & Component Boundaries

```
1. <Header>
   ├── Desktop: Top fixed glass pill dock (h-20)
   │    ├── Brand Wordmark + Discipline Subtitle
   │    ├── Availability Indicator Pill
   │    ├── Desktop Nav Links + "Book Now" CTA
   │    └── Avatar Anchor
   └── Mobile: Top minimal bar (h-16)
        ├── Brand + Hamburger/Menu
        └── CTA Button

2. <HeroSection>
   ├── Status Greeting Pill ("Halo! Open for 2025 Projects")
   ├── Main Headline (Outfit display-hero)
   ├── Subtitle & Discipline Tagline
   ├── Primary CTA ("Book for Event / Voice")
   ├── Secondary CTA ("Explore Books & Demos")
   ├── Trust Badges Strip
   └── <HeroVisualDeck>
        ├── Editorial Studio Portrait with Ambient Scrim
        ├── Floating Sticker ("High Energy")
        └── <AudioReelModule>

3. <EditorialSection> (#editorial-portfolio)
   ├── Section Header + Discipline Kicker
   ├── Category Filter Pills ("All", "Storybooks", "Encyclopedias", "Science")
   └── <BookGrid> (6 Book Cards)

4. <EventSection> (#mc-live-stage)
   ├── Section Header ("Commanding the Stage with Infectious Warmth")
   ├── Key Stat Metric Cards
   ├── Highlight Event Cards
   └── Client Trust Logo Strip

5. <AboutSection> (#about-naulia)
   ├── Philosophy Kicker & Headline
   ├── Bio Prose + Highlight Quote Box
   └── Capabilities Grid (6 items desktop, pill cloud mobile)

6. <ContactSection> (#contact)
   ├── Section Header ("Let's Create Magic Together")
   ├── Direct Reach Channels (WhatsApp, Email Studio, Instagram, LinkedIn)
   └── <BookingForm> (Service pills, name, contact, timeline, budget, message)

7. <Footer>
   ├── Brand & Ethos Summary
   ├── Quick Navigation Links
   ├── Representation / Direct Agency Box
   └── Copyright & Location Strip ("Jakarta • Remote Worldwide")

8. <MobileBottomDock> (Mobile Only)
   └── Fixed Floating Glass Pill (Home, Audio, Events, About, Contact)
```

---

## 14. Tailwind CSS v4 Implementation Guide

Tailwind CSS v4 uses **CSS-native `@theme` declarations** instead of JavaScript config files.

### 14.1 Token Integration (`src/styles/tokens.css`)

```css
@theme {
  /* Brand Primary Colors */
  --color-primary: #9d422c;
  --color-primary-container: #ff8e72;
  --color-on-primary: #ffffff;
  --color-on-primary-container: #762612;
  --color-primary-fixed: #ffdad2;
  --color-primary-fixed-dim: #ffb4a2;
  --color-on-primary-fixed: #3c0700;
  --color-on-primary-fixed-variant: #7e2c17;
  --color-inverse-primary: #ffb4a2;

  /* Secondary Colors */
  --color-secondary: #735c00;
  --color-secondary-container: #fecf27;
  --color-on-secondary: #ffffff;
  --color-on-secondary-container: #705900;
  --color-secondary-fixed: #ffe087;
  --color-secondary-fixed-dim: #efc112;
  --color-on-secondary-fixed: #231a00;
  --color-on-secondary-fixed-variant: #574500;

  /* Tertiary Colors */
  --color-tertiary: #006c52;
  --color-tertiary-container: #55c09c;
  --color-on-tertiary: #ffffff;
  --color-on-tertiary-container: #004b38;
  --color-tertiary-fixed: #8cf6d0;
  --color-tertiary-fixed-dim: #70dab4;
  --color-on-tertiary-fixed: #002117;
  --color-on-tertiary-fixed-variant: #00513d;

  /* Canvas & Surface Roles */
  --color-surface: #fff8f3;
  --color-background: #fff8f3;
  --color-surface-dim: #dfd9d4;
  --color-surface-bright: #fff8f3;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f9f2ed;
  --color-surface-container: #f3ede7;
  --color-surface-container-high: #ede7e2;
  --color-surface-container-highest: #e7e1dc;
  --color-surface-variant: #e7e1dc;
  --color-surface-tint: #9d422c;

  /* Typography Neutrals */
  --color-on-surface: #1d1b18;
  --color-on-surface-variant: #56423e;
  --color-on-background: #1d1b18;
  --color-inverse-surface: #32302d;
  --color-inverse-on-surface: #f6f0ea;

  /* Outlines & Borders */
  --color-outline: #89726d;
  --color-outline-variant: #dcc0ba;

  /* Semantic Status */
  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;

  /* Typography Font Families */
  --font-headline: 'Outfit', sans-serif;
  --font-body: 'Hanken Grotesk', sans-serif;

  /* Custom Spacing Tokens */
  --spacing-space-xs: 0.375rem;
  --spacing-space-sm: 0.75rem;
  --spacing-space-md: 1.25rem;
  --spacing-space-lg: 2rem;
  --spacing-space-xl: 3.5rem;
  --spacing-gutter: 1.5rem;
  --spacing-gutter-mobile: 1rem;
  --spacing-margin: 3rem;
  --spacing-margin-mobile: 1.25rem;
}
```

### 14.2 Custom Utility Classes (`src/styles/global.css`)

```css
@layer utilities {
  /* Typography Presets */
  .font-display-hero {
    font-family: var(--font-headline);
    font-size: 4.5rem;
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }
  .font-display-hero-mobile {
    font-family: var(--font-headline);
    font-size: 2.75rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
  .font-headline-lg {
    font-family: var(--font-headline);
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }
  .font-headline-lg-mobile {
    font-family: var(--font-headline);
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .font-headline-md {
    font-family: var(--font-headline);
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.015em;
  }
  .font-headline-sm {
    font-family: var(--font-headline);
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }
  .font-body-lg {
    font-family: var(--font-body);
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.005em;
  }
  .font-body-md {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.55;
    letter-spacing: 0em;
  }
  .font-body-sm {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.005em;
  }
  .font-label-md {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.04em;
  }
  .font-label-sm {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0.06em;
  }

  /* Safe Area Helpers for Mobile */
  .pb-safe {
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
  .pt-safe {
    padding-top: env(safe-area-inset-top, 0px);
  }
}
```

---

## 15. Extracted vs. Inferred Properties Summary

| Property Category      | Extracted (Direct Stitch Reference)                                                                            | Inferred (Engineering Judgment)                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Colors**             | All 42 named hex values for primary, secondary, tertiary, neutral surfaces, text, outlines.                    | Opacity multipliers on ambient blur bubbles (`/20`, `/30`, `/40`) and scrim gradient stops (`from-inverse-surface/60`). |
| **Typography**         | Font families (`Outfit`, `Hanken Grotesk`), sizes, line-heights, letter-spacing, weights across all 11 tokens. | Fallback font stacks (`sans-serif`), font-loading strategy (`preconnect` vs local woff2).                               |
| **Spacing & Grid**     | Token scale (`space-xs`–`space-xl`, `gutter`, `margin`), desktop max-width `1280px`.                           | Mid-tablet layout behavior (768px–1023px), exact breakpoint pixel thresholds.                                           |
| **Radius & Elevation** | Scale tokens (`sm`–`full`), specific box-shadow strings.                                                       | Hover transition timing functions, mobile active scale transforms.                                                      |
| **Navigation**         | Desktop fixed glass header, mobile bottom glass pill dock.                                                     | Scroll hide/reveal behavior of mobile dock, active state persistence.                                                   |
| **Components**         | All button, card, chip, waveform classes from exported markup.                                                 | Component composition patterns, prop interfaces, CMS field mappings.                                                    |

---

## 16. Flagged Missing Information & Ambiguous Design Decisions

1. **Content Language Strategy**:
   - Stitch includes both English (`en`) and Indonesian (`id`) screen variants plus a dedicated "Versi Bahasa Indonesia" screen.
   - _Decision needed_: Bilingual i18n routing vs curated bilingual hybrid (Indonesian work titles with English site narrative).

2. **Audio Track Repertoire**:
   - Stitch includes 3 genre tabs (`Storybook`, `Commercial`, `Character VO`) in the audio module.
   - PRD calls for standalone audio files in `public/audio/sample-01.mp3`.
   - _Decision needed_: Exact initial audio file names, metadata, and whether hero audio player synchronizes with or duplicates the dedicated Audio Showcase section.

3. **Form Submission Destination**:
   - Stitch mock includes an interactive booking form (`#portfolio-booking-form` / `#inquiryForm`).
   - Site hosted on Cloudflare Pages without backend database.
   - _Decision needed_: Formspree, Cloudflare Worker / Turnstile, `mailto:` link, or WhatsApp redirect.

4. **Mobile Bottom Dock Scroll Behavior**:
   - Dock pinned with `fixed bottom-3 inset-x-0 z-50`.
   - _Decision needed_: Visible at all times or auto-hides on scroll down / reveals on scroll up.

5. **Image Aspect Ratios**:
   - Desktop book cards appear to use `aspect-[4/3]`, mobile `aspect-[4/5]` based on class patterns and dimensions.
   - _Decision needed_: Confirm exact ratios against final exported image assets before implementation.

---

**End of Design Specification**

**Status**: Complete — ready for Phase 2 (Design System) implementation. No application source code was modified.
