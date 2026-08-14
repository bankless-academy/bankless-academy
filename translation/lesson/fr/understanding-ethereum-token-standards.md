---
TITLE: Comprendre les normes de token d'Ethereum
DESCRIPTION: Découvrez comment les modèles d'actifs d'Ethereum accueillent les classes d'actifs traditionnelles comme émergentes.
LANGUAGE: Français
WRITERS: Musharraf, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
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

---
## **Points clés**

> * Les normes de `token` d'Ethereum sont des règles et des fonctions prédéfinies servant à déployer des tokens sur Ethereum.
>
> * Les plus répandues sont `ERC-20`, `ERC-721` et `ERC-1155`.
>
> * Chaque norme permet un niveau de `fongibilité` différent, ce qui autorise la création d'actifs onchain aussi bien courants qu'uniques.
>
> * Les normes de token assurent l'interopérabilité des tokens dans tout l'écosystème Ethereum : il devient très simple pour les dApps d'intégrer de nouveaux tokens, et pour vous d'y accéder !

## Que sont les normes de token d'Ethereum ?

Des millions de tokens crypto différents vivent sur Ethereum et ses réseaux `Layer 2`, chacun avec ses propriétés et ses usages. Comment le réseau peut-il garantir une prise en charge fluide des tokens dans tout son écosystème de dApps, sans que les développeurs passent des heures à intégrer chaque token ? Et comment les utilisateurs peuvent-ils comprendre les propriétés essentielles d'un token sans parcourir des heures de documentation ?

C'est là qu'interviennent les normes de token !

Ces modèles et ensembles de règles assurent l'`interopérabilité` des tokens dans tout l'écosystème Ethereum. Autrement dit, les dApps n'ont besoin de prendre en charge que quelques normes communes, plutôt que des milliers de tokens individuels. Pour les Explorateurs comme vous, cela signifie qu'il suffit de regarder la norme d'origine d'un token pour comprendre ce qu'il sait faire sur Ethereum.

Les normes de token définissent :

* La façon dont le smart contract d'un token doit être codé.

* L'ensemble commun de fonctions que tout token de ce type doit prendre en charge, pour que n'importe quelle dApp sache l'utiliser.

Ethereum compte aujourd'hui trois normes de token couramment utilisées :

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20** : une norme pour les tokens facilement échangeables (ou fongibles).

   Par exemple les tokens USDC et UNI.

2. **ERC-721** : une norme pour les tokens uniques (ou non fongibles), appelés `NFTs`.

   Par exemple les NFT du Bored Ape Yacht Club.

3. **ERC-1155** : une norme utilisée pour les tokens fongibles et non fongibles dans un même contrat.

   Par exemple les objets d'un jeu vidéo web3.

Vous vous demandez sans doute : « Mais qu'est-ce que la fongibilité, au juste ? »

Regardons ce concept issu de l'économie traditionnelle pour comprendre son importance dans l'écosystème Ethereum.

## Fongibilité et non-fongibilité.

La **« fongibilité »** est une propriété d'un actif ou d'un bien économique, qui recouvre deux caractéristiques clés :

* Quand l'actif est échangé, ses unités sont interchangeables sans aucune modification de valeur.

  (1 dollar peut s'échanger contre un autre dollar, ou contre quatre pièces de 25 cents, ou vingt pièces de 5 cents.)

* Quand l'actif est divisé, les fractions obtenues conservent ses caractéristiques fondamentales.

  (1 dollar divisé en quatre pièces de 25 cents reste une réserve de valeur et sert toujours à faire des achats.)

Le pétrole, la monnaie fiduciaire, les obligations d'État et les actions d'entreprise sont des exemples d'actifs fongibles. Ces actifs non uniques s'échangent et se divisent facilement.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

À l'inverse, la **« non-fongibilité »** signifie que :

* L'actif possède des propriétés uniques qui le distinguent de ses semblables et lui donnent une valeur propre.

  (Une toile de Van Gogh n'a pas le même prix que celle d'un artiste contemporain émergent, en raison de son apparence, de sa rareté, du niveau de maîtrise et de la réputation qui l'accompagnent.)

* La division altère ses caractéristiques fondamentales.

  (Un tableau découpé en quatre donne des morceaux qui ne se ressemblent pas, et dont la valeur peut différer. L'intention initiale de l'œuvre disparaît également.)

L'immobilier, les œuvres d'art, les identités numériques et les certifications sont des exemples d'actifs non fongibles. Leurs propriétés uniques les rendent plus difficiles à échanger et à diviser.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Si la fongibilité vous embrouille, posez-vous simplement la question : « Est-ce facile à échanger et à diviser ? » Si c'est difficile, c'est probablement non fongible !

Ethereum ambitionne de devenir « la couche de règlement de l'économie mondiale ». La prise en charge d'actifs fongibles et non fongibles ouvre la voie à la représentation onchain des classes d'actifs traditionnelles, et à la création de nouvelles !

## Normes et fonctions des tokens

Au moment de déployer un nouveau contrat de token sur Ethereum, le créateur de l'actif choisit l'une des normes existantes. Celle-ci lui confère des propriétés initiales (appelées fonctions), comme l'offre totale de l'actif, la possibilité ou non de le transférer vers un autre portefeuille, et les informations qu'il peut contenir.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Par exemple, l'ERC-20 utilise des fonctions comme celles-ci :

**1\. totalSupply :** définit l'offre totale d'un token ERC-20.

L'offre totale d'un token renseigne sur des qualités importantes, comme sa valeur et sa distribution.

**2\. balanceOf :** consulte le solde en tokens d'une adresse donnée.

Cela permet aux services et aux plateformes de vérifier le solde de votre portefeuille avant d'exécuter la transaction demandée.

**3\. transfer :** transfère des tokens de votre adresse vers d'autres adresses.

Chaque fois que vous envoyez un token crypto de votre portefeuille vers un autre, vous utilisez la fonction transfer.

**4\. approve :** autorise une adresse (généralement un smart contract) à transiger automatiquement au nom de votre portefeuille, jusqu'à un montant défini.

Grâce à cette fonction, vous pouvez autoriser une plateforme ou un service à utiliser automatiquement une part définie de vos fonds et à exécuter des transactions.

**5\. allowance :** sert à connaître le montant qu'un dépensier peut mobiliser depuis un portefeuille.

Une plateforme peut utiliser cette fonction pour vérifier le montant total que vous lui avez autorisé et savoir si elle peut exécuter la transaction sans que vous la signiez manuellement.

Normaliser la création de tokens permet la `composabilité` dans l'écosystème Ethereum. Un développeur qui construit un [échange décentralisé (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) peut par exemple prendre en charge n'importe quel token suivant la norme ERC-20, puisque tous se comporteront de la même façon. Nul besoin de coder une prise en charge individuelle pour chaque token listé.

De même, qui construit une place de marché NFT n'a qu'à rendre sa plateforme conforme aux normes ERC-721 et ERC-1155 pour prendre en charge tous les NFT créés sur Ethereum.

Maintenant que nous comprenons les normes, la fongibilité et les fonctions, examinons les usages des trois principales normes d'Ethereum.

### ERC-20 : les tokens fongibles

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

L'[ERC-20](https://eips.ethereum.org/EIPS/eip-20) est une norme qui définit les règles de création des contrats de tokens fongibles.

Un token ERC-20 peut être n'importe quoi, d'un `memecoin` à un moyen de paiement dans une place de marché décentralisée. Dans la plupart des cas, il entre dans l'une de ces quatre catégories :

**1\. Token utilitaire :** il sert un usage précis au sein d'une application ou d'un écosystème.

Exemple : Chainlink (LINK) sert à payer les opérateurs qui transmettent des données du monde réel, comme des prix de marché, aux smart contracts.

**2\. Token de gouvernance :** il donne à ses détenteurs un droit de vote sur les décisions de gouvernance d'une plateforme.

Exemple : les détenteurs d'Ethereum Name Service (ENS) peuvent voter sur les propositions de mise à jour du protocole de registre de domaines.

**3\. Stablecoin :** conçu pour garder une valeur stable, généralement égale au dollar américain.

Exemples : Tether (USDT), USD Coin (USDC), et des arrivants plus récents comme l'USDS de Sky.

**4\. Token financier :** il représente la propriété d'un actif sous-jacent, comme les actions d'une entreprise.

Exemple : les fonds d'investissement tokenisés, comme les fonds monétaires que de grands gestionnaires d'actifs ont commencé à émettre onchain en 2024.

Un même token peut relever de plusieurs catégories. Un token de gouvernance peut aussi avoir une utilité concrète au sein d'une plateforme.

Vous pouvez facilement [acheter des tokens ERC-20 sur un DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) comme Uniswap, ou sur une `plateforme d'échange centralisée` comme Binance ou Coinbase.

### ERC-721 : les tokens non fongibles

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

L'[ERC-721](https://eips.ethereum.org/EIPS/eip-721) est une norme qui définit les règles permettant de créer ou d'utiliser des tokens non fongibles sur Ethereum. Elle garantit que chaque NFT créé est unique, de façon démontrable.

À quoi servent les tokens ERC-721 ?

**1\. La propriété d'actifs :** les tokens ERC-721 servent beaucoup à représenter la propriété d'actifs uniques, numériques comme réels. Cette entrée du Manuel de l'Explorateur, par exemple, existe en 100 exemplaires numérotés individuellement (pas seulement à lire, mais à posséder), comme un livre sur votre étagère numérique. (Vous pouvez la `frapper` et la posséder en cliquant sur le bouton doré « Collecter l'entrée » en haut de la page.) Les « Datadisk Collectibles » de Bankless Academy fonctionnent de la même façon.

**2\. Abonnements et adhésions :** créateurs, artistes, clubs et entreprises utilisent déjà les NFT pour des abonnements, des billets d'événement et des adhésions. L'unicité démontrable des NFT garantit que chaque exemplaire d'une offre limitée est lié à un utilisateur précis.

**3\. Programmes de fidélité :** Starbucks a fait tourner un programme de fidélité nommé Odyssey jusqu'en mars 2024, où ses membres accomplissaient des quêtes pour obtenir des NFT échangeables contre des récompenses numériques et réelles. Beaucoup d'autres marques proposent des NFT en récompense de fidélité, que les utilisateurs peuvent utiliser ou revendre quand ils le souhaitent.

**4\. Identité et certifications :** les tokens ERC-721 permettent de créer des identités et des certifications infalsifiables. Quand votre identité numérique ou vos diplômes sont des tokens ERC-721, il est facile de prouver que vous en êtes le propriétaire, et presque impossible pour quiconque de falsifier vos documents pour en abuser.

Pour obtenir un token ERC-721, créez un compte sur une place de marché NFT comme [OpenSea](https://opensea.io/) et achetez un NFT en vente. Pensez à suivre notre leçon [Sécurité web3](https://app.banklessacademy.com/lessons/web3-security) pour vous protéger des arnaques sur ces places de marché.

### ERC-1155 : tokens fongibles et non fongibles

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Souvent appelé `norme multi-tokens`, l'[ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) fusionne les concepts de l'ERC-20 et de l'ERC-721 et permet d'écrire des contrats prenant en charge à la fois des tokens fongibles et non fongibles. Cela ne change pas grand-chose à l'expérience utilisateur, mais peut aider à optimiser les fonctionnalités d'une plateforme. On pourrait par exemple déployer une monnaie de jeu fongible et des objets de jeu non fongibles sous un seul contrat.

Cette norme autorise aussi la création de tokens semi-fongibles : des tokens fongibles ou non selon les circonstances. Dans une collection de cartes à échanger, par exemple, toutes les cartes de même rareté peuvent être fongibles (interchangeables), tandis que des cartes de raretés différentes seront non fongibles (non interchangeables).

L'ERC-1155 permet enfin des transactions groupées pour envoyer plusieurs types de tokens d'un coup, ce qui peut réduire le coût en `gas` pour les utilisateurs.

---

Bravo d'être arrivé au bout de cette longue entrée du Manuel de l'Explorateur : « Comprendre les normes de token ».

N'oubliez pas de la collecter si vous souhaitez en garder un exemplaire pour vos voyages, ou pour soutenir les futurs contenus de Bankless Academy. Bon voyage, Explorateur !

---

## FAQ sur les normes de token d'Ethereum

### Comment les normes de token d'Ethereum sont-elles créées ?

Les normes sont proposées et publiées sur Ethereum via un processus appelé Ethereum Improvement Proposals (EIP). Il n'y a pas de vote : une proposition est affinée en discussion publique et, une fois que la communauté s'accorde largement sur son bon fonctionnement, des éditeurs la finalisent en une norme appelée Ethereum Request for Comment (ERC). Le numéro de série de l'EIP est ensuite ajouté pour former le nom complet de la norme, par exemple ERC-20 ou ERC-721.

### L'ether (ETH) suit-il une norme de token ?

Non. L'ETH est d'ailleurs appelé une « pièce » et non un « token », ce qui signifie qu'il dispose de sa propre [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### N'importe qui peut-il lancer un token ?

Oui. Ethereum est un écosystème sans permission et chacun peut lancer un token fongible ou non fongible. Il vous faudra toutefois des compétences techniques, ou l'accès à des outils sans code.

### Si deux tokens portent le même nom, comment savoir lequel est officiel ?

Pour identifier le token d'origine, vérifiez l'adresse du contrat qui publie le token que vous voulez utiliser, et comparez-la à la documentation officielle du projet. Vous éviterez ainsi d'interagir avec un contrat malveillant capable de vider votre portefeuille.

### Existe-t-il d'autres normes de token sur Ethereum que l'ERC-20, la 721 et la 1155 ?

Oui. Certaines sont très utilisées, comme l'[ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), une norme commune aux tokens de `coffre` qui représentent des dépôts générant du rendement en DeFi. Des normes plus récentes couvrent aussi les `comptes intelligents`, qui permettent à un portefeuille d'exécuter son propre code. D'autres, comme l'[ERC-223](https://eips.ethereum.org/EIPS/eip-223), l'[ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) et l'[ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), n'ont jamais percé ou servent des usages très spécifiques.

---

**Auteurs**

**[Musharraf](https://x.com/musharrafff)** est cofondateur d'Unhashed. Il accompagne les projets web3 dans leur stratégie de contenu et sa mise en œuvre.

**[Tetranome](https://twitter.com/Tetranome)** est Project Champion à Bankless Academy, où il travaille sur l'expérience utilisateur, l'interface, le design et le contenu.

**Éditrice**

**[Trewkat](https://twitter.com/trewkat)** est autrice et éditrice à BanklessDAO. Elle cherche à en apprendre le plus possible sur la crypto et les NFT, avec un intérêt particulier pour la meilleure façon de transmettre ces connaissances.

**Mécène**

Cet article sans sponsor fait partie de votre éducation Bankless gratuite. Collectez-le pour soutenir les futurs contenus !
