---
TITLE: Blockchains Layer 1
DESCRIPTION: Entenda como funcionam as blockchains Layer 1 e quais são seus limites!
LANGUAGE: Português
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

Os problemas aparecem quando mais usuários querem usar uma rede `blockchain` do que ela aguenta. A alta demanda por `espaço de bloco` pode ser passageira ou durar enquanto o interesse pela blockchain se mantiver. Nos momentos de pico, os usuários competem entre si para ter suas transações processadas rápido, as taxas sobem e quem tem menos capital fica de fora.

Esta lição explica por que o Ethereum e outras blockchains estão sujeitos ao `trilema da blockchain`, como o trilema é a raiz dos problemas acima e como ele afeta os planos do Ethereum para atender todos os seus usuários. Vamos ver as trocas que várias blockchains fizeram diante do trilema e o que elas significam para os Exploradores da Academy.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Trilema da blockchain

Como sugere a palavra **tri**lema, há três qualidades das blockchains que competem entre si e impedem otimizar as três ao mesmo tempo.

São elas: `segurança`, `escalabilidade` e `descentralização`.

Para servir de base imparcial a um sistema monetário de escala global, uma blockchain precisa se sair bem nas três. Um sistema monetário precisa ser seguro contra fraudes, protegido de ataques de censores pela descentralização e escalável para atender mais de 8 bilhões de pessoas.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

O trilema da blockchain descreve a relação entre:

- [ ] ethereum, bitcoin e altcoins

> ℹ️ Tente de novo! O trilema trata de qualidades que competem dentro de uma blockchain, não de blockchains concorrentes.

- [ ] segurança, censura e fraude

> ℹ️ Tente de novo! Segurança é uma das três, mas censura e fraude são ameaças que a blockchain enfrenta, não qualidades do trilema.

- [x] descentralização, escalabilidade e segurança

> ℹ️ Correto! Essas três qualidades competem entre si e impedem uma blockchain de otimizar as três ao mesmo tempo.

- [ ] segurança, velocidade e taxas baixas

> ℹ️ Tente de novo! Velocidade e taxas fazem parte da escalabilidade, que é só uma das três qualidades.

# Segurança e consenso

Segurança é o requisito mais fundamental de uma blockchain pública. Os computadores de uma rede precisam concordar sobre quais transações realmente aconteceram para trabalhar juntos, e esse acordo se chama `consenso`. Uma blockchain é segura quando atacantes não conseguem impedir a rede de concordar sobre essa verdade. Os algoritmos de consenso são feitos para resistir a esses ataques.

Redes como o Bitcoin, que usam o consenso de `prova de trabalho`, protegem esse acordo tornando a produção de blocos muito competitiva: cada produtor corre para resolver um problema matemático. O primeiro a resolver ganha o direito de criar o próximo bloco e recebe a `recompensa de bloco`. Reescrever o histórico recente exigiria investimentos enormes em poder computacional e energia, então o atacante gastaria mais do que ganharia.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

O consenso de blockchain nas criptomoedas é:

- [ ] O processo em que os nós concordam sobre o que aconteceu onchain

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] Importante para todo o ecossistema da rede evitar fraudes

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] Garantido por incentivos econômicos

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [x] Todas as anteriores

> ℹ️ Correto! O consenso é como os nós concordam sobre a verdade, e os incentivos econômicos fazem atacar esse acordo custar mais do que rende.

# Segurança e ataques

Uma forma possível de ataque ao consenso é o `ataque de 51 %`: quem controla a maioria do poder de consenso de uma rede pode reverter transações recentes para gastar as mesmas moedas duas vezes, ou censurar transações novas. Não dá para falsificar assinaturas nem gastar fundos alheios. Essa maioria significa 51 % do poder computacional na prova de trabalho e 51 % do `stake` na prova de participação, um investimento enorme. E na prova de participação, uma trapaça comprovada, como assinar dois blocos conflitantes, destrói esse stake (é o `slashing`): o atacante perderia mais do que ganharia.

No consenso de `prova de participação`, o produtor do bloco não é escolhido por competição, e sim sorteado. Como na prova de trabalho, o algoritmo garante que nenhuma entidade sozinha “ganhe” com frequência o direito de criar um `bloco`.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

O objetivo final de um ataque de 51 % é:

- [ ] Atrapalhar as operações de mineração

> ℹ️ Tente de novo! O alvo é o próprio consenso: reverter ou censurar transações, não atrapalhar mineradores.

- [x] Gastar moedas duas vezes ou censurar transações

> ℹ️ Correto! Com a maioria do poder de consenso dá para reverter transações recentes e gastar moedas duas vezes, ou bloquear novas.

- [ ] Criar uma nova criptomoeda

> ℹ️ Tente de novo! Qualquer pessoa pode criar uma criptomoeda nova sem atacar uma rede existente.

- [ ] Eliminar os outros 49 %

> ℹ️ Tente de novo! Os outros participantes não são removidos. A maioria serve para reverter ou censurar transações.

# Escalabilidade: capacidade

`Escalabilidade` é a capacidade de uma blockchain de processar muitas transações rápido. Duas partes a definem: capacidade e finalidade.

1) `Capacidade de transações`: quantas transações uma blockchain processa de uma vez, geralmente medida em transações por segundo (`TPS`).

Imagine muita gente em um ponto de ônibus, com mais gente chegando a cada minuto; todos querem viajar. Mas só cabe um número limitado de pessoas por ônibus. Para esvaziar o ponto mais rápido, seriam precisos ônibus maiores (mais gente) ou mais viagens (menos tempo). É igual a tentar caber muitas transações no pouco `espaço de bloco` disponível em cada bloco. Veja isso com dados ao vivo em [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

O que é verdade na analogia do ponto de ônibus com as transações?

- [ ] Pessoas (transações) são agrupadas em ônibus (blocos)

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] Cada ônibus (bloco) leva um número limitado de pessoas

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] Levar mais gente exige ônibus maiores ou mais ônibus

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [x] Todas as anteriores

> ℹ️ Correto! As transações ocupam o espaço limitado do bloco como passageiros ocupam ônibus. Esvaziar a fila pede blocos maiores ou mais frequentes.

# Escalabilidade: finalidade

O segundo aspecto da escalabilidade é:

2) `Finalidade`: quando podemos ter certeza razoável de que uma transação não vai ser alterada nem revertida?

Em redes de prova de trabalho como o Bitcoin, a finalidade é medida em blocos: quanto mais blocos entram depois da sua transação, mais certeza você tem de que ela não será desfeita. Lembre-se de que um algoritmo de consenso seguro torna caríssimo mudar blocos passados, e o custo cresce quanto mais para trás alguém tenta mexer. O Bitcoin produz um `bloco` a cada 10 minutos, então esperar várias confirmações leva cerca de uma hora. A prova de participação do Ethereum segue outro caminho: os `validadores` votam para finalizar blocos e, depois de uns 13 minutos (duas `épocas` de votos), a transação é final.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# A descentralização distribui poder

A `descentralização` é a última base do trilema: transferir o controle e as decisões de uma única entidade para uma rede distribuída. É o princípio que permite às blockchains serem `sem permissão` e `resistentes à censura`: qualquer um pode usá-las e qualquer um pode criar software com elas.

Plataformas centralizadas como Facebook e Twitter podem desativar a conta de qualquer pessoa a qualquer momento. Muitos criadores influentes na Twitch ou no TikTok foram removidos sem motivo, e recuperar a conta pode ser um processo longo e doloroso. Sem descentralização, um `livro-razão` de blockchain é só uma planilha financeira no computador de um banco, e os banqueiros decidem quem pode abrir conta. Uma rede `sem permissão` tem autoridade distribuída o bastante: não há como tirar o acesso de ninguém.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Qual destas afirmações NÃO é verdadeira sobre a descentralização?

- [ ] Ela torna as blockchains resistentes à censura

> ℹ️ Tente de novo! Essa afirmação é verdadeira: sem uma entidade no controle, ninguém censura a rede.

- [ ] Ela torna as blockchains sem permissão

> ℹ️ Tente de novo! Essa afirmação é verdadeira: com a autoridade distribuída, ninguém pode tirar o acesso de alguém.

- [x] Ela ajuda poderes autoritários a manter o controle

> ℹ️ Correto! Isso NÃO é verdade: a descentralização faz o oposto, tirando o controle de qualquer entidade única.

- [ ] Qualquer pessoa pode usar sistemas sem permissão

> ℹ️ Tente de novo! Essa afirmação é verdadeira: sem permissão significa que ninguém pode ter o acesso negado.

# Isso é descentralizado?

Mas dizer se algo é descentralizado não é um simples sim ou não. Dez entidades no controle são descentralizadas? E mil? Um milhão? Não existe um corte padrão para “descentralizado o bastante”, então faz sentido pensar na descentralização como um espectro. Em vez de só preto e branco, há muitos tons de cinza entre os dois.

Assim, podemos dizer que algo é “mais ou menos descentralizado que outra coisa”, em vez de “centralizado ou descentralizado”. Um grau alto de descentralização é necessário para um sistema monetário neutro resistir à censura de Estados. Blockchains mais novas costumam trocar descentralização por escalabilidade, mas ficam vulneráveis às mesmas pressões de sociedades e governos que as plataformas totalmente centralizadas sofrem. Elas podem acabar praticando a mesma censura vista nas redes sociais centralizadas.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Blockchains diferentes usam graus diferentes de descentralização.

- [x] Verdadeiro

> ℹ️ Correto! A descentralização é um espectro: cada blockchain escolhe quanto trocar por escalabilidade ou outros objetivos.

- [ ] Falso

> ℹ️ Tente de novo! A descentralização é um espectro, e cada blockchain faz a sua própria troca dentro dele.

# Alguns exemplos

Cada blockchain tem sua abordagem do trilema e fez trocas para focar nos próprios objetivos. Bitcoin e Ethereum priorizam segurança e descentralização em vez de escalabilidade, o que gera um `tempo de finalidade` longo no Bitcoin e `espaço de bloco` limitado no Ethereum. Quando a demanda por `smart contracts` dispara, sobretudo em DeFi, as taxas do Ethereum sobem; no pico de 2021, uma única transação podia custar dezenas de dólares.

As taxas altas abriram espaço para `Layer 1 alternativas` como a BNB Chain, que priorizou escalabilidade em vez de descentralização para ter mais `capacidade de transações` e taxas menores. Redes de terceira geração, como a Solana, usam métodos novos para resolver o trilema, mas todas as blockchains seguem sujeitas a essas restrições básicas. A escolha de cada rede define seu ecossistema pelos efeitos profundos que vêm dela.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Então, o que dá para fazer?

Se o Ethereum priorizou segurança e descentralização, como ele pode escalar para atender todos os usuários da rede financeira global que pretende ser? O roteiro do Ethereum explorou duas respostas: as `Layer 2` e o `sharding`.

As `Layer 2` aumentam a escalabilidade do Ethereum sem comprometer as outras duas partes do trilema. São uma camada extra sobre a blockchain principal, que depende dela para a segurança e entrega aos usuários taxas menores e transações mais rápidas. Vamos vê-las em detalhe na lição sobre Layer 2.

O `sharding` dividiria a blockchain em várias cadeias paralelas, como acrescentar faixas a uma estrada. O Ethereum deixou esse plano de lado por um mais simples: baratear os dados de bloco para as Layer 2 (feito em 2024) e ampliar a capacidade aos poucos, sem sacrificar segurança nem descentralização.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

As Layer 2:

- [ ] Fornecem a própria segurança

> ℹ️ Tente de novo! As Layer 2 dependem da blockchain principal para a sua segurança.

- [x] Aumentam a escalabilidade da blockchain principal

> ℹ️ Correto! As Layer 2 ficam sobre a rede principal e somam escalabilidade sem comprometer segurança ou descentralização.

- [ ] Aumentam as taxas para os usuários

> ℹ️ Tente de novo! As Layer 2 fazem o contrário: os usuários pagam taxas menores.

- [ ] Aumentam o tempo de finalidade para os usuários

> ℹ️ Tente de novo! As Layer 2 oferecem transações mais rápidas, não mais lentas.

# O futuro do Ethereum

A rede Ethereum segue evoluindo em escalabilidade sem sacrificar os outros lados do trilema. A transição para o consenso de `prova de participação` (The Merge, 2022) cortou o uso de energia da rede em mais de 99 %, e os dados de bloco baratos para as Layer 2 chegaram em 2024. **Escalar é um trabalho contínuo: cada atualização deixa o Ethereum mais rápido e barato mantendo segurança e descentralização como princípios centrais.** A Ethereum Foundation tem uma ótima página sobre o [roteiro do Ethereum](https://ethereum.org/roadmap/).

Enquanto isso, muitos protocolos `Layer 2` são construídos sobre o Ethereum para atender à demanda sem mudar o protocolo em si. Eles contam com a Layer 1 do Ethereum para a segurança descentralizada enquanto entregam escalabilidade, e essa diversidade forma um ecossistema descentralizado! Entre os principais `rollups` estão Arbitrum, OP Mainnet e Base; a Polygon PoS é uma `sidechain` popular, com segurança própria.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

As atualizações do Ethereum incluem:

- [ ] Usar Layer 2 e dados de bloco baratos para escalar

> ℹ️ Tente de novo! Isso faz parte das atualizações, mas não é a única.

- [ ] Manter descentralização e segurança como princípios centrais

> ℹ️ Tente de novo! Isso faz parte das atualizações, mas não é a única.

- [ ] Reduzir o consumo de energia com a prova de participação

> ℹ️ Tente de novo! Isso faz parte das atualizações, mas não é a única.

- [x] Todas as anteriores

> ℹ️ Correto! Layer 2 e dados baratos somam escala, a prova de participação cortou energia, e segurança e descentralização seguem centrais.

# O que isso significa para os Exploradores?

Os usuários precisam de taxas baixas para aprender e explorar a tecnologia com pouca barreira de entrada e pouco custo em caso de erro, ainda mais no começo da jornada. A blockchain do Ethereum ainda não é ideal, mas seus valores fazem dela uma das melhores candidatas a realizar o sonho de um sistema financeiro computacional global. Os Exploradores podem aprender a usar o Ethereum sem pagar taxas enormes: com as Layer 2, dá para ter os benefícios de segurança e descentralização do Ethereum combinados com muito mais escalabilidade.

A próxima lição vai explicar as soluções `Layer 2` e como começar. Avante, exploradores!
