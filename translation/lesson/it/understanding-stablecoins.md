---
TITLE: Capire le stablecoin
DESCRIPTION: Usa dollari, euro e altre valute sulla blockchain.
LANGUAGE: Italiano
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-stablecoins
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

> * Le stablecoin sono l'equivalente sulla blockchain della moneta fiat, come il dollaro o l'euro.
>
> * Le stablecoin vengono di solito emesse come token (per esempio token `ERC-20` su Ethereum) e oggi circolano su molte blockchain. Permettono agli utenti DeFi di passare rapidamente dal valore in fiat al valore in crypto restando sulla blockchain.
>
> * Esistono diverse categorie di stablecoin, ognuna con i propri compromessi e il proprio profilo di rischio.
>
> * Le stablecoin possono generare più interessi annui che tenere denaro fiat in una banca tradizionale, anche se oggi la regolamentazione decide chi può offrire quel rendimento, e come.

## Perché tenere stablecoin?

Le stablecoin sono diventate un pilastro dell'ecosistema DeFi. Dopo aver raggiunto circa 140 miliardi di dollari di offerta al picco del 2022 (nell'immagine sotto), l'offerta totale ha superato i 300 miliardi nel 2026, e nel 2025 le stablecoin hanno regolato oltre 30.000 miliardi di dollari di valore in transazioni, più di quanto abbia elaborato Visa nello stesso anno.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Ecco perché sono così richieste:

* **Stabilità:** tenere stablecoin nel tuo wallet in autocustodia è come tenere moneta fiat, ma sulla blockchain. Con una stablecoin come USD Coin (USDC), emessa da Circle, puoi aspettarti che mantenga un valore di 1:1 con il dollaro statunitense, mentre i prezzi di asset come ether e bitcoin oscillano.

* **Flessibilità:** poiché questo valore ancorato esiste come token sulla blockchain, è facile passare dal valore in fiat a quello in crypto.

* **Accesso:** le stablecoin danno accesso a una serie di servizi finanziari decentralizzati, come prendere in prestito senza permessi o prestare per guadagnare interessi.

* **Sicurezza:** la crittografia rende estremamente difficile per un attaccante intercettare o falsificare le transazioni.

Il modo in cui una stablecoin mantiene l'equivalenza 1:1, cioè l'`ancoraggio`, con la sua controparte fiat è la sua proprietà più importante. Come la moneta fiat vale solo per i fondamentali che la sostengono, così il meccanismo di ancoraggio di una stablecoin determina il valore di quello che possiedi.

## Categorie di stablecoin

Ci sono tre strategie comuni con cui una stablecoin mantiene il suo ancoraggio al prezzo:

* 💵 **Garantite da fiat:** collateralizzate 1:1 da riserve reali in moneta fiat.

* 🔗 **Collateralizzate in crypto:** sovracollateralizzate da depositi crypto nei protocolli DeFi.

* 🔃 **Algoritmiche:** algoritmi che bilanciano l'offerta al posto di un collaterale pieno, un modello con una storia travagliata.

### 1\. Stablecoin garantite da fiat

Le stablecoin garantite da fiat mantengono il valore emettendo un'offerta fissa di token coperta da riserve in valuta reale. Il loro prezzo onchain si regge sulla domanda e sull'offerta: quasi nessuno vuole pagare più di un dollaro reale per un dollaro di valore onchain, quindi va semplicemente a comprare altrove. Per soddisfare una domanda crescente, l'`emittente di stablecoin` blocca altra moneta fiat e aumenta l'offerta di token della stessa quantità.

Tra le stablecoin garantite da fiat più note ci sono USDT di Tether e USD Coin (USDC) di Circle. Circle emette anche un equivalente ancorato all'euro, EURC.

Gli emittenti di stablecoin generano ricavi in vari modi: investono una parte delle riserve in titoli di Stato statunitensi a breve termine e in strumenti equivalenti alla liquidità, e adottano un modello misto che comprende commissioni sulle transazioni e servizi di prestito.

> **Innovazione e filantropia con le stablecoin garantite da fiat: Glo Dollar**
>
> La Glo Foundation ha un approccio innovativo ai ricavi delle riserve con [Glo Dollar](https://www.glodollar.org/) (USDGLO), la sua stablecoin ancorata al dollaro: gli interessi guadagnati sulle riserve finanziano programmi di reddito di base per persone in povertà estrema. Basta tenere USDGLO per fare filantropia integrata. Scopri come funziona Glo Dollar [qui](https://www.glodollar.org/articles/how-glo-works).

Cosa considerare quando usi stablecoin garantite da fiat:

* **Rendicontazione delle riserve:** chi le detiene ha bisogno della certezza che i token siano coperti uno a uno da riserve in fiat. Quasi tutti gli emittenti pubblicano `attestazioni` (un contabile indipendente conferma che le riserve esistevano a una certa data), più deboli di un audit completo dei conti dell'emittente; oggi nessun grande emittente ne pubblica uno. Circle rilascia attestazioni mensili su USDC (di Deloitte) e Tether, storicamente poco trasparente sulle sue coperture, oggi pubblica attestazioni trimestrali (di BDO).

* **Regolamentazione:** negli Stati Uniti il GENIUS Act (firmato a luglio 2025) obbliga gli emittenti di stablecoin di pagamento a tenere riserve 1:1 in contanti e titoli di Stato a breve termine, e vieta loro di pagare interessi a chi le detiene. Nell'Unione Europea il quadro MiCA ha portato i principali exchange a rimuovere per gli utenti europei le stablecoin non conformi come USDT.

* **Rischio di censura:** poiché sia USDC sia USDT sono oggetto di indagini governative, gli `smart contract` di questi token includono una funzione di congelamento che permette di bloccare i fondi onchain di un utente in caso di attività ritenute discutibili. Questa funzione vale anche per i token conservati in `wallet non custodiali`.

L'alto grado di centralizzazione nel settore delle stablecoin garantite da fiat lascia molto spazio di miglioramento per detenere valore ancorato al fiat in modo nativamente crypto.

### 2\. Stablecoin collateralizzate in crypto

Le stablecoin collateralizzate in crypto sono un'opzione più trasparente e decentralizzata, e queste qualità aiutano a eliminare certi rischi. Mantengono l'ancoraggio al fiat con riserve di asset crypto. Poiché la volatilità del mercato crypto influisce sul valore totale di queste riserve, queste stablecoin sono sovracollateralizzate, a volte fino al 200 %! Tutti gli asset a garanzia sono visibili onchain, quindi puoi controllare 24 ore su 24 la reale composizione delle tue stablecoin.

L'esempio più noto della categoria è USDS di Sky, erede del Dai (DAI) di MakerDAO, la prima stablecoin collateralizzata in crypto, dopo che MakerDAO è diventata Sky nel 2024. Per una versione più pura di decentralizzazione, LUSD di Liquity è garantita esclusivamente da depositi in ETH sovracollateralizzati.

![Composizione del collaterale di DAI, il predecessore di USDS (giugno 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Cosa considerare:

* **Valutazione del collaterale:** le riserve di una stablecoin sono di solito composte da crypto, altre stablecoin e persino altre classi di attività. Per esempio USDS è garantita da ETH, stablecoin, asset del mondo reale come titoli di Stato statunitensi e diverse altre componenti minori. Per ridurre i rischi di una gamma così varia, USDS è sovracollateralizzata (al momento in cui scriviamo). Anche se il prezzo di ETH crollasse del 20 %, USDS avrebbe ancora [collaterale sufficiente](https://defillama.com/stablecoins) a coprire i suoi token. Una volatilità ulteriore sull'insieme dei suoi asset potrebbe però iniziare a erodere l'ancoraggio.

* `Rischio di controparte`: dipendere da più classi di attività aumenta la probabilità che una di esse abbia problemi e incida sul valore di quello che possiedi. In compenso sei esposto solo in parte all'impatto di ciascun singolo rischio.

* **Rischio di governance:** questo tipo di stablecoin e la sua tesoreria sono gestiti da un gruppo decentralizzato di votanti. Ci sono quindi rischi di errore umano o di possibile cattura della governance.

### 3\. Stablecoin algoritmiche

Questi token cercano di mantenere l'ancoraggio bilanciando automaticamente la propria offerta invece di detenere un collaterale pieno: un algoritmo onchain toglie token dalla circolazione quando il prezzo di mercato scende sotto l'ancoraggio e ne conia di nuovi quando sale sopra. Sulla carta promette una stablecoin senza banche e senza collaterale. Nella pratica, la versione pura di questo modello è fallita in modo catastrofico.

L'esempio simbolo è UST di Terra, il cui algoritmo permetteva di scambiare sempre 1 UST con 1 dollaro di LUNA, il token volatile di Terra. Nel maggio 2022 le vendite di massa di UST hanno costretto l'algoritmo a coniare enormi quantità di LUNA, facendone crollare il prezzo e innescando altre vendite: una `spirale della morte` che ha bruciato circa 40 miliardi di dollari in pochi giorni. UST non ha mai recuperato il suo ancoraggio.

I progetti sopravvissuti hanno abbandonato il modello puro. Frax, un tempo in parte algoritmica, è passata alla collateralizzazione al 100 % nel 2023; la sua stablecoin attuale, frxUSD, è garantita da riserve che comprendono fondi tokenizzati di titoli di Stato statunitensi, mentre FRAX è oggi il token di governance del protocollo.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Dalle macerie è emersa una categoria moderna a sé: i modelli ibridi o a “dollaro sintetico”, come USDe di Ethena, che tiene collaterale crypto più posizioni di trading opposte che annullano i movimenti di prezzo (una copertura “delta neutrale”). Sono collateralizzati, ma in un modo nuovo, con rischi propri: la dipendenza dagli exchange che detengono quelle posizioni e da condizioni di mercato che mantengano la copertura conveniente.

Cosa considerare:

* **Rischio di spirale della morte:** un ancoraggio puramente algoritmico dipende dalla fiducia continua del mercato. Quando la fiducia viene meno, il meccanismo dell'offerta può amplificare il crollo invece di fermarlo, senza collaterale da riscattare.

* **Molto tecniche:** devi capire cosa garantisce davvero il token (e in quali condizioni quella garanzia potrebbe venire meno) per costruirti fiducia e consapevolezza del rapporto rischio/rendimento.

* **Rischio di tecnologia emergente:** i modelli ibridi e sintetici non sono ancora stati messi alla prova da un ciclo di mercato completo. Usa solo token con diversi audit degli smart contract da parte di società di primo livello, e ricorda che un audit non protegge da un modello economico sbagliato.

## Come scegliere una stablecoin

Qual è la stablecoin migliore da tenere? Come per tutto nella DeFi, la risposta dipende dalle tue **esigenze**, dai tuoi **valori** e dalla tua **tolleranza al rischio**.

Ecco un rapido ripasso di ogni categoria:

* 💵 **Garantite da fiat:** l'approccio tradizionale, il più vicino a tenere moneta fiat onchain.

  * Valori: convenzionalità, fiducia istituzionale.

  * Rischi: collaterale poco trasparente, possibilità per l'emittente di congelare i fondi.

* 🔗 **Collateralizzate in crypto:** un approccio equilibrato e nativamente crypto, che distribuisce il rischio del collaterale su più classi di attività.

  * Valori: diversificazione, trasparenza, progresso.

  * Rischi: volatilità del mercato crypto, dipendenza da altri asset.

* 🔃 **Algoritmiche:** la frontiera sperimentale: i modelli puri sono falliti in modo catastrofico e gli ibridi moderni non sono ancora collaudati.

  * Valori: innovazione, efficienza del capitale, progresso.

  * Rischi: spirali della morte, modelli economici sbagliati, bug negli smart contract.

Come sempre, il modo migliore per imparare qualcosa è provarla. Potresti persino decidere di tenere stablecoin di tipi diversi.

E ricorda, non tutte le stablecoin di una stessa categoria sono uguali! Fai le tue ricerche prima di interagire con un token nuovo.

---

Speriamo che questa voce del Manuale dell'Explorer, “Capire le stablecoin”, ti sia piaciuta.

Non dimenticare di collezionare questa voce se vuoi averne una copia da consultare durante i tuoi viaggi, o per sostenere i contenuti futuri di Bankless Academy. Buon viaggio, Explorer!

---

## Domande frequenti

### Quali sono le stablecoin più diffuse?

Guardare le principali stablecoin per `capitalizzazione di mercato` dà un'idea delle preferenze attuali del mercato, ma non è un consiglio su come posizionarti, né una garanzia sulla sicurezza di quella posizione.

Ecco un elenco in tempo reale delle principali stablecoin per capitalizzazione di mercato: <https://defillama.com/stablecoins>

Chi usa criptovalute cita spesso l'“effetto Lindy” quando sceglie dove investire. L'idea è che più a lungo qualcosa è esistito, più possiamo aspettarci che continui a esistere. Diciassette anni di storia delle criptovalute hanno mostrato che vale solo a volte.

### Dove posso comprare stablecoin?

Gli exchange centralizzati (CEX) offrono le stablecoin garantite da fiat più diffuse (e di solito una stablecoin a proprio marchio), ma spesso non hanno gli altri tipi.

Per i token collateralizzati in crypto e algoritmici, visita un exchange decentralizzato (DEX) o usa un servizio di acquisto diretto dal wallet come “MetaMask Buy”. Dai un'occhiata alla nostra lezione sugli [Exchange decentralizzati](https://app.banklessacademy.com/lessons/decentralized-exchanges) per saperne di più sui mercati peer-to-peer.

### Come posso guadagnare interessi sulle stablecoin?

Alcuni CEX offrono un rendimento per il semplice fatto di tenere stablecoin sulla loro piattaforma, finanziato con una quota dei profitti per incentivarne l'uso. Nota per i lettori statunitensi: con il GENIUS Act, gli emittenti regolamentati di stablecoin non possono pagare interessi a chi le detiene: il rendimento arriva solo da piattaforme terze e la disponibilità varia da paese a paese.

Puoi guadagnare interessi anche nella DeFi, con piattaforme di prestito senza necessità di fiducia. Queste piattaforme mettono in contatto chi presta e chi prende in prestito, gestendo il rischio con collaterale onchain e smart contract. Chi presta stablecoin può ottenere rendimenti annui molto più alti di quelli del settore bancario tradizionale, ma dove c'è ricompensa c'è rischio!

Il tema dei prestiti merita una voce dedicata di Bankless Academy. Se vuoi già approfondire, puoi documentarti su piattaforme come [Aave.com](https://aave.com/) e [Curve.fi](https://curve.fi/).

### Cosa succede se una stablecoin perde l'ancoraggio?

Il prezzo di mercato di ogni stablecoin oscilla leggermente con l'andamento degli scambi. Per le stablecoin principali si tratta di qualche centesimo di centesimo sopra o sotto il dollaro. Queste minime deviazioni vengono chiuse in fretta da chi sfrutta le opportunità di arbitraggio.

Ci sono però casi in cui una stablecoin perde l'ancoraggio oltre i limiti sicuri e temporanei. L'effetto non è per forza permanente (USDC, marzo 2023), ma può esserlo (Terra, maggio 2022).

Alcuni emittenti di stablecoin garantite da fiat, come USDC, offrono dal proprio sito il riscatto 1:1 in moneta fiat tradizionale. Se questo resti vero nei momenti di crisi è un altro discorso.

---

**Autore**

**[Tetranome](https://twitter.com/tetranome)** è il Project Champion di Bankless Academy e si occupa di esperienza utente, interfaccia, design e programma della piattaforma.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** è autrice ed editor presso BanklessDAO. Le interessa imparare cose nuove su crypto e NFT, con un'attenzione particolare al modo migliore di trasmettere queste conoscenze.

**Mecenate**

Questo articolo senza sponsor fa parte della tua formazione gratuita con Bankless Academy. Colleziona l'articolo per sostenere i contenuti futuri!
