---
TITLE: Les bases de la blockchain
DESCRIPTION: Découvrez l'architecture fondamentale de la technologie blockchain.
LANGUAGE: Français
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
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

La technologie `blockchain` est une façon révolutionnaire de stocker et de suivre des données, tout en les rendant accessibles à tous. Elle organise les données dans une liste publique unique de toutes les transactions passées, que chacun peut consulter mais que personne ne peut modifier. Cette liste publique s'appelle le `registre` de la blockchain.

Après avoir exploré les couches d'une blockchain, vous comprendrez la structure qu'affiche un outil appelé `explorateur de blocs` : la **liste** des blocs, les **transactions** qu'ils contiennent, et le **détail** de chaque transaction. Pour le voir en action, essayez [Etherscan](https://etherscan.io/), un explorateur populaire pour Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Structure de la blockchain

Le mot blockchain peut s'employer comme nom (la blockchain Bitcoin) ou comme adjectif (la technologie blockchain). Dans les deux cas, `blockchain` désigne toute la structure sur laquelle reposent les cryptomonnaies.

En zoomant depuis l'extérieur, une blockchain comporte trois niveaux de structure :

1. La `blockchain` dans son ensemble est faite de blocs reliés les uns aux autres dans l'ordre
2. Les `blocs` sont des groupes de transactions rassemblées
3. Les `transactions` sont des transferts de valeur, ou des instructions envoyées à des programmes, entre les `adresses` du réseau

Ces trois niveaux forment ensemble un registre cryptographique : un historique inaltérable de toutes les transactions effectuées sur le réseau.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Qu'est-ce qu'une blockchain ?

- [ ] Des groupes de transactions organisés appelés blocs

> ℹ️ Réessayez ! Les blocs font partie de la structure, mais ce n'est pas la seule bonne réponse.

- [ ] Un registre partagé que chacun peut consulter mais que personne ne peut modifier

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule bonne réponse.

- [ ] Des blocs reliés les uns aux autres dans l'ordre

> ℹ️ Réessayez ! Cela décrit la chaîne de blocs, mais ce n'est pas la seule bonne réponse.

- [x] Toutes les réponses ci-dessus

> ℹ️ Correct ! Les trois sont vraies : une blockchain est un registre partagé et inaltérable de transactions groupées en blocs, reliés dans l'ordre.

# Examiner le registre

Dans les systèmes monétaires habituels, nous faisons confiance à des tiers comme les banques pour tenir le compte de ce que possède chacun. Mais pour être vraiment bankless, nous voulons un système qui ne nous oblige pas à faire confiance à une seule entité pour gérer le registre.

Le `registre` est la liste de TOUTES les transactions jamais réalisées sur une blockchain, et chacun peut la consulter sur les blockchains `publiques`. Des groupes distincts de transactions du registre forment les blocs qui, ensemble, composent la blockchain.

Quand de nouvelles transactions sont ajoutées au registre, les soldes de chaque `adresse` sont mis à jour ; les transactions passées ne peuvent pas être modifiées. C'est comme si chacun pouvait consulter à tout moment l'historique complet du compte bancaire de tout le monde.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Les transactions dans le registre

Prenons quelques exemples de transactions :

- Alice envoie 5 ETH à Bob
- Bob envoie 2 ETH à Charlie

Chaque transaction indique la _variation_ du montant de cryptomonnaie pour chaque adresse : le résultat de toutes les transactions EST donc le montant que possède chaque adresse.

---

⇒ Alice a perdu 5 ETH

⇒ Bob a gagné 3 ETH au total (5 reçus, 2 envoyés)

⇒ Charlie a gagné 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Parmi les affirmations suivantes, laquelle est vraie pour les registres des blockchains publiques ?

- [ ] Toutes les transactions sont publiques et les transactions passées sont immuables

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Le registre indique combien de cryptomonnaie possède actuellement chaque adresse

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Le registre grandit à mesure que de nouvelles transactions s'y ajoutent

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [x] Toutes les réponses ci-dessus

> ℹ️ Correct ! Le registre est public, immuable, tient les soldes à jour et grandit à chaque nouvelle transaction.

# La décentralisation

Les transactions inscrites dans un registre `blockchain` sont non seulement immuables, elles sont aussi partagées et réparties sur un vaste réseau d'ordinateurs. Pour qu'aucune entité ne puisse modifier les données à elle seule, des copies du registre sont conservées sur de nombreux ordinateurs du réseau, appelés `nœuds`.

Ce partage des données est ce qui rend le registre `décentralisé`. Aucune autorité ni entité unique ne contrôle les données. Des blockchains comme Ethereum sont aussi `publiques`, car chacun peut consulter le registre.

Pour cette leçon, retenez simplement que les données du registre sont partagées entre les nombreux ordinateurs qui font tourner le réseau Ethereum.

# Knowledge Check 3

Qu'est-ce qui rend une blockchain décentralisée ?

- [ ] Une seule entité peut écrire dans la blockchain

> ℹ️ Réessayez ! Une entité unique aux commandes, c'est l'inverse de la décentralisation.

- [ ] Elle respecte des critères de décentralisation fixés par l'État

> ℹ️ Réessayez ! La décentralisation vient de la conception du réseau, pas d'une validation officielle.

- [x] Aucune entité ne contrôle le registre, stocké sur de nombreux ordinateurs

> ℹ️ Correct ! Conserver des copies du registre sur de nombreux nœuds fait qu'aucune entité ne peut contrôler ou modifier les données.

- [ ] Le registre est stocké sur un seul serveur sécurisé

> ℹ️ Réessayez ! Un serveur unique serait un point de contrôle central. Les copies du registre sont réparties sur de nombreux nœuds.

# Anatomie d'un bloc

Une caractéristique importante des blockchains est que les données d'une transaction passée ne peuvent plus être modifiées une fois inscrites dans un bloc. Chaque bloc possède en effet un `hash de bloc` unique, comme une empreinte digitale, qui sert à relier les blocs les uns après les autres. Personne ne peut modifier une transaction passée sans changer cette empreinte, ainsi que celle de TOUS les blocs suivants, puisque chaque empreinte dépend de la précédente.

Chaque `bloc` est donc simplement un groupe de transactions, plus une empreinte unique (son `hash de bloc`) calculée à partir de son contenu. Les blocs sont enchaînés parce que chacun renvoie à l'empreinte du bloc précédent, ce qui forme une _**chaîne**_ continue.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

À quoi sert un hash de bloc ?

- [ ] À chiffrer les données du bloc pour que personne ne puisse les lire

> ℹ️ Réessayez ! Les données du bloc restent lisibles publiquement. Le hash est une empreinte, pas un chiffrement.

- [x] À relier les blocs entre eux et rendre les transactions passées immuables

> ℹ️ Correct ! Chaque bloc renvoie à l'empreinte du précédent : modifier une donnée passée casserait tous les blocs suivants.

- [ ] À garantir que les transactions arrivent à la bonne adresse

> ℹ️ Réessayez ! Ce sont les adresses qui déterminent la destination des fonds. Le hash de bloc relie les blocs.

- [ ] À garantir que la blockchain reste décentralisée

> ℹ️ Réessayez ! La décentralisation vient de la répartition du registre sur de nombreux nœuds, pas du hash de bloc.

# À l'intérieur d'un bloc

Rappelez-vous : les données d'un `bloc` sont simplement un groupe de transactions. En regardant à l'intérieur d'un bloc, on voit une liste de transactions et quelques informations sur celui qui l'a créé.

Dans notre exemple précédent, ces deux transactions pourraient être regroupées dans un même bloc, ou réparties dans plusieurs blocs au fil du temps. Quel que soit le bloc qui les contient, elles finissent toutes par être ajoutées au registre.

- Alice envoie 5 ETH à Bob
- Bob envoie 2 ETH à Charlie

Rappelez-vous aussi que chaque bloc doit renvoyer au `hash de bloc` du bloc précédent pour relier la chaîne.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Quelles informations un bloc contient-il ?

- [ ] Toutes les informations contenues dans les blocs précédents

> ℹ️ Réessayez ! Un bloc renvoie seulement au hash du bloc précédent. Il ne recopie pas toutes les données passées.

- [ ] Tout ce qui concerne la blockchain, car la taille d'un bloc est illimitée

> ℹ️ Réessayez ! Un bloc est un groupe défini de transactions, pas un contenant illimité.

- [x] Des données de transaction et une référence au bloc précédent

> ℹ️ Correct ! Un bloc est un groupe de transactions accompagné du hash du bloc précédent, ce qui enchaîne les blocs.

- [ ] Toutes les transactions générées pendant une durée fixe

> ℹ️ Réessayez ! Les transactions peuvent être regroupées dans un bloc ou réparties sur plusieurs blocs au fil du temps.

# Les transactions individuelles

Les données d'une blockchain sont simplement une liste de `transactions`, l'enregistrement de mouvements de monnaie entre utilisateurs. Chaque transaction doit être signée par la `signature numérique` de l'expéditeur pour être valide.

C'est ce que vous faites lorsque vous confirmez une transaction avec un portefeuille : vous la signez pour l'autoriser. Voyez cela comme l'équivalent numérique de la signature d'un chèque, d'un reçu ou d'un paiement par carte.

Les transactions peuvent être simples, comme l'envoi d'actifs crypto, ou plus complexes, comme un échange d'actifs ou même le déploiement de code qui s'exécute quand il est déclenché : les `smart contracts`.

Enfin, chaque transaction possède un identifiant numérique unique, son `hash de transaction`, que nulle autre ne partage. Cela permet de s'y référer facilement plus tard et garantit que ses détails ne pourront plus être modifiés.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Les données d'une blockchain sont simplement une liste de transactions groupées en blocs. Parmi ces exemples, lequel en est une ?

- [x] Envoyer ou recevoir des actifs crypto

> ℹ️ Correct ! Les transactions enregistrent des mouvements de monnaie entre utilisateurs, du simple transfert à l'interaction avec un smart contract.

- [ ] Modifier la taille du bloc

> ℹ️ Réessayez ! La taille d'un bloc n'est pas quelque chose qu'une transaction peut changer.

- [ ] Modifier des données passées de la blockchain

> ℹ️ Réessayez ! Les données passées ne peuvent pas être modifiées. C'est une caractéristique fondamentale des blockchains.

- [ ] Toutes les réponses ci-dessus

> ℹ️ Réessayez ! Une seule des réponses ci-dessus est une transaction valide.

# Les adresses des utilisateurs

Une `adresse` est un identifiant public que chacun peut consulter sur la blockchain. Comme une adresse e-mail, tout le monde peut y envoyer des fonds, mais seule la personne qui détient la `clé privée` peut débloquer et utiliser les fonds qui s'y trouvent.

Sur Ethereum, une adresse commence toujours par \_0x\_\_\_\_\_\_\_\_\_\_ et compte 42 caractères, chiffres et lettres, dérivés de la `clé publique` de cette adresse.

En consultant une transaction dans un explorateur de blocs, on voit les adresses De : et Vers :. Cela ne dit pas qui sont les _personnes_ derrière ces adresses, mais permet à chacun de suivre les mouvements de cryptomonnaie dans le registre.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Qu'est-ce qui est vrai à propos des adresses blockchain ?

- [ ] Ce sont les identifiants publics des différentes entités d'une blockchain

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Sur Ethereum, elles commencent toujours par _0x_

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Celui qui détient la clé privée peut utiliser les fonds de cette adresse

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [x] Toutes les réponses ci-dessus

> ℹ️ Correct ! Les adresses sont des identifiants publics, commencent par 0x sur Ethereum, et leurs fonds sont débloqués par la clé privée.
