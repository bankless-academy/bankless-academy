---
TITLE: Gestire le autorizzazioni dei token
DESCRIPTION: Proteggi il tuo wallet da interazioni indesiderate con gli smart contract.
LANGUAGE: Italiano
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
## Punti chiave

> * Le autorizzazioni dei token sono permessi concessi agli `smart contract` per spendere token da un wallet senza ulteriori approvazioni.
>
> * Possono essere sfruttate da malintenzionati se l'utente non sa che quei permessi sono attivi.
>
> * Strumenti come Revoke.cash permettono di controllare e revocare facilmente le autorizzazioni dei token.

## Introduzione

La DeFi dà agli utenti il controllo sui propri asset, comprese le `chiavi private`, offrendo una sovranità e un'autorità sui fondi senza precedenti. Ma da un grande potere derivano grandi responsabilità: sei tu a doverti occupare della sicurezza e della gestione dei tuoi asset.

Ci sono quattro categorie di truffa comuni di cui gli utenti DeFi devono essere consapevoli:

* **Frase seed compromessa:** gli attaccanti cercano di ingannarti per farti rivelare la tua frase seed, che darebbe loro accesso non autorizzato ai fondi. Con la tua frase seed un attaccante può svuotare tutti i tuoi fondi e continuare a farlo ogni volta che ne depositi altri nel wallet. Purtroppo non c'è modo di rimediare: l'unica soluzione è creare un wallet completamente nuovo con una nuova `frase seed`.

* **Trasferimenti diretti di ETH:** i truffatori possono nascondere i trasferimenti di ETH camuffandoli da chiamata di funzione, per esempio “Security Update”. Il metodo della firma grezza usato dalle vecchie versioni di questa truffa è stato rimosso da MetaMask; i kit di phishing moderni abusano invece di richieste di firma dall'aspetto normale, contando sul fatto che tu firmi senza leggere quello che il wallet mostra. Se ci caschi non potrai recuperare i fondi, ma potrai comunque usare il wallet in sicurezza per altre transazioni.

* **Inserzioni sui marketplace di NFT:** attenzione alle inserzioni false e ai contratti malevoli che sfruttano le autorizzazioni concesse a marketplace come OpenSea. I truffatori possono indurti a firmare un messaggio `offchain` che mette in vendita i tuoi `NFT` approvati, senza che avvenga nessuna transazione sui token.

* **Autorizzazioni dei token:** gli attaccanti possono manipolare i permessi per accedere a più fondi di quanti ne avevi approvati. Le “approvazioni” sono transazioni onchain che danno accesso ai tuoi token o NFT. I “permit” danno lo stesso accesso, ma richiedono solo una firma offchain senza gas. Uniswap e quasi tutte le applicazioni di scambio moderne usano questo sistema (chiamato Permit2). Le firme permit non compaiono come approvazioni onchain finché non vengono usate e possono avere una scadenza; la sezione “Signatures” di Revoke.cash ti permette di controllarle e annullarle.

  Con la diffusione degli smart contract, le `autorizzazioni del token` diventano necessarie per far eseguire transazioni ai contratti fidati senza esporre le chiavi private. Le autorizzazioni permettono alle dApp di spostare in automatico i token del tuo wallet per tuo conto. Questa comodità aumenta l'efficienza, ma espone anche a possibili attacchi tramite truffe e accessi non autorizzati.

In questo articolo parleremo delle autorizzazioni dei token e ti presenteremo uno strumento della comunità pensato per aiutarti a gestire i tuoi permessi.

## Autorizzazioni dei token: capirle, gestirle e usarle in sicurezza

Le autorizzazioni dei token sono permessi concessi in anticipo agli smart contract per spendere token da un wallet. Hanno un ruolo fondamentale: permettono di eseguire transazioni senza chiedere ogni volta un permesso esplicito per trasferire asset dal wallet. Se usate male, però, possono diventare un vettore d'attacco per chi non se lo aspetta. Per ridurre questo rischio è importante che gli utenti DeFi siano prudenti, si informino sulla sicurezza e capiscano come funzionano davvero le autorizzazioni dei token.

Concedere permessi a un contratto di terze parti prevede due passaggi:

1. Connessione del wallet: quando colleghi il wallet a una dApp, condividi solo l'`indirizzo` del wallet con la sua interfaccia, che così può mostrare i tuoi saldi e la tua attività. Collegarsi non concede di per sé nessun permesso onchain.

2. Approvazione del token: per operare con la dApp, poi approvi il suo smart contract a spostare token specifici per tuo conto. È questo il passaggio che concede un vero potere di spesa.

Gestendo le autorizzazioni in modo attivo, puoi assicurarti che nessun contratto preleverà dal tuo wallet più dell'importo indicato all'inizio. Per fortuna esistono strumenti della comunità pensati per dare agli utenti DeFi fiducia e tranquillità.

## Guida pratica: usare Revoke.cash

[Revoke.cash](https://revoke.cash/) permette di gestire facilmente le autorizzazioni dei token da un sito semplice, che aiuta a controllare e monitorare i permessi concessi alle varie dApp. Vediamo passo passo come usare questo potente strumento della comunità per proteggere i tuoi asset e riprendere il controllo del tuo wallet.

**1\. Collega il tuo wallet**:

Per iniziare a revocare le autorizzazioni dei token, vai su [Revoke.cash](http://revoke.cash/) e clicca su “Connect Wallet” in alto a destra. In alternativa puoi inserire a mano l'indirizzo pubblico del tuo wallet nella barra di ricerca. Al termine del caricamento vedrai l'elenco di tutte le tue `approvazioni del token` su quella rete.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Controlla le tue autorizzazioni**:

Una volta collegato il wallet, puoi esaminare le approvazioni esistenti. Puoi ordinarle, filtrarle o cercarle in base all'indirizzo autorizzato a spendere. Ordinare dalla più recente alla più vecchia è utile soprattutto se sospetti un'approvazione malevola recente. Usa le opzioni di ordinamento e filtro per avere un quadro delle autorizzazioni che hai concesso. Le autorizzazioni valgono per ogni catena, quindi usa il selettore di rete per ripetere il controllo su ciascuna rete che usi.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Revoca le autorizzazioni indesiderate:**

Quando individui le approvazioni da revocare, clicca semplicemente sul pulsante “Revoke” accanto a ciascuna. Se ti serve ancora un'approvazione in futuro ma vuoi ridurre il rischio, puoi anche modificarne l'importo cliccando sull'icona a forma di matita accanto alla cifra approvata.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Può convenirti revocare o modificare un'autorizzazione se:

1. Uno smart contract pubblicato di recente viene sfruttato e crea una vulnerabilità in un `exchange decentralizzato` che usi spesso.

   Nell'aprile 2023 il noto `DEX` SushiSwap ha subito un attacco simile, con circa 3,5 milioni di dollari sottratti agli utenti. Chi non aveva revocato l'autorizzazione dei token è rimasto a rischio.

2. Una proposta di governance malevola aggiorna diversi contratti con l'intento di svuotare i fondi degli utenti.

   Più di 2,5 milioni di dollari in asset sono stati compromessi quando Atlantis Loans, un protocollo `DeFi` su una catena BNB, ha eseguito una proposta di governance che colpiva diversi contratti. Chi aveva limitato l'importo approvato ha ridotto il rischio di vedersi svuotare completamente il wallet.

## Non dimenticare le deleghe

Dopo l'aggiornamento Pectra di Ethereum (maggio 2025), le autorizzazioni non sono l'unico permesso da rivedere. Una funzione più recente dei wallet (EIP-7702) permette al tuo wallet di delegare del codice aggiuntivo, abilitando comodità come raggruppare più transazioni, ma anche un nuovo trucco per svuotare i conti: una sola firma malevola può installare un codice “sweeper” che inoltra subito a un attaccante tutto quello che depositi, senza che la tua frase seed venga mai esposta. Nel 2025 i ricercatori di Wintermute hanno scoperto che oltre il 97 % delle prime deleghe dei wallet puntava a codice sweeper identico.

Revoke.cash mostra le tue deleghe attive nella sezione “Delegations”, ma poiché le deleghe sono controllate dal wallet e non dalle dApp, una delega indesiderata si revoca dall'interno del wallet stesso. In MetaMask, apri i dettagli dell'account e riportalo a un account standard. Se non hai mai scelto di passare a uno `smart account`, considera ostile qualsiasi delega tu trovi.

---

È ora di rafforzare le difese del nostro wallet! Speriamo che questa voce del Manuale dell'Explorer, “Gestire le autorizzazioni dei token”, ti sia piaciuta.

Non dimenticare di collezionare questa voce se vuoi averne una copia da consultare durante i tuoi viaggi, o per sostenere i contenuti futuri di Bankless Academy. Buon viaggio, Explorer!

---

## FAQ

### Quando conviene usare Revoke.cash?

Usa Revoke.cash periodicamente, soprattutto nei periodi in cui non stai usando attivamente una dApp, e in particolare per i marketplace di NFT. Limitare le approvazioni riduce il rischio di perdere fondi per attacchi, exploit o truffe di phishing. Ordinando le approvazioni dalla più recente puoi individuare quelle sospette e revocarle subito, limitando i danni.

### Scollegare il wallet mi protegge dagli exploit sulle approvazioni?

Scollegare il wallet da una dApp non ti protegge dagli exploit, né sulle approvazioni né di altro tipo. Le approvazioni concesse in precedenza restano attive anche dopo lo scollegamento, perché sono registrate onchain.

### Come posso evitare gli exploit sulle autorizzazioni e rischi simili?

Un approccio attivo alle autorizzazioni dei token prevede di:

* concedere autorizzazioni solo a dApp fidate.

* rivedere periodicamente le autorizzazioni dei token.

* rimuovere le autorizzazioni inutili o sospette.

* controllare che non ci siano deleghe del wallet sconosciute.

* restare informato sugli aggiornamenti di sicurezza delle dApp.

Valuta l'uso di strumenti di terze parti come l'[estensione per browser](https://revoke.cash) di Revoke.cash: funziona come misura preventiva contro le minacce. L'estensione ti avvisa se stai per firmare qualcosa di potenzialmente dannoso, proteggendoti da truffe di phishing e altre attività malevole.

### Posso recuperare i fondi con Revoke.cash?

Purtroppo Revoke.cash non può recuperare i fondi rubati. È uno strumento preventivo, che riduce le probabilità di cadere vittima di exploit sulle approvazioni. Revocare le approvazioni usate per rubarti i fondi può però impedire altri furti.

### Perché il mio wallet viene svuotato ogni volta che lo ricarico?

Il tuo wallet potrebbe contenere uno “sweeper bot”, uno script che sorveglia un wallet compromesso e trasferisce rapidamente ogni nuovo deposito prima che tu possa reagire. Una causa possibile è una frase seed compromessa: in quel caso revocare le approvazioni non serve, abbandona il wallet e creane uno nuovo. Ma una delega malevola del wallet è una causa altrettanto probabile: codice sweeper installato tramite una firma che ti hanno indotto a dare, senza che la frase seed sia trapelata. Controlla la sezione “Delegations” su Revoke.cash. Se trovi una delega che non riconosci, revocala dall'interno del tuo wallet (per esempio dai dettagli dell'account di MetaMask). Se non ci sono deleghe e il prosciugamento continua, dai per scontato che la frase seed sia compromessa e passa a un wallet nuovo.

---

**Autore**

**[Marcus](https://twitter.com/estmcmxci)** pubblica la ENS DAO Newsletter. Studia come le entrate in eccesso generate dalle commissioni di protocollo possano finanziare lo sviluppo del livello applicativo e altre infrastrutture open source.

**Editor**

**[Tetranome](https://twitter.com/Tetranome)** è il Project Champion di Bankless Academy e si occupa di esperienza utente, interfaccia, design e contenuti.

**[Trewkat](https://twitter.com/trewkat)** è autrice ed editor presso BanklessDAO. Le interessa imparare cose nuove su crypto e NFT, con un'attenzione particolare al modo migliore di trasmettere queste conoscenze.

**Mecenate**

Questo articolo senza sponsor fa parte della tua formazione gratuita con Bankless Academy. Colleziona l'articolo per sostenere i contenuti futuri!
