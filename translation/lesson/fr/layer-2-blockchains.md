---
TITLE: Les blockchains Layer 2
DESCRIPTION: Rejoignez l'écosystème Layer 2 pour accélérer vos transactions et réduire vos frais.
LANGUAGE: Français
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
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

L'état idéal pour toute blockchain est d'être la plus décentralisée, la plus sûre et la plus scalable possible. Construire une blockchain qui excelle sur ces trois plans reste un défi non résolu, auquel on a donné un nom : le `trilemme de la blockchain`.

Bitcoin et Ethereum sont plutôt décentralisés et sûrs, mais passent mal à l'échelle, comme le montrent les frais élevés et les longues files d'attente en période de forte activité. Pour contourner ces limites, les Explorateurs peuvent utiliser diverses technologies qui réduisent fortement les coûts et accélèrent les transactions. On les appelle collectivement les solutions de scalabilité Layer 2 (L2).

Le `Lightning Network` est la solution la plus connue pour Bitcoin : elle repose sur des `canal de paiement` pour passer à l'échelle. Ethereum allège le trilemme en s'appuyant sur diverses solutions L2, épaulées par un stockage temporaire et bon marché, les `blob`, ajoutés au Mainnet en 2024 (une forme légère du « sharding » autrefois envisagé).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Les canaux de paiement

Sur la blockchain Bitcoin, le Lightning Network repose sur des canaux de paiement bidirectionnels, qui permettent à plusieurs parties d'échanger des BTC sans passer par la chaîne principale.

L'architecture permet à deux utilisateurs d'ouvrir un canal entre eux. Chaque canal est strictement bilatéral, mais les paiements peuvent être acheminés à travers un réseau de canaux connectés pour atteindre des utilisateurs plus lointains. Entre l'ouverture et la fermeture d'un canal, les parties peuvent se transférer des fonds. Le micro-registre de chaque participant est mis à jour après signature des deux utilisateurs, ce qui suppose en général que les nœuds des deux parties soient joignables.
Un canal peut être fermé à tout moment par l'une des parties, en publiant sur la blockchain la version la plus récente du micro-registre.

Les canaux de paiement ne prennent pas en charge les interactions avancées avec des `smart contract`, seulement des transactions pair-à-pair simples.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Il faut être en ligne pour transiger via le Lightning Network de Bitcoin.

- [x] Vrai

> ℹ️ Correct ! Mettre à jour un canal exige la signature des deux utilisateurs, donc que leurs nœuds soient joignables.

- [ ] Faux

> ℹ️ Réessayez ! Les mises à jour d'un canal exigent les signatures des deux parties, dont les nœuds doivent être en ligne.

# Les solutions de scalabilité d'Ethereum

Les développeurs d'Ethereum travaillent sur des solutions de scalabilité natives presque depuis le lancement du réseau.

Pour la plupart des membres de la communauté, une « solution de scalabilité Ethereum » doit corriger les limites de `scalabilité` d'Ethereum sans sacrifier la `sécurité` ni la `décentralisation`. Pour les utilisateurs, les besoins concrets sont des transactions plus rapides et un `gas` moins cher que sur le Mainnet. Pour se démarquer, certaines solutions acceptent des compromis plus marqués que d'autres sur le trilemme.

Ethereum se définit par ses capacités de smart contract : il est donc important que ses solutions de scalabilité en héritent. À quoi bon des transactions rapides et bon marché si les utilisateurs ne peuvent pas retrouver leurs `dApp` préférées sur un Layer 2 ?

# Knowledge Check 2

Les solutions de scalabilité d'Ethereum :

- [ ] utilisent des canaux de paiement pour passer à l'échelle.

> ℹ️ Réessayez ! Les canaux de paiement sont l'approche du Lightning Network de Bitcoin. Ethereum passe à l'échelle avec les rollups.

- [ ] ne prennent pas en charge les smart contracts.

> ℹ️ Réessayez ! Cette prise en charge est essentielle : les utilisateurs doivent retrouver leurs dApps sur un Layer 2.

- [x] doivent améliorer la scalabilité sans affaiblir les autres qualités du trilemme.

> ℹ️ Correct ! Une vraie solution de scalabilité corrige la scalabilité sans sacrifier sécurité ni décentralisation.

- [ ] accélèrent les transactions au prix d'un gas plus cher.

> ℹ️ Réessayez ! L'objectif est d'obtenir à la fois des transactions plus rapides ET un gas moins cher que sur le Mainnet.

# Relier Layer 1 et Layer 2

Comme nous l'avons vu dans [Les bases de la blockchain](https://app.banklessacademy.com/lessons/blockchain-basics), les blockchains sont des bases de données appelées `registre`, qui consignent une liste chronologique de transactions sécurisée par la cryptographie. Les blockchains L1 et les solutions L2 sont chacune des blockchains à part entière, avec leurs propres adresses et données.

Des infrastructures appelées `pont` servent à transférer des informations d'une base à l'autre. Si vous voyez le Mainnet Ethereum (ou toute autre blockchain `L1`) comme une île, et votre solution de scalabilité préférée comme une autre, un pont crypto est le terme générique pour l'autoroute qui relie ces deux îles numériques.

La technologie est très complexe, mais du point de vue de l'utilisateur, tout se résume à choisir une destination.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Les chaînes latérales

Une `chaîne latérale` est une blockchain distincte qui fonctionne indépendamment d'Ethereum, mais reste reliée au Mainnet par un `pont`. Pour y transférer des tokens, vous les bloquez dans un contrat de pont sur le Mainnet, et des tokens équivalents sont créés sur la chaîne latérale. Attention : cela ne donne PAS à vos fonds la sécurité d'Ethereum. Le pont et la chaîne dépendent des validateurs de cette dernière. Si l'un des deux est compromis (comme lors du piratage du pont Ronin, 625 millions de dollars en 2022), les fonds bloqués peuvent être volés.

Les chaînes latérales restent soumises au trilemme. Leurs frais de `gas` réduits et leurs transactions rapides viennent d'un ensemble de validateurs plus restreint mais plus puissant, qui échange un peu de décentralisation et de sécurité contre de la scalabilité.

Des chaînes comme Polygon PoS publient régulièrement des instantanés (« checkpoints ») sur Ethereum. Ils donnent à leur historique une forme de finalité et permettent de prouver ses soldes à la sortie du pont, mais ils ne rendent pas ces fonds aussi sûrs que sur le Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Les chaînes latérales :

- [ ] bloquent les tokens transférés dans un contrat sur le Mainnet.

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] ont des frais de gas moins élevés que le Mainnet.

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [ ] présentent plus de risques de centralisation que le Mainnet.

> ℹ️ Réessayez ! C'est vrai, mais ce n'est pas la seule affirmation exacte.

- [x] Toutes les réponses ci-dessus.

> ℹ️ Correct ! Elles bloquent les tokens sur le Mainnet et offrent des frais réduits, mais leur petit ensemble de validateurs échange de la décentralisation contre cette vitesse.

# Les rollups

Les protocoles Layer 2 qui utilisent la technologie des rollups restent plus proches du niveau de sécurité du Mainnet Ethereum.

Comme les chaînes latérales, les rollups permettent d'exécuter des transactions onchain en dehors du Mainnet. Ces transactions sont ensuite regroupées en un seul lot, et les données du lot sont publiées sur Ethereum dans des paquets temporaires et bon marché appelés `blob`, introduits par la mise à jour Dencun de mars 2024. Les blobs sont la principale raison pour laquelle les frais L2 sont tombés à quelques centimes, voire moins.

Pour prouver qu'il est assez sûr pour traiter des transactions au nom du Mainnet, un rollup doit apporter une « preuve convaincante » que les transactions de chaque lot sont valides et sûres. Cette preuve est incluse dans le lot et vérifiée par le contrat de pont sur le Mainnet.

Il existe aujourd'hui deux méthodes pour fournir cette preuve : les `rollup optimiste` et les `rollup ZK`. Regardons-les de plus près.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Les rollups optimistes

Des protocoles L2 comme Optimism, Base et Arbitrum utilisent tous les `rollup optimiste` comme architecture. On les dit « optimistes » parce que les informations du lot sont considérées comme valides jusqu'à preuve du contraire : on fait une hypothèse optimiste.

Pour limiter les abus, il existe en général un délai de plusieurs jours après une demande de retrait des fonds du L2 vers le Mainnet. Pendant ce temps, les validateurs du pont peuvent publier une `preuve de fraude` pour annuler le retrait. Ce mécanisme ressemble aux procédures de compensation bancaires, mais en décentralisé.

À noter : des services de pont tiers, comme Across et Relay, permettent de transférer des fonds en quelques minutes plutôt qu'en plusieurs jours. Ces ponts rapides vous avancent l'argent depuis leur propre réserve : vous prenez donc le risque de leurs smart contracts et de leurs fournisseurs de fonds, une couche de confiance supplémentaire par rapport au pont du rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Avec les rollups optimistes, les transactions sont considérées comme valides jusqu'à preuve du contraire.

- [x] Vrai

> ℹ️ Correct ! L'hypothèse optimiste est que les lots sont valides, avec une période de contestation pendant laquelle une preuve de fraude peut annuler un retrait.

- [ ] Faux

> ℹ️ Réessayez ! C'est précisément de cette hypothèse optimiste que ces rollups tirent leur nom.

# Les rollups ZK

Les `rollup ZK` sont un type de rollup fondé sur la technologie zero-knowledge. Contrairement aux `rollup optimiste`, ils confirment la légitimité des transactions groupées sans compter sur certains utilisateurs pour détecter des fraudes. Ils soumettent une preuve mathématique, la `preuve de validité`, qui permet à Ethereum de vérifier tout un lot sans refaire le travail.

Leur grand avantage est le `délai de règlement`, aussi appelé `finalité de la transaction`. Plutôt qu'une période de contestation de plusieurs jours, les rollups ZK permettent d'accéder à ses fonds sur le Mainnet en quelques heures, dès la soumission de la preuve suivante. Malgré son nom, la technologie zero-knowledge ne sert pas ici à la confidentialité : les transactions des principaux rollups ZK sont aussi publiques que sur le Mainnet.

Plusieurs grands protocoles s'appuient sur cette technologie, dont ZKsync, Starknet et Linea. Le développement en est encore à ses débuts, mais le potentiel est considérable.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Comparés aux rollups optimistes, les rollups ZK :

- [ ] gardent vos transactions privées sur le Mainnet.

> ℹ️ Malgré le nom « zero-knowledge », les principaux rollups ZK sont aussi transparents que le Mainnet : les preuves servent à la validité, pas à la confidentialité.

- [x] utilisent des preuves de validité, ce qui évite une période de contestation de plusieurs jours.

> ℹ️ Correct ! Une preuve mathématique confirme chaque lot, sans attendre la fin d'une fenêtre de contestation.

- [ ] comptent sur des observateurs pour publier des preuves de fraude.

> ℹ️ C'est le fonctionnement des rollups optimistes. Les rollups ZK prouvent la validité d'emblée.

# Compatibilité des dApps entre chaînes

En comparant `rollup optimiste` et `rollup ZK`, la plupart des utilisateurs regardent d'abord les délais de retrait. Mais comme ces délais peuvent être contournés par des ponts tiers, ce ne devrait pas être un critère majeur au moment de choisir une solution à explorer.

Beaucoup de rollups optimistes sont « équivalents EVM », c'est-à-dire que le L2 prend nativement en charge toute dApp capable de tourner sur l'`Ethereum Virtual Machine` (EVM). Cette équivalence permet de déployer sur le L2 n'importe quel smart contract déjà présent sur le Mainnet, et donc d'y retrouver ses dApps préférées.

Des chaînes latérales comme Polygon PoS font aussi tourner l'EVM nativement, et la plupart des rollups ZK modernes (ZKsync, Linea, Scroll) sont équivalents EVM ou très proches de l'être. Vos dApps Ethereum préférées sont donc disponibles sur la majeure partie de l'écosystème L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Les solutions équivalentes EVM peuvent facilement réutiliser les smart contracts déployés sur le Mainnet.

- [x] Vrai

> ℹ️ Correct ! L'équivalence EVM signifie que tout smart contract du Mainnet peut être déployé sur le L2, avec les dApps qui vont avec.

- [ ] Faux

> ℹ️ Réessayez ! Réutiliser les smart contracts du Mainnet est tout l'intérêt de l'équivalence EVM.

# Récapitulatif de la leçon

Les blockchains L1 comme Bitcoin et Ethereum sont aujourd'hui contraintes par le `trilemme de la blockchain`. Les `canal de paiement` sur Bitcoin, ou les chaînes latérales et les rollups sur Ethereum, les aident à passer à l'échelle et allègent ce trilemme.

Les `pont` relient les blockchains L1 aux `chaîne latérale` et aux `rollup`, et le fonctionnement du contrat de pont influence les propriétés du réseau connecté.

Les fonds sur une chaîne latérale n'héritent pas de la `sécurité` d'Ethereum : les tokens transférés sont bloqués dans un contrat sur le Mainnet, mais leur sûreté dépend des validateurs et du contrat de pont de la chaîne latérale. Ces chaînes ont un ensemble de validateurs restreint mais puissant, qui leur permet d'accélérer les transactions et de baisser les frais, au prix de la décentralisation et de la sécurité.

Les rollups valident et traitent eux aussi leurs propres transactions, mais leur contrat de pont exige une « preuve convaincante » de validité avant d'accepter les données. Cela leur permet de maintenir un niveau de `sécurité` et de `décentralisation` aligné sur les valeurs d'Ethereum. Deux méthodes existent : les `rollup optimiste` maintiennent un délai de plusieurs jours avant règlement sur le Mainnet, pendant lequel les validateurs du pont détectent et signalent les fraudes ; les `rollup ZK` apportent une garantie mathématique de légitimité grâce à la technologie `zero-knowledge`.

Aujourd'hui, rollups optimistes et rollups ZK modernes offrent tous deux une forte compatibilité avec les smart contracts du Mainnet, ce qui permet aux dApps de s'y déployer facilement. Beaucoup pensent que les rollups ZK seront la solution de demain, grâce à leur finalité rapide et à leurs solides garanties de validité.

# Commencez votre parcours Layer 2 avec Optimism ou Base 🙂

Optimism et Base, deux rollups optimistes équivalents EVM, sont d'excellents L2 pour débuter. Utiliser des dApps sur l'une ou l'autre ressemble beaucoup au L1, en moins cher et plus rapide, et les deux utilisent l'ETH comme gas. Votre prochaine quête est le premier pas de votre parcours sur Optimism ou Base !

Les deux écosystèmes sont profondément marqués par les valeurs d'Ethereum, Optimism étant connu pour [financer les biens publics](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) qui apportent de la valeur à l'écosystème, comme l'éducation gratuite de Bankless Academy.

Optimism et Base ne sont pas que des plateformes fondées sur des rollups optimistes : elles montrent comment les blockchains peuvent résoudre de vrais problèmes et ouvrir de nouvelles façons d'échanger et de se coordonner. De quoi nous rendre tous optimistes. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
