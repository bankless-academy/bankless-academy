---
TITLE: Entendendo as stablecoins
DESCRIPTION: Use dólares, euros e muito mais na blockchain.
LANGUAGE: Português
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-stablecoins
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
## Pontos principais

> * As stablecoins são o equivalente na blockchain de uma moeda fiduciária, como o dólar ou o euro.
>
> * As stablecoins costumam ser emitidas como tokens (por exemplo, tokens `ERC-20` no Ethereum) e hoje circulam em muitas blockchains. Elas permitem que o usuário de DeFi passe rapidamente entre valor fiduciário e valor cripto sem sair da blockchain.
>
> * Existem várias categorias de stablecoin, cada uma com as suas escolhas e o seu perfil de risco.
>
> * As stablecoins podem render mais juros por ano do que guardar dinheiro em um banco tradicional, embora a regulação hoje defina quem pode oferecer esse rendimento, e como.

## Por que ter stablecoins?

As stablecoins viraram um pilar do ecossistema DeFi. Depois de chegar a cerca de 140 bilhões de dólares em oferta no pico de 2022 (na imagem abaixo), a oferta total passou de 300 bilhões em 2026, e as stablecoins liquidaram mais de 30 trilhões de dólares em valor transacionado em 2025, mais do que a Visa processou naquele ano.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Veja por que elas têm tanta procura:

* **Estabilidade:** ter stablecoins na sua carteira de autocustódia é como ter moeda fiduciária, só que na blockchain. Ao segurar uma stablecoin como a USD Coin (USDC), emitida pela Circle, você espera que ela mantenha o valor de 1:1 com o dólar americano, enquanto o preço de ativos como ether e bitcoin oscila.

* **Flexibilidade:** como esse valor atrelado existe como token na blockchain, é fácil ir e voltar entre valor fiduciário e valor cripto.

* **Acesso:** as stablecoins dão acesso a vários serviços financeiros descentralizados, como tomar empréstimo sem permissão ou emprestar para ganhar juros.

* **Segurança:** a criptografia torna extremamente difícil para um atacante capturar ou forjar transações.

A forma como uma stablecoin mantém a equivalência de 1:1, ou `paridade`, com a moeda fiduciária correspondente é a sua propriedade mais importante. Assim como uma moeda fiduciária só vale o que sustenta a sua base, o mecanismo de paridade de uma stablecoin determina o valor do que você tem.

## Categorias de stablecoin

Há três estratégias comuns para uma stablecoin manter a paridade de preço:

* 💵 **Lastreada em moeda fiduciária:** colateralizada 1:1 por reservas reais em dinheiro.

* 🔗 **Colateralizada em cripto:** sobrecolateralizada por depósitos de cripto em protocolos DeFi.

* 🔃 **Algorítmica:** algoritmos que equilibram a oferta no lugar de colateral completo, um desenho com histórico conturbado.

### 1\. Stablecoins lastreadas em moeda fiduciária

Essas stablecoins mantêm o valor emitindo uma oferta fixa de tokens coberta por reservas em moeda real. O preço onchain se sustenta pela economia de oferta e demanda: pouca gente quer pagar mais de um dólar real por um dólar de valor onchain, então simplesmente negocia em outro lugar. Para atender a uma demanda maior, o `emissor de stablecoin` trava mais moeda fiduciária e aumenta a oferta de tokens na mesma medida.

Entre as mais conhecidas estão a USDT, da Tether, e a USD Coin (USDC), da Circle. A Circle também emite uma equivalente atrelada ao euro, a EURC.

Os emissores de stablecoin geram receita de várias formas. Entre elas estão investir parte das reservas em títulos do Tesouro americano de curto prazo e equivalentes de caixa, além de um modelo misto que combina cobrança de taxas de transação e serviços de empréstimo.

> **Inovação e filantropia com stablecoins lastreadas em moeda fiduciária: Glo Dollar**
>
> A Glo Foundation tem uma abordagem inovadora para a receita das reservas com o [Glo Dollar](https://www.glodollar.org/) (USDGLO), a sua stablecoin lastreada em dólar: os juros ganhos sobre as reservas financiam programas de renda básica para pessoas em extrema pobreza. Só de segurar USDGLO, o usuário pratica filantropia embutida. Saiba como o Glo Dollar funciona [aqui](https://www.glodollar.org/articles/how-glo-works).

Pontos a considerar ao usar stablecoins lastreadas em moeda fiduciária:

* **Relatório de reservas:** quem tem os tokens precisa da garantia de que eles são cobertos um a um por reservas em moeda fiduciária. A maioria dos emissores publica `atestações` (um contador independente confirma que as reservas existiam em certa data), o que é mais fraco do que uma auditoria completa das finanças do emissor; nenhum grande emissor publica uma auditoria assim hoje. A Circle divulga atestações mensais do USDC (feitas pela Deloitte), e a Tether, historicamente opaca sobre o seu lastro, hoje publica atestações trimestrais (feitas pela BDO).

* **Regulação:** nos Estados Unidos, o GENIUS Act (sancionado em julho de 2025) exige que os emissores de stablecoins de pagamento mantenham reservas 1:1 em dinheiro e títulos do Tesouro de curto prazo, e proíbe que paguem juros a quem tem os tokens. Na União Europeia, o marco MiCA levou grandes exchanges a retirar da lista stablecoins fora das regras, como a USDT, para usuários europeus.

* **Risco de censura:** como USDC e USDT estão sujeitas a investigação governamental, os `smart contracts` desses tokens têm uma função de congelamento que trava os saldos onchain de um usuário em casos de atividade considerada indevida. Essa função vale também para tokens guardados em `carteiras sem custódia`.

O alto grau de centralização no setor das stablecoins lastreadas em moeda fiduciária deixa muito espaço para melhorar a forma de manter valor atrelado ao dinheiro de um jeito nativo de cripto.

### 2\. Stablecoins colateralizadas em cripto

As stablecoins colateralizadas em cripto são uma opção mais transparente e descentralizada, e essas qualidades ajudam a eliminar certos riscos. Elas mantêm a paridade com a moeda fiduciária por meio de reservas em ativos cripto. Como a volatilidade do mercado cripto afeta o valor total dessas reservas, essas stablecoins são sobrecolateralizadas, às vezes em até 200 %! Todos os ativos em colateral podem ser vistos onchain, o que dá ao usuário acesso 24 horas por dia à composição real da sua stablecoin.

O exemplo mais notável da categoria é a USDS, da Sky, sucessora da Dai (DAI) da MakerDAO, a primeira stablecoin colateralizada em cripto, depois que a MakerDAO virou Sky em 2024. Para uma versão mais pura de descentralização, a LUSD da Liquity é lastreada exclusivamente por depósitos sobrecolateralizados de ETH.

![Composição do colateral do DAI, predecessor do USDS (junho de 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Pontos a considerar:

* **Avaliação do colateral:** as reservas de uma stablecoin costumam reunir cripto, outras stablecoins e até outras classes de ativos. A USDS, por exemplo, é lastreada por ETH, stablecoins, ativos do mundo real como títulos do Tesouro americano e vários outros componentes menores. Para reduzir os riscos dessa variedade, a USDS é sobrecolateralizada (no momento em que escrevemos). Mesmo que o preço do ETH caísse 20 %, a USDS ainda teria [colateral suficiente](https://defillama.com/stablecoins) para cobrir os seus tokens. Mesmo assim, mais volatilidade no conjunto dos ativos pode começar a corroer a paridade.

* `Risco de contraparte`: depender de várias classes de ativos aumenta a chance de um deles passar por dificuldades e afetar o valor do que você tem. Por outro lado, a sua exposição a cada risco individual é apenas parcial.

* **Risco de governança:** esse tipo de stablecoin e o seu tesouro são geridos por um grupo descentralizado de votantes. Isso traz risco de erro humano e de captura da governança.

### 3\. Stablecoins algorítmicas

Esses tokens tentam manter a paridade equilibrando automaticamente a própria oferta, em vez de guardar colateral completo: um algoritmo onchain tira tokens de circulação quando o preço de mercado cai abaixo da paridade e cria novos quando ele sobe acima. No papel, isso promete uma stablecoin livre de bancos e de colateral. Na prática, a versão pura desse desenho fracassou, de forma catastrófica.

O exemplo definitivo é a UST da Terra, cujo algoritmo deixava qualquer um trocar 1 UST por 1 dólar em LUNA, o token volátil da Terra. Em maio de 2022, uma venda em massa de UST forçou o algoritmo a criar quantidades enormes de LUNA, o que derrubou o preço e provocou ainda mais vendas: uma `espiral da morte` que apagou cerca de 40 bilhões de dólares em poucos dias. A UST nunca recuperou a paridade.

Os projetos que sobreviveram abandonaram o modelo puro. A Frax, antes parcialmente algorítmica, passou a 100 % de colateralização em 2023; a sua stablecoin atual, a frxUSD, é lastreada por reservas que incluem fundos tokenizados do Tesouro americano, enquanto a FRAX virou o token de governança do protocolo.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Dos escombros surgiu uma categoria moderna distinta: os desenhos híbridos ou de “dólar sintético”, como a USDe da Ethena, que combina colateral em cripto com posições de negociação opostas que anulam as variações de preço (uma proteção “delta neutra”). Elas são colateralizadas, mas de um jeito novo, com riscos próprios, como depender das exchanges que mantêm essas posições e de condições de mercado que mantenham a proteção lucrativa.

Pontos a considerar:

* **Risco de espiral da morte:** uma paridade puramente algorítmica depende da confiança contínua do mercado. Quando a confiança quebra, o mecanismo de oferta pode amplificar a queda em vez de contê-la, e não sobra colateral para resgatar.

* **Muito técnico:** você precisa entender o que de fato lastreia o token (e em que condições esse lastro poderia falhar) para construir confiança e ter noção do risco e do retorno.

* **Risco de tecnologia emergente:** os desenhos híbridos e sintéticos ainda foram pouco testados em um ciclo completo de mercado. Use apenas tokens com várias auditorias de smart contract feitas por auditores de primeira linha, e lembre-se de que auditoria nenhuma protege contra um desenho econômico falho.

## Como escolher uma stablecoin

Qual é a melhor stablecoin para se ter? Como em tudo no DeFi, a resposta depende das suas **necessidades**, dos seus **valores** e da sua **tolerância a risco**.

Uma revisão rápida de cada categoria:

* 💵 **Lastreada em moeda fiduciária:** a abordagem tradicional, o mais perto que você chega de ter moeda fiduciária onchain.

  * Valores: convenção, confiança institucional.

  * Riscos: lastro opaco, possibilidade de o emissor congelar fundos.

* 🔗 **Colateralizada em cripto:** uma abordagem equilibrada e nativa de cripto, que espalha o risco do colateral entre várias classes de ativos.

  * Valores: diversificação, transparência, evolução.

  * Riscos: volatilidade do mercado cripto, dependência de outros ativos.

* 🔃 **Algorítmica:** a fronteira experimental: os desenhos puros fracassaram de forma catastrófica, e os híbridos modernos ainda não se provaram.

  * Valores: inovação, eficiência de capital, evolução.

  * Riscos: espirais da morte, desenhos econômicos falhos, falhas em smart contracts.

Como sempre, a melhor forma de aprender sobre algo é testar. Você pode até decidir ter uma variedade de stablecoins.

E lembre-se: nem todas as stablecoins de uma mesma categoria são iguais! Pesquise por conta própria antes de interagir com qualquer token novo.

---

Esperamos que você tenha gostado deste capítulo do Manual do Explorador: “Entendendo as stablecoins”.

Não esqueça de colecionar este capítulo se quiser ter uma cópia para consultar nas suas viagens, ou para apoiar os próximos conteúdos da Bankless Academy. Boa viagem, Explorador!

---

## Perguntas frequentes

### Quais são as stablecoins mais populares?

Olhar as principais stablecoins por `capitalização de mercado` dá uma ideia da preferência atual do mercado, mas isso não é uma recomendação de como você deve se posicionar, nem de quão segura seria essa posição.

Aqui está uma lista em tempo real das maiores stablecoins por capitalização de mercado: <https://defillama.com/stablecoins>

Quem usa criptomoedas costuma citar o “efeito Lindy” ao escolher opções de investimento. A ideia é que, quanto mais tempo algo existe, mais podemos esperar que continue existindo. Dezessete anos de história das criptomoedas mostraram que isso só é verdade de vez em quando.

### Onde eu compro stablecoins?

As exchanges centralizadas (CEXs) oferecem as stablecoins lastreadas em moeda fiduciária mais populares (e normalmente uma stablecoin da própria marca), mas costumam não ter os outros tipos.

Vá a uma exchange descentralizada (DEX), ou use um serviço de compra direto na carteira, como o “MetaMask Buy”, para adquirir tokens colateralizados em cripto e algorítmicos. Confira a nossa lição [Exchanges descentralizadas](https://app.banklessacademy.com/lessons/decentralized-exchanges) para saber mais sobre mercados entre pares.

### Como ganhar juros com stablecoins?

Algumas CEXs pagam rendimento só por você manter stablecoins na plataforma, financiado por uma parte do lucro delas para incentivar o uso. Nota para leitores nos Estados Unidos: pelo GENIUS Act, os emissores regulados de stablecoin não podem pagar juros a quem tem os tokens; o rendimento vem só de plataformas de terceiros, e a disponibilidade varia conforme a jurisdição.

Você também pode ganhar juros no DeFi, com plataformas de empréstimo sem necessidade de confiança. Elas conectam quem empresta e quem toma emprestado, gerindo o risco com colateral onchain e smart contracts. Quem empresta stablecoins pode ter retornos anuais bem maiores do que os do setor bancário tradicional, mas onde há recompensa, há risco!

O tema de empréstimos merece um capítulo próprio na Bankless Academy. Se você já quer saber mais, pode pesquisar plataformas como a [Aave.com](https://aave.com/) e a [Curve.fi](https://curve.fi/).

### O que acontece se uma stablecoin perde a paridade?

O preço de mercado de qualquer stablecoin oscila um pouco com o vaivém das negociações. Nas principais stablecoins, isso costuma ser de alguns centésimos de centavo acima ou abaixo de 1 dólar. Esses desvios mínimos são fechados rápido por quem aproveita as oportunidades de arbitragem.

Mas há casos em que uma stablecoin perde a paridade muito além de uma faixa segura e temporária. Esse efeito não é necessariamente permanente (USDC, março de 2023), mas pode ser (Terra, maio de 2022).

Alguns emissores de stablecoins lastreadas em moeda fiduciária, como o da USDC, oferecem resgate 1:1 do token para dinheiro comum pelo site. Se isso continua valendo em tempos de crise, aí já é outra história.

---

**Autor**

**[Tetranome](https://twitter.com/tetranome)** é Project Champion na Bankless Academy e cuida da experiência do usuário, da interface, do design e do currículo da plataforma.

**Editora**

**[Trewkat](https://twitter.com/trewkat)** é escritora e editora na BanklessDAO. Ela quer aprender sobre cripto e NFTs, com atenção especial à melhor forma de transmitir esse conhecimento.

**Mecenas**

Este artigo sem patrocínio faz parte da sua educação gratuita na Bankless Academy. Colecione o artigo para apoiar os próximos conteúdos!
