---
TITLE: Blockchain Basics
DESCRIPTION: Learn about the fundamental architecture of blockchain technology.
LANGUAGE: English
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: X
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

# Introduction

`Blockchain` technology is a revolutionary way of storing and tracking data, while also making that data accessible to anyone. It is a way of organizing data in a single public list of all historical transactions that anyone can view but cannot edit. This public list of transactions is collectively known as the blockchain `ledger`.

After examining the layers of a blockchain, you will understand the structure that a blockchain tool called a `block explorer` displays: the **list** of blocks, the **transactions** within those blocks, and the **details** of each individual transaction. To see it in action, try [Etherscan](https://etherscan.io/), a popular block explorer for Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Blockchain Structure

The term blockchain can be used as a noun (the Bitcoin blockchain) or as an adjective (blockchain technology). Either way, `blockchain` refers to the entire structure cryptocurrencies are built on.

Zooming in from the outside, there are 3 levels of structure in a blockchain:

1. The overall `blockchain` is made up of blocks that are linked together in order
2. `Blocks` are made up of groups of transactions put together
3. `Transactions` are transfers of value, or instructions to programs, between `addresses` on the network

This three-tiered structure comes together to create a cryptographic ledger - an unalterable history of all transactions performed on the network.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

What is a blockchain?

- [ ] Organized groups of transactions called blocks

> ℹ️ Try again! Blocks are part of the structure, but they aren’t the only correct answer.

- [ ] A shared record anyone can view but no one can edit

> ℹ️ Try again! This is true, but it isn’t the only correct answer.

- [ ] Blocks linked together in sequence

> ℹ️ Try again! This describes the chain of blocks, but it isn’t the only correct answer.

- [x] All of the above

> ℹ️ Correct! All three are true: a blockchain is a shared, uneditable record of transactions grouped into blocks, linked in sequence.

# Examining the Ledger

In typical money systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly Bankless, we want a system that doesn’t require us to trust one entity to manage the ledger.

The `ledger` is the list of ALL transactions ever made on a blockchain, and anyone can see it for `public` blockchains. Discrete groups of transactions from the ledger form the blocks that together make the blockchain.

When new transactions are added to the ledger, balances stored at each `address` get updated; past transactions cannot be altered. It’s like letting anyone look at everyone’s all-time bank account transaction history, at any time.

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

Which of the following is true for public blockchain ledgers?

- [ ] All transactions are public and past transactions are unchangeable

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] The ledger tracks how much cryptocurrency each address currently has

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] The ledger grows as new transactions are added to it

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! The ledger is public, unchangeable, keeps address balances up to date, and grows with every new transaction.

# Decentralization

Not only are transactions included on a `blockchain` ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, copies of the blockchain ledger are stored on many computers, called `nodes`, across the network.

This shared data is what makes the blockchain ledger `decentralized`. No single authority or entity controls the data. Blockchains like Ethereum are also `public` because the ledger can be viewed by anyone.

For this lesson, just remember that the ledger data is shared across the many computers running the Ethereum network.

# Knowledge Check 3

What makes a blockchain decentralized?

- [ ] Only one entity can write to the blockchain

> ℹ️ Try again! A single entity in control is the opposite of decentralization.

- [ ] It meets decentralization requirements set by the government

> ℹ️ Try again! Decentralization comes from the network’s design, not from government approval.

- [x] No single entity controls the ledger, stored on many computers

> ℹ️ Correct! Storing copies of the ledger on many nodes means no single entity has the power to control or change the data.

- [ ] The ledger is stored on a single secure server

> ℹ️ Try again! A single server would be a central point of control. Copies of the ledger are stored on many nodes.

# Block Anatomy

An important feature of blockchains is that past transaction data cannot be changed after it has been included in a block. This is because each block has a unique `block hash`, like a fingerprint, that is used to link the blocks together one after another. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it because each fingerprint depends on the previous one.

So each `block` is simply a group of transactions, plus a unique fingerprint (its `block hash`) computed from the block’s contents. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

What is the purpose of a block hash?

- [ ] To encrypt block data so no one can read it

> ℹ️ Try again! Block data stays publicly readable. The hash is a fingerprint, not encryption.

- [x] To link blocks together and keep past transaction data unchangeable

> ℹ️ Correct! Each block references the previous block’s fingerprint, so changing past data would break every block that follows.

- [ ] To ensure transactions are sent to the correct address

> ℹ️ Try again! Addresses handle where funds go. The block hash links blocks together.

- [ ] To ensure the blockchain stays decentralized

> ℹ️ Try again! Decentralization comes from distributing the ledger across many nodes, not from the block hash.

# Inside a Block

Remember, `block` data is just a group of transactions put together. Looking within a single block, we see a list of transactions and some data about who created the block.

From our example earlier when discussing the blockchain ledger, both of those transactions might be grouped within one block, or spread out into multiple blocks over time. But no matter what block they are included in, they are all added to the overall blockchain ledger eventually.

- Alice sends 5 ETH to Bob
- Bob sends 2 ETH to Charlie

Recall that each block must also reference the past block’s `block hash` to link the blockchain together.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

What information is contained in a block?

- [ ] All the information contained in previous blocks

> ℹ️ Try again! A block only references the previous block’s hash. It doesn’t copy all past data.

- [ ] Anything relevant to the blockchain as block size is unlimited

> ℹ️ Try again! A block is a discrete group of transactions, not an unlimited container.

- [x] Transaction data and a reference to the previous block

> ℹ️ Correct! A block is a group of transactions plus the previous block’s hash, which chains the blocks together.

- [ ] All transaction data generated within a fixed timeframe

> ℹ️ Try again! Transactions can be grouped into one block or spread across multiple blocks over time.

# Individual Transactions

The data on any blockchain is simply a list of `transactions`, records of currency moved between users. Each transaction must be signed by the sender’s `digital signature` to be valid.

This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize a transaction. You can think of it as the digital equivalent of physically signing a check, receipt, or credit card transaction.

Transactions can be simple, like sending crypto assets, or more complex, such as swapping crypto assets or even deploying special code that executes when triggered, called `smart contracts`.

Finally, each transaction has a unique digital identifier, called its `transaction hash`, that no other transaction has. This makes it easy to refer to any single transaction later on and ensures that the details of that transaction can’t be changed afterward.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Data on a blockchain is simply a list of transactions grouped into blocks. Examples of such transactions might include:

- [x] Sending or receiving crypto assets

> ℹ️ Correct! Transactions record currency moving between users, from simple transfers to smart contract interactions.

- [ ] Changing the size of the block

> ℹ️ Try again! Block size isn’t something a transaction can change.

- [ ] Editing past blockchain data

> ℹ️ Try again! Past blockchain data cannot be changed. That’s a core feature of blockchains.

- [ ] All of the above

> ℹ️ Try again! Only one of the above is a valid blockchain transaction.

# User Addresses

An `address` is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it but only someone who controls the `private key` can unlock and use the funds at that address.

On Ethereum, an address always starts with \_0x\_\_\_\_\_\_\_\_\_\_ and is 42 characters of numbers and letters derived from the `public key` of that address.

When looking at a single transaction in a block explorer, we can see the From: and To: addresses. This doesn’t tell us who the _people_ are who control those addresses but allows any user to track the movement of cryptocurrency throughout the blockchain ledger.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

What is true about blockchain addresses?

- [ ] They are the public identifiers of different entities on a blockchain

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] They always start with _0x_ on Ethereum

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Whoever controls the private key can use the funds at that address

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! Addresses are public identifiers, start with 0x on Ethereum, and their funds are unlocked by the private key.
