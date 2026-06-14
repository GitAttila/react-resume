# React Resume — Interactive Portfolio & CV

A single-page, interactive resume and portfolio web application built with **React**, **TypeScript**, and **Vite**. Designed to present professional experience, projects, awards, and certificates in a visually rich, fully navigable format — complete with lightbox galleries, dark/light theming, and a downloadable PDF resume.

---

## ✨ Features

- **Hero carousel** — animated intro slides
- **Profile section** — summary, professional experience timeline, education timeline, language skills, and contact links
- **Dev stack section** — visual overview of technologies
- **Portfolio / Projects** — filterable project cards (Angular, React, UX, Web, Graphics) with per-project image galleries
- **Awards** — award cards with full-screen lightbox gallery
- **Certificates** — filterable Udemy certificate cards with lightbox viewer
- **Tech stripe** — icon links to all tools/technologies used
- **PDF download** — direct resume download from the app
- **Dark / Light theme toggle** — CSS class-based theming applied at the `<body>` level
- **Scroll-aware sticky header** — header fades in as the hero section leaves the viewport
- **Active nav highlight** — navigation items highlight automatically as sections scroll into view via `IntersectionObserver`

---

## 🛠 Tech Stack

| Layer        | Technology                      |
| ------------ | ------------------------------- |
| UI Framework | React 19                        |
| Language     | TypeScript                      |
| Build Tool   | Vite 8                          |
| Styling      | SCSS (Sass) with CSS Modules    |
| Icons        | react-icons                     |
| Lightbox     | yet-another-react-lightbox      |
| Linting      | ESLint 10 + TypeScript-ESLint   |
| Custom Fonts | Anton, Josefin Sans, Poiret One |

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── fonts/          # Self-hosted font files (.ttf)
│   ├── images/         # All project/award/certificate images + portrait
│   └── pdfs/           # Downloadable resume PDF
├── components/
│   ├── Features/       # Page-level feature sections (hero, timeline, portfolios, etc.)
│   └── [Shared]/       # Reusable UI components (Card, Carousel, Button, Header…)
├── content/            # All static data constants (project cards, timeline entries,
│   │                   #   carousel slides, certificate lists, nav items…)
│   └── lightbox/       # Per-gallery slide arrays + lightbox key map
├── consts/             # App-wide constants (nav items, lightbox settings)
├── hooks/              # Custom React hooks (useScrollIntersection)
├── models/             # TypeScript interfaces & models
└── styles/             # Global SCSS (variables, mixins, typography, theming…)
```

Content and UI are intentionally decoupled — all copy, images, and data live in `src/content/` as typed TypeScript constants, making updates straightforward without touching component code.

---

## 🖼 Image Handling

All images are **statically imported** in TypeScript files and processed through Vite's asset pipeline:

- Vite automatically fingerprints assets (content-hash filenames) for long-term caching.
- Images for **project/award/certificate cards** are imported in their respective `src/content/*.const.ts` files.
- Images for **lightbox galleries** are imported in `src/content/lightbox/` files and mapped via `lightbox.map.ts` — a central registry that associates a `LightboxKeys` enum value with a slide array.
- When a gallery button is clicked, the card's button `id` is parsed to extract the lightbox key, which is used to look up the correct slide array from the map and open the lightbox.
- Certificates use a single-slide lightbox (no prev/next navigation); all other galleries use the full lightbox with thumbnail strip plugin.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm (or yarn)

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Vite will start a local dev server and automatically open the app in your browser. Hot Module Replacement (HMR) is enabled via `@vitejs/plugin-react` (Babel).

### Build for production

```bash
npm run build
```

Runs TypeScript type-checking (`tsc`) first, then Vite bundles and outputs to `dist/`. The output directory is always wiped clean before each build.

### Preview the production build locally

```bash
npm run preview
```

Serves the `dist/` folder locally so you can verify the production build before deploying.

### Lint

```bash
npm run lint
```

Runs ESLint with type-aware TypeScript rules (`@typescript-eslint/recommended-type-checked`). Zero warnings are allowed (`--max-warnings 0`).

---

## 🎨 Theming

The app supports **dark** and **light** themes. Toggling is handled by adding the class `dark-theme` or `light-theme` to `document.body`. All theme-specific colour variables are defined in `src/styles/_theming.scss` and scoped to those body classes.

---

## 🔗 Navigation & Scroll Behaviour

Navigation uses a custom `useScrollIntersection` hook built on the native `IntersectionObserver` API. Each major page section is observed independently; as a section enters the viewport, the corresponding nav item is marked active. Clicking a nav item triggers a smooth scroll to the target section.

---

## ⚙️ Configuration Files

| File                 | Purpose                                                                                |
| -------------------- | -------------------------------------------------------------------------------------- |
| `vite.config.ts`     | Vite config — enables React plugin, auto-opens browser on dev, clears `dist/` on build |
| `tsconfig.json`      | TypeScript config for source files                                                     |
| `tsconfig.node.json` | TypeScript config for Vite/Node tooling                                                |
| `eslint.config.js`   | ESLint flat config — excluded from linting itself                                      |

---

## 📄 License

This project is private and personal. All content, imagery, and design are proprietary.
