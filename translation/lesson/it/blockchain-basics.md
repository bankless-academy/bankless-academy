---
TITLE: Le basi della blockchain
DESCRIPTION: Scopri l'architettura di base della tecnologia blockchain.
LANGUAGE: Italiano
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

# Introduzione

La tecnologia `blockchain` è un modo rivoluzionario di conservare e tracciare i dati, rendendoli allo stesso tempo accessibili a chiunque. È un modo di organizzare i dati in un unico elenco pubblico di tutte le transazioni passate, che chiunque può consultare ma nessuno può modificare. Questo elenco pubblico è chiamato `registro` della blockchain.

Dopo aver esaminato i livelli di una blockchain capirai la struttura che uno strumento chiamato `block explorer` mostra: l'**elenco** dei blocchi, le **transazioni** dentro quei blocchi e i **dettagli** di ogni singola transazione. Per vederlo all'opera prova [Etherscan](https://etherscan.io/), un block explorer molto usato per Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# La struttura della blockchain

Il termine blockchain si usa come sostantivo (la blockchain di Bitcoin) o come aggettivo (tecnologia blockchain). In ogni caso, `blockchain` indica l'intera struttura su cui sono costruite le criptovalute.

Guardandola dall'esterno verso l'interno, una blockchain ha 3 livelli di struttura:

1. La `blockchain` nel suo insieme è fatta di blocchi collegati tra loro in ordine
2. I `blocchi` sono fatti di gruppi di transazioni messe insieme
3. Le `transazioni` sono trasferimenti di valore, o istruzioni a programmi, tra `indirizzi` della rete

Questi tre livelli insieme creano un registro crittografico: una storia immutabile di tutte le transazioni fatte sulla rete.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Che cos'è una blockchain?

- [ ] Gruppi ordinati di transazioni chiamati blocchi

> ℹ️ Riprova! I blocchi fanno parte della struttura, ma non sono l'unica risposta corretta.

- [ ] Un registro condiviso che tutti vedono e nessuno modifica

> ℹ️ Riprova! È vero, ma non è l'unica risposta corretta.

- [ ] Blocchi collegati tra loro in sequenza

> ℹ️ Riprova! Questo descrive la catena di blocchi, ma non è l'unica risposta corretta.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! Tutte e tre sono vere: la blockchain è un registro condiviso e immodificabile di transazioni raggruppate in blocchi collegati in sequenza.

# Esaminare il registro

Nei sistemi monetari classici ci fidiamo di terze parti come le banche per tenere il conto di quanto denaro ha ciascuno. Ma per essere davvero bankless vogliamo un sistema che non ci obblighi a fidarci di un solo soggetto per gestire il registro.

Il `registro` è l'elenco di TUTTE le transazioni mai fatte su una blockchain, e sulle blockchain `pubbliche` chiunque può vederlo. Gruppi distinti di transazioni del registro formano i blocchi che insieme compongono la blockchain.

Quando si aggiungono nuove transazioni, i saldi conservati a ogni `indirizzo` si aggiornano; le transazioni passate non si possono modificare. È come poter guardare in qualsiasi momento lo storico completo del conto in banca di chiunque.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Le transazioni sul registro

Vediamo alcune transazioni di esempio:

- Alice invia 5 ETH a Bob
- Bob invia 2 ETH a Charlie

Ogni transazione mostra la _variazione_ della quantità di criptovaluta per ciascun indirizzo, quindi il risultato totale di tutte le transazioni È la quantità di criptovaluta che ogni indirizzo possiede.

---

⇒ Alice ha perso 5 ETH

⇒ Bob ha guadagnato 3 ETH in totale (ne ha ricevuti 5, ne ha inviati 2)

⇒ Charlie ha guadagnato 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Quale di queste affermazioni è vera per i registri delle blockchain pubbliche?

- [ ] Tutte le transazioni sono pubbliche e quelle passate non cambiano

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Il registro tiene il conto delle cripto di ogni indirizzo

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Il registro cresce man mano che si aggiungono transazioni

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! Il registro è pubblico, immodificabile, tiene aggiornati i saldi degli indirizzi e cresce a ogni nuova transazione.

# La decentralizzazione

Le transazioni inserite in un registro `blockchain` non solo sono immodificabili: sono anche condivise e distribuite su una grande rete di computer. Perché nessun singolo soggetto abbia il potere di cambiare i dati, le copie del registro sono conservate su molti computer, i `nodi`, sparsi per la rete.

Questa condivisione dei dati è ciò che rende `decentralizzato` il registro della blockchain. Nessuna autorità o entità singola controlla i dati. Blockchain come Ethereum sono anche `pubbliche`, perché il registro può essere consultato da chiunque.

Per questa lezione ricorda solo che i dati del registro sono condivisi tra i molti computer che fanno funzionare la rete Ethereum.

# Knowledge Check 3

Cosa rende decentralizzata una blockchain?

- [ ] Solo un soggetto può scrivere sulla blockchain

> ℹ️ Riprova! Un solo soggetto al comando è il contrario della decentralizzazione.

- [ ] Rispetta i requisiti di decentralizzazione fissati dal governo

> ℹ️ Riprova! La decentralizzazione nasce dal progetto della rete, non da un'approvazione pubblica.

- [x] Nessun soggetto controlla il registro, salvato su molti computer

> ℹ️ Corretto! Conservare copie del registro su molti nodi fa sì che nessun soggetto possa controllare o cambiare i dati.

- [ ] Il registro è conservato su un unico server sicuro

> ℹ️ Riprova! Un server unico sarebbe un punto di controllo centrale. Le copie del registro stanno su molti nodi.

# L'anatomia di un blocco

Una caratteristica importante delle blockchain è che i dati delle transazioni passate non si possono cambiare dopo che sono entrati in un blocco. Ogni blocco ha infatti un `hash del blocco` unico, come un'impronta digitale, che serve a collegare i blocchi uno dopo l'altro. Nessuno può cambiare le transazioni passate senza cambiare quell'impronta e quella di OGNI blocco successivo, perché ogni impronta dipende dalla precedente.

Quindi ogni `blocco` è semplicemente un gruppo di transazioni più un'impronta unica (il suo `hash del blocco`) calcolata dal contenuto del blocco. I blocchi sono incatenati perché ognuno richiama l'impronta unica del blocco precedente, formando un'unica block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

A cosa serve l'hash di un blocco?

- [ ] Cifrare i dati del blocco perché nessuno possa leggerli

> ℹ️ Riprova! I dati del blocco restano leggibili da tutti. L'hash è un'impronta, non una cifratura.

- [x] Collegare i blocchi e rendere immutabili le transazioni passate

> ℹ️ Corretto! Ogni blocco richiama l'impronta del precedente, quindi cambiare i dati passati romperebbe tutti i blocchi successivi.

- [ ] Garantire che le transazioni arrivino all'indirizzo giusto

> ℹ️ Riprova! Sono gli indirizzi a stabilire dove vanno i fondi. L'hash del blocco collega i blocchi tra loro.

- [ ] Garantire che la blockchain resti decentralizzata

> ℹ️ Riprova! La decentralizzazione nasce dal distribuire il registro su molti nodi, non dall'hash del blocco.

# Dentro un blocco

Ricorda: i dati di un `blocco` sono solo un gruppo di transazioni messe insieme. Guardando dentro un singolo blocco troviamo un elenco di transazioni e alcuni dati su chi ha creato il blocco.

Riprendendo l'esempio di prima sul registro della blockchain, quelle due transazioni potrebbero finire nello stesso blocco oppure distribuirsi su più blocchi nel tempo. Ma in qualunque blocco entrino, prima o poi vengono tutte aggiunte al registro complessivo.

- Alice invia 5 ETH a Bob
- Bob invia 2 ETH a Charlie

Ricorda anche che ogni blocco deve richiamare l'`hash del blocco` precedente per tenere insieme la catena.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Quali informazioni sono contenute in un blocco?

- [ ] Tutte le informazioni contenute nei blocchi precedenti

> ℹ️ Riprova! Un blocco richiama solo l'hash del blocco precedente. Non copia tutti i dati passati.

- [ ] Qualsiasi cosa utile alla blockchain: la dimensione è illimitata

> ℹ️ Riprova! Un blocco è un gruppo distinto di transazioni, non un contenitore illimitato.

- [x] I dati delle transazioni e un riferimento al blocco precedente

> ℹ️ Corretto! Un blocco è un gruppo di transazioni più l'hash del blocco precedente, che incatena i blocchi tra loro.

- [ ] Tutti i dati delle transazioni di un intervallo di tempo fisso

> ℹ️ Riprova! Le transazioni possono finire in un solo blocco o distribuirsi su più blocchi nel tempo.

# Le singole transazioni

I dati di una blockchain sono semplicemente un elenco di `transazioni`, cioè registrazioni di valuta spostata tra utenti. Perché sia valida, ogni transazione deve essere firmata con la `firma digitale` di chi la invia.

È quello che fai quando confermi una transazione con un wallet: la firmi con la tua firma digitale per autorizzarla. Puoi pensarci come l'equivalente digitale di firmare a mano un assegno, una ricevuta o un pagamento con carta.

Le transazioni possono essere semplici, come inviare asset cripto, oppure più complesse, come scambiarli o perfino pubblicare codice che si attiva quando viene richiamato: gli `smart contract`.

Infine, ogni transazione ha un identificatore digitale unico, l'`hash della transazione`, che nessun'altra transazione possiede. Così è facile richiamarla in seguito e i suoi dettagli non possono più essere cambiati.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

I dati di una blockchain sono solo un elenco di transazioni raggruppate in blocchi. Esempi di queste transazioni possono essere:

- [x] Inviare o ricevere asset cripto

> ℹ️ Corretto! Le transazioni registrano valuta che si sposta tra utenti, dai semplici trasferimenti alle interazioni con gli smart contract.

- [ ] Cambiare la dimensione del blocco

> ℹ️ Riprova! La dimensione del blocco non è qualcosa che una transazione può cambiare.

- [ ] Modificare dati passati della blockchain

> ℹ️ Riprova! I dati passati di una blockchain non si possono cambiare. È una sua caratteristica fondamentale.

- [ ] Tutte le risposte precedenti

> ℹ️ Riprova! Solo una delle risposte precedenti è una transazione valida su blockchain.

# Gli indirizzi degli utenti

Un `indirizzo` è un identificatore pubblico che chiunque può cercare sulla blockchain. Come con un indirizzo e-mail, chiunque può inviargli fondi, ma solo chi controlla la `chiave privata` può sbloccarli e usarli.

Su Ethereum un indirizzo inizia sempre con \_0x\_\_\_\_\_\_\_\_\_\_ ed è composto da 42 caratteri tra numeri e lettere, derivati dalla `chiave pubblica` di quell'indirizzo.

Guardando una singola transazione in un block explorer vediamo gli indirizzi From: e To:. Questo non ci dice chi sono le _persone_ che li controllano, ma permette a chiunque di seguire il movimento delle criptovalute lungo tutto il registro.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Cosa è vero riguardo agli indirizzi di una blockchain?

- [ ] Sono gli identificatori pubblici dei soggetti su una blockchain

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Su Ethereum iniziano sempre con _0x_

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [ ] Chi controlla la chiave privata può usare i fondi di quell'indirizzo

> ℹ️ Riprova! È vero, ma non è l'unica affermazione vera.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! Gli indirizzi sono identificatori pubblici, su Ethereum iniziano con 0x e i loro fondi si sbloccano con la chiave privata.
