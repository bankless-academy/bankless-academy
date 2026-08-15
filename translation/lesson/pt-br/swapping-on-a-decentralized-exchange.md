---
TITLE: Trocando em uma exchange descentralizada
DESCRIPTION: Comece no DeFi com este guia passo a passo de uma exchange descentralizada.
LANGUAGE: Português
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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

> * As exchanges descentralizadas são um tipo de dApp que permite trocar tokens em autocustódia.
>
> * É preciso algum conhecimento prático para interagir com uma DEX com confiança.
>
> * Podemos usar exploradores de blocos para inspecionar nossas transações onchain.

A exchange descentralizada (DEX) é o aplicativo mais usado no mundo das `Finanças Descentralizadas` (DeFi), e por bons motivos! As DEXs permitem trocar automaticamente um token de criptomoeda por outro, sem precisar de um intermediário. Ao contrário das exchanges centralizadas (CEXs), esse tipo de troca também deixa o usuário manter a posse total dos seus ativos.

Autonomia e protocolos sem permissão são características centrais do DeFi. Elas dão aos usuários posse real dos seus ativos digitais e acesso aberto a serviços fundamentais da blockchain 24 horas por dia. Qualquer pessoa com conexão à internet acessa o DeFi, seja qual for a sua origem, as suas crenças ou o seu local no mundo.

Neste capítulo do manual, vamos ver como usar a sua carteira de autocustódia para interagir com uma DEX e trocar um token por outro. Você aprende mais sobre a mecânica, as qualidades e o perfil de risco dessa tecnologia, e como ela se compara às CEXs, na nossa lição [Exchanges descentralizadas](https://app.banklessacademy.com/lessons/decentralized-exchanges).

## Como escolher uma DEX

Escolher uma plataforma barata e segura é o primeiro passo para fazer uma troca de tokens. Neste passo a passo vamos usar a Velodrome, uma DEX bem estabelecida na rede Optimism. Conforme você ganha confiança para navegar na blockchain, vai aprender a avaliar outras exchanges e achar a que melhor atende as suas necessidades. Nossa lição [Exchanges descentralizadas](https://app.banklessacademy.com/lessons/decentralized-exchanges) traz uma lista completa de qualidades a observar.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

As DEXs são um ótimo começo na sua jornada web3, porque a maioria das dApps segue um layout de interface parecido com o delas e usa interações parecidas com a sua carteira de autocustódia.

Vamos começar a nossa troca de tokens.

## Como fazer uma troca de tokens

**1\. Abra a dApp:**

Abra a [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) em uma nova aba do navegador.

**2\. Conecte a sua carteira:**

Use o botão “Connect” (conectar), normalmente no canto superior direito de qualquer dApp.

Se estiver no computador, conecte com a carteira do navegador.

Se estiver no celular, um aviso de conexão vai permitir ligar a sua carteira móvel à dApp.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3\. Aprove a conexão:**

Toque em “Connect” no aplicativo da carteira para confirmar a conexão com o site. Isso deixa a dApp ver o endereço da sua carteira e os seus saldos de token. Você ainda não concedeu nenhuma outra permissão.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4\. Leia e assine os termos de serviço (se você concordar):**

Muitas dApps pedem que você assine uma mensagem para confirmar que leu os termos e condições. Assinar mensagens não custa gas e não guarda nenhuma informação na blockchain. Se você concorda com os termos, pode assinar a mensagem.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5\. Mude para a rede certa:**

Neste passo a passo, deixe a sua carteira na rede Optimism.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6\. Configure a sua troca:**

Agora escolha os tokens de entrada e de saída. Neste exemplo vamos trocar ETH por OP, mas você pode trocar os tokens que quiser!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7\. Aprove as permissões de token (só para trocas de token):**

Se você estiver trocando um token como USDC, a carteira vai primeiro pedir que você aprove a permissão para a Velodrome acessar esse token. Recomendamos limitar a aprovação ao tamanho da sua negociação. O ETH é a moeda nativa da rede e não precisa de aprovação, então, no nosso exemplo, a carteira vai direto para a confirmação da troca.

**8\. Confirme a transação:**

Quando estiver satisfeito com a cotação e os ajustes, pode iniciar a troca. Este passo inclui confirmar na dApp e confirmar de novo na carteira.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9\. Confira o seu saldo:**

A transação leva alguns segundos para confirmar, e depois você verá o novo saldo do token na carteira. Se o tipo de token não aparecer, verifique se você importou os endereços dos tokens.

*Endereço do contrato do token Optimism: 0x4200000000000000000000000000000000000042*

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10\. Pegue o hash da sua transação:**

Para concluir a missão da nossa lição [Exchanges descentralizadas](https://app.banklessacademy.com/lessons/decentralized-exchanges), você vai precisar do ***hash da transação da troca*** (não confunda com o hash de uma transação de permissão de token, nem com o endereço da sua carteira). Um link para um explorador de blocos costuma aparecer na interface da DEX e mostra os detalhes da transação confirmada. Se você perdeu esse link, ou ele não aparecer, há outro no registro de atividade da sua carteira, ligado diretamente à sua negociação.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

---

É hora de explorar o mundo da negociação descentralizada! Esperamos que você tenha gostado deste capítulo do Manual do Explorador: “Trocando em uma exchange descentralizada”.

Não esqueça de colecionar este capítulo se quiser ter uma cópia para consultar nas suas viagens, ou para apoiar os próximos conteúdos da Bankless Academy. Boa viagem, Explorador!

---

## Perguntas frequentes

### Por que a minha cotação muda várias vezes por minuto?

As cotações são calculadas no momento em que você insere a troca desejada na interface da DEX. Com o tempo, outros usuários fazem trocas e alteram a oferta de tokens na exchange. A DEX atualiza a sua cotação com frequência para mantê-la em dia.

### Quanto tempo leva para uma troca de tokens ser executada?

Depende de vários fatores, principalmente da velocidade dos blocos da blockchain e de quanto você paga a mais ou a menos na taxa de gas. Transações de DEX enviadas para a Ethereum Mainnet costumam levar de 12 segundos a alguns minutos para confirmar. Nas Layer 2 costuma ser mais rápido!

### Por que a minha transação falhou?

Há vários motivos possíveis: fundos insuficientes para pagar o gas, limite de gas baixo demais ou slippage baixo demais. O melhor começo é procurar mensagens de erro na interface. Você também pode ver a sua transação em um explorador de blocos, como o [Etherscan](https://optimistic.etherscan.io/), para checar se há mensagens de erro onchain. Dá para aumentar a `tolerância de slippage` nos ajustes de troca da DEX se os preços estiverem se movendo mais rápido que a sua negociação. Muitas carteiras e DEXs também oferecem roteamento protegido de transações, que blinda a sua troca contra bots de `MEV` que tentam lucrar com negociações pendentes.

### Dá para mudar ou remover permissões de token?

Conceder permissões de token a um smart contract pode deixar nossa carteira vulnerável a interações futuras indesejadas, caso o contrato seja hackeado. É possível mudar ou remover permissões de token com aplicativos como o [Revoke.cash](https://revoke.cash/). Como ajustar permissões custa gas, essa precaução pode ficar cara rápido. Esse é um dos motivos pelos quais muitos usuários guardam seus ativos digitais em uma carteira (a carteira fria) e interagem com as dApps em outra (a carteira de negociação). Os ativos só são transferidos entre elas quando necessário.

### Por que o token que eu procuro não está disponível para troca?

Se o seu token não aparece na lista padrão, você vai precisar colar o endereço do contrato dele na lista. Para achar esse endereço, consulte <https://www.coingecko.com/> ou o site oficial do projeto.

**Nota:** o endereço de um mesmo token muda de uma rede para outra. Por exemplo, o [contrato do USDC na Mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) é diferente do [contrato do USDC na Optimism](https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85). Sempre confira os endereços dos tokens antes de trocar!

---

**Autor**

**[Tetranome](https://twitter.com/tetranome)** é Project Champion na Bankless Academy e cuida da experiência do usuário, da interface, do design e do currículo da plataforma.

**Editora**

**[Trewkat](https://twitter.com/trewkat)** é escritora e editora na BanklessDAO. Ela quer aprender o máximo possível sobre cripto e NFTs, com atenção especial à melhor forma de transmitir esse conhecimento.

**Mecenas**

Este artigo sem patrocínio faz parte da sua educação gratuita na Bankless Academy. Colecione o artigo para apoiar os próximos conteúdos!
