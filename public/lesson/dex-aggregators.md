
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
                                                                                                                                               \$$$$$$  |
                                                                                                                                                \______/ 
__________________________________________________________________________________________________________________________________________________________
PORTABLE LESSON DATADISK™ COLLECTION
---
LESSON TITLE: DEX AGGREGATORS
DATA LOCATION: https://app.banklessacademy.com/lessons/dex-aggregators.md
PROTOCOL VERSION: 0.001
LAST UPDATED: 30/05/2023
__________________________________________________________________________________________________________________________________________________________

   << LESSON START >>


# **Introduction**


`Decentralized Exchange`s (DEXs) eliminate the costs of intermediaries and save Explorers money when trading assets. 


But did you know, Explorer, that there’s more ways to save with DeFi technology? Using `DEX aggregators`, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route — all in one action. They help you get the best deal when doing a token `swap`. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.


This lesson will show:

1. How DEXs split liquidity and how that can result in reduced trading rates.
2. How DEX aggregators enable users to view and use multiple DEXs through one interface.
3. Multiple ways a single aggregator interface can save Explorers time and money.

![001_introduction.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/181783e5-4ec4-46f8-abcf-854977ec461c/001_introduction.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=be7a5dc31564c90f20e14918ed281ccf4b4cb098f0a229ecd19f8856961f7ba4&X-Amz-SignedHeaders=host&x-id=GetObject)


# How Liquidity Affects Prices


The amount of any token that is available to trade on a single market is called a token’s `liquidity`. The amount of liquidity available strongly influences the `price impact` when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact. 


You can think of it like a swimming pool; the more water (liquidity) there is, the smaller the _change_ in the water level (price impact) when someone jumps in or leaves. The size of that ‘someone’ (the trade) also affects the _change_ in the water level (price impact).


# An Example of How Liquidity Impacts Prices


Let’s look at an example. 


The BanklessDAO token (BANK) has a liquidity amount of ~30 million BANK on Uniswap, but only ~4.5 million BANK on SushiSwap. Uniswap has over 6x the BANK liquidity of SushiSwap.


If an Explorer was to purchase 10,000 BANK from each pool, they would find that the `price impact` of their trade would result in a higher trade price in the SushiSwap pool — because their trade has pulled a larger percentage of the pool’s total liquidity.


![002_liquidity.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c8308ac3-23d6-406b-9c91-6e43b2afc35f/002_liquidity.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=69863c4fbea0e9d5fb6cc8c2975d71c36285aa691cb890c7a804efaba005e098&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Question


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


![003_thinLiquidity.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a411c249-d4a7-4d5a-9629-21496cae6d61/003_thinLiquidity.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=8d928b4483fbc7fe6115976c4ded554f664622fa5edebc0effbe7b705f9a8e75&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Question


Which two factors determine the price impact of a DEX trade?

- [ ] The choice of  DEX is used to make the trade and size of the trade
- [ ] Which token is chosen to trade and which DEX is used to make the trade
- [ ] The size of the trade and amount of liquidity available
- [ ] The amount of liquidity available and which token is chosen to trade

# Recombining Liquidity With DEX Aggregators


Large amounts of `liquidity` are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.


DEX aggregators can even route trades through an `intermediary token` , or more than one, if that gets a better result for users — like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal `trade route` is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.


![004_recombiningLiquidity.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1a5a40b5-f9af-4f07-949b-78d18132b2a6/004_recombiningLiquidity.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=386031783288b9c94112b9fbc7deffbba4813a26bc53670b33e5e56fa4721447&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Question


Trade routing in DEX aggregators means:

- [ ] Trades are routed according to liquidity arrangements with specific DEXs
- [ ] Trades are always routed through multiple DEXs
- [ ] Trades are routed through a user’s favorite DEX only
- [ ] Trades can be routed through multiple DEXs and intermediary tokens

# How Gas Cost Is Calculated on Ethereum


Let’s refresh how gas is calculated before we go on to see how the optimizations DEX aggregators make can reduce network fees for users.


Just like gas for a car, `gas` is the fuel for running blockchain code on Ethereum. The farther you travel, the more gas your car uses. Likewise, the more computations you do, the more gas your code requires. Gas price is measured in very small amounts of Ether called `gwei`, like cents to a dollar. 1 gwei is 1 billionth of an ether (1 gwei = 0.00000001 ETH). 


Total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use. The formula for calculating the price of a transaction is as follows:
_Amount of gas used * Gas price = Total gas cost_


As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120-thousand units:
_120,000 * 22 gwei = 2,640,000 gwei_ _**or**_ _0.00264 ETH_


![005_gas.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4242c94b-7d08-454f-a468-ace6798c744e/005_gas.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=cecf94c29375ee306f3e60e9a9a901bf321edcfb6594a246c9b8ccaba1e203ae&X-Amz-SignedHeaders=host&x-id=GetObject)


# How Aggregators Reduce Gas Costs for Users


Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including `gas` costs, to find `trade routes` that leave Explorers with the most value at the end of the interaction.


Some aggregators go even further: they may refund some of the network transaction fees from using their protocol. 1inch currently offers rebates in their token for a portion of gas costs from trading through their `dApp` on Ethereum mainnet.


![006_tradeRoutes.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0beecb5e-1493-4332-8cc0-26238fd5d84e/006_tradeRoutes.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=705c0fd859a8ad18efc4cab5ebe6bba5642fce859f47b39024bab33b50cc066b&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Question


Which of the following is NOT a way DEX aggregators try to reduce transaction costs for users?

- [ ] Simulate transactions off-chain prior to trade execution
- [ ] Ask DEXs to lower network fees for their users
- [ ] Account for gas cost in trade routing
- [ ] Token rebates on gas costs

# Meta-Aggregators


There are even meta-aggregators of DEX aggregators! These platforms search through all competing DEX aggregators and serve price quotes to users. An example of this is the in-app swap function in the MetaMask wallet. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.


Note: While convenient, `meta-aggregator` services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended. 


![009_metaaggregators.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/03db243d-6bd5-4e9c-85fb-7d5f3f77a73d/009_metaaggregators.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=5e5694d9404d2240dccf3321984fc5c67cc3c6e14a685a480ac4f8466976aa80&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Question


Meta-aggregators cross-reference multiple DEX aggregators to find the best prices for their users.

- [ ] True
- [ ] False

# Avoiding Sandwich Attacks


Users swapping directly through `DEXs` can lose value up to the limit of their `slippage tolerance` due to price changes coordinated by block producers — these kinds of losses are called `sandwich attacks`. Did you know that sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.


Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.


![007_sandwichAttacks.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/53542ba2-9d20-42c7-93fa-9776983348ef/007_sandwichAttacks.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=e8e3e1d52352382523dff306eea53571ddb4f0f87d2cdb97f9d35d1ecb45ec8a&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Question


To protect yourself, you should keep your slippage tolerance:

- [ ] low
- [ ] high

# More Protection From Sandwiches: OTC Trades


Some aggregators like 1inch even offer specialized `OTC` (`Over The Counter`) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than facilitating trades through DeFi `liquidity pools`. Anyone can engage in `OTC` trades to fully remove the threat of sandwich attacks — providing another great way for Explorers to save.


CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.


![008_otc.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bed9f3a8-26e1-49ca-9301-0f5685f3e822/008_otc.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191649Z&X-Amz-Expires=3600&X-Amz-Signature=775c762b773bafaf066994b16615fd5def39003b48089497657dc922c09546db&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Question


Many DEX aggregators offer which tool(s) to save their users money?

- [ ] Routing trades through aggregated liquidity from multiple DEXs to reduce price impact.
- [ ] OTC trades that fully protect against sandwich attacks.
- [ ] Account for gas cost when building the best trade routes.
- [ ] All of the above
