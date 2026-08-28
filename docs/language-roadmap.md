# Language roadmap — how we choose what to translate next

**Where we are:** 28 languages live (English + 27 translations), every
published lesson at 19/19 in every one of them, plus the glossary and all four
UI namespaces. The infrastructure questions this document used to plan — the
language registry, ISO codes, the searchable selector, lazy-loaded i18next
namespaces, translated-md validation, locale-prefixed URLs — are all shipped
and documented in `CLAUDE.md`. What is left here is the part that stays
useful: **how to decide which language comes next.**

Shipped, in order: the 9 legacy languages brought to full coverage (`fr` first
as the pilot), then hi/id/vi, ru/ko/pl, cs/sw/bn, mr/ta/te, `zh-tw` (derived
from `zh`, not a wave), nl/th/tl, and `ar` + `ur` behind the one-time RTL
audit. The mechanics of running a wave live in `CLAUDE.md` ("Running a
language wave with parallel agents") and `docs/translation-wave.md`.

## Two signals, both of which belong in the decision

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

## Still on the list

1. **`am` Amharic** (reach, not started). Ethiopia is high on the adoption
   index and is the fastest-growing market for retail-sized stablecoin
   transfers, driven by currency collapse and remittances. That is the
   curriculum's actual subject: stablecoins and self-custody as an escape
   hatch, not trading. It sends us almost no traffic today, which on the reach
   reading is the *argument for* it rather than against. Costs to weigh: Ge'ez
   is a new script, Amharic is not the only major language of Ethiopia, and
   internet penetration is low. LTR, so nothing gates it. Upstream ETHGlossary
   has no `am` data — same degraded-pins path nl/th/tl used, where the style
   guide carries all terminology authority.
2. **`fa` Persian** — a candidate, **not scheduled**, pending a compliance
   decision: a large share of Iran's on-chain activity is state-linked rather
   than retail, and there is real sanctions exposure in targeting the market.
   Resolve that before anyone starts a wave. RTL is already done.

## Candidates assessed and set aside

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

## Before adding any language

- A language joins `src/constants/languages.ts` when its wave **starts**, and
  content-derived URL lists must gate on the content, not the registry — the
  sitemap once submitted three empty glossaries to Google because it mapped
  the registry.
- Register it in `LAZY_RESOURCES` (`src/utils/translation.ts`) too, or its
  namespaces do not exist at runtime and the UI silently renders English.
- Write `translation/style/<lang>.md` **first**, with every recurring string
  pinned (section headings, quiz-feedback openers, True/False labels, credit
  labels). That guide is the only thing holding a dozen independent agents to
  one vocabulary.
