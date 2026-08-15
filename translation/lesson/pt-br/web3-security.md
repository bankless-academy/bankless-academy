---
TITLE: Segurança no web3
DESCRIPTION: Proteja você e sua carteira dos golpes mais comuns no web3.
LANGUAGE: Português
EDITORS: Claude (Anthropic AI, 2026 review)
WRITERS:
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/web3-security
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

A propriedade digital é a novidade do web3. Com blockchains, criptomoedas e NFTs, o web3 devolve posse e poder aos usuários. Essa posse online de produtos financeiros digitais é nova para muita gente, e a falta de experiência abre espaço para golpistas roubarem os ativos dos outros. Esses golpes funcionam tão bem porque a maioria das pessoas não sabe como eles operam.

Mas não é só o web3 que sofre com golpes: serviços web2 como e-mail e redes sociais também estão cheios deles. Além disso, muitas ferramentas web3 ainda dependem de serviços web2, como contas bancárias ou exchanges centralizadas, então proteger essas contas também importa. Parabéns, Explorador da Academy, por dedicar um tempo a se armar com o conhecimento que vai proteger você nesta aventura pelo `web3`!

Esta lição vai cobrir:

- Segurança no web2 e no web3.
- As formas mais comuns de perder fundos e como se proteger delas.
- Uma estratégia geral de segurança para carteiras.
- Como se recuperar depois de cair em um golpe.

# Dinheiro no web2

No web2, as instituições guardam o dinheiro em nome das pessoas. Para acessar e usar seu dinheiro, o usuário precisa provar sua identidade à instituição. É o mesmo que uma conta bancária ou uma `exchange centralizada` (CEX): você precisa de um login e uma senha.

Para chegar ao seu dinheiro, o golpista precisa dessa dupla login + senha. Como as instituições têm o dever de proteger seu dinheiro, transações fraudulentas podem ser revertidas, como na contestação de uma compra no cartão de crédito.

![](https://app.banklessacademy.com/images/web3-security/money-in-web2-7e1a5fd1.svg)

# Dinheiro no web3

No web3, o dinheiro funciona de outro jeito. É mais parecido com uma carteira de dinheiro vivo: uma vez gasto, acabou. Sua `frase semente` (aquele conjunto especial de palavras secretas) destrava suas `chaves privadas`, então quem a obtiver controla sua carteira. _**Nunca**_ dê essa frase a ninguém e nunca a guarde em formato digital: fotos e apps de notas podem ser comprometidos.

Mas a frase semente não é o único alvo: uma única assinatura maliciosa (uma transação ou mensagem que você aprova) pode deixar um golpista drenar seus tokens sem nunca ver sua frase semente. Proteja sua **frase semente** _e_ sua **assinatura**.

![](https://app.banklessacademy.com/images/web3-security/money-in-web3-f575b0f6.svg)

# Knowledge Check 1

Verdadeiro ou falso? Golpistas podem drenar tokens da sua carteira te enganando para assinar uma transação ou aprovação maliciosa, sem nunca saber sua frase semente.

- [x] Verdadeiro

> ℹ️ Correto! Uma assinatura maliciosa ou aprovação de token entrega seus fundos sozinha. Proteja o que você assina como protege a frase semente.

- [ ] Falso

> ℹ️ Tente de novo! A frase semente não é o único alvo: uma única aprovação maliciosa também drena seus tokens.

# Guardando a frase semente com segurança

Existem muitos jeitos de guardar frases semente com segurança, mas um bom começo é mantê-la em meio físico (papel plastificado ou algo parecido) e guardá-la em um cofre à prova de água e fogo na sua própria casa. **Não** guarde uma `frase semente` como foto nem por outros meios digitais, incluindo o gerenciador de senhas.

Lugares ruins para guardar frases semente:

- Em um arquivo de escritório
- Aplicativo de notas digitais
- No seu local de trabalho
- Foto digital

Onde quer que você guarde sua frase semente, garanta que só você tenha acesso e que ela esteja protegida contra perda e destruição. Nunca se sabe o que pode acontecer no futuro!

# Proteja suas senhas

Usar e gerenciar bem as senhas é parte importante do dia a dia na internet.

As senhas devem ser diferentes em cada serviço web2 que você usa: e-mail, exchanges centralizadas e outras contas. Já é ruim alguém conseguir o login e a senha de uma conta, mas é muito pior se essa combinação abrir todas as suas contas!

Aplicativos de `gerenciador de senhas` como 1Password, Bitwarden e KeePass guardam e criptografam várias senhas com segurança; eles até geram senhas novas de alta segurança e as salvam automaticamente. Você só precisa lembrar de uma senha mestra.

**Não** guarde uma `frase semente` do web3 em um gerenciador de senhas: basta um vazamento de senha para levarem todos os seus ativos web3, e não há ninguém para recuperá-los por você.

# Knowledge Check 2

Por que os gerenciadores de senhas ajudam?

- [ ] Basta lembrar da senha mestra para usá-los.

> ℹ️ Tente de novo! Isso é verdade, mas não é o único benefício.

- [ ] Geram e guardam senhas fortes e únicas.

> ℹ️ Tente de novo! Isso é verdade, mas não é o único benefício.

- [ ] Criptografam as senhas para mantê-las seguras.

> ℹ️ Tente de novo! Isso é verdade, mas não é o único benefício.

- [x] Todas as anteriores

> ℹ️ Correto! Eles geram, criptografam e guardam senhas únicas para cada conta. Você só lembra da senha mestra.

# Autenticação de dois fatores

A `autenticação de dois fatores` (2FA) é uma segunda camada de segurança no web2.

Muita gente teve contas hackeadas mesmo com senhas fortes. Sites web2 (e até `gerenciadores de senhas`) costumam oferecer 2FA: uma prova vinda de outro dispositivo ou app, além da senha.

Nem todo 2FA é igual:

🥉 **Códigos por SMS** são o mais fraco: golpistas usam `engenharia social` para transferir seu número para o chip deles e receber os códigos. Ainda assim, é melhor que nada.

🥈 **Apps autenticadores** (como Google Authenticator, 2FAS ou Aegis) geram códigos no seu aparelho, boa escolha para a maioria das contas.

🥇 **Passkeys e chaves de segurança físicas** (como a YubiKey) são o melhor contra `phishing`: ligadas ao site real, não fazem login numa cópia falsa.

![](https://app.banklessacademy.com/images/web3-security/two-factor-authentication-7fa9bfdf.svg)

# Knowledge Check 3

Por que a autenticação de dois fatores é tão recomendada?

- [ ] É impossível hackear uma conta com 2FA ativado.

> ℹ️ Tente de novo! O 2FA melhora muito a segurança, mas nenhum método torna uma conta impossível de hackear.

- [x] Ela adiciona outra camada de segurança às contas web2.

> ℹ️ Correto! O 2FA pede uma prova de outro dispositivo ou app além da senha, então só a senha roubada não basta.

- [ ] Ela deixa as senhas mais fortes.

> ℹ️ Tente de novo! O 2FA não muda sua senha. Ele acrescenta uma segunda prova em cima dela.

- [ ] Todas as anteriores

> ℹ️ Tente de novo! Só uma dessas afirmações é verdadeira.

# Golpes de engenharia social

No web2 e no web3, golpistas usam táticas de `phishing` para fazer as pessoas entregarem senhas e frases semente, ou assinarem uma transação maliciosa. Muitas vezes se passam por suporte do produto, “Olá, aqui é o suporte da MetaMask”, ou por administrador de uma comunidade, “Novo mint de NFT, exclusivo para a nossa comunidade”.

Eles usam `engenharia social` para pressionar. Alguns exemplos:

- “O tempo está acabando!”, para você se sentir com pressa.
- “Parabéns, você ganhou nosso sorteio!”, para parecer exclusivo.
- “Acesso antecipado ao nosso pré-mint!”, gerando `FOMO` na vítima.

![](https://app.banklessacademy.com/images/web3-security/social-engineering-scams-73c69132.svg)

# Medo de ficar de fora

`FOMO` vem do inglês “Fear Of Missing Out”, o medo de ficar de fora. É aquela sensação estressante de que você vai perder uma grande oportunidade se não fizer algo **agora mesmo**.

A melhor defesa contra o FOMO é simplesmente se afastar do computador e dar uma pausa. As pessoas não pensam com clareza sob estresse, e por isso o FOMO é uma ferramenta de golpe tão eficaz. Ao sair da situação, fica muito mais fácil enxergar os golpes pelo que eles são.

# Knowledge Check 4

Como os golpistas usam a engenharia social?

- [ ] Fingindo ser uma autoridade da comunidade.

> ℹ️ Tente de novo! Essa é uma das táticas, mas não é a única.

- [ ] Pressionando as pessoas com prazos curtos.

> ℹ️ Tente de novo! Essa é uma das táticas, mas não é a única.

- [ ] Oferecendo sorteios ou NFTs grátis para gerar FOMO.

> ℹ️ Tente de novo! Essa é uma das táticas, mas não é a única.

- [x] Todas as anteriores

> ℹ️ Correto! Golpistas se passam por autoridades, criam pressa e geram FOMO, tudo para impedir você de pensar com clareza.

# Segurança nas redes sociais

Golpistas adoram agir nas redes sociais e nos servidores de Discord de projetos cripto, e costumam levar a conversa para mensagens diretas para não serem notados por membros experientes. Converse em canais públicos e _**nunca**_ dê sua `frase semente` a ninguém, nem assine nada vindo de um link enviado por mensagem direta.

`Sinais de alerta` nas redes sociais:

🚩 **Erros de português:** “mim ajuda”, “concerteza”, etc.

🚩 **FOMO:** “Não fique de fora!”

🚩 **Falsa identidade:** um admin, o suporte, Vitalik Buterin, Elon Musk, etc.

🚩 **Retornos garantidos:** nada é garantido em cripto.

🚩 **Links e ofertas não solicitados,** _principalmente por mensagem direta_.

![](https://app.banklessacademy.com/images/web3-security/social-media-safety-a76a39f4.svg)

# Boas práticas nas redes sociais

Práticas para se manter seguro:

✅ Se precisam te mandar mensagem direta para vender o produto, você provavelmente não quer esse produto.

✅ Confira o número de seguidores e membros do projeto, embora isso não garanta legitimidade, qualidade nem estabilidade.

✅ Verifique tudo em uma fonte externa, como outra conta oficial do projeto.

✅ Na dúvida, pergunte a membros de boa reputação de uma comunidade grande em que você confia, e pergunte em público.

![](https://app.banklessacademy.com/images/web3-security/social-media-best-practices-48ad350f.svg)

# Tokens fraudulentos e envenenamento de endereço

Apareceram tokens ou NFTs aleatórios na sua carteira? `Tokens fraudulentos` são enviados a milhares de carteiras de uma vez, esperando que alguém tente movê-los ou vendê-los, o que aciona código malicioso escondido no smart contract do token ou leva a vítima a um site de `phishing` que pede a `frase semente` ou uma assinatura maliciosa. A melhor reação: não interaja, deixe quieto ou oculte na carteira.

Um truque parecido é o **envenenamento de endereço**: o golpista envia transferências mínimas de um endereço quase idêntico a um que você usa, com os mesmos primeiros e últimos caracteres. Se depois você copiar um endereço do histórico, pode pegar o do golpista.

Como se proteger:

- Não copie endereços do histórico de transações.
- Confira mais do que os primeiros e últimos caracteres.
- Faça um envio pequeno de teste antes de transferências grandes.

![](https://app.banklessacademy.com/images/web3-security/scam-tokens-761d5f63.svg)

# Aprovações maliciosas e assinatura às cegas

Hoje a maior parte dos fundos se perde não por frases semente roubadas, mas por assinaturas entregues. Kits de phishing do tipo “wallet drainer” mostram uma transação ou mensagem que parece rotineira, mas não é:

- **Aprovações maliciosas:** uma única transação de aprovação pode dar ao contrato do golpista uma `permissão de token` ilimitada para gastar seus tokens ou NFTs.
- **Phishing de assinatura:** aprovações por assinatura sem gas (como a Permit2) podem autorizar transferências de tokens, sem precisar de transação.
- **Drenagem por delegação:** um recurso mais novo de carteiras (EIP-7702) deixa uma assinatura instalar código na sua conta, e os drainers abusam disso para esvaziar carteiras automaticamente.

Assinar o que você não entende se chama **assinatura às cegas**, e até profissionais se queimam: em fevereiro de 2025, a exchange Bybit perdeu cerca de 1,5 bilhão de dólares ao aprovar uma transação cuja tela havia sido adulterada.

Suas defesas: vá devagar, leia cada pedido de assinatura, trate avisos de “verifique sua carteira” como hostis e use uma carteira que simule as transações antes de você assinar.

# Knowledge Check 5

Você recebe uma mensagem direta: “Sua carteira precisa migrar: conecte em metamask-upgrade.app e assine para verificar seus ativos.” O site pede uma aprovação por assinatura sem gas. Qual é o problema aqui?

- [ ] Nenhum: assinaturas são grátis e não movem fundos.

> ℹ️ Tente de novo! Aprovações por assinatura sem gas podem autorizar transferências de tokens sozinhas.

- [ ] Só é perigoso se você também digitar a frase semente.

> ℹ️ Tente de novo! Nenhuma frase semente é necessária. A própria assinatura pode liberar o gasto dos seus tokens.

- [ ] É seguro, pois o suporte fala por mensagem direta.

> ℹ️ Tente de novo! Suporte legítimo nunca manda mensagem primeiro. Esse é um sinal de alerta clássico.

- [x] É phishing de assinatura: ela pode drenar seus tokens.

> ℹ️ Correto! Mensagem não solicitada, pressa, URL parecida e pedido de assinatura: isso é um wallet drainer.

# Carteiras de hardware

Como você viu na lição [Fundamentos da carteira](https://app.banklessacademy.com/lessons/wallet-basics), uma `carteira de hardware` guarda suas `chaves privadas` em um aparelho dedicado, longe do computador conectado à internet. Isso deixa seus fundos bem mais seguros: um malware não lê suas chaves, e um ladrão teria que roubar o aparelho e invadi-lo. Opções populares incluem Ledger, Trezor e Keystone. Compre sempre direto do fabricante.

Dá para usar uma carteira de hardware junto com carteiras de extensão como a MetaMask, unindo comodidade e segurança. A Ledger [escreveu um guia próprio](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask) sobre essa configuração.

Um limite: ela assina o que você aprovar, então assinar às cegas uma transação maliciosa ainda perde seus fundos. Confira sempre os detalhes na tela do próprio aparelho antes de confirmar.

![](https://app.banklessacademy.com/images/web3-security/hardware-wallets-22a096d4.svg)

# Knowledge Check 6

Verdadeiro ou falso? Uma carteira de hardware só mantém seus fundos seguros se você conferir cada transação antes de aprovar.

- [x] Verdadeiro

> ℹ️ Correto! A carteira de hardware protege suas chaves, mas só conferir o que você assina protege seus fundos.

- [ ] Falso

> ℹ️ Tente de novo! A carteira de hardware assina o que você aprovar. Assinar às cegas ainda pode drená-la.

# Estratégias de carteira

Depois de somar uma carteira de hardware ao seu arsenal, um dos melhores jeitos de proteger os fundos é espalhá-los entre várias `carteiras`. Veja uma estratégia compartimentada com três carteiras separadas:

1. **Carteira social:** uma `carteira quente` com pouco ou nenhum fundo, para logins, mints e testar dApps novos. Assuma que tudo nela pode ser perdido.
2. **Carteira de negociação:** uma `carteira quente` para negociar e outras atividades com fundos que talvez precisem ser movidos rápido.
3. **Carteira HODL:** uma `carteira de hardware` para o `HODL` de longo prazo. _**Nunca**_ use essa carteira em smart contracts ou sites desconhecidos.

👍 **PRÓS:** a separação faz com que um golpe ameace só os fundos _daquela carteira_, e não _tudo_.

👎 **CONTRAS:** dá mais trabalho acompanhar, mas muitos aplicativos deixam você nomear cada carteira.

![](https://app.banklessacademy.com/images/web3-security/wallet-strategies-2b743061.svg)

# Knowledge Check 7

Recomendamos manter seus fundos _______________ para ter mais segurança.

- [ ] guardados em vários airdrops

> ℹ️ Tente de novo! Airdrops são distribuições de token, não um lugar para guardar fundos.

- [ ] trancados em vários NFTs

> ℹ️ Tente de novo! NFTs são ativos em si, não uma estratégia de segurança para seus fundos.

- [x] separados em várias carteiras

> ℹ️ Correto! Separar os fundos entre carteiras distintas faz um golpe ameaçar só os fundos daquela carteira.

- [ ] líquidos em vários endereços

> ℹ️ Tente de novo! Não é questão de liquidez. Separar os fundos entre carteiras distintas é o que limita o estrago.

# Recuperando-se de golpes no web2

Tomara que você ainda não tenha sido vítima de um golpista. Se já foi, há alguns passos para deixar suas contas seguras de novo.

Em um golpe envolvendo um serviço web2, como Gmail ou Discord, você deve:

- Trocar a senha da conta afetada.
- Quando existir, usar o botão “sair de todos os outros dispositivos” para expulsar o golpista.
- Ativar o `2FA`: de preferência uma passkey ou chave de segurança física, senão um app autenticador.
- Denunciar o golpe ao serviço envolvido.
- Garantir que sua conta de e-mail também esteja segura.
- Conversar sobre o golpe com amigos ou membros confiáveis da comunidade.

# Recuperando-se de golpes no web3

Contratos precisam de autorização explícita para gastar tokens no Ethereum. A `permissão` de token é o quanto você autorizou um contrato específico a gastar. Manter esses limites baixos reduz o risco para seus ativos.

No web3 não existe ninguém no comando dos protocolos para quem denunciar golpistas, mas você ainda pode agir:

- Mova imediatamente os fundos que restaram na carteira comprometida para outro endereço, **garantindo que a nova carteira tenha uma frase semente diferente.**
- Revise e revogue suas `permissões` de token com o [revoke.cash](https://revoke.cash) (funciona em muitas redes) ou o [etherscan.io/tokenapprovalchecker](https://etherscan.io/tokenapprovalchecker). Revogar custa gas; o revoke.cash tem um [guia passo a passo](https://revoke.cash/learn/approvals/how-to-revoke-token-approvals).
- Confira também a aba “Delegations” do revoke.cash: se houver alguma delegação que você não reconhece, remova pelo app da sua carteira.
- Use uma `carteira de hardware` daqui em diante e verifique tudo o que assinar.
- Avise os outros denunciando o golpe à comunidade afetada.
- Converse sobre o golpe com amigos ou membros confiáveis da comunidade para ver como proteger você e os outros no futuro.
