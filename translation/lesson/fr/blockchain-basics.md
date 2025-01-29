---
TITLE: Les bases de la Blockchain
DESCRIPTION: Découvrez l’architecture fondamentale de la technologie blockchain.
LANGUAGE: Français
WRITERS: iSpeakNerd
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

Après avoir examiné les différentes couches d’une blockchain, nous allons utiliser un outil appelé `block explorer` (explorateur de blocs) pour étudier en détail la structure de la blockchain Ethereum. Nous plongerons dans la blockchain Ethereum pour consulter la **liste** des blocs, les **transactions** à l’intérieur de ces blocs, ainsi que les **détails** de chaque transaction individuelle.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Structure de la Blockchain

Le terme *blockchain* peut être utilisé comme un nom commun — la blockchain Bitcoin — ou comme un adjectif — la technologie blockchain. Dans tous les cas, le mot `blockchain` fait référence à l’infrastructure complète sur laquelle reposent les cryptomonnaies.

En zoomant depuis l’extérieur, on peut distinguer 3 niveaux dans la structure d’une blockchain :

1. La `blockchain` dans son ensemble est constituée de blocs reliés les uns aux autres dans un ordre précis
2. Les `blocs` sont composés de groupes de transactions regroupées
3. Les `transactions` correspondent à des transferts de fonds entre deux `adresses` sur le réseau

Ces trois niveaux forment ensemble un registre cryptographique : un historique inaltérable de toutes les transactions effectuées sur le réseau.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Qu’est-ce qu’une blockchain ?

- [ ] Des groupes de transactions organisées appelées blocs
- [ ] Une liste de montants envoyés entre deux adresses
- [ ] Des blocs reliés les uns aux autres dans une séquence
- [ ] Toutes les réponses ci-dessus

# Examiner le registre

Dans les systèmes monétaires traditionnels, nous faisons confiance à des tiers comme les banques pour tenir à jour le montant d’argent que chacun possède. Mais, pour être vraiment *Bankless*, nous voulons un système qui ne nécessite pas de faire confiance à une entité unique pour gérer le registre.

Le `registre` est la liste de TOUTES les transactions jamais effectuées sur une blockchain. Pour les blockchains `publiques`, tout le monde peut le consulter. Des groupes distincts de transactions du registre forment les blocs qui, réunis, constituent la blockchain.

Lorsque de nouvelles transactions sont ajoutées au registre, les soldes stockés à chaque `adresse` sont mis à jour. Les transactions passées ne peuvent pas être modifiées. C’est un peu comme autoriser tout le monde à consulter, à tout moment et pour toujours, l’historique de toutes les opérations bancaires de chacun.

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

Laquelle ou lesquelles des affirmations suivantes est/sont vraie(s) pour les registres de blockchains publiques ?

- [ ] Toutes les transactions sont publiques et les transactions passées sont inchangeables
- [ ] Le registre indique combien de cryptomonnaies chaque adresse possède actuellement
- [ ] Le registre grandit au fur et à mesure que de nouvelles transactions y sont ajoutées
- [ ] Toutes les réponses ci-dessus

# La décentralisation

Non seulement les transactions incluses dans le registre d’une `blockchain` sont inaltérables, mais elles sont également partagées et distribuées sur un large réseau d’ordinateurs. Pour faire en sorte qu’aucune entité unique ne puisse modifier les données, le registre de la blockchain est stocké sur chaque appareil, appelé `nœud`, du réseau.

Ces données partagées constituent ce qui rend le registre de la blockchain `décentralisé`. Aucune autorité ou entité unique ne contrôle les informations. Les blockchains comme Ethereum sont également dites `publiques`, car leur registre peut être consulté par n’importe qui.

Nous examinerons plus en détail comment les nouvelles données sont ajoutées et comment nous nous assurons que tout le monde dispose de la même copie des données en permanence dans notre prochaine leçon sur la théorie de la Blockchain. Pour cette leçon, retenez simplement que les données du registre sont partagées par chaque ordinateur du réseau Ethereum.

# Knowledge Check 3

Qu’est-ce qui rend une blockchain décentralisée ?

- [ ] Une seule entité peut inscrire des données sur la blockchain
- [ ] Elle répond aux exigences de décentralisation fixées par le gouvernement
- [ ] Aucune autorité ou entité unique ne contrôle le registre ou l’accès à ses données, car il est distribué sur un large réseau d’ordinateurs
- [ ] Le registre est stocké sur un seul serveur sécurisé

# Anatomie d’un bloc

Une caractéristique importante des blockchains est que les données de transaction passées ne peuvent plus être modifiées après avoir été incluses dans un bloc. En effet, chaque bloc possède un `hash de bloc` unique, semblable à une empreinte digitale, qui sert à relier les blocs les uns aux autres dans l’ordre. Personne ne peut modifier les transactions passées sans changer cette empreinte digitale, ainsi que celle de TOUS les blocs suivants, car chaque empreinte dépend de la précédente.

Ainsi, chaque `bloc` n’est rien d’autre qu’un groupe de transactions rassemblées dans un seul fichier, accompagné du `hash` de ce bloc. Les blocs sont enchaînés car chacun se réfère à l’empreinte du bloc précédent, formant ainsi une **block***chain* (chaîne de blocs).

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Quel est le but du *hash* de bloc ?

- [ ] Chiffrer les données du bloc afin que personne ne puisse les lire
- [ ] Relier chaque bloc au précédent et garantir que les données passées ne changent pas
- [ ] S’assurer que les transactions sont envoyées à la bonne adresse
- [ ] S’assurer que la blockchain reste décentralisée

# À l’intérieur d’un bloc

Rappelons que les données d’un `bloc` ne sont qu’un ensemble de transactions regroupées. En examinant un bloc, nous voyons la liste des transactions et quelques informations sur la personne qui a créé le bloc.

Reprenons l’exemple précédent à propos du registre de la blockchain : les deux transactions dont nous avons parlé peuvent se trouver dans un même bloc, ou être réparties sur plusieurs blocs au fil du temps. Mais peu importe le bloc dans lequel elles sont incluses, elles finissent par être ajoutées au registre global de la blockchain.

- Alice envoie 5 ETH à Bob
- Bob envoie 2 ETH à Charlie

Souvenez-vous que chaque bloc doit aussi référencer le `hash` du bloc précédent pour relier la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Quelles informations un bloc contient-il ?

- [ ] Toutes les informations contenues dans les blocs précédents, afin que la blockchain soit toujours à jour
- [ ] Tout ce qui peut être utile à la blockchain, étant donné que la taille d’un bloc est illimitée
- [ ] Les données de transaction et une référence au bloc précédent
- [ ] Toutes les transactions générées dans un laps de temps fixe

# Les transactions individuelles

Les données sur n’importe quelle blockchain correspondent simplement à une liste de `transactions`, c’est-à-dire des enregistrements de transferts de cryptomonnaie entre utilisateurs. Chaque transaction doit être signée par la `signature numérique` de l’expéditeur pour être valide.

C’est exactement ce que vous faites lorsque vous validez une transaction avec un portefeuille : vous la signez avec votre signature numérique pour l’autoriser. Vous pouvez considérer cela comme l’équivalent numérique d’une signature physique sur un chèque, un reçu ou une transaction par carte bancaire.

Les transactions peuvent être simples, comme l’envoi de crypto-actifs, ou plus complexes, par exemple l’échange de crypto-actifs ou même le déploiement d’un code spécial qui s’exécute lorsqu’il est déclenché, appelé `smart contract`.

Enfin, chaque transaction possède un identifiant numérique unique, appelé son `hash de transaction`, que personne d’autre ne partage. Cela permet de référencer facilement une transaction particulière par la suite et garantit que les détails de cette transaction ne puissent pas être modifiés ultérieurement.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Les données sur une blockchain sont simplement une liste de transactions regroupées en blocs. Parmi les exemples de transactions, on trouve :

- [ ] Envoyer ou recevoir des crypto-actifs
- [ ] Modifier la taille d’un bloc
- [ ] Éditer les données passées de la blockchain
- [ ] Toutes les réponses ci-dessus

# Les adresses utilisateurs

Une `adresse` est un identifiant public que tout le monde peut consulter sur la blockchain. Comme pour une adresse e-mail, n’importe qui peut envoyer des fonds à cette adresse, mais seule la personne qui possède la `clé privée` peut déverrouiller et utiliser ces fonds.

Sur Ethereum, une adresse commence toujours par *0x*_________ et comporte 42 caractères alphanumériques, dérivés de la `clé publique` de cette adresse.

Lorsque vous consultez une transaction dans un explorateur de blocs, vous pouvez voir l’adresse d’envoi (From:) et l’adresse de réception (To:). Cela ne révèle pas l’identité des *personnes* qui contrôlent ces adresses, mais permet à tout utilisateur de suivre les déplacements de cryptomonnaie à travers le registre de la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Qu’est-ce qui est vrai à propos des adresses sur la blockchain ?

- [ ] Elles sont les identifiants publics des différentes entités sur une blockchain
- [ ] Elles commencent toujours par *0x* sur Ethereum
- [ ] La personne qui contrôle la clé privée d’une adresse peut utiliser les fonds de cette adresse
- [ ] Toutes les réponses ci-dessus
