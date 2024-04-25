---
TITLE: Swapping on a Decentralized Exchange
DESCRIPTION: Begin your journey into DeFi with this Decentralized Exchange walkthrough.
LANGUAGE: English
WRITERS: Tetranome
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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

## Key Takeaways

> - Decentralized Exchanges are a type of dApp that facilitate self-custody token swaps.
>
> - There is some practical knowledge required for confidently interacting with a DEX.
>
> - We can use block explorers to inspect our on-chain transactions.

The Decentralized Exchange (DEX) is the most commonly used application in the world of `Decentralized Finance` (DeFi) — and for good reason! DEXs enable automated swapping of one cryptocurrency token for another, without need for a mediator. Unlike Centralized Exchanges (CEXs), this type of swap also enables users to swap while retaining full ownership of their assets.

Autonomy, and permissionless protocols, are backbone features of DeFi. They empower DeFi users with true ownership over their digital assets, and open access to fundamental blockchain services 24/7. Anyone with an internet connection can access DeFi, regardless of their personal background, beliefs, or geographical location.

In this handbook entry, we will cover how to use your self-custody wallet to interact with a DEX, with the goal of swapping one token for another. You can learn more about the mechanics, qualities, and risk profile of this technology, and how it compares to CEXs, in our lesson on [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges).

## Choosing a DEX

Selecting an affordable and safe platform is the first step in performing a token swap. In this walkthrough we will be using Velodrome, the most popular DEX on the Optimism network (at time of writing). As you become more confident in blockchain navigation, you’ll learn how to evaluate other exchanges and find the best fit for your needs. Our [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson includes a comprehensive list of qualities to look out for.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

DEXs are a great start to your web3 journey because most dApps follow a user interface layout similar to DEXs, and use similar interactions with your self-custody wallet.

Let’s begin our token swap.

## Performing a Token Swap

**1. Load the dApp:**

Open [Velodrome](https://velodrome.finance/swap?from=eth\&to=0x4200000000000000000000000000000000000042) in a new browser tab.

**2. Connect your wallet:**

Use the standard ‘Connect’ button typically located in the top right corner of any dApp.

If you are on desktop, connect with your browser wallet.

If you are on mobile, you will be prompted to use WalletConnect — the web3 standard for connecting mobile wallets to dApps.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3. Approve the connection:**

Select ‘Connect’ in your wallet application to confirm the site connection. This allows the dApp to see your wallet address and token balances. You haven’t granted any other permissions yet.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4. Check and sign the terms of service (if you accept):**

Many dApps will ask you to sign a message to confirm you have read their terms and conditions. Signing messages doesn’t cost gas, and doesn’t store any information on the blockchain. If you agree with the terms, you can sign the message.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5. Switch to the right network:**

For this walkthrough, make sure your wallet is set to the Optimism network.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6. Customize your swap:**

It’s time to select your desired input and output tokens. In this example, we will be swapping ETH for OP — but you can swap whatever tokens you like!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7. Approve token permissions:**

You will be prompted to set and approve permission for Velodrome to access your wallet funds. We recommend limiting this to your trade size to limit future interactions with your tokens. (Stay tuned for future content on token permissions!)

**8. Confirm the transaction:**

Once you’re happy with your swap quote and settings, you can begin the swap. This step includes confirming on the dApp, and again in your wallet.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9. Check your balance:**

Your transaction should take around 40 seconds to confirm, after which you will see your new token balance in your wallet. If your token type is not displayed, make sure you’ve imported the token addresses.

_Optimism token contract address: 0x4200000000000000000000000000000000000042_

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10. Fetch your transaction hash:**

To complete the quest for our [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson, you’ll need the _**transaction hash of the swap**_ (not to be confused with the hash from your token permission transaction, or your wallet address). A block explorer link will usually appear on the DEX interface, letting you view the confirmed transaction details.. If you missed it, or it’s missing, you’ll find another link in your wallet activity log — tied directly to your trade.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

***

It’s time to explore the world of decentralized trading! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Swapping on a Decentralized Exchange’.

Don’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!

***

## Frequently Asked Questions

### Why does my price quote change a few times every minute?

Price quotes are typically calculated at the time you enter your desired swap into the DEX interface. As time goes by, other users are making swaps and affecting token supply on the exchange. The DEX will regularly refresh your quote to stay up to date.

### How long does it take for a token swap to execute?

The answer depends on a variety of factors, primarily the block speed of the blockchain and how much you underpay or overpay the gas fee. DEX transactions submitted to Ethereum Mainnet typically take between 15 seconds and a couple of minutes to be confirmed. Layer 2 transactions are usually faster!

### Why did my transaction fail?

There are a number of reasons why a transaction could fail: insufficient funds to pay gas, gas limit set too low, or slippage set too low. The best way to begin troubleshooting is to look for User Interface error messages. You can also view your transaction on a block explorer, like [Etherscan](https://optimistic.etherscan.io/), to check if there are any on-chain error messages. We’ll cover more troubleshooting specifics in future content!

### Can I change or remove token permissions?

Granting token permissions to a smart contract can leave our wallet vulnerable to unwanted future interactions, in the case of a smart contract hack. It is possible to change or remove token permissions using apps like [Revoke.cash](https://revoke.cash/). As adjusting permissions costs gas, this precaution can quickly become expensive. This is one of the reasons why many users store their digital assets in one wallet (cold wallet), while interacting with dApps on another (trading wallet). Users transfer assets between them only as necessary.

### Why is the token I'm looking for not available to swap?

If your token isn’t listed by default, you’ll have to paste the token contract address into the list. To find the token contract address, check https\://www\.coingecko.com/ or the official project website.

**Note:** Token addresses can change for a given token on different networks. For example the [USDC contract on Mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) is different than the [USDC contract on Optimism](https://optimistic.etherscan.io/token/0x7f5c764cbc14f9669b88837ca1490cca17c31607). Always verify token addresses before swapping!

***

**Author**

**[Tetranome](https://twitter.com/tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, UI, design, and platform curriculum.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning as much as possible about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.

**Patron**

This unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!
