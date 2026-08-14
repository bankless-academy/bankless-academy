# How lesson translation works

Detailed walkthrough of `translate-content.js`. `CLAUDE.md` carries the short
version; this is the reference. Written 2026-08-14.

## Command surface

```bash
yarn translate-content --lang fr --slug bitcoin-basics   # one lesson
yarn translate-content --lang fr --slug a --slug b       # several (repeatable)
yarn translate-content --lang fr --all                   # every non-deprecated lesson
```

| Flag | Effect |
|---|---|
| `--lang <code>` | Required. Must be a non-`en` code in the language registry. |
| `--slug <slug>` | Repeatable. Mutually exclusive with `--all`. |
| `--all` | Every lesson whose `publicationStatus` is not `deprecated`. |
| `--force` | Ignore hashes and retranslate everything. |
| `--dry-run` | Report what would be translated, call nothing. |
| `--model <id>` | Override the model (default `claude-sonnet-5`). |
| `--verify-only` | Offline. Re-check existing translations against the contract. |
| `--terms` | Offline. Print the terminology table that would be injected. |
| `--keywords` | Repair glossary entries still holding English definitions. |

Tunables at the top of the script: `DEFAULT_MODEL` (`claude-sonnet-5`),
`MAX_ATTEMPTS` (3), `CONCURRENCY` (4), temperature 0.2, `max_tokens` 4096.
`ANTHROPIC_API_KEY` in `.env` is required except for the offline modes.

## Inputs and outputs

| Read | Purpose |
|---|---|
| `translation/lesson/en/<slug>.md` | Canonical source |
| `src/constants/lesson-meta.json` | `slideMeta` (LESSON vs HANDBOOK), `languages[]`, `publicationStatus` |
| `src/constants/languages.ts` | Language registry, parsed from the TS so it stays the only declaration point |
| `translation/keywords/en/keywords.json` | English definitions, injected as context |
| `translation/ethglossary/<lang>.json` | Canonical term translations |
| `translation/ethglossary/style-guide.json` | Per-term `scriptRule` |
| `translation/style/<lang>.md` | Register, conventions, ```terms overrides |
| `translation/.translate-state.json` | Per-unit hashes from the last run |

| Written | |
|---|---|
| `translation/lesson/<lang>/<slug>.md` | The translation |
| `translation/keywords/<lang>/keywords.json` | New glossary entries for terms this lesson introduced |
| `translation/.translate-state.json` | Updated hashes. **Commit this** — it is what makes re-runs cheap. |

## Step by step, per lesson

### 1. Split into units

`isArticle` is derived from whether `slideMeta` exists in `lesson-meta.json`.

- **LESSON** splits on `#` — one unit per slide.
- **HANDBOOK** splits on `##` — articles have no `#` headings at all. Getting
  this wrong produced nine empty articles in testing; it is the reason the
  parser is format-aware.

Each unit keeps its raw text *including* its heading line, so reassembly is
lossless. The parser also records the newline `gap` after the ` ``` ` fence,
which differs between the two formats. All 23 lessons round-trip byte-for-byte
through parse → render; that property is worth re-testing after any parser
change.

### 2. Decide what is stale

Each unit's English text is SHA-256'd (truncated to 16 hex chars) and compared
against `.translate-state.json`. A unit is reused from the existing translation
only when the unit lists still line up:

```js
prevState.sections.length === en.units.length &&
prev.units.length === en.units.length
```

Without that guard, inserting a slide upstream would shift every later
translation onto the wrong slide. If the existing file fails to parse, the
lesson is retranslated in full.

Title and description hash together as their own unit. If nothing is stale, the
lesson is skipped without a single API call. **An English typo fix costs one
slide, not one lesson.**

### 3. Resolve terminology

Every backticked term in the unit goes through this precedence chain:

| Priority | Source |
|---|---|
| 1 | ```terms override block in `translation/style/<lang>.md` |
| 2 | `keep_latin` / `always_latin` in ETHGlossary's style guide → keep the English form |
| 3 | ETHGlossary `contexts.prose.term` for that language |
| — | English definition from `keywords/en/keywords.json`, always attached as context |

The override layer exists because ETHGlossary is formally correct rather than
idiomatic: its canonical French for `blockchain` is "chaîne de blocs", which no
French crypto speaker uses. Overrides took `bitcoin-basics` from 8/31 to 29/31
terms resolved. **Every language needs its override block written before its
first run** — use `--terms` to see what is unresolved.

The `scriptRule` layer matters most for non-Latin scripts: 123 of ETHGlossary's
532 terms (Uniswap, API, APY, KZG…) must not be transliterated into Cyrillic or
CJK.

### 4. Build the prompt

- **System**: target language, beginner register, ten hard structural rules,
  and the style guide verbatim.
- **User**: lesson title and description, the full slide outline for context,
  the terminology table, and the unit itself.

Passing the outline every time is cheap and keeps voice consistent across
slides that are translated in parallel.

### 5. Translate, normalize, verify

Output is unfenced, then normalized by `applyTypography` (see below), then
checked against its English source:

- identical `![](...)` image references, same order
- identical link URLs
- same quiz option count, `[x]` on the same index
- same number of `> ℹ️` feedback lines
- `<details>` / `<summary>` preserved
- starts with its heading line
- prose units only: not over `MAX_SLIDE_LINES` *and* longer than English

The option-count and `[x]` checks are the important ones. `processMD` in
`src/pages/lessons/[...slug].tsx` overwrites a translated lesson's
question/answers/feedback but **keeps `rightAnswerNumber` from the compiled
English lesson**, so drift there grades learners against options that are not
on screen. That is exactly the live bug found in six `bitcoin-basics`
translations.

A failure is retried with the specific problems fed back, up to `MAX_ATTEMPTS`.
Still failing → the whole lesson is left untouched rather than written
half-broken.

### 6. Typography normalization

`applyTypography(text, lang)` in `content-lib.js` fixes punctuation spacing
deterministically instead of asking the model to remember it. French inserts a
**no-break** space before `:` `;` `!` `?` and inside `« »`; a plain space lets
the line wrap and strands the punctuation alone on the next line.

It is idempotent, skips `!` followed by `[` so markdown images are untouched,
and is a no-op for any language with no rule defined. Other languages have their
own conventions (Spanish `¿…?`, CJK full-width punctuation) — the hook exists,
each language just needs its rule added before its first run.

### 7. Assemble and write

Reused and freshly translated units in source order. Frontmatter handling:

| Field | Treatment |
|---|---|
| `TITLE`, `DESCRIPTION` | Translated together in one call, then normalized |
| `LANGUAGE` | Set from the registry's `localName` |
| `TRANSLATORS` | Set to `Claude (Anthropic AI)` |
| everything else | Passed through verbatim |

The ASCII banner and the exact newline gap after the fence are preserved.

### 8. Sync the glossary

Tooltips resolve through `translation/keywords/<lang>/keywords.json` keyed by
the **translated** term (`Lesson.tsx` lowercases whatever sits between the
backticks and looks it up in the `keywords` i18next namespace). So translating a
lesson without touching that file leaves every newly-chosen term as a dead
tooltip — the French pilot produced 8 before this step existed.

The script collects every term the lesson uses, adds the missing ones in one
batched call, and reports anything still unresolved.

### 9. Record state

Unit hashes, frontmatter hash, model, and an ISO timestamp per `<lang>/<slug>`.

## After a run

1. Add the language to that lesson's `languages[]` in `lesson-meta.json`, and
   clear it from `staleTranslations` if it was there.
2. `yarn validate-content` — re-checks the same invariants from outside, plus
   slide overflow and typography.
3. `yarn build-content` if English changed; commit sources and artifacts
   together.

Entering `.translate-state.json` also flips a file from *warning* to *hard
failure* on the overflow gate, so generated translations are held to a stricter
bar than the legacy files still awaiting regeneration.

## Offline modes (no API key)

- **`--verify-only`** applies the exact per-unit contract to an existing
  translation, whoever wrote it. Use it on contributed or hand-written
  translations, and to check output the script did not generate.
- **`--terms`** prints the terminology table per lesson, showing which terms
  have no canonical translation. Run this before a language's first wave to
  find out what its override block needs.
- **`--keywords`** finds glossary entries whose definition is byte-identical to
  an English one and re-translates them in batches of 25. Around **156 of 342
  French entries** are in that state, inherited from the Crowdin import; every
  language is similar. (This one does call the API.)

## Status

Everything above is implemented and lints clean, and the offline modes are
exercised. **The API path has never run** — there was no `ANTHROPIC_API_KEY`
available — so `callClaude`, the retry loop, hash-gated reuse and the
concurrency pool are written but unproven.

The French `bitcoin-basics` pilot was authored directly against the same
contract and verified with `--verify-only`. That validated the unit format,
terminology pinning, structural gates, typography and glossary sync, but not the
network code.

First real run should be a single lesson with `--dry-run` first, then without,
and read the diff before doing a wave.
