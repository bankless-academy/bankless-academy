# Server-side rendering: where it stands

Status: **not done, deliberately.** The mechanical blockers are fixed; the
remaining work is a refactor, not a wrapper change. This file exists so the next
attempt starts from the findings instead of rediscovering them.

## The symptom

Every page serves an empty body:

```html
<div id="__next"><span></span><span id="__chakra_env" hidden=""></span></div>
```

77 bytes of markup after stripping CSS and scripts, identical on `/`,
`/lessons`, `/glossary`, `/glossary/fr` and every lesson page. These are SSG
pages, so that file *is* what a crawler receives. No `<h1>`, no lesson prose, no
glossary terms.

`<head>` is fine and server-rendered: reciprocal `hreflang` across the
translated languages, self-referencing canonicals, localized `<title>`. Google
executes JS so pages do get indexed; they just cost crawl budget, and nothing
above the fold is in the HTML.

## The cause

`src/pages/_app.tsx` wraps the entire tree — providers, `Layout`, and
`<Component {...pageProps} />` — in `NonSSRWrapper`, which is
`dynamic(..., { ssr: false })`. Nothing renders on the server, on any route.

## What was fixed while attempting it (all landed, all correct regardless)

Removing the wrapper surfaced five classes of prerender failure. Four are gone:

| class | fix |
|---|---|
| `next/router` **singleton** read during render | `ConnectWalletButton`, `ExplorerProfile` -> `useRouter()`. Note the grep trap: `import router, { useRouter } from 'next/router'` hides the singleton on a line that also matches `useRouter`. |
| `localStorage` during render | `src/utils/ssrStorage.ts` installs a non-persisting server stub, imported first in `_app.tsx`. Deliberately does not persist: a prerender has no user, and a process-global Map would leak one visitor's state into another's render. |
| `document` during render | `LessonContent` built a real `<div>` to add image alt text (now string work, which also keeps alt text in the crawled HTML); `document?.referrer` in `feature-request` and `report-an-issue`. |
| `window` during render | `SocialSharing`, `PassportModal`, `MintDatadiskModal`. |

**The optional-chaining trap, four times over:** `window?.location` and
`document?.referrer` do *not* guard anything. Optional chaining protects against
a null **value**, not an undeclared **identifier** — `typeof x !== 'undefined'`
is the only safe check.

## What actually blocks it

Hydration. The UI is a pure function of `localStorage` in ~116 call sites, so
the server and client disagree on the first render:

| server renders | client renders | source |
|---|---|---|
| `15 minutes` | `Done` | lesson progress |
| `English` | `Deutsch` | stored language preference |
| `Start Lesson` | `View Lesson` | resume position |

Each is a React hydration mismatch *and* a visible flash. Wrapping the
offending components individually does not help: progress state is woven
through the lesson cards, the nav, the buttons and the badges, so the page
becomes a mosaic of client-only islands that pop in separately — worse for
perceived speed than today's single paint.

## What would actually unlock it

Two pieces, in order. Both are projects.

1. **Move user state out of render.** Progress, badges, resume position and
   language must stop being read synchronously during render — a
   `useSyncExternalStore` (or equivalent) refactor with an explicit SSR
   snapshot, across those ~116 sites. Until this is done, every
   progress-dependent element is a mismatch.
2. **Locale-prefixed URLs site-wide** (`/de/explore`, not only
   `/lessons/de/...`). Language then derives from the URL everywhere, so the
   server renders the right one and there is no post-hydration swap. Today only
   lessons and the glossary carry a language segment; everything else reads the
   stored preference, which the server cannot know.

## The tradeoff, stated plainly

- **Today:** blank, then painted. Fast-feeling, single paint, invisible to
  crawlers above the fold.
- **Naive SSR:** painted, then corrected. Indexable, but flashes on anything
  user-specific.

Today's default is the right one until step 1 above is done. Turning SSR on is
one edit (`_app.tsx`, unwrap `NonSSRWrapper`) — the edit is trivial, the
consequences are not.

## Reproducing

Unwrap `NonSSRWrapper` in `_app.tsx` and run `npx next build` (skips the content
validators). Failures name one page at a time; fix, rebuild, repeat. Server
chunks are minified, so stacks are unhelpful — `experimental.serverSourceMaps`
in `next.config.mjs` deminifies them if needed. Bisect by moving the wrapper
inward (providers -> Layout -> page) to find which layer owns a failure.
