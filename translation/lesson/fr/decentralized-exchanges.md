---
TITLE: Les échanges décentralisés
DESCRIPTION: Découvrez les places de marché onchain qui vous laissent la garde de vos actifs.
LANGUAGE: Français
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/decentralized-exchanges
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

# Qu'est-ce qu'un échange décentralisé ?

Les échanges décentralisés (DEX) sont des places de marché onchain qui permettent aux Explorateurs d'échanger des cryptomonnaies entre eux en toute sécurité, tout en gardant leurs fonds en auto-conservation. Ces échanges pair à pair reposent sur des smart contracts accessibles à tous, qui relient les utilisateurs à de grands coffres communs de tokens : les `pools de liquidité`. On trouve des DEX sur presque toutes les blockchains, y compris sur les Layer 1 et Layer 2 d'Ethereum.

Échanger des tokens est une activité essentielle de la `DeFi`. On y trouve une variété et une utilité de tokens inégalées ailleurs. Certains en achètent pour accéder à des produits et services onchain. D'autres investissent. Certains tokens donnent un droit de vote sur l'orientation d'un projet, un peu comme des actions dans une entreprise classique ! Quelle que soit votre motivation, vous fréquenterez les DEX régulièrement.

Voyons comment ils fonctionnent et comment en tirer le meilleur parti.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Échanges centralisés et décentralisés

Voyons ce qui distingue la technologie d'une plateforme centralisée (comme Coinbase, Binance, Kraken) de celle d'un échange décentralisé (comme Uniswap, PancakeSwap).

Les plateformes centralisées (`CEX`) permettent d'échanger et d'investir en cryptomonnaies sans jamais toucher à l'écosystème blockchain lui-même. Comme votre compte est enregistré chez elles, vos clés privées et vos fonds sont sous leur garde : vous dépendez de leur gestion, de leurs règles et des risques de leur modèle économique.

Les échanges décentralisés (`DEX`) permettent d'échanger des cryptomonnaies entièrement en auto-conservation, la vocation première des blockchains. Le modèle pair à pair vous laisse être à la fois consommateur et fournisseur, avec accès à des opportunités financières autrefois réservées au monde de la finance. Le système est transparent et résistant à la censure : personne ne peut geler votre accès ni annuler vos échanges. Le risque de piratage demeure, nous y reviendrons dans cette leçon.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Parmi ces affirmations sur les plateformes d'échange, laquelle est vraie ?

- [ ] Il n'y a aucune équipe derrière un DEX.

> ℹ️ Les DEX ont bien des équipes de développement, mais leur influence sur le projet est limitée.

- [ ] Sur une CEX, on ne peut perdre des fonds qu'à cause d'un mauvais échange.

> ℹ️ Les CEX ont aussi leurs risques. En 2022, la plateforme FTX s'est effondrée et presque tous ses utilisateurs ont perdu leurs dépôts.

- [x] Les DEX permettent d'échanger en auto-conservation, pas les CEX.

> ℹ️ Sauf mention explicite du contraire, une CEX détient vos clés privées.

# Les applications décentralisées

Un DEX est un type de `dApp`, une application décentralisée qui tourne sur une blockchain. Pour être dite « décentralisée », une application internet doit être ouverte à tous sans distinction, traiter les interactions sans intervention d'un tiers, et être écrite dans un code publiquement consultable.

Les services d'une dApp reposent sur des smart contracts : des lignes de code qui reçoivent une action onchain et renvoient une réponse onchain prévisible. L'Ethereum Foundation les compare à un distributeur automatique, où l'on saisit le numéro correspondant au produit voulu, plus la somme adéquate, et où l'on obtient le résultat attendu (son en-cas) sans qu'un humain ait à intervenir.

Les smart contracts d'un DEX traitent des commandes variées : échanger des tokens, voter, ou ajouter et retirer de la `liquidité`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Les applications décentralisées (suite)

Les DEX suivent la même logique : ils prennent le token fourni et rendent le token voulu. Autres exemples de dApps :

🎟️ **dApps de vote :** elles attribuent le vote d'un utilisateur à une entité désignée.

📦 **dApps de pont :** elles transfèrent des cryptomonnaies d'une blockchain à une autre.

🤝 **dApps de prêt :** elles prêtent aux utilisateurs qui remplissent certaines conditions.

Les smart contracts sont des comptes Ethereum : ils ont une adresse et un solde, et agissent automatiquement quand un transfert et une commande les y invitent. Un DEX est un compte Ethereum programmé, doté de plusieurs fonctions.

Les `dApps` passent en général par un site web, une interface visuelle vers les smart contracts sous-jacents. Si le site tombe, on peut toujours accéder au contrat, avec un peu d'expérience !

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Quelles propriétés une dApp doit-elle réunir pour être dite décentralisée ?

- [ ] Sans permission : ouverte à tous les utilisateurs.

> ℹ️ C'est une qualité d'une dApp, mais ce n'est pas la seule.

- [ ] Autonome : les interactions n'ont besoin d'aucun intermédiaire.

> ℹ️ C'est une qualité d'une dApp, mais ce n'est pas la seule.

- [ ] Transparente : le code du smart contract est public.

> ℹ️ C'est une qualité d'une dApp, mais ce n'est pas la seule.

- [x] Toutes les réponses ci-dessus.

> ℹ️ Les dApps d'Ethereum sont appréciées pour leur capacité à être sans permission, autonomes et transparentes.

# Les teneurs de marché automatisés

Sur les marchés traditionnels et les `CEX`, votre dépositaire utilise un `carnet d'ordres` : une base de données d'offres d'achat et de vente. La CEX apparie votre offre avec celle d'une autre personne. Une commission fixe ou proportionnelle vous est généralement prélevée, et vous ne saurez jamais si la méthode d'appariement, non divulguée, vous a vraiment trouvé la meilleure affaire.

La plupart des `DEX` utilisent la technologie du teneur de marché automatisé (`AMM`), la conception la plus courante pour les échanges de tokens : un système qui fixe le prix de votre échange via un algorithme public. Quelques DEX plus récents utilisent plutôt des carnets d'ordres ou des systèmes à intentions. Comme l'algorithme AMM est open source, chacun peut le comprendre, le cloner et l'améliorer, d'où une concurrence saine et une innovation permanente.

Les AMM acheminent les échanges via des `pools de liquidité`, plutôt que d'apparier directement les offres. Ces coffres communs accumulent et distribuent des tokens au fil des interactions, chaque étape étant visible sur la blockchain publique.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Quel avantage un AMM offre-t-il par rapport à un carnet d'ordres classique ?

- [ ] L'échange via un AMM est plus rapide que via un carnet d'ordres.

> ℹ️ Si l'on compte le temps de confirmation du réseau, ce n'est pas forcément vrai.

- [ ] L'AMM vous relie directement à l'autre utilisateur.

> ℹ️ Les AMM acheminent les échanges via des coffres communs, les pools de liquidité, et non directement entre utilisateurs.

- [x] On peut détecter et empêcher les échanges déséquilibrés d'autres parties.

> ℹ️ La transparence des AMM rend bien plus difficile de dissimuler une action malveillante, pour une plateforme comme pour un utilisateur !

# Les échanges de tokens

Sur la blockchain, les échanges de cryptomonnaies s'appellent des `échanges de tokens`. Ces interactions avec un smart contract convertissent une cryptomonnaie en une autre via les `pools de liquidité` d'un AMM. En formant un `itinéraire d'échange`, un chemin à travers les pools adéquats, le smart contract du DEX échange votre token d'entrée contre celui que vous voulez. Comme un pool ne contient en général que deux tokens, et que toutes les `paires de tokens` n'ont pas de pool, un itinéraire peut traverser plusieurs pools.

Pour qu'un smart contract accède à notre portefeuille, on lui accorde la permission de retirer des fonds jusqu'à un montant défini (ou illimité). Ces `autorisations de token` laissent des contrats de confiance agir sans notre clé privée. Comme accorder une permission coûte du gas, elle reste ouverte pour la suite : une raison d'échanger depuis un portefeuille et de conserver dans un autre. Nous surveillons et révoquons ces autorisations dans notre leçon [Gérer les autorisations de tokens](https://app.banklessacademy.com/lessons/managing-token-allowances) !

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Les échanges de tokens (suite)

Prenons un exemple pour comprendre le processus de permission et d'échange : un échange d'USDC contre des OP sur Velodrome, un grand DEX du réseau Optimism. Cet échange passe souvent par deux pools, car le `pool de liquidité` USDC/OP est moins avantageux :

1. Vous accordez d'abord au smart contract Velodrome concerné la permission de retirer des USDC de votre portefeuille.
2. Vous envoyez votre demande d'échange à Velodrome.
3. La transaction est acceptée : Velodrome retire le montant d'USDC indiqué de votre portefeuille vers le pool USDC/ETH. Le montant équivalent en ETH quitte ce premier pool et rejoint le pool ETH/OP. Enfin, des OP sont transférés du second pool vers l'adresse de votre portefeuille.

L'échange est terminé. Vos USDC ont été échangés contre des OP, en passant par l'ETH !

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

Un AMM peut acheminer un échange à travers plusieurs pools de liquidité, en une seule transaction.

- [x] Vrai

> ℹ️ Correct ! Les frais de réseau seront peut-être plus élevés, mais les actions sont regroupées en une seule transaction.

- [ ] Faux

> ℹ️ Incorrect, revoyez la diapositive précédente pour comprendre pourquoi.

# Qu'est-ce que la liquidité ?

En crypto, la liquidité désigne la capacité d'un marché à permettre l'achat et la vente d'actifs numériques à des prix justes. Quand elle est élevée, les prix sont plus stables ; quand elle est faible, ils sont plus volatils. Comme les utilisateurs recherchent des prix justes, les `DEX` visent une forte liquidité dans tous leurs pools.

Une forte liquidité signifie une grande quantité de tokens dans le pool, en principe répartie à parts égales entre les deux tokens que les utilisateurs y échangent. Un pool USDC/ETH, par exemple, sert tous les échanges de cette `paire de tokens` sur la plateforme.
Plus il y a de tokens, moins chaque échange bouscule cet équilibre 50/50, ce qui aide les prix à rester stables. L'ampleur du déséquilibre causé par un échange s'appelle l'`impact sur le prix`.

En tant qu'Explorateur, vous voulez l'impact le plus faible possible sur vos échanges, pour obtenir la meilleure affaire ! Autrement dit, vous voulez une liquidité forte et équilibrée.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Les fournisseurs de liquidité

Viser une forte `liquidité` est vital pour un DEX, mais comme l'écosystème crypto n'en contient qu'une quantité limitée, chaque DEX se bat pour en capter le plus possible. D'où vient donc cette liquidité ?

Dans un écosystème décentralisé, les citoyens de la DeFi sont incités à fournir de la liquidité à un pool pour faire monter la TVL (valeur totale bloquée) d'une plateforme. Les frais collectés sur les échanges qui passent par le pool sont redistribués aux LP (fournisseurs de liquidité) au prorata de leur apport. Vous avez bien lu : en prêtant vos tokens à un pool de DEX, vous pouvez générer un revenu passif.

Devenir `LP` demande de peser plusieurs facteurs, que nous aborderons dans de futurs contenus. Retenez pour l'instant que les gros TAEG (taux annuels effectifs globaux) affichés sur les pools ne sont pas garantis, et que des pertes sont possibles.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Complétez : « Quand la liquidité est __________. »

- [ ] forte, la volatilité est forte.

> ℹ️ Incorrect, réessayez.

- [ ] faible, la volatilité est faible.

> ℹ️ Incorrect, réessayez.

- [x] faible, la volatilité est forte.

> ℹ️ Exact ! Liquidité et volatilité évoluent en général en sens inverse.

# Knowledge Check 6

Comment les DEX incitent-ils à fournir de la liquidité ?

- [ ] Une assurance contre les pertes sur les échanges.

> ℹ️ Ni les CEX ni les DEX ne vous protègent des pertes sur un mauvais investissement.

- [x] Une part des frais de la plateforme et/ou des tokens bonus.

> ℹ️ Les frais d'utilisation du DEX sont souvent partagés entre les parties prenantes, dont les LP. Certaines plateformes ajoutent même des bonus.

- [ ] L'accès à des pools de liquidité privés.

> ℹ️ Les pools de liquidité privés n'existent pas ; leur faible trafic ne rapporterait sans doute pas assez.

- [ ] Toutes les réponses ci-dessus.

> ℹ️ Une seule réponse est correcte ici, saurez-vous trouver laquelle ?

# Les frais des plateformes

CEX comme DEX facturent leurs services, et la blockchain n'est pas gratuite non plus. Cinq coûts à peser avant de choisir une plateforme.

🏷️ **Frais de plateforme :** les CEX fixent leurs commissions ; sur un DEX, les frais varient selon le pool (souvent une fraction de pour cent) et restent visibles onchain.

🌐 **Frais de réseau :** la blockchain facture du gas en plus. Utilisez le réseau aux heures creuses, et suivez le prix sur [Etherscan](https://etherscan.io/gastracker). Sur les Layer 2, c'est bien moins cher : comparez sur [growthepie](https://www.growthepie.com/).

📦 **Frais de pont :** CEX et ponts facturent le passage d'un réseau à l'autre. Les dApps de pont affichent une estimation avant confirmation.

💹 **Taux de change :** en achetant en monnaie fiduciaire, méfiez-vous des taux qui ne reflètent pas le marché.

🧊 **Glissement :** les prix bougent vite, alors les DEX laissent une marge de fluctuation : le `glissement` (réglable, en général 0,5 à 2 %). Vous pouvez perdre jusqu'à cette valeur, mais un réglage trop bas fait échouer l'échange.

Faites toujours vos propres recherches pour bien comprendre les coûts d'une plateforme.

# Les avantages des DEX

Cette leçon a couvert beaucoup de théorie, mais vous vous demandez peut-être encore si les DEX sont faits pour vous. En règle générale, vous y gagnerez si :

- 🔑 Vous voulez garder la garde de vos actifs numériques.
- 🔒 Vous voulez sécuriser vos actifs sur la blockchain et éviter l'effondrement d'une CEX.
- ⌛ Vous voulez accéder au marché des cryptomonnaies 24 h/24.
- 👛 Vous voulez accéder à un choix de cryptomonnaies plus large.
- 🤑 Fournir de la liquidité vous intéresse.
- 🛂 Vous ne voulez pas vous inscrire et faire un `KYC` sur chaque plateforme utilisée.
- ⚔️ Vous cherchez les risques et les récompenses supplémentaires de la finance décentralisée.

Cela dit, presque tous les utilisateurs de la DeFi ont un compte sur une plateforme centralisée, car les CEX offrent des passerelles simples vers le monde bancaire traditionnel : vous transférez facilement de l'argent de votre compte en banque vers la blockchain, et inversement. [Ryan Sean Adams](https://twitter.com/RyanSAdams) compare cela aux toilettes publiques : _« On entre, on fait ce qu'on a à faire, on ressort. »_

C'est une bonne chose : vous pouvez commencer avec un compte sur une CEX et migrer petit à petit vers la DeFi, à mesure que vous gagnez en aisance.

# Les risques des DEX

Utiliser un DEX comporte aussi des risques. Voici les plus lourds de conséquences :

🐞 **Risque de smart contract :** les audits réduisent les chances de bug sans les éliminer : en 2025, un grand DEX audité par plusieurs cabinets a perdu 128 millions de dollars à cause d'un bug subtil. Au pire, vous pouvez perdre jusqu'au montant de votre échange. Privilégiez les smart contracts reconnus et largement audités.

💰 **Risque d'auto-conservation :** être seul responsable de ses clés privées, c'est pouvoir perdre un portefeuille entier par vol, arnaque ou phrase seed égarée. D'où l'importance d'une stratégie à plusieurs portefeuilles, et d'une copie de vos phrases seed sauvegardée dans un endroit physique sûr.

🥪 **Attaques sandwich :** régler un glissement élevé augmente le risque que des bots coordonnent des `attaques sandwich` contre vous. Dans ce cas, vous pouvez perdre jusqu'au montant de votre glissement. Nous verrons comment vous en protéger dans de futurs contenus.

Une fois ces avantages et ces risques pesés, une CEX peut mieux vous convenir si :

- 🎓 Vous débutez encore en cryptomonnaies et cherchez à en comprendre les risques et les récompenses.
- ⚖️ Vos échanges sont peu fréquents et de faible montant, ce qui rend les frais de blockchain disproportionnés.
- 🏰 Vous préférez confier vos fonds à une plateforme plutôt qu'en être responsable.

Certains adoptent une approche hybride pour réduire leur risque global : acheter et vendre sur une CEX, mais conserver sur la blockchain elle-même.

# Knowledge Check 7

Pourquoi utiliser un échange décentralisé plutôt qu'une plateforme centralisée ?

- [ ] Pour accéder à des tokens non listés sur une plateforme centralisée.

> ℹ️ C'est une qualité d'un DEX, mais ce n'est pas la seule.

- [ ] Pour garder la pleine garde des fonds échangés.

> ℹ️ C'est une qualité d'un DEX, mais ce n'est pas la seule.

- [ ] Pour accéder à des outils et des occasions habituellement indisponibles.

> ℹ️ C'est une qualité d'un DEX, mais ce n'est pas la seule.

- [x] Toutes les réponses ci-dessus.

> ℹ️ Exact ! Les DEX offrent tous ces avantages face aux CEX.

# Choisir un DEX

La DeFi compte de nombreux échanges décentralisés, et certains valent mieux que d'autres. Pesez ces cinq facteurs clés avant de choisir :

🥇 **Légitimité :** l'entité est-elle réputée pour son sérieux, sa qualité et sa longévité ?

⛲ **Liquidité :** la `TVL` des pools est-elle assez élevée pour limiter l'impact sur le prix ?

🖱️ **Simplicité :** l'interface est-elle agréable à utiliser ?

🔐 **Sécurité :** les smart contracts ont-ils été audités par plusieurs cabinets ?

🎁 **Récompenses et fonctionnalités :** y a-t-il des récompenses de fidélité pour l'utilisation ou l'apport de liquidité ? Peut-on voter en gouvernance ?

Parmi les noms qui s'en sortent bien sur ces critères figurent Uniswap, Curve, Velodrome et PancakeSwap. Vous pouvez passer facilement de l'un à l'autre jusqu'à trouver vos favoris ! Pour la quête de cette leçon, nous utiliserons Velodrome, un DEX bien établi sur le réseau Optimism. Il est simple à utiliser et, comme il est sur un Layer 2, les frais sont bien plus raisonnables !

# Les bonnes pratiques sur un DEX

Avant d'interagir avec une dApp, quelques bonnes pratiques permettent de garder vos fonds en sécurité :

👩‍💻 Vérifiez le lien d'une dApp via le compte X (Twitter) officiel du projet (coche dorée) ou via un tiers de confiance, puis mettez-le en favori. Beaucoup d'arnaques DeFi commencent par un faux lien, y compris sur les moteurs de recherche connus.

🔓 Quand vous accordez des `autorisations de token` onchain, limitez-les au montant de votre échange. Beaucoup de DEX utilisent désormais des approbations par signature couvrant le seul échange : voyez [Gérer les autorisations de tokens](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ N'interagissez pas avec les dApps depuis votre portefeuille HODL ; gardez-en un séparé pour cet usage. Notre [leçon Sécurité web3](https://app.banklessacademy.com/lessons/web3-security) détaille les stratégies de portefeuille.

Vous voilà prêt à interagir avec un échange décentralisé !

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Comment s'assurer d'avoir choisi un DEX fiable ?

- [x] En vérifiant sa réputation et en n'utilisant que des URL de sources fiables.

> ℹ️ Exact ! Vérifiez par vous-même la réputation du DEX, et ne suivez que des URL fournies par une source de confiance.

- [ ] En faisant une petite interaction de test à la première utilisation.

> ℹ️ Une seule interaction avec un mauvais smart contract peut vider votre portefeuille entier.

- [ ] Les deux réponses ci-dessus.

> ℹ️ Incorrect. Une seule interaction avec un mauvais smart contract peut vider votre portefeuille entier.
