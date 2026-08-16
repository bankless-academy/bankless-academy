# Plan: 25 languages + searchable language selector

Goal: offer 25 languages with a modern selector UI (searchable menu, native +
English names), powered by the AI `translate-content`
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

Registered today (22): en, pt-br, zh, de, es, fr, it, ja, tr, uk, hi, id, vi,
ru, ko, pl, cs, sw, bn, mr, ta, te.

The "25" is no longer a target worth defending on its own. Candidates are
ranked on **two signals that answer different questions, and both belong in
the plan**:

- **Depth** — our own analytics say who already reads the site. Ranking on
  this serves audiences we have.
- **Reach** — crypto-adoption and market data say where the curriculum's
  subject is actually being used. Ranking on this opens audiences we do not
  have yet.

**Ranking on analytics alone is a trap.** A language shows little traffic
partly *because* there is nothing to read in it, so measured readers are a
lagging indicator that optimizes retention and quietly forecloses acquisition.
A growth-stage goal needs new cohorts, not just deeper engagement with the
current ones. Keep both tracks alive, and state which track a language is on
when scheduling it.

**No hard figures in this doc.** Traffic and index positions move; a snapshot
pasted here goes stale and then misleads. Pull the numbers when you schedule a
wave, not from this file.

### Track A — deepen (ordered by measured readership)

1. **`zh-tw` Traditional Chinese** — Hong Kong and Taiwan are the largest
   uncovered readership after Dutch, and they are currently served
   **Simplified**, which is actively worse for a Traditional-only reader than
   English. It is also the cheapest item anywhere in this plan: an OpenCC-style
   **conversion of the finished `zh`** plus a Taiwan/HK vocabulary pass (軟體 vs
   软件, 網路 vs 网络, 程式 vs 程序), not a translation wave. A script conversion
   cannot change unit counts or `[x]` positions, so structural parity with `zh`
   is free. Highest value and lowest cost: do it first.
2. **`nl` Dutch** — our largest uncovered readership, and it is **a university
   cohort taking the lessons as coursework**, not the VPN/hosting artefact the
   raw geography suggests. Worth supporting as an institutional relationship,
   with the honest caveat that this cohort already completes the lessons in
   English, so Dutch deepens rather than unblocks.
3. **`th` Thai** and **`tl` Filipino** — both have real readership today and
   neither has a comfortable English fallback the way Dutch does. LTR, so
   nothing gates them.

### Track B — reach (market signal, little traffic today by definition)

1. **`ar` Arabic** — the largest single language bloc still uncovered, spread
   across many markets rather than concentrated in one. Ships with `ur`.
2. **`ur` Urdu** — Pakistan is consistently among the highest crypto-adoption
   markets. Shares the one-time **RTL audit** with `ar`, so schedule the two
   together.
3. **`am` Amharic** — Ethiopia is high on the adoption index and is the
   fastest-growing market for retail-sized stablecoin transfers, driven by
   currency collapse and remittances. That is the curriculum's actual subject:
   stablecoins and self-custody as an escape hatch, not trading. It sends us
   almost no traffic today, which on the Track B reading is the *argument for*
   it rather than against. Costs to weigh: Ge'ez is a new script, Amharic is
   not the only major language of Ethiopia, and internet penetration is low.
4. **`fa` Persian** — kept as a candidate, **not scheduled**, pending a
   compliance decision: a large share of Iran's on-chain activity is
   state-linked rather than retail, and there is real sanctions exposure in
   targeting the market. Resolve that before anyone starts a wave. It would
   piggyback on the `ar`/`ur` RTL audit.

### Candidates assessed and set aside

- **Nigeria** — one of our largest readerships, and those readers already
  arrive and engage **in English**, so they are not blocked. Covering Nigeria
  in local languages would also mean Hausa *and* Yoruba *and* Igbo, not one
  language.
- **`ms` Malay** — real readership, but largely mutually intelligible with the
  finished `id`, so the marginal gain is small.
- **Punjabi** — very widely spoken, but splits across two scripts and its
  territory is served by `hi`/`ur`.
- **Hebrew** — outsized developer density, very small population.
- **Nordics** — small and near-universally English-literate.

Note our Portugal figures are inflated by our own testing and are not demand;
`pt-br` already covers the language.

The map looks well covered because the big linguae francae carry it: `fr`
serves Francophone West/Central Africa, `es` covers LatAm's high-adoption
countries, `pt-br` covers Brazil plus Lusophone Africa. The remaining gaps are
where a **local** language dominates instead.

**Known imbalance, recorded deliberately:** the set covers India **five times**
(hi, bn, mr, ta, te). India tops the adoption index and each of those is a
major world language, so every one was defensible on its own; in aggregate it
is questionable, because the fifth Indian language competed for budget against
the first language of a country with none. Judge additions on *marginal*
coverage — which readers gain something they cannot get today — rather than on
speaker count or index rank alone.

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
   `[{ code, name, localName, dir }]` — the ONLY place
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
translation lands.
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

Actual history (the plan below replaced the original 4-wave sketch; waves ran
3 languages at a time, 11 agents each — see CLAUDE.md "Running a language wave
with parallel agents"):

- **Wave 0** — Phase A + B, ISO code migration, existing languages. Done.
- **Wave 1** — `fr` to 19/19 as the pilot, then the 9 legacy languages'
  glossaries converted to English-keyed. Done 2026-08-15.
- **Wave 2** — hi, id, vi. Done 2026-08-15.
- **Wave 3** — ru, ko, pl. Done 2026-08-15.
- **Wave 4** — cs, sw, bn. Done 2026-08-16.
- **Wave 5** — mr, ta, te. Done 2026-08-16. First wave where all three
  glossaries merged with **0 problems**.
- **Next (none started).** Interleave the two tracks rather than draining one:
  a depth wave keeps existing readers, a reach wave brings new cohorts.
  1. **`zh-tw` conversion** — not a wave, and the cheapest thing in the plan.
     Do it first regardless of track.
  2. **`nl`, `th`, `tl`** (depth) — all LTR, so nothing gates them. One
     ordinary 3-language wave.
  3. **`ar` + `ur` + `am`** (reach) — `ar`/`ur` are **gated on the RTL audit**,
     which is UI work (layout mirroring, `dir`, sidebar rail, icon flipping)
     and must land *before* their content, not alongside it. `am` is LTR and
     can run in the same wave or ahead of it.

Each wave: style guides → glossary + UI in parallel → central merge and
reconcile → lessons in parallel → register + gates. Native-speaker spot check
where available.

## Decisions needed

1. ISO code migration: recommended strongly (SEO redirects preserve old URLs).
2. Glossary page + homepage localization: in scope? (currently en-only).
3. Wave 2 language order (above is a suggestion; Mixpanel geo data would be
   better evidence).
4. Native review: rely on AI-only for launch, or recruit reviewers per wave?
