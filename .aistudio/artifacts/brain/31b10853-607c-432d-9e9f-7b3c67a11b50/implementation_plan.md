# Implementation Plan: Standalone Section Pages & Clean Navigation Architecture

## Problem Statement
The user reported that clicking section links stayed on the homepage instead of opening a separate page, and requested clean path URLs (like `/what-is-ai-marketing/`) for every section as separate standalone pages, alongside a cleaner and more visually appealing design. Currently, the homepage renders all six deep interactive sections in full on a single endless scrolling page, which makes navigation feel confusing and leads to duplicate/inline content rather than distinct standalone pages.

---

## Proposed Architecture & Solution

### 1. Dedicated Standalone Pages (`react-router-dom`)
Every section will be hosted on its own dedicated, clean route with its own page layout, breadcrumbs, and fast section switcher:
- `/what-is-ai-marketing/` &rarr; Deep dive on AI digital marketing fundamentals, manual vs. algorithmic comparison, and value pillars (`WhatIsAiPage.tsx`).
- `/core-pillars/` &rarr; Interactive inspection of the 6 core AI marketing disciplines (`PillarsPage.tsx`).
- `/roi-simulator/` &rarr; Full-screen interactive Growth & ROI Calculator with industry benchmarks and audit triggers (`RoiSimulatorPage.tsx`).
- `/copy-lab/` &rarr; Interactive Generative Ad Copy Sandbox with copy-to-clipboard functionality (`CopyLabPage.tsx`).
- `/playbook/` &rarr; 90-Day Implementation Blueprint roadmap (`PlaybookPage.tsx`).
- `/articles/` &rarr; Publications index and search (`ArticlesIndexPage.tsx`).
- `/blog/ai-marketing-tools-for-beginners/`, `/blog/seo-for-beginners/`, `/blog/ai-content-marketing-strategy/` &rarr; Dedicated long-form articles.

### 2. Streamlined, Visually Appealing Homepage Hub (`HomePage.tsx`)
Rather than dumping all 6 full sections sequentially on the homepage:
- **Clean Hero**: Clear H1 with primary keyword **AI digital marketing**, verified metrics bar, and direct launch buttons to `/what-is-ai-marketing/` and `/roi-simulator/`.
- **AEO Direct Answer Section**: Preserves the two required question-form H2 headings with direct answers for Answer Engine Optimization:
  1. *What is AI digital marketing and how does it drive growth?*
  2. *What digital marketing strategies benefit most from AI marketing trends?*
- **Curated Section Showcase**: A clean, balanced grid of distinct preview cards for the 5 interactive modules (What is AI, Core Pillars, ROI Simulator, Copy Lab, 90-Day Playbook) with clear "Open Section &rarr;" CTA buttons that route to the respective URLs.
- **Latest Publications Preview**: Editorial cards linking directly to each of the three articles and the full articles index.
- **Audit Invitation CTA**: Focused banner inviting users to request an AI Growth Audit.

### 3. Global Route Scroll-To-Top
Add a global `ScrollToTop` helper component inside `App.tsx` that triggers on route change, guaranteeing that navigating to any section immediately opens at the top of that standalone page.

### 4. Cohesive, Clean Navigation (`Navbar.tsx` & `Footer.tsx`)
- Desktop & Mobile Navigation menus will link directly to the clean path URLs (`/what-is-ai-marketing/`, `/core-pillars/`, `/roi-simulator/`, `/copy-lab/`, `/playbook/`, `/articles/`).
- Active link highlighting will accurately reflect the currently active page.
- Section switcher in `SectionPageHeader.tsx` allows seamless 1-click tab jumping across all sections with active states.

### 5. Multi-Tab Navigation Architecture ("Open Every Part in a Different Tab")
- **Every part of the website** has its own dedicated, permanent URL and opens in a new browser tab (`target="_blank" rel="noopener noreferrer"`):
  - `/what-is-ai-marketing/` &rarr; Opens in new tab with external link indicator
  - `/core-pillars/` &rarr; Opens in new tab with external link indicator
  - `/roi-simulator/` &rarr; Opens in new tab with external link indicator
  - `/copy-lab/` &rarr; Opens in new tab with external link indicator
  - `/playbook/` &rarr; Opens in new tab with external link indicator
  - `/articles/` &rarr; Opens in new tab with external link indicator
  - `/blog/ai-marketing-tools-for-beginners/` &rarr; Opens in new tab
  - `/blog/seo-for-beginners/` &rarr; Opens in new tab
  - `/blog/ai-content-marketing-strategy/` &rarr; Opens in new tab
- **Global Link Enhancements**:
  - `Navbar.tsx` (desktop nav, mobile menu, and publication dropdown) updated with `target="_blank" rel="noopener noreferrer"`, `title="..."`, and `ExternalLink` icons.
  - `Hero.tsx` CTA buttons ("Simulate Growth ROI", "Explore AI Capabilities") configured to open in new tabs with visual indicators.
  - `HomePage.tsx` module showcase cards, direct answer links, and featured publication tabs open in separate browser tabs.
  - `SectionPageHeader.tsx` quick navigator tabs open non-active sections in new tabs while highlighting active section state.
  - `Footer.tsx` (Intelligence column, Guides column, and bottom links) updated to open target pages in new tabs.
  - Standalone section pages and deep-dive articles cross-link to sibling modules and calculators in new tabs.

### 6. Verification & Testing
- Confirmed all navigation items and cards across Navbar, Hero, Homepage, Section headers, and Footer possess `target="_blank" rel="noopener noreferrer"` and clean URLs.
- Ran `lint_applet` (`tsc --noEmit`): Clean with zero errors.
- Ran `compile_applet` (Vite production build): Succeeded with zero errors.
