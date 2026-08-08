---
TITLE: DEX Aggregators
DESCRIPTION: Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.
LANGUAGE: English
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
FORMAT: LESSON
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

---

# Introduction

`Decentralized Exchanges` (DEXs) eliminate the costs of intermediaries and save Explorers money when trading assets.

But did you know, Explorer, that there’s more ways to save with DeFi technology? Using `DEX aggregators`, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route, all in one action. They help you get the best deal when doing a token `swap`. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.

This lesson will show:

1. How DEXs split liquidity and how that can result in reduced trading rates.
2. How DEX aggregators enable users to view and use multiple DEXs through one interface.
3. Multiple ways a single aggregator interface can save Explorers time and money.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# How Liquidity Affects Prices

The amount of any token that is available to trade on a single market is called a token’s `liquidity`. The amount of liquidity available strongly influences the `price impact` when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact.

You can think of it like a swimming pool; the more water (liquidity) there is, the smaller the _change_ in the water level (price impact) when someone jumps in or leaves. The size of that ‘someone’ (the trade) also affects the _change_ in the water level (price impact).

# An Example of How Liquidity Impacts Prices

Let’s look at an example.

Imagine a token that trades on several DEXs at once. One DEX holds a deep pool with most of the token’s `liquidity`, while another holds a shallow pool with only a small fraction of it.

If an Explorer buys the same amount of the token from each pool, the `price impact` will be higher in the shallow pool. The same trade pulls a much larger percentage of that pool’s total liquidity, so it moves the price more and costs the buyer more.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Fill in the blanks: To find the best price, people will want to trade in markets with ________ liquidity to have ________ price impact on their trades.

- [ ] good, maximum

> ℹ️ Try again! A maximum price impact means the trade costs more, not less.

- [x] high, low

> ℹ️ Correct! More liquidity means a smaller price impact, like a bigger pool of water changing less when someone jumps in.

- [ ] low, good

> ℹ️ Try again! Low liquidity increases price impact and makes trades more expensive.

- [ ] thin, large

> ℹ️ Try again! Thin liquidity causes a large price impact, which is exactly what traders want to avoid.

# Shortcomings of Traditional DEXs: Thin Liquidity

DeFi continues to grow, but a problem is emerging for users: As more DEXs launch, the total amount of any individual token gets spread out. This is known as thin liquidity.

Remember the swimming pool: if the available water (`liquidity`) is split between multiple pools, the amount of water will be “thinner” in each pool compared to the total in the single original pool.

In DeFi’s early days, one or two DEXs held most of the liquidity. In 2020, new DEXs began competing for it; one rival pulled over $1B of liquidity away from Uniswap within weeks of launching. Today, liquidity is spread across hundreds of DEXs on many blockchains and `Layer 2` networks, thinning each individual pool.

Thus, any trade has a larger `price impact` than when a single DEX held most of the ecosystem’s liquidity. Without new innovations, it costs Explorers more to trade on any single DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Which two factors determine the price impact of a DEX trade?

- [ ] The choice of DEX used to make the trade and size of the trade

> ℹ️ Try again! The DEX itself doesn’t matter. It’s the liquidity available in the pool that counts.

- [ ] Which token is chosen to trade and which DEX is used to make the trade

> ℹ️ Try again! Neither the token nor the DEX brand determines price impact. Liquidity and trade size do.

- [x] The size of the trade and amount of liquidity available

> ℹ️ Correct! Like a swimming pool, the size of the splash depends on how big the jumper is and how much water is in the pool.

- [ ] The amount of liquidity available and which token is chosen to trade

> ℹ️ Try again! Liquidity is one factor, but the other is the size of the trade, not the token chosen.

# Recombining Liquidity With DEX Aggregators

Large amounts of `liquidity` are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.

DEX aggregators can even route trades through an `intermediary token` , or more than one, if that gets a better result for users, like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal `trade route` is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Trade routing in DEX aggregators means:

- [ ] Trades are routed via special arrangements with specific DEXs

> ℹ️ Try again! Aggregators search all available DEXs algorithmically, not through special arrangements.

- [ ] Trades are always routed through multiple DEXs

> ℹ️ Try again! Aggregators split trades only when it gets a better result. A single DEX may sometimes offer the best route.

- [ ] Trades are routed through a user’s favorite DEX only

> ℹ️ Try again! Sticking to one DEX would defeat the purpose. Aggregators search across many DEXs for the best price.

- [x] Trades can be routed through multiple DEXs and intermediary tokens

> ℹ️ Correct! Algorithms search all possible paths, including extra “stops” through intermediary tokens, to find the cheapest trade route.

# How Gas Cost Is Calculated on Ethereum

Let’s refresh how gas is calculated before seeing how DEX aggregators reduce network fees. These savings matter most on Ethereum Mainnet, where fees can be high; on `Layer 2` networks, fees are usually just cents.

Just like gas for a car, `gas` is the fuel for running blockchain code on Ethereum. The more computations you do, the more gas your code requires. Gas price is measured in very small amounts of Ether called `gwei`, like cents to a dollar. 1 gwei is 1 billionth of an ether (1 gwei = 0.000000001 ETH).

Total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use. The formula for calculating the price of a transaction is as follows:
_Amount of gas used * Gas price = Total gas cost_

As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120-thousand units:
_120,000 * 22 gwei = 2,640,000 gwei_ _**or**_ _0.00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# How Aggregators Reduce Gas Costs for Users

Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including `gas` costs, to find `trade routes` that leave Explorers with the most value at the end of the interaction.

Some aggregators go even further. 1inch, which pioneered DEX aggregation, now also lets professional fillers compete to execute your trade and pay the gas themselves (a system called Fusion). The user often pays no gas at all.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Which of the following is NOT a way DEX aggregators try to reduce transaction costs for users?

- [ ] Simulate transactions off-chain prior to trade execution

> ℹ️ Try again! Aggregators do simulate trades off-chain, including gas costs, to find the best route.

- [x] Ask DEXs to lower network fees for their users

> ℹ️ Correct! Network fees are set by the blockchain, not by DEXs. No one can simply ask for them to be lowered.

- [ ] Account for gas cost in trade routing

> ℹ️ Try again! Advanced aggregators do include transaction fees in their trade route calculations.

- [ ] Let professional fillers execute trades and pay the gas

> ℹ️ Try again! In intent systems like 1inch Fusion, fillers do cover the gas for users.

# Meta-Aggregators

There are even meta-aggregators of DEX aggregators! These platforms search through competing DEX aggregators and serve the best price quotes to users. For example, the built-in swap feature in wallets like MetaMask gathers quotes from multiple providers, including DEX aggregators like 1inch, and adds its own service fee on top.

Note: While convenient, `meta-aggregator` services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-aggregators cross-reference multiple DEX aggregators to find the best prices for their users.

- [x] True

> ℹ️ Correct! Meta-aggregators search through competing DEX aggregators and serve the best price quotes to users.

- [ ] False

> ℹ️ Try again! Searching across multiple DEX aggregators is exactly what meta-aggregators do.

# Avoiding Sandwich Attacks

Users swapping directly through `DEXs` can lose value up to the limit of their `slippage tolerance` when bots place trades right before and after theirs to move the price. These losses are called `sandwich attacks`; in 2021 alone, they cost users around $235,000,000. Today, protections like `private transaction routing` and intent-based trading shield most everyday trades, but it still pays to keep a low slippage tolerance when swapping tokens.

Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

To protect yourself, you should keep your slippage tolerance:

- [x] low

> ℹ️ Correct! A low slippage tolerance limits how much value a sandwich attack can extract from your trade.

- [ ] high

> ℹ️ Try again! A high slippage tolerance lets sandwich attacks take more value from your trade.

# More Protection From Sandwiches: OTC Trades

Some aggregators like 1inch even offer specialized `OTC` (`Over The Counter`) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than routing through DeFi `liquidity pools`, giving Explorers another great way to save.

CoW Swap takes a different approach: users sign a trade request (an `intent`), and professional `solvers` compete in `batch auctions` to fill it at the best price. Solvers can even match two users directly, so trades are protected from sandwich attacks by default.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Many DEX aggregators offer which tool(s) to save their users money?

- [ ] Routing trades through liquidity from multiple DEXs.

> ℹ️ Try again! Aggregated liquidity reduces price impact, but it isn’t the only way aggregators save users money.

- [ ] OTC trades that fully protect against sandwich attacks.

> ℹ️ Try again! This is one way aggregators save users money, but it isn’t the only one.

- [ ] Account for gas cost when building the best trade routes.

> ℹ️ Try again! This is one way aggregators save users money, but it isn’t the only one.

- [x] All of the above

> ℹ️ Correct! Aggregators combine liquidity, factor in gas costs, and can offer OTC trades, all to leave users with more value.
