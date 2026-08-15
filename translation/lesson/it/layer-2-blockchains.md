---
TITLE: Blockchain Layer 2
DESCRIPTION: Entra nell'ecosistema Layer 2: transazioni più veloci e costi più bassi.
LANGUAGE: Italiano
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

# Introduzione

Lo stato ideale per una blockchain è essere il più decentralizzata, sicura e scalabile possibile. Costruirne una che riesca bene in tutti e tre gli aspetti resta una sfida irrisolta, e ha un nome: il `trilemma della blockchain`.

Bitcoin ed Ethereum sono abbastanza decentralizzate e sicure, ma non scalano bene: lo si vede dalle commissioni alte e dalle lunghe code quando la rete è congestionata. Per aggirare il problema, gli Esploratori possono usare tecnologie che abbattono i costi e aumentano la velocità delle transazioni. Insieme si chiamano soluzioni di scalabilità Layer 2 (L2).

La `Lightning Network` è la soluzione di scalabilità più nota di Bitcoin e usa i `canali di pagamento` per scalare i pagamenti tra le parti. Ethereum allevia il trilemma con varie soluzioni L2, sostenute dallo spazio `blob`, economico e temporaneo, aggiunto a Mainnet nel 2024 (una forma leggera dello “sharding” un tempo previsto).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Canali di pagamento

Sulla blockchain di Bitcoin, la Lightning Network usa canali di pagamento bidirezionali, che permettono a più parti di scambiarsi BTC senza transazioni sulla catena principale.

L'architettura permette a due utenti di aprire un canale di pagamento tra loro. Ogni canale è solo tra due parti, ma i pagamenti possono essere instradati su una rete di canali collegati per raggiungere utenti lontani. Tra l'apertura e la chiusura, le parti possono spostarsi fondi. Il micro-registro di ciascun partecipante si aggiorna dopo che entrambi hanno firmato la transazione, il che di solito richiede che i nodi di entrambe le parti siano raggiungibili.
Il canale può essere chiuso in qualsiasi momento: basta che una parte trasmetta alla blockchain la versione più recente del micro-registro.

I canali di pagamento non supportano interazioni avanzate con gli `smart contract`, solo transazioni base tra pari.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Devi essere online per fare transazioni con la Lightning Network di Bitcoin.

- [x] Vero

> ℹ️ Corretto! Aggiornare un canale di pagamento richiede la firma di entrambi gli utenti, quindi i nodi di entrambe le parti devono essere raggiungibili.

- [ ] Falso

> ℹ️ Riprova! Gli aggiornamenti del canale richiedono le firme di entrambe le parti, quindi i loro nodi devono essere online.

# Soluzioni di scalabilità di Ethereum

Gli sviluppatori di Ethereum lavorano a soluzioni di scalabilità native quasi da quando la rete è attiva.

Per gran parte della community, per essere una “soluzione di scalabilità di Ethereum” un progetto deve colmare i limiti di `scalabilità` di Ethereum senza sacrificare `sicurezza` o `decentralizzazione`. Per gli utenti, ciò che conta è avere transazioni più veloci e `gas` più economico rispetto a Ethereum Mainnet. Per competere, alcune soluzioni accettano più compromessi sul trilemma di altre.

Ethereum si definisce per la sua capacità di eseguire smart contract, quindi anche le sue soluzioni di scalabilità devono ereditarla. Non servono transazioni veloci ed economiche se poi gli utenti non possono usare le loro `dApp` preferite da un Layer 2.

# Knowledge Check 2

Le soluzioni di scalabilità di Ethereum:

- [ ] usano i canali di pagamento per scalare la rete.

> ℹ️ Riprova! I canali di pagamento sono l'approccio della Lightning Network di Bitcoin. Ethereum scala con soluzioni come i rollup.

- [ ] non possono supportare interazioni con gli smart contract.

> ℹ️ Riprova! Il supporto agli smart contract è essenziale: gli utenti vogliono le loro dApp preferite da un Layer 2.

- [x] devono migliorare la scalabilità senza indebolire il trilemma.

> ℹ️ Corretto! Una vera soluzione di scalabilità di Ethereum risolve la scalabilità senza sacrificare sicurezza o decentralizzazione.

- [ ] permettono transazioni più veloci al prezzo di più gas.

> ℹ️ Riprova! Le soluzioni di scalabilità puntano a transazioni più veloci E a gas più economico di Ethereum Mainnet.

# Collegare Layer 1 e Layer 2

Come abbiamo visto in [Le basi della blockchain](https://app.banklessacademy.com/lessons/blockchain-basics), le blockchain sono database chiamati `registri`, che annotano un elenco cronologico di transazioni protetto dalla crittografia. Le blockchain L1 e le soluzioni L2 sono blockchain a pieno titolo, ognuna con i propri database di indirizzi e dati.

Per trasferire informazioni tra database di blockchain diverse si usa un'infrastruttura chiamata `bridge`. Se immagini Ethereum Mainnet (o qualsiasi altra blockchain `L1`) come un'isola, e un'altra blockchain o la tua soluzione di scalabilità preferita come una seconda isola, un bridge cripto è il nome generico dell'autostrada che collega le due isole digitali.

La tecnologia è molto complessa, ma dal punto di vista dell'utente finale il processo è semplice come scegliere una destinazione.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechain

Una `sidechain` è una blockchain separata che funziona in modo indipendente da Ethereum, ma è collegata a Mainnet da un `bridge`. Per migrare i token li blocchi in un contratto bridge su Mainnet e sulla sidechain vengono coniati token equivalenti. Attenzione: questo NON dà ai tuoi fondi la sicurezza di Ethereum, perché bridge e sidechain dipendono dai validatori della sidechain. Se uno dei due viene compromesso (come nell'attacco al bridge di Ronin del 2022, da 625 milioni di dollari), i fondi bloccati possono essere rubati.

Le sidechain restano soggette al trilemma. Il `gas` più economico e le transazioni più veloci arrivano da un insieme di validatori più piccolo ma più potente: scambiano un po' di decentralizzazione e sicurezza per la scalabilità.

Sidechain come Polygon PoS pubblicano regolarmente istantanee (“checkpoint”) su Ethereum. Questo dà alla loro storia una forma di definitività e permette di dimostrare i saldi quando esci dal bridge, ma non rende i fondi sicuri quanto su Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Le sidechain:

- [ ] bloccano i token migrati in un contratto su Mainnet.

> ℹ️ Riprova! È vero, ma non è l'unica affermazione corretta.

- [ ] hanno costi del gas più bassi di Mainnet.

> ℹ️ Riprova! È vero, ma non è l'unica affermazione corretta.

- [ ] hanno rischi di centralizzazione maggiori di Mainnet.

> ℹ️ Riprova! È vero, ma non è l'unica affermazione corretta.

- [x] Tutte le precedenti.

> ℹ️ Corretto! Bloccano i token su Mainnet e costano meno, ma il loro piccolo insieme di validatori scambia decentralizzazione per velocità.

# Rollup

I protocolli Layer 2 che usano la tecnologia rollup restano più vicini al livello di sicurezza di Ethereum Mainnet.

Come le sidechain, i rollup permettono di eseguire transazioni fuori da Ethereum Mainnet. Queste transazioni vengono poi “arrotolate” in un unico lotto, e i dati del lotto sono pubblicati su Ethereum in pacchetti economici e temporanei chiamati `blob`, introdotti con l'aggiornamento Dencun del marzo 2024. I blob sono il motivo principale per cui i costi tipici su L2 sono scesi a pochi centesimi o meno.

Per dimostrare di essere abbastanza sicuro da elaborare transazioni per conto di Mainnet, il rollup deve fornire “prove convincenti” che le transazioni di ogni lotto inviato siano valide e sicure. Queste prove vengono incluse nel rollup e verificate dal contratto bridge su Ethereum Mainnet.

Oggi ci sono due metodi capaci di fornirle: i `rollup ottimistici` e i `rollup ZK`. Vediamoli da vicino.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Rollup ottimistici

Protocolli L2 come Optimism, Base e Arbitrum usano i `rollup ottimistici` come architettura di scalabilità. Si chiamano così perché le informazioni nel lotto sono considerate valide finché non si dimostra il contrario: si fa un'ipotesi ottimistica.

Per limitare gli abusi, di solito c'è un ritardo di alcuni giorni quando chiedi di spostare fondi dall'L2 verso Mainnet. In quel periodo i validatori del bridge possono pubblicare una `prova di frode` per annullare il prelievo. Questo meccanismo somiglia ai processi di compensazione bancari, ma è decentralizzato.

Nota: i servizi di bridge di terze parti, come Across e Relay, spostano i fondi in pochi minuti invece che in giorni. Questi bridge veloci ti anticipano il denaro dal loro fondo, quindi ti assumi il rischio dei loro smart contract e di chi fornisce quei fondi, un livello di fiducia in più rispetto al bridge del rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Con i rollup ottimistici, le transazioni sono considerate valide finché non si dimostra il contrario.

- [x] Vero

> ℹ️ Corretto! L'ipotesi ottimistica è che i lotti siano validi, con un periodo di contestazione in cui una prova di frode può annullare un prelievo.

- [ ] Falso

> ℹ️ Riprova! È proprio da quell'ipotesi ottimistica che questi rollup prendono il nome.

# Rollup ZK

I `rollup ZK` sono un tipo di rollup basato sulla tecnologia zero-knowledge. A differenza dei `rollup ottimistici`, confermano la legittimità del lotto senza dipendere da utenti che cerchino prove di frode. Inviano invece una prova matematica, detta `prova di validità`, che permette a Ethereum di controllare un intero lotto senza rifare il lavoro.

Il grande vantaggio è il `tempo di regolamento`, detto anche `definitività della transazione`. Invece di un periodo di contestazione di più giorni, i rollup ZK danno accesso ai fondi su Mainnet in poche ore, appena viene inviata la prova di validità successiva. Nonostante il nome, qui la tecnologia zero-knowledge non serve per la privacy: sui principali rollup ZK le transazioni sono pubbliche come su Mainnet.

Alcuni protocolli importanti usano questa tecnologia per le loro soluzioni di scalabilità, tra cui ZKsync, Starknet e Linea. Lo sviluppo è ancora agli inizi, ma il potenziale futuro è grande.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Rispetto ai rollup ottimistici, i rollup ZK:

- [ ] mantengono private le transazioni su Mainnet.

> ℹ️ Nonostante il nome “zero-knowledge”, i principali rollup ZK sono trasparenti come Mainnet: le prove servono per la validità, non per la privacy.

- [x] usano prove di validità ed evitano il periodo di contestazione.

> ℹ️ Corretto! Una prova matematica conferma ogni lotto, quindi la definitività su Mainnet non richiede di attendere le prove di frode.

- [ ] dipendono da osservatori che inviano prove di frode.

> ℹ️ Così funzionano i rollup ottimistici. I rollup ZK dimostrano la validità in anticipo.

# Compatibilità delle dApp tra catene

Quando si confrontano `rollup ottimistici` e `rollup ZK`, la cosa che interessa di più agli utenti sono i tempi di prelievo. Ma dato che i bridge di terze parti risolvono quel ritardo, non dovrebbe pesare molto nella scelta della soluzione di scalabilità da esplorare.

Molti rollup ottimistici sono “equivalenti alla EVM”: la L2 supporta in modo nativo qualsiasi dApp che gira sulla `Ethereum Virtual Machine` (EVM). L'equivalenza EVM permette di distribuire qualsiasi smart contract già presente su Mainnet, così gli utenti L2 accedono alle loro dApp preferite.

Anche le sidechain come Polygon PoS eseguono la EVM in modo nativo, e la maggior parte dei rollup ZK moderni (come ZKsync, Linea e Scroll) sono equivalenti alla EVM o quasi. Perciò le tue dApp Ethereum preferite sono disponibili su quasi tutto l'ecosistema L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Le soluzioni di scalabilità equivalenti alla EVM possono riutilizzare facilmente gli smart contract distribuiti su Mainnet.

- [x] Vero

> ℹ️ Corretto! L'equivalenza EVM permette di distribuire sulla L2 qualsiasi smart contract che gira su Mainnet, portando con sé le dApp familiari.

- [ ] Falso

> ℹ️ Riprova! Riutilizzare gli smart contract di Mainnet è proprio il punto dell'equivalenza EVM.

# Riepilogo della lezione

Le blockchain L1 come Bitcoin ed Ethereum sono oggi limitate dal `trilemma della blockchain`. I `canali di pagamento` sulla rete Bitcoin, o le sidechain e i rollup su Ethereum, aiutano queste reti a scalare e alleviano il trilemma.

I `bridge` collegano le blockchain L1 con le `sidechain` e i `rollup`, e il modo in cui funziona il contratto bridge influenza le proprietà della rete collegata.

I fondi su una sidechain non ereditano la `sicurezza` di Ethereum: i token migrati restano bloccati in un contratto su Mainnet, ma la loro protezione dipende dai validatori e dal contratto bridge della sidechain stessa. Queste catene hanno un insieme di validatori piccolo ma potente, che alza la velocità delle transazioni e abbassa i costi del gas, al prezzo di decentralizzazione e sicurezza.

I rollup, come le sidechain, validano ed elaborano le proprie transazioni, ma il loro contratto bridge chiede “prove convincenti” della validità prima di considerare buoni i dati. Così mantengono un livello di `sicurezza` e `decentralizzazione` in linea con i valori di Ethereum. I metodi per fornire queste prove sono due: i `rollup ottimistici` aspettano più giorni prima di regolare i loro lotti su Mainnet, tempo in cui i validatori del bridge individuano e segnalano le frodi; i `rollup ZK` danno una garanzia matematica della legittimità, grazie alla tecnologia `zero-knowledge`.

Oggi sia i rollup ottimistici sia i rollup ZK moderni offrono un'alta compatibilità di smart contract con Ethereum Mainnet, così le dApp di Mainnet si distribuiscono facilmente sulle loro reti. Molti credono che i rollup ZK saranno la soluzione di scalabilità del futuro, grazie alla definitività rapida e alle solide garanzie di validità.

# Inizia il tuo viaggio su Layer 2 con Optimism o Base 🙂

Optimism e Base, entrambi rollup ottimistici equivalenti alla EVM, sono ottime L2 da cui partire. Usare le dApp su una delle due è simile a farlo su L1, solo più economico e veloce, ed entrambe usano ETH come gas. La tua prossima missione è il primo passo del tuo viaggio su Optimism o Base!

Entrambi gli ecosistemi sono profondamente influenzati dai valori di Ethereum, e Optimism è noto per [finanziare beni pubblici](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) che portano valore all'ecosistema, come l'educazione gratuita di Bankless Academy.

Optimism e Base non sono solo piattaforme che usano i rollup ottimistici: mostrano come le blockchain possano risolvere problemi reali e aprire nuovi modi di fare transazioni e coordinarsi. E questo dovrebbe renderci tutti ottimisti. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
