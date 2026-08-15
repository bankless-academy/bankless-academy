---
TITLE: Exchange decentralizzati
DESCRIPTION: Scopri come gli exchange fatti di smart contract permettono di scambiare token senza permessi!
LANGUAGE: Italiano
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

# Che cos'è un exchange decentralizzato?

Gli exchange decentralizzati (DEX) sono mercati onchain dove gli Explorer scambiano criptovalute con altri utenti mantenendo l'autocustodia dei propri fondi. Questi scambi peer-to-peer avvengono tramite smart contract pubblici che collegano gli utenti a grandi casse comuni di token, chiamate `pool di liquidità`. Trovi DEX su quasi ogni blockchain, sia su Ethereum Layer 1 sia sui Layer 2.

Scambiare token è una parte essenziale della `DeFi`, dove la varietà e l'utilità dei token superano quelle di ogni altro tipo di exchange. C'è chi compra token per usare prodotti e servizi onchain, chi li compra come investimento, chi ottiene diritto di voto sulle scelte di un progetto, un po' come con le azioni di una società. Qualunque sia la tua motivazione, nella DeFi visiterai i DEX di frequente.

Vediamo come funzionano e come possono esserti utili.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Exchange centralizzati e decentralizzati

Vediamo le differenze tra la tecnologia di un exchange centralizzato (come Coinbase, Binance, Kraken) e quella di un exchange decentralizzato (come Uniswap, PancakeSwap).

Gli exchange centralizzati (`CEX`) permettono di scambiare e investire in criptovalute senza entrare davvero nell'ecosistema blockchain. Il tuo account è registrato sul CEX, quindi le tue chiavi private e i tuoi fondi sono in loro custodia: dipendi dalla loro gestione, dalle loro regole e dai rischi del loro modello di business.

Gli exchange decentralizzati (`DEX`) ti permettono di scambiare criptovalute restando in autocustodia: lo scopo originario delle blockchain. Il modello peer-to-peer ti rende insieme consumatore e fornitore, e apre opportunità finanziarie prima riservate a pochi. Il sistema è trasparente e resistente alla censura: nessuno può bloccare il tuo accesso o annullare i tuoi scambi. Gli attacchi informatici restano un rischio, come vedremo più avanti.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Quale di queste affermazioni sugli exchange di criptovalute è vera?

- [ ] Dietro un DEX non c'è nessun team.

> ℹ️ I DEX hanno team di sviluppo, ma la loro influenza sul progetto è limitata.

- [ ] Su un CEX puoi perdere fondi solo per uno scambio sbagliato.

> ℹ️ Anche i CEX hanno rischi. Nel 2022 l'exchange FTX è crollato e quasi tutti gli utenti hanno perso i depositi.

- [x] I DEX ti fanno scambiare in autocustodia, i CEX no.

> ℹ️ Salvo indicazione contraria, è il CEX a possedere le tue chiavi private.

# Le applicazioni decentralizzate

I DEX sono un tipo di `dApp`, un'applicazione decentralizzata che gira su una blockchain. Perché un'applicazione internet sia considerata "decentralizzata" deve permettere a chiunque di usarla senza distinzioni, elaborare le interazioni senza bisogno di un'altra persona ed essere scritta in codice pubblicamente trasparente.

I servizi delle dApp funzionano con gli smart contract, righe di codice che prendono un'azione onchain dell'utente e restituiscono una risposta onchain prevedibile. La Ethereum Foundation li paragona ai distributori automatici: l'utente digita il numero del prodotto che desidera, inserisce la somma giusta e riceve quello che si aspetta (il suo snack), senza che serva un'altra persona a gestire lo scambio.

Gli smart contract di un DEX gestiscono comandi diversi: scambiare token, votare, aggiungere o togliere `liquidità`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Le applicazioni decentralizzate (continua)

I DEX seguono la stessa logica del distributore automatico: prendono il token che dai e restituiscono quello che vuoi. Altri esempi di dApp:

🎟️ **dApp di voto:** assegnano il voto dell'utente a un'entità scelta.

📦 **dApp di bridge:** spostano criptovalute da una blockchain a un'altra.

🤝 **dApp di prestito:** concedono prestiti a chi soddisfa certi requisiti.

Gli smart contract sono account di Ethereum: hanno un indirizzo e un saldo, e agiscono in automatico quando un trasferimento e un comando li attivano. Un DEX è un account Ethereum programmato, con diverse funzioni disponibili.

Le `dApp` usano di solito un sito web come interfaccia visiva verso gli smart contract sottostanti. Se il sito è offline, con un po' di esperienza puoi comunque accedere al contratto!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Quali proprietà servono perché una dApp sia considerata decentralizzata?

- [ ] Senza permessi: accesso aperto a tutti gli utenti.

> ℹ️ È una qualità delle dApp, ma non è l'unica.

- [ ] Autonoma: le interazioni non hanno bisogno di un intermediario.

> ℹ️ È una qualità delle dApp, ma non è l'unica.

- [ ] Trasparente: il codice dello smart contract è pubblico.

> ℹ️ È una qualità delle dApp, ma non è l'unica.

- [x] Tutte le precedenti.

> ℹ️ Le dApp di Ethereum sono apprezzate perché sanno essere senza permessi, autonome e trasparenti.

# I market maker automatizzati

Nei mercati tradizionali e sui `CEX`, il custode usa un `libro degli ordini`: un database di proposte di acquisto e di vendita. Il CEX abbina la tua proposta a quella di un'altra persona. Di solito paghi una commissione fissa o proporzionale e resti col dubbio: il metodo di abbinamento non è pubblico, ti ha davvero trovato l'affare migliore?

Quasi tutti i `DEX` usano la tecnologia "Automated Market Maker" (`AMM`), il modello più diffuso per gli scambi di token: calcola il prezzo del tuo scambio con un algoritmo pubblico. Alcuni DEX più recenti usano invece libri degli ordini o sistemi basati sugli intenti. Essendo open source, l'algoritmo AMM può essere studiato, copiato e migliorato da chiunque: ne nascono concorrenza sana e innovazione continua.

Gli AMM instradano gli scambi attraverso i `pool di liquidità`, invece di abbinare direttamente domanda e offerta. Queste casse comuni raccolgono e distribuiscono token in base alle interazioni degli utenti, e ogni passaggio è visibile sulla blockchain.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Qual è un vantaggio degli AMM rispetto a un libro degli ordini tradizionale?

- [ ] Lo scambio su un AMM è più veloce di uno su libro ordini.

> ℹ️ Contando anche il tempo di conferma della rete, non è detto che sia vero.

- [ ] Gli AMM ti collegano direttamente all'altro utente.

> ℹ️ Gli AMM instradano gli scambi attraverso casse comuni di token, i pool di liquidità, e non da utente a utente.

- [x] Puoi individuare e impedire scambi sbilanciati creati da altri.

> ℹ️ La trasparenza degli AMM rende molto più difficile nascondere azioni malevole, sia per le piattaforme sia per gli utenti!

# Gli scambi di token

Gli scambi di criptovalute sulla blockchain si chiamano `scambi di token`. Sono interazioni con smart contract che convertono una criptovaluta in un'altra usando i `pool di liquidità` degli AMM. Costruendo un `percorso di scambio`, cioè un tragitto tra i pool giusti, lo smart contract del DEX scambia il token che dai con quello che vuoi. Poiché un pool contiene di solito solo due token e non ogni `coppia di token` ha un pool, il percorso può attraversare più pool.

Per far accedere uno smart contract al nostro wallet, gli diamo il permesso di prelevare fondi fino a un importo stabilito (o illimitato). Queste `autorizzazioni del token` permettono ai contratti fidati di eseguire transazioni senza la nostra chiave privata. Concederle costa gas, quindi restano aperte per usi futuri: un motivo per scambiare da un wallet e conservare in un altro. Vediamo come controllarle e revocarle nella lezione [Gestire le autorizzazioni dei token](https://app.banklessacademy.com/lessons/managing-token-allowances)!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Gli scambi di token (continua)

Vediamo un esempio per capire il processo di permesso e scambio: uno scambio da USDC a OP su Velodrome, un grande DEX sulla rete Optimism. Spesso passa per due pool, perché il `pool di liquidità` USDC/OP non è altrettanto conveniente:

1. Prima concedi allo smart contract di Velodrome il permesso di prelevare USDC dal tuo wallet.
2. Poi invii a Velodrome la richiesta di transazione per lo scambio.
3. La transazione viene accettata: Velodrome preleva dal tuo wallet la quantità di USDC indicata e la versa nel pool di liquidità USDC/ETH. La quantità equivalente di ETH esce da questo primo pool e passa al pool ETH/OP. Infine gli OP vengono trasferiti dal secondo pool all'indirizzo del tuo wallet.

Lo scambio è completo. I tuoi USDC sono diventati OP, passando per ETH!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

Gli AMM possono instradare uno scambio attraverso più pool di liquidità in una sola transazione.

- [x] Vero

> ℹ️ Esatto! Potresti pagare un costo di rete più alto, ma le azioni sono riunite in un'unica transazione.

- [ ] Falso

> ℹ️ Sbagliato, rileggi la slide precedente per capire perché.

# Che cos'è la liquidità?

Nel mondo crypto la liquidità indica la capacità di un mercato di far comprare e vendere asset digitali a prezzi equi. Quando la liquidità è alta i prezzi sono più stabili; quando è bassa sono più volatili. Poiché gli utenti cercano prezzi equi, i `DEX` puntano ad avere alta liquidità in tutti i loro pool.

Alta liquidità significa una grande quantità di token nel pool, di solito divisa 50/50 in valore tra i due token che gli utenti scambiano. Per esempio, un pool USDC/ETH gestisce tutti gli scambi di questa `coppia di token` sulla piattaforma.
Con più token, chi scambia incide meno sull'equilibrio 50/50 e i prezzi restano più stabili. Quanto ogni scambio sposta questo equilibrio si chiama `impatto sul prezzo`.

Da Explorer vuoi l'impatto sul prezzo più basso possibile, per ottenere le condizioni migliori! Cioè vuoi liquidità alta ed equilibrata.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# I fornitori di liquidità

Puntare su alta `liquidità` è essenziale per il successo di un DEX, ma nell'ecosistema crypto la liquidità è limitata, quindi ogni DEX compete per attirarne il più possibile. Da dove arriva?

In un ecosistema decentralizzato, i cittadini della DeFi sono incentivati a fornire liquidità a un pool per far salire il TVL (valore totale bloccato) della piattaforma. Le commissioni raccolte da chi scambia nel pool vengono distribuite agli LP (fornitori di liquidità) in proporzione alla liquidità fornita. Hai capito bene: prestando i tuoi token al pool di un DEX puoi generare una rendita passiva.

Diventare `LP` richiede diverse valutazioni, che vedremo in contenuti futuri. Per ora, sappi che gli alti APR (tassi annui) mostrati nei pool dei DEX non sono garantiti e che si può anche perdere.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Completa la frase: "Quando la liquidità è __________."

- [ ] alta, la volatilità è alta.

> ℹ️ Sbagliato, riprova.

- [ ] bassa, la volatilità è bassa.

> ℹ️ Sbagliato, riprova.

- [x] bassa, la volatilità è alta.

> ℹ️ Giusto! Liquidità e volatilità sono di solito inversamente correlate.

# Knowledge Check 6

Come fanno i DEX a incentivare gli utenti a fornire liquidità?

- [ ] Un'assicurazione sulle perdite negli scambi.

> ℹ️ Né i CEX né i DEX ti proteggono dalle perdite su un investimento sbagliato.

- [x] Una quota delle commissioni e/o token bonus.

> ℹ️ Le commissioni del DEX sono spesso divise tra i vari partecipanti, LP compresi. Alcune piattaforme aggiungono anche dei bonus.

- [ ] L'accesso a pool di liquidità privati.

> ℹ️ Non esistono pool di liquidità privati: con poco traffico i rendimenti non sarebbero adeguati.

- [ ] Tutte le precedenti.

> ℹ️ Qui c'è una sola risposta corretta, riesci a capire quale?

# Le commissioni delle piattaforme

Sia i CEX sia i DEX fanno pagare i loro servizi, e nemmeno usare la blockchain è gratis. Ecco cinque costi da considerare quando scegli una piattaforma.

🏷️ **Commissioni di piattaforma:** i CEX fissano le proprie; su un DEX variano da pool a pool (spesso una frazione di punto percentuale). La differenza chiave: quelle dei DEX sono visibili onchain a chiunque.

🌐 **Costi di rete:** la blockchain fa pagare il gas oltre alla transazione della dApp. Usa la rete nelle ore tranquille e controlla il prezzo su [Etherscan](https://etherscan.io/gastracker). Sui Layer 2 costa molto meno: confronta le reti su [growthepie](https://www.growthepie.com/).

📦 **Commissioni dei bridge:** CEX e bridge fanno pagare il passaggio da una rete all'altra. Sui CEX consulta le loro informazioni; le dApp di bridge mostrano una stima prima della conferma.

💹 **Tassi di cambio:** quando compri criptovalute direttamente con denaro fiat su un CEX o un DEX, diffida dei tassi che non rispecchiano il mercato.

🧊 **Slippage:** i prezzi si muovono in fretta, quindi i DEX lasciano un margine di oscillazione: lo `slippage` (regolabile, di solito 0,5-2 %). Puoi perdere fino a quel valore, ma un margine troppo basso fa rifiutare lo scambio.

Fai sempre le tue ricerche prima di scambiare, così conosci costi e compromessi di ogni piattaforma.

# I vantaggi dei DEX

Abbiamo visto molta teoria in questa lezione, ma forse ti chiedi ancora se i DEX fanno per te. In generale, gli exchange decentralizzati ti conviene usarli se:

- 🔑 Vuoi mantenere la custodia dei tuoi asset digitali.
- 🔒 Vuoi proteggere i tuoi asset sulla blockchain, evitando i crolli dei CEX.
- ⌛ Vuoi accedere al mercato delle criptovalute 24 ore su 24.
- 👛 Vuoi accedere a una gamma più ampia di criptovalute.
- 🤑 Ti interessa fornire liquidità.
- 🛂 Non vuoi registrarti e fare il `KYC` su ogni piattaforma che usi.
- ⚔️ Cerchi i rischi e le opportunità in più della finanza decentralizzata.

Detto questo, quasi ogni utente DeFi ha un account su un exchange centralizzato, perché i CEX offrono un accesso facile da e verso il sistema bancario tradizionale: puoi portare denaro dal conto in banca alla blockchain e viceversa. [Ryan Sean Adams](https://twitter.com/RyanSAdams) lo paragona a un bagno pubblico: _"Entri, fai quello che devi, esci."_

Il bello è che puoi iniziare con un account su un CEX e passare gradualmente alla DeFi man mano che prendi confidenza.

# I rischi dei DEX

Usare un DEX comporta anche dei rischi. Ecco i più rilevanti:

🐞 **Rischio degli smart contract:** gli audit riducono le probabilità di bug, ma non le eliminano: nel 2025 un grande DEX, verificato da più società, ha perso 128 milioni di dollari per un bug sottile nel codice. Nel caso peggiore potresti perdere fino all'importo del tuo scambio. Preferisci smart contract affidabili e verificati a fondo.

💰 **Rischio dell'autocustodia:** essere gli unici responsabili delle chiavi private significa poter perdere un intero wallet per un furto, una truffa o una frase seed smarrita. Per questo conviene ridurre il rischio con una strategia a più wallet e tenere sempre una copia delle frasi seed in un luogo fisico sicuro.

🥪 **Attacchi sandwich:** impostare uno slippage alto aumenta la probabilità che chi anticipa gli scambi organizzi `attacchi sandwich` contro di te. In un attacco sandwich puoi perdere fino all'importo del tuo slippage. Vedremo come proteggerti in contenuti futuri.

Considerati questi vantaggi e rischi, un CEX può essere più adatto a te se:

- 🎓 Sei ancora all'inizio del tuo percorso e stai imparando a valutare rischi e opportunità.
- ⚖️ Fai pochi scambi e di piccolo importo, quindi i costi della blockchain non sono sostenibili.
- 🏰 Preferisci affidare i tuoi fondi a un exchange invece di esserne responsabile.

Alcuni usano un approccio ibrido per ridurre il rischio complessivo: comprano e vendono su un CEX, ma conservano le criptovalute sulla blockchain.

# Knowledge Check 7

Perché usare un exchange decentralizzato invece di uno centralizzato?

- [ ] Vuoi accedere a token non quotati su un exchange centralizzato.

> ℹ️ È una qualità dei DEX, ma non è l'unica.

- [ ] Vuoi mantenere la piena custodia dei fondi scambiati.

> ℹ️ È una qualità dei DEX, ma non è l'unica.

- [ ] Vuoi strumenti e opportunità di solito non disponibili.

> ℹ️ È una qualità dei DEX, ma non è l'unica.

- [x] Tutte le precedenti.

> ℹ️ Giusto! I DEX offrono tutti questi vantaggi rispetto ai CEX.

# Come scegliere un DEX

Nella DeFi ci sono molti exchange decentralizzati, e alcuni sono migliori di altri. Valuta questi cinque fattori chiave prima di decidere quale usare:

🥇 **Affidabilità:** il progetto è noto per serietà, qualità e longevità?

⛲ **Liquidità:** il `TVL` dei pool è abbastanza alto da ridurre al minimo l'impatto sul prezzo?

🖱️ **Facilità d'uso:** l'interfaccia è semplice da usare?

🔐 **Sicurezza:** gli smart contract sono stati verificati da più auditor?

🎁 **Premi e funzioni:** ci sono premi fedeltà per chi usa l'exchange o fornisce liquidità? Puoi votare nella governance?

Tra i nomi noti che ottengono buoni punteggi in queste aree ci sono Uniswap, Curve, Velodrome e PancakeSwap. Puoi passare facilmente da un DEX all'altro finché non trovi i tuoi preferiti! Per la quest della lezione useremo Velodrome, un DEX ben affermato sulla rete Optimism: è facile da usare e, essendo su un Layer 2, le commissioni sono molto più ragionevoli!

# Le buone pratiche sui DEX

Prima di usare una dApp, segui qualche buona pratica per tenere al sicuro i tuoi fondi:

👩‍💻 Verifica il link della dApp sull'account X (Twitter) ufficiale del progetto (spunta dorata) o presso una fonte affidabile, poi salvalo nei preferiti. Molte truffe DeFi partono da un link falso, anche sui motori di ricerca.

🔓 Quando concedi `autorizzazioni del token` onchain, limita l'importo al tuo scambio. Molti DEX usano ormai approvazioni tramite firma valide solo per lo scambio in corso: vedi [Gestire le autorizzazioni dei token](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ Non usare le dApp dal tuo wallet HODL: tienine uno separato per le dApp. La nostra [lezione Sicurezza nel web3](https://app.banklessacademy.com/lessons/web3-security) spiega le strategie sui wallet.

Ora sei pronto a interagire con un exchange decentralizzato!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Come puoi essere sicuro di aver scelto un DEX affidabile?

- [x] Controllando la reputazione e usando solo URL da fonti fidate.

> ℹ️ Giusto! Verifica in modo indipendente la reputazione del DEX e segui solo gli URL forniti da una fonte fidata.

- [ ] Facendo una piccola interazione di prova al primo utilizzo.

> ℹ️ Una sola interazione con uno smart contract malevolo può svuotare tutto il wallet.

- [ ] Entrambe le precedenti.

> ℹ️ Sbagliato. Una sola interazione con uno smart contract malevolo può svuotare tutto il wallet.
