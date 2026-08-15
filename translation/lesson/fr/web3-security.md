---
TITLE: Sécurité Web3
DESCRIPTION: Protégez-vous ainsi que votre portefeuille contre les escroqueries les plus courantes dans le web3.
LANGUAGE: Français
EDITORS: Claude (Anthropic AI, 2026 review)
WRITERS:
TRANSLATORS: ChatGPT o1
LINK: https://app.banklessacademy.com/lessons/web3-security
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

La propriété numérique est la nouvelle fonctionnalité de web3. Grâce aux blockchains, aux cryptomonnaies et aux NFT, web3 redonne aux utilisateurs la propriété et le pouvoir. Cette propriété en ligne de produits financiers numériques est nouvelle pour beaucoup, et ce manque d’expérience offre aux personnes malveillantes des opportunités d’escroquer et de voler les actifs des autres. Ces escroqueries fonctionnent particulièrement bien parce que la plupart des gens ne savent tout simplement pas comment elles opèrent.

Cependant, il n’y a pas que le web3 qui souffre d’escroqueries : les services web2 comme l’email et les réseaux sociaux en sont également remplis. De plus, de nombreux outils web3 restent liés à des services web2 tels que les comptes bancaires ou les plateformes d’échange centralisées, d’où l’importance de protéger également ces derniers. Félicitations donc, Explorateur de l’Academy, de prendre le temps de vous armer des connaissances qui vous protégeront lors de votre aventure dans le `web3` !

Cette leçon couvrira :

- La sécurité dans le web2 et le web3.
- Les méthodes les plus courantes de perte de fonds et comment s’en protéger.
- Une stratégie générale pour la sécurité des portefeuilles.
- Comment réagir si vous êtes victime d’une escroquerie.

# L’argent dans le Web2

Dans le web2, les institutions conservent l’argent au nom des utilisateurs. Un utilisateur doit prouver son identité auprès d’une institution pour accéder et utiliser son argent. C’est pareil pour un compte bancaire ou une `plateforme d’échange centralisée` (CEX) : il faut un identifiant et un mot de passe.

Pour qu’un escroc accède à votre argent, il a besoin de cette combinaison identifiant + mot de passe. Étant donné que les institutions sont responsables de protéger votre argent, les transactions frauduleuses peuvent être annulées — comme pour la contestation d’une transaction par carte de crédit.

![](https://app.banklessacademy.com/images/web3-security/money-in-web2-7e1a5fd1.svg)

# L’argent dans le Web3

Dans le web3, l’argent fonctionne différemment. C’est plus proche d’un portefeuille contenant des billets sous clé : une fois l’argent dépensé, il est parti pour de bon. Your `seed phrase` (that special set of secret words) unlocks your `private keys`, so anyone who obtains it controls your wallet. _**Never**_ give it to anyone, and never store it digitally; photos and notes apps can get compromised.

But your seed phrase isn’t the only target: one malicious signature (a transaction or message you approve) can let a scammer drain your tokens without ever seeing your seed phrase. Protect your **seed phrase** _and_ your **signature**.

![](https://app.banklessacademy.com/images/web3-security/money-in-web3-f575b0f6.svg)

# Knowledge Check 1

True or false? Scammers can drain tokens from your wallet by tricking you into signing a malicious transaction or approval, without ever knowing your seed phrase.

- [x] True

> ℹ️ Correct! A malicious signature or token approval can hand over your funds on its own. Protect what you sign as carefully as your seed phrase.

- [ ] Faux

> ℹ️ Try again! Your seed phrase isn’t the only target; a single malicious approval or signature can drain your tokens too.

# Stockage sécurisé de la Seed

Il existe de nombreuses méthodes pour stocker une seed phrase de manière sécurisée, mais un bon point de départ consiste à l’inscrire sur un support physique (papier plastifié ou similaire) et à la conserver dans un coffre-fort résistant à l’eau et au feu chez vous. **Ne** stockez **pas** votre `seed phrase` sous forme de photo ou via d’autres méthodes numériques — même dans un gestionnaire de mots de passe.

Les mauvais endroits pour stocker vos seed phrases incluent :

- Un classeur
- Une application de notes numériques
- Votre lieu de travail
- Une photo numérique

Où que vous la rangiez, assurez-vous d’être la seule personne à y avoir accès et qu’elle soit protégée contre la perte et la destruction. On ne sait jamais ce qui peut arriver plus tard !

# Protégez vos mots de passe

Une bonne gestion des mots de passe est un élément crucial de la navigation quotidienne sur internet.

Les mots de passe doivent être différents pour chaque service web2 utilisé en ligne. Cela inclut des services tels que les courriels, les échanges centralisés et d'autres comptes de service. Qu’une personne obtienne le couple identifiant + mot de passe pour un compte est déjà problématique, mais c’est bien pire si cette même combinaison ouvre la porte à tous vos comptes !

`Password manager` applications like 1Password, Bitwarden, and KeePass securely store and encrypt multiple passwords; they can even generate new high-security passwords and store them automatically. Vous n’avez alors plus qu’à vous souvenir d’un mot de passe « maître ».

Ne **stockez pas** une `seed phrase` web3 dans un gestionnaire de mots de passe ; il suffirait d’une seule faille de ce mot de passe « maître » pour que tous vos actifs web3 soient compromis, sans aucun recours possible.

# Knowledge Check 2

Pourquoi les gestionnaires de mots de passe sont-ils utiles ?

- [ ] Les gens n’ont qu’à retenir leur mot de passe maître pour les utiliser.

> ℹ️ Try again! This is true, but it isn’t the only benefit.

- [ ] Ils génèrent et stockent des mots de passe forts et uniques.

> ℹ️ Try again! This is true, but it isn’t the only benefit.

- [ ] Ils encryptent les mots de passe pour les garder en sécurité.

> ℹ️ Try again! This is true, but it isn’t the only benefit.

- [x] All of the above

> ℹ️ Correct! Password managers generate, encrypt, and store unique passwords for every account. You only remember the master password.

# Authentification à deux facteurs

L’`Authentification à deux facteurs`, également appelée 2FA, est une couche de sécurité supplémentaire pour le web2.

Many people have had their accounts hacked or credentials stolen despite strong passwords. Web2 websites (and even `password managers`) often support 2FA as a second layer: proof from another device or app, in addition to your normal password.

Not all 2FA is equal:

🥉 **SMS codes** are the weakest option: scammers use `social engineering` to “SIM-swap” your phone number onto their own device and receive your codes. Still, SMS beats having no 2FA.

🥈 **Authenticator apps** (like Google Authenticator, 2FAS, or Aegis) generate codes on your device, a solid choice for most accounts.

🥇 **Passkeys and hardware security keys** (like a YubiKey) are the phishing-resistant gold standard: tied to the real website, they simply won’t log in on a fake look-alike.

![](https://app.banklessacademy.com/images/web3-security/two-factor-authentication-7fa9bfdf.svg)

# Knowledge Check 3

Pourquoi l’authentification à deux facteurs est-elle fortement recommandée ?

- [ ] Il est impossible de pirater un compte lorsque 2FA est activé.

> ℹ️ Try again! 2FA greatly improves security, but no method makes an account impossible to hack. SIM-swaps can defeat SMS codes, for example.

- [x] It adds another layer of security to web2 accounts.

> ℹ️ Correct! 2FA requires proof from another device or app on top of your password, so a stolen password alone isn’t enough.

- [ ] Elle renforce les mots de passe.

> ℹ️ Try again! 2FA doesn’t change your password. It adds a second layer of proof on top of it.

- [ ] Toutes les réponses ci-dessus

> ℹ️ Try again! Only one of these statements is true.

# Escroqueries via ingénierie sociale

In both web2 and web3, scammers use `phishing` tactics to trick people into giving up their passwords and seed phrases, or signing a malicious transaction. Souvent, ils se font passer pour un service support proposant de l’aide — « Bonjour, ici le support Metamask » — ou pour un administrateur de communauté — « Nouvelle collection NFT, exclusivement réservée à notre communauté ».

Ils utilisent la `social engineering` pour mettre la pression sur les gens. Exemples :

- « Il ne vous reste plus beaucoup de temps ! » - vous donner l'impression d'être pressé.
- « Félicitations, vous avez gagné notre concours ! » — vous faire croire à un avantage exclusif.
- « Accédez en avant-première à notre pré-mint ! » — générer du `FOMO` chez la personne ciblée.

![](https://app.banklessacademy.com/images/web3-security/social-engineering-scams-73c69132.svg)

# La peur de manquer

Le `FOMO` vient de l’anglais « Fear Of Missing Out », c’est ce sentiment de stress à l’idée de rater un avantage ou une opportunité si l’on n’agit pas **immédiatement**.

La meilleure défense contre le FOMO est de simplement s’éloigner de son ordinateur et de faire une pause. Sous l’effet du stress, on réfléchit moins clairement, c’est pourquoi le FOMO est un outil redoutablement efficace pour les escrocs. En vous retirant de la situation, vous repérez beaucoup plus facilement l’arnaque.

# Knowledge Check 4

Comment les escrocs utilisent-ils l’ingénierie sociale ?

- [ ] En se faisant passer pour une autorité reconnue dans une communauté.

> ℹ️ Try again! This is one tactic, but it isn’t the only one.

- [ ] En mettant la pression sur les délais.

> ℹ️ Try again! This is one tactic, but it isn’t the only one.

- [ ] En proposant des cadeaux ou NFT gratuits pour générer du FOMO.

> ℹ️ Try again! This is one tactic, but it isn’t the only one.

- [x] All of the above

> ℹ️ Correct! Scammers impersonate authority figures, create time pressure, and generate FOMO, all to stop you from thinking clearly.

# Sécurité sur les réseaux sociaux

Scammers love to engage on social media and in the Discord servers of crypto projects, typically moving conversations into direct messages to avoid being spotted by experienced members. Talk in public areas, and _**never**_ give your `seed phrase` to anyone, or sign anything from a link sent in a DM.

Quelques `signaux d’alerte` à repérer sur les réseaux sociaux :

🚩 **Fautes de langue et de grammaire** : confusion entre « ils/elles sont », « il y a/il y avait », etc.

🚩 **FOMO** : « Ne passez pas à côté de cette opportunité ! »

🚩 **Usurpation d’identité** : se faire passer pour un admin, un service de support, Vitalik Buterin, Elon Musk, etc.

🚩 **Rendements garantis** : rien n’est garanti en crypto.

🚩 **Liens et offres non sollicités,** _surtout en message privé_.

![](https://app.banklessacademy.com/images/web3-security/social-media-safety-a76a39f4.svg)

# Bonnes pratiques sur les réseaux sociaux

Quelques réflexes pour rester en sécurité :

✅ Si quelqu’un a besoin de vous envoyer un message privé pour vendre son produit, vous ne le voulez probablement pas.

✅ Vérifiez le nombre de followers ou de membres d’un projet — même si cela ne garantit pas la légitimité, la qualité ou la stabilité dudit projet.

✅ Vérifiez tout auprès d’une source extérieure, comme un autre compte officiel du projet.

✅ En cas de doute, demandez conseil à des membres reconnus d’une grande communauté à laquelle vous faites confiance — et posez vos questions en public.

![](https://app.banklessacademy.com/images/web3-security/social-media-best-practices-48ad350f.svg)

# Scam-Tokens & Address Poisoning

Random tokens or NFTs appearing in your wallet? `Scam-tokens` are transferred to thousands of wallets at once, hoping someone tries to move or sell them, triggering malicious code hidden in the token’s smart contract, or luring victims to a `phishing` website that asks for a `seed phrase` or a malicious signature. The best response: don’t interact with them at all; leave them alone or hide them in your wallet.

A related trick is **address poisoning**: scammers send tiny transfers from an address crafted to look almost identical to one you use, matching its first and last characters. Copy an address from your transaction history later, and you may grab the scammer’s look-alike instead.

Protect yourself:

- Don’t copy addresses from your transaction history.
- Verify more than the first and last few characters.
- Send a small test amount before large transfers.

![](https://app.banklessacademy.com/images/web3-security/scam-tokens-761d5f63.svg)

# Malicious Approvals & Blind Signing

Today, most funds are lost not to stolen seed phrases but to signatures given away. “Wallet drainer” phishing kits present a transaction or message that looks routine, but isn’t:

- **Malicious approvals:** a single approval transaction can give a scammer’s contract unlimited `token allowance` to spend your tokens or NFTs.
- **Signature phishing:** gasless signature approvals (like Permit2) can authorize token transfers, no transaction required.
- **Delegation drains:** a newer wallet feature (EIP-7702) lets one signature install code on your account; drainers abuse this to auto-sweep wallets.

Signing what you don’t understand is called **blind signing**, and even professionals get burned: in February 2025, the Bybit exchange lost roughly $1.5 billion approving a transaction whose display had been tampered with.

Your defenses: slow down, read every signature request, treat “verify your wallet” prompts as hostile, and use a wallet that simulates transactions before you sign.

# Knowledge Check 5

You receive a DM: “Your wallet needs migrating: connect at metamask-upgrade.app and sign to verify your assets.” The site asks you to sign a gasless approval. What’s wrong here?

- [ ] Nothing: signatures are free and can’t move funds.

> ℹ️ Try again! Gasless approval signatures can authorize token transfers all by themselves.

- [ ] It’s only dangerous if you also type in your seed phrase.

> ℹ️ Try again! No seed phrase is needed. The signature itself can grant spending power over your tokens.

- [ ] It’s safe because support teams contact users by direct message.

> ℹ️ Try again! Legitimate support will never DM you first. That’s a classic red flag.

- [x] It’s signature phishing: the signature could drain your tokens.

> ℹ️ Correct! An unrequested DM, urgency, a look-alike URL, and a signature request: this is a wallet drainer.

# Portefeuilles matériels

If you remember from our [Wallet Basics](https://app.banklessacademy.com/lessons/wallet-basics) lesson, a `hardware wallet` keeps your `private keys` on a dedicated device, away from your internet-connected computer. This makes your funds much safer: malware can’t read your keys, and a thief would have to physically steal the device and break into it. Popular options include Ledger, Trezor, and Keystone. Always buy directly from the manufacturer.

You can even use a hardware wallet through browser extension wallets like MetaMask, combining convenience with hardware security. Ledger has [written their own guide](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask) on setting this up.

One limit: a hardware wallet signs whatever you approve, so blind-signing a malicious transaction still loses your funds. Always verify the details on the device’s own screen before confirming.

![](https://app.banklessacademy.com/images/web3-security/hardware-wallets-22a096d4.svg)

# Question de compréhension 6

True or false? A hardware wallet only keeps your funds safe if you verify each transaction before approving it.

- [x] True

> ℹ️ Correct! A hardware wallet protects your keys, but only verifying what you sign protects your funds.

- [ ] False

> ℹ️ Try again! A hardware wallet signs whatever you approve. Blind signing can still drain it.

# Stratégies de portefeuilles

Après avoir ajouté un portefeuille matériel à votre équipement, l’une des meilleures façons de protéger vos fonds est de les répartir dans plusieurs `portefeuilles`. Voici une stratégie de compartimentation utilisant trois portefeuilles distincts :

1. **Social Wallet:** A `hot wallet` holding little to no funds, used for logins, minting, and trying out new dapps. Assume anything in it could be lost.
2. **Portefeuille de Trading :** Un `hot wallet` pour le trading et toutes les activités nécessitant de la réactivité pour bouger rapidement des fonds.
3. **HODL Wallet:** A `hardware wallet` for the long-term `HODL`: these are funds intended to hold for a long time. _**Never**_ use this wallet to interact with smart contracts or unfamiliar websites.

👍 **AVANTAGES :** Cette séparation garantit que, si une escroquerie survient, elle ne menace que les fonds de **ce** portefeuille et non **tous** vos fonds.

👎 **INCONVÉNIENTS :** C’est plus complexe à gérer, mais de nombreuses applications de portefeuille permettent de nommer vos portefeuilles pour vous y retrouver.

![](https://app.banklessacademy.com/images/web3-security/wallet-strategies-2b743061.svg)

# Knowledge Check 7

Nous vous recommandons de garder vos fonds _______________ pour une plus grande sécurité.

- [ ] stockés dans plusieurs airdrops

> ℹ️ Try again! Airdrops are token giveaways, not a place to store funds.

- [ ] bloqués dans plusieurs NFTs

> ℹ️ Try again! NFTs are assets themselves, not a security strategy for your funds.

- [x] separated in multiple wallets

> ℹ️ Correct! Compartmentalizing funds across separate wallets means a scam only threatens the funds in that particular wallet.

- [ ] liquides dans plusieurs adresses

> ℹ️ Try again! It’s not about liquidity. Separating funds between distinct wallets is what limits the damage a scam can do.

# Récupérer après une escroquerie Web2

Nous espérons que vous n’êtes pas déjà tombé(e) dans le piège d’un escroc. Si c’est le cas, voici quelques étapes à suivre pour sécuriser à nouveau vos comptes.

Pour une escroquerie impliquant un service web2, comme Gmail ou Discord, vous devriez :

- Changer le mot de passe du compte concerné.
- Lorsque c’est possible, utilisez la fonction « se déconnecter de partout » pour expulser l’escroc de votre compte.
- Enable `2FA`: ideally a passkey or hardware security key, otherwise an authenticator app.
- Signalez l’escroquerie au service concerné.
- Assurez-vous que votre compte email est également sécurisé.
- Discutez de l’incident avec des amis ou des membres de communauté de confiance.

# Récupérer après une escroquerie Web3

Sur Ethereum, il faut accorder explicitement aux contrats l’autorisation de dépenser vos tokens. The token `allowance` is how much you’ve allowed a specific contract to spend. Keeping allowances low reduces the risk to your assets.

Dans le web3, il n’existe pas d’entité responsable à qui signaler les escrocs, mais vous pouvez tout de même agir :

- Déplacez immédiatement les fonds toujours présents dans le portefeuille compromis vers une nouvelle adresse, **assurez-vous que cette nouvelle adresse ait une seed phrase différente.**
- Review and revoke your token `allowances` with [revoke.cash](https://revoke.cash) (works across many networks) or [etherscan.io/tokenapprovalchecker](https://etherscan.io/tokenapprovalchecker). Revoking costs gas; revoke.cash has a [walkthrough guide](https://revoke.cash/learn/approvals/how-to-revoke-token-approvals).
- Also check revoke.cash’s “Delegations” tab for any wallet delegation you don’t recognize, and remove it from inside your wallet app.
- Use a `hardware wallet` in the future, and verify everything you sign.
- Prévenez les autres en signalant l’escroquerie à la communauté concernée.
- Discutez de l’incident avec des amis ou des membres de communauté de confiance pour voir comment vous protéger et protéger les autres à l’avenir.
