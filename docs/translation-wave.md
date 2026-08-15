# Translation wave — shared brief (any language)

Repo: `/Users/dj/git/ba`. You are acting as the translation engine: there is no
`ANTHROPIC_API_KEY`, so you write the target language yourself, to the same
contract `translate-content.js` enforces. Your prompt names your language code
(`<lang>`) and your scope.

**Read `translation/style/<lang>.md` first and follow it exactly.** It fixes the
variety, the register, the terms kept in English, grammatical gender for the
loanwords, and the typography. It ends with a ```terms``` block of pinned
translations that beat everything else, including your own judgment and the
vendored ETHGlossary. Those pins are ordered by how many of the 19 lessons use
each term, so the ones most likely to drift between translators are covered
first. They are not suggestions.

Reference material, in order of authority:
1. `translation/style/<lang>.md` — authoritative.
2. `translation/ethglossary/<lang>.json` — 541 vendored terms with morphology,
   aliases and a `contexts.prose` form. Good for terms the style guide does not
   pin. It prefers formally-correct coinages that native crypto speakers often
   avoid, so sanity-check against real usage.
3. `translation/lesson/fr/*.md`, `translation/keywords/fr/keywords.json`,
   `translation/website/fr/*.json` and the matching `es` files — two FINISHED,
   reviewed languages. Copy their shape and their level of polish. Do **not**
   translate from them; English is the source.

## Hard rules

1. **Never change structure.** Same number of `#`/`##` sections, same image
   references, same link URLs, same number of quiz options, `- [x]` on the
   **same option index** as English (users have answer numbers saved in
   localStorage), same number of `> ℹ️` feedback lines, `<details>` preserved.
2. **Keep every heading `Knowledge Check <n>` in English**, numbered as in the
   source. The frontend renders its own translated label; the md heading is an
   identifier the compiler reads.
3. **Backticked `terms` must resolve in the target glossary.** Write the
   translated display form inside the backticks, not the English key.
   `translation/keywords/<lang>/keywords.json` is keyed by the ENGLISH term
   with the translation in `keyword` / `keyword_plural` / `keyword_forms`; the
   app maps the displayed word back to that key at runtime. `validate-content.js`
   fails the build on a backticked term that resolves to nothing, so check
   before you finish.
4. **Length is capped.** Slides are a fixed height; the verifier rejects a unit
   over 22 estimated rendered lines. Most languages run 20-35% longer than
   English, so compress: cut filler, shorten clauses, merge sentences. Never
   drop information to fit.
5. **Quiz options ≤ ~70 characters.** Move nuance into the `> ℹ️` feedback.
   Feedback lines: one or two short sentences, ~150 chars max.
6. **No em dashes (—)** anywhere.
7. **Emphasis markers must be able to render.** CommonMark decides whether
   `**` opens or closes from the characters flanking it, so punctuation inside
   the delimiters silently breaks bold and ships a literal `**` to the reader.
   This bit ja and zh on 87 lines in one wave, and `_x_` next to Cyrillic in
   uk. Keep punctuation outside (`**価値**：`, not `**価値：**`), bold the link
   *text* rather than the whole link (`[**name**](url)`), and never use `_…_`
   against a non-Latin letter — `_` cannot open or close intraword, use `*…*`.
   `validate-content.js` renders every line with markdown-it and fails on any
   marker that survives as literal text.
8. Do not touch `src/constants/lesson-meta.json`, do not run
   `build-content.js`, do not commit. Registration and the final build happen
   centrally after every agent finishes.

## How to build a lesson

For each slug assigned to you:

1. Read `translation/lesson/en/<slug>.md`.
2. Write **only the body** — everything after the frontmatter and the ASCII
   banner block, starting at the first `#` for a LESSON or the first `##` for a
   HANDBOOK — to
   `$TRANSLATION_SCRATCH/<lang>-<slug>.body.md`
   Do not copy the frontmatter or the banner: the assembler takes those from
   the English file and rewrites TITLE / DESCRIPTION / LANGUAGE / TRANSLATORS.
3. Build and verify:
   ```
   bash build-translation.sh \
     <lang> "<localName>" <slug> "<translated TITLE>" "<translated DESCRIPTION>"
   ```
4. It prints `<slug>: N units, OK` or a numbered list of problems. **Fix the
   body file and re-run until it prints OK.** A unit-count mismatch means you
   added or dropped a section. "too long" means that slide must be tightened.

Take TITLE and DESCRIPTION from `translation/website/<lang>/lesson.json` when
that file already has them, so the lesson page and the listing card agree.

Report back: the slugs you completed with their final unit counts, and anything
you had to reword heavily to clear the length ceiling.
