---
TITLE: Les blockchains Layer 1
DESCRIPTION: Comprenez le fonctionnement des blockchains Layer 1 et découvrez leurs limites !
LANGUAGE: Français
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

Des problèmes apparaissent quand plus d'utilisateurs veulent se servir d'un réseau `blockchain` qu'il ne peut en absorber. Une forte demande d'`espace de bloc` peut être passagère, ou durer aussi longtemps que l'envie d'utiliser la blockchain. En période de forte demande, les utilisateurs enchérissent les uns contre les autres pour faire traiter leurs transactions rapidement, les frais montent, et ceux qui ont le moins de capital sont écartés.

Cette leçon explique pourquoi Ethereum et les autres blockchains sont soumis au `trilemme de la blockchain`, comment ce trilemme est à l'origine des problèmes décrits plus haut, et ce qu'il implique pour les projets d'Ethereum. Nous verrons les compromis retenus par plusieurs blockchains, et ce qu'ils signifient pour les Explorateurs de l'Academy.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Le trilemme de la blockchain

Comme le suggère le mot **tri**lemme, trois qualités des blockchains entrent en concurrence et empêchent de les optimiser toutes les trois en même temps.

Ce sont : la `sécurité`, la `scalabilité` et la `décentralisation`.

Pour servir de socle impartial à un système monétaire mondial, une blockchain devrait exceller sur les trois. Un système monétaire doit être à l'abri de la fraude, protégé de la censure par la décentralisation, et capable de passer à l'échelle pour répondre aux besoins de plus de 8 milliards d'êtres humains.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Le trilemme de la blockchain décrit la relation entre :

- [ ] Ethereum, Bitcoin et les altcoins

> ℹ️ Réessayez ! Le trilemme oppose des qualités au sein d'une blockchain, pas des blockchains entre elles.

- [ ] la sécurité, la censure et la fraude

> ℹ️ Réessayez ! La sécurité en fait partie, mais la censure et la fraude sont des menaces, pas des qualités du trilemme.

- [x] la décentralisation, la scalabilité et la sécurité

> ℹ️ Correct ! Ces trois qualités entrent en concurrence, ce qui empêche une blockchain de les optimiser toutes à la fois.

- [ ] la sécurité, la vitesse et les frais réduits

> ℹ️ Réessayez ! Vitesse et frais relèvent de la scalabilité, qui n'est qu'une des trois qualités.

# Sécurité et consensus

La sécurité est l'exigence la plus fondamentale pour une blockchain publique. Les ordinateurs d'un réseau doivent s'accorder sur les transactions réellement survenues pour travailler ensemble ; cet accord s'appelle le `consensus`. Une blockchain est sûre si des attaquants ne peuvent pas empêcher le réseau de s'accorder sur cette vérité. Les algorithmes de consensus sont conçus pour résister à ces attaques.

Les chaînes comme Bitcoin, qui utilisent la `preuve de travail`, protègent cet accord en rendant la production de blocs très compétitive : chaque producteur court pour résoudre un problème mathématique. Le premier à y parvenir gagne le droit de créer le bloc suivant et la `récompense de bloc` qui l'accompagne. Réécrire l'histoire récente de la chaîne exigerait des investissements massifs en puissance de calcul et en énergie : un attaquant dépenserait sans doute plus qu'il ne gagnerait.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Le consensus d'une blockchain de cryptomonnaie, c'est :

- [ ] Le processus par lequel les nœuds s'accordent sur ce qui s'est passé onchain

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Important pour tout l'écosystème de la chaîne, afin d'empêcher la fraude

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Sécurisé par des incitations économiques

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [x] Toutes les réponses ci-dessus

> ℹ️ Correct ! Le consensus est la façon dont les nœuds s'accordent, et les incitations économiques rendent l'attaque plus coûteuse que profitable.

# Sécurité et attaques

Une forme possible d'attaque contre le consensus est l'`attaque des 51 %` : un attaquant qui contrôle la majorité de la puissance de consensus peut annuler des transactions récentes pour dépenser deux fois les mêmes pièces, ou censurer les nouvelles. Il ne peut ni falsifier des signatures ni dépenser les fonds d'autrui. Cette majorité représente 51 % de la puissance de calcul en preuve de travail, et 51 % de la `mise` en preuve d'enjeu : un investissement colossal. Et en preuve d'enjeu, une tricherie prouvée, comme signer deux blocs contradictoires, entraîne la destruction de cette mise (le `slashing`) : l'attaquant perdrait sans doute plus qu'il ne gagnerait.

En `preuve d'enjeu`, le producteur de bloc n'est pas désigné par la compétition mais tiré au sort. Comme en preuve de travail, l'algorithme garantit qu'aucune entité ne peut « gagner » régulièrement le droit de créer un nouveau `bloc`.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

L'objectif final d'une attaque des 51 % est de :

- [ ] Perturber les opérations de minage

> ℹ️ Réessayez ! L'attaque vise le consensus lui-même : annuler ou censurer des transactions, pas gêner les mineurs.

- [x] Dépenser deux fois des pièces ou censurer des transactions

> ℹ️ Correct ! La majorité de la puissance de consensus permet d'annuler des transactions récentes ou d'en bloquer de nouvelles.

- [ ] Créer une nouvelle cryptomonnaie

> ℹ️ Réessayez ! N'importe qui peut créer une cryptomonnaie sans attaquer un réseau existant.

- [ ] Éliminer les 49 % restants

> ℹ️ Réessayez ! Les autres participants ne sont pas éliminés. La majorité sert à annuler ou censurer des transactions.

# Scalabilité : le débit

La `scalabilité` désigne la capacité d'une blockchain à traiter rapidement de nombreuses transactions. Deux éléments la déterminent : le débit et la finalité.

1) Le `débit de transactions` : combien de transactions une blockchain peut traiter à la fois, généralement mesuré en transactions par seconde (`TPS`).

Imaginez beaucoup de personnes à un arrêt de bus, avec de nouvelles arrivées chaque minute : toutes veulent voyager. Mais un bus ne peut en emmener qu'un nombre limité. Pour vider l'arrêt plus vite, il faudrait des bus plus grands (plus de personnes) ou plus fréquents (moins d'attente). C'est pareil pour faire entrer de nombreuses transactions dans le peu d'`espace de bloc` disponible. Vous pouvez le visualiser en direct sur [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Dans l'analogie de l'arrêt de bus, qu'est-ce qui est vrai ?

- [ ] Les personnes (transactions) sont regroupées dans des bus (blocs)

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Chaque bus (bloc) accueille un nombre limité de personnes (transactions)

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] Transporter plus de monde exige des bus plus grands ou plus nombreux

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [x] Toutes les réponses ci-dessus

> ℹ️ Correct ! Les transactions remplissent l'espace de bloc comme les passagers remplissent les bus. Vider la file demande des blocs plus gros ou plus fréquents.

# Scalabilité : la finalité

Le second aspect de la scalabilité, c'est :

2) La `finalité` : à partir de quand peut-on être raisonnablement sûr qu'une transaction ne sera ni modifiée ni annulée ?

Sur les chaînes en preuve de travail comme Bitcoin, la finalité se mesure en blocs : plus il s'ajoute de blocs après votre transaction, plus vous pouvez être sûr qu'elle ne sera pas annulée. Un consensus sûr rend très coûteuse la modification des blocs passés, et le coût grandit à mesure qu'on remonte loin. Bitcoin produit un `bloc` environ toutes les 10 minutes : attendre plusieurs confirmations prend donc près d'une heure. La preuve d'enjeu d'Ethereum suit une autre voie : les `validateur` votent pour finaliser les blocs, et après environ 13 minutes (deux `époque` de votes) une transaction est définitive.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# La décentralisation répartit le pouvoir

La `décentralisation` est le dernier pilier du trilemme : le transfert du contrôle et de la décision d'une entité unique vers un réseau distribué. C'est le principe fondamental qui rend les blockchains `sans permission` et `résistant à la censure` : chacun peut les utiliser, et chacun peut construire des logiciels dessus.

Les plateformes centralisées comme Facebook et Twitter peuvent désactiver n'importe quel compte à tout moment. De nombreux streamers influents sur Twitch ou TikTok se sont retrouvés exclus sans motif. Même quand un compte peut être rétabli, la démarche est longue et pénible. Sans décentralisation, un `registre` blockchain n'est qu'un tableur financier sur l'ordinateur d'une banque, et ce sont les banquiers qui décident qui peut ouvrir un compte. Un réseau `sans permission` signifie que l'autorité est suffisamment décentralisée : il n'existe aucun moyen de retirer son accès à quelqu'un.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Laquelle de ces affirmations sur la décentralisation est FAUSSE ?

- [ ] La décentralisation rend les blockchains résistantes à la censure

> ℹ️ Réessayez ! Cette affirmation est vraie : sans entité de contrôle, personne ne peut censurer le réseau.

- [ ] La décentralisation rend les blockchains sans permission

> ℹ️ Réessayez ! Cette affirmation est vraie : une autorité répartie signifie que personne ne peut retirer son accès à quelqu'un.

- [x] La décentralisation aide les pouvoirs autoritaires à garder le contrôle

> ℹ️ Correct ! C'est FAUX : la décentralisation fait l'inverse en éloignant le contrôle de toute entité unique.

- [ ] N'importe qui, où qu'il soit, peut utiliser un système sans permission

> ℹ️ Réessayez ! Cette affirmation est vraie : sans permission signifie que l'accès ne peut être refusé à personne.

# Est-ce vraiment décentralisé ?

Mais la décentralisation n'est pas une question de oui ou non. Dix entités qui contrôlent, est-ce décentralisé ? Et mille ? Un million ? Il n'existe pas de seuil standard, et il vaut donc mieux voir la décentralisation comme un spectre. Entre le noir et le blanc, il y a beaucoup de gris.

On peut donc dire qu'une chose est « plus ou moins décentralisée qu'une autre » plutôt que « centralisée ou décentralisée ». Un haut degré de décentralisation est nécessaire pour qu'un système monétaire neutre résiste à la censure d'un État. Les blockchains récentes échangent souvent de la décentralisation contre de la scalabilité, mais elles s'exposent alors aux mêmes pressions politiques et sociales que les plateformes entièrement centralisées. Elles peuvent finir par pratiquer la même censure que les réseaux sociaux centralisés.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Les blockchains n'ont pas toutes le même degré de décentralisation.

- [x] Vrai

> ℹ️ Correct ! La décentralisation est un spectre : chaque blockchain choisit ce qu'elle échange contre de la scalabilité.

- [ ] Faux

> ℹ️ Réessayez ! La décentralisation est un spectre, et chaque blockchain fait son propre compromis.

# Quelques exemples

Chaque blockchain aborde le trilemme à sa façon et fait des compromis selon ses objectifs. Bitcoin et Ethereum privilégient la sécurité et la décentralisation sur la scalabilité, d'où un long `temps de finalité` pour Bitcoin et un `espace de bloc` limité sur Ethereum. Quand la demande de `smart contract` s'envole, en particulier pour la DeFi, les frais d'Ethereum montent : au pic de 2021, une seule transaction pouvait coûter des dizaines de dollars.

Cette hausse des frais a ouvert une brèche pour les `Layer 1 alternative` comme BNB Chain, qui ont privilégié la scalabilité sur la décentralisation pour offrir un `débit de transactions` supérieur et des frais réduits. Des chaînes de troisième génération comme Solana emploient des méthodes inédites, mais toutes restent soumises à ces contraintes de base. Le choix de chaque chaîne façonne son écosystème.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Que peut-on faire ?

Si Ethereum a privilégié une sécurité et une décentralisation élevées, comment peut-il passer à l'échelle pour devenir le réseau financier mondial qu'il vise ? La feuille de route d'Ethereum a exploré deux réponses : les `Layer 2` et le `sharding`.

Les `Layer 2` augmentent la scalabilité d'Ethereum sans sacrifier les deux autres piliers du trilemme. Ce sont des couches supplémentaires posées sur la chaîne principale : elles s'appuient sur elle pour la sécurité, tout en offrant des frais réduits et des transactions plus rapides. Nous les détaillerons dans la leçon consacrée aux Layer 2.

Le `sharding` aurait divisé la blockchain en plusieurs chaînes parallèles, comme on ajoute des voies à une route. Ethereum a mis ce plan de côté au profit d'un plus simple : rendre les données de bloc moins chères pour les Layer 2 (arrivé en 2024) et augmenter la capacité par étapes, sans sacrifier la sécurité ni la décentralisation.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Les Layer 2 :

- [ ] Assurent leur propre sécurité

> ℹ️ Réessayez ! Les Layer 2 s'appuient sur la chaîne principale pour leur sécurité.

- [x] Augmentent la scalabilité de la blockchain principale

> ℹ️ Correct ! Les Layer 2 se posent sur la chaîne principale et ajoutent de la scalabilité sans sacrifier sécurité ni décentralisation.

- [ ] Augmentent les frais pour les utilisateurs

> ℹ️ Réessayez ! C'est l'inverse : les utilisateurs profitent de frais réduits.

- [ ] Allongent le temps de finalité

> ℹ️ Réessayez ! Les Layer 2 offrent des transactions plus rapides, pas plus lentes.

# L'avenir d'Ethereum

Le réseau Ethereum continue d'améliorer sa scalabilité sans sacrifier les autres aspects du trilemme. Le passage à la `preuve d'enjeu` (2022) a réduit sa consommation d'énergie de plus de 99 %, et les données de bloc bon marché pour les Layer 2 sont arrivées en 2024. **Le passage à l'échelle est un travail continu : chaque mise à jour rend Ethereum plus rapide et moins cher, tout en gardant la sécurité et la décentralisation comme principes.** La Fondation Ethereum propose une excellente page sur la [feuille de route](https://ethereum.org/roadmap/).

En parallèle, de nombreux protocoles `Layer 2` se construisent sur Ethereum pour répondre à la demande sans exiger de modifier le protocole lui-même. Ils s'appuient sur le Layer 1 pour la sécurité décentralisée et apportent la scalabilité ; leur diversité fait un écosystème décentralisé ! Parmi les principaux `rollup` : Arbitrum, OP Mainnet et Base ; Polygon PoS est une `chaîne latérale` populaire, avec sa propre sécurité.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Parmi les évolutions d'Ethereum, on trouve :

- [ ] Les Layer 2 et des données de bloc moins chères pour la scalabilité

> ℹ️ Réessayez ! Cela en fait partie, mais ce n'est pas la seule.

- [ ] Le maintien de la décentralisation et de la sécurité comme principes

> ℹ️ Réessayez ! Cela en fait partie, mais ce n'est pas la seule.

- [ ] La baisse de la consommation d'énergie grâce à la preuve d'enjeu

> ℹ️ Réessayez ! Cela en fait partie, mais ce n'est pas la seule.

- [x] Toutes les réponses ci-dessus

> ℹ️ Correct ! Les Layer 2 et les données bon marché apportent l'échelle, la preuve d'enjeu a réduit l'énergie, et sécurité et décentralisation restent des principes.

# Qu'est-ce que cela signifie pour les Explorateurs ?

Les utilisateurs ont besoin de frais réduits pour apprendre et explorer la technologie, avec peu de barrières à l'entrée et un faible coût en cas d'erreur, surtout au début de leur parcours. La blockchain Ethereum n'est pas encore idéale, mais ses valeurs en font l'une des meilleures candidates pour réaliser le rêve d'un système financier mondial. Les Explorateurs peuvent apprendre à l'utiliser sans payer des frais énormes : les Layer 2 leur apportent la sécurité et la décentralisation d'Ethereum, avec une bien meilleure scalabilité.

La prochaine leçon expliquera les solutions `Layer 2` et comment se lancer. En avant, Explorateurs !
