---
TITLE: Fundamentos da blockchain
DESCRIPTION: Conheça a arquitetura fundamental da tecnologia blockchain.
LANGUAGE: Português
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/blockchain-basics
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

A tecnologia `blockchain` é uma forma revolucionária de guardar e acompanhar dados, deixando esses dados acessíveis a qualquer pessoa. Ela organiza a informação em uma única lista pública de todas as transações históricas, que qualquer um pode ver mas ninguém pode editar. Essa lista pública é conhecida como o `livro-razão` da blockchain.

Depois de examinar as camadas de uma blockchain, você vai entender a estrutura que uma ferramenta chamada `explorador de blocos` mostra: a **lista** de blocos, as **transações** dentro deles e os **detalhes** de cada transação. Para ver na prática, teste o [Etherscan](https://etherscan.io/), um explorador de blocos popular no Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Estrutura da blockchain

A palavra blockchain pode ser usada como substantivo (a blockchain do Bitcoin) ou como adjetivo (tecnologia blockchain). Nos dois casos, `blockchain` se refere a toda a estrutura sobre a qual as criptomoedas são construídas.

Olhando de fora para dentro, há 3 níveis de estrutura em uma blockchain:

1. A `blockchain` inteira é feita de blocos ligados uns aos outros em ordem
2. Os `blocos` são grupos de transações reunidas
3. As `transações` são transferências de valor, ou instruções para programas, entre `endereços` da rede

Esses três níveis juntos criam um livro-razão criptográfico: um histórico inalterável de todas as transações feitas na rede.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

O que é uma blockchain?

- [ ] Grupos organizados de transações chamados blocos

> ℹ️ Tente de novo! Os blocos fazem parte da estrutura, mas não são a única resposta correta.

- [ ] Um registro compartilhado que todos veem e ninguém edita

> ℹ️ Tente de novo! Isso é verdade, mas não é a única resposta correta.

- [ ] Blocos ligados uns aos outros em sequência

> ℹ️ Tente de novo! Isso descreve a cadeia de blocos, mas não é a única resposta correta.

- [x] Todas as anteriores

> ℹ️ Correto! As três são verdadeiras: uma blockchain é um registro compartilhado e inalterável de transações agrupadas em blocos e ligados em sequência.

# Examinando o livro-razão

Nos sistemas monetários comuns, confiamos em terceiros, como os bancos, para controlar quanto dinheiro cada pessoa tem. Mas, para ser realmente Bankless, queremos um sistema que não exija confiar em uma entidade para gerir o livro-razão.

O `livro-razão` é a lista de TODAS as transações já feitas em uma blockchain, e nas blockchains `públicas` qualquer um pode vê-la. Grupos definidos de transações do livro-razão formam os blocos que, juntos, compõem a blockchain.

Quando novas transações entram no livro-razão, os saldos guardados em cada `endereço` são atualizados; as transações passadas não podem ser alteradas. É como deixar qualquer um ver o extrato bancário completo de todo mundo, a qualquer hora.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transações no livro-razão

Vamos ver algumas transações de exemplo:

- Alice envia 5 ETH para Bob
- Bob envia 2 ETH para Charlie

Cada transação mostra a _variação_ na quantidade de criptomoeda de cada endereço, então o resultado total de todas as transações É a quantidade de criptomoeda que cada endereço tem.

---

⇒ Alice perdeu 5 ETH

⇒ Bob ganhou 3 ETH no total (recebeu 5, enviou 2)

⇒ Charlie ganhou 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

O que é verdade sobre os livros-razão das blockchains públicas?

- [ ] Tudo é público e as transações passadas não mudam

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] Ele mostra quanta cripto cada endereço tem agora

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] Ele cresce conforme novas transações são adicionadas

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [x] Todas as anteriores

> ℹ️ Correto! O livro-razão é público, inalterável, mantém os saldos atualizados e cresce a cada nova transação.

# Descentralização

As transações incluídas no livro-razão de uma `blockchain` não são só inalteráveis: elas também são compartilhadas e distribuídas por uma grande rede de computadores. Para garantir que nenhuma entidade sozinha possa mudar os dados, cópias do livro-razão ficam guardadas em muitos computadores da rede, chamados `nós`.

Esses dados compartilhados são o que torna o livro-razão `descentralizado`. Nenhuma autoridade ou entidade controla os dados. Blockchains como o Ethereum também são `públicas`, porque qualquer um pode ver o livro-razão.

Nesta lição, basta lembrar que os dados do livro-razão são compartilhados pelos muitos computadores que rodam a rede Ethereum.

# Knowledge Check 3

O que torna uma blockchain descentralizada?

- [ ] Só uma entidade pode escrever na blockchain

> ℹ️ Tente de novo! Uma entidade única no controle é o oposto de descentralização.

- [ ] Ela cumpre requisitos de descentralização do governo

> ℹ️ Tente de novo! A descentralização vem do desenho da rede, não da aprovação de um governo.

- [x] Nenhuma entidade controla o livro-razão, copiado em muitos nós

> ℹ️ Correto! Guardar cópias do livro-razão em muitos nós faz com que nenhuma entidade consiga controlar ou mudar os dados.

- [ ] O livro-razão fica em um único servidor seguro

> ℹ️ Tente de novo! Um servidor único seria um ponto central de controle. As cópias ficam em muitos nós.

# Anatomia de um bloco

Uma característica importante das blockchains é que os dados de transações passadas não podem ser mudados depois de entrarem em um bloco. Isso porque cada bloco tem um `hash de bloco` único, como uma impressão digital, usado para ligar os blocos um após o outro. Ninguém consegue mudar transações passadas sem mudar essa impressão e a de TODOS os blocos seguintes, porque cada uma depende da anterior.

Assim, cada `bloco` é apenas um grupo de transações mais uma impressão única (seu `hash de bloco`) calculada a partir do conteúdo dele. Os blocos ficam encadeados porque cada um faz referência à impressão do bloco anterior, formando uma única block_**chain**_ conectada.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Para que serve o hash de bloco?

- [ ] Para criptografar os dados do bloco e ninguém ler

> ℹ️ Tente de novo! Os dados do bloco continuam públicos. O hash é uma impressão digital, não criptografia.

- [x] Para ligar os blocos e manter as transações passadas inalteráveis

> ℹ️ Correto! Cada bloco cita a impressão do bloco anterior, então mudar dados antigos quebraria todos os blocos seguintes.

- [ ] Para garantir que a transação vá ao endereço certo

> ℹ️ Tente de novo! Os endereços cuidam de para onde os fundos vão. O hash de bloco liga os blocos.

- [ ] Para garantir que a blockchain siga descentralizada

> ℹ️ Tente de novo! A descentralização vem de distribuir o livro-razão por muitos nós, não do hash de bloco.

# Dentro de um bloco

Lembre-se: os dados de um `bloco` são só um grupo de transações reunidas. Olhando dentro de um único bloco, vemos uma lista de transações e alguns dados sobre quem criou o bloco.

No exemplo que vimos ao falar do livro-razão, as duas transações podem estar juntas em um bloco ou espalhadas por vários blocos ao longo do tempo. Não importa em qual bloco entrem: todas acabam no livro-razão geral da blockchain.

- Alice envia 5 ETH para Bob
- Bob envia 2 ETH para Charlie

Lembre também que cada bloco precisa citar o `hash de bloco` anterior para ligar a blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Que informação um bloco contém?

- [ ] Tudo que estava nos blocos anteriores

> ℹ️ Tente de novo! Um bloco só cita o hash do bloco anterior. Ele não copia todos os dados passados.

- [ ] Qualquer coisa, já que o tamanho do bloco é ilimitado

> ℹ️ Tente de novo! Um bloco é um grupo definido de transações, não um recipiente ilimitado.

- [x] Dados de transações e uma referência ao bloco anterior

> ℹ️ Correto! Um bloco é um grupo de transações mais o hash do bloco anterior, que encadeia os blocos.

- [ ] Todas as transações geradas em um intervalo fixo

> ℹ️ Tente de novo! As transações podem ficar em um só bloco ou espalhadas por vários ao longo do tempo.

# Transações individuais

Os dados de qualquer blockchain são simplesmente uma lista de `transações`, registros de moeda movida entre usuários. Para ser válida, cada transação precisa ser assinada com a `assinatura digital` de quem envia.

É isso que você faz ao confirmar uma transação na carteira: assina com sua assinatura digital para autorizar a operação. Pense nisso como o equivalente digital de assinar um cheque, um recibo ou uma compra no cartão.

As transações podem ser simples, como enviar criptoativos, ou mais complexas, como trocá-los ou até publicar códigos especiais que rodam quando acionados, os `smart contracts`.

Por fim, cada transação tem um identificador digital único, o `hash de transação`, que nenhuma outra tem. Isso facilita citar uma transação depois e garante que os detalhes dela não mudem.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Os dados de uma blockchain são só uma lista de transações agrupadas em blocos. Exemplos dessas transações:

- [x] Enviar ou receber criptoativos

> ℹ️ Correto! As transações registram moeda passando entre usuários, de transferências simples a interações com smart contracts.

- [ ] Mudar o tamanho do bloco

> ℹ️ Tente de novo! O tamanho do bloco não é algo que uma transação possa mudar.

- [ ] Editar dados antigos da blockchain

> ℹ️ Tente de novo! Os dados antigos da blockchain não podem ser alterados. Essa é uma característica central.

- [ ] Todas as anteriores

> ℹ️ Tente de novo! Só uma das opções é uma transação válida de blockchain.

# Endereços de usuário

Um `endereço` é um identificador público que qualquer pessoa pode consultar na blockchain. Como um endereço de e-mail, qualquer um pode enviar fundos para ele, mas só quem controla a `chave privada` consegue destravar e usar os fundos daquele endereço.

No Ethereum, um endereço sempre começa com _0x__________ e tem 42 caracteres entre números e letras, derivados da `chave pública` daquele endereço.

Ao olhar uma transação em um explorador de blocos, vemos os endereços From: (de) e To: (para). Isso não diz quem são as _pessoas_ que controlam esses endereços, mas permite acompanhar o movimento da criptomoeda pelo livro-razão.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

O que é verdade sobre os endereços de blockchain?

- [ ] São os identificadores públicos de entidades na blockchain

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] No Ethereum, eles sempre começam com _0x_

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [ ] Quem controla a chave privada usa os fundos do endereço

> ℹ️ Tente de novo! Isso é verdade, mas não é a única afirmação verdadeira.

- [x] Todas as anteriores

> ℹ️ Correto! Os endereços são identificadores públicos, começam com 0x no Ethereum, e a chave privada destrava seus fundos.
