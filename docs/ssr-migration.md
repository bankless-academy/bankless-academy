# Server-side rendering: where it stands

Status (2026-08-24): **every page that needs a crawlable body has one; the
interactive app tree is still client-only, on purpose.**

The app tree renders inside `NonSSRWrapper` (`dynamic({ ssr: false })`), so it
contributes nothing to the server HTML on any route. What reaches a crawler is
rendered as a **sibling** of that wrapper in `_app.tsx`, outside the
client-only boundary:

| surface | what the server sends | built by |
|---|---|---|
| `/lessons/<slug>` (+ every locale) | hero `<h1>` + the full quiz-stripped article, ~13k chars | `LessonSeoBlock` ← `utils/lessonContentPage.ts` |
| `/glossary` (+ every locale) | the whole glossary as a `<dl>` with per-term anchors, 27-31k chars | `SeoContentBlock` ← `utils/seoContent.ts` |
| `/`, `/lessons`, `/lessons/handbook` | localized lesson-link lists | `SeoContentBlock` ← `utils/seoContent.ts` |

Both blocks unmount as soon as the app mounts (`utils/appMounted.ts`), so a
reader sees the interactive UI and a crawler sees the text. Nothing in them may
read `localStorage`, `matchMedia`, wallet or router state — that purity is what
lets them render on the server at all.

The `/content` mirror pages are retired (301 → lesson URL), and locale-prefixed
URLs shipped the same day, so language derives from the URL everywhere.

(A first attempt at the lesson pages used a per-page client ISLAND under the
`nolayout`+`ssr` branch instead. Same crawlable output, but crossing the _app
branch boundary on every `/lessons` ↔ lesson navigation tore down and remounted
the whole provider tree — visible as a fake full-page refresh. The sibling
pattern replaced it the same day; don't resurrect the island.)

## What is still client-only

`/explore`, `/explorer/*`, `/quest`, `/passport` and the interactive half of
the homepage and listings. For the personal pages that is correct — they are
per-user and `noindex`-worthy. For the rest, the sibling trick is available
whenever a static rendering of the content is worth having; **true** SSR of the
app tree still needs the refactor below.

## Why the app tree can't just be unwrapped

Hydration. The UI is a pure function of `localStorage` in ~116 call sites, so
the server and client disagree on the first render:

| server renders | client renders | source |
|---|---|---|
| `15 minutes` | `Done` | lesson progress |
| `Start Lesson` | `View Lesson` | resume position |

Each is a React hydration mismatch *and* a visible flash. Wrapping the
offending components individually does not help: progress state is woven
through the lesson cards, the nav, the buttons and the badges, so the page
becomes a mosaic of client-only islands that pop in separately — worse for
perceived speed than today's single paint.

Unlocking it means **moving user state out of render**: progress, badges,
resume position and language must stop being read synchronously during render —
a `useSyncExternalStore` (or equivalent) refactor with an explicit SSR
snapshot, across those ~116 sites. That is a project, not an edit.

## Prerender failures already fixed (all correct regardless)

An earlier attempt to unwrap the tree surfaced these; the fixes all landed.

| class | fix |
|---|---|
| `next/router` **singleton** read during render | `ConnectWalletButton`, `ExplorerProfile` → `useRouter()`. Note the grep trap: `import router, { useRouter } from 'next/router'` hides the singleton on a line that also matches `useRouter`. |
| `localStorage` during render | `src/utils/ssrStorage.ts` installs a non-persisting server stub, imported first in `_app.tsx`. Deliberately does not persist: a prerender has no user, and a process-global Map would leak one visitor's state into another's render. |
| `document` during render | image alt text built with string work instead of a real `<div>`; `document?.referrer` in `feature-request` and `report-an-issue`. |
| `window` during render | `SocialSharing`, `PassportModal`, `MintDatadiskModal`. |

**The optional-chaining trap, four times over:** `window?.location` and
`document?.referrer` do *not* guard anything. Optional chaining protects against
a null **value**, not an undeclared **identifier** — `typeof x !== 'undefined'`
is the only safe check.

## Reproducing

Unwrap `NonSSRWrapper` in `_app.tsx` and run `npx next build` (skips the content
validators). Failures name one page at a time; fix, rebuild, repeat. Server
chunks are minified, so stacks are unhelpful — `experimental.serverSourceMaps`
in `next.config.mjs` deminifies them if needed. Bisect by moving the wrapper
inward (providers → Layout → page) to find which layer owns a failure.
