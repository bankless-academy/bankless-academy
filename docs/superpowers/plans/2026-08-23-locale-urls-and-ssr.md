# Locale-Prefixed URLs + Lesson SSR Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans
> (inline execution) to implement this plan task-by-task. Steps use checkbox
> (`- [ ]`) syntax for tracking.

**Goal:** Move all localized URLs to `/<lang>/...` (English stays at the root,
un-prefixed), serve the full lesson text server-side on the lesson URL itself,
and retire the `/content` mirror pages — so Google indexes one full-text URL
per lesson per language.

**Architecture:** Next.js pages-router built-in i18n (`i18n` block in
`next.config.mjs`) provides the locale prefix routing; the existing catch-all
and duplicate localized routes collapse into single per-page routes that emit
`{ params, locale }` paths. Lesson pages become hybrid: server-rendered
article HTML (the SSR-safe `LessonArticle` output, via the `nolayout`+`ssr`
pageMeta escape hatch) with the existing interactive app mounted client-side
as an island (`dynamic({ ssr: false })`) — **zero changes to how user state
lives in localStorage**. `/content` mirrors then 301 to the lesson URLs.

**Tech Stack:** Next.js 16.1.7 pages router, React 18, Chakra v2, i18next.
No new dependencies.

**Spec:** The conversation of 2026-08-23 (GSC "Crawled - currently not
indexed" investigation → decision), plus `docs/ssr-migration.md` (constraints)
and the repo `CLAUDE.md` (content-pipeline invariants).

## Global Constraints

- **The user commits and pushes — never commit from this plan.** Work stays in
  the working tree; present a commit plan at the end.
- **localStorage stays exactly as it is.** No user state moves off the
  browser; no render-time reads are refactored. The island architecture keeps
  every interactive component client-only.
- English URLs never move: `defaultLocale: 'en'` is un-prefixed. Only
  translated URLs change shape.
- `localeDetection: false` — no Accept-Language auto-redirects (Google
  penalizes them; onboarding suggestion UX stays ours).
- Every task must leave `yarn build` green (validate-content + test-content +
  validate-i18n + next build all run inside it).
- All redirects `permanent: true` and `locale: false`; no redirect chains in
  the final table (old URL → final URL in one hop).
- `src/constants/languages.ts` stays the single language registry;
  `next.config.mjs` parses codes out of it (same regex approach as
  `translate-content.js` `loadLanguages()`), never duplicates the list.
- Quiz answers stay stripped from any server-rendered article HTML
  (`buildArticle` already does this — reuse it, never bypass it).
- Deprecated lessons keep `noindex` and stay out of sitemap/listings.
- Type errors don't fail the build (`ignoreBuildErrors: true`) — run
  `yarn type-check` manually per task; pre-existing errors are not ours to fix,
  new ones are.

---

## Phase 1 — URL revamp

### Task 1: i18n config + unified redirect table

**Files:**
- Modify: `next.config.mjs`
- Modify: `vercel.json` (delete the `redirects` array)

**Interfaces:**
- Produces: locale routing for every page (`router.locale`), `LOCALES` parsed
  from the registry, the complete 301 table.

- [x] **Step 1:** In `next.config.mjs`, parse locale codes from the registry:

```js
import fs from 'fs'
// Single source of truth for languages is src/constants/languages.ts (TS, so
// not importable here). Parse the codes the same way translate-content.js
// does. Build-time only; throws loudly if the registry shape changes.
const registrySrc = fs.readFileSync('src/constants/languages.ts', 'utf8')
const LOCALES = [...registrySrc.matchAll(/code: '([a-z-]+)'/g)].map((m) => m[1])
if (LOCALES.length < 20 || !LOCALES.includes('en'))
  throw new Error('failed to parse language registry for i18n locales')
const NON_EN = LOCALES.filter((l) => l !== 'en')
const LANG_GROUP = `:lang(${NON_EN.join('|')})`
```

- [x] **Step 2:** Add to `nextConfig`:

```js
i18n: {
  locales: LOCALES,
  defaultLocale: 'en',
  localeDetection: false,
},
```

- [x] **Step 3:** Add `redirects()` to `nextConfig` — the complete table, all
  `permanent: true, locale: false`:

```js
async redirects() {
  return [
    // Legacy pre-ISO codes straight to the FINAL shape (no chains)
    ...Object.entries({ br: 'pt-br', cn: 'zh', jp: 'ja', ua: 'uk' }).map(
      ([legacy, code]) => ({
        source: `/lessons/${legacy}/:path*`,
        destination: `/${code}/lessons/:path*`,
        permanent: true, locale: false,
      })
    ),
    // Renamed lesson slugs (from vercel.json), en + localized shapes
    ...[
      ['how-to-fund-a-wallet-on-layer-2', 'funding-a-wallet-on-layer-2'],
      ['the-stablecoin-guide', 'understanding-stablecoins'],
      ['how-to-swap-on-a-decentralized-exchange', 'swapping-on-a-decentralized-exchange'],
    ].flatMap(([from, to]) => [
      { source: `/lessons/${from}`, destination: `/lessons/${to}`, permanent: true, locale: false },
      { source: `/lessons/${LANG_GROUP}/${from}`, destination: `/:lang/lessons/${to}`, permanent: true, locale: false },
    ]),
    { source: '/lessons/conceptos-:rest*', destination: '/es/lessons/blockchain-basics', permanent: true, locale: false },
    // The migration itself: /lessons/<lang>/... -> /<lang>/lessons/...
    // Content mirrors collapse straight onto the lesson URL (phase 3 end-state,
    // encoded now so no intermediate URL ever goes live).
    { source: `/lessons/${LANG_GROUP}/:slug/content`, destination: '/:lang/lessons/:slug', permanent: true, locale: false },
    { source: `/lessons/${LANG_GROUP}/:slug`, destination: '/:lang/lessons/:slug', permanent: true, locale: false },
    { source: `/glossary/${LANG_GROUP}`, destination: '/:lang/glossary', permanent: true, locale: false },
  ]
},
```

NOTE: the English `/lessons/:slug/content` → `/lessons/:slug` redirect is
Task 8 (it must not land before the lesson page carries the article).

- [x] **Step 4:** Delete the `redirects` array from `vercel.json` (now fully
  ported).

- [x] **Step 5:** Verify config parses: `node -e "import('./next.config.mjs').then(m => console.log('ok', m.default.i18n.locales.length))"`
  Expected: `ok 28` (27 non-English + en).

### Task 2: consolidate the lesson routes

**Files:**
- Delete: `src/pages/lessons/[...slug].tsx`
- Create: `src/pages/lessons/[slug].tsx`
- Modify: `src/pages/lessons/[slug]/content.tsx`
- Delete: `src/pages/lessons/[slug]/[lessonSlug]/content.tsx`
- Modify: `src/utils/lessonContentPage.ts`

**Interfaces:**
- Consumes: `getContentPageProps(lang, slug)` (kept, URL fields updated).
- Produces: `contentPaths(): { params: { slug }, locale }[]` replacing
  `englishContentPaths`/`localizedContentPaths`; lesson page getStaticProps
  keyed on `(params.slug, locale)`.

- [x] **Step 1:** Create `src/pages/lessons/[slug].tsx` from the old catch-all:
  - `getStaticPaths`: for each lesson emit `{ params: { slug }, locale: 'en' }`,
    the `-datadisk` variant (en only, `hasCollectible` gate), and one entry per
    registered language in `lesson.languages` (file-on-disk check as before).
    `fallback: 'blocking'`.
  - `getStaticProps({ params, locale })`: slug = `params.slug` minus
    `-datadisk`; `language = locale`; `notFound` when the lesson is missing,
    when `locale !== 'en'` and the translation is not registered/on disk, or
    for datadisk without collectible. Drop the old `validShape` machinery
    (single segment is now structural). Keep `processMD` verbatim.
  - Page component: replace `parseLangFromPath(router.asPath)` with
    `router.locale`; the corrective replace goes to
    `router.replace(`/lessons/${lesson.slug}`, undefined, { locale: 'en' })`;
    the first-visit browser-language redirect becomes
    `router.replace(router.asPath, undefined, { locale: browserLang })`.
- [x] **Step 2:** In `lessonContentPage.ts`: replace the two path builders with
  one `contentPaths()` emitting `{ params: { slug }, locale }`; update `url`
  and `canonical` to `` usedLang === 'en' ? `/lessons/${slug}/content` : `/${usedLang}/lessons/${slug}/content` ``.
- [x] **Step 3:** Rewrite `src/pages/lessons/[slug]/content.tsx` to use
  `contentPaths()` and `getContentPageProps(locale, params.slug)`; delete the
  `[lessonSlug]` route file.
- [x] **Step 4:** `yarn build` — expect green; note the page count (should be
  ~same: no locale variants are added for pages that had none).

### Task 3: consolidate the glossary route

**Files:**
- Modify: `src/pages/glossary.tsx`
- Delete: `src/pages/glossary/[lang].tsx`

- [x] **Step 1:** Move the localized-title `getStaticProps` logic from
  `[lang].tsx` into `glossary.tsx`, keyed on `locale`; return
  `{ notFound: true }` when `locale !== 'en'` and
  `translation/keywords/<locale>/keywords.json` is missing (mirrors the
  sitemap gate — registered-but-empty languages must not serve an English
  copy). Pass `lang` prop to `GlossaryPage` (undefined for en).
- [x] **Step 2:** Delete `src/pages/glossary/[lang].tsx`. `yarn build` green.

### Task 4: language plumbing (context, links, selector, head, document)

**Files:**
- Modify: `src/contexts/AppContext.tsx`, `src/constants/languages.ts`,
  `src/components/InternalLink.tsx`, `src/components/ExternalLink.tsx`,
  `src/components/LanguageSelector.tsx`,
  `src/components/RecordPreferredLanguage.tsx`, `src/components/Head.tsx`,
  `src/pages/_document.tsx`, `src/components/LessonArticle.tsx`

**Interfaces:**
- Produces: `router.locale` as the single runtime language source; helper
  `localePath(locale, path)` in `constants/languages.ts`:

```ts
// Absolute path for a locale: localePath('fr', '/lessons/x') -> '/fr/lessons/x',
// localePath('en', '/lessons/x') -> '/lessons/x', localePath('fr', '/') -> '/fr'.
export const localePath = (lang: string, path: string): string => {
  const code = normalizeLangCode(lang)
  if (code === 'en') return path
  return path === '/' ? `/${code}` : `/${code}${path}`
}
```

- [x] **Step 1:** `AppContext`: language = `normalizeLangCode(router.locale)`.
  - `locale !== 'en'` → apply + `writePreferredLanguage`.
  - `locale === 'en'` and stored pref ≠ en → `router.replace(router.asPath,
    undefined, { locale: pref })`, BUT only when the target exists: for
    `/lessons/<slug>` paths check `LESSONS` `languages[]`; all other pages
    exist at every locale. (This replaces the old three-case table: instead of
    rendering French chrome at an English URL, we navigate to the French URL.)
  - Guard against loops: skip the replace when the path is a lesson without
    that translation; after a replace the effect re-runs with the new locale
    and settles.
- [x] **Step 2:** `languages.ts`: delete `parseLangFromPath`, `hasLangSegment`,
  `isLocalizablePath`, `RESERVED_LESSON_ROUTES`; add `localePath`. Fix every
  importer (grep — known: AppContext, LessonArticle, old [...slug] which is
  deleted).
- [x] **Step 3:** `InternalLink`: next/link now auto-prefixes the active
  locale. Remove the href rewriting; keep ONE guard: for `/lessons/<slug>`
  links where the lesson lacks the active language, pass `locale="en"` so the
  link lands on the English lesson instead of a 404. Glossary links need
  nothing.
- [x] **Step 4:** `ExternalLink`: its lesson-link i18nextLng rewrite becomes
  `localePath(lng, '/lessons/<slug>')` (plain `<a>`, so build the full path).
- [x] **Step 5:** `LanguageSelector` (read the file first): current language
  from `router.locale`; switching =
  `router.push(router.asPath, undefined, { locale: code })` +
  `writePreferredLanguage(code)`; keep the lesson-page guard (if the open
  lesson lacks the language, navigate to `localePath(code, '/lessons')`
  or the English lesson — preserve whatever the current UX does, just in the
  new URL shape). Legacy-code migration logic stays.
- [x] **Step 6:** `RecordPreferredLanguage` (read the file first): record when
  the URL carried a non-en locale AND the served lang matches it (content
  pages fall back to English when a translation is missing — that must not
  record).
- [x] **Step 7:** `Head.tsx`: `url`/`canonical` = `DOMAIN_URL_ +
  localePath(router.locale, router.asPath)` (asPath is locale-stripped under
  i18n). hreflang clusters: lesson alternates →
  `` `${DOMAIN_URL_}${localePath(l, `/lessons/${slug}${contentSuffix}`)}` ``;
  glossary → `localePath(l, '/glossary')`.
- [x] **Step 8:** `_document.tsx`: set `dir` server-side from the request
  locale (`props.__NEXT_DATA__.locale`, `isRtlLang`); Next sets `lang` itself
  when i18n is configured — verify in built HTML and keep our explicit one
  only if it doesn't.
- [x] **Step 9:** `LessonArticle.tsx:109`: lesson link →
  `localePath(lang, `/lessons/${lesson.slug}`)`. Fix its
  `parseLangFromPath` import (it has one — read the call site and replace with
  the `lang` prop / `router.locale`).
- [x] **Step 10:** `yarn type-check` (no NEW errors) + `yarn build` green.

### Task 5: URL emitters (sitemap, content-page internals, profile redirect)

**Files:**
- Modify: `src/pages/api/sitemap.ts`, `src/utils/lessonContent.ts`,
  `src/components/ExplorerProfile.tsx`
- Check (grep, fix if they build localized lesson/glossary URLs):
  `src/pages/api/rss.ts`, `src/utils/index.ts` (`lessonLink` is English-only —
  unchanged), OG builders.

- [x] **Step 1:** `api/sitemap.ts`: `localized(language)` →
  `` enLink.replace(`${DOMAIN_URL}/lessons/`, `${DOMAIN_URL}/${language}/lessons/`) ``
  (write it as a template on `DOMAIN_URL + '/' + language + '/lessons/' + slug`
  rather than a fragile replace); glossary static paths →
  `/${l.code}/glossary`. Keep the /content URLs for now (Task 8 removes them).
- [x] **Step 2:** `utils/lessonContent.ts` language-nav alternates (~line 174)
  → `/${l}/lessons/${slug}/content` shapes; check its JSON-LD for URL fields
  and update the same way.
- [x] **Step 3:** `ExplorerProfile.tsx:127` redirect →
  `localePath(lng, `/lessons/${slug}`)`.
- [x] **Step 4:** Grep for stragglers:
  `grep -rn "lessons/'\|/lessons/\${\|glossary/\${" src --include="*.ts*"`
  — every hit must be locale-correct (next/link auto-prefix counts as
  correct). `yarn build` green.

### Task 6: phase 1 verification matrix

- [x] **Step 1:** `yarn build` (full, with validators) — green.
- [x] **Step 2:** `next start` on the build, then the curl matrix (expected
  status → URL):
  - 200: `/lessons/bitcoin-basics`, `/fr/lessons/bitcoin-basics`,
    `/fr/lessons/bitcoin-basics/content`, `/fr/glossary`, `/glossary`, `/fr`,
    `/lessons/handbook`, `/ur/lessons/wallet-basics/content` (body carries
    `dir="rtl"`).
  - 308/301 to the exact new URL: `/lessons/fr/bitcoin-basics`,
    `/lessons/fr/bitcoin-basics/content` (→ `/fr/lessons/bitcoin-basics`),
    `/glossary/fr`, `/lessons/br/bitcoin-basics` (→
    `/pt-br/lessons/bitcoin-basics`), `/lessons/the-stablecoin-guide`,
    `/lessons/jp/the-stablecoin-guide` (→
    `/ja/lessons/understanding-stablecoins`, ONE hop).
  - 404: `/lessons/xx/bitcoin-basics`, `/de/lessons/not-a-lesson`,
    `/lessons/bitcoin-basics/contentt`, `/fr/lessons/bitcoin-basics-datadisk`
    (datadisk is en-only).
  - `/en/lessons/bitcoin-basics`: must NOT serve 200 content (Next should
    404 or redirect it — record the actual behavior).
- [x] **Step 3:** `curl -s localhost:3000/sitemap.xml`: no
  `/lessons/<lang>/` or `/glossary/<lang>` old shapes; `/fr/lessons/` present;
  URL count ≥ 1100; hreflang alternates reciprocate on spot-checked clusters.
- [x] **Step 4:** Confirm `<html lang="fr">` (and `dir="rtl"` for ur/ar) in
  `.next/server/pages/…` built HTML for localized pages.

---

## Phase 2 — server-rendered lesson content, interactive island

### Task 7: hybrid lesson page

**Files:**
- Modify: `src/pages/lessons/[slug].tsx`, `src/utils/lessonContentPage.ts`
- Create: `src/components/LessonIsland.tsx`
- Modify (factor): `src/components/LessonArticle.tsx` → export an
  `ArticleBody` (the prose without page chrome) used by both the content page
  and the lesson page.

**Interfaces:**
- Consumes: `buildArticle` (quiz-stripped HTML), `getContentPageProps`
  internals (refactor a shared `buildLessonArticleProps(lang, slug)` that
  returns `{ articleHtml, headings, name, description, usedLang }`).
- Produces: lesson page pageMeta gains `nolayout: true, ssr: true,
  articleHtml, headings, lang`; `LessonIsland` = the ENTIRE current
  interactive tree (`Web3Providers > AppProvider > Layout(from layout/index) >
  [Article | Container>LessonDetail]`), mounted with
  `dynamic(() => import('components/LessonIsland'), { ssr: false })`.

- [x] **Step 1:** Read `src/components/LessonArticle.tsx`,
  `src/layout/index.tsx`, `src/components/LessonDetail.tsx` (skim) to fix the
  factoring seams. `layout/index` (OnboardingModal singleton) is the island's
  layout import — never mount a second modal.
- [x] **Step 2:** Extract `buildLessonArticleProps` in `lessonContentPage.ts`;
  content page keeps using it via `getContentPageProps`.
- [x] **Step 3:** `[slug].tsx` getStaticProps: add
  `nolayout: true, ssr: true`, `articleHtml`, `headings`, `lang` to pageMeta.
  Deprecated lessons: keep `noindex`, and DO include the article (same policy
  as the lesson page being reachable) — no, KEEP deprecated article OUT
  (matches the /content rule: don't newly expose unmaintained prose) — pass
  `articleHtml: null` for deprecated lessons.
- [x] **Step 4:** Page component becomes: `<LessonIslandDynamic pageMeta>` on
  top, then (when `articleHtml`) a visually distinct
  `<section>` with the server-rendered `ArticleBody` below. The island's
  `loading` component renders a lightweight server-safe hero (lesson name,
  description, cover image — plain Chakra, NO localStorage/router state) so
  the first paint isn't blank and hydration is seamless.
- [x] **Step 5:** Verify: `yarn build`; served HTML of
  `/lessons/bitcoin-basics` and `/fr/lessons/bitcoin-basics` contains >10k
  chars of article text (script:
  `curl -s ... | python3 -c 'strip tags, count'`); interactive lesson still
  works in `next start` (manual click-through by user later; automated check:
  page HTML contains the island mount node and no hydration error in server
  log).
- [x] **Step 6:** Confirm the island does NOT regress cold start: lesson pages
  are SSG (build-time), and `_app`'s default branch still keeps Web3Providers
  `ssr:false` for the SSR routes. `grep '@walletconnect' .next/server/pages/lessons/*.js` — wait, island is
  client-only: assert the LESSON page server chunk does not grow the web3
  stack (compare chunk size before/after).

### Task 8: retire the /content mirrors

**Files:**
- Modify: `next.config.mjs` (redirects), `src/pages/api/sitemap.ts`,
  `src/components/Head.tsx`, `src/utils/lessonContent.ts`
- Delete: `src/pages/lessons/[slug]/content.tsx`
- Modify: `src/utils/lessonContentPage.ts` (drop content-page-only exports),
  `src/components/LessonContentPage.tsx` + `RecordPreferredLanguage` (delete if
  now unused — check `LessonContent.tsx` / `/lessons/preview` first)

- [x] **Step 1:** Add redirects (locale:false, permanent):
  `{ source: '/lessons/:slug/content', destination: '/lessons/:slug' }` and
  `` { source: `/${LANG_GROUP}/lessons/:slug/content`, destination: '/:lang/lessons/:slug' } ``.
- [x] **Step 2:** Delete the content route; strip `/content` URLs + their
  hreflang from `api/sitemap.ts` and the `contentSuffix` logic from
  `Head.tsx`; the content-page language nav in `lessonContent.ts` moves to
  lesson URLs or is dropped with the page.
- [x] **Step 3:** `yarn build`; curl: `/lessons/bitcoin-basics/content` → 308
  → `/lessons/bitcoin-basics`; `/fr/lessons/bitcoin-basics/content` → 308;
  old `/lessons/fr/bitcoin-basics/content` → 308 → `/fr/lessons/bitcoin-basics`
  (one hop); sitemap has zero `/content` URLs.

---

## Phase 3 — ship gate

### Task 9: end-to-end verification + docs

- [x] **Step 1:** Full matrix re-run (Task 6 list + Task 8 redirects + article
  presence on 3 lesson pages in 3 languages incl. `ur` RTL).
- [x] **Step 2:** `yarn validate-content && yarn test-content && node validate-i18n.js` explicitly.
- [x] **Step 3:** Translated md cross-links: grep `translation/lesson/*/`
  for `/lessons/<lang>/` absolute links; count them — they 301 correctly, so
  report only (fixing md invalidates translation hashes; a follow-up wave
  task).
- [x] **Step 4:** Update `CLAUDE.md` (routing map, language resolution
  section, content-page section — /content is gone), `docs/ssr-migration.md`
  (status: lesson pages hybrid-SSR shipped; full-app SSR still open),
  `docs/rtl-audit.md` if the document-level `dir` handling moved.
- [x] **Step 5:** Present the change set to the user with a suggested commit
  split (1: URL revamp, 2: lesson SSR + /content retirement) and the
  post-deploy checklist: resubmit sitemap in GSC, watch the deploy, re-run
  `gsc-inspect.mjs sample` after ~1 week.

## Post-deploy (user actions, not in this plan)

- Commit + push (two commits fine; one deploy train).
- GSC: resubmit `/sitemap.xml`; the old-URL 301s will drain "Discovered" queue
  entries toward the new URLs over ~2-4 weeks.
- Re-run the URL-inspection sample ~Sep 1 and compare against the 2026-08-23
  baseline in `scratchpad/gsc-inspect-results.json` (copy it somewhere
  durable first — scratchpad is session-scoped).
