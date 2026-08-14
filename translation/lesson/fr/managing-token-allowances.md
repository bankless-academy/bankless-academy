---
TITLE: Gérer les autorisations de tokens
DESCRIPTION: Protégez votre portefeuille des interactions indésirables avec les smart contracts.
LANGUAGE: Français
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
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
## Points clés

> * Les autorisations de tokens sont des permissions accordées à des `smart contract` pour dépenser les tokens d'un portefeuille sans nouvelle approbation.
>
> * Elles peuvent être exploitées par des acteurs malveillants si l'utilisateur ignore que ces permissions existent.
>
> * Des outils comme Revoke.cash permettent d'inspecter et de révoquer facilement ces autorisations.

## Introduction

La DeFi donne à ses utilisateurs le contrôle de leurs actifs, y compris de leurs `clés privées`, avec une souveraineté sans précédent sur leurs fonds. Mais à grand pouvoir, grandes responsabilités : il revient à chacun d'assurer pleinement la sécurité et la gestion de ses actifs.

Il existe quatre grandes catégories d'arnaques dont les utilisateurs de la DeFi doivent avoir conscience :

* **Compromission de la phrase seed :** des attaquants tentent de vous faire révéler votre phrase seed, ce qui leur donnerait un accès illimité à vos fonds. Avec elle, un attaquant peut tout vider, et recommencer à chaque nouveau dépôt. Malheureusement, il n'existe aucun remède : la seule solution est de créer un portefeuille entièrement neuf avec une nouvelle `phrase seed`.

* **Transferts directs d'ETH :** des escrocs peuvent dissimuler un transfert d'ETH en le déguisant en appel de fonction, du type « Security Update ». La méthode de signature brute des anciennes versions de cette arnaque a été retirée de MetaMask ; les kits d'hameçonnage modernes abusent plutôt de demandes de signature d'apparence banale, en comptant sur vous pour signer sans lire ce qu'affiche votre portefeuille. Tomber dans ce piège signifie que vos fonds sont perdus, mais vous pouvez continuer à utiliser votre portefeuille pour d'autres transactions.

* **Annonces sur les places de marché NFT :** méfiez-vous des fausses annonces et des contrats malveillants qui exploitent les autorisations accordées à des places de marché comme OpenSea. Des escrocs peuvent vous faire signer un message `hors chaîne` qui met en vente vos `NFT` approuvés, sans aucune transaction visible.

* **Autorisations de tokens :** des attaquants peuvent manipuler les permissions pour accéder à davantage de fonds que prévu. Les « approbations » sont des transactions onchain qui donnent accès à vos tokens ou NFT. Les « permits » offrent le même accès mais ne demandent qu'une signature hors chaîne, sans gas. Uniswap et la plupart des applications d'échange modernes utilisent ce système (appelé Permit2). Les signatures de permit n'apparaissent pas comme des approbations onchain tant qu'elles ne sont pas utilisées, et peuvent comporter une date d'expiration ; la vue « Signatures » de Revoke.cash permet de les vérifier et de les annuler.

  À mesure que les smart contracts se répandent, les `autorisation de token` deviennent nécessaires pour permettre à des contrats de confiance d'exécuter des transactions sans exposer vos clés privées. Elles autorisent les dApps à déplacer automatiquement des tokens de votre portefeuille en votre nom. Ce confort améliore l'efficacité, mais expose aussi à des vecteurs d'attaque par arnaque ou accès non autorisé.

Dans cet article, nous parlerons des « autorisations de tokens » et présenterons un outil communautaire conçu pour les gérer.

## Autorisations de tokens : comprendre, gérer, sécuriser

Les autorisations de tokens sont des permissions accordées à l'avance à des smart contracts pour dépenser les tokens d'un portefeuille. Elles jouent un rôle essentiel : permettre des transactions sans redemander une permission explicite à chaque transfert. Mal utilisées, elles deviennent toutefois un vecteur d'attaque pour les utilisateurs peu vigilants. Pour limiter ce risque, il faut rester prudent, se former à la sécurité et comprendre leur fonctionnement réel.

Accorder des permissions à un contrat tiers se fait en deux étapes :

1. La connexion du portefeuille : en connectant votre portefeuille à une dApp, vous partagez simplement votre `adresse` avec son interface, ce qui lui permet d'afficher vos soldes et votre activité. La connexion seule n'accorde aucune permission onchain.

2. L'approbation du token : pour transiger avec la dApp, vous autorisez ensuite son smart contract à déplacer certains tokens en votre nom. C'est cette étape qui accorde un véritable pouvoir de dépense.

En gérant activement ces autorisations, on s'assure qu'aucun contrat ne retire de son portefeuille plus que le montant initialement prévu. Heureusement, des outils communautaires existent pour donner aux utilisateurs de la DeFi confiance et tranquillité d'esprit.

## Guide pas à pas : utiliser Revoke.cash

[Revoke.cash](https://revoke.cash/) permet de gérer facilement ses autorisations de tokens depuis un site simple, qui aide à inspecter et surveiller les permissions accordées aux différentes dApps. Voyons comment utiliser cet outil communautaire pour protéger vos actifs et reprendre le contrôle de votre portefeuille.

**1\. Connectez votre portefeuille :**

Pour commencer, rendez-vous sur [Revoke.cash](http://revoke.cash/) et cliquez sur « Connect Wallet » en haut à droite. Vous pouvez aussi saisir manuellement votre adresse publique dans la barre de recherche. Une fois le chargement terminé, vous verrez la liste de toutes vos `approbation de token` sur ce réseau.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Inspectez vos autorisations :**

Une fois connecté, vous pouvez examiner vos approbations existantes. Vous pouvez les trier, les filtrer ou rechercher une adresse de dépensier précise. Le tri « du plus récent au plus ancien » est particulièrement utile si vous soupçonnez une approbation malveillante récente. Servez-vous des options de tri et de filtre pour avoir une vue d'ensemble. Les autorisations sont accordées par chaîne : utilisez le sélecteur de réseau pour refaire l'examen sur chaque réseau que vous utilisez.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Révoquez les autorisations indésirables :**

Une fois les approbations à révoquer identifiées, cliquez simplement sur « Revoke » à côté de chacune. Vous pouvez aussi modifier le montant autorisé en cliquant sur l'icône crayon, si vous avez encore besoin de l'approbation mais souhaitez réduire votre risque.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Il peut être dans votre intérêt de révoquer ou d'ajuster une autorisation si :

1. Un smart contract récemment déployé est exploité et crée une faille dans un `échange décentralisé` que vous utilisez régulièrement.

   En avril 2023, le `DEX` populaire SushiSwap a subi un tel exploit : environ 3,5 millions de dollars ont été dérobés aux utilisateurs. Ceux qui n'avaient pas révoqué leur autorisation restaient exposés.

2. Une proposition de gouvernance malveillante met à jour plusieurs contrats dans le but de vider les fonds des utilisateurs.

   Plus de 2,5 millions de dollars d'actifs ont été compromis quand Atlantis Loans, un protocole `DeFi` sur la BNB Chain, a exécuté une proposition de gouvernance visant plusieurs contrats. Les utilisateurs qui avaient limité leurs approbations ont réduit le risque de voir leur portefeuille entièrement vidé.

## N'oubliez pas les délégations

Depuis la mise à jour Pectra d'Ethereum (mai 2025), les autorisations ne sont plus les seules permissions à surveiller. Une fonction récente (EIP-7702) permet à votre portefeuille de déléguer à du code supplémentaire, ce qui offre des commodités comme le regroupement de transactions, mais ouvre aussi une nouvelle technique de vidage : une seule signature malveillante peut installer un code « balayeur » qui transfère instantanément à un attaquant tout ce que vous déposez, sans que votre phrase seed ne soit jamais exposée. En 2025, des chercheurs de Wintermute ont constaté que plus de 97 % des premières délégations pointaient vers un code balayeur identique.

Revoke.cash affiche vos délégations actives sous l'onglet « Delegations », mais comme elles sont contrôlées par votre portefeuille et non par les dApps, c'est depuis votre portefeuille qu'on révoque une délégation indésirable. Dans MetaMask, ouvrez les détails du compte et repassez-le en compte standard. Si vous n'avez jamais choisi de passer à un `compte intelligent`, considérez toute délégation trouvée comme hostile.

---

Il est temps de renforcer les défenses de notre portefeuille ! Nous espérons que cette entrée du Manuel de l'Explorateur, « Gérer les autorisations de tokens », vous a plu.

N'oubliez pas de la collecter si vous souhaitez en garder un exemplaire pour vos voyages, ou pour soutenir les futurs contenus de Bankless Academy. Bon voyage, Explorateur !

---

## FAQ

### Quand utiliser Revoke.cash ?

Utilisez Revoke.cash régulièrement, surtout pendant les périodes où vous n'utilisez pas activement une dApp, en particulier pour les places de marché NFT. Limiter les approbations réduit le risque de perte lors d'un piratage, d'un exploit ou d'une arnaque par hameçonnage. En triant vos approbations par date, vous repérez les plus suspectes et pouvez les révoquer rapidement, limitant les dégâts.

### Me déconnecter de la dApp me protège-t-il des exploits d'approbation ?

Déconnecter votre portefeuille d'une dApp ne vous protège d'aucun exploit, d'approbation ou autre. Les approbations déjà accordées restent actives après la déconnexion, car elles sont enregistrées onchain.

### Comment éviter les exploits liés aux autorisations ?

Une approche proactive consiste à :

* n'accorder d'autorisations qu'à des dApps de confiance.

* passer régulièrement en revue vos autorisations.

* supprimer celles qui sont inutiles ou suspectes.

* vérifier l'absence de délégations inconnues.

* vous tenir informé des mises à jour de sécurité des dApps.

Pensez aussi à des outils tiers comme l'[extension de navigateur](https://revoke.cash) Revoke.cash : c'est une protection préventive qui vous avertit si vous êtes sur le point de signer quelque chose de potentiellement dangereux, et vous protège de l'hameçonnage et d'autres activités malveillantes.

### Puis-je récupérer des fonds avec Revoke.cash ?

Malheureusement non : Revoke.cash ne récupère pas les fonds volés. C'est un outil de prévention, qui réduit le risque d'être victime d'un exploit d'approbation. Révoquer les approbations ayant servi au vol permet toutefois d'empêcher la poursuite du pillage.

### Pourquoi mon portefeuille est-il vidé à chaque fois que je le recharge ?

Votre portefeuille abrite peut-être un « bot balayeur », un script qui surveille un portefeuille compromis et transfère instantanément tout nouveau dépôt avant que vous ne puissiez réagir. Une cause possible est une phrase seed compromise : dans ce cas, révoquer les approbations ne servira à rien, il faut abandonner ce portefeuille et en créer un nouveau. Mais une délégation malveillante est une cause tout aussi probable : du code balayeur installé via une signature qu'on vous a fait fournir, sans fuite de votre phrase seed. Regardez l'onglet « Delegations » sur Revoke.cash. Si vous trouvez une délégation inconnue, révoquez-la depuis votre portefeuille (par exemple via les détails du compte dans MetaMask). S'il n'y a aucune délégation et que le pillage continue, considérez votre phrase seed comme compromise et passez à un portefeuille neuf.

---

**Auteur**

**[Marcus](https://twitter.com/estmcmxci)** publie la newsletter de l'ENS DAO. Il étudie comment les revenus excédentaires issus des frais de protocole peuvent financer le développement de la couche applicative et d'autres infrastructures open source.

**Éditeurs**

**[Tetranome](https://twitter.com/Tetranome)** est Project Champion à Bankless Academy, où il travaille sur l'expérience utilisateur, l'interface, le design et le contenu.

**[Trewkat](https://twitter.com/trewkat)** est autrice et éditrice à BanklessDAO. Elle s'intéresse à la crypto et aux NFT, avec un intérêt particulier pour la meilleure façon de transmettre ces connaissances.

**Mécène**

Cet article sans sponsor fait partie de votre éducation Bankless gratuite. Collectez-le pour soutenir les futurs contenus !
