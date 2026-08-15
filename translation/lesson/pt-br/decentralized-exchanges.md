---
TITLE: Exchanges descentralizadas
DESCRIPTION: Descubra como as exchanges com smart contracts permitem trocar tokens sem permissão!
LANGUAGE: Português
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/decentralized-exchanges
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

# O que é uma exchange descentralizada?

As exchanges descentralizadas (DEXs) são mercados onchain onde os Exploradores trocam criptomoedas com outros usuários com segurança, sem perder a autocustódia dos fundos da carteira. Essas negociações peer-to-peer usam smart contracts públicos que ligam os usuários a grandes cofres comunitários de tokens: os `pools de liquidez`. Existem DEXs em quase toda blockchain, incluindo a Layer 1 e as Layer 2 do Ethereum.

Trocar tokens é parte essencial de usar `DeFi`. Lá você encontra mais variedade e utilidade de tokens do que em qualquer outro tipo de plataforma. Alguns compram tokens para acessar produtos e serviços onchain. Outros investem. Alguns tokens dão direito a voto sobre o rumo de um projeto, como as ações de uma empresa tradicional! Seja qual for o seu motivo, você vai visitar DEXs com frequência no DeFi.

Vamos ver como elas funcionam e como podem servir melhor a você.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Exchanges centralizadas e descentralizadas

Vamos ver o que separa a tecnologia de uma exchange centralizada (como Coinbase, Binance, Kraken) da de uma exchange descentralizada (como Uniswap, PancakeSwap).

As exchanges centralizadas (`CEXs`) permitem negociar e investir em criptomoedas sem entrar no ecossistema blockchain. Como sua conta fica registrada na CEX, suas chaves privadas e seus fundos ficam sob a custódia dela: você depende da gestão, das regras e dos riscos do modelo de negócio dessa empresa.

As exchanges descentralizadas (`DEXs`) permitem negociar criptomoedas em total autocustódia, o propósito original das blockchains. O modelo peer-to-peer deixa você ser consumidor e fornecedor ao mesmo tempo, com acesso a oportunidades financeiras antes restritas ao mundo financeiro. O sistema é transparente e resistente à censura: ninguém pode congelar seu acesso nem reverter suas negociações. O risco de hack continua existindo, como veremos adiante.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Qual destas afirmações sobre exchanges de criptomoedas é verdadeira?

- [ ] Não existe time por trás de uma DEX.

> ℹ️ As DEXs têm times de desenvolvimento, mas a influência deles sobre o projeto é limitada.

- [ ] Em uma CEX, só dá para perder fundos por uma negociação ruim.

> ℹ️ As CEXs também têm riscos. Em 2022, a exchange FTX quebrou e quase todos os usuários perderam seus depósitos.

- [x] As DEXs permitem negociar em autocustódia; as CEXs, não.

> ℹ️ A menos que seja dito o contrário, uma CEX é dona das suas chaves privadas.

# Aplicativos descentralizados

Uma DEX é um tipo de `dApp`, um aplicativo descentralizado que roda em uma blockchain. Para um aplicativo de internet ser considerado “descentralizado”, ele precisa permitir o uso por qualquer pessoa sem distinção, processar as interações sem precisar de outra pessoa e ter o código público.

Os serviços de uma dApp funcionam com smart contracts: linhas de código que recebem uma ação onchain e devolvem uma resposta onchain previsível. A Ethereum Foundation compara os smart contracts a uma máquina de vendas: o usuário digita o número do produto que quer, coloca o valor certo e recebe o resultado esperado (o lanche), sem que outra pessoa precise intervir.

Os smart contracts de uma DEX aceitam ordens variadas: trocar tokens, votar, ou adicionar e retirar `liquidez`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Aplicativos descentralizados (continuação)

As DEXs seguem a mesma lógica: recebem o token que você entrega e devolvem o que você quer. Outros exemplos de dApps:

🎟️ **dApps de votação:** atribuem o voto do usuário a uma entidade.

📦 **dApps de bridge:** movem cripto de uma blockchain para outra.

🤝 **dApps de empréstimo:** emprestam a quem cumpre os requisitos.

Os smart contracts são contas no Ethereum: têm endereço e saldo, e agem de forma automática quando uma transferência e uma ordem os acionam. Uma DEX é uma conta do Ethereum programada com várias funções.

As `dApps` costumam usar um site como interface visual para os smart contracts. Se o site cair, com alguma experiência você ainda consegue acessar o contrato!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Quais propriedades uma dApp precisa ter para ser considerada descentralizada?

- [ ] Sem permissão: acesso aberto a todos os usuários.

> ℹ️ É uma qualidade de uma dApp, mas não é a única.

- [ ] Autônoma: as interações não precisam de intermediário.

> ℹ️ É uma qualidade de uma dApp, mas não é a única.

- [ ] Transparente: o código do smart contract é público.

> ℹ️ É uma qualidade de uma dApp, mas não é a única.

- [x] Todas as anteriores.

> ℹ️ As dApps do Ethereum são valorizadas por serem sem permissão, autônomas e transparentes.

# Formadores de mercado automatizados

Nos mercados tradicionais e nas `CEXs`, seu custodiante usa um `livro de ofertas`: um banco de dados com ofertas de compra e venda. A CEX cruza a sua oferta com a de outra pessoa. Em geral você paga uma comissão fixa ou proporcional, e fica sem saber se aquele método de cruzamento, que ninguém publica, achou o melhor preço para você.

A maioria das `DEXs` usa a tecnologia de formador de mercado automatizado (`AMM`), o desenho mais comum para trocar tokens: um sistema que precifica sua negociação com um algoritmo público. Algumas DEXs mais novas usam livros de ofertas ou sistemas baseados em intenções. Como o algoritmo do AMM é de código aberto, qualquer um pode entendê-lo, copiá-lo e melhorá-lo, o que gera concorrência saudável e inovação constante.

Os AMMs encaminham as negociações por `pools de liquidez`, em vez de cruzar diretamente as ofertas dos usuários. Esses cofres comunitários acumulam e distribuem tokens conforme as interações, com cada passo visível na blockchain pública.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Qual é a vantagem dos AMMs em relação a um livro de ofertas tradicional?

- [ ] A negociação com AMM é mais rápida que com um livro de ofertas.

> ℹ️ Se incluirmos o tempo de confirmação da rede, isso nem sempre é verdade.

- [ ] Os AMMs conectam você diretamente ao outro usuário.

> ℹ️ Os AMMs encaminham as negociações por cofres comunitários, os pools de liquidez, e não diretamente entre usuários.

- [x] Você detecta e evita negociações desequilibradas de terceiros.

> ℹ️ A transparência dos AMMs torna muito mais difícil uma plataforma esconder ações maliciosas, ou um usuário tentá-las!

# Trocas de tokens

Na blockchain, as trocas de criptomoedas se chamam `trocas de tokens`. Essas interações com smart contracts convertem uma criptomoeda em outra usando os `pools de liquidez` de um AMM. Ao formar uma `rota de negociação`, um caminho pelos pools adequados, o smart contract da DEX troca o token que você entrega pelo token que você quer. Como um pool costuma ter só dois tokens, e nem todo `par de tokens` tem pool, uma rota pode passar por vários.

Para um smart contract acessar nossa carteira, damos a ele permissão para retirar fundos até um valor definido (ou ilimitado). Essas `permissões de token` deixam contratos confiáveis operarem sem a nossa chave privada. Conceder custa gas, então elas ficam abertas para uso futuro: um motivo para negociar de uma carteira e guardar em outra. Aprenda a monitorar e revogar permissões na lição [Gerenciando permissões de token](https://app.banklessacademy.com/lessons/managing-token-allowances)!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Trocas de tokens (continuação)

Vamos ver um exemplo para entender o processo de permissão e troca: uma troca de USDC por OP na Velodrome, uma grande DEX da rede Optimism. Essa negociação costuma passar por dois pools, porque o `pool de liquidez` USDC/OP não é tão eficiente em custo:

1. Primeiro, você dá ao smart contract da Velodrome a permissão para retirar USDC da sua carteira.
2. Você envia seu pedido de troca para a Velodrome.
3. A transação é aceita: a Velodrome retira da sua carteira o valor de USDC indicado e o leva para o pool USDC/ETH. A quantidade equivalente de ETH sai desse primeiro pool e vai para o pool ETH/OP. Por fim, o OP vai do segundo pool para o endereço da sua carteira.

A troca está concluída. Seus USDC viraram OP, passando por ETH!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

Um AMM pode encaminhar uma negociação por vários pools de liquidez, tudo em uma única transação.

- [x] Verdadeiro

> ℹ️ Correto! Você pode pagar uma taxa de rede mais alta, mas as ações são agrupadas em uma única transação.

- [ ] Falso

> ℹ️ Incorreto, revise o slide anterior para entender por quê.

# O que é liquidez?

Em cripto, liquidez é a capacidade de um mercado de permitir compras e vendas de ativos digitais a preços justos. Com liquidez alta, os preços ficam mais estáveis; com liquidez baixa, mais voláteis. Como os usuários procuram preços justos, as `DEXs` buscam muita liquidez em todos os seus pools.

Muita liquidez significa uma grande quantidade de tokens no pool, normalmente dividida 50/50 em valor entre os dois tokens que os usuários trocam. Por exemplo, um pool USDC/ETH atende todas as negociações desse `par de tokens` na plataforma.
Quando há mais tokens, cada negociação altera menos esse equilíbrio 50/50, o que ajuda os preços a se manterem estáveis. O quanto uma negociação desequilibra esse balanço é chamado de `impacto no preço`.

Como Explorador, você quer o menor impacto no preço possível, para conseguir o melhor negócio! Ou seja, você quer liquidez alta e equilibrada.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Provedores de liquidez

Buscar `liquidez` alta é essencial para o sucesso de uma DEX, mas como existe só uma certa quantidade dela no ecossistema cripto, cada DEX compete para capturar o máximo possível. De onde vem essa liquidez?

Em um ecossistema descentralizado, os cidadãos do DeFi têm incentivo para fornecer liquidez a um pool e elevar o TVL (valor total bloqueado) da plataforma. As taxas pagas por quem negocia pelo pool são distribuídas aos LPs (provedores de liquidez) conforme a liquidez fornecida. Isso mesmo: ao emprestar seus tokens a um pool de uma DEX, você pode gerar renda passiva.

Ser `LP` envolve várias considerações que veremos em conteúdos futuros. Por ora, saiba que os APRs (taxas anuais) altos exibidos nos pools não são garantidos, e que pode haver perdas.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Complete a frase: “Quando a liquidez é __________.”

- [ ] alta, a volatilidade é alta.

> ℹ️ Incorreto, tente de novo.

- [ ] baixa, a volatilidade é baixa.

> ℹ️ Incorreto, tente de novo.

- [x] baixa, a volatilidade é alta.

> ℹ️ Isso mesmo! Liquidez e volatilidade costumam andar em sentidos opostos.

# Knowledge Check 6

Como as DEXs incentivam os usuários a fornecer liquidez?

- [ ] Seguro contra perdas nas negociações.

> ℹ️ Nem as CEXs nem as DEXs protegem você das perdas de um mau investimento.

- [x] Uma parte das taxas da plataforma e/ou tokens de bônus.

> ℹ️ As taxas cobradas para usar a DEX costumam ser divididas entre vários participantes, incluindo os LPs. Algumas plataformas ainda dão bônus.

- [ ] Acesso a pools de liquidez privados.

> ℹ️ Não existem pools de liquidez privados; com tão pouco movimento, o retorno não seria suficiente.

- [ ] Todas as anteriores.

> ℹ️ Aqui só há uma resposta correta. Consegue descobrir qual é?

# Taxas das plataformas

Tanto as CEXs quanto as DEXs cobram pelos seus serviços, e usar a blockchain também não é grátis. Cinco custos a considerar ao escolher uma plataforma.

🏷️ **Taxas da plataforma:** as CEXs definem as suas; nas DEXs elas variam por pool (em geral uma fração de por cento). A diferença principal: as taxas da DEX ficam visíveis onchain para qualquer um conferir.

🌐 **Taxas de rede:** a blockchain cobra gas além da transação da dApp. Use a rede em horários calmos e consulte o preço no [Etherscan](https://etherscan.io/gastracker). Nas Layer 2 é bem mais barato: compare redes no [growthepie](https://www.growthepie.com/).

📦 **Taxas de bridge:** CEXs e bridges cobram para mover cripto de uma rede para outra. Nas CEXs, veja as informações do site; as dApps de bridge mostram uma estimativa antes de você confirmar.

💹 **Taxas de câmbio:** ao comprar cripto direto com dinheiro fiat em uma CEX ou DEX, desconfie de câmbios que não refletem o preço de mercado.

🧊 **Slippage:** os preços se movem rápido, então as DEXs deixam margem de flutuação em uma troca: é o `slippage` (ajustável, normalmente 0,5 a 2 %). Você pode perder até esse valor, mas um ajuste baixo demais faz a negociação ser rejeitada.

Sempre pesquise por conta própria para entender os custos e as escolhas de cada plataforma.

# Vantagens das DEXs

Vimos muita teoria nesta lição, mas talvez você ainda se pergunte se as DEXs são para você. Em geral, elas vão te beneficiar se:

- 🔑 Você quer manter a custódia dos seus ativos digitais.
- 🔒 Você quer proteger seus ativos na blockchain e evitar a quebra de uma CEX.
- ⌛ Você quer acesso ao mercado cripto 24 horas por dia.
- 👛 Você quer acesso a uma gama maior de criptomoedas.
- 🤑 Você tem interesse em fornecer liquidez.
- 🛂 Você não quer se cadastrar e fazer `KYC` em cada plataforma que usa.
- ⚔️ Você busca os riscos e as recompensas extras de explorar as finanças descentralizadas.

Dito isso, quase todo usuário de DeFi tem conta em uma exchange centralizada, porque as CEXs oferecem portas de entrada e saída fáceis para o mundo bancário tradicional: dá para levar dinheiro da sua conta no banco para a blockchain e vice-versa. [Ryan Sean Adams](https://twitter.com/RyanSAdams) compara isso a usar um banheiro público: _“Você entra, faz o que precisa e sai.”_

Isso é ótimo: você pode começar com uma conta em uma CEX e migrar aos poucos para o DeFi conforme ganha confiança.

# Riscos das DEXs

Usar uma DEX também traz riscos. Estes estão entre os mais sérios:

🐞 **Risco de smart contract:** auditorias reduzem as falhas, mas não as eliminam: em 2025, uma grande DEX auditada por várias empresas perdeu 128 milhões de dólares por um erro sutil de código. No pior caso, você pode perder até o valor da sua negociação. Prefira smart contracts confiáveis e muito auditados.

💰 **Risco de autocustódia:** ser o único responsável pelas suas chaves privadas significa que você pode perder uma carteira inteira por roubo, golpe ou uma frase semente extraviada. Por isso vale dividir o risco entre várias carteiras e guardar cópias das suas frases semente em um lugar físico seguro.

🥪 **Ataques sanduíche:** definir um slippage alto aumenta a chance de outros coordenarem `ataques sanduíche` contra você. Neles, você pode perder até o valor do seu slippage. Veremos como se proteger em conteúdos futuros.

Com essas vantagens e riscos em mente, uma CEX pode combinar mais com você se:

- 🎓 Você ainda está começando em cripto e aprendendo os riscos e as recompensas.
- ⚖️ Você negocia pouco e com valores pequenos, e as taxas de blockchain não compensam.
- 🏰 Você prefere confiar seus fundos a uma exchange em vez de ser o responsável por eles.

Alguns adotam uma abordagem híbrida para reduzir o risco total: compram e vendem em uma CEX, mas guardam suas criptomoedas na própria blockchain.

# Knowledge Check 7

Por que usar uma exchange descentralizada em vez de uma centralizada?

- [ ] Você quer tokens que não estão listados em uma exchange centralizada.

> ℹ️ É uma qualidade de uma DEX, mas não é a única.

- [ ] Você quer manter a custódia total dos fundos trocados.

> ℹ️ É uma qualidade de uma DEX, mas não é a única.

- [ ] Você quer ferramentas e oportunidades pouco acessíveis em outro lugar.

> ℹ️ É uma qualidade de uma DEX, mas não é a única.

- [x] Todas as anteriores.

> ℹ️ Isso mesmo! As DEXs oferecem todas essas vantagens sobre as CEXs.

# Como escolher uma DEX

Existem muitas exchanges descentralizadas no DeFi, e algumas são melhores que outras. Considere estes cinco fatores ao escolher:

🥇 **Legitimidade:** a entidade é reconhecida pela confiabilidade, pela qualidade e pelo tempo de mercado?

⛲ **Liquidez:** o `TVL` dos pools é alto o bastante para reduzir o impacto no preço?

🖱️ **Facilidade de uso:** a interface é confortável de usar?

🔐 **Segurança:** os smart contracts foram auditados por várias empresas?

🎁 **Recompensas e recursos:** há recompensas por usar a exchange ou por fornecer liquidez? Dá para votar na governança?

Entre os nomes que pontuam alto estão Uniswap, Curve, Velodrome e PancakeSwap. Você pode passar de uma para outra até achar suas favoritas! Na missão desta lição vamos usar a Velodrome, uma DEX bem estabelecida na rede Optimism. É fácil de usar e, por estar em uma Layer 2, as taxas são bem mais razoáveis!

# Boas práticas em uma DEX

Antes de interagir com uma dApp, siga algumas boas práticas para manter seus fundos seguros:

👩‍💻 Verifique o link de uma dApp na conta oficial do projeto no X (Twitter) (selo dourado) ou com um terceiro confiável, e salve nos favoritos. Muitos golpes de DeFi começam com um link falso, até em buscadores conhecidos.

🔓 Ao conceder `permissões de token` onchain, limite a permissão ao valor da sua negociação. Muitas DEXs já usam aprovações por assinatura que cobrem só aquela negociação: veja [Gerenciando permissões de token](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ Não use dApps a partir da sua carteira de HODL; tenha uma carteira separada só para isso. Nossa lição [Segurança no web3](https://app.banklessacademy.com/lessons/web3-security) explica as estratégias de carteira.

Agora você está pronto para usar uma exchange descentralizada!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Como ter certeza de que você escolheu uma DEX confiável?

- [x] Checando a reputação dela e usando só URLs de fontes confiáveis.

> ℹ️ Isso mesmo! Verifique por conta própria a reputação da DEX e siga apenas URLs vindas de uma fonte confiável.

- [ ] Fazendo uma pequena interação de teste no primeiro uso.

> ℹ️ Uma única interação com um smart contract malicioso pode esvaziar toda a sua carteira.

- [ ] As duas anteriores.

> ℹ️ Incorreto. Uma única interação com um smart contract malicioso pode esvaziar toda a sua carteira.
