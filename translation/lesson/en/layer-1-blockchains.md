---
TITLE: Layer 1 Blockchains
DESCRIPTION: Understand how Layer 1 blockchains work - and learn their limitations!
LANGUAGE: English
WRITERS: iSpeakNerd
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

Problems emerge when more users want to use a `blockchain` network than it can handle. Large demand for `blockspace` can be temporary or can last as long as users continue to have a strong desire to use the blockchain. In times of high demand, users bid against each other to have their transactions processed quickly, and fees rise, pricing out users with less capital.

This lesson explores why Ethereum and other blockchains are subject to the `Blockchain Trilemma`, how the Trilemma is the root cause of the problems described above, and how the Trilemma affects Ethereum’s plans for serving the needs of all its users. We will look at the tradeoffs several blockchains have made concerning the Blockchain Trilemma, and what those tradeoffs mean for Academy Explorers.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Blockchain Trilemma

As implied by the word _**tri**_lemma, there are three qualities of blockchains that compete with each other and prevent optimizing for all three at once. 

These are: `Security`, `Scalability`, and `Decentralization`.

For a blockchain to serve as an unbiased foundation for a monetary system at a global scale, it should excel in all three aspects. A monetary system needs to be secure from fraud, safe from attacks by censors through decentralization, and scalable to meet the needs of over 8 billion humans in a global society.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

The Blockchain Trilemma describes the relationship between:

- [ ] ethereum, bitcoin, and altcoins

> ℹ️ Try again! The Trilemma is about competing qualities within a blockchain, not competing blockchains.

- [ ] security, censorship, and fraud

> ℹ️ Try again! Security is one of the three, but censorship and fraud are threats blockchains defend against, not Trilemma qualities.

- [x] decentralization, scalability, and security

> ℹ️ Correct! These three qualities compete with each other, preventing a blockchain from optimizing all three at once.

- [ ] security, speed, and low fees

> ℹ️ Try again! Speed and fees relate to scalability, which is just one of the three qualities: security, scalability, and decentralization.

# Security and Consensus

Security is the most foundational requirement for a public blockchain. Computers within a network (such as a blockchain network) must agree on what transactions have truly happened to work together; this agreement is called `consensus`. A blockchain is secure if attackers cannot disrupt the network from agreeing on that truth. Consensus algorithms are designed to resist these attacks.

Chains like Bitcoin that use `Proof of Work` consensus protect this agreement by making block production highly competitive; each block producer races to solve a math problem. The first to do so wins the right to create the next block and receives the monetary `block reward` that comes with it. Rewriting the chain’s recent history would require massive investments in computing power and energy, so an attacker would likely spend more than they’d gain. 

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Blockchain consensus for cryptocurrencies is:

- [ ] The process where nodes agree on what has happened on-chain

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Important for everyone in that chain’s ecosystem to prevent fraud

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Secured through economic incentives

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! Consensus is how nodes agree on the truth, and economic incentives make attacking that agreement cost more than it would gain.

# Security and Attacks

One potential form of attack on blockchain consensus is a `51% attack`; an attacker controlling the majority of a network’s consensus power can reverse recent transactions to spend the same coins twice, or censor new ones. They cannot fake signatures or spend anyone else’s funds. This majority means 51% of the computing power in Proof of Work consensus and 51% of the `stake` in Proof of Stake consensus, a massive capital investment. And in Proof of Stake, provable cheating such as signing two conflicting blocks gets that stake destroyed (called slashing); an attacker would likely lose more than they’d gain.

In `Proof of Stake` consensus, the block producer isn’t chosen through competition but is randomly assigned instead. Like with Proof of Work, the consensus algorithm ensures that any single entity cannot regularly “win” the right to create a new `block`. 

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

The end-goal of a 51% attack is to:

- [ ] Disrupt mining operations

> ℹ️ Try again! The attack targets consensus itself: reversing or censoring transactions, not disrupting miners.

- [x] Double-spend coins or censor transactions

> ℹ️ Correct! Majority consensus power lets an attacker reverse recent transactions to spend coins twice, or block new ones.

- [ ] Create a new cryptocurrency

> ℹ️ Try again! Anyone can create a new cryptocurrency without attacking an existing network.

- [ ] Eliminate the other 49%

> ℹ️ Try again! The other participants aren’t removed. Majority power is used to reverse or censor transactions.

# Scalability - Throughput

`Scalability` refers to a blockchain’s ability to process many transactions quickly. Two parts determine a blockchain’s scalability: throughput and finality.

1) `Transaction throughput`: How many transactions a blockchain can process at once, usually measured in transactions per second (`TPS`).

Imagine many people waiting at a bus stop with more arriving every minute, they all want to travel. But there are only so many people that can travel by bus. To clear the bus stop of people faster, you’d have to use bigger buses (more people) or make the buses run more often (less time). It works the same way with trying to fit many transactions into the small amount of `block space` available for each block. You can see this visualization with live data at [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Which of the following is true for the bus stop analogy for blockchain transactions?

- [ ] People (transactions) are grouped together into buses (blocks)

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Each bus (block) fits a limited number of people (transactions)

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Moving more people (transactions) needs bigger or more buses (blocks)

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! Transactions fill limited block space just like passengers fill buses. Clearing the queue faster needs bigger or more frequent blocks.

# Scalability - Finality

The second aspect of blockchain scalability is:

2) `Finality`: When can we be reasonably sure a transaction won’t get changed or reversed?

In Proof of Work chains like Bitcoin, finality is measured in blocks: the more blocks added to the chain after your transaction, the more sure you can be it won’t get reverted. Remember, a secure consensus algorithm makes it very expensive to change past blocks, and the expense grows the farther back someone tries to change. Bitcoin produces a new `block` roughly every 10 minutes, so waiting for several confirmations takes about an hour. Ethereum’s Proof of Stake takes a different route: validators vote to finalize blocks, and after about 13 minutes (two `epochs` of votes) a transaction is final. 

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Decentralization distributes power

`Decentralization` is the final basis of the blockchain trilemma: the process of transferring control and decision-making from a single entity to a distributed network of many. Decentralization is the fundamental principle that enables blockchains to be `permissionless` and `censorship-resistant`; anyone can use decentralized blockchains, and anyone can build software using them.

Centralized platforms like Facebook and Twitter can deactivate anyone’s account at any time. Many influential streamers on Twitch or Tiktok have found themselves removed from their platforms without cause. Even if social media users can reinstate their accounts, it can be a long and painful process. Without decentralization, a blockchain `ledger` is just a financial spreadsheet on a bank computer; the bankers decide who gets to create an account with them. A `permissionless` network means authority is sufficiently decentralized; there is no way to remove a person or entity’s access.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Which of these statements is NOT true for decentralization?

- [ ] Decentralization makes blockchains censorship-resistant 

> ℹ️ Try again! This statement is true: with no single controlling entity, no one can censor the network.

- [ ] Decentralization makes blockchains permissionless

> ℹ️ Try again! This statement is true: decentralized authority means no one can remove a person’s access.

- [x] Decentralization helps authoritarian powers to maintain control

> ℹ️ Correct! This is NOT true: decentralization does the opposite by distributing control away from any single entity.

- [ ] Anyone anywhere can use permissionless systems 

> ℹ️ Try again! This statement is true: permissionless means no one can be denied access.

# Is it decentralized?

But whether something is decentralized isn’t just a yes or no answer. Are 10 controlling entities decentralized? How about 1000? One million? There isn’t a standard cutoff for something being sufficiently decentralized, so it makes sense to think of decentralization as a spectrum. Rather than the only choices being black and white, there are also many greys between them.

So we can say something is “more or less decentralized than something else” rather than “centralized or decentralized.” A high degree of decentralization is required for a neutral monetary system to resist state-level censorship. Newer blockchains often trade decentralization for scalability, but they leave themselves vulnerable to the same pressures from societies and governments that fully centralized platforms feel. They may end up engaging in the same censorship seen on centralized social media networks.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Different blockchains use different amounts of decentralization. 

- [x] True

> ℹ️ Correct! Decentralization is a spectrum: each blockchain chooses how much to trade for scalability or other goals.

- [ ] False

> ℹ️ Try again! Decentralization is a spectrum, and each blockchain makes its own tradeoff along it.

# Some Examples

Each blockchain has its own approach to the trilemma, and each has made tradeoffs to focus on its goals. Bitcoin and Ethereum prioritize security and decentralization over scalability, leading to long transaction `finality time` for Bitcoin and limited `block space` on Ethereum. When demand to use `smart contracts` spikes, especially for DeFi, Ethereum fees rise; during peak demand in 2021, a single transaction could cost tens of dollars.

Rising fees provided an opening for `alternative Layer 1`’s like BNB Chain, which prioritized scalability over decentralization for higher `transaction throughput` and cheaper fees. Third-generation chains like Solana use novel methods to solve the trilemma, but all blockchains are still subject to these basic constraints. Each chain’s choice defines its ecosystem through the foundational effects that come from that choice.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# So what can be done?

So if Ethereum has prioritized high security and decentralization, how can it scale to serve the needs of all users as the global financial network it aims to become? The Ethereum roadmap explored two answers: `Layer 2`s and blockchain `sharding`.

`Layer 2`s increase Ethereum scalability without compromising on the other two parts of the blockchain trilemma. They are an additional layer sitting on top of the main blockchain, relying on the main chain for security but allowing users to benefit from reduced fees and faster transactions. We will explore them in more detail in our Layer 2 lesson.

`Sharding` would have split the blockchain into multiple parallel chains, like adding more lanes to a road. Ethereum set that plan aside for a simpler one: making block data cheaper for Layer 2s to use (added in 2024) and raising capacity step by step, without sacrificing security or decentralization.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Layer 2s:

- [ ] Provide their own security

> ℹ️ Try again! Layer 2s rely on the main blockchain for their security.

- [x] Increase scalability for the main blockchain

> ℹ️ Correct! Layer 2s sit on top of the main chain, adding scalability without compromising security or decentralization.

- [ ] Increase fees for users

> ℹ️ Try again! Layer 2s do the opposite: users benefit from reduced fees.

- [ ] Increase finality time for users

> ℹ️ Try again! Layer 2s offer faster transactions, not slower ones.

# The future of Ethereum

The Ethereum network keeps evolving its scalability without sacrificing the other aspects of the trilemma. The Merge to `Proof of Stake` consensus (2022) cut the network’s energy use by over 99%, and cheap block data for Layer 2s arrived in 2024. **Scaling is continuous work: each upgrade makes Ethereum faster and cheaper to use while maintaining security and decentralization as core tenets.** The Ethereum Foundation has an excellent webpage on the [Ethereum roadmap](https://ethereum.org/roadmap/).

Meanwhile, many `Layer 2` protocols build on top of Ethereum to help meet user demand without requiring updates to the Ethereum protocol itself. These Layer 2 protocols rely on Layer 1 Ethereum to provide decentralized security while they provide scalability; the diversity of Layer 2s makes a decentralized ecosystem! Leading `rollup`s include Arbitrum, OP Mainnet, and Base; Polygon PoS is a popular `sidechain` with its own separate security.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Ethereum upgrades include:

- [ ] Using Layer 2s and cheaper block data to increase scalability

> ℹ️ Try again! This is part of the upgrades, but it isn’t the only one.

- [ ] Maintaining decentralization and security as core principles

> ℹ️ Try again! This is part of the upgrades, but it isn’t the only one.

- [ ] Reducing energy consumption with Proof of Stake consensus

> ℹ️ Try again! This is part of the upgrades, but it isn’t the only one.

- [x] All of the above

> ℹ️ Correct! Layer 2s and cheaper block data add scale, Proof of Stake cut energy use, and security and decentralization stay core tenets.

# What does it mean for Explorers?

Users need low fees to learn and explore the technology with low barriers to entry and low costs from mistakes, even more so at the beginning of their journey. The Ethereum blockchain is not ideal yet, but its values make it one of the best candidates for fulfilling the dream of a global financial computing system. Explorers can learn to interact and use Ethereum without paying massive fees; using Layer 2s allows Explorers to have the security and decentralization benefits of Ethereum combined with the higher scalability.

The next lesson will explain `Layer 2` solutions and how to get started. Onward explorers!

