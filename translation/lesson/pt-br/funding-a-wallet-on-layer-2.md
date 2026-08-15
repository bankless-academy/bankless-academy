---
TITLE: Adicionando fundos na Layer 2
DESCRIPTION: Aprenda a adicionar fundos na L2 usando CEXs, rampas de entrada e bridges.
LANGUAGE: Português
WRITERS: HiroKennelly
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2
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

> * Existem várias formas de adicionar fundos à sua carteira em uma solução de escalabilidade do Ethereum como Base, Optimism ou Arbitrum.
>
> * Exchanges centralizadas costumam oferecer uma `rampa de entrada` direta para a Layer 2.
>
> * Aplicativos de pagamento de terceiros permitem adicionar fundos a uma carteira na Layer 2 a partir de uma conta bancária ou de um cartão de débito ou crédito.
>
> * Os bridges dos protocolos permitem enviar fundos da `Ethereum Mainnet` para a Layer 2.

Se você é novo em cripto, tanta conversa sobre a importância da `Layer 2` (ou L2) deve soar estranha, até confusa. Diferente da [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), que geralmente se refere à [Ethereum Mainnet](https://ethereum.org/), Layer 2 é o nome de um tipo específico de solução de escalabilidade do Ethereum que permite herdar a segurança da rede e, ao mesmo tempo, ter taxas baixas e inclusão rápida em `blocos`. Se você já ouviu falar de [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/) ou [Base](https://www.base.org/), essas são soluções de Layer 2. A [Polygon](https://polygon.technology/) costuma ser colocada no mesmo grupo (na verdade é uma `sidechain`, mas não vamos nos deter nisso aqui).

Toda transação no Ethereum paga uma taxa, conhecida como `gas`. O gas é cotado em `gwei`, uma unidade minúscula de ETH. As taxas sobem e descem com a demanda: no pico de 2021, uma simples `troca de tokens` na Mainnet podia custar dezenas de dólares, e os mints de NFT mais badalados levavam as taxas muito mais alto. Hoje, uma transação típica na Mainnet custa bem menos de um dólar, e a mesma ação em uma Layer 2 custa centavos ou menos.

Como as transações na Layer 2 confirmam rápido e custam pouco, muitos dos protocolos mais inovadores estão sendo construídos em L2s. Mas, se você não está no ecossistema há algum tempo, não é intuitivo saber como começar a usar as Layer 2. Existe um ponto de partida claro para a sua jornada pelas soluções de escalabilidade do Ethereum: adicionar fundos à sua `carteira` na Layer 2.

Há três formas principais de adicionar fundos a uma carteira na L2: mover sua cripto de uma `exchange centralizada` direto para uma rede Layer 2, usar um serviço de pagamento cripto de terceiros, ou enviar seus ativos digitais da Mainnet para a L2 por um protocolo de bridge.

> Atenção: para continuar, você precisa de uma carteira de criptomoedas, como [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/) ou [Taho](https://taho.xyz/), e de um `endereço` de carteira Ethereum. Se ainda não criou uma `carteira sem custódia`, [faça esta lição primeiro](https://app.banklessacademy.com/lessons/wallet-basics)!
>
> Depois de ter um endereço de carteira Ethereum sem custódia, você estará pronto para seguir na sua jornada cripto.

## Adicionar fundos por CEXs

Adicionar fundos à sua carteira direto de uma exchange centralizada (CEX) talvez seja a forma mais simples de mover ativos digitais para uma L2, principalmente se você já tem criptomoedas na exchange. A maioria das grandes CEXs oferece essa opção, embora nem sempre fique claro para o usuário.

Na [Coinbase](https://www.coinbase.com/), por exemplo, dá para enviar seus fundos direto para redes como Optimism, Polygon ou Base (a Layer 2 da própria Coinbase) em poucos passos:

1\. Acesse a [Coinbase](https://www.coinbase.com/).

2\. [Compre](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) ou mantenha ETH na Coinbase.

3\. Selecione “Send & Receive” (enviar e receber), no topo do site.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Digite o valor em moeda local ou em ETH que quer enviar (dá para alternar entre os dois à direita do valor), selecione “Pay with” (pagar com) e escolha Ethereum; no campo “To” (para), digite o endereço da carteira que vai receber os fundos. Selecione “Continue” (continuar).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Na tela seguinte, selecione “Network” (rede) e mude a rede de Ethereum para Optimism (a lista também traz outras Layer 2, como a Base).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Revise e, se estiver tudo certo, selecione “Send Now” (enviar agora).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

A maioria das grandes exchanges permite enviar cripto direto para uma L2. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/) e [Kraken](https://www.kraken.com/) aceitam saques para as principais Layer 2, como Base, Optimism e Arbitrum. Dica: sempre confira a lista de redes de saque da sua exchange para ver quais L2s ela aceita antes de enviar.

## Rampas de entrada de terceiros

Outra forma simples de adicionar fundos à sua carteira na L2 é aproveitar os serviços diretos para L2 oferecidos por muitas empresas de pagamento cripto. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/) e [Transak](https://global.transak.com/) são três das opções mais populares para colocar fundos em carteiras cripto sem passar por uma exchange centralizada.

Como a maioria das exchanges, essas `rampas de entrada` de terceiros vão pedir informações de `Know-Your-Customer`. Mas, passado esse trâmite básico, elas são um jeito fácil de comprar cripto em todo o ecossistema e levar para a Layer 2.

Na MoonPay, os passos são:

1\. Acesse a [MoonPay](https://www.moonpay.com/).

2\. Selecione “Buy crypto” (comprar cripto), no topo ou no meio do site.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Digite o valor em moeda local que quer enviar e a denominação correta.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Escolha um ativo digital, neste caso ETH. Digite “ETH” e você verá as diferentes redes em que pode comprá-lo (talvez precise rolar a tela); escolha a Layer 2 que quer usar. Clique em “Continue” (continuar).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Em seguida, será pedido que você informe seus dados de verificação pessoal e de pagamento.

6\. Ao terminar, digite o endereço da sua carteira Ethereum. Vão pedir que você confirme que a carteira é segura de usar.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Conclua, confirme que as informações estão corretas e selecione “Pay” (pagar).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

Assim como nas CEXs, a maioria das grandes rampas de pagamento de terceiros oferece envio direto para L2. Aproveite essas inovações para economizar em taxas de transação e ampliar o alcance das suas explorações pela `blockchain`.

## Adicionar fundos por bridges

Se você já tem fundos na `Ethereum Mainnet`, de longe a forma mais fácil de levar sua cripto para a L2 é usar um protocolo de bridge. Bridges é o nome que damos aos protocolos feitos para mover nossos fundos pelo criptoverso, e existem vários pensados para levar cripto da Ethereum Mainnet para as Layer 2.

### Bridges nativos

Bridges nativos são os criados pelos próprios protocolos de Layer 2. Em um `rollup otimista` como Arbitrum, Optimism ou Base, os depósitos costumam chegar à L2 em poucos minutos, mas devolver a cripto para a Mainnet leva cerca de uma semana. O [bridge da Arbitrum](https://bridge.arbitrum.io/) e o [bridge da Optimism](https://app.optimism.io/bridge/) funcionam assim: a espera dá tempo para a rede detectar saques inválidos antes de liquidá-los.

### Bridges de terceiros

Como ninguém gosta de esperar, existem vários serviços de bridge de terceiros que movem nossos fundos na hora, para dentro e para fora das L2s. Entre as opções mais populares estão o [Across Protocol](https://across.to/bridge) e o [Relay](https://relay.link/bridge), e você pode usar o [Bungee](https://bungee.exchange/) para comparar as taxas de vários protocolos. Para usar o Across, por exemplo, basta:

1\. Acessar o bridge do [Across Protocol](https://across.to/bridge) e conectar sua carteira.

2\. Para levar fundos para a L2, selecionar Ethereum em “From” (de).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Escolher seu ativo e o valor que quer transferir (dica: transfira apenas a `moeda` nativa da blockchain, neste caso ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Depois, selecionar sua solução L2 em “To” (para).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. Revisar a transação e, se estiver tudo certo, selecionar “Send” (enviar).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Mover fundos da Mainnet para a L2 é simples assim, e quase todos os bridges funcionam do mesmo jeito. Você escolhe uma blockchain de origem, um destino como Base ou Optimism, um ativo e um valor, e atravessa a fenda entre as cadeias. Dica: como no envio a partir de uma CEX, você pode usar o [L2BEAT](https://l2beat.com/bridges/summary) para achar um bridge compatível com o seu destino na L2.

## O caminho para a L2

As Layer 2 oferecem a usuários de todos os níveis a chance de experimentar as finanças descentralizadas de um jeito que costuma ser proibitivo na Mainnet. Como transacionar nessas redes custa centavos (dá para comparar os custos [aqui](https://www.growthepie.com/)), elas são um ótimo lugar para se familiarizar com as peças básicas das finanças descentralizadas, como as trocas, os `pools de liquidez` ou os `yield farms`.

Usar uma CEX ou um bridge para levar fundos à L2 é um passo necessário na sua jornada de novato a usuário competente. Lembre-se: para ver seus fundos aparecerem na carteira, talvez seja preciso adicionar a rede nas configurações dela, o que dá para fazer no [Chainlist](https://chainlist.org/). Se você só quer conferir se os fundos chegaram bem à sua carteira na L2, busque seu endereço em um `explorador de blocos` como o [Blockscan](https://blockscan.com/), que pesquisa várias redes de uma vez, ou entre em uma DEX, como a [Uniswap](https://app.uniswap.org/), e selecione a rede L2 e o ativo para ver seu saldo.

Conforme suas habilidades crescem, você vai precisar descobrir como reduzir suas taxas de transação. Aprender a adicionar fundos a uma carteira na L2 é o primeiro passo, mas os próximos passos da sua jornada cripto dependem de você. Boas-vindas, explorador: um novo mundo espera por você.

---

Vamos em frente, a Layer 2 do Ethereum espera por você! Esperamos que você tenha gostado desta entrada do Manual do Explorador: “Adicionando fundos na Layer 2”.

Não esqueça de colecionar esta entrada se quiser ter uma cópia à mão nas suas viagens, ou para apoiar os próximos conteúdos da Bankless Academy. Boa viagem, Explorador!

***

**Autor**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** é escritor, editor e coordenador na BanklessDAO e editor-chefe do Good Morning News. Ele também ajuda a construir uma organização focada em subvenções na DAOpunks.

**Editora**

**[Trewkat](https://twitter.com/trewkat)** é escritora e editora na BanklessDAO. Ela tem interesse em aprender o máximo possível sobre cripto e NFTs, com foco especial em como comunicar melhor esse conhecimento.

**Patrocinador**

Este artigo foi financiado pela **[Optimism](https://www.optimism.io/)**.
