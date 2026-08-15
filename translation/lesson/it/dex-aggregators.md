---
TITLE: Aggregatori di DEX
DESCRIPTION: Esplora gli aggregatori di DEX, la liquidità e il panorama degli scambi DeFi.
LANGUAGE: Italiano
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

Gli `exchange decentralizzati` (DEX) eliminano i costi degli intermediari e fanno risparmiare gli Explorer quando scambiano asset.

Ma lo sapevi, Explorer, che con la DeFi ci sono altri modi per risparmiare? Con gli `aggregatori di DEX` puoi analizzare insieme tutti gli scambi possibili su piattaforme diverse ed eseguire il percorso migliore, in una sola azione. Ti aiutano a ottenere le condizioni migliori quando fai uno `scambio` di token. Come gli aggregatori di voli ti trovano il biglietto più economico, gli aggregatori di DEX ti fanno ottenere il massimo dal tuo scambio.

In questa lezione vedremo:

1. Come i DEX dividono la liquidità e come questo può peggiorare le condizioni di scambio.
2. Come gli aggregatori di DEX permettono di vedere e usare più DEX da un'unica interfaccia.
3. I diversi modi in cui un'unica interfaccia di aggregazione fa risparmiare tempo e denaro agli Explorer.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Come la liquidità influenza i prezzi

La quantità di un token disponibile per lo scambio su un singolo mercato si chiama `liquidità` del token. La liquidità disponibile influisce molto sull'`impatto sul prezzo` quando scambi nella DeFi: un impatto grande rende lo scambio più caro, un impatto piccolo lo rende più economico. Quasi tutti preferiscono scambiare su mercati con più liquidità, per ridurre l'impatto sul prezzo.

Pensa a una piscina: più acqua c'è (la liquidità), minore è la _variazione_ del livello (l'impatto sul prezzo) quando qualcuno si tuffa o esce. Anche la stazza di quel "qualcuno" (lo scambio) influisce sulla _variazione_ del livello (l'impatto sul prezzo).

# Un esempio di come la liquidità influenza i prezzi

Vediamo un esempio.

Immagina un token scambiato su più DEX contemporaneamente. Un DEX ha un pool profondo, con quasi tutta la `liquidità` del token, mentre un altro ne ha uno basso, con solo una piccola parte.

Se un Explorer compra la stessa quantità di token da ciascun pool, l'`impatto sul prezzo` sarà più alto nel pool basso. Lo stesso scambio assorbe una percentuale molto più grande della liquidità totale di quel pool, quindi sposta di più il prezzo e costa di più a chi compra.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Completa la frase: per trovare il prezzo migliore conviene scambiare su mercati con liquidità ________, per avere un impatto sul prezzo ________.

- [ ] buona, massimo

> ℹ️ Riprova! Un impatto massimo sul prezzo rende lo scambio più caro, non più economico.

- [x] alta, basso

> ℹ️ Esatto! Più liquidità significa un impatto minore sul prezzo, come una piscina grande che cambia poco quando qualcuno si tuffa.

- [ ] bassa, buono

> ℹ️ Riprova! Poca liquidità aumenta l'impatto sul prezzo e rende gli scambi più cari.

- [ ] scarsa, grande

> ℹ️ Riprova! Poca liquidità causa un grande impatto sul prezzo, proprio quello che chi scambia vuole evitare.

# I limiti dei DEX tradizionali: la liquidità sottile

La DeFi continua a crescere, ma per gli utenti sta emergendo un problema: più DEX nascono, più la quantità totale di ogni singolo token si disperde. Questo fenomeno si chiama liquidità sottile.

Ricorda la piscina: se l'acqua disponibile (la `liquidità`) viene divisa tra più vasche, in ognuna il livello sarà più "sottile" rispetto al totale della vasca originaria.

Agli inizi della DeFi, uno o due DEX detenevano quasi tutta la liquidità. Nel 2020 nuovi DEX hanno iniziato a contenderla: un rivale ha sottratto a Uniswap oltre 1 miliardo di dollari di liquidità nelle settimane dopo il lancio. Oggi la liquidità è distribuita su centinaia di DEX, su molte blockchain e reti `Layer 2`, e ogni singolo pool si assottiglia.

Così ogni scambio ha un `impatto sul prezzo` più grande rispetto a quando un solo DEX deteneva quasi tutta la liquidità dell'ecosistema. Senza nuove innovazioni, scambiare su un singolo DEX costa di più agli Explorer.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Quali due fattori determinano l'impatto sul prezzo di uno scambio su un DEX?

- [ ] Il DEX scelto per lo scambio e la dimensione dello scambio

> ℹ️ Riprova! Il DEX in sé non conta. Quello che conta è la liquidità disponibile nel pool.

- [ ] Il token scelto e il DEX usato per fare lo scambio

> ℹ️ Riprova! Né il token né il nome del DEX determinano l'impatto sul prezzo: contano liquidità e dimensione dello scambio.

- [x] La dimensione dello scambio e la liquidità disponibile

> ℹ️ Esatto! Come in piscina, lo schizzo dipende da quanto è grande chi si tuffa e da quanta acqua c'è.

- [ ] La liquidità disponibile e il token scelto per lo scambio

> ℹ️ Riprova! La liquidità è uno dei due fattori, l'altro è la dimensione dello scambio, non il token scelto.

# Ricomporre la liquidità con gli aggregatori di DEX

Serve molta `liquidità` per ridurre l'impatto sul prezzo e farti risparmiare. Gli aggregatori di DEX permettono di far passare gli scambi per più DEX insieme e di ridurre l'impatto sul prezzo: un grande scambio dal wallet di un Explorer viene spezzato in tanti piccoli scambi su DEX diversi.

Gli aggregatori possono anche instradare uno scambio attraverso un `token intermedio`, o più di uno, se il risultato per l'utente è migliore, come un aggregatore di voli che propone uno scalo in più perché costa meno. La scoperta del `percorso di scambio` ottimale è affidata ad algoritmi sofisticati, che esaminano tutti i tragitti possibili per trovare il più economico in quel momento.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Negli aggregatori di DEX, l'instradamento degli scambi significa che:

- [ ] Gli scambi passano da accordi speciali con DEX specifici

> ℹ️ Riprova! Gli aggregatori cercano tra tutti i DEX disponibili con degli algoritmi, non tramite accordi speciali.

- [ ] Gli scambi passano sempre per più DEX

> ℹ️ Riprova! Gli aggregatori dividono lo scambio solo se il risultato è migliore. A volte un singolo DEX offre il percorso migliore.

- [ ] Gli scambi passano solo per il DEX preferito dall'utente

> ℹ️ Riprova! Restare su un solo DEX vanificherebbe lo scopo. Gli aggregatori cercano il prezzo migliore su molti DEX.

- [x] Gli scambi possono passare per più DEX e token intermedi

> ℹ️ Esatto! Gli algoritmi esaminano tutti i tragitti possibili, comprese le "soste" sui token intermedi, per trovare il percorso più economico.

# Come si calcola il costo del gas su Ethereum

Ripassiamo questo calcolo prima di vedere come gli aggregatori riducono i costi di rete. Il risparmio conta soprattutto su Ethereum Mainnet; sulle reti `Layer 2` i costi sono di pochi centesimi.

Come il carburante di un'auto, il `gas` fa funzionare il codice su Ethereum. Più calcoli chiedi, più gas consuma il tuo codice. Il prezzo si misura in piccolissime unità di ether, i `gwei`: 1 gwei è un miliardesimo di ether (0,000000001 ETH).

Il costo totale dipende dal gas consumato e dal suo prezzo unitario in quel momento. La formula è:
_Gas utilizzato * Prezzo del gas = Costo totale del gas_

Per esempio, con il gas a 22 gwei per unità e una transazione che ne consuma 120.000:
_120.000 * 22 gwei = 2.640.000 gwei_ _**ovvero**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Come gli aggregatori riducono i costi del gas

Dividere uno scambio farebbe salire i costi di transazione, per via dell'attività onchain in più, ma gli aggregatori avanzati mettono in conto quei costi e li includono nel calcolo del percorso. Simulano gli scambi offchain, gas compreso, per trovare i `percorsi di scambio` che lasciano agli Explorer più valore alla fine dell'operazione.

Alcuni aggregatori vanno oltre. 1inch, che ha inventato l'aggregazione dei DEX, oggi lascia anche che esecutori professionisti si facciano concorrenza per eseguire il tuo scambio, pagando il gas al posto tuo (un sistema chiamato Fusion). Spesso l'utente non paga gas.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Quale di questi NON è un modo con cui gli aggregatori di DEX riducono i costi di transazione?

- [ ] Simulare le transazioni offchain prima di eseguire lo scambio

> ℹ️ Riprova! Gli aggregatori simulano davvero gli scambi offchain, costi del gas compresi, per trovare il percorso migliore.

- [x] Chiedere ai DEX di abbassare i costi di rete

> ℹ️ Esatto! I costi di rete li stabilisce la blockchain, non i DEX. Nessuno può semplicemente chiedere di abbassarli.

- [ ] Tenere conto del costo del gas nell'instradamento

> ℹ️ Riprova! Gli aggregatori avanzati includono davvero i costi di transazione nel calcolo del percorso.

- [ ] Far eseguire gli scambi a professionisti che pagano il gas

> ℹ️ Riprova! Nei sistemi a intenti come 1inch Fusion, gli esecutori coprono davvero il gas per gli utenti.

# I meta-aggregatori

Esistono perfino meta-aggregatori di aggregatori di DEX! Queste piattaforme cercano tra gli aggregatori concorrenti e mostrano agli utenti i prezzi migliori. Per esempio, la funzione di scambio integrata in wallet come MetaMask raccoglie preventivi da più fornitori, tra cui aggregatori come 1inch, e aggiunge la propria commissione di servizio.

Nota: per quanto comodi, i servizi di `meta-aggregatore` possono aggiungere costi oltre a quelli di rete, facendo salire la spesa complessiva. Explorer, controlla che i tuoi scambi non finiscano per costare più del previsto.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

I meta-aggregatori confrontano più aggregatori di DEX per trovare i prezzi migliori per i loro utenti.

- [x] Vero

> ℹ️ Esatto! I meta-aggregatori cercano tra gli aggregatori di DEX concorrenti e mostrano agli utenti i prezzi migliori.

- [ ] Falso

> ℹ️ Riprova! Cercare tra più aggregatori di DEX è proprio quello che fanno i meta-aggregatori.

# Evitare gli attacchi sandwich

Chi scambia direttamente sui `DEX` può perdere valore fino al limite della propria `tolleranza allo slippage`, quando dei bot piazzano scambi subito prima e subito dopo il suo per spostare il prezzo. Queste perdite si chiamano `attacchi sandwich`: solo nel 2021 sono costate agli utenti circa 235.000.000 di dollari. Oggi difese come l'`instradamento privato delle transazioni` e gli scambi basati sugli intenti proteggono quasi tutte le operazioni quotidiane, ma conviene comunque tenere bassa la tolleranza allo slippage.

Per fortuna, grazie alla liquidità ricomposta dagli aggregatori di DEX, l'impatto sul prezzo di uno scambio si riduce. Gli Explorer possono tenere bassa la tolleranza allo slippage e risparmiare di più con gli aggregatori, invece di scambiare direttamente su un DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Per proteggerti, la tua tolleranza allo slippage dovrebbe restare:

- [x] bassa

> ℹ️ Esatto! Una tolleranza allo slippage bassa limita il valore che un attacco sandwich può estrarre dal tuo scambio.

- [ ] alta

> ℹ️ Riprova! Una tolleranza allo slippage alta permette agli attacchi sandwich di prendere più valore dal tuo scambio.

# Più protezione dai sandwich: gli scambi OTC

Alcuni aggregatori come 1inch offrono anche servizi `OTC` (`over the counter`) che proteggono completamente dagli attacchi sandwich. Questi servizi facoltativi permettono di scambiare direttamente con altri utenti, invece di passare per i `pool di liquidità` della DeFi, e danno agli Explorer un altro ottimo modo per risparmiare.

CoW Swap segue una strada diversa: l'utente firma una richiesta di scambio (un `intent`), e dei `solver` professionisti competono in `aste batch` per eseguirla al prezzo migliore. I solver possono anche abbinare direttamente due utenti, così gli scambi sono protetti dagli attacchi sandwich per impostazione predefinita.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Quali strumenti offrono molti aggregatori di DEX per far risparmiare i loro utenti?

- [ ] Instradare gli scambi sulla liquidità di più DEX.

> ℹ️ Riprova! La liquidità aggregata riduce l'impatto sul prezzo, ma non è l'unico modo in cui gli aggregatori fanno risparmiare.

- [ ] Scambi OTC che proteggono del tutto dagli attacchi sandwich.

> ℹ️ Riprova! È uno dei modi in cui gli aggregatori fanno risparmiare, ma non è l'unico.

- [ ] Tenere conto del costo del gas nel costruire i percorsi.

> ℹ️ Riprova! È uno dei modi in cui gli aggregatori fanno risparmiare, ma non è l'unico.

- [x] Tutte le precedenti

> ℹ️ Esatto! Gli aggregatori uniscono la liquidità, considerano i costi del gas e possono offrire scambi OTC, per lasciare più valore all'utente.
