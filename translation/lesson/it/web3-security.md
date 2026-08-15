---
TITLE: Sicurezza nel web3
DESCRIPTION: Proteggi te stesso e il tuo wallet dalle truffe più comuni nel web3.
LANGUAGE: Italiano
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

# Introduzione

La proprietà digitale è la grande novità del web3. Grazie a blockchain, criptovalute e NFT, il web3 restituisce agli utenti proprietà e potere. Per molti possedere online prodotti finanziari digitali è una cosa nuova, e questa mancanza di esperienza apre spazi a persone senza scrupoli che truffano e rubano gli asset altrui. Queste truffe funzionano così bene proprio perché quasi nessuno sa come sono fatte.

Ma non è solo il web3 a soffrirne: anche i servizi web2 come email e social sono pieni di truffe. Inoltre molti strumenti web3 restano legati a servizi web2 come conti bancari o exchange centralizzati, quindi proteggere anche quelli è importante. Complimenti, Explorer dell'Academy, per aver deciso di armarti delle conoscenze che ti proteggeranno mentre esplori il `web3`!

Questa lezione tratterà:

- La sicurezza nel web2 e nel web3.
- I modi più comuni in cui si perdono i fondi e come proteggersi.
- Una strategia generale per la sicurezza dei wallet.
- Come rimediare se si è vittima di una truffa.

# Il denaro nel web2

Nel web2 sono le istituzioni a custodire il denaro delle persone. Per accedere ai propri soldi e usarli, l'utente deve dimostrare la propria identità a un'istituzione. Funziona come un conto in banca o un `exchange centralizzato` (CEX): servono un ID di accesso e una password.

Per arrivare al tuo denaro, chi truffa ha bisogno di questa combinazione ID + password. E poiché sono le istituzioni a doverlo proteggere, le transazioni fraudolente possono essere annullate, come quando si contesta un pagamento con carta di credito.

![](https://app.banklessacademy.com/images/web3-security/money-in-web2-7e1a5fd1.svg)

# Il denaro nel web3

Nel web3 il denaro funziona in modo diverso. Somiglia di più a un portafoglio di contanti chiuso a chiave: una volta speso, il denaro è andato. La tua `frase seed` (quel gruppo speciale di parole segrete) sblocca le tue `chiavi private`, quindi chi la ottiene controlla il tuo wallet. Non darla _**mai**_ a nessuno e non conservarla in digitale: foto e app per le note possono essere compromesse.

Ma la frase seed non è l'unico bersaglio: una sola firma dannosa (una transazione o un messaggio che approvi) può svuotare i tuoi token senza che nessuno veda mai la tua frase seed. Proteggi la tua **frase seed** _e_ la tua **firma**.

![](https://app.banklessacademy.com/images/web3-security/money-in-web3-f575b0f6.svg)

# Knowledge Check 1

Vero o falso? Chi truffa può svuotare i token del tuo wallet convincendoti a firmare una transazione o un'approvazione dannosa, senza conoscere la tua frase seed.

- [x] Vero

> ℹ️ Corretto! Una firma o un'approvazione dannosa basta da sola a consegnare i tuoi fondi. Proteggi ciò che firmi come proteggi la frase seed.

- [ ] Falso

> ℹ️ Riprova! La frase seed non è l'unico bersaglio: anche una sola approvazione dannosa può svuotare i tuoi token.

# Conservare la frase seed in sicurezza

Ci sono molti modi per conservare in sicurezza una frase seed, ma un buon inizio è tenerla su un supporto fisico (carta plastificata o simile) e riporla in una cassaforte a prova di acqua e fuoco, in casa tua. **Non** conservare una `frase seed` come foto o in altri modi digitali, nemmeno in un gestore di password.

Posti sbagliati dove tenere la frase seed:

- In uno schedario
- In un'app di note digitali
- Sul posto di lavoro
- In una foto digitale

Ovunque la conservi, assicurati che solo tu possa accedervi e che sia protetta da perdita e distruzione. Non si sa mai cosa può succedere in futuro!

# Proteggi le tue password

Usare e gestire bene le password è una parte importante della vita quotidiana online.

Le password dovrebbero essere diverse per ogni singolo servizio web2 che usi: email, exchange centralizzati e qualunque altro account. È già un problema se qualcuno ottiene ID e password di un account, ma è molto peggio se quella combinazione apre tutti i tuoi account!

I `gestori di password` come 1Password, Bitwarden e KeePass conservano e cifrano molte password in modo sicuro; sanno anche creare nuove password ad alta sicurezza e salvarle da soli. All'utente basta ricordare una sola password principale.

**Non** conservare una `frase seed` web3 in un gestore di password: basta una sola violazione per perdere tutti i tuoi asset web3, e non c'è nessuno che possa recuperarli per te.

# Knowledge Check 2

Perché i gestori di password sono utili?

- [ ] Basta ricordare la password principale per usarli.

> ℹ️ Riprova! È vero, ma non è l'unico vantaggio.

- [ ] Creano e conservano password forti e uniche.

> ℹ️ Riprova! È vero, ma non è l'unico vantaggio.

- [ ] Cifrano le password per tenerle al sicuro.

> ℹ️ Riprova! È vero, ma non è l'unico vantaggio.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! I gestori creano, cifrano e conservano password uniche per ogni account. Tu ricordi solo la password principale.

# Autenticazione a due fattori

L'`autenticazione a due fattori`, o 2FA, è un secondo livello di sicurezza web2.

A molti sono stati rubati account e credenziali nonostante password forti. I siti web2 (e anche i `gestori di password`) offrono spesso la 2FA: una prova da un altro dispositivo o app, oltre alla password.

Non tutte le 2FA sono uguali:

🥉 I **codici via SMS** sono l'opzione più debole: con l'`ingegneria sociale` i truffatori spostano il tuo numero sul loro telefono (SIM swap) e ricevono i codici. Meglio comunque che nessuna 2FA.

🥈 Le **app di autenticazione** (come Google Authenticator, 2FAS o Aegis) generano i codici sul tuo dispositivo: una buona scelta per quasi tutti gli account.

🥇 Le **passkey e le chiavi di sicurezza fisiche** (come YubiKey) sono lo standard migliore contro il phishing: legate al sito vero, su un falso non funzionano.

![](https://app.banklessacademy.com/images/web3-security/two-factor-authentication-7fa9bfdf.svg)

# Knowledge Check 3

Perché l'autenticazione a due fattori è così consigliata?

- [ ] Con la 2FA attiva è impossibile violare un account.

> ℹ️ Riprova! La 2FA migliora molto la sicurezza, ma nessun metodo rende un account inviolabile. Il SIM swap, per esempio, batte i codici SMS.

- [x] Aggiunge un livello di sicurezza agli account web2.

> ℹ️ Corretto! La 2FA chiede una prova da un altro dispositivo o app oltre alla password, così una password rubata non basta.

- [ ] Rende le password più forti.

> ℹ️ Riprova! La 2FA non cambia la tua password: aggiunge una seconda prova sopra di essa.

- [ ] Tutte le risposte precedenti

> ℹ️ Riprova! Solo una di queste affermazioni è vera.

# Truffe di ingegneria sociale

Sia nel web2 sia nel web3, chi truffa usa tecniche di `phishing` per farsi consegnare password e frasi seed, o per far firmare una transazione dannosa. Spesso finge di essere l'assistenza di un prodotto, “Ciao, qui è il supporto MetaMask”, oppure l'amministratore di una comunità, “Nuovo mint di NFT, esclusivo per la nostra comunità”.

Usa l'`ingegneria sociale` per mettere pressione. Per esempio:

- “Il tempo sta per scadere!”, per farti sentire di corsa.
- “Complimenti, hai vinto il nostro giveaway!”, per farti sentire scelto.
- “Accesso anticipato al nostro pre-mint!”, per generare `FOMO` in chi viene truffato.

![](https://app.banklessacademy.com/images/web3-security/social-engineering-scams-73c69132.svg)

# Paura di restare fuori

`FOMO` sta per “Fear Of Missing Out”, cioè la paura di restare fuori: quella sensazione di stress per cui perderai un grande vantaggio o un'occasione se non fai qualcosa **adesso**.

La difesa migliore contro la FOMO è semplicemente allontanarsi dal computer e prendersi una pausa. Sotto stress non si ragiona bene, ed è proprio per questo che la FOMO è uno strumento di truffa così efficace. Prendendo le distanze dalla situazione, diventa molto più facile riconoscere le truffe per quello che sono.

# Knowledge Check 4

Come usano l'ingegneria sociale i truffatori?

- [ ] Fingendosi un'autorità di una comunità.

> ℹ️ Riprova! È una tecnica, ma non è l'unica.

- [ ] Mettendo pressione con tempi strettissimi.

> ℹ️ Riprova! È una tecnica, ma non è l'unica.

- [ ] Offrendo giveaway o NFT gratis per creare FOMO.

> ℹ️ Riprova! È una tecnica, ma non è l'unica.

- [x] Tutte le risposte precedenti

> ℹ️ Corretto! Si fingono figure autorevoli, creano urgenza e generano FOMO, tutto per impedirti di ragionare con lucidità.

# Sicurezza sui social

Chi truffa ama i social e i server Discord dei progetti crypto, e di solito sposta la conversazione nei messaggi privati per non farsi notare dai membri esperti. Parla nei canali pubblici e non dare _**mai**_ la tua `frase seed` a nessuno, né firmare nulla da un link ricevuto in privato.

`Campanelli d'allarme` sui social:

🚩 **Errori di lingua e di grammatica.**

🚩 **FOMO:** “Non perdere l'occasione!”

🚩 **Identità false:** un admin, l'assistenza, Vitalik Buterin, Elon Musk.

🚩 **Rendimenti garantiti:** nel mondo crypto non c'è nulla di garantito.

🚩 **Link e offerte non richiesti,** _soprattutto nei messaggi privati_.

![](https://app.banklessacademy.com/images/web3-security/social-media-safety-a76a39f4.svg)

# Buone pratiche sui social

Come restare al sicuro:

✅ Se per venderti un prodotto devono scriverti in privato, probabilmente non ti serve.

✅ Guarda quanti follower e membri ha il progetto, anche se non garantiscono legittimità, qualità o solidità.

✅ Verifica tutto con una fonte esterna, per esempio un altro account ufficiale del progetto.

✅ Se hai dubbi, chiedi a membri affidabili di una grande comunità di cui ti fidi, e chiedi in pubblico.

![](https://app.banklessacademy.com/images/web3-security/social-media-best-practices-48ad350f.svg)

# Token truffa e avvelenamento degli indirizzi

Ti compaiono token o NFT sconosciuti nel wallet? I `token truffa` vengono inviati a migliaia di wallet insieme, sperando che qualcuno provi a spostarli o venderli: così si attiva il codice dannoso nello smart contract del token, o la vittima finisce su un sito di `phishing` che chiede una `frase seed` o una firma dannosa. Meglio non interagirci affatto: lasciali stare o nascondili nel wallet.

Un trucco simile è l'**avvelenamento degli indirizzi**: arrivano micro trasferimenti da un indirizzo costruito per somigliare a uno che usi, con gli stessi caratteri iniziali e finali. Se poi copi un indirizzo dalla cronologia, rischi di prendere quello del truffatore.

Come proteggerti:

- Non copiare gli indirizzi dalla cronologia delle transazioni.
- Controlla più dei primi e degli ultimi caratteri.
- Prima di un invio grosso, fai una prova con un piccolo importo.

![](https://app.banklessacademy.com/images/web3-security/scam-tokens-761d5f63.svg)

# Approvazioni dannose e firma alla cieca

Oggi la maggior parte dei fondi non si perde per frasi seed rubate, ma per firme concesse. I kit di phishing “svuota wallet” presentano una transazione o un messaggio dall'aria normale, che normale non è:

- **Approvazioni dannose:** una sola transazione di approvazione può dare al contratto di un truffatore un'`autorizzazione del token` illimitata sui tuoi token o NFT.
- **Phishing delle firme:** le approvazioni firmate senza gas (come Permit2) possono autorizzare trasferimenti di token, senza nessuna transazione.
- **Svuotamento per delega:** una funzione recente dei wallet (EIP-7702) permette di installare codice sul tuo account con una sola firma; i truffatori ne abusano per svuotare i wallet in automatico.

Firmare quello che non si capisce si chiama **firma alla cieca**, e ci cascano anche i professionisti: nel febbraio 2025 l'exchange Bybit ha perso circa 1,5 miliardi di dollari approvando una transazione la cui schermata era stata manomessa.

Le tue difese: rallenta, leggi ogni richiesta di firma, tratta come ostile qualsiasi messaggio del tipo “verifica il tuo wallet” e usa un wallet che simula le transazioni prima della firma.

# Knowledge Check 5

Ricevi un messaggio privato: “Il tuo wallet va migrato: collegati su metamask-upgrade.app e firma per verificare i tuoi asset.” Il sito ti chiede di firmare un'approvazione senza gas. Che cosa non va?

- [ ] Nulla: le firme sono gratis e non spostano fondi.

> ℹ️ Riprova! Le firme di approvazione senza gas possono autorizzare da sole trasferimenti di token.

- [ ] È pericoloso solo se digiti anche la frase seed.

> ℹ️ Riprova! Non serve nessuna frase seed. La firma stessa può dare potere di spesa sui tuoi token.

- [ ] È sicuro: l'assistenza contatta gli utenti in privato.

> ℹ️ Riprova! L'assistenza vera non ti scrive mai per prima in privato. È un classico campanello d'allarme.

- [x] È phishing di firma: quella firma può svuotare i token.

> ℹ️ Corretto! Un messaggio privato non richiesto, l'urgenza, un URL simile a quello vero e una richiesta di firma: è uno svuota wallet.

# Hardware wallet

Come ricorderai dalla lezione [Le basi del wallet](https://app.banklessacademy.com/lessons/wallet-basics), un `hardware wallet` tiene le tue `chiavi private` su un dispositivo dedicato, lontano dal computer connesso a internet. Così i fondi sono molto più sicuri: nessun malware può leggere le chiavi e un ladro dovrebbe rubare il dispositivo e forzarlo. Fra i più diffusi ci sono Ledger, Trezor e Keystone. Comprali sempre direttamente dal produttore.

Puoi usare un hardware wallet anche attraverso wallet come MetaMask, unendo comodità e sicurezza hardware. Ledger ha [scritto una guida](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask) su come configurarlo.

Un limite: un hardware wallet firma tutto ciò che approvi, quindi firmare alla cieca una transazione dannosa fa perdere comunque i fondi. Verifica sempre i dettagli sullo schermo del dispositivo prima di confermare.

![](https://app.banklessacademy.com/images/web3-security/hardware-wallets-22a096d4.svg)

# Knowledge Check 6

Vero o falso? Un hardware wallet protegge i tuoi fondi solo se verifichi ogni transazione prima di approvarla.

- [x] Vero

> ℹ️ Corretto! Un hardware wallet protegge le chiavi, ma solo verificare ciò che firmi protegge i fondi.

- [ ] Falso

> ℹ️ Riprova! Un hardware wallet firma tutto ciò che approvi. Firmare alla cieca può svuotarlo comunque.

# Strategie di wallet

Dopo aver aggiunto un hardware wallet, uno dei modi migliori per proteggere i fondi è distribuirli su più `wallet`. Ecco una strategia a compartimenti con tre wallet separati:

1. **Wallet social:** un `hot wallet` con pochi o zero fondi, per accessi, mint e prove di nuove dApp. Dai per scontato che tutto ciò che contiene si possa perdere.
2. **Wallet operativo:** un `hot wallet` per gli scambi e per i fondi che potresti dover spostare in fretta.
3. **Wallet HODL:** un `hardware wallet` per il lungo periodo, il `HODL`. Non usarlo _**mai**_ con smart contract o siti che non conosci.

👍 **PRO:** la separazione fa sì che una truffa minacci solo i fondi di _quel wallet_, non _tutto_.

👎 **CONTRO:** è più complicato da seguire, ma molte app permettono di dare un nome ai wallet.

![](https://app.banklessacademy.com/images/web3-security/wallet-strategies-2b743061.svg)

# Knowledge Check 7

Per più sicurezza consigliamo di tenere i tuoi fondi _______________ .

- [ ] conservati in più airdrop

> ℹ️ Riprova! Gli airdrop sono distribuzioni di token, non un posto dove conservare i fondi.

- [ ] bloccati in più NFT

> ℹ️ Riprova! Gli NFT sono asset, non una strategia di sicurezza per i tuoi fondi.

- [x] separati in più wallet

> ℹ️ Corretto! Dividere i fondi in wallet distinti fa sì che una truffa minacci solo i fondi di quel wallet.

- [ ] liquidi su più indirizzi

> ℹ️ Riprova! Non è questione di liquidità. È separare i fondi in wallet distinti che limita i danni di una truffa.

# Rimediare a una truffa web2

Speriamo che tu non sia già caduto vittima di un truffatore. Se è successo, ci sono alcuni passi da fare per mettere di nuovo al sicuro i tuoi account.

Per una truffa che riguarda un servizio web2, come Gmail o Discord, dovresti:

- Cambiare la password dell'account colpito.
- Dove è disponibile, usare il pulsante “disconnetti ovunque” per buttare fuori i truffatori.
- Attivare la `2FA`: meglio una passkey o una chiave di sicurezza fisica, altrimenti un'app di autenticazione.
- Segnalare la truffa al servizio coinvolto.
- Assicurarti che anche il tuo account email sia sicuro.
- Parlare della truffa con amici o membri fidati della comunità.

# Rimediare a una truffa web3

Su Ethereum i contratti devono ricevere un permesso esplicito per spendere i token. L'`autorizzazione` del token è quanto hai permesso a un contratto specifico di spendere. Tenere le autorizzazioni basse riduce il rischio per i tuoi asset.

Nel web3 non c'è nessuno a capo dei protocolli a cui segnalare i truffatori, ma qualcosa puoi comunque fare:

- Sposta subito i fondi rimasti nel wallet compromesso su un altro indirizzo, **assicurandoti che il nuovo indirizzo abbia una frase seed diversa.**
- Controlla e revoca le tue `autorizzazioni` sui token con [revoke.cash](https://revoke.cash) (funziona su molte reti) o [etherscan.io/tokenapprovalchecker](https://etherscan.io/tokenapprovalchecker). Revocare costa gas; revoke.cash ha una [guida passo passo](https://revoke.cash/learn/approvals/how-to-revoke-token-approvals).
- Controlla anche la scheda “Delegations” di revoke.cash: se trovi una delega del wallet che non riconosci, rimuovila dalla tua app wallet.
- In futuro usa un `hardware wallet` e verifica tutto ciò che firmi.
- Avvisa gli altri segnalando la truffa alla comunità colpita.
- Parla della truffa con amici o membri fidati della comunità, per capire come proteggere te stesso e gli altri in futuro.
