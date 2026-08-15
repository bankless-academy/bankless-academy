---
TITLE: Entendendo os padrões de token do Ethereum
DESCRIPTION: Descubra como os modelos de ativos do Ethereum atendem classes de ativos tradicionais e emergentes.
LANGUAGE: Português
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
## **Pontos principais**

> * Os padrões de `token` do Ethereum são regras e funções predefinidas usadas para lançar tokens no Ethereum.
>
> * Os padrões de token mais populares do Ethereum são `ERC-20`, `ERC-721` e `ERC-1155`.
>
> * Cada padrão permite níveis diferentes de `fungibilidade`, o que possibilita criar ativos onchain comuns e únicos.
>
> * Os padrões de token dão interoperabilidade aos tokens em todo o ecossistema Ethereum, o que facilita muito para as dApps integrarem tokens novos e para você ter acesso a eles!

## O que são os padrões de token do Ethereum?

Milhões de tokens cripto diferentes vivem no Ethereum e nas suas redes `Layer 2`, cada um com propriedades e usos próprios. Como a rede garante suporte fácil a todos esses tokens em seu ecossistema de dApps, sem que os desenvolvedores passem horas integrando cada um? E como quem usa esses tokens entende as propriedades principais deles sem ler horas de documentação?

Entram em cena os padrões de token!

Esses modelos e conjuntos de regras dão `interoperabilidade` aos tokens em todo o ecossistema Ethereum. Ou seja, as dApps só precisam dar suporte a alguns padrões comuns, em vez de milhares de tokens individuais. Para Exploradores como você, isso significa olhar o padrão de origem de um token e entender as suas capacidades básicas em todo o Ethereum.

Os padrões de token definem:

* Como o smart contract de um token deve ser escrito.

* O conjunto de funções que todo token daquele tipo precisa ter, para que qualquer dApp saiba como lidar com ele.

Hoje o Ethereum tem três padrões de token de uso comum:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: um padrão para tokens facilmente intercambiáveis (ou fungíveis).

   Por exemplo, os tokens USDC e UNI.

2. **ERC-721**: um padrão para tokens únicos (ou não fungíveis), conhecidos como `NFTs`.

   Por exemplo, os NFTs do Bored Ape Yacht Club.

3. **ERC-1155**: um padrão usado para tokens fungíveis e não fungíveis no mesmo contrato.

   Por exemplo, itens dentro de um videogame web3.

Agora você deve estar se perguntando: “o que exatamente é fungibilidade?”

Vamos olhar esse conceito da economia tradicional para entender a importância dele no ecossistema Ethereum.

## Fungibilidade x não fungibilidade.

**“Fungibilidade”** é uma propriedade de um ativo ou bem econômico, e indica duas características principais:

* Quando o ativo é negociado, as suas unidades são intercambiáveis sem nenhuma mudança de valor.

  (1 dólar pode ser trocado por outro 1 dólar, ou por quatro moedas de 25 centavos, ou por vinte moedas de 5 centavos.)

* Quando o ativo é dividido, as frações menores mantêm as suas características fundamentais.

  (1 dólar, dividido em quatro moedas de 25 centavos, continua servindo como reserva de valor ou para fazer compras.)

São exemplos de ativos fungíveis o petróleo, o dinheiro em espécie, os títulos públicos e as ações de empresas. Esses ativos não únicos são fáceis de trocar e de dividir.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Já a **“não fungibilidade”** indica:

* O ativo tem propriedades únicas que o distinguem dos seus pares, o que lhe dá um valor único.

  (Uma tela pintada por Van Gogh tem preço diferente de uma tela de um artista moderno em ascensão, por causa da aparência, da raridade, do nível de habilidade e da reputação por trás das obras.)

* O ato de dividir afeta as suas características fundamentais.

  (Uma pintura cortada em quatro partes tem pedaços que não se parecem entre si, e cada pedaço pode valer algo diferente. A intenção original da obra também se perde.)

Alguns exemplos de ativos não fungíveis são imóveis, obras de arte, identidades digitais e certificados. Esses ativos são mais difíceis de trocar e dividir por causa das suas propriedades únicas.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Se você ficar em dúvida sobre fungibilidade, pergunte a si mesmo: “é fácil trocar e dividir?” Se for difícil, provavelmente é não fungível!

O Ethereum quer ser “a camada de liquidação da economia mundial”. Poder representar ativos fungíveis e não fungíveis abre espaço para trazer classes de ativos tradicionais para onchain e para criar classes novas!

## Padrões e funções de token

Ao lançar um novo contrato de token no Ethereum, quem cria o ativo escolhe um dos padrões de token existentes. Isso dá ao token propriedades iniciais (chamadas de funções), como a oferta total do ativo, se ele pode ou não ser transferido para outra carteira e que informações pode guardar.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Por exemplo, o ERC-20 usa funções como estas:

**1\. totalSupply:** define a oferta total de um token ERC-20.

A oferta total de um token informa qualidades importantes, como o seu valor e a sua distribuição.

**2\. balanceOf:** consulta o saldo de token de um endereço específico.

Isso ajuda serviços e plataformas a conferir o saldo da sua carteira antes de executar a transação que você pediu.

**3\. transfer:** transfere tokens do seu endereço para outros endereços.

Toda vez que você envia um token cripto da sua carteira para outra, está usando a função transfer.

**4\. approve:** permite que um endereço (normalmente um smart contract) transacione automaticamente em nome da sua carteira até um valor definido.

Com essa função, você aprova que uma plataforma ou serviço use automaticamente uma parte definida dos seus fundos e execute transações.

**5\. allowance:** usada para saber quanto um gastador pode movimentar de uma carteira.

Uma plataforma pode usar essa função para conferir o total que você aprovou e se ela pode executar a transação sem que você assine manualmente.

Padronizar o processo de criação de tokens permite a `composabilidade` no ecossistema Ethereum. Por exemplo, quem constrói uma [exchange descentralizada (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) pode dar suporte a qualquer token que siga o padrão ERC-20, porque todos vão se comportar de forma parecida. Não é preciso programar suporte individual para cada token listado.

Da mesma forma, quem constrói um marketplace de NFT só precisa deixar a plataforma compatível com os padrões ERC-721 e ERC-1155 para dar suporte a todos os NFTs criados no Ethereum.

Agora que entendemos padrões de token, fungibilidade e funções, vamos ver os usos dos três padrões principais do Ethereum.

### ERC-20: tokens fungíveis

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

O [ERC-20](https://eips.ethereum.org/EIPS/eip-20) é um padrão de token que define as regras para criar contratos de tokens fungíveis.

Os tokens ERC-20 vão de uma `memecoin` a um meio de pagamento em um mercado descentralizado. Na maioria dos casos, eles se encaixam em uma destas quatro categorias:

**1\. Token de utilidade:** serve a um uso específico dentro do ecossistema de um aplicativo ou plataforma.

Exemplo: o Chainlink (LINK) é usado para pagar os operadores que entregam dados do mundo real, como preços de mercado, aos smart contracts.

**2\. Token de governança:** dá a quem o tem direito de voto nas decisões de governança de uma plataforma.

Exemplo: quem tem tokens do Ethereum Name Service (ENS) pode votar em propostas para atualizar o protocolo de registro de domínios.

**3\. Stablecoin:** feita para manter um valor estável, normalmente igual ao dólar americano.

Exemplos: Tether (USDT), USD Coin (USDC) e novatas como a USDS, da Sky.

**4\. Token de valor mobiliário:** representa a posse de um ativo subjacente, como ações de uma empresa.

Exemplo: fundos de investimento tokenizados, como os fundos de renda que grandes gestoras começaram a emitir onchain em 2024.

Um mesmo token pode se encaixar em mais de uma categoria. Um token de governança, por exemplo, também pode ter utilidade dentro de uma plataforma.

Você pode [comprar tokens ERC-20 em uma DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) como a Uniswap ou em uma `exchange centralizada` como a Binance ou a Coinbase.

### ERC-721: tokens não fungíveis

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

O [ERC-721](https://eips.ethereum.org/EIPS/eip-721) é um padrão que define as regras para os usuários do Ethereum criarem ou usarem tokens não fungíveis. Ele garante que cada NFT criado seja comprovadamente único.

Quais são alguns usos dos tokens ERC-721?

**1\. Posse de ativos:** os tokens ERC-721 são muito usados para representar a posse de ativos digitais e do mundo real que são únicos. Por exemplo, este capítulo do Manual do Explorador tem 100 versões numeradas individualmente (não só para ler, mas para ter), como um livro na sua estante digital. (Você pode `mintar` e ter a sua clicando no botão dourado “Collect Entry” lá em cima.) Os “Datadisk Collectibles” da Bankless Academy funcionam do mesmo jeito.

**2\. Assinaturas e associações:** criadores, artistas, clubes e empresas já usam NFTs para assinaturas, ingressos de eventos e associações. A unicidade comprovável dos NFTs garante que cada unidade da oferta fixa fique ligada a uma pessoa.

**3\. Programas de fidelidade:** a Starbucks manteve até março de 2024 um programa de fidelidade chamado Odyssey, em que os membros completavam missões para obter NFTs trocáveis por recompensas digitais e do mundo real. Muitas outras marcas oferecem NFTs como recompensa de fidelidade, que o usuário pode resgatar ou vender quando quiser.

**4\. Identidade e certificados:** os tokens ERC-721 podem criar identidades e certificados à prova de adulteração. Quando a sua identidade digital ou os seus certificados são tokens ERC-721, fica fácil provar que são seus e quase impossível alguém falsificá-los e usá-los de forma indevida.

Para conseguir um token ERC-721, crie uma conta em um marketplace de NFT como a [OpenSea](https://opensea.io/) e compre qualquer NFT listado. Não deixe de fazer a nossa lição [Segurança no web3](https://app.banklessacademy.com/lessons/web3-security) para se proteger de golpes nesses mercados.

### ERC-1155: tokens fungíveis e não fungíveis

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Muitas vezes chamado de `padrão multitoken`, o [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) une os conceitos do ERC-20 e do ERC-721 e deixa os desenvolvedores escreverem contratos que suportam tokens fungíveis e não fungíveis. Isso não muda muito a experiência do usuário, mas ajuda a otimizar recursos de uma plataforma. Um exemplo seria lançar em um único contrato uma moeda fungível de um jogo e os ativos não fungíveis desse mesmo jogo.

Esse padrão também permite criar tokens semifungíveis: tokens que são fungíveis e não fungíveis em situações específicas. Por exemplo, em uma coleção de cartas colecionáveis, todas as cartas de mesma raridade podem ser fungíveis (intercambiáveis), enquanto cartas de raridades diferentes podem ser não fungíveis (não intercambiáveis).

O ERC-1155 também permite transações em lote, para enviar vários tipos de token de uma vez, o que pode reduzir o custo de `gas` para o usuário.

---

Parabéns por chegar ao fim deste longo capítulo do Manual do Explorador: “Entendendo os padrões de token”.

Não esqueça de colecionar este capítulo se quiser ter uma cópia para consultar nas suas viagens, ou para apoiar os próximos conteúdos da Bankless Academy. Boa viagem, Explorador!

---

## Perguntas frequentes sobre padrões de token do Ethereum

### Como os padrões de token do Ethereum são criados?

Os padrões de token são propostos e publicados no Ethereum por um processo chamado Ethereum Improvement Proposals (EIPs). Não há votação: a proposta é refinada em discussão pública e, quando a comunidade concorda de forma ampla que ela funciona, os editores a finalizam como um padrão chamado Ethereum Request for Comment (ERC). O número de série da EIP é então acrescentado para completar o nome do padrão, como ERC-20 ou ERC-721.

### O ether (ETH) segue algum padrão de token?

Não. Na verdade, o ETH é chamado de “moeda”, e não de “token”, o que significa que ele tem a própria [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### Qualquer pessoa pode lançar um token?

Sim. O Ethereum é um ecossistema sem permissão e qualquer pessoa pode lançar um token fungível ou não fungível. Mas você vai precisar de conhecimento técnico ou de acesso a ferramentas sem código.

### Se dois tokens têm o mesmo nome, como sei qual é o oficial?

Para identificar o token original, confira o endereço do contrato usado para publicar o token que você quer usar e compare com a documentação oficial do projeto. Assim você garante que não vai interagir com um contrato de token malicioso capaz de esvaziar a sua carteira.

### Existem outros padrões de token no Ethereum além do ERC-20, do 721 e do 1155?

Sim. Alguns são bastante usados, como o [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), um padrão comum para tokens de `cofre` que representam depósitos rendendo no DeFi. Padrões mais novos também cobrem as `contas inteligentes`, que deixam uma carteira rodar o próprio código. Outros, como o [ERC-223](https://eips.ethereum.org/EIPS/eip-223), o [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) e o [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), não pegaram ou atendem usos muito específicos.

---

**Autores**

**[Musharraf](https://x.com/musharrafff)** é cofundador da Unhashed. Ele ajuda projetos web3 com estratégia e execução de conteúdo.

**[Tetranome](https://twitter.com/Tetranome)** é Project Champion na Bankless Academy e cuida da experiência do usuário, da interface, do design e do conteúdo.

**Editores**

**[Trewkat](https://twitter.com/trewkat)** é escritora e editora na BanklessDAO. Ela quer aprender sobre cripto e NFTs, com atenção especial à melhor forma de transmitir esse conhecimento.

**Mecenas**

Este artigo sem patrocínio faz parte da sua educação gratuita na Bankless Academy. Colecione o artigo para apoiar os próximos conteúdos!
