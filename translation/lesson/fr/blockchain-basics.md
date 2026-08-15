---
TITLE: Les bases de la Blockchain
DESCRIPTION: Découvrez l’architecture fondamentale de la technologie blockchain.
LANGUAGE: Français
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: ChatGPT o1
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

La technologie de la `blockchain` représente une manière révolutionnaire de stocker et de suivre des données, tout en rendant ces données accessibles à tout le monde. C’est une méthode d’organisation des informations en une liste publique unique de toutes les transactions historiques, que chacun peut consulter mais qu’aucun utilisateur ne peut modifier. Cette liste publique de transactions est collectivement appelée le `registre` (ledger) de la blockchain.

After examining the layers of a blockchain, you will understand the structure that a blockchain tool called a `block explorer` displays: the **list** of blocks, the **transactions** within those blocks, and the **details** of each individual transaction. To see it in action, try [Etherscan](https://etherscan.io/), a popular block explorer for Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Structure de la Blockchain

The term blockchain can be used as a noun (the Bitcoin blockchain) or as an adjective (blockchain technology). Dans tous les cas, le mot `blockchain` fait référence à l’infrastructure complète sur laquelle reposent les cryptomonnaies.

En zoomant depuis l’extérieur, on peut distinguer 3 niveaux dans la structure d’une blockchain :

1. La `blockchain` dans son ensemble est constituée de blocs reliés les uns aux autres dans un ordre précis
2. Les `blocs` sont composés de groupes de transactions regroupées
3. `Transactions` are transfers of value, or instructions to programs, between `addresses` on the network

Ces trois niveaux forment ensemble un registre cryptographique : un historique inaltérable de toutes les transactions effectuées sur le réseau.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Qu’est-ce qu’une blockchain ?

- [ ] Des groupes de transactions organisées appelées blocs

> ℹ️ Try again! Blocks are part of the structure, but they aren’t the only correct answer.

- [ ] A shared record anyone can view but no one can edit

> ℹ️ Try again! This is true, but it isn’t the only correct answer.

- [ ] Des blocs reliés les uns aux autres dans une séquence

> ℹ️ Try again! This describes the chain of blocks, but it isn’t the only correct answer.

- [x] All of the above

> ℹ️ Correct! All three are true: a blockchain is a shared, uneditable record of transactions grouped into blocks, linked in sequence.

# Examiner le registre

Dans les systèmes monétaires traditionnels, nous faisons confiance à des tiers comme les banques pour tenir à jour le montant d’argent que chacun possède. Mais, pour être vraiment *Bankless*, nous voulons un système qui ne nécessite pas de faire confiance à une entité unique pour gérer le registre.

Le `registre` est la liste de TOUTES les transactions jamais effectuées sur une blockchain. Pour les blockchains `publiques`, tout le monde peut le consulter. Des groupes distincts de transactions du registre forment les blocs qui, réunis, constituent la blockchain.

Lorsque de nouvelles transactions sont ajoutées au registre, les soldes stockés à chaque `adresse` sont mis à jour. Les transactions passées ne peuvent pas être modifiées. It’s like letting anyone look at everyone’s all-time bank account transaction history, at any time.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Les transactions sur le registre

Observons quelques transactions d’exemple :

- Alice envoie 5 ETH à Bob
- Bob envoie 2 ETH à Charlie

Les transactions individuelles montrent la *variation* du montant de cryptomonnaie pour chaque adresse. Ainsi, la somme de toutes les transactions correspond au montant final de cryptomonnaie détenu par chaque adresse.

---

⇒ Alice a perdu 5 ETH ⇒ Bob a gagné au total 3 ETH (reçu 5, envoyé 2) ⇒ Charlie a gagné 2 ETH

⇒ Bob a gagné 3 ETH au total (reçu 5, envoyé 2)

⇒ Charlie a gagné 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Which of the following is true for public blockchain ledgers?

- [ ] Toutes les transactions sont publiques et les transactions passées sont inchangeables

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Le registre indique combien de cryptomonnaies chaque adresse possède actuellement

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Le registre grandit au fur et à mesure que de nouvelles transactions y sont ajoutées

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! The ledger is public, unchangeable, keeps address balances up to date, and grows with every new transaction.

# La décentralisation

Non seulement les transactions incluses dans le registre d’une `blockchain` sont inaltérables, mais elles sont également partagées et distribuées sur un large réseau d’ordinateurs. To make sure that no single entity has the power to change the data, copies of the blockchain ledger are stored on many computers, called `nodes`, across the network.

Ces données partagées constituent ce qui rend le registre de la blockchain `décentralisé`. Aucune autorité ou entité unique ne contrôle les informations. Les blockchains comme Ethereum sont également dites `publiques`, car leur registre peut être consulté par n’importe qui.

For this lesson, just remember that the ledger data is shared across the many computers running the Ethereum network.

# Knowledge Check 3

Qu’est-ce qui rend une blockchain décentralisée ?

- [ ] Une seule entité peut inscrire des données sur la blockchain

> ℹ️ Try again! A single entity in control is the opposite of decentralization.

- [ ] Elle répond aux exigences de décentralisation fixées par le gouvernement

> ℹ️ Try again! Decentralization comes from the network’s design, not from government approval.

- [x] No single entity controls the ledger, stored on many computers

> ℹ️ Correct! Storing copies of the ledger on many nodes means no single entity has the power to control or change the data.

- [ ] Le registre est stocké sur un seul serveur sécurisé

> ℹ️ Try again! A single server would be a central point of control. Copies of the ledger are stored on many nodes.

# Anatomie d’un bloc

Une caractéristique importante des blockchains est que les données de transaction passées ne peuvent plus être modifiées après avoir été incluses dans un bloc. En effet, chaque bloc possède un `hash de bloc` unique, semblable à une empreinte digitale, qui sert à relier les blocs les uns aux autres dans l’ordre. Personne ne peut modifier les transactions passées sans changer cette empreinte digitale, ainsi que celle de TOUS les blocs suivants, car chaque empreinte dépend de la précédente.

So each `block` is simply a group of transactions, plus a unique fingerprint (its `block hash`) computed from the block’s contents. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Quel est le but du *hash* de bloc ?

- [ ] Chiffrer les données du bloc afin que personne ne puisse les lire

> ℹ️ Try again! Block data stays publicly readable. The hash is a fingerprint, not encryption.

- [x] To link blocks together and keep past transaction data unchangeable

> ℹ️ Correct! Each block references the previous block’s fingerprint, so changing past data would break every block that follows.

- [ ] S’assurer que les transactions sont envoyées à la bonne adresse

> ℹ️ Try again! Addresses handle where funds go. The block hash links blocks together.

- [ ] S’assurer que la blockchain reste décentralisée

> ℹ️ Try again! Decentralization comes from distributing the ledger across many nodes, not from the block hash.

# À l’intérieur d’un bloc

Rappelons que les données d’un `bloc` ne sont qu’un ensemble de transactions regroupées. En examinant un bloc, nous voyons la liste des transactions et quelques informations sur la personne qui a créé le bloc.

Reprenons l’exemple précédent à propos du registre de la blockchain : les deux transactions dont nous avons parlé peuvent se trouver dans un même bloc, ou être réparties sur plusieurs blocs au fil du temps. Mais peu importe le bloc dans lequel elles sont incluses, elles finissent par être ajoutées au registre global de la blockchain.

- Alice envoie 5 ETH à Bob
- Bob envoie 2 ETH à Charlie

Souvenez-vous que chaque bloc doit aussi référencer le `hash` du bloc précédent pour relier la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

What information is contained in a block?

- [ ] All the information contained in previous blocks

> ℹ️ Try again! A block only references the previous block’s hash. It doesn’t copy all past data.

- [ ] Tout ce qui peut être utile à la blockchain, étant donné que la taille d’un bloc est illimitée

> ℹ️ Try again! A block is a discrete group of transactions, not an unlimited container.

- [x] Transaction data and a reference to the previous block

> ℹ️ Correct! A block is a group of transactions plus the previous block’s hash, which chains the blocks together.

- [ ] Toutes les transactions générées dans un laps de temps fixe

> ℹ️ Try again! Transactions can be grouped into one block or spread across multiple blocks over time.

# Les transactions individuelles

Les données sur n’importe quelle blockchain correspondent simplement à une liste de `transactions`, c’est-à-dire des enregistrements de transferts de cryptomonnaie entre utilisateurs. Chaque transaction doit être signée par la `signature numérique` de l’expéditeur pour être valide.

C’est exactement ce que vous faites lorsque vous validez une transaction avec un portefeuille : vous la signez avec votre signature numérique pour l’autoriser. Vous pouvez considérer cela comme l’équivalent numérique d’une signature physique sur un chèque, un reçu ou une transaction par carte bancaire.

Les transactions peuvent être simples, comme l’envoi de crypto-actifs, ou plus complexes, par exemple l’échange de crypto-actifs ou même le déploiement d’un code spécial qui s’exécute lorsqu’il est déclenché, appelé `smart contract`.

Enfin, chaque transaction possède un identifiant numérique unique, appelé son `hash de transaction`, que personne d’autre ne partage. Cela permet de référencer facilement une transaction particulière par la suite et garantit que les détails de cette transaction ne puissent pas être modifiés ultérieurement.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Les données sur une blockchain sont simplement une liste de transactions regroupées en blocs. Parmi les exemples de transactions, on trouve :

- [x] Sending or receiving crypto assets

> ℹ️ Correct! Transactions record currency moving between users, from simple transfers to smart contract interactions.

- [ ] Modifier la taille d’un bloc

> ℹ️ Try again! Block size isn’t something a transaction can change.

- [ ] Éditer les données passées de la blockchain

> ℹ️ Try again! Past blockchain data cannot be changed. That’s a core feature of blockchains.

- [ ] Toutes les réponses ci-dessus

> ℹ️ Try again! Only one of the above is a valid blockchain transaction.

# Les adresses utilisateurs

Une `adresse` est un identifiant public que tout le monde peut consulter sur la blockchain. Comme pour une adresse e-mail, n’importe qui peut envoyer des fonds à cette adresse, mais seule la personne qui possède la `clé privée` peut déverrouiller et utiliser ces fonds.

On Ethereum, an address always starts with \_0x\_\_\_\_\_\_\_\_\_\_ and is 42 characters of numbers and letters derived from the `public key` of that address.

Lorsque vous consultez une transaction dans un explorateur de blocs, vous pouvez voir l’adresse d’envoi (From:) et l’adresse de réception (To:). Cela ne révèle pas l’identité des *personnes* qui contrôlent ces adresses, mais permet à tout utilisateur de suivre les déplacements de cryptomonnaie à travers le registre de la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Qu’est-ce qui est vrai à propos des adresses sur la blockchain ?

- [ ] Elles sont les identifiants publics des différentes entités sur une blockchain

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Elles commencent toujours par *0x* sur Ethereum

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Whoever controls the private key can use the funds at that address

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! Addresses are public identifiers, start with 0x on Ethereum, and their funds are unlocked by the private key.
