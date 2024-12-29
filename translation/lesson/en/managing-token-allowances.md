---
TITLE: Managing Token Allowances
DESCRIPTION: Protect your wallet from unwanted smart contract interactions.
LANGUAGE: English
WRITERS: estmcmxci, Tetranome
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/managing-token-allowances
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

---
## Key Takeaways

> * Token allowances refer to permissions granted to `smart contracts` to spend tokens from a wallet without further approval.
>
> * They can be exploited by malicious actors if the user is not aware permissions are in place.
>
> * Tools like Revoke.cash allow users to easily to inspect and revoke token allowances.

## Introduction

DeFi grants users control over their assets, including their `private keys`, offering unprecedented sovereignty and authority over their funds. However, with great power comes greater responsibility, requiring users to take full charge of the safety and management of their assets.

There are four common categories of scams that DeFi users should be aware of:

* **Seed Phrase Compromise:** Attackers attempt to deceive users into revealing their seed phrases, which would give them unauthorized access to funds. With your seed phrase, an attacker can drain all your funds and continue doing so if you deposit additional funds into the wallet. Unfortunately, there is no way to recover from this situation, and the only solution is to create a completely new wallet with a new `seed phrase`.

* **Direct ETH Transfers:** Scammers can conceal ETH transfers by either requesting an “eth_sign” signature or disguising it as a function call, such as “Security Update.” Falling for this scam means you won’t be able to recover your funds, but you can still safely use your wallet for other transactions.

* **NFT Marketplace Listings:** Be cautious of fake listings and malicious contracts that exploit the allowances you grant to marketplaces like OpenSea. Scammers may trick you into signing an `offchain` message that lists your approved `NFTs` for sale, with no actual token transaction taking place.

* **Token Allowances:** Attackers may manipulate permissions to gain access to more funds than initially approved. “Approvals” are on-chain transactions that grant access to your tokens or NFTs. “Permits” offer the same access but only require an off-chain signature.

  As smart contracts gain popularity, `token allowances` become necessary to enable trusted contracts to execute transactions without exposing private keys. Token allowances allow dApps to automatically move tokens in your wallet on your behalf. While this convenience boosts efficiency, it also exposes users to potential attack vectors through scams and unauthorized access.

In this article, we’ll discuss ‘Token Allowances’ and introduce a community tool built to help manage your permissions.

## Token Allowances: Understanding, Managing, and Ensuring Safety

Token allowances are permissions given in advance to smart contracts to spend tokens from a wallet. They serve a crucial role in facilitating transactions without requiring explicit permission every time for direct asset transfers from the wallet. When misused, however, token allowances can become an attack vector for the unsuspecting. To address this risk, it’s important that DeFi users exercise caution, educate themselves on the security landscape, and understand how token allowances actually work.

There are two steps involved when granting permissions to a third-party contract:

1. Wallet permission: When connecting your wallet to a dApp, you grant its smart contract permission to access your wallet’s `public key`, view your balances, and monitor your wallet activity.

2. Token approval: Once you’ve granted this access to your wallet, you then approve your tokens to be moved on your behalf in order to complete transactions.

By proactively managing token allowances, users can ensure that no contract withdraws more than the initially specified amount from their wallet. Luckily, there are community tools built to help give DeFi users confidence and peace of mind.

## Walkthrough: Using Revoke.cash

[Revoke.cash](https://revoke.cash/) empowers users to easily manage their token allowances through a simple website that helps inspect and monitor allowances given to different dApps. Let’s walkthrough how you can use this powerful community tool to help you safeguard your assets and take back control of your wallet.

**1\. Connect your wallet**:

To begin the process of revoking your token allowances, head to [Revoke.cash](http://revoke.cash/) and click on “Connect Wallet” located in the top-right corner. Alternatively, you can manually enter your wallet public address in the search bar. Once the loading is complete, you’ll see a list of all your token approvals on that network.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Inspect your allowances**:

Once you have connected your wallet, you can inspect your existing approvals. You can sort, filter, or search for specific approvals based on the authorized spender address. Sorting by “Newest to Oldest” is particularly useful if you suspect a malicious approval recently. Use the network selection, sorting, and filtering options provided to gain an overview of token allowances you have granted across various networks.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Revoke undesired allowances:**

Once you identify the approvals you want to revoke, simply click the “Revoke” button next to each of them. Optionally, you can update the approval to a different amount by clicking the pencil icon next to the approved amount if you still require the approval in the future but wish to reduce your risk.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

It might be in your best interest to to revoke or adjust a token allowance if:

1. A recently deployed smart contract is exploited and creates a vulnerability in a `decentralized exchange` you regularly use.

   Earlier this year, popular `DEX` SushiSwap suffered a similar exploit, when \~$3.5M was stolen from users. Affected users remained at risk if they hadn’t revoked their token allowance.

2. A malicious governance proposal updates several contracts with the intent of draining users’ funds.

   More than $2.5M in assets were compromised when Atlantis Loans, a `DeFi` protocol on a BNB chain, executed a governance proposal that targeted several contracts. Users who managed their approval limit mitigated the risk of their wallets being fully drained by the malicious proposal.


---

It’s time to strengthen our wallet defenses! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Managing Token Allowances’.

Don’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!


---

## FAQ

### When should I use Revoke.cash?

Use Revoke.cash periodically, especially during periods when you are not actively using a dApp, particularly for NFT marketplaces. Limiting approvals lessens the risk of funds loss due to hacks, exploits, or phishing scams. By sorting your approvals to show the most recent, you can identify the suspicious approvals and revoke them promptly, mitigating further damage.

### Does disconnecting my wallet protect me from approval exploits?

Disconnecting your wallet from a dApp does not protect you from exploits, approvals or otherwise. The token approvals you previously granted remain active even after disconnecting, because they are stored onchain.

### How can I avoid token allowance exploits and similar risks?

A proactive approach to token allowances includes:

* granting allowances only to trusted dApps.

* periodically reviewing token allowances.

* removing unnecessary or suspicious allowances.

* staying informed about dApps’ security updates.

Consider using third-party tools like the Revoke.cash [browser extension](https://revoke.cash/extension) — it acts as a proactive measure against potential threats. The extension warns you if you are about to sign something potentially harmful, protecting you from phishing scams or other malicious activities.

### Can I recover funds with Revoke.cash?

Unfortunately, Revoke.cash cannot recover stolen funds. It serves as a preventive tool to reduce the likelihood of becoming a victim of approval exploits. However, revoking the approvals used to steal your funds can prevent further theft.

### Why does my wallet keep getting drained each time I top it up?

Your wallet may contain a “sweeper bot,” a script that monitors and acts on transactions from a compromised wallet. When it detects such transactions, the bot initiates a new transaction before the original one completes, allowing it to rapidly transfer any new deposits out. If your wallet has such a “sweeper bot” stealing incoming ETH, it means your seed phrase is compromised. Revoking approvals won’t improve your wallet’s security. The best course of action is to abandon the compromised wallet and create a new one.


---

**Author**

**[Marcus](https://twitter.com/estmcmxci)** publishes the ENS DAO Newsletter. He researches how surplus revenue generated from protocol fees can subsidize application layer development and other open source infrastructure.

**Editors**

**[Tetranome](https://twitter.com/Tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.

**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.

**Patron**

This unsponsored article is part of your free Bankless Academy education. \
Collect the article to support future content!