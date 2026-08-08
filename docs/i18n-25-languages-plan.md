# Plan: 25 languages + searchable language selector

Goal: offer 25 languages with a modern selector UI (searchable menu, native +
English names, % translated badge), powered by the AI `translate-content`
pipeline.

**Hard prerequisite: no translation runs until ALL English lessons are
finalized** (content review fixes complete). Any en change invalidates that
slide's translations, so translating before the content is stable burns money
and review effort. Infrastructure work (Phases A, B, D) can proceed in
parallel; Phase C/E execution waits for the content freeze.

**Rollout principle: not all at once.** First bring the 10 currently supported
languages to full coverage, then add new languages progressively in small
waves.

## Target languages

en, ar (RTL), bn, cs, de, es, fr, hi, id, it, ja, ko, mr, pl, pt-br, ru, sw, ta,
te, tr, uk, ur (RTL), vi, zh (Simplified), zh-tw (Traditional).

vs today's 10: en, br, cn, de, es, fr, it, jp, tr, ua — 4 of which use
**non-standard codes** (br→pt-br, cn→zh, jp→ja, ua→uk). 15 net-new languages.

## Current state (mapped 2026-08-08)

- UI strings: hand-rolled i18next (`src/utils/translation.ts`) with ~40 static
  imports; every language ships in the client bundle. Namespaces: common,
  homepage (en/fr only), quests, keywords, lesson.
- Lesson content: `translation/lesson/<lang>/<slug>.md`, gated per lesson by
  `languages[]` in lesson-meta.json; parsed at build by `processMD` in
  `lessons/[...slug].tsx`.
- Selector: two unsynchronized components (`SelectLanguage` global menu,
  `LanguageSwitch` pills on /content); two competing localStorage keys
  (`i18nextLng`, `default-language`).
- Known bugs: `AppContext.tsx:33` reads the wrong path segment (always resets
  to en on lesson pages); `jp` is labeled 英語 ("English") instead of 日本語;
  everything assumes 2-char language codes with no whitelist; glossary page is
  en-only; `/content` + sitemap fetch translated md from GitHub raw at runtime.
- Adding a language today = 9 manual touch points, zero validation.

## Phase A — Foundations (before any new language)

1. **Single language registry**: `src/constants/languages.ts` exporting
   `[{ code, name, localName, dir, translatedRatio? }]` — the ONLY place
   languages are declared. `LanguageType`, `LanguageDescription`, i18next
   resources, selector, validators all derive from it.
2. **ISO code migration** (br→pt-br, cn→zh, jp→ja, ua→uk):
   - rename `translation/{lesson,website,keywords}/<old>/` dirs
   - update `languages[]` in lesson-meta.json + rebuild
   - permanent redirects in vercel.json: `/lessons/br/:slug*` → `/lessons/pt-br/:slug*`, etc.
   - migrate localStorage values on load (one-line mapping)
   - fixes browser detection for pt-BR/zh/ja/uk users for free
3. **Kill the 2-char assumption**: one `parseLangFromPath` util validating
   against the registry (handles `pt-br`, `zh-tw`); fix `AppContext`
   off-by-one; single localStorage key.
4. **Serve translated md locally** on /content and sitemap instead of
   raw.githubusercontent (content is in the repo; runtime fetch adds latency
   and a moving dependency).
5. Fix 英語→日本語 label (or better: labels come from the registry).

## Phase B — Selector UI

One component replacing SelectLanguage + LanguageSwitch:
- Menu from the nav globe: search/filter box, each row = localName (native
  script) + English name, current language highlighted.
- "% translated" badge per language (computed at build: translated
  lessons/slides ÷ total; stored in the registry).
- Browser-language suggestion row on top when detected ≠ current.
- On lesson pages: switching routes to `/lessons/<code>/<slug>` when the
  translation exists, else stays on en with a small "not yet translated" note
  (current `*` behavior, made explicit).
- RTL: set `dir="rtl"` on <html> for ar/ur (Chakra supports it); audit lesson
  slide layout + quiz buttons under RTL before launch; pick web fonts covering
  Arabic + Indic scripts (system font stack likely fine, verify).

## Phase C — Translation generation (translate-content)

Scope per language (all AI-generated, committed to git, reviewable):
1. `translation/lesson/<lang>/<slug>.md` — per-slide hash-gated (plan already
   in CLAUDE.md); translate only lessons marked ready.
2. `translation/website/<lang>/{common,quests,homepage,lesson}.json` — key =
   English sentence, so generation is a straight map; keep placeholders
   (`{{lesson_title}}`) intact (validator checks).
3. `translation/keywords/<lang>/keywords.json` — glossary; also feeds tooltip
   fallback logic.
Script updates `languages[]` in lesson-meta.json automatically when a lesson's
translation lands, and recomputes translatedRatio for the selector.
Per-language glossary/style prompt (formal vs informal address, terms to keep
in English) checked into `translation/style/<lang>.md`.

## Phase D — Scale concerns

- **Bundle**: static imports × 25 langs won't fly. Lazy-load namespaces via
  i18next dynamic import (or `resourcesToBackend`) — only active language in
  the bundle.
- **Build time**: getStaticPaths grows to ~25×23×2 ≈ 1,150 lesson paths.
  Move translated-lesson pages to `fallback: 'blocking'` + ISR so builds stay
  fast and new translations appear without full rebuilds.
- **Validation**: extend validate-content.js to translated md (same slide
  count, same option counts, `[x]` position matches en, URLs untouched,
  placeholders intact).

## Phase E — Rollout waves (each wave gated on the previous one shipping cleanly)

1. Wave 0: Phase A + B shipped with existing 10 languages (ISO-migrated).
   No new translations yet.
2. Wave 1 (only after the English content freeze): complete the 10 existing
   languages to full lesson coverage via translate-content (they're partial
   today: fr 8/23 … it 2/23).
3. Wave 2: +8 highest-impact new languages (suggest: hi, id, ru, vi, ko, pl,
   zh-tw, ar — first RTL).
4. Wave 3: remaining 7 (bn, cs, mr, sw, ta, te, ur).
Each wave: generate → validate → native-speaker spot check if available →
ship; selector shows % translated so partial languages are honest.

## Decisions needed

1. ISO code migration: recommended strongly (SEO redirects preserve old URLs).
2. Glossary page + homepage localization: in scope? (currently en-only).
3. Wave 2 language order (above is a suggestion; Mixpanel geo data would be
   better evidence).
4. Native review: rely on AI-only for launch, or recruit reviewers per wave?
