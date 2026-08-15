# Content debts (tracked outside lesson md — the validator fails on inline TODOs)

Updated 2026-08-08 during the content review/rewrite phase.

## Screenshot / artwork debts (keep-unless-flatly-wrong policy)

| Lesson | Asset | Debt |
|---|---|---|
| funding-a-wallet-on-layer-2 | `image-c8d4dd72.png` (Coinbase network picker) | Predates Base; future capture should show current picker incl. Base |
| funding-a-wallet-on-layer-2 | `across-bridge-select-destination.png` | Shows Boba (dead), missing Base; recapture destination list |
| funding-a-wallet-on-layer-2 | Coinbase send flow ×3, MoonPay ×5, Across flow ×3 | Older UI generations; steps still map — refresh opportunistically |
| layer-1-blockchains | `the-future-of-ethereum-1f05c338.svg` | Logo collage lacks Base (text now names it); refresh artwork eventually |
| layer-1-blockchains | `so-what-can-be-done-043c43fb.svg` | Shows "LAYER 2s / SHARDING"; text keeps sharding as the set-aside plan for compatibility |
| creating-a-crypto-wallet | 2 YouTube walkthroughs "[Zerion 2024 Edition]" | Kept per decision (2026-08-08); re-record when Zerion UI drifts too far |
| swapping-on-a-decentralized-exchange | ~8 walkthrough screenshots | Pre-Aero-merge Velodrome UI; flow still matches. **WATCH: Velodrome→Aero merge may redirect/rebrand velodrome.finance at any time** — re-shoot (and re-check the quest link) when it does |
| registering-your-web3-username | step-4 payment screenshot (`image-91795816.png`) | Shows the removed credit-card option (greyed); recapture on current ENS app |
| registering-your-web3-username | all walkthrough captures | Previous ENS Manager UI generation; steps still correct |
| staking-ether | rocketpool stake UI ×2, Uniswap swap UI ×2 | Pre-Saturn / redesigned UIs; flows unchanged, recapture eventually |

## Glossary candidates — ADJUDICATED (glossary review pass, 2026-08-08)

All candidates resolved; keywords.json updated and newly-covered terms
backticked in lessons (first occurrence per slide only).

**Added, glossary:true** (25): validator, stablecoin, stablecoin issuer,
liquidation, Lightning Network, halving, spot ETF, ETF, slashing (noun; the
"slashed" entry kept but flipped to glossary:false as its variant), blob,
double-spend, onramp, Mainnet, oracle, smart wallet, order book, intent,
solver, validity proof, death spiral, batch auction, private transaction
routing, yield farm, vault, Basenames.

**Added, glossary:false aliases** (4): Ethereum Mainnet (→ Mainnet),
know-your-customer (→ KYC), smart account (→ smart wallet), token approval
(→ token allowance).

**Skipped** (with reason):
- fingerprint — analogy word; "hash" is already defined as a digital fingerprint.
- staking service — redundant with existing "staking providers" entry.
- exit queue, inactivity penalty — staking lessons no longer use the exact
  terms after the rewrites (only paraphrases: "a queue", "small penalty");
  revisit if the terms return.
- intent-based trading — redundant with the new "intent" entry (left
  unbackticked in dex-aggregators/decentralized-exchanges).
- signature approval — niche; covered by "digital signature" + "token approval".
- fiat onramp / token permission — phrasings not used in lessons; covered by
  "onramp" / "token approval".
- filler (dex-aggregators quiz feedback) — protocol-specific synonym of "solver".

Also settled: `transaction finality` flipped to glossary:false ("finality" is
the canonical glossary entry; both keys remain for tooltips). Plural-variant
keys "validator nodes", "stakers", "intermediaries" flipped to glossary:false
(singular entries already carry keyword_plural, so the glossary page showed
duplicates).

Non-issue verified: `liquidity pools` resolves via the trailing-s fallback to
"liquidity pool" — no entry needed.

## Other

- ethereum-basics FAQ New Scientist link returns 406 to bots (page is live in
  browsers); recheck occasionally.
- bitcoin-basics line 318 keeps one em dash as a quote attribution dash
  ("…" — United Nations): legitimate typography, exempt from rule 13.
- en `public key` glossary definition was corrected (address is *derived from*
  the public key); the 9 translated keyword files still carry the old conflated
  definition until the translation pass regenerates them.
- Deprecated lessons (gitcoin-2.0-essentials, optimism-governance,
  delegating-on-optimism, public-nouns) were intentionally excluded from the
  em-dash sweep, feedback additions, and rewrites — frozen for history.
