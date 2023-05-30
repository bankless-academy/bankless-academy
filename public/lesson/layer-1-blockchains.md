
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
LESSON TITLE: LAYER 1 BLOCKCHAINS
DATA LOCATION: https://app.banklessacademy.com/lessons/layer-1-blockchains.md
PROTOCOL VERSION: 0.001
LAST UPDATED: 30/05/2023
__________________________________________________________________________________________________________________________________________________________

   << LESSON START >>


# **Introduction**


Problems emerge when more users want to use a `blockchain` network than it can handle. Large demand for `blockspace` can be temporary or can last as long as users continue to have a strong desire to use the blockchain. In times of high demand, Ethereum users can pay skyrocketing fees to still have their transactions processed quickly— ultimately pricing out users with less capital.


This lesson explores why Ethereum and other blockchains are subject to the `Blockchain Trilemma`, how the Trilemma is the root cause of the problems described above, and how the Trilemma affects Ethereum’s plans for serving the needs of all its users. We will look at the tradeoffs several blockchains have made concerning the Blockchain Trilemma, and what those tradeoffs mean for Academy Explorers.


![001_Introduction.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b2cf1a5-5dc6-4f4e-8ed2-62acb7d84c5b/001_Introduction.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=0600bd901c588a881206d233733bb2f0d69232478da5bf7e0dcf0a237d744a54&X-Amz-SignedHeaders=host&x-id=GetObject)


# Blockchain Trilemma


As implied by the word _**tri**_lemma, there are three qualities of blockchains that compete with each other and prevent optimizing for all three at once. 


These are: `Security`, `Scalability`, and `Decentralization`.


For a blockchain to serve as an unbiased foundation for a monetary system at a global scale, it should excel in all three aspects. A monetary system needs to be secure from fraud, safe from attacks by censors through decentralization, and scalable to meet the needs of over 8 billion humans in a global society.


![002_Blockchain_Trilemma.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fb7883cc-68b7-4c07-8015-a3d713fcccee/002_Blockchain_Trilemma.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=b8a029360002a2fe6e1629b7079308de221aec530a8e53296c2eb5ed7f320684&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ TODO


The Blockchain Trilemma describes the relationship between:

- [ ] ethereum, bitcoin, and altcoins
- [ ] security, censorship, and fraud
- [ ] decentralization, scalabilty, and security
- [ ] money, humans, and blockchains

# Security and Consensus


Security is the most foundational requirement for a public blockchain. Computers within a network (such as a blockchain network) must agree on what transactions have truly happened to work together; this agreement is called `consensus`. A blockchain is secure if attackers cannot disrupt the network from agreeing on that truth. Consensus algorithms are designed to resist these attacks.


Chains like Bitcoin that use `Proof of Work` consensus prevent fraud by making their consensus algorithm highly competitive; each block producer races to solve a math problem. The first to do so wins the right to create the next block and receives the monetary `block reward` that comes with it. Fraud would require massive investments in computing power and energy, so an attacker would likely spend more than they’d gain. 


![003_Security_and_Consensus.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/14c64676-4d3e-44d1-b233-3cad07d16007/003_Security_and_Consensus.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=50ce9ec81a5b401a1ee13bffa3b1fe7dfd956f8578e5c2531f48379f4de6d836&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Consensus


Blockchain consensus for cryptocurrencies is:

- [ ] The process where all blockchain nodes agree on what has happened on-chain
- [ ] Important for everyone in that chain’s ecosystem to prevent fraud
- [ ] Secured through economic incentives
- [ ] All of the above

# Security and Attacks


One potential form of attack on blockchain consensus is a `51% attack`; an attacker needs to have 51% or more of the consensus power on a network to commit fraud by creating falsified transactions. This means 51% of the computing power solving math problems in Proof of Work consensus and 51% of the `stake` in Proof of Stake consensus. Again, fraud would require a massive capital investment to acquire a stake in the network, which will be destroyed if found to be creating false transactions; an attacker would likely spend more than they’d gain.


In `Proof of Stake` consensus, the block producer isn’t chosen through competition but is randomly assigned instead. Like with Proof of Work, the consensus algorithm ensures that any single entity cannot regularly “win” the right to create a new `block`. 


![004_Security_and_Attack.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3327a9dd-f21c-4c28-b35f-d9fae864045a/004_Security_and_Attack.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=3f41c8cbdab67c71578fef453b759530c6fc279899536c16bfef76f74d50684b&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ 51% attacks


The end-goal of a 51% attack is to:

- [ ] Disrupt mining operations
- [ ] Commit fraud in blockchain systems
- [ ] Create a new cryptocurrency
- [ ] Eliminate the other 49%

# Scalability - Throughput


`Scalability` refers to a blockchain’s ability to process many transactions quickly. Two parts determine a blockchain’s scalability: throughput and finality.


1) `Transaction throughput`: How many transactions a blockchain can process at once, usually measured in transactions per second (`TPS`).


Imagine many people waiting at a bus stop with more arriving every minute, they all want to travel. But there are only so many people that can travel by bus. To clear the bus stop of people faster, you’d have to use bigger busses (more people) or make the busses run more often (less time). It works the same way with trying to fit many transactions into the small amount of `block space` available for each block. You can see this visualization with live data at [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).


![005_Scalability_-_Throughput.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b65b9d47-fb02-4134-9398-168fa71fd27b/005_Scalability_-_Throughput.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=f40c5d400ddbd0228b648f8e7e109d6e87e82870a2d180caac7982004ce38d7b&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Transactions Per Second


Which of the following is true for the bus stop analogy for blockchain transactions?

- [ ] People (transactions) are grouped together into buses (blocks)
- [ ] There is a maximum limit on how many people (transactions) can fit into each bus (block)
- [ ] To process more people (transactions) you need faster, larger, and/or more buses (blocks)
- [ ] All of the above

# Scalability - Finality


The second aspect of blockchain scalability is:


2) `Finality`: When can we be reasonably sure a transaction won’t get changed or reversed?


Finality is typically measured in blocks — how many blocks have passed since the transaction was included in a block? The more blocks that get added to the chain afterward, the more sure we can be that the transaction is finalized and won’t get reverted. Remember, a secure blockchain consensus algorithm makes it very expensive to change past blocks, and the expense increases the farther back someone changes. We convert this block number to a finality time by multiplying the expected number of block confirmations by the blockchain’s TPS. For Ethereum, eight block confirmations times 15 `TPS` gives 2 minutes of finality time after confirmation. 


![006_Scalability_-_Finality.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b18eebd-fd04-4459-bbaa-7f490f1fdd48/006_Scalability_-_Finality.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=dd3066577a36f9a6f51ef6428616fc7c2272d2cdec7c27ea1c227c435819aa30&X-Amz-SignedHeaders=host&x-id=GetObject)


# Decentralization distributes power


`Decentralization` is the final basis of the blockchain trilemma — the process of transferring control and decision-making from a single entity to a distributed network of many. Decentralization is the fundamental principle that enables blockchains to be `permissionless` and `censorship-resistant`; anyone can use decentralized blockchains, and anyone can build software using them.


Centralized platforms like Facebook and Twitter can deactivate anyone’s account at any time. Many influential streamers on Twitch or Tiktok have found themselves removed from their platforms without cause. Even if social media users can reinstate their accounts, it can be long and painful process. Without decentralization, a blockchain `ledger` is just a financial spreadsheet on a bank computer; the bankers decide who gets to create an account with them. A `permissionless` network means authority is sufficiently decentralized; there is no way to remove a person or entity’s access.


![007_Decentralization_distributes_power.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c40ca184-ff5b-45ea-985f-05b31522f78b/007_Decentralization_distributes_power.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=9e867b6ba5769a2dbdb904de4b56fdfc99ab816ee5228797fb9cf11240f6e99c&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Why decentralization?


Which of these statements is NOT true for decentralization?

- [ ] Decentralization makes blockchains censorship-resistant 
- [ ] Decentralization makes blockchains permissionless
- [ ] Decentralization helps authoritarian powers to maintain control
- [ ] Anyone anywhere can use permissionless systems 

# Is it decentralized?


But whether something is decentralized isn’t just a yes or no answer. Are 10 controlling entities decentralized? How about 1000? One million? There isn’t a standard cutoff for something being sufficiently decentralized, so it makes sense to think of decentralization as a spectrum. Rather than the only choices being black and white, there are also many greys between them.


So we can say something is “more or less decentralized than something else” rather than “centralized or decentralized.” A high degree of decentralization is required for a neutral monetary system to resist state-level censorship. Newer blockchains often trade decentralization for scalability, but they leave themselves vulnerable to the same pressures from societies and governments that fully centralized platforms feel. They may end up engaging in the same censorship seen on centralized social media networks.


![008_Is_it_decentralized.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/afefbbec-4ad8-4fb7-b788-f629fc7025b3/008_Is_it_decentralized.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=e7503a3e12a3f3c5a7abf01f6b58ea8a6d7a83c52a30d28bad55304b3180d5b0&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ But is it Decentralized?


Different blockchains use different amounts of decentralization. 

- [ ] True
- [ ] False

# Some Examples


Each blockchain has its own approach to the trilemma, and each has made tradeoffs to focus on its goals. Bitcoin and Ethereum prioritize security and decentralization over scalability, leading to long transaction `finality time` for Bitcoin and sky-high transaction fees for Ethereum. The demand to use `smart contracts` as a “decentralized world-finance computer”, especially for DeFi, has meant that many users making small transactions cannot afford Ethereum.


This high cost to use has provided an opening for `alternative Layer 1`’s like the Binance chain. Binance prioritized scalability over decentralization for higher `transaction throughput` and cheaper fees. Third-generation chains like Solana use novel methods to solve the trilemma, but all blockchains are still subject to these basic constraints. Each chain’s choice defines its ecosystem through the foundational effects that come from that choice.


![009_Some_Examples.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9ad46c1e-f823-4566-bef6-486fe21ac61c/009_Some_Examples.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=249b4c6375f261a80e2d7622f9f9d46bbf2f15686ad3b629a0c54a445c52beb8&X-Amz-SignedHeaders=host&x-id=GetObject)


# So what can be done?


So if Ethereum has prioritized high security and decentralization, how can it scale to serve the needs of all users as the global financial network it aims to become? This is where the Ethereum roadmap can provide some answers: `Layer 2`s and blockchain `sharding`.


`Layer 2`s are an early solution to increasing Ethereum scalability without compromising on the other two parts of the blockchain trilemma. They are an additional layer sitting on top of the main blockchain, relying on the main chain for security but allowing users to benefit from reduced fees and faster transactions. We will explore them in more detail in our Layer 2 lesson.


`Sharding` splits the single blockchain into multiple chains that all run together in parallel, like adding more lanes to a road. It enables more transactions to be processed at once without sacrificing security or decentralization.


![010_So_what_can_be_done.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0d108282-dd77-4ce3-b3cf-66588f9c2785/010_So_what_can_be_done.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=a31c2e0508b0b48a83e0da23d8cc4cc4844e3c298dbe5bb096a4b6b9d4b2a3bf&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Layer 2s


Layer 2s:

- [ ] Provide their own security
- [ ] Increase scalability for the main blockchain
- [ ] Increase fees for users
- [ ] Increase finality time for users

# The future of Ethereum


Previously known as the Ethereum 2.0 upgrade, the Ethereum network is evolving its scalability without sacrificing the other aspects of the trilemma. These changes include the merge to `Proof of Stake` consensus, Layer 2s going live, `sharding` of the main chain, and an overall reduction of energy usage. **All of these changes together will mean a faster, more environmentally-friendly, and cheaper Ethereum while still maintaining security and decentralization as core tenets.** The Ethereum Foundation has an excellent webpage on coming [upgrades to Ethereum](https://ethereum.org/en/upgrades/).


These things take time; meanwhile, many `Layer 2` protocols are building on top of Ethereum to help meet user demand in the short term without requiring updates to the Ethereum protocol itself. These Layer 2 protocols rely on Layer 1 Ethereum to provide decentralized security while they provide scalability; the diversity of Layer 2s makes a decentralized ecosystem! Ethereum scaling projects include protocols like Optimistic Ethereum, Polygon, and others.


![011_The_future_of_Ethereum.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/32b6a793-5648-4f0c-bd9f-ba69463f3c24/011_The_future_of_Ethereum.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=95d9fe95b351b9cbbe15cc1c511e3e96e91fa44174309de37af9a92c47817c63&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ Ethereum Future


Ethereum upgrades include:

- [ ] Using Layer 2s and sharding to increase scalability
- [ ] Maintaining decentralization and security as core principles
- [ ] Reducing energy consumption of the blockchain using Proof of Stake consensus
- [ ] All of the above

# What does it mean for Explorers?


Users need low fees to learn and explore the technology with low barriers to entry and low costs from mistakes, even more so at the beginning of their journey. The Ethereum blockchain is not ideal yet, but its values make it one of the best candidates for fulfilling the dream of a global financial computing system. Explorers can learn to interact and use Ethereum without paying massive fees; using Layer 2s allows Explorers to have the security and decentralization benefits of Ethereum combined with the higher scalability.


The next lesson will explain `Layer 2` solutions and how to get started. Onward explorers!

