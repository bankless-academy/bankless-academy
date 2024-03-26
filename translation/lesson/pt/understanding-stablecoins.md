---
TITLE: Understanding Stablecoins
DESCRIPTION: Use dollars, euros, and more on the blockchain.
LANGUAGE: English
WRITERS: Tetranome
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/understanding-stablecoins
FORMAT: HANDBOOK
---

```
__________________________________________________________________________________________________________________________________________________________

$$$$$$$\                      $$\       $$\                                      $$$$$$\                           $$\                                   
$$  __$$\                     $$ |      $$ |                                    $$  __$$\                          $$ |                                  
$$ |  $$ | $$$$$$\  $$$$$$$\  $$ |  $$\ $$ | $$$$$$\   $$$$$$$\  $$$$$$$\       $$ /  $$ | $$$$$$$\ $$$$$$\   $$$$$$$ | $$$$$$\  $$$$$$\$$$$\  $$\   $$\ 
$$$$$$$\ | \____$$\ $$  __$$\ $$ | $$  |$$ |$$  __$$\ $$  _____|$$  _____|      $$$$$$$$ |$$  _____|\____$$\ $$  __$$ |$$  __$$\ $$  _$$  _$$\ $$ |  $$ |
$$  __$$\  $$$$$$$ |$$ |  $$ |$$$$$$  / $$ |$$$$$$$$ |\$$$$$$\  \$$$$$$\        $$  __$$ |$$ /      $$$$$$$ |$$ /  $$ |$$$$$$$$ |$$ / $$ / $$ |$$ |  $$ |
$$ |  $$ |$$  __$$ |$$ |  $$ |$$  _$$<  $$ |$$   ____| \____$$\  \____$$\       $$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$   ____|$$ | $$ | $$ |$$ |  $$ |
$$$$$$$  |\$$$$$$$ |$$ |  $$ |$$ | \$$\ $$ |\$$$$$$$\ $$$$$$$  |$$$$$$$  |      $$ |  $$ |\$$$$$$$\\$$$$$$$ |\$$$$$$$ |\$$$$$$$\ $$ | $$ | $$ |\$$$$$$$ |
\_______/  \_______|\__|  \__|\__|  \__|\__| \_______|\_______/ \_______/       \__|  \__| \_______|\_______| \_______| \_______|\__| \__| \__| \____$$ |
                                                                                                                                               $$\   $$ |
PORTABLE LESSON DATADISK COLLECTION                                                                                                            \$$$$$$  |
                                                                                                                                                \______/
__________________________________________________________________________________________________________________________________________________________
```

***

## Key Takeaways

> - Stablecoins are the blockchain equivalent of fiat currency, like the dollar or euro.
>
> - Stablecoins are `ERC-20` tokens: they allow DeFi users to quickly move between fiat value, and crypto value, while staying on the blockchain.
>
> - There are several categories of stablecoin, each with their own trade-offs and risk profile.
>
> - Stablecoins can generate more annual interest than holding fiat in a traditional bank.

## Why Hold Stablecoins?

Stablecoins have become a cornerstone of the DeFi ecosystem, reaching over $140 billion USD in supply value at their 2022 peak. Stablecoins settled over $7 trillion in transaction value that year — that’s \~0.3% of global USD settlement in 2022.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Here’s why they’re in demand:

- **Stability:** Holding stablecoins in your self-custody wallet is like holding fiat currency, but on the blockchain. When holding a stablecoin like Circle’s U.S. dollar (USDC), you can expect it to maintain 1:1 value with the U.S. dollar while the prices of assets like ether and bitcoin fluctuate.

- **Flexibility:** Because this pegged value exists as an ERC-20 token on the blockchain, it’s easy to move between fiat value and crypto value.

- **Access:** Stablecoins provide access to a range of decentralized financial services, like permissionless borrowing or lending to earn interest.

- **Security:** Cryptography makes it extremely difficult for attackers to capture or forge transactions.

The way a stablecoin maintains a 1:1 equivalence, or `peg`, to its fiat counterpart is its most important property. Just as fiat currency is only worth the fundamentals that underlie it, a stablecoin peg mechanism dictates the value of your holdings.

## Stablecoin Categories

There are three common strategies for a stablecoin to maintain its price peg:

- 💵 **Fiat-backed:** 1:1 collateralized by real-world fiat reserves.

- 🔗 **Crypto-collateralized:** overcollateralized by crypto deposits into DeFi protocols.

- 🔃 **Algorithmic:** fixed supply/demand algorithms that maintain price stability.

### 1. Fiat-backed Stablecoins

Fiat-backed stablecoins maintain value by issuing a fixed token supply matched by real-world currency reserves. Their on-chain price is maintained via supply/demand economics: few people want to pay more than one real-world dollar for a dollar of on-chain value, so they simply take their trade elsewhere. To meet increased demand, the stablecoin issuer locks up additional fiat and increases the token supply by the same amount.

Notable fiat-backed stablecoins include Tether (USDT) and Circle (USDC).

Stablecoin issuers generate revenue through various methods. These methods include investing a portion of their fiat reserves in short-term US Treasuries and cash equivalents, as well as employing a mixed revenue model that involves collecting transaction fees and offering lending services.

> **Innovation & Philanthropy through Fiat-Backed Stablecoins: Glo Dollar**
>
> The Glo Foundation has introduced an innovative approach when it comes to revenue generation through the creation of [Glo Dollar](https://www.glodollar.org/) (USDGLO), its US dollar-backed stablecoin. Glo Dollar sets itself apart from other stablecoins by directing the interest earned from its reserves towards basic income programs for people in extreme poverty.
>
> Holders of USDGLO contribute to this mission by practicing embedded philanthropy. Learn more about Glo Dollar and how it works, [here](https://www.glodollar.org/articles/how-glo-works).

Considerations when using fiat-backed stablecoins:

- **Collateral Audits:** Holders need assurance that their stablecoin tokens are matched one-to-one by fiat reserves. Ideally the provider is open to regular audits by independent parties. USDT has historically made it difficult to know the total value of their locked assets. USDC regularly undergoes independent audits, increasing certainty that their reserves equal their token issuance.

- **Censorship Risk:** With both USDC and USDT subject to government investigation, these tokens’ `smart contracts` include a freeze function whereby a user’s on-chain holdings can be locked in cases of disagreeable activity. This freeze function also applies to tokens held in `non-custodial wallets`.

The high degree of centralization in the fiat-backed stablecoin sector leaves great room for improvement in holding fiat-pegged value in a crypto-native way.

### 2. Crypto-collateralized Stablecoins

Crypto-collateralized stablecoins are a more transparent, decentralized option — and these qualities help eliminate certain risks. They maintain a fiat peg through crypto asset reserves. As crypto market volatility influences the total value of these reserves, these stablecoins are overcollateralized — sometimes up to 200%! All collateralized assets are viewable on chain, giving users 24/7 access to the real composition of their stablecoins.

The most notable example in this category is MakerDAO’s Dai (DAI).

![DAI collateralization breakdown (June 2023) Source: https://makerburn.com/#/rundown](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Considerations:

- **Collateral Valuation:** A stablecoin’s reserves typically consist of crypto, other stablecoins, and even other asset classes. For example, DAI is backed by BTC, ETH, stablecoins, real world assets, and several other minor components. To mitigate the risks of this diverse range of assets, DAI is overcollateralized (at the time of writing). Even if the ETH price was to crash by 20%, DAI would still have [enough collateral](https://daistats.com/) to cover their token. However, further price volatility across its range of assets could begin to erode the peg.

- `Counterparty Risk`: Reliance on multiple asset classes means there’s a higher chance one of the assets will experience difficulty and affect the value of your holdings. However, you only have fractional exposure to the impact of each individual risk.

- **Governance Risk:** This type of stablecoin and its treasury are managed by a decentralized group of governance voters. This means there are risks of human error, or possible governance capture.

### 3. Algorithmic Stablecoins

These tokens maintain their peg by automatically balancing their own supply. An onchain algorithm reduces the number of tokens in circulation when the market price falls below the peg, and injects new tokens when the market price surpasses the peg. Both the balancing algorithm and the stablecoin's smart contracts are public, meaning anyone can clone and improve, or audit the existing system.

As algorithmic stablecoins have the fewest external dependencies, and no administration or governance demands, they almost entirely eliminate counterparty risk. This makes them the most decentralized and self-custody-ready stablecoin option.

Notable examples include Liquity (LUSD) and Frax (FRAX).

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Considerations:

- **Dynamic Holdings:** With the balancing algorithm adjusting token supply, your number of tokens held will fluctuate with supply adjustments. The total value of your token holdings remains constant — you aren’t losing or gaining any value — but this aspect can be confusing for new users.

- **Highly Technical:** You need to understand the technology to build confidence and risk/reward awareness.

- **Emergent Tech Risk:** With algorithmic stablecoins being so new, unknown smart contract risks could be present. Only use algorithmic stablecoins with several smart contract audits, performed by top-level auditors.

## Choosing a Stablecoin

What is the best stablecoin to hold? As with everything DeFi, the answer to that question depends on your **needs**, **values**, and **risk tolerance**.

Here’s a quick refresher on each category:

- 💵 **Fiat-backed:** The traditional approach — the closest you’ll come to holding fiat on chain.

  - Values: Conventionality, institutional trust.

  - Risks: Opaque collateral backing, ability for provider to freeze funds.

- 🔗 **Crypto-collateralized:** A balanced, crypto-native approach, spreading collateral risk across multiple asset classes.

  - Values: Diversification, transparency, progression.

  - Risks: Crypto market volatility, dependence on other assets.

- 🔃 **Algorithmic:** The decentralized — but experimental — option that minimizes counterparty risk.

  - Values: Self-sovereignty, transparency, progression.

  - Higher risk of smart contract bugs.

As always, the best way to learn about something is to try it. You might even decide to hold a variety of stablecoins.

And remember, not all stablecoins in each category are created equal! Do your own research before interacting with any new token.

***

We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Understanding Stablecoins’.

Don’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!

***

## Frequently Asked Questions

### What are the most popular stablecoins?

Looking at the leading stablecoins by `market cap` gives an idea of the current market preference, but this isn’t guidance on how you should position yourself, or how safe that position would be.

Here’s a realtime list of top stablecoins by market cap: https\://defillama.com/stablecoins

Cryptocurrency users often refer to the ‘Lindy Effect’ when choosing investment options. This concept says that the longer something has existed, the more we can expect it will continue to exist. Ten years of cryptocurrency history have shown this to only be true on occasion.

### Where can I buy stablecoins?

Centralized Exchanges (CEXs) offer popular fiat-backed stablecoins (and typically their own branded stablecoin), other types of stablecoin are often missing.

Visit a Decentralized Exchange (DEX), or use a direct wallet on-ramp service like ‘MetaMask Buy’, to acquire crypto-collateralized and algorithmic tokens. Check out our lesson on [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) to learn more about peer-2-peer marketplaces.

### How can I earn interest on stablecoins?

Some CEXs offer yield by just holding stablecoins on their platform, funded by a share of platform profits to incentivize platform use.

You can also earn interest in DeFi, with trustless lending and borrowing platforms. These platforms connect lenders and borrowers, managing risk through onchain collateral and smart contracts. Stablecoin lenders can earn annual returns far higher than available in the traditional banking sector — but where there’s reward, there’s risk!

The lending and borrowing topic deserves its own Bankless Academy entry. If you’re already interested in learning more you can research platforms like [Aave.com](https://aave.com/) and [Curve.fi](https://curve.fi/).

### What happens if a stablecoin loses its peg?

The price of any stablecoin can shift slightly (usually around the +/- 2% mark) in peak network hours. This effect is usually temporary, with prices quickly stabilized by traders taking advantage of arbitrage opportunities.

However, there are cases where a stablecoin loses its peg beyond safe, temporary ranges. This effect isn’t necessarily permanent (USDC, March 2023) — but it can be (Terra, May 2022).

Some fiat-backed stablecoin issuers, like USDC, offer 1:1 redemption from their stablecoin to regular fiat through their website. Whether this remains true during times of crisis is another story.

***

**Author**

**[Tetranome](https://twitter.com/tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, UI, design, and platform curriculum.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.

**Patron**

This unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!
