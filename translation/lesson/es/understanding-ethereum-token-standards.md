---
TITLE: Understanding Ethereum Token Standards
DESCRIPTION: Learn how Ethereum’s asset templates support both traditional and emerging asset classes.
LANGUAGE: English
WRITERS: Musharef, Tetranome
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/understanding-ethereum-token-standards
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

## **Key Takeaways**

> - Ethereum `token` standards are predefined rules and functions used for deploying tokens on Ethereum.
>
> - The most popular Ethereum token standards are `ERC-20`, `ERC-721`, and `ERC-1155`.
>
> - Each standard enables different levels of `fungibility`, allowing creation of both common and unique onchain assets.
>
> - Token standards enable token interoperability across the Ethereum ecosystem, making it very easy for dApps to integrate new tokens, and for you to have access to them!

## What are Ethereum Token Standards?

Ethereum hosts tens of thousands of different crypto tokens, each with different properties and use cases. How can the network ensure seamless token support across its dApp ecosystem, without developers having to spend hours integrating each token? How can users of these tokens understand their key properties without scrolling through hours of documentation?

Enter token standards!

These templates and rulesets support token `interoperability` across the Ethereum ecosystem. This means that dApps only need to support a few common token standards rather than thousands of individual tokens. For Explorers like yourself, this means that you can look at a token’s founding standard and understand its basic abilities across Ethereum.

Token standards dictate:

- How a token’s smart contract should be coded.

- The use cases a token can have within the Ethereum ecosystem.

Currently, Ethereum has three commonly used token standards:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20** — A standard for easily exchangeable (or fungible) tokens.

   e.g. USDC and UNI tokens.

2. **ERC-721** — A standard for unique (or non-fungible) tokens, known as `NFTs`.

   e.g. CryptoPunk and Bored Ape NFTs.

3. **ERC-1155** — A standard used for both fungible and non-fungible tokens in the same contract.

   e.g. Items inside a web3 video game.

Now, you are probably wondering: “What exactly is fungibility?”

Let’s take a look at this concept from traditional economics to understand its importance in the Ethereum ecosystem.

## Fungibility vs. Non-Fungibility.

**‘Fungibility’** is a property of an economic asset or good, indicating two key features:

- When the asset is traded, its units are interchangeable without any alteration in value.

  ($1 USD can be exchanged for another $1 USD, or four 25¢ coins, or twenty 5¢ coins.)

- When the asset is divided, the smaller fractions maintain its fundamental characteristics.

  ($1 USD, split into four 25¢ coins, still functions as a store of value or is used for making purchases.)

Examples of fungible assets include oil, fiat currency, government bonds, and company shares. These non-unique assets can be easily exchanged and divided.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Conversely, **‘non-fungibility’** indicates:

- The asset has unique properties which make it distinguishable from its counterparts, giving it a unique value.

  (A canvas painting by Van Gogh is priced differently to one by an emerging modern artist, because of the appearance, rarity, level of skill, and reputation behind the paintings.)

- The act of division affects its fundamental characteristics.

  (A painting cut into four pieces has sections that do not resemble one another, and each section may be valued differently. The initial intention of the painting is also gone.)

Some examples of non-fungible assets are real estate, artwork, digital identities, and certifications. These assets are more difficult to exchange and divide because of their unique properties.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

If you’re ever confused about fungibility, just ask yourself: “How easy is it to exchange and divide?” If it’s difficult, it’s likely non-fungible!

Ethereum aims to become “the settlement layer for the world economy”. Fungible and non-fungible asset functionality opens opportunities for traditional asset classes to be represented onchain — and for new ones to be created!

## Standards & Token Functions

When deploying a new token contract on Ethereum, the asset creator will select from one of the existing token standards. This grants it initial properties — called functions — such as the total supply of the asset, whether or not it can be transferred to another wallet, and what information it can hold.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

For example, ERC-20 uses functions like these:

**1. totalSupply:** Defines the total supply of an ERC-20 token.

The total supply of a token informs important qualities like its value and distribution.

**2. balanceOf:** Checks the token balance of a specified address.

This helps services and platforms check your wallet’s balance before executing your requested transaction.

**3. transfer:** Transfers tokens from your address to other addresses.

Every time you send a crypto token from your wallet to another wallet, you’re using the transfer function.

**4. approve:** Allows an address (usually a smart contract) to automatically transact on behalf of your wallet up to a specified amount.

Using this function, you can approve a platform or service to automatically use a defined portion of your funds and execute transactions.

**5. allowance:** Used to get the amount that a spender can transact from a wallet.

A platform may use this function to check the total amount you’ve approved it to use and if it can execute the transaction without you signing it manually.

Standardizing the token creation process enables `composability` in the Ethereum ecosystem. For instance, a developer building a [decentralized exchange (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) can add support for any token following the ERC-20 standard because they will all behave in a similar way. They will not need to  build in individual support for each listed token.

Similarly, someone building an NFT marketplace just needs to make the platform compliant with ERC-721 and ERC-1155 standards to support all NFTs created on Ethereum.

Now that we understand token standards, fungibility, and functions, let’s take a look at the use cases for the three primary standards on Ethereum.

### ERC-20: Fungible Tokens

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) is a token standard that defines the rules for creating fungible token contracts.

ERC-20 tokens can be anything from a `memecoin` to a mode of payment in a decentralized marketplace. In most cases, they’ll fit into one of these four categories:

**1. Utility token:** Serves a specific use case within an app/platform ecosystem.

Example: Filecoin (FIL) is used to reward storage providers who validate and add new blocks to their data storage network.

**2. Governance token:** Offers holders voting rights in governance decisions of a platform.

Example: Ethereum Name Service (ENS) holders can vote in proposals to update the domain registry protocol.

**3. Stablecoin:** Designed to maintain a stable value, usually equal to the U.S. dollar.

Examples: Tether (USDT), USDCoin (USDC), DAI (DAI).

**4. Security token:** Represents ownership in an underlying asset, like stocks of a company.

Examples: Blockchain Capital (BCAP)

A single token could fall into more than one category. For example, a governance token can also have certain utility within a platform.

You can easily [buy ERC-20 tokens on a DEX](https://app.banklessacademy.com/lessons/how-to-swap-on-a-decentralized-exchange) like Uniswap or a `centralized exchange` like Binance or Coinbase.

### ERC-721: Non-fungible Tokens

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) is a standard that defines the rules for Ethereum users to create or use non-fungible tokens. It ensures that each NFT created is provably unique.

What are some use cases of ERC-721 tokens?

**1. Ownership of assets:** ERC-721 tokens are widely used to represent the ownership of unique digital and real-world assets. For example, this Explorer’s Handbook entry has 100 individually numbered versions available — not just to read, but to own — like a book on your digital bookshelf. (You can `mint` and own it by hitting the gold ‘Collect Entry’ button at the top). Bankless Academy’s ‘Datadisk Collectibles’ work in the same way.

**2. Subscriptions and memberships:** Creators, artists, clubs, and companies are already using NFTs for subscriptions, event tickets, and memberships. The provable uniqueness of NFTs ensures that each of the fixed supply is tied to an individual user.

**3. Loyalty rewards:** Starbucks launched a loyalty program called Odyssey where its members can complete quests to obtain NFTs that they can redeem for digital and real-world rewards. Many other brands are offering NFTs as a loyalty reward that users can choose to redeem or sell whenever they want.

**4. Identity and Certifications:** ERC-721 tokens can be used to create tamper-proof identities and certifications. When your digital identity or certificates are ERC-721 tokens, it is easy for you to prove your ownership and nearly impossible for anyone to forge your documents and misuse them.

To get an ERC-721 token, create an account on an NFT marketplace like [OpenSea](https://opensea.io/) or [Blur](https://blur.io/) and purchase any listed NFT. Make sure you take our [Web3 Security](https://app.banklessacademy.com/lessons/web3-security) lesson to protect yourself from marketplace scams.

### ERC-1155: Fungible & Non-fungible Tokens

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Often referred to as a `multi-token standard`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) merges the concepts of ERC-20 and ERC-721 and lets builders write contracts that can support both fungible and non-fungible tokens. This doesn’t make a major difference to the user experience but can help to optimize platform features. An example would be deploying both a fungible in-game currency and non-fungible in-game assets under a single contract.

This standard also allows the creation of semi-fungible tokens — tokens that are fungible and non-fungible in specific circumstances. For example, in a trading card collection, all cards that have the same rarity might be fungible (interchangeable) whereas cards with differing rarity levels might be non-fungible (non-interchangeable).

ERC-1155 also enables batch transactions to send multiple token types at once, potentially reducing the `gas` cost for users.

***

We commend you for making it through this lengthy entry in the Explorer’s Handbook: ‘Understanding Token Standards’.

Don’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!

***

## Ethereum Token Standard FAQ

### How are Ethereum token standards created?

Token standards are proposed and published on Ethereum through a proposal process called Ethereum Improvement Proposals (EIPs). Once a proposal is passed, it becomes a standard and is called an Ethereum Request for Comment (ERC). The serial number of the EIP is then appended to complete the standard name, e.g. ERC-20 or ERC-721.

### Does ether (ETH) follow a token standard?

No. In fact, ETH is known as a ‘coin’ not a ‘token’, meaning it has its own [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### Can anyone launch a token?

Yes. Ethereum is a permissionless ecosystem and anyone can launch a fungible or non-fungible token. However, you will need technical know-how or access to no-code tools.

### If two tokens have the same name, how do I know which is the official token?

To identify the original token, you should check the contract address that’s used to publish the tokens you want to use and reference it against official project documentation. This way you’ll ensure that you do not interact with a malicious token contract that could drain your wallet.

### Are there other token standards on Ethereum apart from ERC-20, 721, and 1155?

Yes, there are other token standards on Ethereum that are not in use or have very niche use cases. Some examples include [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462), [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), and [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626).

***

**Authors**

**[Musharraf](https://x.com/musharrafff)** is the co-founder of Unhashed. He helps web3 projects with content strategy and execution.

**[Tetranome](https://twitter.com/Tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.

**Editors**

**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.

**Patron**

This unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!
