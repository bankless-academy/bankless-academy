---
TITLE: Layer 2 Blockchains
DESCRIPTION: Join the Layer 2 ecosystem to boost your transaction speed & reduce fees.
LANGUAGE: English
WRITERS: HiroKennelly, Tetranome
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
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

***

# Introduction

The desired operational state for any blockchain is to be as decentralized, secure, and scalable as possible. Building a blockchain that handles all three aspects well has proven to be a challenge, as yet unsolved. This challenge has been given a name: the `Blockchain Trilemma`.

Bitcoin and Ethereum are both fairly decentralized and secure, but they don’t scale well, as is evident from the high transaction fees and long transaction queues when the network is busy. To circumvent these issues, Explorers can make use of various technologies which drastically reduce transaction costs and increase transaction speed. These are collectively known as Layer 2 (L2) scaling solutions.

The Lightning Network is Bitcoin’s best-known scaling solution, and it relies on a technology called `payment channels` to scale payments between parties. Ethereum has plans to eventually ease the Blockchain Trilemma through the use of sharding technology, but for the immediate future the network is relying on various L2 solutions to improve scalability.

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Payment Channels

On the Bitcoin blockchain, the Lightning Network relies on bidirectional payment channels, which enables multiple parties to exchange BTC without transacting on the main chain.

The architecture enables parties to open payment channels amongst two or more users. Between the opening and closing of a channel, parties can shift funds among themselves. Each participant’s micro-ledger entry is updated after both users sign for the transaction — which requires both users to be online.
A channel can be closed at any time by either party broadcasting the most recent version of the micro-ledger to the blockchain.

Payment channels don’t support advanced `smart contract` interactions, only basic peer-to-peer transactions.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

You must be online to transact using the Bitcoin Lightning Network.

- [ ] True
- [ ] False

# Ethereum Scaling Solutions

Ethereum developers have been working on Ethereum-native scaling solutions for nearly as long as that network has been live.

Most Ethereum community members argue that in order to be an “Ethereum scaling solution”, a project must address Ethereum’s `scalability` shortcomings without sacrificing `security` or `decentralization`. For users, the most practical needs are faster transactions and cheaper `gas` than Ethereum Mainnet. To compete, some scaling solutions are willing to make greater trade-offs on the Trilemma than others.

Ethereum is defined by its smart contract capabilities, so it is also important that its scaling solutions inherit this support. There’s no use having fast, cheap transactions if users can’t access their favorite `dApps` from a Layer 2.

# Knowledge Check 2

Ethereum scaling solutions:

- [ ] use payment channels to scale the network.
- [ ] can’t support smart contract interactions.
- [ ] should increase scalability without compromising on other trilemma attributes.
- [ ] allow faster transaction speeds at the cost of higher gas.

# Bridging Layer 1 and Layer 2

As we learned in [Blockchain Basics](https://app.banklessacademy.com/lessons/blockchain-basics), blockchains are databases known as `ledgers`, that record a cryptographically secured, chronological list of transactions. L1 blockchains and L2 scaling solutions are each blockchains in their own right, with their own databases of addresses and data.

Infrastructure called `bridges` is used to transfer information between different blockchain databases. For example, if you think of the Ethereum Mainnet (or any other `L1` blockchain) as one island, and a different blockchain or your preferred scaling solution as another, a crypto bridge is the generic term for the networked highway connecting these two digital islands.

The technology is very complex, but from the end user perspective this process is as simple as choosing a destination.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechains

A `sidechain` is a separate blockchain that runs independently to Ethereum — but is connected to Ethereum Mainnet by a `bridge` that maintains a two-way peg. This means that to migrate native tokens to the sidechain, you have to lock them in a bridge contract on Ethereum Mainnet, so that the balance on the sidechain never exceeds the collateral locked on Mainnet. Such bridges extend the security of Ethereum to capital on the sidechain, while allowing them to validate and process their own transactions.

Sidechains are still subject to the Blockchain Trilemma. Their lower `gas` fees and increased transaction speed can be attributed to a smaller but more powerful validator set — meaning they trade some decentralization and security for scalability.

Sidechains, like Polygon PoS, regularly publish snapshots to the L1, saving a moment-in-time status of their ledger. Snapshots enable sidechains to roll the chain state back to a previous snapshot in the case of on-chain fraud or error.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechains:

- [ ] hold collateral on Mainnet.
- [ ] have cheaper gas fees than Mainnet.
- [ ] have greater centralization risks than Mainnet.
- [ ] All the above.

# Rollups

Layer 2 protocols that use Rollup technology maintain closer alignment with the security level of Ethereum Mainnet.

Like sidechains, Rollups permit on-chain transactions to execute away from Ethereum Mainnet. These transactions are then ‘rolled up’ into a single transaction before being sent to Ethereum.

In order for the Rollup to prove itself secure enough to process transactions on behalf of Mainnet, it must provide “convincing evidence” that the transactions in each submitted batch are secure and valid. This evidence is included in the transaction rollup and verified by the bridge contract on Ethereum Mainnet.

There are currently two Rollup methods that can provide this evidence: `Optimistic Rollups`, and `ZK Rollups`. Let’s take a closer look at these two processes.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic Rollups

L2 protocols like Optimism, Base and Arbitrum, all use `Optimistic Rollups` as their scaling solution architecture. Optimistic Rollups are so-called because the information in the Rollup batch is considered to be valid unless proven otherwise — an optimistic assumption is made.

To mitigate against any abuse of this technique, there is typically a multi-day delay once a user requests to move funds off of the L2 back to Mainnet. During this time, bridge validators can publish a `fraud proof` seeking to cancel the withdrawal. This fraud-proof mechanism is similar to the banking industry’s clearance processes, but is decentralized.

Note: Third-party bridging services, like Across and Hop, help users bridge funds in mere minutes rather than days, but these solutions come with an increased risk of attack compared to protocol-native bridges due to differing fraud-proof processes.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

With Optimistic Rollups, transactions are considered valid until proven otherwise.

- [ ] True
- [ ] False

# ZK Rollups

`ZK Rollups` are a type of Rollup that relies on Zero-Knowledge technology. Unlike `Optimistic Rollups`, ZK Rollups confirm the legitimacy of the batched transactions almost immediately, without reliance on certain users to look for evidence of fraud. Instead, these Rollups confirm transactions using complex, computation-heavy mathematical models.

The major upside to ZK Rollups is the `settlement time`, also known as `transaction finality`. Rather than a multi-day settlement period, ZK Rollups enable users to access their funds in under an hour. User privacy is also improved because only the mathematical proof is stored on Mainnet.

There are some major protocols using ZK Rollup technology to build their Ethereum scaling solutions, including zkSync, StarkNet, and Aztec. It’s still early in terms of development, but has great future potential.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Compared to Optimistic Rollups, ZK Rollups:

- [ ] post more user data to Mainnet.
- [ ] offer greater privacy and enable faster transaction finality on Mainnet.
- [ ] perform fewer computations to finalize a transaction.

# Cross-chain dApp Compatibility

When comparing `Optimistic Rollups` and `ZK Rollups`, the main focus for most users is withdrawal times. However, since these withdrawal-lag issues can be resolved by third-party bridges, it shouldn’t be a major consideration when deciding which scaling solution to explore.

Many Optimistic Rollups are “EVM equivalent”, meaning the L2 natively supports any dApp that can run on the `Ethereum Virtual Machine` (EVM). EVM equivalence enables deployment of any smart contracts previously deployed on Mainnet - thus allowing L2 users to access their favorite dApps.

Sidechains and ZK Rollups are not yet fully EVM equivalent. For now this limits the dApp ecosystems of such networks, but also allows for greater experimentation and discovery of new ways to layer dApp experiences on top of Ethereum.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

EVM equivalent scaling solutions are able to easily reuse smart contracts deployed on Mainnet.

- [ ] True
- [ ] False

# Lesson Recap

L1 blockchains like Bitcoin and Ethereum are currently constrained by the `Blockchain Trilemma`. `Payment channels` on the Bitcoin network, or sidechains and Rollups on Ethereum, help these networks to scale and ease the Trilemma.

`Bridges` connect L1 blockchains with `sidechains` and `Rollups`, and the way in which the bridge contract functions influences the properties of the connected network.

Sidechain funds inherit the `security` of Ethereum via a two-way peg, but the network validates and processes its own transactions. These chains have a small but powerful validator set that allows them to increase transaction speed and lower gas fees, at the cost of decentralization.

Rollups, like sidechains, also validate and process their own transactions, but their bridge contract requires them to provide “convincing evidence” of transaction validity before the data is considered valid. This allows them to uphold a level of `security` and `decentralization` in alignment with Ethereum values. There are two methods for providing this “convincing evidence”: Optimistic Rollups and ZK Rollups. `Optimistic Rollups` maintain a multi-day delay before settling their transaction rollups on Mainnet, during which time bridge validators detect and report fraud. `ZK Rollups` provide mathematical assurance of transaction legitimacy, thanks to `Zero-Knowledge` technology.

Presently, Optimistic Rollups offer the greatest level of smart contract compatibility with Ethereum Mainnet, enabling dApps from Ethereum Mainnet to easily deploy on their networks. Many believe ZK Rollups will become the scaling solution of the future, thanks to their high levels of privacy and security.

# Start Your Layer 2 Journey With Optimism 🙂

We believe that Optimism, an EVM-equivalent Optimistic Rollup, is a great L2 for Explorers to begin with. Using dApps on Optimism will feel similar to using L1 dApps, just cheaper and faster — and it uses ETH as gas. Your upcoming quest will serve as the first step in your Optimism journey!

This improved functionality isn’t the only reason Optimism is a great scaling solution for Bankless Explorers. The ecosystem is highly influenced by Ethereum values, with a portion of its transaction fees used to [retroactively fund public good projects](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) adding value to the ecosystem. It’s like a digital country that regularly and transparently funds on-chain infrastructure, such as free education from Bankless Academy, for everyone.

Optimism is not simply a platform that relies on the Optimistic Rollup. The network is a metaphor for the power of blockchain technology to solve existing problems and to show us new ways of transacting and living together. And that should make us all optimistic. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism--54a0f80a.svg)
