# Pre-translation audit (2026-08-14)

Full-repo audit run before starting the `translate-content` phase. Structural
findings live in `CLAUDE.md` ("Website structure", "How i18n works"); this file
holds the **measurements** and the **ordered work list**.

## Measured state

### Lesson content

| | |
|---|---|
| Lessons in `lesson-meta.json` | 23 (19 `publish`, 4 `deprecated`) |
| Of which articles (`isArticle`) | 9 |
| English md files | 23 |
| Static lesson paths built today | 102 (`fallback: true`, no ISR) |
| Paths per language across all lessons | 37 → **925 at 25 languages** |

### Translated lesson files (`translation/lesson/<lang>/`)

| lang | files | of 23 |
|---|---|---|
| fr | 8 | 35% |
| es | 6 | 26% |
| zh | 5 | 22% |
| ja, uk | 4 | 17% |
| de, pt-br, tr | 3 | 13% |
| it | 2 | 9% |

38 translated files total. **All predate the 2026-08-08 English rewrite.**

Structural check against the current English sources (same section count, same
option count per quiz, `[x]` in the same position):

- **13** files structurally consistent
- **25** files with issues

Two distinct problems in that 25:

1. **Missing `[x]` markers** (most of the 25) — expected and harmless. These
   files come from Crowdin, which predates the checkbox convention. The app
   takes `rightAnswerNumber` from the compiled English lesson, so nothing
   breaks.
2. **Option-count drift — live bugs.** `es`, `fr`, `pt-br`, `tr`, `uk`, `zh`
   `bitcoin-basics` translate the *old* quizzes (KC1 is a 2-option True/False
   where English now has 3 options; KC2 has 2 vs 4). `uk/wallet-basics` has 4
   quizzes where English has 8. Since `processMD` keeps the English
   `rightAnswerNumber`, these learners are being graded against options that
   are not on screen.

**Conclusion: every existing translated lesson is stale, not just incomplete.**
Regenerate wholesale; do not diff-patch.

### UI strings (`translation/website/<lang>/common.json`, vs 133 English keys)

| lang | translated | stale keys not in en |
|---|---|---|
| zh | 114 | 20 |
| es | 113 | 20 |
| fr | 93 | 4 |
| tr | 81 | 20 |
| ja | 78 | 20 |
| de | 77 | 41 |
| pt-br | 10 | 20 |
| uk | 10 | 20 |
| it | 2 | 20 |

`homepage.json` exists for **en and fr only** (37 keys). `quests.json` has 5
keys in every language. `lesson.json` (lesson names/descriptions for listings)
exists in all 9 translated languages but **not in en**, and nothing in the repo
generates it any more.

UI-string coverage is materially worse than lesson coverage and is the more
visible gap — a "fully translated" lesson still renders inside an English shell
for `it`, `pt-br` and `uk`.

### Glossary (`translation/keywords/<lang>/keywords.json`, vs 274 English entries)

| lang | entries | keys matching en | keys not in en |
|---|---|---|---|
| pt-br | 325 | 180 | 145 |
| uk | 338 | 174 | 164 |
| fr | 334 | 163 | 171 |
| it | 254 | 148 | 106 |
| tr | 362 | 137 | 225 |
| de | 231 | 121 | 110 |
| es | 282 | 76 | 206 |
| ja | 170 | 44 | 126 |
| zh | 224 | 36 | 188 |

These files are keyed by the **translated** term (that is by design — see
`CLAUDE.md` layer 5), so "matching en keys" partly reflects untranslated
leftovers rather than correctness. What matters is resolution: checking the
backticked terms in French lesson md against the French keyword keys gives
**36 unresolved terms across 8 files** (`ethereum-basics` alone has 18) — every
one is a dead tooltip on the live site today.

Many entries also still carry English definitions under a translated key.

## Do BEFORE the translation run

Ordered. Everything here either changes the English source (so translating
first means paying twice) or is needed to validate the output.

1. **Fix the stale quiz slide titles in `lesson-meta.json`.** 13 distinct
   values across 89 quiz slides, including a literal `✅ TODO` rendering live on
   `layer-1-blockchains` KC1. Decide the target: make `build-content.js` take
   quiz titles from the md `#` heading (as translated pages already do), which
   makes them translatable for free and fixes the en/translated divergence.
   This changes visible English text, so it needs a call.
2. **Extend `validate-content.js` to translated md** — section count, per-quiz
   option count, `[x]` position vs English, URLs and `{{placeholders}}` intact,
   backticked terms resolving in that language's keyword file. Without this the
   translation run has no gate, and it would have caught today's
   `bitcoin-basics` breakage.
3. **Decide what happens to the 25 stale translated files.** Leaving them live
   means shipping known-wrong quizzes until their language's wave lands. Either
   delete them (drop the language from `languages[]`, page falls back to
   English) or fast-track those lessons in wave 1.
4. **Generate `translation/website/en/lesson.json`** (or drop the `lesson`
   namespace and read names from `lessons.json`). Right now the en side of layer
   4 works only by falling through to the key, and nothing produces the
   translated files.
5. **Make the quest components translatable** — 9 of 16 never call
   `useTranslation`, plus the `// TODO: TRANSLATE` markers in `Badge.tsx` and
   the DataDisk components. New English strings landing after the translation
   run means re-running it.
6. **Serve translated md locally** in `LessonContent.tsx` and `/api/sitemap`
   instead of `raw.githubusercontent.com/main`. At 25 languages the sitemap does
   ~475 uncached cross-origin fetches per request; it is also why a translation
   is invisible on preview deploys until it hits `main`.
7. **Add `GITHUB_TOKEN` to Vercel env** (suggest-changes still only works
   locally) and refresh `.env.example`, which is years stale.

## Do AFTER (or during) the translation run

- **Lazy-load i18next namespaces.** 10 languages of static imports already ship
  in every client bundle; 25 is not viable.
- **Switch translated lesson pages to `fallback: 'blocking'` + ISR.** 925
  prebuilt paths otherwise, and every new translation needs a full rebuild.
- **Localize `/glossary`** — per-language route, per-term anchors, cross-links,
  and an audit of which of the 274 entries deserve `glossary: true` (currently a
  subset renders).
- **RTL audit** before the first `ar`/`ur` wave: slide layout, quiz buttons,
  progress steps, nav.
- **hreflang alternates** in the sitemap once coverage is real.
- **Retire Crowdin and the Notion lesson import** — `crowdin.yml`,
  `import-translations.js`, `import-content.js`,
  `src/pages/lessons/preview.tsx`. All already carry DEPRECATED headers.

## Unrelated findings worth logging

- **No tests.** Jest is configured, `yarn test` uses `--passWithNoTests`, and
  there are zero test files. `validate-content.js` + `test-content.js` are the
  only real gates.
- **`typescript.ignoreBuildErrors: true`** in `next.config.mjs` — type errors
  never fail a deploy. `yarn type-check` has to be run deliberately.
- **No `revalidate` anywhere.** Every content change needs a redeploy; the KV
  caches (`announcement`, `explore`, `bankless-dao-news`) are the only dynamic
  path, and only `leaderboard` has a scheduled cron.
- **`public/` is 356 MB**, 280 MB of it `public/images/` plus a 48 MB
  `ocsc-demo.mov`. Every deploy ships it.
- **84 TODO/HACK markers** in `src/`, including `LanguageModeSwitcher.tsx`
  whose onClick is `alert('TODO')`.
- `translation/lesson/.DS_Store` exists on disk (gitignored, and
  `validate-content.js` filters non-directories — but any new script iterating
  that folder must do the same).
