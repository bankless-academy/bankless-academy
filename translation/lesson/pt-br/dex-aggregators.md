---
TITLE: Agregadores de DEX
DESCRIPTION: Mergulhe nos agregadores de DEX, na liquidez e no cenário das exchanges DeFi.
LANGUAGE: Português
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

# Introdução

As `exchanges descentralizadas` (DEXs) eliminam os custos de intermediários e economizam dinheiro dos Exploradores na hora de negociar ativos.

Mas você sabia, Explorador, que dá para economizar ainda mais com a tecnologia DeFi? Com os `agregadores de DEX`, você examina ao mesmo tempo todas as negociações possíveis em várias DEXs e executa a melhor rota, tudo em uma única ação. Eles ajudam você a conseguir o melhor negócio ao fazer uma `troca` de tokens. Assim como os buscadores de passagens ajudam a achar o voo mais barato, os agregadores de DEX ajudam a extrair o máximo valor da sua negociação.

Nesta lição você vai ver:

1. Como as DEXs dividem a liquidez e como isso pode piorar as taxas de negociação.
2. Como os agregadores de DEX deixam os usuários ver e usar várias DEXs em uma só interface.
3. Várias formas de uma única interface de agregador economizar tempo e dinheiro dos Exploradores.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Como a liquidez afeta os preços

A quantidade de um token disponível para negociar em um único mercado é a `liquidez` desse token. A liquidez disponível influencia muito o `impacto no preço` das negociações no DeFi: um impacto grande significa que a negociação custa mais, e um impacto pequeno, que custa menos. A maioria prefere negociar em mercados com mais liquidez para reduzir o impacto no preço.

Pense em uma piscina: quanto mais água (liquidez) houver, menor será a _variação_ do nível (impacto no preço) quando alguém entra ou sai. O tamanho desse “alguém” (a negociação) também afeta a _variação_ do nível (impacto no preço).

# Um exemplo do impacto da liquidez nos preços

Vamos a um exemplo.

Imagine um token negociado em várias DEXs ao mesmo tempo. Uma DEX tem um pool profundo, com a maior parte da `liquidez` do token, enquanto outra tem um pool raso, com só uma pequena fração dela.

Se um Explorador comprar a mesma quantidade do token em cada pool, o `impacto no preço` será maior no pool raso. A mesma negociação puxa uma porcentagem bem maior da liquidez total daquele pool, então move mais o preço e custa mais caro para o comprador.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Complete as lacunas: para achar o melhor preço, as pessoas querem negociar em mercados com liquidez ________ para ter um impacto no preço ________ nas suas negociações.

- [ ] boa, máximo

> ℹ️ Tente de novo! Um impacto no preço máximo significa que a negociação custa mais, não menos.

- [x] alta, baixo

> ℹ️ Correto! Mais liquidez significa um impacto no preço menor, como uma piscina maior que muda menos quando alguém pula nela.

- [ ] baixa, bom

> ℹ️ Tente de novo! Liquidez baixa aumenta o impacto no preço e encarece as negociações.

- [ ] escassa, grande

> ℹ️ Tente de novo! Liquidez escassa causa um impacto no preço grande, justamente o que quem negocia quer evitar.

# O problema das DEXs tradicionais: liquidez escassa

O DeFi não para de crescer, mas surge um problema para os usuários: quanto mais DEXs são lançadas, mais o total de cada token se espalha. Isso é a liquidez escassa.

Lembre-se da piscina: se a água disponível (`liquidez`) for dividida entre várias piscinas, cada uma ficará mais “rasa” do que a piscina original.

No começo do DeFi, uma ou duas DEXs concentravam quase toda a liquidez. Em 2020, novas DEXs começaram a disputá-la; uma rival tirou mais de 1 bilhão de dólares de liquidez da Uniswap poucas semanas após o lançamento. Hoje a liquidez está espalhada por centenas de DEXs em muitas blockchains e redes `Layer 2`, deixando cada pool mais raso.

Assim, qualquer negociação tem um `impacto no preço` maior do que quando uma única DEX concentrava a liquidez do ecossistema. Sem novas inovações, negociar em uma DEX isolada sai mais caro para os Exploradores.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Quais dois fatores determinam o impacto no preço de uma negociação em uma DEX?

- [ ] A DEX escolhida para negociar e o tamanho da negociação

> ℹ️ Tente de novo! A DEX em si não importa. O que conta é a liquidez disponível no pool.

- [ ] Qual token é negociado e qual DEX é usada na negociação

> ℹ️ Tente de novo! Nem o token nem a marca da DEX determinam o impacto no preço. Quem determina é a liquidez e o tamanho da negociação.

- [x] O tamanho da negociação e a liquidez disponível

> ℹ️ Correto! Como em uma piscina, o tamanho do respingo depende de quem pula e de quanta água há.

- [ ] A liquidez disponível e qual token é escolhido para negociar

> ℹ️ Tente de novo! A liquidez é um dos fatores, mas o outro é o tamanho da negociação, não o token escolhido.

# Recombinando a liquidez com agregadores de DEX

É preciso muita `liquidez` para reduzir o impacto no preço e economizar o seu dinheiro. Os agregadores de DEX deixam os usuários rodar negociações por várias DEXs ao mesmo tempo e reduzir o impacto no preço: uma negociação grande saindo da carteira de um Explorador é quebrada em várias negociações pequenas em várias DEXs.

Os agregadores de DEX podem até encaminhar negociações por um `token intermediário`, ou mais de um, se isso der um resultado melhor, do mesmo jeito que um buscador de voos sugere uma escala extra em outro aeroporto quando sai mais barato. Essa descoberta da melhor `rota de negociação` é feita por algoritmos sofisticados que varrem todos os caminhos possíveis para achar a rota mais barata naquele momento.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Roteamento de negociações nos agregadores de DEX significa:

- [ ] As negociações passam por acordos especiais com DEXs específicas

> ℹ️ Tente de novo! Os agregadores varrem todas as DEXs disponíveis por algoritmo, não por acordos especiais.

- [ ] As negociações sempre passam por várias DEXs

> ℹ️ Tente de novo! Os agregadores dividem a negociação só quando isso melhora o resultado. Às vezes uma única DEX oferece a melhor rota.

- [ ] As negociações passam só pela DEX favorita do usuário

> ℹ️ Tente de novo! Ficar em uma só DEX anularia o propósito. Os agregadores buscam o melhor preço em muitas DEXs.

- [x] As negociações podem passar por várias DEXs e tokens intermediários

> ℹ️ Correto! Os algoritmos varrem todos os caminhos possíveis, incluindo “escalas” em tokens intermediários, para achar a rota mais barata.

# Como o custo do gas é calculado no Ethereum

Vamos relembrar como o gas é calculado antes de ver como os agregadores de DEX reduzem as taxas de rede. Essa economia pesa mais na Ethereum Mainnet, onde as taxas podem ser altas; nas redes `Layer 2`, elas costumam ser de centavos.

Assim como a gasolina de um carro, o `gas` é o combustível que roda o código da blockchain no Ethereum. Quanto mais cálculos, mais gas o código exige. O preço do gas é medido em frações muito pequenas de ether chamadas `gwei`, como os centavos para o dólar. 1 gwei é um bilionésimo de ether (1 gwei = 0,000000001 ETH).

O custo total do gas depende de quanto gas a sua transação usa e do preço unitário do gas naquele momento. A fórmula é esta:
_Gas usado * Preço do gas = Custo total do gas_

Por exemplo, com o gas a 22 gwei por unidade e uma transação que usa 120 mil unidades:
_120.000 * 22 gwei = 2.640.000 gwei_ _**ou**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Como os agregadores reduzem o custo do gas

Dividir a negociação geraria mais taxas por causa da atividade onchain extra, mas os agregadores avançados já preveem essas taxas e as incluem no cálculo da rota. Eles simulam as negociações fora da blockchain, incluindo o custo de `gas`, para achar as `rotas de negociação` que deixam o Explorador com o maior valor no fim da interação.

Alguns agregadores vão além. A 1inch, que criou a agregação de DEX, hoje também deixa executores profissionais competirem para realizar a sua negociação e pagarem o gas por você (um sistema chamado Fusion). Muitas vezes o usuário não paga gas nenhum.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Qual destas NÃO é uma forma de os agregadores de DEX reduzirem os custos de transação?

- [ ] Simular as transações fora da blockchain antes de executar

> ℹ️ Tente de novo! Os agregadores realmente simulam as negociações fora da blockchain, incluindo o custo do gas, para achar a melhor rota.

- [x] Pedir às DEXs que baixem as taxas de rede dos usuários

> ℹ️ Correto! As taxas de rede são definidas pela blockchain, não pelas DEXs. Ninguém pode simplesmente pedir para baixá-las.

- [ ] Considerar o custo do gas ao montar a rota

> ℹ️ Tente de novo! Os agregadores avançados incluem sim as taxas de transação no cálculo da rota.

- [ ] Deixar executores profissionais negociarem e pagarem o gas

> ℹ️ Tente de novo! Em sistemas de intenção como o 1inch Fusion, os executores realmente cobrem o gas dos usuários.

# Meta-agregadores

Existem até meta-agregadores de agregadores de DEX! Essas plataformas vasculham agregadores concorrentes e entregam as melhores cotações aos usuários. Por exemplo, a função de troca embutida em carteiras como a MetaMask reúne cotações de vários provedores, incluindo agregadores de DEX como o 1inch, e adiciona a própria taxa de serviço por cima.

Atenção: por mais práticos que sejam, os serviços de `meta-agregador` podem somar custos extras às taxas de transação da rede, encarecendo o total para o usuário. Explorador: confira se as suas negociações não estão saindo mais caras do que você pretendia.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Os meta-agregadores comparam vários agregadores de DEX para achar os melhores preços para os usuários.

- [x] Verdadeiro

> ℹ️ Correto! Os meta-agregadores vasculham agregadores de DEX concorrentes e entregam as melhores cotações aos usuários.

- [ ] Falso

> ℹ️ Tente de novo! Buscar em vários agregadores de DEX é exatamente o que os meta-agregadores fazem.

# Como evitar ataques sanduíche

Quem troca direto pelas `DEXs` pode perder valor até o limite da sua `tolerância de slippage`, quando bots colocam negociações logo antes e logo depois da sua para mover o preço. Essas perdas são os `ataques sanduíche`; só em 2021, elas custaram cerca de 235.000.000 de dólares aos usuários. Hoje, proteções como o `roteamento privado de transações` e a negociação por intenção protegem a maior parte das negociações do dia a dia, mas ainda vale manter uma tolerância de slippage baixa ao trocar tokens.

Felizmente, a liquidez recombinada pelos agregadores de DEX reduz o impacto no preço da negociação. Assim, o Explorador consegue manter a tolerância de slippage baixa e economizar mais com os agregadores de DEX do que negociando direto em uma DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Para se proteger, você deve manter a sua tolerância de slippage:

- [x] baixa

> ℹ️ Correto! Uma tolerância de slippage baixa limita quanto valor um ataque sanduíche consegue tirar da sua negociação.

- [ ] alta

> ℹ️ Tente de novo! Uma tolerância de slippage alta deixa os ataques sanduíche tirarem mais valor da sua negociação.

# Mais proteção contra sanduíches: negociações OTC

Alguns agregadores, como o 1inch, oferecem serviços de `OTC` (`mercado de balcão`) que dão proteção total contra ataques sanduíche. Esses serviços opcionais permitem negociar direto com outros usuários, em vez de passar pelos `pools de liquidez` do DeFi, dando ao Explorador mais uma ótima forma de economizar.

A CoW Swap segue outro caminho: o usuário assina um pedido de negociação (uma `intenção`) e `solucionadores` profissionais competem em `leilões em lote` para atendê-lo pelo melhor preço. Os solucionadores podem até casar dois usuários diretamente, então as negociações já ficam protegidas contra ataques sanduíche.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Quais ferramentas muitos agregadores de DEX oferecem para os usuários economizarem?

- [ ] Encaminhar negociações pela liquidez de várias DEXs.

> ℹ️ Tente de novo! A liquidez agregada reduz o impacto no preço, mas não é a única forma de os agregadores economizarem o seu dinheiro.

- [ ] Negociações OTC com proteção total contra ataques sanduíche.

> ℹ️ Tente de novo! Essa é uma das formas de economizar, mas não é a única.

- [ ] Considerar o custo do gas ao montar as melhores rotas.

> ℹ️ Tente de novo! Essa é uma das formas de economizar, mas não é a única.

- [x] Todas as anteriores

> ℹ️ Correto! Os agregadores combinam liquidez, consideram o custo do gas e podem oferecer negociações OTC, tudo para deixar mais valor com o usuário.
