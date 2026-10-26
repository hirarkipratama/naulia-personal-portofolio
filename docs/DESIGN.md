# Design Specification — Naulia Zahra Creative Portfolio

> **Source of Truth**: Google Stitch Project `Naulia Zahra Creative Portfolio` (Project ID: `15143213659924096057`, Design System: `Curated Lumina`).  
> **Target Framework**: Astro + Tailwind CSS v4 + TypeScript.

---

## 1. Executive Summary & Brand Identity

The visual design system for **Naulia Zahra's Creative Portfolio** embodies an elevated **"Curated Lumina"** aesthetic — an intersection of architectural precision, playful Gen-Z vitality, and warm editorial craftsmanship. 

As a professional who operates across three distinct disciplines — **Children’s & Science Book Editor**, **Event MC & Moderator**, and **Expressive Voice-Over Artist** — the design strikes a balance between:
- **Warm Editorial Precision**: Generous white space, disciplined 12-column grid geometry, and refined typography.
- **Vibrant Optimism**: Dynamic coral-peach tones (`#FF8E72`) supported by sun-drenched yellows (`#FECF27`), refreshing mints (`#55C09C`), and soft sky accents.
- **Tactile Depth**: Ambient warm-tinted shadows, frosted glassmorphism (`backdrop-blur-xl`), pill-shaped containers, and playful sticker badges.

---

## 2. Color Palette & Token System

All hex values below are **extracted directly from the Stitch project design theme and exported markup**.

### 2.1 Brand & Accent Colors

| Role Token | Extracted Hex | Sample / Usage | Source Status |
|---|---|---|---|
| `primary` | `#9D422C` | Deep terra-cotta russet. Used for prominent headings, brand anchors, primary button active states. | Extracted |
| `primary-container` | `#FF8E72` | Signature Coral Peach. Key call-to-action fills, active navigation pills, hover halos. | Extracted |
| `on-primary` | `#FFFFFF` | Text/icons on primary fills. | Extracted |
| `on-primary-container` | `#762612` | Deep chestnut text on coral-peach containers. | Extracted |
| `primary-fixed` | `#FFDAD2` | Soft blush peach background for icon badges. | Extracted |
| `primary-fixed-dim` | `#FFB4A2` | Muted blush peach border/subtle hover. | Extracted |
| `on-primary-fixed` | `#3C0700` | Deepest mahogany text on fixed primary chips. | Extracted |
| `on-primary-fixed-variant` | `#7E2C17` | Secondary text on fixed primary chips. | Extracted |
| `secondary` | `#735C00` | Warm golden ochre. Subheadings, icons, and status badges. | Extracted |
| `secondary-container` | `#FECF27` | Marigold Sunny Yellow. High-energy hero CTA ("Book for Event"), highlight badges. | Extracted |
| `on-secondary` | `#FFFFFF` | Text on secondary fills. | Extracted |
| `on-secondary-container` | `#705900` | Golden brown text on yellow containers. | Extracted |
| `secondary-fixed` | `#FFE087` | Soft sunlight yellow for category tags and portrait deck accents. | Extracted |
| `secondary-fixed-dim` | `#EFC112` | Amber yellow for muted highlights. | Extracted |
| `on-secondary-fixed` | `#231A00` | High-contrast dark brown on fixed yellow. | Extracted |
| `on-secondary-fixed-variant` | `#574500` | Muted brown on fixed yellow. | Extracted |
| `tertiary` | `#006C52` | Deep forest jade / emerald. Audio indicators, success states, verified icons. | Extracted |
| `tertiary-container` | `#55C09C` | Mint aqua / seafoam. Waveform bars, secondary interactive states. | Extracted |
| `on-tertiary` | `#FFFFFF` | Text on tertiary fills. | Extracted |
| `on-tertiary-container` | `#004B38` | Deep pine green text on mint containers. | Extracted |
| `tertiary-fixed` | `#8CF6D0` | Soft pastel mint for availability pills and science tags. | Extracted |
| `tertiary-fixed-dim` | `#70DAB4` | Mid-tone mint for hover states. | Extracted |
| `on-tertiary-fixed` | `#002117` | Very dark pine text on mint pills. | Extracted |
| `on-tertiary-fixed-variant` | `#00513D` | Forest green text on mint pills. | Extracted |

### 2.2 Neutral Canvas & Surface Layers

| Role Token | Extracted Hex | Purpose & Usage | Source Status |
|---|---|---|---|
| `surface` / `background` | `#FFF8F3` | Warm Alabaster canvas. Organic, cheerful backdrop avoiding sterile pitch white or cold gray. | Extracted |
| `surface-bright` | `#FFF8F3` | Elevated surface variant. | Extracted |
| `surface-dim` | `#DFD9D4` | Muted background boundary. | Extracted |
| `surface-container-lowest` | `#FFFFFF` | Pure white. Primary surface for cards, content blocks, modal overlays, form cards. | Extracted |
| `surface-container-low` | `#F9F2ED` | Warm tinted card inset, audio player scrub track, secondary strip background. | Extracted |
| `surface-container` | `#F3EDE7` | Neutral tag pills, image fallbacks. | Extracted |
| `surface-container-high` | `#EDE7E2` | Borders, subtle dividers, inactive scrubber tracks. | Extracted |
| `surface-container-highest` | `#E7E1DC` | Secondary chip resting state, subtle field fills. | Extracted |
| `on-surface` | `#1D1B18` | Warm charcoal. Primary typography color ensuring crisp contrast without harshness. | Extracted |
| `on-surface-variant` | `#56423E` | Muted espresso brown. Secondary body copy, timestamps, subtitles. | Extracted |
| `outline` | `#89726D` | Structural boundaries, high-contrast borders. | Extracted |
| `outline-variant` | `#DCC0BA` | Hairline dividers, card outlines, subtle borders. *(Note: `#F0EDE4` is also used in design documentation as an ultra-subtle border)*. | Extracted |
| `inverse-surface` | `#32302D` | Dark charcoal for badge backings and scrim gradients. | Extracted |
| `inverse-on-surface` | `#F6F0EA` | Off-white text on dark scrims and overlays. | Extracted |

### 2.3 Semantic & Functional Tints

| Role Token | Extracted Hex | Purpose | Source Status |
|---|---|---|---|
| `error` | `#BA1A1A` | Form validation errors and alerts. | Extracted |
| `error-container` | `#FFDAD6` | Error banner background. | Extracted |
| `on-error` | `#FFFFFF` | Text on error fills. | Extracted |
| `on-error-container` | `#93000A` | Text on error banners. | Extracted |

---

## 3. Typography Hierarchy

The design combines **Outfit** (display/headings) for geometric warmth and stage confidence with **Hanken Grotesk** (body/labels) for humanist editorial legibility.

### 3.1 Font Families

```css
--font-headline: 'Outfit', sans-serif;
--font-body: 'Hanken Grotesk', sans-serif;
```

Iconography is rendered via **Google Material Symbols Outlined** (`opsz: 20..48`, `wght: 100..700`, `FILL: 0..1`).

### 3.2 Type Scale (Extracted Specifications)

| Token Name | Family | Font Size | Line Height | Weight | Letter Spacing | Extracted / Inferred |
|---|---|---|---|---|---|---|
| `display-hero` | Outfit | `4.5rem` (72px) | `1.05` | 600 (SemiBold) | `-0.03em` | Extracted (Desktop) |
| `display-hero-mobile` | Outfit | `2.75rem` (44px) | `1.1` | 600 (SemiBold) | `-0.02em` | Extracted (Mobile) |
| `headline-lg` | Outfit | `3rem` (48px) | `1.15` | 600 (SemiBold) | `-0.025em` | Extracted (Desktop) |
| `headline-lg-mobile` | Outfit | `2rem` (32px) | `1.2` | 600 (SemiBold) | `-0.02em` | Extracted (Mobile) |
| `headline-md` | Outfit | `2rem` (32px) | `1.25` | 500 (Medium) | `-0.015em` | Extracted |
| `headline-sm` | Outfit | `1.375rem` (22px) | `1.3` | 500 (Medium) | `-0.01em` | Extracted |
| `body-lg` | Hanken Grotesk | `1.125rem` (18px) | `1.6` | 400 (Regular) | `-0.005em` | Extracted |
| `body-md` | Hanken Grotesk | `1rem` (16px) | `1.55` | 400 (Regular) | `0em` | Extracted |
| `body-sm` | Hanken Grotesk | `0.875rem` (14px) | `1.5` | 400 (Regular) | `0.005em` | Extracted |
| `label-md` | Hanken Grotesk | `0.8125rem` (13px) | `1.2` | 600 (SemiBold) | `0.04em` | Extracted |
| `label-sm` | Hanken Grotesk | `0.6875rem` (11px) | `1.1` | 700 (Bold) | `0.06em` | Extracted |

---

## 4. Spacing Scale, Grid & Layout Geometry

### 4.1 Spacing Tokens (Extracted)

| Token | CSS Value | Pixel Equivalent | Typical Usage |
|---|---|---|---|
| `space-xs` | `0.375rem` | 6px | Badge icon gaps, inline tag padding, micro-spacing. |
| `space-sm` | `0.75rem` | 12px | Card interior insets, chip gaps, small button padding. |
| `space-md` | `1.25rem` | 20px | Card internal padding, medium gaps, form field spacing. |
| `space-lg` | `2rem` | 32px | Section headers to grid spacing, large component insets. |
| `space-xl` | `3.5rem` | 56px | Vertical rhythm between major sections, hero padding. |
| `gutter` | `1.5rem` | 24px | Desktop 12-column grid gap. |
| `gutter-mobile` | `1rem` | 16px | Mobile layout column gap. |
| `margin` | `3rem` | 48px | Desktop outer page margin. |
| `margin-mobile` | `1.25rem` | 20px | Mobile outer page margin. |

### 4.2 Grid Structure & Breakpoints

- **Max Container Width**: `1280px` (`max-w-[1280px] mx-auto`).
- **Desktop (1024px+)**:
  - 12-column fluid grid (`grid grid-cols-12 gap-space-lg`).
  - Outer margins: `px-margin` (`3rem` / 48px).
- **Tablet (768px – 1023px, Inferred)**:
  - 6-to-8 column flow (`md:grid-cols-2`, `md:grid-cols-4`).
  - Outer margins: `px-margin` (`3rem` / 48px) or `2rem` (inferred).
- **Mobile (< 768px)**:
  - 4-column flow / stacked 1-column layouts.
  - Outer margins: `px-margin-mobile` (`1.25rem` / 20px).
  - Column gap: `gap-3.5` (14px) to `gap-4` (16px).

---

## 5. Border Radius & Shapes

Corners balance playful friendliness with architectural discipline.

| Radius Token | Value | Applied Components |
|---|---|---|
| `sm` / `DEFAULT` | `0.25rem` (4px) | Checkboxes, inline code badges. |
| `lg` | `0.5rem` (8px) | Form inputs (`input`, `textarea`, `select`), compact cards. |
| `xl` | `0.75rem` (12px) | Waveform visualizer container, direct contact icon wrappers, small panels. |
| `2xl` | `1rem` (16px) | Book card nested image containers, event cards, form containers, audio player card. |
| `3xl` | `1.5rem` (24px) | Desktop book cards, hero portrait frame, stat cards, contact section panel. |
| `full` | `9999px` | Buttons, navigation pills, status badges, tag filters, play/pause controls, avatars. |

---

## 6. Elevation, Shadows & Atmospheric Depth

Visual hierarchy uses **warm-tinted ambient lighting and blurred translucent backdrops** rather than muddy black drop shadows.

### 6.1 Elevation Tiers

| Elevation Level | CSS Shadow Value | Usage |
|---|---|---|
| **Level 0 (Base Canvas)** | `none` | Background surface `#FFF8F3`. |
| **Level 1 (Resting Cards & Bars)** | `shadow-[0_1px_3px_0_rgba(28,26,23,0.02)]` or `shadow-sm` | Filter bars, stat blocks, resting book cards (`shadow-[0_4px_16px_-2px_rgba(28,26,23,0.04)]`). |
| **Level 2 (Hover & Active Lift)** | `shadow-[0_12px_28px_-4px_rgba(255,142,114,0.18)]` + `hover:-translate-y-1` | Hovered book cards, active cards, studio reel deck (`shadow-[0_16px_36px_-6px_rgba(28,26,23,0.12)]`). |
| **Level 3 (Floating Bars & Modals)** | `shadow-[0_20px_40px_-8px_rgba(28,26,23,0.08)]` | Hero portrait container, mobile floating island dock (`shadow-[0_8px_32px_-4px_rgba(28,26,23,0.08)]`). |

### 6.2 Colored Glows & Ambient Decorative Elements

- **Sunny Yellow CTA Shadow**: `shadow-[0_6px_20px_rgba(254,207,39,0.35)]`
- **Coral Peach Button Shadow**: `shadow-[0_4px_16px_-2px_rgba(255,142,114,0.2)]` or `shadow-[0_4px_12px_rgba(255,142,114,0.25)]`
- **Ambient Blurred Backdrops**:
  - Coral Peach Glow: `absolute w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none`
  - Sunlight Glow: `absolute w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none`
  - Mint Glow: `absolute w-64 h-64 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none`
- **Glassmorphic Headers & Navbars**:
  - Desktop Header: `bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(28,26,23,0.04)]`
  - Mobile Floating Nav: `bg-surface-container-lowest/90 backdrop-blur-2xl shadow-[0_8px_32px_-4px_rgba(28,26,23,0.08)]`

---

## 7. Component Specifications & Interaction States

### 7.1 Buttons & Interactive Controls

1. **Primary Call to Action (High Energy Sunny Yellow)**:
   - Base Classes: `inline-flex items-center gap-space-xs px-7 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm shadow-[0_6px_20px_rgba(254,207,39,0.35)] transition-all`
   - Hover / Active: `hover:bg-secondary-fixed hover:scale-[1.02] active:scale-95`
2. **Secondary / Neutral CTA**:
   - Base Classes: `inline-flex items-center gap-space-xs px-6 py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md shadow-sm transition-all`
   - Hover / Active: `hover:bg-surface-container-low hover:scale-[1.01] active:scale-95`
3. **Pill Action Button ("Book Now" in Header)**:
   - Base Classes: `inline-flex items-center justify-center font-label-md bg-primary text-on-primary px-space-md py-2.5 rounded-full shadow-[0_4px_16px_-2px_rgba(255,142,114,0.2)] transition-all`
   - Hover / Active: `hover:bg-primary-container hover:text-on-primary-container hover:scale-[1.02] active:scale-95`
4. **Round Audio Play / Pause Button**:
   - Size: `w-11 h-11` (desktop) / `w-13 h-13` (mobile).
   - Base: `rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-md transition-all active:scale-90`.
   - Playing State: shifts to `bg-tertiary` or displays animated pause icon.

### 7.2 Chips, Pills & Status Badges

1. **Availability Status Pill**:
   - Outer Container: `inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-label-md shadow-sm`
   - Animated Pulse Dot: `w-2.5 h-2.5 rounded-full bg-tertiary animate-ping` paired with `w-2 h-2 rounded-full bg-tertiary`
   - Text: `Halo! Open for 2025 Projects`
2. **Category / Genre Filter Tabs**:
   - Inactive: `px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface font-label-md font-semibold transition-all`
   - Active: `px-4 py-2 rounded-full bg-primary text-on-primary font-label-md font-semibold shadow-sm transition-all` (Mobile uses `bg-on-surface text-surface`)
3. **Overlaid Book Badges**:
   - Top-left category tag: `px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm font-bold shadow-sm`
   - Bottom-right age rating tag: `px-2.5 py-1 rounded-full bg-inverse-surface/80 text-inverse-on-surface font-label-sm backdrop-blur-sm`

### 7.3 Cards & Reusable Patterns

1. **Editorial Book Card**:
   - Container: `rounded-3xl bg-surface-container-lowest p-space-sm shadow-[0_4px_16px_-2px_rgba(28,26,23,0.04)] hover:shadow-[0_12px_28px_-4px_rgba(255,142,114,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col`
   - Image Ratio: `aspect-[4/3]` (Desktop) or `aspect-[4/5]` (Mobile) with `rounded-2xl overflow-hidden`.
   - Image Hover: `group-hover:scale-105 transition-transform duration-500`.
   - Meta Row: Role tag in `text-primary font-bold uppercase font-label-sm`, title in `font-headline-sm group-hover:text-primary transition-colors`, summary in `font-body-sm line-clamp-2`, footer row with publisher details and `arrow_outward` icon (`group-hover:translate-x-1 transition-transform`).
2. **Live Event Hosting Card**:
   - Container: `rounded-3xl bg-surface-container-lowest overflow-hidden shadow-[0_4px_16px_-2px_rgba(28,26,23,0.04)] flex flex-col`
   - Banner Image: `h-72` (Desktop) / `h-44` (Mobile) with overlaid location pill and audience badge (`Audience: 1,200+`).
   - Tags: Pill badges (`bg-surface-container text-on-surface-variant font-label-sm`).
3. **Studio Audio Reel Module**:
   - Container: `rounded-2xl bg-surface-container-lowest p-space-md shadow-[0_16px_36px_-6px_rgba(28,26,23,0.12)] flex flex-col gap-space-xs`
   - Audio Quality Chip: `bg-tertiary-fixed/30 text-on-tertiary-container px-2 py-0.5 rounded-full font-label-sm font-bold` (`WAV • 48kHz`).
   - Waveform Visualizer: `bg-surface-container-low rounded-xl px-2 py-1` housing vertical bars (`w-1.5 rounded-full`) animated with alternating color classes (`bg-primary`, `bg-primary-container`, `bg-secondary-container`, `bg-tertiary`).
   - Time Elapsed: Monospace-style time readout (`00:26 / 01:45`).
4. **Key Stat Counter Cards**:
   - Alternating Container Tints:
     - Stat 1: `bg-surface-container-lowest`
     - Stat 2: `bg-secondary-container/40`
     - Stat 3: `bg-tertiary-fixed/30`
     - Stat 4: `bg-primary-fixed/40`
   - Stat Number: `font-display-hero text-headline-lg font-semibold`.

---

## 8. Desktop vs. Mobile Layout Differences

| Layout Feature | Desktop (>= 1024px) | Mobile (< 768px) |
|---|---|---|
| **Global Navigation** | Top fixed pill dock header (`h-20`). Contains logo, inline section links, "Book Now" CTA, and profile badge. | Top minimal bar (`h-16`) + **Bottom fixed floating dock** (`fixed bottom-3 inset-x-0`) with 5 tab buttons (`Home`, `Audio`, `Events`, `About`, `Contact`). |
| **Hero Composition** | Asymmetric 12-column grid (7 cols text/CTAs + 5 cols visual stage). Audio player overlays portrait card at `-mt-16`. | Single-column vertical stack. Audio player sits directly below the portrait card as a full-width module. |
| **Book Showcase** | 3-column bento grid (`grid-cols-3 gap-space-md`). Book covers use `aspect-[4/3]`. | 2-column compact grid (`grid-cols-2 gap-3.5`). Book covers use `aspect-[4/5]`. |
| **Stage & Event Stats** | 4-column single row (`grid-cols-4 gap-space-sm`). | 2x2 grid (`grid-cols-2 gap-2.5`). |
| **Event Showcase** | 2-column wide cards (`grid-cols-2 gap-space-md`) with `h-72` image headers. | Stacked 1-column cards with `h-44` image headers. |
| **About Section** | 5 cols narrative & quote + 7 cols 6-item capability grid. | Stacked bio text + flex-wrap pill cloud of capabilities. |
| **Contact Section** | 5 cols direct inquiry channels + 7 cols booking form card. | Stacked booking form followed by a 2x2 grid of direct contact cards (WhatsApp, Email, IG, LinkedIn). |
| **Footer** | Expanded 12-column footer with 3 navigation and agency columns. | Integrated with direct reach links above the bottom floating dock. |

---

## 9. Section Hierarchy & Component Boundaries

```text
1. <Header> (Desktop Top Nav / Mobile Top Status Bar)
   ├── Brand Wordmark & Discipline Subtitle
   ├── Availability Indicator Pill
   ├── Desktop Nav Links / Mobile "Book" Action
   └── Avatar Anchor

2. <HeroSection>
   ├── Status Greeting Pill ("Halo! Open for 2025 Projects")
   ├── Main Headline (Outfit 4.5rem / 2.75rem)
   ├── Subtitle & Discipline Hybrid Tagline
   ├── Primary CTA ("Book for Event / Voice") & Secondary CTA ("Explore Books & Demos")
   ├── Trust Badges Strip (Gramedia Official MC, 15+ Titles Edited, Expressive VO)
   └── <HeroVisualDeck>
       ├── Editorial Studio Portrait with Ambient Backdrop Scrim
       ├── Floating Sticker ("High Energy")
       └── <AudioReelModule> (Play/Pause, Waveform Visualizer, Genre Tabs, Scrubber)

3. <EditorialSection> (#editorial-portfolio / #editorial)
   ├── Section Header & Discipline Kicker ("Literary & STEM Works")
   ├── Category Filter Pills ("All", "Storybooks", "Encyclopedias", "Science")
   └── <BookGrid> (6 Book Cards with cover art, age rating, editor role, synopsis)

4. <EventSection> (#mc-live-stage / #events)
   ├── Section Header ("Commanding the Stage with Infectious Warmth")
   ├── Key Stat Metric Cards (50+ Events, Gramedia Partner, 10+ Audiobooks, 98% Re-book)
   ├── Highlight Event Cards (Gramedia Kids Book Fest 2024, Youth Science Talk Series)
   └── Client Trust Logo Strip (Gramedia, Kompas Edukasi, Kemendikbud Literacy, Mizan Kids)

5. <AboutSection> (#about-naulia / #about)
   ├── Philosophy Kicker & Headline ("Where Editorial Rigor Meets Warm Expressive Energy")
   ├── Bio Prose & Highlight Quote Box
   └── Capabilities Grid (6 items on desktop, pill cloud on mobile)

6. <ContactSection> (#contact)
   ├── Section Header ("Let's Create Magic Together")
   ├── Direct Reach Channels (WhatsApp, Email Studio, Instagram, LinkedIn)
   └── <BookingForm> (Service selection pills, name, contact, timeline, budget tier, message)

7. <Footer>
   ├── Brand & Ethos Summary
   ├── Quick Navigation Links
   ├── Representation / Direct Agency Box
   └── Copyright & Location Strip ("Jakarta • Remote Worldwide")

8. <MobileBottomDock> (Mobile Only)
   └── Fixed Floating Glass Pill (Home, Audio, Events, About, Contact)
```

---

## 10. Tailwind CSS v4 Implementation Guide

Tailwind CSS v4 replaces JavaScript configuration files (`tailwind.config.js`) with **CSS-native theme declarations via `@theme`**.

### 10.1 Token Integration (`src/styles/tokens.css`)

To implement this design system in Tailwind CSS v4, add the following configuration to `src/styles/tokens.css` (or `src/styles/global.css`):

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

  /* Canvas and Surface Roles */
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

### 10.2 Custom Utility Classes (`src/styles/global.css`)

For typography composites and elevation presets:

```css
@layer utilities {
  /* Typography Utility Presets */
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

  /* Safe Area Helpers for Mobile Devices */
  .pb-safe {
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }

  .pt-safe {
    padding-top: env(safe-area-inset-top, 0px);
  }
}
```

---

## 11. Extracted vs. Inferred Properties Summary

| Property Category | Extracted Properties (Direct Stitch Reference) | Inferred Values (Requires Engineering Judgment) |
|---|---|---|
| **Colors** | All 42 named hex values for primary, secondary, tertiary, neutral surfaces, text, and outlines. | Opacity multipliers for ambient blur bubbles (`/20`, `/30`, `/40`) and scrim gradient stops (`from-inverse-surface/60`). |
| **Typography** | Font families (`Outfit`, `Hanken Grotesk`), sizes, line-heights, letter-spacing, and weights across all 11 typography tokens. | Fallback font stacks (`sans-serif`, system-ui) and font loading strategy (`preconnect` Google Fonts vs local woff2). |
| **Spacing & Grid** | Token scale (`space-xs` through `space-xl`, `gutter`, `margin`), desktop max-width `1280px`. | Mid-tablet layout behavior (768px–1023px) transitions between 2-column mobile and 3-column desktop. |
| **Radius & Elevation** | Scale tokens (`sm: 0.25rem`, `DEFAULT: 0.5rem`, `md: 0.75rem`, `lg: 1rem`, `xl: 1.5rem`, `full: 9999px`) and specific box-shadow strings. | Hover transition timing functions (`transition-all duration-300 ease-out`) and mobile active scale transforms (`active:scale-95`). |
| **Navigation** | Desktop fixed glass header and mobile bottom glass pill dock layout. | Behavior on scroll down/up (whether mobile dock hides on rapid scroll or stays pinned). |

---

## 12. Flagged Missing Information & Ambiguous Design Decisions

The following items should be resolved prior to or during Phase 3/4 implementation:

1. **Content Language Strategy**:
   - The primary Stitch screen combines English UI copy with Indonesian book titles and testimonials ("Petualangan Sains Si Kancil", "Terima kasih! Naulia will reply...").
   - There is also a dedicated screen variant for *Versi Bahasa Indonesia* (`9c32a22bd8b445afb939fd14114ffda8`).
   - *Decision needed*: Confirm whether the website is bilingual via i18n routing or a curated bilingual hybrid (Indonesian work titles with English site narrative).
2. **Audio Track Repertoire**:
   - The Stitch design includes 3 genre tabs (`Storybook`, `Commercial`, `Character VO` / `Expressive VO`) in the audio module, but the PRD calls for standalone audio files in `public/audio/sample-01.mp3`.
   - *Decision needed*: Confirm exact initial audio file names, metadata, and whether hero audio player synchronizes with or duplicates the dedicated Audio Showcase section.
3. **Form Submission Destination**:
   - The Stitch mock includes an interactive booking form (`#portfolio-booking-form` / `#inquiryForm`) with client name, service pills, contact info, timeline, and budget.
   - *Decision needed*: Since the site is hosted on Cloudflare Pages without a backend database, determine if this form will submit via Formspree, Cloudflare Worker / Turnstile, `mailto:` link, or WhatsApp redirect.
4. **Mobile Bottom Dock Scroll Behavior**:
   - The bottom dock is pinned with `fixed bottom-3 inset-x-0 z-50 pointer-events-none`.
   - *Decision needed*: Confirm whether it remains visible at all times or smoothly auto-hides when scrolling down and reveals when scrolling up.