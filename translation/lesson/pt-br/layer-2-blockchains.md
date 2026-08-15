---
TITLE: Blockchains Layer 2
DESCRIPTION: Entre no ecossistema Layer 2 para acelerar suas transações e pagar menos taxas.
LANGUAGE: Português
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

# Introdução

O ideal para qualquer blockchain é ser o mais descentralizada, segura e escalável possível. Construir uma que faça bem as três coisas se mostrou um desafio, ainda sem solução. Esse desafio tem nome: o `trilema da blockchain`.

Bitcoin e Ethereum são bem descentralizados e seguros, mas não escalam bem, como mostram as taxas altas e as longas filas de transações quando a rede está cheia. Para contornar isso, os Exploradores podem usar tecnologias que reduzem muito o custo das transações e aumentam a velocidade. Em conjunto, elas são chamadas de soluções de escalabilidade de Layer 2 (L2).

A `Lightning Network` é a solução de escalabilidade mais conhecida do Bitcoin e se apoia em `canais de pagamento` para escalar pagamentos entre as partes. O Ethereum alivia o trilema com várias soluções L2, apoiadas pelo armazenamento `blob`, barato e temporário, adicionado à Mainnet em 2024 (uma forma leve do “sharding” antes planejado).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Canais de pagamento

Na blockchain do Bitcoin, a Lightning Network usa canais de pagamento bidirecionais, que permitem a várias partes trocar BTC sem transacionar na cadeia principal.

A arquitetura permite que dois usuários abram um canal de pagamento entre si. Cada canal é sempre entre duas partes, mas os pagamentos podem ser roteados por uma rede de canais conectados para chegar a usuários mais distantes. Entre a abertura e o fechamento, as partes movimentam fundos entre si. O micro-registro de cada participante é atualizado depois que os dois assinam a transação, o que costuma exigir que os nós das duas partes estejam acessíveis.
Qualquer uma das partes pode fechar o canal a qualquer momento, transmitindo à blockchain a versão mais recente do micro-registro.

Canais de pagamento não suportam interações avançadas com `smart contract`, apenas transações básicas peer-to-peer.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Você precisa estar online para transacionar na Lightning Network do Bitcoin.

- [x] Verdadeiro

> ℹ️ Correto! Atualizar um canal de pagamento exige a assinatura dos dois usuários, então os nós das duas partes precisam estar acessíveis.

- [ ] Falso

> ℹ️ Tente de novo! As atualizações do canal precisam da assinatura das duas partes, então os nós delas precisam estar online.

# Soluções de escalabilidade do Ethereum

Os desenvolvedores do Ethereum trabalham em soluções de escalabilidade nativas quase desde que a rede existe.

A maior parte da comunidade defende que, para ser uma “solução de escalabilidade do Ethereum”, um projeto precisa corrigir as limitações de `escalabilidade` da rede sem sacrificar `segurança` nem `descentralização`. Na prática, os usuários querem transações mais rápidas e `gas` mais barato que na Mainnet. Para competir, algumas soluções aceitam mais concessões no trilema que outras.

O Ethereum se define pela capacidade de rodar smart contracts, então suas soluções de escalabilidade também precisam herdá-la. De pouco adianta ter transações rápidas e baratas se o usuário não consegue acessar suas `dApps` favoritas a partir de uma Layer 2.

# Knowledge Check 2

As soluções de escalabilidade do Ethereum:

- [ ] usam canais de pagamento para escalar a rede.

> ℹ️ Tente de novo! Canais de pagamento são a abordagem da Lightning Network do Bitcoin. O Ethereum escala com soluções como os rollups.

- [ ] não suportam interações com smart contracts.

> ℹ️ Tente de novo! O suporte a smart contracts é essencial: o usuário precisa acessar suas dApps favoritas na Layer 2.

- [x] devem melhorar a escalabilidade sem enfraquecer o trilema.

> ℹ️ Correto! Uma verdadeira solução de escalabilidade resolve a escalabilidade sem sacrificar segurança nem descentralização.

- [ ] permitem transações mais rápidas com gas mais caro.

> ℹ️ Tente de novo! As soluções de escalabilidade buscam transações mais rápidas E gas mais barato que a Mainnet do Ethereum.

# Conectando Layer 1 e Layer 2

Como vimos em [Fundamentos da blockchain](https://app.banklessacademy.com/lessons/blockchain-basics), blockchains são bancos de dados conhecidos como `livros-razão`, que registram uma lista cronológica de transações protegida por criptografia. Blockchains L1 e soluções L2 são blockchains por direito próprio, cada uma com seu banco de dados de endereços e dados.

Uma infraestrutura chamada `bridges` transfere informação entre bancos de dados de blockchains diferentes. Por exemplo, se você imaginar a Mainnet do Ethereum (ou qualquer outra blockchain `L1`) como uma ilha, e outra blockchain ou sua solução de escalabilidade preferida como outra, um bridge cripto é o nome genérico da estrada que liga essas duas ilhas digitais.

A tecnologia é muito complexa, mas, do ponto de vista do usuário final, o processo é tão simples quanto escolher um destino.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechains

Uma `sidechain` é uma blockchain separada, que roda de forma independente do Ethereum, mas ligada à Mainnet por um `bridge`. Para migrar tokens, você os trava em um contrato de bridge na Mainnet e tokens equivalentes são emitidos na sidechain. Atenção: isso NÃO dá aos seus fundos a segurança do Ethereum; o bridge e a sidechain dependem dos validadores da própria sidechain. Se um deles for comprometido (como no hack do bridge da Ronin em 2022, de 625 milhões de dólares), os fundos travados podem ser roubados.

Sidechains continuam sujeitas ao trilema. O `gas` mais barato e as transações mais rápidas vêm de um conjunto de validadores menor, porém mais potente: elas trocam parte da descentralização e da segurança por escalabilidade.

Sidechains como a Polygon PoS publicam com regularidade instantâneas (“checkpoints”) no Ethereum. Isso dá ao histórico delas uma forma de finalidade e permite provar saldos ao sair pelo bridge, mas não torna esses fundos tão seguros quanto os da Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechains:

- [ ] travam os tokens migrados em um contrato na Mainnet.

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação correta.

- [ ] têm taxas de gas mais baratas que a Mainnet.

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação correta.

- [ ] têm riscos de centralização maiores que a Mainnet.

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação correta.

- [x] Todas as anteriores.

> ℹ️ Correto! Sidechains travam tokens na Mainnet e cobram menos, mas seu conjunto reduzido de validadores troca descentralização por velocidade.

# Rollups

Protocolos Layer 2 que usam a tecnologia de rollup mantêm um alinhamento maior com o nível de segurança da Mainnet do Ethereum.

Como as sidechains, os rollups permitem executar transações fora da Mainnet do Ethereum. Depois, elas são “enroladas” em um único lote, e os dados do lote são publicados no Ethereum em pacotes baratos e temporários chamados `blobs`, introduzidos na atualização Dencun de março de 2024. Os blobs são o principal motivo de as taxas típicas de L2 terem caído para poucos centavos ou menos.

Para provar que é seguro o bastante para processar transações em nome da Mainnet, o rollup precisa apresentar “evidências convincentes” de que as transações de cada lote enviado são seguras e válidas. Essa evidência vai dentro do rollup e é verificada pelo contrato de bridge na Mainnet do Ethereum.

Hoje existem dois métodos capazes de fornecer essa evidência: os `rollups otimistas` e os `rollups ZK`. Vamos olhar os dois de perto.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Rollups otimistas

Protocolos L2 como Optimism, Base e Arbitrum usam `rollups otimistas` como arquitetura de escalabilidade. O nome vem daí: a informação do lote é considerada válida até que se prove o contrário, uma suposição otimista.

Para evitar abusos, costuma haver um atraso de vários dias quando o usuário pede para mover fundos da L2 de volta para a Mainnet. Nesse período, os validadores do bridge podem publicar uma `prova de fraude` para cancelar o saque. Esse mecanismo lembra os processos de compensação bancária, mas é descentralizado.

Observação: serviços de bridge de terceiros, como Across e Relay, movem fundos em minutos, não em dias. Esses bridges rápidos adiantam o dinheiro do próprio caixa, então você assume o risco dos smart contracts deles e de seus provedores de fundos, uma camada extra de confiança em relação ao bridge do próprio rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Com rollups otimistas, as transações são consideradas válidas até que se prove o contrário.

- [x] Verdadeiro

> ℹ️ Correto! A suposição otimista é que os lotes são válidos, com um período de contestação em que provas de fraude cancelam saques ruins.

- [ ] Falso

> ℹ️ Tente de novo! É exatamente dessa suposição otimista que esses rollups tiram o nome.

# Rollups ZK

Os `rollups ZK` são um tipo de rollup baseado na tecnologia de conhecimento zero. Diferente dos `rollups otimistas`, eles confirmam a legitimidade do lote sem depender de certos usuários procurando indícios de fraude. Em vez disso, enviam uma prova matemática, chamada `prova de validade`, que deixa o Ethereum conferir um lote inteiro sem refazer o trabalho.

A grande vantagem é o `tempo de liquidação`, também chamado de `finalidade da transação`. Em vez de um período de contestação de vários dias, os rollups ZK permitem acessar os fundos na Mainnet em poucas horas, assim que a próxima prova de validade é enviada. Apesar do nome, o conhecimento zero não é usado aqui para privacidade: as transações nos grandes rollups ZK são tão públicas quanto na Mainnet.

Alguns protocolos importantes usam essa tecnologia para construir suas soluções de escalabilidade, como ZKsync, Starknet e Linea. O desenvolvimento ainda está no início, mas o potencial é grande.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Comparados aos rollups otimistas, os rollups ZK:

- [ ] mantêm as transações privadas na Mainnet.

> ℹ️ Apesar do nome “conhecimento zero”, os grandes rollups ZK são tão transparentes quanto a Mainnet: as provas garantem validade, não privacidade.

- [x] usam provas de validade e evitam o período de contestação.

> ℹ️ Correto! Uma prova matemática confirma cada lote, então a finalidade na Mainnet não exige esperar uma janela de prova de fraude.

- [ ] dependem de vigilantes que enviam provas de fraude.

> ℹ️ É assim que funcionam os rollups otimistas. Os rollups ZK provam a validade de antemão.

# Compatibilidade de dApps entre cadeias

Ao comparar `rollups otimistas` e `rollups ZK`, a maioria dos usuários olha para os tempos de saque. Mas, como bridges de terceiros resolvem essa demora, isso não deveria pesar muito na hora de escolher qual solução explorar.

Muitos rollups otimistas são “equivalentes à EVM”: a L2 suporta de forma nativa qualquer dApp que rode na `Máquina Virtual Ethereum` (EVM). Essa equivalência permite implantar qualquer smart contract que já estivesse na Mainnet, o que dá aos usuários de L2 acesso às suas dApps favoritas.

Sidechains como a Polygon PoS também rodam a EVM de forma nativa, e a maioria dos rollups ZK modernos (ZKsync, Linea e Scroll) é equivalente à EVM ou quase isso. Por isso, suas dApps favoritas do Ethereum estão disponíveis em quase todo o ecossistema L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Soluções de escalabilidade equivalentes à EVM conseguem reaproveitar facilmente smart contracts implantados na Mainnet.

- [x] Verdadeiro

> ℹ️ Correto! A equivalência à EVM permite implantar na L2 qualquer smart contract que rode na Mainnet, trazendo junto as dApps conhecidas.

- [ ] Falso

> ℹ️ Tente de novo! Reaproveitar os smart contracts da Mainnet é justamente o objetivo da equivalência à EVM.

# Revisão da lição

Blockchains L1 como Bitcoin e Ethereum são hoje limitadas pelo `trilema da blockchain`. Os `canais de pagamento` no Bitcoin, ou as sidechains e os rollups no Ethereum, ajudam essas redes a escalar e aliviam o trilema.

`Bridges` conectam blockchains L1 com `sidechains` e `rollups`, e o funcionamento do contrato de bridge influencia as propriedades da rede conectada.

Fundos em sidechains não herdam a `segurança` do Ethereum: os tokens migrados ficam travados em um contrato na Mainnet, mas sua proteção depende dos validadores e do contrato de bridge da própria sidechain. Essas redes têm um conjunto de validadores pequeno, porém potente, o que permite acelerar as transações e baixar as taxas de gas, ao custo de descentralização e segurança.

Os rollups também validam e processam suas próprias transações, mas o contrato de bridge exige deles “evidências convincentes” de validade antes de aceitar os dados. Assim eles sustentam um nível de `segurança` e `descentralização` alinhado aos valores do Ethereum. Há dois métodos para essa evidência: os `rollups otimistas` mantêm um atraso de vários dias antes de liquidar seus lotes na Mainnet, tempo em que os validadores do bridge detectam e denunciam fraudes; os `rollups ZK` dão garantia matemática de legitimidade com a tecnologia `zero-knowledge`.

Hoje, tanto os rollups otimistas quanto os ZK modernos oferecem alta compatibilidade de smart contracts com a Mainnet do Ethereum, permitindo que dApps da Mainnet sejam implantadas facilmente nas suas redes. Muitos acreditam que os rollups ZK serão a solução de escalabilidade do futuro, pela finalidade rápida e pelas fortes garantias de validade.

# Comece sua jornada na Layer 2 com Optimism ou Base 🙂

Optimism e Base, ambos rollups otimistas equivalentes à EVM, são ótimas L2 para o Explorador começar. Usar dApps em qualquer uma das duas parece igual à L1, só que mais barato e rápido, e ambas usam ETH como gas. Sua próxima missão é o primeiro passo da sua jornada na Optimism ou na Base!

Os dois ecossistemas são profundamente influenciados pelos valores do Ethereum, e a Optimism é conhecida por [financiar bens públicos](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) que agregam valor ao ecossistema, como a educação gratuita da Bankless Academy.

Optimism e Base não são só plataformas que usam rollups otimistas: elas mostram como blockchains podem resolver problemas reais e abrir novas formas de transacionar e se coordenar. E isso deveria deixar todos nós otimistas. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
