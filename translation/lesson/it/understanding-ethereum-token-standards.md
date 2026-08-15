---
TITLE: Gli standard dei token di Ethereum
DESCRIPTION: Scopri come i modelli di asset di Ethereum supportano classi di attività tradizionali ed emergenti.
LANGUAGE: Italiano
WRITERS: Musharraf, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-ethereum-token-standards
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
## **Punti chiave**

> * Gli standard dei `token` di Ethereum sono regole e funzioni predefinite usate per pubblicare token su Ethereum.
>
> * Gli standard dei token più diffusi su Ethereum sono `ERC-20`, `ERC-721` ed `ERC-1155`.
>
> * Ogni standard permette livelli diversi di `fungibilità`, così si possono creare sia asset onchain comuni sia asset unici.
>
> * Gli standard dei token rendono i token interoperabili in tutto l'ecosistema Ethereum: per le dApp è semplicissimo integrare nuovi token, e per te averne accesso!

## Che cosa sono gli standard dei token di Ethereum?

Su Ethereum e sulle sue reti `Layer 2` esistono milioni di token diversi, ognuno con proprietà e usi propri. Come fa la rete a garantire un supporto fluido per tutti questi token nel suo ecosistema di dApp, senza che gli sviluppatori debbano passare ore a integrarli uno per uno? E come fanno gli utenti a capire le proprietà principali di un token senza scorrere ore di documentazione?

Ecco gli standard dei token!

Questi modelli e insiemi di regole favoriscono l'`interoperabilità` dei token in tutto l'ecosistema Ethereum. Significa che le dApp devono supportare solo pochi standard comuni invece di migliaia di token singoli. Per Explorer come te significa che puoi guardare lo standard di origine di un token e capire cosa sa fare su Ethereum.

Gli standard dei token stabiliscono:

* Come deve essere scritto il codice dello smart contract di un token.

* L'insieme comune di funzioni che ogni token di quel tipo deve supportare, così ogni dApp sa come usarlo.

Oggi Ethereum ha tre standard dei token di uso comune:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: uno standard per token facilmente scambiabili (cioè fungibili).

   Per esempio i token USDC e UNI.

2. **ERC-721**: uno standard per token unici (cioè non fungibili), noti come `NFT`.

   Per esempio gli NFT di Bored Ape Yacht Club.

3. **ERC-1155**: uno standard usato per token fungibili e non fungibili nello stesso contratto.

   Per esempio gli oggetti dentro un videogioco web3.

Ora ti starai chiedendo: “Ma cos'è esattamente la fungibilità?”

Vediamo questo concetto dell'economia tradizionale per capire perché è importante nell'ecosistema Ethereum.

## Fungibilità e non fungibilità.

La **“fungibilità”** è una proprietà di un bene o di un asset economico e indica due caratteristiche chiave:

* Quando l'asset viene scambiato, le sue unità sono intercambiabili senza nessuna variazione di valore.

  (1 dollaro può essere scambiato con un altro dollaro, o con quattro monete da 25 centesimi, o con venti monete da 5 centesimi.)

* Quando l'asset viene diviso, le frazioni più piccole mantengono le sue caratteristiche fondamentali.

  (1 dollaro, diviso in quattro monete da 25 centesimi, funziona ancora come riserva di valore o serve per fare acquisti.)

Esempi di asset fungibili sono il petrolio, la moneta fiat, i titoli di Stato e le azioni di una società. Questi asset non unici si scambiano e si dividono facilmente.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Al contrario, la **“non fungibilità”** indica che:

* L'asset ha proprietà uniche che lo rendono distinguibile dai suoi simili e gli danno un valore unico.

  (Un quadro di Van Gogh ha un prezzo diverso da quello di un artista contemporaneo emergente, per aspetto, rarità, livello di abilità e reputazione dietro le opere.)

* L'atto di dividerlo ne altera le caratteristiche fondamentali.

  (Un quadro tagliato in quattro pezzi ha parti che non si somigliano tra loro, e ognuna può valere in modo diverso. Anche l'intenzione originaria del quadro sparisce.)

Alcuni esempi di asset non fungibili sono gli immobili, le opere d'arte, le identità digitali e le certificazioni. Questi asset sono più difficili da scambiare e da dividere, proprio per le loro proprietà uniche.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Se hai dubbi sulla fungibilità, chiediti: “Quanto è facile scambiarlo e dividerlo?” Se è difficile, probabilmente non è fungibile!

Ethereum punta a diventare “il livello di regolamento dell'economia mondiale”. Poter gestire asset fungibili e non fungibili apre la strada a rappresentare onchain le classi di attività tradizionali e a crearne di nuove!

## Standard e funzioni dei token

Quando pubblica un nuovo contratto per un token su Ethereum, chi crea l'asset sceglie uno degli standard esistenti. Questo gli assegna proprietà iniziali (chiamate funzioni) come l'offerta totale dell'asset, la possibilità o meno di trasferirlo a un altro wallet e le informazioni che può contenere.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Per esempio, ERC-20 usa funzioni come queste:

**1\. totalSupply:** definisce l'offerta totale di un token ERC-20.

L'offerta totale di un token racconta qualità importanti come il suo valore e la sua distribuzione.

**2\. balanceOf:** controlla il saldo di token di un indirizzo indicato.

Serve a servizi e piattaforme per verificare il saldo del tuo wallet prima di eseguire la transazione che hai chiesto.

**3\. transfer:** trasferisce token dal tuo indirizzo ad altri indirizzi.

Ogni volta che invii un token dal tuo wallet a un altro wallet, stai usando la funzione transfer.

**4\. approve:** permette a un indirizzo (di solito uno smart contract) di operare in automatico per conto del tuo wallet fino a un importo indicato.

Con questa funzione puoi autorizzare una piattaforma o un servizio a usare in automatico una parte definita dei tuoi fondi ed eseguire transazioni.

**5\. allowance:** serve a conoscere l'importo che un soggetto autorizzato può spendere da un wallet.

Una piattaforma può usare questa funzione per controllare quanto le hai concesso e se può eseguire la transazione senza che tu la firmi a mano.

Standardizzare la creazione dei token permette la `componibilità` nell'ecosistema Ethereum. Per esempio, chi sviluppa un [exchange decentralizzato (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) può aggiungere il supporto per qualsiasi token che segue lo standard ERC-20, perché si comporteranno tutti allo stesso modo. Non dovrà costruire un supporto dedicato per ogni token in elenco.

Allo stesso modo, chi costruisce un marketplace di NFT deve solo rendere la piattaforma compatibile con gli standard ERC-721 ed ERC-1155 per supportare tutti gli NFT creati su Ethereum.

Ora che conosciamo standard, fungibilità e funzioni, vediamo gli usi dei tre standard principali di Ethereum.

### ERC-20: token fungibili

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) è uno standard che definisce le regole per creare contratti di token fungibili.

I token ERC-20 possono essere qualsiasi cosa, da una `memecoin` a un metodo di pagamento in un marketplace decentralizzato. Nella maggior parte dei casi rientrano in una di queste quattro categorie:

**1\. Token di utilità:** serve a un uso specifico dentro l'ecosistema di un'app o di una piattaforma.

Esempio: Chainlink (LINK) serve a pagare gli operatori che portano dati del mondo reale, come i prezzi di mercato, agli smart contract.

**2\. Token di governance:** dà a chi lo possiede diritto di voto sulle decisioni di una piattaforma.

Esempio: chi possiede Ethereum Name Service (ENS) può votare le proposte per aggiornare il protocollo del registro dei domini.

**3\. Stablecoin:** progettata per mantenere un valore stabile, di solito pari al dollaro statunitense.

Esempi: Tether (USDT), USD Coin (USDC) e nuovi arrivati come USDS di Sky.

**4\. Security token:** rappresenta la proprietà di un asset sottostante, come le azioni di una società.

Esempio: i fondi di investimento tokenizzati, come i fondi monetari che i grandi gestori patrimoniali hanno iniziato a emettere onchain nel 2024.

Un singolo token può rientrare in più categorie. Per esempio, un token di governance può avere anche una certa utilità dentro una piattaforma.

Puoi facilmente [comprare token ERC-20 su un DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) come Uniswap o su un `exchange centralizzato` come Binance o Coinbase.

### ERC-721: token non fungibili

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) è uno standard che definisce le regole con cui gli utenti di Ethereum creano o usano token non fungibili. Garantisce che ogni NFT creato sia unico in modo dimostrabile.

Quali sono alcuni usi dei token ERC-721?

**1\. Proprietà di asset:** i token ERC-721 sono molto usati per rappresentare la proprietà di asset digitali e reali unici. Per esempio, questa voce del Manuale dell'Explorer ha 100 versioni numerate singolarmente (non solo da leggere, ma da possedere), come un libro sulla tua libreria digitale. (Puoi `coniare` questa voce e possederla premendo il pulsante dorato “Collect Entry” in alto.) I “Datadisk da collezione” di Bankless Academy funzionano allo stesso modo.

**2\. Abbonamenti e iscrizioni:** creator, artisti, club e aziende usano già gli NFT per abbonamenti, biglietti di eventi e tessere associative. L'unicità dimostrabile degli NFT fa sì che ogni pezzo dell'offerta fissa sia legato a un singolo utente.

**3\. Premi fedeltà:** Starbucks ha gestito fino a marzo 2024 un programma fedeltà chiamato Odyssey, dove i membri completavano quest per ottenere NFT da riscattare per premi digitali e reali. Molti altri marchi offrono NFT come premio fedeltà, che gli utenti possono riscattare o vendere quando vogliono.

**4\. Identità e certificazioni:** i token ERC-721 possono creare identità e certificazioni a prova di manomissione. Quando la tua identità digitale o i tuoi certificati sono token ERC-721, per te è facile dimostrarne la proprietà e per chiunque altro è quasi impossibile falsificare i tuoi documenti e usarli in modo improprio.

Per ottenere un token ERC-721, crea un account su un marketplace di NFT come [OpenSea](https://opensea.io/) e compra un NFT in vendita. Fai anche la nostra lezione [Sicurezza nel web3](https://app.banklessacademy.com/lessons/web3-security) per proteggerti dalle truffe sui marketplace.

### ERC-1155: token fungibili e non fungibili

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Spesso chiamato `standard multi-token`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) unisce i concetti di ERC-20 ed ERC-721 e permette di scrivere contratti che supportano sia token fungibili sia token non fungibili. Per l'utente non cambia molto, ma aiuta a ottimizzare le funzioni di una piattaforma. Un esempio è pubblicare sotto un unico contratto sia una valuta di gioco fungibile sia oggetti di gioco non fungibili.

Questo standard permette anche di creare token semi-fungibili: token che sono fungibili o non fungibili a seconda delle circostanze. Per esempio, in una collezione di carte da gioco tutte le carte con la stessa rarità potrebbero essere fungibili (intercambiabili), mentre carte con rarità diverse sarebbero non fungibili (non intercambiabili).

ERC-1155 permette inoltre transazioni in blocco per inviare più tipi di token insieme, riducendo potenzialmente il costo del `gas` per gli utenti.

---

Ti facciamo i complimenti per essere arrivato in fondo a questa lunga voce del Manuale dell'Explorer: “Gli standard dei token di Ethereum”.

Non dimenticare di collezionare questa voce se vuoi averne una copia da consultare durante i tuoi viaggi, o per sostenere i contenuti futuri di Bankless Academy. Buon viaggio, Explorer!

---

## FAQ sugli standard dei token di Ethereum

### Come nascono gli standard dei token di Ethereum?

Gli standard vengono proposti e pubblicati su Ethereum tramite un processo chiamato Ethereum Improvement Proposals (EIP). Non c'è nessun voto: la proposta viene affinata in una discussione pubblica e, quando la comunità concorda in generale che funziona, gli editor la finalizzano come standard, chiamato Ethereum Request for Comment (ERC). Il numero di serie dell'EIP viene poi aggiunto per completare il nome dello standard, per esempio ERC-20 o ERC-721.

### Ether (ETH) segue uno standard dei token?

No. ETH è infatti definito una “moneta” e non un “token”, perché ha una [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics) propria.

### Chiunque può lanciare un token?

Sì. Ethereum è un ecosistema senza permessi e chiunque può lanciare un token fungibile o non fungibile. Servono però competenze tecniche o l'accesso a strumenti no-code.

### Se due token hanno lo stesso nome, come faccio a sapere qual è quello ufficiale?

Per riconoscere il token originale devi controllare l'indirizzo del contratto usato per pubblicare i token che vuoi usare e confrontarlo con la documentazione ufficiale del progetto. Così eviterai di interagire con un contratto malevolo che potrebbe svuotarti il wallet.

### Ci sono altri standard dei token su Ethereum oltre a ERC-20, 721 e 1155?

Sì. Alcuni sono molto usati, come [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), uno standard comune per i token dei `vault` che rappresentano depositi a rendimento nella DeFi. Standard più recenti riguardano anche gli `smart account`, che permettono a un wallet di eseguire codice proprio. Altri, come [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) ed [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), non hanno preso piede o servono usi molto di nicchia.

---

**Autori**

**[Musharraf](https://x.com/musharrafff)** è cofondatore di Unhashed. Aiuta i progetti web3 con la strategia e la realizzazione dei contenuti.

**[Tetranome](https://twitter.com/Tetranome)** è il Project Champion di Bankless Academy e si occupa di esperienza utente, interfaccia, design e contenuti.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** è autrice ed editor presso BanklessDAO. Le interessa imparare cose nuove su crypto e NFT, con un'attenzione particolare al modo migliore di trasmettere queste conoscenze.

**Mecenate**

Questo articolo senza sponsor fa parte della tua formazione gratuita con Bankless Academy. Colleziona l'articolo per sostenere i contenuti futuri!
