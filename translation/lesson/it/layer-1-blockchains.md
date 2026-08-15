---
TITLE: Blockchain Layer 1
DESCRIPTION: Capisci come funzionano le blockchain Layer 1 e quali sono i loro limiti!
LANGUAGE: Italiano
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

# Introduzione

I problemi nascono quando gli utenti che vogliono usare una rete `blockchain` sono più di quanti la rete ne possa gestire. La forte domanda di `blockspace` può essere temporanea oppure durare finché resta un forte desiderio di usare la blockchain. Nei momenti di grande domanda gli utenti fanno a gara per far elaborare prima le proprie transazioni, le commissioni salgono e chi ha meno capitale resta tagliato fuori.

Questa lezione spiega perché Ethereum e le altre blockchain sono soggette al `trilemma della blockchain`, come il trilemma sia la causa dei problemi appena descritti e come influenzi i piani di Ethereum per servire tutti i suoi utenti. Vedremo i compromessi scelti da diverse blockchain e cosa significano per gli Explorer dell'Academy.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Trilemma della blockchain

Come suggerisce la parola **tri**lemma, ci sono tre qualità delle blockchain che competono fra loro e impediscono di ottimizzarle tutte e tre insieme.

Sono: `sicurezza`, `scalabilità` e `decentralizzazione`.

Perché una blockchain possa fare da base imparziale a un sistema monetario di scala globale, dovrebbe eccellere in tutti e tre gli aspetti. Un sistema monetario deve essere protetto dalle frodi, al riparo dalla censura grazie alla decentralizzazione e scalabile abbastanza da servire più di 8 miliardi di persone.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Il trilemma della blockchain descrive il rapporto fra:

- [ ] ethereum, bitcoin e altcoin

> ℹ️ Riprova! Il trilemma riguarda qualità che competono dentro una blockchain, non blockchain che competono fra loro.

- [ ] sicurezza, censura e frode

> ℹ️ Riprova! La sicurezza è una delle tre, ma censura e frode sono minacce da cui le blockchain si difendono, non qualità del trilemma.

- [x] decentralizzazione, scalabilità e sicurezza

> ℹ️ Corretto! Queste tre qualità competono fra loro e impediscono a una blockchain di ottimizzarle tutte insieme.

- [ ] sicurezza, velocità e commissioni basse

> ℹ️ Riprova! Velocità e commissioni riguardano la scalabilità, che è solo una delle tre qualità del trilemma.

# Sicurezza e consenso

La sicurezza è il requisito più importante per una blockchain pubblica. I computer di una rete devono accordarsi su quali transazioni sono davvero avvenute: questo accordo si chiama `consenso`. Una blockchain è sicura se chi attacca non riesce a impedire alla rete di accordarsi su quella verità. Gli algoritmi di consenso sono progettati per resistere a questi attacchi.

Le catene come Bitcoin, che usano il consenso `proof of work`, proteggono l'accordo rendendo molto competitiva la produzione dei blocchi: ogni produttore corre per risolvere un problema matematico. Il primo che ci riesce ottiene il diritto di creare il blocco successivo e la `ricompensa del blocco` che ne deriva. Riscrivere la storia recente della catena richiederebbe investimenti enormi in potenza di calcolo ed energia, quindi chi attacca spenderebbe più di quanto guadagnerebbe.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Il consenso delle blockchain per le criptovalute è:

- [ ] Il processo con cui i nodi si accordano su ciò che è successo onchain

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Importante per tutto l'ecosistema della catena, per prevenire le frodi

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Protetto da incentivi economici

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! Il consenso è il modo in cui i nodi si accordano sulla verità, e gli incentivi economici rendono l'attacco più costoso del guadagno.

# Sicurezza e attacchi

Un possibile attacco al consenso è l'`attacco del 51 %`: chi controlla la maggioranza del potere di consenso di una rete può annullare transazioni recenti per spendere due volte le stesse monete, oppure censurarne di nuove. Non può falsificare firme né spendere i fondi altrui. Maggioranza significa il 51 % della potenza di calcolo nel proof of work e il 51 % dello `stake` nel proof of stake: un investimento di capitale enorme. E nel proof of stake gli imbrogli dimostrabili, come firmare due blocchi in contrasto, fanno distruggere quello stake (si chiama `slashing`): chi attacca perderebbe più di quanto guadagnerebbe.

Nel consenso `proof of stake` il produttore del blocco non è scelto per competizione, ma a caso. Come nel proof of work, l'algoritmo garantisce che nessun singolo soggetto possa “vincere” regolarmente il diritto di creare un nuovo `blocco`.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Lo scopo finale di un attacco del 51 % è:

- [ ] Interrompere le operazioni di mining

> ℹ️ Riprova! L'attacco colpisce il consenso: annullare o censurare transazioni, non fermare i miner.

- [x] Spendere due volte le monete o censurare transazioni

> ℹ️ Corretto! La maggioranza del potere di consenso permette di annullare transazioni recenti per spendere due volte, o di bloccarne di nuove.

- [ ] Creare una nuova criptovaluta

> ℹ️ Riprova! Chiunque può creare una nuova criptovaluta senza attaccare una rete esistente.

- [ ] Eliminare l'altro 49 %

> ℹ️ Riprova! Gli altri partecipanti non vengono rimossi. La maggioranza serve ad annullare o censurare transazioni.

# Scalabilità: capacità

La `scalabilità` è la capacità di una blockchain di elaborare molte transazioni in fretta. Dipende da due elementi: capacità e definitività.

1) `Capacità transazionale`: quante transazioni una blockchain riesce a elaborare insieme, di solito misurate in transazioni al secondo (`TPS`).

Immagina tante persone a una fermata dell'autobus, con altre che arrivano ogni minuto: vogliono viaggiare tutte, ma su un autobus ci sta solo un certo numero di persone. Per svuotare la fermata più in fretta servono autobus più grandi (più persone) o corse più frequenti (meno tempo). Funziona così anche quando si prova a far stare tante transazioni nel poco `spazio nel blocco` disponibile in ogni blocco. Puoi vedere questa immagine con dati reali su [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Che cosa è vero nell'analogia della fermata dell'autobus?

- [ ] Le persone (transazioni) sono raggruppate negli autobus (blocchi)

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Ogni autobus (blocco) contiene un numero limitato di persone

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Per muovere più persone servono autobus più grandi o più corse

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! Le transazioni riempiono i blocchi come i passeggeri riempiono gli autobus. Per smaltire la coda servono blocchi più grandi o più frequenti.

# Scalabilità: definitività

Il secondo aspetto della scalabilità è:

2) `Definitività`: quando possiamo essere ragionevolmente sicuri che una transazione non verrà cambiata o annullata?

Nelle catene proof of work come Bitcoin si misura in blocchi: più blocchi vengono aggiunti dopo la tua transazione, più puoi essere sicuro che non sarà annullata. Ricorda che un algoritmo di consenso sicuro rende molto costoso cambiare i blocchi passati, e il costo cresce quanto più si va indietro. Bitcoin produce un nuovo `blocco` ogni 10 minuti circa, quindi aspettare più conferme richiede circa un'ora. Il proof of stake di Ethereum segue un'altra strada: i `validatori` votano per finalizzare i blocchi e dopo circa 13 minuti (due `epoche` di voti) una transazione è definitiva.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# La decentralizzazione distribuisce il potere

La `decentralizzazione` è l'ultima base del trilemma: il passaggio del controllo e delle decisioni da un'unica entità a una rete distribuita fra molti. È il principio che rende le blockchain `senza permessi` e `resistenti alla censura`: chiunque può usarle e chiunque può costruirci sopra software.

Le piattaforme centralizzate come Facebook e Twitter possono disattivare un account in qualsiasi momento. Molti streamer noti su Twitch o TikTok si sono ritrovati rimossi senza motivo, e riottenere l'account può essere lungo e doloroso. Senza decentralizzazione, il `registro` di una blockchain è solo un foglio di calcolo sul computer di una banca, e sono i banchieri a decidere chi può aprire un conto. Una rete `senza permessi` significa che l'autorità è abbastanza decentralizzata: non c'è modo di togliere l'accesso a una persona o a un'entità.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Quale di queste affermazioni NON è vera per la decentralizzazione?

- [ ] Rende le blockchain resistenti alla censura

> ℹ️ Riprova! L'affermazione è vera: senza un'entità che controlla, nessuno può censurare la rete.

- [ ] Rende le blockchain senza permessi

> ℹ️ Riprova! L'affermazione è vera: con l'autorità decentralizzata nessuno può togliere l'accesso a una persona.

- [x] Aiuta i poteri autoritari a mantenere il controllo

> ℹ️ Corretto! Questo NON è vero: la decentralizzazione fa l'opposto, allontanando il controllo da ogni singola entità.

- [ ] Chiunque, ovunque, può usare i sistemi senza permessi

> ℹ️ Riprova! L'affermazione è vera: senza permessi significa che a nessuno può essere negato l'accesso.

# È decentralizzato?

Ma dire se qualcosa è decentralizzato non è una risposta sì o no. Dieci entità che controllano sono decentralizzate? E mille? Un milione? Non esiste una soglia standard oltre la quale qualcosa è abbastanza decentralizzato, quindi conviene pensare alla decentralizzazione come a uno spettro. Invece di scegliere solo fra bianco e nero, ci sono molte sfumature di grigio.

Così possiamo dire che qualcosa è “più o meno decentralizzato di qualcos'altro”, invece di “centralizzato o decentralizzato”. Per resistere alla censura di uno Stato, un sistema monetario neutrale ha bisogno di un alto grado di decentralizzazione. Le blockchain più recenti spesso scambiano decentralizzazione con scalabilità, ma così restano esposte alle stesse pressioni di società e governi che sentono le piattaforme centralizzate, e possono finire per praticare la stessa censura dei social centralizzati.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Blockchain diverse usano gradi diversi di decentralizzazione.

- [x] Vero

> ℹ️ Corretto! La decentralizzazione è uno spettro: ogni blockchain sceglie quanta scambiarne con la scalabilità o con altri obiettivi.

- [ ] Falso

> ℹ️ Riprova! La decentralizzazione è uno spettro, e ogni blockchain sceglie il proprio compromesso.

# Qualche esempio

Ogni blockchain affronta il trilemma a modo suo e ha fatto compromessi per puntare ai propri obiettivi. Bitcoin ed Ethereum mettono sicurezza e decentralizzazione davanti alla scalabilità: da qui il lungo `tempo di definitività` di Bitcoin e lo `spazio nel blocco` limitato di Ethereum. Quando la domanda di `smart contract` sale, soprattutto per la DeFi, le commissioni di Ethereum crescono: nei picchi del 2021 una singola transazione poteva costare decine di dollari.

Le commissioni in salita hanno aperto uno spazio ai `Layer 1 alternativi` come BNB Chain, che ha preferito la scalabilità alla decentralizzazione per avere più `capacità transazionale` e costi più bassi. Catene di terza generazione come Solana usano metodi nuovi per risolvere il trilemma, ma tutte le blockchain restano soggette a questi vincoli di fondo. La scelta di ogni catena definisce il suo ecosistema, per gli effetti di fondo che ne derivano.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Che cosa si può fare?

Se Ethereum ha scelto alta sicurezza e decentralizzazione, come può scalare per servire tutti gli utenti della rete finanziaria globale che vuole diventare? La roadmap di Ethereum ha esplorato due risposte: i `Layer 2` e lo `sharding`.

I `Layer 2` aumentano la scalabilità di Ethereum senza sacrificare le altre due parti del trilemma. Sono un livello aggiuntivo sopra la blockchain principale: si appoggiano a essa per la sicurezza, ma offrono commissioni più basse e transazioni più veloci. Li vedremo meglio nella lezione sui Layer 2.

Lo `sharding` avrebbe diviso la blockchain in più catene parallele, come aggiungere corsie a una strada. Ethereum ha messo da parte quel piano per uno più semplice: rendere i dati dei blocchi più economici per i Layer 2 (dal 2024) e alzare la capacità un passo alla volta, senza sacrificare sicurezza e decentralizzazione.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

I Layer 2:

- [ ] Forniscono la propria sicurezza

> ℹ️ Riprova! I Layer 2 si appoggiano alla blockchain principale per la sicurezza.

- [x] Aumentano la scalabilità della blockchain principale

> ℹ️ Corretto! I Layer 2 stanno sopra la catena principale e aggiungono scalabilità senza sacrificare sicurezza o decentralizzazione.

- [ ] Aumentano le commissioni per gli utenti

> ℹ️ Riprova! I Layer 2 fanno l'opposto: gli utenti pagano commissioni più basse.

- [ ] Allungano il tempo di definitività per gli utenti

> ℹ️ Riprova! I Layer 2 offrono transazioni più veloci, non più lente.

# Il futuro di Ethereum

La rete Ethereum continua a migliorare la scalabilità senza sacrificare gli altri lati del trilemma. Il passaggio al consenso `proof of stake` (The Merge, 2022) ha tagliato il consumo di energia della rete di oltre il 99 %, e nel 2024 sono arrivati dati dei blocchi economici per i Layer 2. **Scalare è un lavoro continuo: ogni aggiornamento rende Ethereum più veloce ed economico, mantenendo sicurezza e decentralizzazione come principi cardine.** La Ethereum Foundation ha un'ottima pagina sulla [roadmap di Ethereum](https://ethereum.org/roadmap/).

Intanto molti protocolli `Layer 2` costruiscono sopra Ethereum per soddisfare la domanda senza dover aggiornare il protocollo stesso. Si appoggiano al Layer 1 per la sicurezza decentralizzata e ci mettono la scalabilità: la varietà dei Layer 2 crea un ecosistema decentralizzato! Fra i `rollup` principali ci sono Arbitrum, OP Mainnet e Base; Polygon PoS è una `sidechain` molto usata, con una sicurezza tutta sua.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Gli aggiornamenti di Ethereum comprendono:

- [ ] Layer 2 e dati dei blocchi più economici per la scalabilità

> ℹ️ Riprova! Fa parte degli aggiornamenti, ma non è l'unico.

- [ ] Mantenere decentralizzazione e sicurezza come principi cardine

> ℹ️ Riprova! Fa parte degli aggiornamenti, ma non è l'unico.

- [ ] Ridurre i consumi di energia con il consenso proof of stake

> ℹ️ Riprova! Fa parte degli aggiornamenti, ma non è l'unico.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! Layer 2 e dati dei blocchi economici aggiungono scala, il proof of stake ha tagliato i consumi, e sicurezza e decentralizzazione restano centrali.

# Che cosa significa per gli Explorer?

Gli utenti hanno bisogno di commissioni basse per imparare ed esplorare la tecnologia con poche barriere all'ingresso e con errori che costano poco, ancora di più all'inizio del percorso. La blockchain di Ethereum non è ancora ideale, ma i suoi valori la rendono una delle migliori candidate a realizzare il sogno di un sistema di calcolo finanziario globale. Gli Explorer possono imparare a usare Ethereum senza pagare commissioni enormi: con i Layer 2 ottengono la sicurezza e la decentralizzazione di Ethereum insieme a una scalabilità maggiore.

La prossima lezione spiegherà le soluzioni `Layer 2` e come iniziare. Avanti, Explorer!
