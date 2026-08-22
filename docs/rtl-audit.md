# RTL audit — findings and implementation plan (2026-08-22)

Gate for shipping `ar` + `ur` (both `dir: 'rtl'` in the registry when added).
Audit of the full UI surface; implementation phases below. `am` is LTR and
does not need this.

## Key findings (file:line refs verified 2026-08-22)

1. **Only one thing consumes `dir` today, and it's mounted in the wrong
   place**: `LanguageSelector.tsx:104-111` sets `document.documentElement.dir`
   in an effect — but LanguageSelector is mounted by `Nav`, and `Lesson.tsx`
   sets `hideNavBar=true` on every non-QUEST slide (layout/index.tsx:60 skips
   Nav), so **the lesson slideshow never gets a direction**. The SSR content
   pages (`nolayout` branch) never mount it at all.
2. **No `_document.tsx` exists** — `<html>` ships with neither `lang` nor
   `dir` on any page. It must be created, but can only carry a static default
   (path-segment routing, not Next i18n).
3. **Server-rendered content mirror**: `lessonContentPage.ts:54,109` computes
   `lang` into pageMeta; `LessonArticle.tsx:107` outer Box is the only place
   `dir`/`lang` can attach (html is out of reach on that route).
   `Head.tsx:36` declares `MetaData.lang` but never consumes it (free carrier).
4. **Chakra theme has no `direction`** (`theme/index.tsx:15`, module-scope
   singleton, imported directly by `Lesson.tsx:63`). Recreating it per
   language would change emotion's hashed class names and silently break the
   ~12 hard-coded `.css-XXXXXX` selectors in `_app.tsx:212-331`.
5. **~146 direction-sensitive style sites on the critical path** (of ~180+
   repo-wide). Worst files: `Article.tsx` 48, `OnboardingModal.tsx` 14,
   `Lesson.tsx` 13, `OptionMenu.tsx` 12 (all inline `style`, Chakra-invisible),
   `Layout.tsx` 11 (the 230px rail: `marginLeft` + `borderLeft` at :299-310),
   `Animation.tsx` 11, `LessonDetail.tsx` 10, `ConnectWalletButton.tsx` 10,
   `pages/index.tsx` 8. Deferrable (0 hits): stats, debug, whitelabel, quiz,
   passport, lessons index/catch-all, LessonButton, FeaturedLessons.
6. **The one outright-broken-looking defect**: `Article.tsx:266-291` hangs
   list bullets via `li::before { position:absolute; right: calc(100% - 1ch);
   text-align:right }` — under RTL the bullet lands on top of the text.
7. **Directional glyphs**: only 8 sites repo-wide (Lesson.tsx:1353,1366,1411,
   1514,1541 ArrowBack/Forward; Article.tsx:691; plus 3 ArrowSquareOut
   external-link glyphs). Keyboard hotkeys `left`/`right` at Lesson.tsx:784,795
   need semantic swap under RTL.
8. **Bidi is the sleeper risk, not layout**: `Lesson.tsx:958-974` detaches
   trailing ASCII punctuation from keyword nodes and re-emits it as a bare
   sibling (UBA will misplace it in Arabic prose); `LessonArticle.tsx` renders
   backticked terms as plain `<code>` with no isolation (`Prose` :53-58).
   `span.keyword`'s `display:inline-block` (Lesson.tsx:119-124) already
   isolates in the slideshow.
9. **Free flips that need review, not code**: ProgressSteps fill grows from
   flex-start (flips correctly); `.bloc1/.bloc2` flex rows put images on the
   other side under RTL (probably desirable); Nav's Flex order reverses.
   ProgressSteps :38 `linear-gradient(270deg,…)` and :49-59 head dot
   (`right:0`) are physical. ChatWidget Drawer `placement="right"` → `"end"`.
10. **Only logical-property usage in the repo**: LessonButton.tsx:74-75
    `paddingStart/End` — currently LTR-fixed because the theme has no
    direction.

## Architectural decision: keep the Chakra theme LTR

Do NOT flip `theme.direction` per language. Rationale: the theme is a static
singleton with a direct import (Lesson.tsx:63); per-language recreation churns
emotion class hashes and breaks the hard-coded `.css-XXXXXX` selectors in
`_app.tsx`; and the repo uses Chakra logical shorthands exactly once. Instead:
**set `dir` on the DOM and use raw CSS logical properties**
(`margin-inline-start`, `inset-inline-end`, `border-inline-start`,
`padding-inline-*`, `text-align: start`), which browsers resolve against the
element's computed direction with no Chakra involvement. In JSX use
`sx={{ marginInlineStart: … }}` or `style={{…}}`; in emotion template blocks
use the CSS property names directly. Implementation must verify computed CSS
on one converted case before fanning out (Chakra prop-name collisions).

## Implementation plan

## Chakra prop resolution — MEASURED 2026-08-22 (binding for Phase B)

Probed `@chakra-ui/styled-system`'s `css()` with no theme direction (ours stays
LTR forever). Two classes of "logical" prop, and confusing them silently
hardcodes LTR:

| write it as | Chakra emits | verdict |
|---|---|---|
| `ms`/`me`/`marginInlineStart/End`/`marginStart/End` | `margin-inline-start/end` | ✅ safe — browser-resolved |
| `ps`/`pe`/`paddingInlineStart/End` | `padding-inline-start/end` | ✅ safe |
| `borderInlineStart`, `borderInlineStartWidth` | same, logical | ✅ safe |
| `textAlign: 'start'/'end'`, `float: 'inline-start'` | pass-through | ✅ safe |
| `insetInlineStart/End`, `insetStart/End` | **`left`/`right`** (physical) | ❌ never as Chakra prop or `sx` |
| `borderTopStartRadius`, `borderStartStartRadius`, `roundedStart/End`, … | **physical corners** | ❌ never as Chakra prop or `sx` |

Escape hatch for the ❌ rows: inline `style={{ insetInlineStart: … }}` (React
passes camelCase straight to CSS) or emotion template CSS
(`inset-inline-start: …; border-start-start-radius: …`) — Chakra's resolver
never sees either. `sx` goes through the SAME `css()` pipeline as props, so it
is not an escape hatch.

- A1. One helper in the registry (`applyDocumentLanguage(lang)`: sets
  `document.documentElement.dir` + `lang` from LANGUAGES). Call it from
  AppContext's route effect (AppContext.tsx:89-109) AND its imperative
  `setLanguage` (:115-118). Remove the effect from LanguageSelector.
  GlossaryPage.tsx:22 has a third rogue `i18n.changeLanguage` — route it
  through the same helper.
- A2. Create `src/pages/_document.tsx` with static `<Html lang="en" dir="ltr">`.
- A3. SSR content pages: emit `dir` from `lessonContentPage.ts` (registry
  lookup on `usedLang`), attach `dir` + `lang` on `LessonArticle.tsx:107`'s
  outer Box; wire `MetaData.lang` in Head.tsx while there.

**Phase B — critical-path physical→logical conversion: ✅ DONE 2026-08-22**
(4 Sonnet-medium agents, diffs reviewed centrally, banned-prop sweep clean.)
Notable decisions made during conversion:
- Escape-hatch pattern in practice: static insets went to inline
  `style={{ insetInline… }}` (Lesson close/prev/next, ChatWidget trigger/close,
  Helper badge, Article edit button); the ProgressSteps last-step gradient and
  the OnboardingModal pill radii use explicit `sx={{ '[dir="rtl"] &': …physical
  mirror… }}` blocks since gradients/corner-radii have no browser-resolved
  logical form that survives Chakra.
- Left physical on purpose: symmetric values, centering transforms,
  OnboardingModal icon-composition margins (calibrated against fixed decorative
  images), Animation.tsx scene composition AND its embedded `<`/`>` step
  buttons (the artwork doesn't mirror, so flipping only the controls would
  disorient), Layout.tsx:577 dead `borderRight={0}`.
- LessonDetail.tsx:382/409 conversions sit in commented-out JSX (dead code,
  converted so reactivation is safe).

**Phase C — behavior, glyphs, bidi: ✅ DONE 2026-08-22 (central)**
- C1: `.mirror-rtl` utility class in _app.tsx global CSS
  (`[dir='rtl'] .mirror-rtl { transform: scaleX(-1) }`); applied to the 5
  Lesson.tsx prev/next arrows + Article.tsx newsletter ArrowRight.
  External-link glyphs (ArrowSquareOut) deliberately NOT mirrored (universal
  convention). Animation `<`/`>` not mirrored (see Phase B note).
- C2: hotkeys swap handlers at EVENT time via `isRtlDocument()` (new registry
  helper reading the attribute `applyDocumentLanguage` maintains); both
  hotkeys now share the union of both handlers' deps.
- C3: `[dir='rtl'] #chakra-toast-manager-top-left { right: 2vh; left: auto }`
  (both !important, same specificity trick as the existing LTR rule).
- C4: `unicode-bidi: isolate` on both `span.keyword` blocks (Lesson.tsx) and
  `Prose code` (LessonArticle.tsx); the detached trailing punctuation is now
  re-emitted INSIDE the keyword's isolating nowrap span, so the bidi
  algorithm can never re-order it away from the term.
- C5: ChatWidget Drawer `placement={isRtlDocument() ? 'left' : 'right'}`
  (Chakra placement resolves against the permanently-LTR theme, so "end" would
  no-op; render-time document read is safe in this client-only component).
  Tooltip `placement="left"` sites left as-is (popper auto-flip mitigates).

Original per-task briefs below, kept for reference:

**Phase B — critical-path physical→logical conversion (~146 sites, mechanical,
agent-friendly; one agent per file group, verify with build + visual dev pass):**
- B1. `Article.tsx` (48) — includes redesigning the li::before bullet hang to
  `inset-inline-end: calc(100% - 1ch); text-align: end`, blockquote/callout
  rules, newsletter CTA `textAlign` → `start`/`end`.
- B2. `Lesson.tsx` (13 + slide CSS): ul/ol `margin-inline-start`, blockquote
  `border/padding-inline-start`, close button + header stack insets, prev/next
  `left/right:-24px` → `inset-inline-*`, quiz `textAlign="left"` → `"start"`,
  `.chakra` details corner radii; ProgressSteps insets + gradient.
- B3. Chrome: `Layout.tsx` rail (`marginInlineStart`, `borderInlineStart`,
  verify the rail's no-inset absolute box actually flips — riskiest spot),
  `OptionMenu.tsx` 12 inline styles → `marginInlineEnd`, `Nav.tsx`,
  `LanguageSelector.tsx` (`textAlign: start`, CheckIcon margin),
  `ConnectWalletButton.tsx`, `Helper.tsx`, ChatWidget Drawer `placement="end"`
  + its fixed trigger/close insets.
- B4. `OnboardingModal.tsx`, `LessonDetail.tsx` (incl. :382/:409/:629 offsets),
  `Animation.tsx`, `pages/index.tsx`, `LessonArticle.tsx` Prose CSS (ul/ol
  shorthand, blockquote, contents `pl`).
- Rule: convert only direction-RELATIVE intent; leave genuinely physical or
  symmetric values; `textAlign="center"` and translateY untouched.

**Phase C — behavior, glyphs, bidi (judgment work, keep central or one agent):**
- C1. Mirroring arrows: a tiny `DirectionalIcon` (or conditional swap) for the
  5 Lesson.tsx arrow sites + Article.tsx:691; decide external-link glyphs
  (probably leave).
- C2. Hotkeys: under RTL, physical ArrowLeft = next / ArrowRight = prev
  (Lesson.tsx:784,795).
- C3. Toast manager: `_app.tsx:312-316` `#chakra-toast-manager-top-left
  { left: 2vh }` needs an RTL counterpart (`[dir=rtl] … { right: 2vh;
  left: auto }`).
- C4. Bidi isolation: `unicode-bidi: isolate` on `span.keyword`
  (Lesson.tsx:119) and on `Prose code` (LessonArticle.tsx:53); wrap the
  re-emitted trailing punctuation (Lesson.tsx:974) together with the keyword
  span in one isolating wrapper so UBA keeps them attached.
- C5. Tooltip placements: `placement="left"` sites (Lesson.tsx:1017,
  ChatWidget:293) → `"start"`-equivalents if Chakra supports, else leave
  (auto-flip on overflow already mitigates).

**Phase D — verification: machine checks done 2026-08-22; visual pass OPEN.**
Machine-verified: full `yarn build` green after B+C; banned-prop sweep clean
(no `insetInline*`/logical-radius as Chakra prop or sx key); prerendered
content pages carry `dir`+`lang` on the article root and `<html lang="en"
dir="ltr">` from _document. Still open (needs a browser): the dev-mode
click-through below with one language temporarily flipped to rtl, especially
the Layout.tsx desktop rail (fixed/absolute box with NO inline inset, relying
on document flow: the riskiest unverified spot) and the OnboardingModal pill.
- Dev recipe: temporarily set one shipped language to `dir:'rtl'` in the
  registry (NOT committed), `vercel dev`, click through: homepage, lesson
  landing, full slideshow (quiz + toast + tooltip + prev/next), handbook
  article, `/lessons/<lang>/<slug>/content` (view-source for dir attr),
  glossary, onboarding modal, nav/rail/mobile bar, ChatWidget.
- The SSR content page must show `dir="rtl"` in the served HTML (curl, not
  browser).
- Do NOT register `ar` until its wave starts (registry entry + empty content
  is safe post-sitemap-fix, but the selector would show a dead language).

## Effort estimate

A: one sitting, central. B: ~4 mechanical agent-tasks (B1-B4), verifiable by
build + dev pass. C: one focused task. D: manual pass per phase. Total is a
day-scale effort, then ar/ur becomes a standard wave (both lack ETHGlossary
data upstream — same degraded-pins path wave 6 used; ur additionally shares
the Arabic script's typography questions — settle numerals (Arabic vs
Eastern-Arabic digits) and punctuation (، ؟) per language in their style
guides).
