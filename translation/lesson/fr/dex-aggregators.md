---
TITLE: Les agrégateurs de DEX
DESCRIPTION: Plongez dans les agrégateurs de DEX, la liquidité et le paysage des échanges DeFi.
LANGUAGE: Français
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

Les `échanges décentralisés` (DEX) suppriment les coûts d'intermédiaires et font économiser les Explorateurs quand ils échangent des actifs.

Mais saviez-vous, Explorateur, que la DeFi permet d'économiser encore davantage ? Avec les `agrégateurs de DEX`, vous balayez simultanément tous les échanges possibles sur plusieurs plateformes et exécutez le meilleur itinéraire, en une seule action. Ils vous obtiennent la meilleure affaire lors d'un `échange` de tokens. Comme un comparateur de vols vous trouve le billet le moins cher, un agrégateur de DEX maximise la valeur de votre échange.

Cette leçon montre :

1. Comment les DEX fragmentent la liquidité, et pourquoi cela dégrade les taux.
2. Comment les agrégateurs de DEX permettent de consulter et d'utiliser plusieurs DEX depuis une seule interface.
3. Les nombreuses façons dont une interface d'agrégateur fait gagner du temps et de l'argent.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# L'effet de la liquidité sur les prix

La quantité d'un token disponible à l'échange sur un marché donné s'appelle sa `liquidité`. Le niveau de liquidité disponible influence fortement l'`impact sur le prix` lors d'un échange en DeFi : un impact élevé rend l'échange plus coûteux, un impact faible le rend moins cher. La plupart des gens préfèrent échanger sur les marchés les plus liquides pour réduire cet impact.

Imaginez une piscine : plus il y a d'eau (la liquidité), plus la _variation_ du niveau (l'impact sur le prix) est faible quand quelqu'un plonge ou sort. La taille de ce « quelqu'un » (l'échange) joue aussi sur cette _variation_.

# Un exemple d'impact de la liquidité sur les prix

Prenons un exemple.

Imaginez un token échangé sur plusieurs DEX à la fois. L'un abrite un pool profond contenant l'essentiel de sa `liquidité`, un autre un pool peu profond n'en contenant qu'une petite fraction.

Si un Explorateur achète la même quantité de token dans chaque pool, l'`impact sur le prix` sera plus fort dans le pool peu profond. Le même échange y ponctionne un pourcentage bien plus élevé de la liquidité totale, il fait donc bouger le prix davantage et coûte plus cher à l'acheteur.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Complétez : pour obtenir le meilleur prix, on cherche à échanger sur des marchés à ________ liquidité pour avoir un impact ________ sur le prix.

- [ ] bonne, maximal

> ℹ️ Réessayez ! Un impact maximal sur le prix rend l'échange plus cher, pas moins.

- [x] forte, faible

> ℹ️ Correct ! Plus de liquidité signifie un impact plus faible, comme une grande piscine dont le niveau bouge peu quand on plonge.

- [ ] faible, bon

> ℹ️ Réessayez ! Une faible liquidité augmente l'impact sur le prix et renchérit les échanges.

- [ ] mince, fort

> ℹ️ Réessayez ! Une liquidité mince provoque un fort impact sur le prix, exactement ce qu'un trader veut éviter.

# Le défaut des DEX classiques : la liquidité mince

La DeFi continue de croître, mais un problème apparaît pour les utilisateurs : à mesure que de nouveaux DEX se lancent, la quantité totale de chaque token se disperse. C'est ce qu'on appelle la liquidité mince.

Reprenez la piscine : si l'eau disponible (la `liquidité`) est répartie entre plusieurs bassins, chacun sera plus « mince » que le bassin unique d'origine.

Aux débuts de la DeFi, un ou deux DEX détenaient l'essentiel de la liquidité. En 2020, de nouveaux DEX ont commencé à se la disputer ; un concurrent a détourné plus d'un milliard de dollars de liquidité d'Uniswap en quelques semaines. Aujourd'hui, la liquidité est répartie entre des centaines de DEX sur de nombreuses blockchains et réseaux `Layer 2`, ce qui amincit chaque pool.

Chaque échange a donc un `impact sur le prix` plus fort qu'à l'époque où un seul DEX concentrait la liquidité de l'écosystème. Sans nouvelles innovations, échanger sur un DEX isolé coûte plus cher aux Explorateurs.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Quels deux facteurs déterminent l'impact d'un échange sur le prix ?

- [ ] Le DEX choisi pour l'échange et la taille de l'échange

> ℹ️ Réessayez ! Le DEX lui-même n'entre pas en compte. C'est la liquidité disponible dans le pool qui compte.

- [ ] Le token choisi et le DEX utilisé pour l'échange

> ℹ️ Réessayez ! Ni le token ni la marque du DEX ne déterminent l'impact. Ce sont la liquidité et la taille de l'échange.

- [x] La taille de l'échange et la liquidité disponible

> ℹ️ Correct ! Comme dans une piscine, la taille de l'éclaboussure dépend du plongeur et de la quantité d'eau.

- [ ] La liquidité disponible et le token choisi

> ℹ️ Réessayez ! La liquidité est un facteur, mais l'autre est la taille de l'échange, pas le token.

# Recombiner la liquidité avec les agrégateurs

Il faut beaucoup de `liquidité` pour réduire l'impact sur le prix et vous faire économiser. Les agrégateurs de DEX permettent de faire passer un échange par plusieurs DEX à la fois : un gros échange depuis le portefeuille d'un Explorateur est découpé en plusieurs petits échanges répartis sur plusieurs DEX.

Ils peuvent même acheminer un échange via un `token intermédiaire`, voire plusieurs, si le résultat est meilleur, comme un comparateur de vols qui propose une escale supplémentaire quand elle revient moins cher. Cette recherche de l'`itinéraire d'échange` optimal est menée par des algorithmes sophistiqués qui explorent tous les chemins possibles pour trouver le moins coûteux à cet instant.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Dans un agrégateur de DEX, l'acheminement des échanges signifie que :

- [ ] Les échanges passent par des accords particuliers avec certains DEX

> ℹ️ Réessayez ! Les agrégateurs explorent tous les DEX disponibles par algorithme, pas via des accords particuliers.

- [ ] Les échanges passent toujours par plusieurs DEX

> ℹ️ Réessayez ! Les agrégateurs ne découpent un échange que si le résultat est meilleur. Un seul DEX offre parfois le meilleur itinéraire.

- [ ] Les échanges passent uniquement par le DEX préféré de l'utilisateur

> ℹ️ Réessayez ! S'en tenir à un seul DEX enlèverait tout l'intérêt. Les agrégateurs comparent de nombreux DEX.

- [x] Les échanges peuvent passer par plusieurs DEX et tokens intermédiaires

> ℹ️ Correct ! Les algorithmes explorent tous les chemins possibles, y compris des « escales » via des tokens intermédiaires.

# Le calcul du coût du gas sur Ethereum

Rappelons ce calcul avant de voir comment les agrégateurs réduisent les frais. Ces économies comptent surtout sur l'Ethereum Mainnet ; sur les réseaux `Layer 2`, les frais se comptent en centimes.

Comme le carburant d'une voiture, le `gas` fait tourner le code d'Ethereum. Plus vous demandez de calculs, plus votre code en consomme. Son prix se mesure en toutes petites unités d'ether, les `gwei` : 1 gwei vaut un milliardième d'ether (0,000000001 ETH).

Le coût total dépend du gas consommé et de son prix unitaire au moment de l'opération. La formule est la suivante :
_Quantité de gas utilisée * Prix du gas = Coût total en gas_

Par exemple, avec un gas à 22 gwei l'unité et une transaction qui en consomme 120 000 :
_120 000 * 22 gwei = 2 640 000 gwei_ _**soit**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Comment les agrégateurs réduisent les frais de gas

Découper un échange devrait entraîner plus de frais de transaction, à cause de l'activité onchain supplémentaire. Sauf que les agrégateurs avancés anticipent ces frais et les intègrent au calcul de l'itinéraire. Ils simulent les échanges hors chaîne, coûts en `gas` compris, pour trouver les `itinéraires d'échange` qui laissent le plus de valeur à l'Explorateur au bout du compte.

Certains vont plus loin. 1inch, pionnier de l'agrégation de DEX, laisse désormais des exécutants professionnels se disputer votre échange et payer le gas eux-mêmes (un système appelé Fusion). L'utilisateur ne paie souvent aucun gas.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Parmi ces méthodes, laquelle n'est PAS utilisée par les agrégateurs pour réduire les coûts ?

- [ ] Simuler les transactions hors chaîne avant de les exécuter

> ℹ️ Réessayez ! Les agrégateurs simulent bien les échanges hors chaîne, coûts en gas compris, pour trouver le meilleur itinéraire.

- [x] Demander aux DEX de baisser les frais de réseau

> ℹ️ Correct ! Les frais de réseau sont fixés par la blockchain, pas par les DEX. Personne ne peut simplement demander leur baisse.

- [ ] Tenir compte du coût du gas dans l'itinéraire

> ℹ️ Réessayez ! Les agrégateurs avancés intègrent bien les frais de transaction au calcul de l'itinéraire.

- [ ] Laisser des exécutants professionnels payer le gas

> ℹ️ Réessayez ! Dans les systèmes à intentions comme 1inch Fusion, les exécutants couvrent bien le gas.

# Les méta-agrégateurs

Il existe même des méta-agrégateurs d'agrégateurs de DEX ! Ces plateformes interrogent les agrégateurs concurrents et présentent les meilleures cotations. La fonction d'échange intégrée à des portefeuilles comme MetaMask, par exemple, collecte des cotations auprès de plusieurs fournisseurs, dont des agrégateurs comme 1inch, et ajoute sa propre commission.

À noter : pratiques, les services de `méta-agrégateur` peuvent ajouter des coûts par-dessus les frais de réseau et alourdir la note. Explorateurs, vérifiez que vos échanges ne finissent pas plus chers que prévu.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Les méta-agrégateurs comparent plusieurs agrégateurs de DEX pour trouver les meilleurs prix.

- [x] Vrai

> ℹ️ Correct ! Les méta-agrégateurs interrogent les agrégateurs concurrents et présentent les meilleures cotations.

- [ ] Faux

> ℹ️ Réessayez ! Comparer plusieurs agrégateurs de DEX est précisément leur rôle.

# Éviter les attaques sandwich

Qui échange directement sur un `DEX` peut perdre de la valeur jusqu'à sa `tolérance au glissement`, quand des bots placent des ordres juste avant et juste après le sien pour faire bouger le prix. Ces pertes s'appellent des `attaques sandwich` ; rien qu'en 2021, elles ont coûté environ 235 millions de dollars aux utilisateurs. Aujourd'hui, des protections comme le `routage privé des transactions` et les échanges par intentions mettent la plupart des échanges à l'abri, mais garder une tolérance au glissement basse reste payant.

Heureusement, la liquidité recombinée des agrégateurs de DEX réduit l'impact d'un échange sur le prix. Les Explorateurs peuvent donc garder une tolérance basse tout en économisant davantage qu'en échangeant directement sur un DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Pour vous protéger, votre tolérance au glissement doit rester :

- [x] basse

> ℹ️ Correct ! Une tolérance basse limite la valeur qu'une attaque sandwich peut extraire de votre échange.

- [ ] haute

> ℹ️ Réessayez ! Une tolérance élevée laisse les attaques sandwich prendre plus de valeur sur votre échange.

# Encore mieux protégé : les échanges OTC

Certains agrégateurs comme 1inch proposent même des services `OTC` (`de gré à gré`) offrant une protection totale contre les attaques sandwich. Ces services facultatifs permettent d'échanger directement avec d'autres utilisateurs, sans passer par les `pools de liquidité` de la DeFi : encore une belle façon d'économiser.

CoW Swap adopte une autre approche : l'utilisateur signe une demande d'échange (une `intention`), et des `solveurs` professionnels se disputent son exécution au meilleur prix lors d'`enchères groupées`. Un solveur peut même apparier deux utilisateurs directement, si bien que les échanges sont protégés des attaques sandwich par défaut.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Quels outils les agrégateurs de DEX offrent-ils pour faire économiser leurs utilisateurs ?

- [ ] Acheminer les échanges via la liquidité de plusieurs DEX.

> ℹ️ Réessayez ! La liquidité agrégée réduit l'impact sur le prix, mais ce n'est pas la seule source d'économies.

- [ ] Des échanges OTC totalement protégés des attaques sandwich.

> ℹ️ Réessayez ! C'est une source d'économies, mais ce n'est pas la seule.

- [ ] Tenir compte du coût du gas dans les itinéraires.

> ℹ️ Réessayez ! C'est une source d'économies, mais ce n'est pas la seule.

- [x] Tout ce qui précède

> ℹ️ Correct ! Les agrégateurs combinent la liquidité, intègrent le coût du gas et proposent des échanges OTC, pour laisser plus de valeur à l'utilisateur.
