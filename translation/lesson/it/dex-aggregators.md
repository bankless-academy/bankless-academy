---
TITLE: DEX Aggregators
DESCRIPTION: Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.
LANGUAGE: English
WRITERS: iSpeakNerd
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

But did you know, Explorer, that there’s more ways to save with DeFi technology? Using `DEX aggregators`, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route — all in one action. They help you get the best deal when doing a token `swap`. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.

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

The BanklessDAO token (BANK) has a liquidity amount of ~30 million BANK on Uniswap, but only ~4.5 million BANK on SushiSwap. Uniswap has over 6x the BANK liquidity of SushiSwap.

If an Explorer was to purchase 10,000 BANK from each pool, they would find that the `price impact` of their trade would result in a higher trade price in the SushiSwap pool — because their trade has pulled a larger percentage of the pool’s total liquidity.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Fill in the blanks: To find the best price, people will want to trade in markets with ________ liquidity to have ________ price impact on their trades.

- [ ] good, maximum
- [ ] high, low
- [ ] low, good
- [ ] thin, large

# Shortcomings of Traditional DEXs: Thin Liquidity

DeFi continues to grow, but a problem is emerging for users: As more DEXs launch, the total amount of any individual token gets spread out. This is known as thin liquidity.

Remember the swimming pool: if the available water (`liquidity`) is split between multiple pools, the amount of water will be “thinner” in each pool compared to the total in the single original pool.

In 2020, Uniswap held much of the DEX liquidity to trade in DeFi. When SushiSwap launched the following month, it attracted over $1B worth of liquidity into its DEX from Uniswap, reducing total liquidity on Uniswap. This was just the start. Since then, more and more DEXs have entered the DeFi ecosystem, progressively thinning the liquidity of each pool.

Thus, any trade has a larger `price impact` than when Uniswap held most of the ecosystem’s total liquidity. As more DEXs launch, it costs Explorers more to trade on any single DEX without new innovations.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Which two factors determine the price impact of a DEX trade?

- [ ] The choice of  DEX is used to make the trade and size of the trade
- [ ] Which token is chosen to trade and which DEX is used to make the trade
- [ ] The size of the trade and amount of liquidity available
- [ ] The amount of liquidity available and which token is chosen to trade

# Recombining Liquidity With DEX Aggregators

Large amounts of `liquidity` are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.

DEX aggregators can even route trades through an `intermediary token` , or more than one, if that gets a better result for users — like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal `trade route` is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Trade routing in DEX aggregators means:

- [ ] Trades are routed according to liquidity arrangements with specific DEXs
- [ ] Trades are always routed through multiple DEXs
- [ ] Trades are routed through a user’s favorite DEX only
- [ ] Trades can be routed through multiple DEXs and intermediary tokens

# How Gas Cost Is Calculated on Ethereum

Let’s refresh how gas is calculated before we go on to see how the optimizations DEX aggregators make can reduce network fees for users.

Just like gas for a car, `gas` is the fuel for running blockchain code on Ethereum. The farther you travel, the more gas your car uses. Likewise, the more computations you do, the more gas your code requires. Gas price is measured in very small amounts of Ether called `gwei`, like cents to a dollar. 1 gwei is 1 billionth of an ether (1 gwei = 0.00000001 ETH).

Total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use. The formula for calculating the price of a transaction is as follows:
_Amount of gas used \* Gas price = Total gas cost_

As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120-thousand units:
_120,000 \* 22 gwei = 2,640,000 gwei_ _**or**_ _0.00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# How Aggregators Reduce Gas Costs for Users

Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including `gas` costs, to find `trade routes` that leave Explorers with the most value at the end of the interaction.

Some aggregators go even further: they may refund some of the network transaction fees from using their protocol. 1inch currently offers rebates in their token for a portion of gas costs from trading through their `dApp` on Ethereum mainnet.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Which of the following is NOT a way DEX aggregators try to reduce transaction costs for users?

- [ ] Simulate transactions off-chain prior to trade execution
- [ ] Ask DEXs to lower network fees for their users
- [ ] Account for gas cost in trade routing
- [ ] Token rebates on gas costs

# Meta-Aggregators

There are even meta-aggregators of DEX aggregators! These platforms search through all competing DEX aggregators and serve price quotes to users. An example of this is the in-app swap function in the MetaMask wallet. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.

Note: While convenient, `meta-aggregator` services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-aggregators cross-reference multiple DEX aggregators to find the best prices for their users.

- [ ] True
- [ ] False

# Avoiding Sandwich Attacks

Users swapping directly through `DEXs` can lose value up to the limit of their `slippage tolerance` due to price changes coordinated by block producers — these kinds of losses are called `sandwich attacks`. Did you know that sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.

Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

To protect yourself, you should keep your slippage tolerance:

- [ ] low
- [ ] high

# More Protection From Sandwiches: OTC Trades

Some aggregators like 1inch even offer specialized `OTC` (`Over The Counter`) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than facilitating trades through DeFi `liquidity pools`. Anyone can engage in `OTC` trades to fully remove the threat of sandwich attacks — providing another great way for Explorers to save.

CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Many DEX aggregators offer which tool(s) to save their users money?

- [ ] Routing trades through aggregated liquidity from multiple DEXs to reduce price impact.
- [ ] OTC trades that fully protect against sandwich attacks.
- [ ] Account for gas cost when building the best trade routes.
- [ ] All of the above
