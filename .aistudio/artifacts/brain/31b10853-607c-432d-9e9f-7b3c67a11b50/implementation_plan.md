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

### 5. Verification & Testing
- Test that every link in the Navbar, Mobile Drawer, Hero, Section cards, and Footer updates the browser URL and renders the corresponding standalone page.
- Confirm zero broken links or in-page scroll traps.
- Ensure build passes with `compile_applet`.
