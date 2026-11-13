# SaaS Marketing Homepage UX Research Brief

**Product:** Overlane public marketing site (`public-github`)  
**Audience:** Product, design, and engineering stakeholders  
**Scope:** Advisory research (2024–2026 patterns); implementation not included  
**Date:** November 2026  

---

## 1. Landscape (2024–2026)

High-performing B2B and prosumer SaaS marketing sites converge on a **product-led narrative**: the visitor should *experience* value before reading policy docs. Across dev tools, creative suites, and infrastructure products, recurring optimizations include:

| Dimension | What winners optimize for |
|-----------|---------------------------|
| **Clarity** | One primary outcome in the hero (≤15 words headline, ≤25 words subhead). Secondary proof deferred one scroll. |
| **Social proof** | Named customers with *specific metrics* or logos tied to use cases—not generic “trusted by thousands.” |
| **Product-led story** | Live, interactive, or high-fidelity UI in the first viewport; copy supports the UI, not the reverse. |
| **Density vs. whitespace** | Stripe/Vercel-style sites are long but **rhythmic**: one idea per section, generous vertical padding (`clamp` section gaps), strong typographic scale (display → body → fine). |
| **Motion** | Subtle, purposeful motion (scroll-linked states, gentle fades). Auto-rotating carousels are increasingly avoided for primary tours. |
| **Demos** | Shift from static screenshots to **embedded product surfaces**, short autoplay loops, or scroll-driven steppers (sticky canvas + scrolling copy). |

Buyer psychology (especially technical and streamer audiences): skepticism toward marketing mockups. Sites that show **recognizable UI chrome** and honest disclaimers (“sample data”) outperform abstract illustrations. For desktop/gaming-adjacent tools, **OBS/streaming proof** and **local-first privacy** are decision drivers—when stated in plain language, not architecture jargon.

Sources consulted: Screenrove SaaS pattern catalog, Plinth homepage teardowns (2025), AY Design 2026 landing patterns, Studio Maydit on the “Linear/Vercel/Raycast aesthetic” (typography-first, monochrome + one accent, real product as hero).

---

## 2. Reference patterns (exemplars)

Each site below illustrates a reusable pattern; none should be copied wholesale—Overlane’s story is local telemetry + streaming, not issue tracking.

1. **Linear** — Hero is a *working theatrical demo* of the product, not a screenshot stack. Short positioning line, precise audience filter, dark UI-native palette. **Takeaway:** homepage *is* the product; engineering buyers self-qualify quickly.

2. **Raycast** — Floating nav, bold hero motion, then **one section = one animated mock** of the Mac app (clipboard, AI, extensions). **Takeaway:** sequential feature reveals beat one carousel with seven equal slides.

3. **Vercel** — Extreme grayscale discipline; color appears in *product output* (live deployment telemetry in hero). Inline rotating proof sentences with metrics. **Takeaway:** let real product data decorate the hero; minimize decorative chrome.

4. **Cursor** — Overlapping product windows in hero; high-contrast type on light ground (variant of dark-tool aesthetic). **Takeaway:** depth and layering signal “real app,” not a single flat card.

5. **Notion** — Scroll-linked product tours; blocks and templates visible immediately. **Takeaway:** progressive disclosure via scroll, not tabs.

6. **Figma** — Collaborative canvas visible early; social proof tied to design workflow. **Takeaway:** show the artifact users will share (here: overlay URL / stream layout).

7. **Discord** — Strong lifestyle + product frames; CTAs repeated with clear primary/secondary hierarchy. **Takeaway:** community CTA as tertiary, not competing with download.

8. **OBS Studio** — Practical, download-forward pages for streamers; feature lists are short and outcome-based. **Takeaway:** speak “browser source” and “scene,” not internal worker names.

9. **PostHog** — Technical buyers welcomed, but **personas** route to different stories; humor without losing structure. **Takeaway:** optional “deep dive” paths without making every visitor read data-plane copy.

10. **Grafana** — Observability narrative = see the dashboard first, then explain pipelines. **Takeaway:** Overlane’s archive/dashboard mocks map well to this pattern.

11. **Loom** — Autoplay workflow video replaced by **scroll-coupled** demos on product pages. **Takeaway:** if motion is used, user control (scroll/hover) beats 6.5s auto-advance.

12. **Mobbin / Screenrove** (pattern libraries) — Curated real screens for comparison. **Takeaway:** audit against 3–5 closest peers (OBS ecosystem tools, local analytics) quarterly, not once.

---

## 3. Anti-patterns (“clunky” signals)

Patterns that read dated or exhausting in 2025–2026:

- **Wall of text above the fold** — Long compound taglines, four badge rows, and stat tiles with acronyms (SSE, MMF) before any product surface.
- **Carousel as primary tour** — Seven slides at equal weight, auto-rotating timers fighting reading time; users miss slide 3–7.
- **Duplicate narratives** — Same features explained in carousel blurbs, a nine-card grid, *and* seven tab panels.
- **Tabbed marketing IA** — Enterprise-doc pattern (`Features | Architecture | Data plane | …`) on a single-product landing page; hides content and breaks scroll storytelling.
- **Jargon stacks** — CLAD, LDP, hot/cold tiering, DuckDB, Tantivy in hero-adjacent copy before payoff for players/streamers.
- **Weak visual hierarchy** — Many sections with identical card weight (`MarketingCard` grids); no single focal column per viewport.
- **Mismatched previews** — Decorative mocks that omit nav/titlebar cues the app always shows; stream overlays without OBS framing context.
- **Tertiary CTA sprawl** — Three equal text buttons under primary CTAs (player guide, getting started, explore features) without visual de-emphasis.
- **Excess vertical reservation** — Large `min-height` blocks (showcase wrap ~72vh) that push downloadable proof below the fold on laptops.

---

## 4. Diagnosis: Overlane (`public-github/src`)

Implementation is thoughtful (CLAD structure, i18n, glossary, fixed mock viewport tests, reduced-motion respect). The **clunkiness** is primarily **information architecture and copy density**, not missing polish in tokens or mocks.

### 4.1 Page structure

`ProductMarketingView` stacks: parallax backdrop → sticky buy card → hero → showcase carousel → **tabbed main** (`MarketingTabBar` + one of seven panels) → footer.

This is a **hybrid** of marketing landing and in-app documentation. Premium SaaS homepages in 2026 typically use **one continuous scroll** with optional deep pages; tabs fragment the story and duplicate the carousel’s job.

### 4.2 Hero (`MarketingHero.tsx` + `en.json`)

- **Headline** is brand-only (“Overlane”); the value proposition lives entirely in a **long tagline** listing console, archive, journal, OBS overlays, and both sims—~35 words in one paragraph.
- **Four badges** plus **four `StatTile`s** with glossary-linked SSE/MMF and file extensions—excellent for power users, heavy for first visit.
- **CTAs:** Primary download and demo are clear; three `marketing-link-btn` actions compete at similar weight.
- **No product mock in hero**—stats column is text-forward. Compare to Raycast/Linear: product occupies ≥50% of hero width.

### 4.3 Product tour (`MarketingShowcase` + `ShowcaseCarousel`)

- Seven slides (`showcase-slides.tsx`) cover Home, Archive, Journal, Overlays, Stream, Settings, Game link—comprehensive but **cognitively equal**.
- Auto-advance every **6.5s** (`useShowcaseCarousel.ts`) encourages skimming, not comprehension; pauses on hover help but mobile users get less control.
- CSS **does** reserve fixed mock viewport height (`showcase-carousel__mock-viewport`, Vitest assertion)—addresses layout shift; **overall block still consumes ~520–640px+** carousel wrap min-height, dominating the first screens.
- Slide layout: **meta column (title + blurb) + mock**—still read-first; blurbs repeat feature grid content later.
- Fine print disclaimer is appropriate (“Illustrative samples”).

### 4.4 Features and tabs

- `FeatureAreaGrid` renders **nine** `MarketingCard` areas, each with summary + 3–4 bullets—dense grid (`marketing-grid-3`).
- Panels (`SimplePanels.tsx`, `FeaturesPanel.tsx`) add **lead paragraphs, callouts, flow pipelines, and lists**—e.g. Data panel includes full `dataScale` ingest/fold/size/hot/quota copy (~150+ words in one card).
- **Architecture** panel exposes CLAD and layer stack to all visitors—valuable for contributors, not primary buyer journey.
- **Overlap:** Carousel slide titles align with `product-feature-catalog.tsx` entries (Home, Archive, Journal, Overlays, Settings, Game link)—intentional canon, but **triple exposure** feels text-heavy.

### 4.5 Typography and spacing (`main.scss`)

- Tokens: DM Sans, teal accent, `--max: 1100px`, `line-height: 1.6`—coherent dark SaaS look, aligned with modern dev-tool palettes.
- Section rhythm: hero padding is generous; showcase and tab main are **card-dense** with fewer “breathing” full-bleed moments.
- Unused or legacy showcase styles (horizontal rail/bands in SCSS) suggest prior layout experiments—worth pruning in a future pass to reduce CSS cognitive load.

### 4.6 Preview fidelity

- Mocks (`ConsoleUIMock`, `StreamOverlayMocks`, etc.) are **marketing simplifications**—appropriate if labeled; stream slide could benefit from **OBS/browser-source frame** context so streamers instantly pattern-match.
- Glossary hover terms in hero stats increase **interaction cost** for first-time visitors who do not know they are optional.

### Summary diagnosis

The site reads **clunky** because it optimizes for **completeness and engineering honesty** over **scan path and focal hierarchy**. The user must read tabs, carousel, and grids to assemble the same mental model a single scroll-led demo could convey in three steps: *drive → stream → remember*.

---

## 5. Recommendations (prioritized)

### P0 — Narrative and hierarchy (content + IA)

1. **Rewrite hero** to outcome-first headline + short subhead (player/streamer language); move SSE/MMF to a “How it works” band or glossary-linked footnote.
2. **Collapse triple duplication:** choose *one* primary explainer—scroll-stepper or 3-slide tour (Live home → Archive → Overlays/stream)—retire or slim carousel to those three.
3. **Single-scroll homepage** for first visit: demote Architecture / Data plane / Trust to linked subpages or accordion “For IT & power users” at page bottom.
4. **One primary CTA path** above fold; demote player guide / getting started to footer or docs hub.

### P1 — Layout and components

5. **Hero product mock** — Place `ConsoleUIMock` or stream composite **beside** copy (mirror real app titlebar); stats become 2–3 chips, not four tiles.
6. **Replace auto-carousel** with user-driven tabs *on the mock only* (segmented control: Live | Archive | Stream) or scroll-linked sticky mock (Notion/Loom pattern).
7. **Feature grid** — Reduce to 4 outcome cards (Live, Record, Stream, Manage) with “See all features” expanding the rest.
8. **Social proof band** — Even without logos: Discord member count, version cadence, or streamer quote; one sentence metric beats four badges.
9. **Section rhythm** — Alternate full-bleed mock bands with narrow copy columns; increase `padding-block` between major bands to 4–6rem desktop.

### P2 — Polish and trust

10. **OBS context** on stream mock (browser source chrome, 1920×1080 frame).
11. **Prune SCSS** unused showcase rail/band rules; keep one tour component pattern.
12. **Localized strings** — shorten non-English leads in parallel when hero shortens (word count drives perceived density in all locales).
13. **Light analytics** — section visibility and CTA events (see metrics below).

### Wireframe-level section order (proposed single-scroll homepage)

```
[Sticky] Download / Buy (existing StickyBuyNowCard)
[Nav] Logo · Features · Guides · Download (minimal)

1. HERO (50/50)
   - H1 outcome + 1-line subhead
   - Primary: Download · Secondary: Demo
   - Right: live console mock (Home card)

2. PROOF STRIP
   - Local-first · Windows · No account · Streamer-ready (chips, one row)

3. THREE-STEP STORY (sticky mock left, scroll steps right)
   - Step A: Live driving + overlays
   - Step B: Archive / dashboard memory
   - Step C: Stream layouts + OBS URLs

4. OUTCOMES GRID (4 cards max)

5. INSTALL OPTIONS (Prod vs Demo table — keep from Desktop panel, shortened)

6. SOCIAL / COMMUNITY (Discord, player guide link)

7. IT & DATA (collapsible: architecture, data plane, trust)

8. FOOTER (locale, copyright, glossary note)
```

Deep content currently in tabs (`GuidesPanel`, architecture layers) remains reachable via hash routes or `/docs` paths without occupying the default scroll.

---

## 6. Metrics to track post-refresh

Instrument (privacy-respecting, no PII): Plausible, Fathom, or self-hosted page events.

| Metric | Why |
|--------|-----|
| **Hero CTA click-through** (Download vs Demo) | Validates headline/subhead change |
| **Scroll depth** (25 / 50 / 75 / 90%) | Detects early bounce from text walls |
| **Time in tour section** | Compare carousel vs scroll-stepper dwell |
| **Tour interaction rate** | Manual tab clicks vs auto-advance-only sessions |
| **Bounce rate** on landing | Overall clarity signal |
| **Guide hash opens** (`#site-getting-started`, etc.) | Secondary intent after marketing pass |
| **Sticky buy card clicks** | Commercial intent on long pages |

Optional A/B tests: (A) hero with mock vs stats grid; (B) 3-step scroll tour vs 7-slide carousel; (C) shortened hero copy vs current tagline. Run until significance on primary CTA or minimum one week of traffic.

---

## 7. Implementation notes (Vite/React)

Fits existing stack without architectural rewrites:

- Reuse `ConsoleUIMock`, `StreamOverlayMocks`, etc.; compose new `MarketingHero` layout organism.
- Replace `ShowcaseCarousel` with `ProductTourScroll` organism (Intersection Observer + `prefers-reduced-motion`).
- Move tab panels to lazy routes or `?view=architecture` hash with default `features` content inlined in scroll.
- Copy changes live in `i18n/locales/en.json` first, then translation pipeline.
- Keep `BUY_NOW_URL` and sticky buy rules per `AGENTS.md`.

---

## References

- [Screenrove — SaaS landing patterns](https://screenrove.com/patterns/saas-landing-pages)
- [Plinth — SaaS homepage teardowns](https://plinthstudio.dev/blog/saas-homepage-teardowns)
- [AY Design — Modern SaaS landing patterns 2026](https://www.aydesign.ai/blog/modern-saas-landing-page-design-patterns-2026)
- [Studio Maydit — Linear/Vercel/Raycast aesthetic](https://studiomaydit.com/blog/linear-vercel-raycast-aesthetic)

---

*Internal code references: `ProductMarketingView.tsx`, `MarketingHero.tsx`, `ShowcaseCarousel.tsx`, `showcase-slides.tsx`, `product-feature-catalog.tsx`, `src/styles/main.scss`, `src/i18n/locales/en.json`.*
