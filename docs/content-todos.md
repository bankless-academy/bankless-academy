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
| swapping-on-a-decentralized-exchange | ~8 walkthrough screenshots | Pre-Aero-merge Velodrome UI; assess during that lesson's rewrite |

## Glossary candidates (feed the end-of-freeze glossary review pass)

Terms lessons wanted to backtick but no `keywords.json` entry exists (suggested
definitions in the wave agents' reports; adjudicate + dedupe at review time):

- validator (wanted by ethereum-basics, layer-1-blockchains, intro-to-defi — only "validator node" exists)
- stablecoin (intro-to-defi; only used unbackticked)
- liquidation (intro-to-defi)
- Lightning Network, halving, spot ETF (bitcoin-basics)
- slashing, blob, double-spend (layer-1-blockchains)
- ETF, staking service, stablecoin issuer (ethereum-basics)
- onramp / fiat onramp, Mainnet / Ethereum Mainnet, yield farm, know-your-customer (funding-a-wallet-on-layer-2)
- validity proof, death spiral (phase 1 rewrites; currently in quotes, not backticks)
- fingerprint (blockchain-basics; optional, analogy word)

Non-issue verified: `liquidity pools` resolves via the trailing-s fallback to
"liquidity pool" — no entry needed.

## Other

- ethereum-basics FAQ New Scientist link returns 406 to bots (page is live in
  browsers); recheck occasionally.
- bitcoin-basics line 318 keeps one em dash as a quote attribution dash
  ("…" — United Nations): legitimate typography, exempt from rule 13.
