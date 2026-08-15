---
TITLE: Gerenciando permissões de token
DESCRIPTION: Proteja sua carteira de interações indesejadas com smart contracts.
LANGUAGE: Português
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
## Pontos principais

> * As permissões de token são autorizações dadas a `smart contracts` para gastar tokens de uma carteira sem nova aprovação.
>
> * Elas podem ser exploradas por agentes maliciosos quando o usuário não sabe que estão ativas.
>
> * Ferramentas como o Revoke.cash permitem inspecionar e revogar permissões de token com facilidade.

## Introdução

O DeFi dá ao usuário o controle dos seus ativos, incluindo as `chaves privadas`, com uma soberania sobre os fundos que não existia antes. Mas com grande poder vem uma responsabilidade ainda maior: o usuário assume por completo a segurança e a gestão dos seus ativos.

Há quatro categorias comuns de golpe que todo usuário de DeFi precisa conhecer:

* **Frase semente comprometida:** os atacantes tentam enganar o usuário para que ele revele a frase semente, o que lhes daria acesso não autorizado aos fundos. Com a sua frase semente, um atacante esvazia toda a carteira e continua fazendo isso a cada novo depósito. Infelizmente não há como reverter essa situação, e a única solução é criar uma carteira totalmente nova, com uma nova `frase semente`.

* **Transferências diretas de ETH:** golpistas podem esconder transferências de ETH disfarçando-as de chamada de função, como uma “Security Update” (atualização de segurança). O método de assinatura bruta das versões antigas desse golpe foi removido da MetaMask; os kits de phishing modernos abusam de pedidos de assinatura de aparência comum, contando que você assine sem ler o que a carteira mostra. Cair nesse golpe significa não recuperar os fundos, mas você ainda pode usar a carteira com segurança para outras transações.

* **Anúncios em marketplaces de NFT:** desconfie de anúncios falsos e de contratos maliciosos que exploram as permissões que você dá a marketplaces como a OpenSea. Golpistas podem induzir você a assinar uma mensagem `offchain` que coloca à venda os seus `NFTs` aprovados, sem que nenhuma transação de token aconteça.

* **Permissões de token:** atacantes podem manipular permissões para acessar mais fundos do que o aprovado no início. As “aprovações” são transações onchain que dão acesso aos seus tokens ou NFTs. Os “permits” dão o mesmo acesso, mas exigem só uma assinatura offchain sem gas. A Uniswap e a maioria dos aplicativos modernos de negociação usam esse sistema (chamado Permit2). As assinaturas de permit não aparecem como aprovações onchain até serem usadas, e podem ter data de validade; a aba “Signatures” do Revoke.cash permite conferir e cancelar essas assinaturas.

  Conforme os smart contracts ganham popularidade, as `permissões de token` se tornam necessárias para que contratos confiáveis executem transações sem expor as chaves privadas. Elas deixam as dApps moverem tokens da sua carteira automaticamente, em seu nome. Essa comodidade aumenta a eficiência, mas também expõe o usuário a possíveis vetores de ataque, por golpes e acessos não autorizados.

Neste artigo vamos falar sobre as permissões de token e apresentar uma ferramenta da comunidade criada para ajudar a gerenciá-las.

## Permissões de token: entender, gerenciar e usar com segurança

As permissões de token são autorizações dadas com antecedência a smart contracts para gastar tokens de uma carteira. Elas são essenciais para viabilizar transações sem exigir uma permissão explícita a cada transferência de ativos da carteira. Mal usadas, porém, viram um vetor de ataque contra quem está desatento. Para lidar com esse risco, o usuário de DeFi precisa ter cautela, estudar o cenário de segurança e entender como as permissões de token realmente funcionam.

Conceder permissões a um contrato de terceiros envolve duas etapas:

1. Conexão da carteira: ao conectar a carteira a uma dApp, você apenas compartilha o `endereço` da sua carteira com o site, que passa a mostrar seus saldos e sua atividade. Conectar, por si só, não concede nenhuma permissão onchain.

2. Aprovação de token: para transacionar com a dApp, você então aprova que o smart contract dela mova tokens específicos em seu nome. É esta etapa que concede poder real de gasto.

Ao gerenciar as permissões de token de forma ativa, o usuário garante que nenhum contrato retire da carteira mais do que o valor definido no início. Felizmente, existem ferramentas da comunidade feitas para dar confiança e tranquilidade a quem usa DeFi.

## Passo a passo: usando o Revoke.cash

O [Revoke.cash](https://revoke.cash/) permite gerenciar as suas permissões de token por um site simples, que ajuda a inspecionar e acompanhar as permissões dadas a diferentes dApps. Vamos ver como usar essa poderosa ferramenta da comunidade para proteger seus ativos e retomar o controle da sua carteira.

**1\. Conecte a sua carteira**:

Para começar a revogar as suas permissões de token, acesse o [Revoke.cash](http://revoke.cash/) e clique em “Connect Wallet” (conectar carteira), no canto superior direito. Você também pode digitar manualmente o endereço público da sua carteira na barra de busca. Quando o carregamento terminar, verá a lista de todas as suas `aprovações de token` naquela rede.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Inspecione as suas permissões**:

Com a carteira conectada, você pode inspecionar as aprovações existentes. Dá para ordenar, filtrar ou buscar aprovações específicas pelo endereço autorizado a gastar. Ordenar da mais recente para a mais antiga é especialmente útil se você suspeita de uma aprovação maliciosa recente. Use as opções de ordenação e filtro para ter uma visão geral das permissões de token que concedeu. As permissões valem por rede, então use o seletor de rede para repetir a revisão em cada rede que você usa.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Revogue as permissões indesejadas:**

Ao identificar as aprovações que quer revogar, basta clicar no botão “Revoke” (revogar) ao lado de cada uma. Se preferir, você pode mudar o valor da aprovação clicando no ícone de lápis ao lado do valor aprovado, caso ainda vá precisar da aprovação no futuro mas queira reduzir o risco.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Pode valer a pena revogar ou ajustar uma permissão de token se:

1. Um smart contract lançado há pouco for explorado e criar uma vulnerabilidade em uma `exchange descentralizada` que você usa com frequência.

   Em abril de 2023, a popular `DEX` SushiSwap sofreu um ataque desse tipo, e cerca de 3,5 milhões de dólares foram roubados dos usuários. Quem não revogou a permissão de token continuou em risco.

2. Uma proposta de governança maliciosa atualizar vários contratos com a intenção de esvaziar os fundos dos usuários.

   Mais de 2,5 milhões de dólares em ativos foram comprometidos quando a Atlantis Loans, um protocolo `DeFi` em uma rede BNB, executou uma proposta de governança que atingia vários contratos. Os usuários que controlavam o limite das suas aprovações reduziram o risco de ter a carteira esvaziada pela proposta maliciosa.

## Não esqueça das delegações

Desde a atualização Pectra do Ethereum (maio de 2025), as permissões não são a única autorização que vale revisar. Um recurso mais novo das carteiras (EIP-7702) deixa a sua carteira delegar para um código extra, o que traz comodidades como agrupar transações, mas também um truque novo de esvaziamento: uma única assinatura maliciosa instala um código “varredor” que envia na hora tudo o que você depositar para o atacante, sem que a sua frase semente seja exposta. Em 2025, pesquisadores da Wintermute descobriram que mais de 97 % das primeiras delegações de carteira apontavam para o mesmo código varredor.

O Revoke.cash mostra as suas delegações ativas na aba “Delegations”, mas como as delegações são controladas pela sua carteira, e não pelas dApps, você revoga uma delegação indesejada dentro da própria carteira. Na MetaMask, abra os detalhes da conta e volte a conta para o tipo padrão. Se você nunca escolheu migrar para uma `conta inteligente`, trate qualquer delegação que encontrar como hostil.

---

É hora de reforçar as defesas da nossa carteira! Esperamos que você tenha gostado deste capítulo do Manual do Explorador: “Gerenciando permissões de token”.

Não esqueça de colecionar este capítulo se quiser ter uma cópia para consultar nas suas viagens, ou para apoiar os próximos conteúdos da Bankless Academy. Boa viagem, Explorador!

---

## Perguntas frequentes

### Quando devo usar o Revoke.cash?

Use o Revoke.cash periodicamente, principalmente nos períodos em que você não está usando uma dApp de forma ativa, e em especial no caso de marketplaces de NFT. Limitar as aprovações reduz o risco de perder fundos por hacks, exploits ou golpes de phishing. Ao ordenar suas aprovações da mais recente para a mais antiga, você identifica as suspeitas e as revoga logo, evitando danos maiores.

### Desconectar a minha carteira me protege de ataques por aprovação?

Desconectar a carteira de uma dApp não protege você de ataques, por aprovação ou de qualquer outro tipo. As aprovações de token que você concedeu antes continuam ativas mesmo depois de desconectar, porque ficam guardadas onchain.

### Como evitar ataques por permissão de token e riscos parecidos?

Uma postura ativa com as permissões de token inclui:

* conceder permissões só a dApps confiáveis.

* revisar as permissões de token periodicamente.

* remover permissões desnecessárias ou suspeitas.

* procurar delegações de carteira que você não reconhece.

* acompanhar as atualizações de segurança das dApps.

Considere usar ferramentas de terceiros como a [extensão de navegador](https://revoke.cash) do Revoke.cash: ela funciona como uma medida preventiva contra ameaças. A extensão avisa quando você está prestes a assinar algo potencialmente perigoso, protegendo você de golpes de phishing e de outras atividades maliciosas.

### Dá para recuperar fundos com o Revoke.cash?

Infelizmente, o Revoke.cash não recupera fundos roubados. Ele é uma ferramenta preventiva, que reduz a chance de você virar vítima de ataques por aprovação. Mesmo assim, revogar as aprovações usadas para roubar seus fundos evita novos roubos.

### Por que a minha carteira é esvaziada toda vez que eu coloco fundos nela?

A sua carteira pode ter um “bot varredor”, um script que vigia uma carteira comprometida e transfere rapidamente cada novo depósito antes que você consiga reagir. Uma causa possível é a frase semente comprometida. Nesse caso, revogar aprovações não adianta: abandone a carteira e crie uma nova. Mas uma delegação de carteira maliciosa é uma causa igualmente provável: um código varredor instalado por uma assinatura que você foi enganado a dar, sem que a frase semente vazasse. Confira a aba “Delegations” no Revoke.cash. Se encontrar uma delegação que não reconhece, revogue-a dentro da sua carteira (por exemplo, nos detalhes da conta na MetaMask). Se não houver delegação e o esvaziamento continuar, considere a frase semente comprometida e mude para uma carteira nova.

---

**Autor**

**[Marcus](https://twitter.com/estmcmxci)** publica a newsletter da ENS DAO. Ele pesquisa como a receita excedente gerada pelas taxas de protocolo pode subsidiar o desenvolvimento da camada de aplicação e outras infraestruturas de código aberto.

**Editores**

**[Tetranome](https://twitter.com/Tetranome)** é Project Champion na Bankless Academy e cuida da experiência do usuário, da interface, do design e do conteúdo.

**[Trewkat](https://twitter.com/trewkat)** é escritora e editora na BanklessDAO. Ela quer aprender sobre cripto e NFTs, com atenção especial à melhor forma de transmitir esse conhecimento.

**Mecenas**

Este artigo sem patrocínio faz parte da sua educação gratuita na Bankless Academy. Colecione o artigo para apoiar os próximos conteúdos!
