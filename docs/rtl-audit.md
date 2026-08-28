# RTL support — architecture, measurements and defect classes

Written as the gate for shipping `ar` + `ur` (2026-08-22); both are live, so
this is now the reference for **keeping** RTL working rather than a plan. Keep
it current if any of the architecture below moves.

## The architecture

**The Chakra theme stays LTR forever.** It is a static module-scope singleton
imported directly by `Lesson.tsx`; recreating it per language churns emotion's
hashed class names and breaks the hard-coded `.css-XXXXXX` selectors in
`_app.tsx`. Direction comes from the DOM instead, and styles use raw CSS
logical properties, which browsers resolve against the element's computed
direction with no Chakra involvement.

Who sets direction:

- `_document.tsx` renders `<html lang dir>` from the **request locale**
  (`isRtlLang` on `props.__NEXT_DATA__.locale`), so every `/ar/...` and
  `/ur/...` page ships `dir="rtl"` in the static HTML — crawler-visible, and
  correct before any JS runs.
- `applyDocumentLanguage()` in `src/constants/languages.ts` is the **only**
  client-side writer of `<html lang>/<dir>`. `AppContext` calls it on every
  route change and on the imperative language switch. It used to live in
  `LanguageSelector`, which is mounted by `Nav` — and `Lesson.tsx` hides the
  nav on every non-QUEST slide, so the slideshow never got a direction at all.
  Don't move it back into a component that can unmount.
- `isRtlDocument()` reads that attribute back for the rare runtime conditional
  (the lesson hotkeys swap handlers at event time).

## Chakra prop resolution — MEASURED 2026-08-22

Probed `@chakra-ui/styled-system`'s `css()` with no theme direction. Two
classes of "logical" prop, and confusing them silently hardcodes LTR:

| write it as | Chakra emits | verdict |
|---|---|---|
| `ms`/`me`/`marginInlineStart/End`/`marginStart/End` | `margin-inline-start/end` | ✅ safe — browser-resolved |
| `ps`/`pe`/`paddingInlineStart/End` | `padding-inline-start/end` | ✅ safe |
| `borderInlineStart`, `borderInlineStartWidth` | same, logical | ✅ safe |
| `textAlign: 'start'/'end'`, `float: 'inline-start'` | pass-through | ✅ safe |
| `insetInlineStart/End`, `insetStart/End` | **`left`/`right`** (physical) | ❌ never as Chakra prop or `sx` |
| `borderTopStartRadius`, `borderStartStartRadius`, `roundedStart/End`, … | **physical corners** | ❌ never as Chakra prop or `sx` |

Escape hatches for the ❌ rows, best first (all verified against `css()`):

1. **kebab-case keys in `sx`** — `sx={{ 'border-start-start-radius': 0 }}`.
   Chakra's resolver matches config keys exactly (camelCase), so kebab keys
   pass through untouched to emotion and the BROWSER resolves them. Works with
   conditionals and pseudo-selectors; the preferred form.
2. inline `style={{ insetInlineStart: … }}` (React passes camelCase straight
   to CSS) — fine for static values, no pseudo/responsive.
3. emotion template CSS (`inset-inline-start: …`) in styled components.
4. an explicit `sx={{ '[dir="rtl"] &': …physical mirror… }}` block — needed for
   gradients and corner radii, which have no browser-resolved logical form
   that survives Chakra.

CamelCase keys in `sx` go through the SAME `css()` pipeline as props and are
NOT an escape hatch. Drawer/Popover `placement="end"` resolves against the
theme direction too, so it is in the ❌ class.

## Defect classes worth remembering

1. **Interlocking-corner constructs.** Two siblings shaped to join into one
   pill (flat edges meeting mid-row) via physical `borderLeftRadius="0"` /
   `borderRightRadius="0"`. Flex order flips under RTL, the physical corners do
   not, so the flat edges face OUTWARD. **Greps for direction are blind to this
   class** — corner props and 4-value `borderRadius` shorthands contain no
   "left"/"right" text. The repo now has ZERO physical corner-radius props;
   keep it that way.
2. **Chakra InputGroup internals.** Chakra zeroes input/addon join corners
   against the theme direction (permanently LTR), so every input-with-addon
   mis-joined under RTL. Fixed globally in `_app.tsx` with logical-property
   overrides on `.chakra-input__left-addon` / `__right-addon` / adjacent
   `.chakra-input` — identical output in LTR, correct join in RTL, covers all
   current and future input groups.
3. **Bidi, not layout, is the sleeper risk.** Keyword tooltips and `<code>`
   carry `unicode-bidi: isolate` (`Lesson.tsx`, `LessonSeoArticle.tsx`), and
   the trailing ASCII punctuation `Lesson.tsx` detaches from a keyword node is
   re-emitted INSIDE that isolating span, so the bidi algorithm can never
   re-order it away from the term. Latin-only inputs (tx hashes,
   `placeholder="0x..."`) get an explicit `dir="ltr"`.
4. **Arabic cursive joining vs. `inline-block`.** The keyword span's
   `inline-block` breaks joining, so attached ف/ب/ل/ك prepositions and pronoun
   suffixes must never touch a backticked term. This is a *content* rule,
   encoded in `translation/style/ar.md`.
5. **Floating utility chrome does NOT mirror.** The ChatWidget and its Helper
   badge are pinned physical bottom-right in every language — industry
   convention (Intercom, Zendesk, WhatsApp), and it reduces the "everything
   moved" effect for readers switching languages. The standing rule: **content
   and navigation mirror; floating utilities stay put.**
6. **Deliberately left physical:** symmetric values, centering transforms,
   OnboardingModal icon-composition margins (calibrated against fixed
   decorative images), and `Animation.tsx` scene composition *including* its
   embedded `<`/`>` step buttons — the artwork doesn't mirror, so flipping only
   the controls would disorient. External-link glyphs (ArrowSquareOut) are not
   mirrored either (universal convention). Prev/next arrows DO mirror, via the
   `.mirror-rtl` global class (`[dir='rtl'] .mirror-rtl { transform: scaleX(-1) }`).

## Bugs the RTL work exposed in every language

Worth knowing because they were invisible until RTL made someone look:

- Hardcoded English in OnboardingModal, the slideshow "Next", LessonDetail
  "Badge", and two quest handbook cards — 10 new `common.json` keys across all
  languages.
- **Layer1Blockchains quest rendered raw i18n keys in EVERY language.**
  `t(characteristic)` is a dynamic call, invisible to `validate-i18n`'s
  literal-key check, and `en/quests.json` never had the keys at all.
- OptimismGovernance's card shows English **by design** — its handbook lesson
  is deprecated, so no translations exist and `t()` falls through.

## Verification status

Machine-verified: `yarn build` green; banned-prop sweep clean (no
`insetInline*` or logical-radius as a Chakra prop or `sx` key); served HTML
carries `dir`/`lang` from `_document`. A full headless-Chrome screenshot round
(2026-08-23) covered every page type, the slideshow (slides, quiz, feedback
toast, hotkeys), all 14 quest components and mobile, in `ar` and then `en` for
regression: no LTR regressions, and the RTL surfaces render correctly.

**Still open:** a human browser click-through, especially the `Layout.tsx`
desktop rail (a fixed/absolute box with NO inline inset, relying on document
flow — the riskiest unverified spot) and the OnboardingModal pill.

Dev recipe: temporarily set one shipped language to `dir:'rtl'` in the registry
(NOT committed), `vercel dev`, and click through the homepage, a lesson landing
page, the full slideshow (quiz + toast + tooltip + prev/next), a handbook
article, `/<lang>/lessons/<slug>` (curl it and check `dir` in the served HTML,
not just the browser), the glossary, the onboarding modal, nav/rail/mobile bar
and the ChatWidget.
