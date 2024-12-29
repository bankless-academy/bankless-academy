---
TITLE: 区块链基础知识
DESCRIPTION: 了解区块链技术的基本架构。
LANGUAGE: 简体中文（Simplified Chinese）
WRITERS: iSpeakNerd
TRANSLATORS: 183Aaros.eth
LINK: https://app.banklessacademy.com/lessons/blockchain-basics
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

# 导言

`区块链` 是一种革命性的数据存储与跟踪技术，也是一种能让任何人都有权访问链上数据的技术。 它是一种将数据组织在公开账簿里的方法，这个账簿里同时包含所有的历史交易，且具有唯一性，任何人都有权查看但无权编辑。 这份公开的交易清单统称为区块链 `账本（ledger）`</code>。

After examining the layers of a blockchain, we will be using a blockchain tool called a `block explorer` to look into the specifics of the Ethereum blockchain structure; we will zoom in on the Ethereum blockchain to view the **list** of blocks, the **transactions** within those blocks, and the **details** of each individual transaction.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Blockchain Structure

The term blockchain can be used as a noun — the Bitcoin blockchain — or as an adjective — blockchain technology. Either way, `blockchain` refers to the entire structure cryptocurrencies are built on.

Zooming in from the outside, there are 3 levels of structure in a blockchain:

1. The overall `blockchain` is made up of blocks that are linked together in order
2. `Blocks` are made up of groups of transactions put together
3. `Transactions` are amounts of money sent between two `addresses` on the network

This three-tiered structure comes together to create a cryptographic ledger - an unalterable history of all transactions performed on the network.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

What is a blockchain?

- [ ] Organized groups of transactions called blocks
- [ ] A list of amounts of money sent between two addresses
- [ ] Blocks linked together in sequence
- [ ] All of the above

# Examining the Ledger

In typical money systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly Bankless, we want a system that doesn’t require us to trust one entity to manage the ledger.

The `ledger` is the list of ALL transactions ever made on a blockchain, and anyone can see it for `public` blockchains. Discrete groups of transactions from the ledger form the blocks that together make the blockchain.

When new transactions are added to the ledger, balances stored at each `address` get updated; past transactions cannot be altered. It’s like allowing everyone to look at everyone’s all-time bank account transaction history, at any given time, forever.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transactions on the Ledger

Let’s look at some example transactions:

- Alice sends 5 ETH to Bob
- Bob sends 2 ETH to Charlie

Individual transactions show the _change_ in the amount of cryptocurrency for each address so the total result of all transactions IS the amount of cryptocurrency each address has.

---

⇒ Alice has lost 5 ETH

⇒ Bob has gained 3 ETH total (received 5, sent 2)

⇒ Charlie has gained 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Which of the following statement(s) is/are true for public blockchain ledgers?

- [ ] All transactions are public and past transactions are unchangeable
- [ ] The ledger tracks how much cryptocurrency each address currently has
- [ ] The ledger grows as new transactions are added to it
- [ ] All of the above

# Decentralization

Not only are transactions included on a `blockchain` ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, the blockchain ledger is stored on every device, called a `node`, on the network.

This shared data is what makes the blockchain ledger `decentralized`. No single authority or entity controls the data. Blockchains like Ethereum are also `public` because the ledger can be viewed by anyone.

We will see specifics of how new data is added and how we ensure everyone has a copy of the same data all the time in our upcoming Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.

# Knowledge Check 3

What makes a blockchain decentralized?

- [ ] Only one entity can write to the blockchain
- [ ] It meets decentralization requirements set by the government
- [ ] No single authority or entity controls the ledger or access to the ledger data because it is distributed on a large network of computers
- [ ] The ledger is stored on a single secure server

# Block Anatomy

An important feature of blockchains is that past transaction data cannot be changed after it has been included in a block. This is because each block has a unique `block hash`, like a fingerprint, that is used to link the blocks together one after another. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it because each fingerprint depends on the previous one.

So each `block` is simply a group of transactions put together in one file along with that block’s `block hash`. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block_**chain**_.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

What is the purpose of a block hash?

- [ ] To encrypt block data so no one can read it
- [ ] To link each block to the previous one and ensure past transaction data doesn’t change
- [ ] To ensure transactions are sent to the correct address
- [ ] To ensure the blockchain stays decentralized

# Inside a Block

Remember, `block` data is just a group of transactions put together. Looking within a single block, we see a list of transactions and some data about who created the block.

From our example earlier when discussing the blockchain ledger, both of those transactions might be grouped within one block, or spread out into multiple blocks over time. But no matter what block they are included in, they are all added to the overall blockchain ledger eventually.

- Alice sends 5 ETH to Bob
- Bob sends 2 ETH to Charlie

Recall that each block must also reference the past block’s `block hash` to link the blockchain together.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

The following information is contained in a block:

- [ ] All information contained in previous blocks, so the blockchain is always current
- [ ] Anything relevant to the blockchain as block size is unlimited
- [ ] Transaction data and a reference to the previous block
- [ ] All transaction data generated within a fixed timeframe

# Individual Transactions

The data on any blockchain is simply a list of `transactions`, records of currency moved between users. Each transaction must be signed by the sender’s `digital signature` to be valid.

This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize a transaction. You can think of it as the digital equivalent of physically signing a check, receipt, or credit card transaction.

Transactions can be simple, like sending crypto assets, or more complex, such as swapping crypto assets or even deploying special code that executes when triggered, called `smart contracts`.

Finally, each transaction has a unique digital identifier, called its `transaction hash`, that no other transaction has. This makes it easy to refer to any single transaction later on and ensures that the details of that transaction can’t be changed afterward.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Data on a blockchain is simply a list of transactions grouped into blocks. Examples of such transactions might include:

- [ ] Sending or receiving crypto assets
- [ ] Changing the size of the block
- [ ] Editing past blockchain data
- [ ] All of the above

# User Addresses

An `address` is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it but only someone who controls the `private key` can unlock and use the funds at that address.

On Ethereum, an address always starts with _0x__________ and is 42 characters of numbers and letters derived from the `public key` of that address.

When looking at a single transaction in a block explorer, we can see the From: and To: addresses. This doesn’t tell us who the _people_ are who control those addresses but allows any user to track the movement of cryptocurrency throughout the blockchain ledger.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

What is true about blockchain addresses?

- [ ] They are the public identifiers of different entities on a blockchain
- [ ] They always start with _0x_ on Ethereum
- [ ] Whoever controls the private key for an address can use the funds at that address
- [ ] All of the above
