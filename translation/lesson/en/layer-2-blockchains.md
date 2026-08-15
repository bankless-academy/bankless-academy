---
TITLE: Layer 2 Blockchains
DESCRIPTION: Join the Layer 2 ecosystem to boost your transaction speed & reduce fees.
LANGUAGE: English
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
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

---

# Introduction

The desired operational state for any blockchain is to be as decentralized, secure, and scalable as possible. Building a blockchain that handles all three aspects well has proven to be a challenge, as yet unsolved. This challenge has been given a name: the `Blockchain Trilemma`.

Bitcoin and Ethereum are both fairly decentralized and secure, but they don’t scale well, as is evident from the high transaction fees and long transaction queues when the network is busy. To circumvent these issues, Explorers can make use of various technologies which drastically reduce transaction costs and increase transaction speed. These are collectively known as Layer 2 (L2) scaling solutions.

The `Lightning Network` is Bitcoin’s best-known scaling solution, and it relies on a technology called `payment channels` to scale payments between parties. Ethereum eases the Blockchain Trilemma by relying on various L2 solutions to handle transactions, supported by cheap, temporary `blob` storage added to Mainnet in 2024 (a light form of the “sharding” once planned).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Payment Channels

On the Bitcoin blockchain, the Lightning Network relies on bidirectional payment channels, which enables multiple parties to exchange BTC without transacting on the main chain.

The architecture enables two users to open a payment channel between themselves. Each channel is strictly two-party, though payments can be routed across a network of connected channels to reach users further away. Between the opening and closing of a channel, parties can shift funds among themselves. Each participant’s micro-ledger entry is updated after both users sign for the transaction, which generally requires both parties’ nodes to be reachable.
A channel can be closed at any time by either party broadcasting the most recent version of the micro-ledger to the blockchain.

Payment channels don’t support advanced `smart contract` interactions, only basic peer-to-peer transactions.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

You must be online to transact using the Bitcoin Lightning Network.

- [x] True

> ℹ️ Correct! Updating a payment channel requires both users to sign, which generally means both parties’ nodes must be reachable.

- [ ] False

> ℹ️ Try again! Channel updates need signatures from both parties, so their nodes generally need to be online.

# Ethereum Scaling Solutions

Ethereum developers have been working on Ethereum-native scaling solutions for nearly as long as that network has been live.

Most Ethereum community members argue that in order to be an “Ethereum scaling solution”, a project must address Ethereum’s `scalability` shortcomings without sacrificing `security` or `decentralization`. For users, the most practical needs are faster transactions and cheaper `gas` than Ethereum Mainnet. To compete, some scaling solutions are willing to make greater trade-offs on the Trilemma than others.

Ethereum is defined by its smart contract capabilities, so it is also important that its scaling solutions inherit this support. There’s no use having fast, cheap transactions if users can’t access their favorite `dApps` from a Layer 2.

# Knowledge Check 2

Ethereum scaling solutions:

- [ ] use payment channels to scale the network.

> ℹ️ Try again! Payment channels are Bitcoin’s Lightning Network approach. Ethereum scales through solutions like Rollups.

- [ ] can’t support smart contract interactions.

> ℹ️ Try again! Smart contract support is essential. Users need access to their favorite dApps from a Layer 2.

- [x] should boost scalability without weakening other trilemma qualities.

> ℹ️ Correct! A true Ethereum scaling solution addresses scalability without sacrificing security or decentralization.

- [ ] allow faster transaction speeds at the cost of higher gas.

> ℹ️ Try again! Scaling solutions aim for both faster transactions AND cheaper gas than Ethereum Mainnet.

# Bridging Layer 1 and Layer 2

As we learned in [Blockchain Basics](https://app.banklessacademy.com/lessons/blockchain-basics), blockchains are databases known as `ledgers`, that record a cryptographically secured, chronological list of transactions. L1 blockchains and L2 scaling solutions are each blockchains in their own right, with their own databases of addresses and data.

Infrastructure called `bridges` is used to transfer information between different blockchain databases. For example, if you think of the Ethereum Mainnet (or any other `L1` blockchain) as one island, and a different blockchain or your preferred scaling solution as another, a crypto bridge is the generic term for the networked highway connecting these two digital islands.

The technology is very complex, but from the end user perspective this process is as simple as choosing a destination.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechains

A `sidechain` is a separate blockchain that runs independently to Ethereum, but is connected to Ethereum Mainnet by a `bridge`. To migrate tokens, you lock them in a bridge contract on Mainnet, and equivalent tokens are minted on the sidechain. Importantly, this does NOT give your funds Ethereum’s security: the bridge and sidechain rely on the sidechain’s own validators. If either is compromised (like the $625M Ronin bridge hack of 2022), the locked funds can be stolen.

Sidechains are still subject to the Blockchain Trilemma. Their lower `gas` fees and faster transactions come from a smaller but more powerful validator set, trading some decentralization and security for scalability.

Sidechains like Polygon PoS regularly publish snapshots (“checkpoints”) to Ethereum. These give their history a form of finality and let users prove balances when exiting the bridge, but they don’t make sidechain funds as secure as Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechains:

- [ ] lock bridged tokens in a contract on Mainnet.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] have cheaper gas fees than Mainnet.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] have greater centralization risks than Mainnet.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All the above.

> ℹ️ Correct! Sidechains lock bridged tokens on Mainnet and offer cheaper fees, but their smaller validator set trades decentralization for that speed.

# Rollups

Layer 2 protocols that use Rollup technology maintain closer alignment with the security level of Ethereum Mainnet.

Like sidechains, Rollups permit on-chain transactions to execute away from Ethereum Mainnet. These transactions are then ‘rolled up’ into a single batch, and the batch data is posted to Ethereum in cheap, temporary data packets called `blobs`, introduced in the Dencun upgrade of March 2024. Blobs are the main reason typical L2 fees have dropped to a few cents or less.

In order for the Rollup to prove itself secure enough to process transactions on behalf of Mainnet, it must provide “convincing evidence” that the transactions in each submitted batch are secure and valid. This evidence is included in the transaction rollup and verified by the bridge contract on Ethereum Mainnet.

There are currently two Rollup methods that can provide this evidence: `Optimistic Rollups`, and `ZK Rollups`. Let’s take a closer look at these two processes.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic Rollups

L2 protocols like Optimism, Base and Arbitrum, all use `Optimistic Rollups` as their scaling solution architecture. Optimistic Rollups are so-called because the information in the Rollup batch is considered to be valid unless proven otherwise: an optimistic assumption is made.

To mitigate against any abuse of this technique, there is typically a multi-day delay once a user requests to move funds off of the L2 back to Mainnet. During this time, bridge validators can publish a `fraud proof` seeking to cancel the withdrawal. This fraud-proof mechanism is similar to the banking industry’s clearance processes, but is decentralized.

Note: Third-party bridging services, like Across and Relay, help users bridge funds in mere minutes rather than days. These fast bridges front you the money from their own pool of funds, so you take on the risk of the bridge’s smart contracts and its fund providers, an added layer of trust compared to the rollup’s own bridge.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

With Optimistic Rollups, transactions are considered valid until proven otherwise.

- [x] True

> ℹ️ Correct! The optimistic assumption is that batches are valid, with a challenge period during which fraud proofs can cancel bad withdrawals.

- [ ] False

> ℹ️ Try again! That optimistic assumption is exactly where these Rollups get their name.

# ZK Rollups

`ZK Rollups` are a type of Rollup that relies on Zero-Knowledge technology. Unlike `Optimistic Rollups`, ZK Rollups confirm the legitimacy of the batched transactions without reliance on certain users to look for evidence of fraud. Instead, these Rollups submit a mathematical proof, known as a `validity proof`, that lets Ethereum check an entire batch is correct without redoing the work.

The major upside to ZK Rollups is the `settlement time`, also known as `transaction finality`. Rather than a multi-day challenge period, ZK Rollups enable users to access their funds on Mainnet typically within a few hours, as soon as the next validity proof is submitted. Despite the name, Zero-Knowledge technology isn’t used here for privacy: transactions on major ZK Rollups are just as public as on Ethereum Mainnet.

There are some major protocols using ZK Rollup technology to build their Ethereum scaling solutions, including ZKsync, Starknet, and Linea. It’s still early in terms of development, but has great future potential.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Compared to Optimistic Rollups, ZK Rollups:

- [ ] keep user transactions private on Mainnet.

> ℹ️ Despite the “Zero-Knowledge” name, major ZK Rollups are just as transparent as Ethereum Mainnet: the proofs are used for validity, not privacy.

- [x] use validity proofs, avoiding a multi-day challenge period.

> ℹ️ Correct! A mathematical validity proof confirms each batch, so finality on Mainnet doesn’t require waiting out a fraud-proof window.

- [ ] rely on watchers to submit fraud proofs during a challenge window.

> ℹ️ That’s how Optimistic Rollups work. ZK Rollups prove validity up front instead.

# Cross-chain dApp Compatibility

When comparing `Optimistic Rollups` and `ZK Rollups`, the main focus for most users is withdrawal times. However, since these withdrawal-lag issues can be resolved by third-party bridges, it shouldn’t be a major consideration when deciding which scaling solution to explore.

Many Optimistic Rollups are “EVM equivalent”, meaning the L2 natively supports any dApp that can run on the `Ethereum Virtual Machine` (EVM). EVM equivalence enables deployment of any smart contracts previously deployed on Mainnet - thus allowing L2 users to access their favorite dApps.

Sidechains like Polygon PoS also run the EVM natively, and most modern ZK Rollups (such as ZKsync, Linea, and Scroll) are also EVM equivalent or very close to it. As a result, your favorite Ethereum dApps are available across most of the L2 ecosystem.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

EVM equivalent scaling solutions are able to easily reuse smart contracts deployed on Mainnet.

- [x] True

> ℹ️ Correct! EVM equivalence means any smart contract that runs on Mainnet can be deployed on the L2, bringing familiar dApps along.

- [ ] False

> ℹ️ Try again! Reusing Mainnet smart contracts is the whole point of EVM equivalence.

# Lesson Recap

L1 blockchains like Bitcoin and Ethereum are currently constrained by the `Blockchain Trilemma`. `Payment channels` on the Bitcoin network, or sidechains and Rollups on Ethereum, help these networks to scale and ease the Trilemma.

`Bridges` connect L1 blockchains with `sidechains` and `Rollups`, and the way in which the bridge contract functions influences the properties of the connected network.

Sidechain funds do not inherit the `security` of Ethereum: bridged tokens are locked in a contract on Mainnet, but their safety depends on the sidechain’s own validators and bridge contract. These chains have a small but powerful validator set that allows them to increase transaction speed and lower gas fees, at the cost of decentralization and security.

Rollups, like sidechains, also validate and process their own transactions, but their bridge contract requires them to provide “convincing evidence” of transaction validity before the data is considered valid. This allows them to uphold a level of `security` and `decentralization` in alignment with Ethereum values. There are two methods for providing this “convincing evidence”: Optimistic Rollups and ZK Rollups. `Optimistic Rollups` maintain a multi-day delay before settling their transaction rollups on Mainnet, during which time bridge validators detect and report fraud. `ZK Rollups` provide mathematical assurance of transaction legitimacy, thanks to `Zero-Knowledge` technology.

Presently, both Optimistic Rollups and modern ZK Rollups offer a high level of smart contract compatibility with Ethereum Mainnet, enabling dApps from Ethereum Mainnet to easily deploy on their networks. Many believe ZK Rollups will become the scaling solution of the future, thanks to their fast finality and strong validity guarantees.

# Start Your Layer 2 Journey With Optimism or Base 🙂

Optimism and Base, both EVM-equivalent Optimistic Rollups, are great L2s for Explorers to begin with. Using dApps on either chain feels similar to L1, just cheaper and faster, and both use ETH as gas. Your upcoming quest is the first step of your journey on Optimism or Base!

Both ecosystems are deeply influenced by Ethereum values, with Optimism known for [funding public goods](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) that add value to the ecosystem, such as free education from Bankless Academy.

Optimism and Base aren’t just platforms relying on Optimistic Rollups: they show how blockchains can solve real problems and open new ways of transacting and coordinating together. And that should make us all optimistic. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
