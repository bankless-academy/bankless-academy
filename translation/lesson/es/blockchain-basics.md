---
TITLE: Conceptos Básicos de Blockchain
DESCRIPTION: Aprende sobre la arquitectura fundamental de la tecnología de cadena de bloques [blockchain].
LANGUAGE: Español
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: OrnellaWeb3
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

# Introducción

La tecnología de `blockchain` es una forma revolucionaria de almacenar y rastrear datos, la cual al mismo tiempo hace que esos datos sean accesibles para cualquier persona. Es una forma de organizar datos en una única **lista pública**, creada a partir de todas las transacciones históricas existentes donde cualquier persona puede verla, pero no editarla. Esta lista pública de transacciones se conoce colectivamente como el `ledger` de la blockchain.

After examining the layers of a blockchain, you will understand the structure that a blockchain tool called a `block explorer` displays: the **list** of blocks, the **transactions** within those blocks, and the **details** of each individual transaction. To see it in action, try [Etherscan](https://etherscan.io/), a popular block explorer for Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-6d0b6137.svg)

# Estructura de la Blockchain

The term blockchain can be used as a noun (the Bitcoin blockchain) or as an adjective (blockchain technology). En cualquier caso, `blockchain` se refiere a toda la estructura sobre la cual se construyen las criptomonedas.

Al acercarnos desde el exterior, existen 3 niveles de estructura en una blockchain:

1. La `blockchain` en general está compuesta por bloques que están vinculados entre sí, en orden.
2. Los `bloques` están formados por grupos de transacciones que se unen.
3. `Transactions` are transfers of value, or instructions to programs, between `addresses` on the network

Esta estructura de tres niveles se une para crear un libro de contabilidad criptográfico: un historial inmutable de todas las transacciones realizadas en la red.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-346dae14.svg)

# Prueba de Conocimientos 1

¿Qué es una blockchain?

- [ ] Grupos organizados de transacciones llamados bloques

> ℹ️ Try again! Blocks are part of the structure, but they aren’t the only correct answer.

- [ ] A shared record anyone can view but no one can edit

> ℹ️ Try again! This is true, but it isn’t the only correct answer.

- [ ] Bloques vinculados entre sí en secuencia

> ℹ️ Try again! This describes the chain of blocks, but it isn’t the only correct answer.

- [x] All of the above

> ℹ️ Correct! All three are true: a blockchain is a shared, uneditable record of transactions grouped into blocks, linked in sequence.

# Examinando el Ledger

En los sistemas monetarios convencionales, confiamos en terceros como los bancos para llevar un registro de cuánto dinero tiene cada persona. Sin embargo, para ser verdaderamente "Bankless" (sin bancos), queremos un sistema que no requiera confiar en una entidad para gestionar el libro de contabilidad.

El `ledger` es la lista de TODAS las transacciones realizadas en una blockchain, y cualquiera puede verlo en las blockchains `públicas`. Grupos discretos de transacciones del ledger forman los bloques, los cuales una vez juntos, conforman la blockchain.

Cuando se añaden nuevas transacciones al ledger, los saldos almacenados en cada `dirección` se actualizan; y las transacciones pasadas no se pueden alterar. It’s like letting anyone look at everyone’s all-time bank account transaction history, at any time.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-74e5f072.svg)

# Transacciones en el Ledger

Veamos algunos ejemplos de transacciones:

- Alice envía 5 ETH a Bob
- Bob envía 2 ETH a Charlie

Las transacciones individuales muestran el _cambio_ en la cantidad de criptomonedas para cada dirección, por lo que el resultado total de todas las transacciones ES la cantidad de criptomoneda que tiene cada dirección.

---

⇒ Alice ha perdido 5 ETH

⇒ Bob ha ganado 3 ETH en total (recibió 5, envió 2)

⇒ Charlie ha ganado 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg)

# Prueba de Conocimientos 2

Which of the following is true for public blockchain ledgers?

- [ ] Todas las transacciones son públicas y las transacciones pasadas no se pueden cambiar.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] El registro lleva un seguimiento de la cantidad de criptomoneda que cada dirección tiene actualmente.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] El registro crece a medida que se agregan nuevas transacciones.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! The ledger is public, unchangeable, keeps address balances up to date, and grows with every new transaction.

# Decentralización

No solo las transacciones incluidas en el registro de la `blockchain` son inmutables, sino que también se comparten y distribuyen entre una gran red de computadoras. To make sure that no single entity has the power to change the data, copies of the blockchain ledger are stored on many computers, called `nodes`, across the network.

Estos datos compartidos son los que hacen que el registro de la blockchain sea `descentralizado`. Ninguna autoridad o entidad única controla los datos. Blockchains como Ethereum también son `públicas` porque el registro puede ser visto por cualquier persona.

For this lesson, just remember that the ledger data is shared across the many computers running the Ethereum network.

# Prueba de Conocimientos 3

¿Qué hace que una blockchain sea descentralizada?

- [ ] Solo una entidad puede escribir en la blockchain.

> ℹ️ Try again! A single entity in control is the opposite of decentralization.

- [ ] Cumple con los requisitos de descentralización establecidos por el gobierno.

> ℹ️ Try again! Decentralization comes from the network’s design, not from government approval.

- [x] No single entity controls the ledger, stored on many computers

> ℹ️ Correct! Storing copies of the ledger on many nodes means no single entity has the power to control or change the data.

- [ ] El registro se almacena en un único servidor seguro.

> ℹ️ Try again! A single server would be a central point of control. Copies of the ledger are stored on many nodes.

# Anatomía de un Bloque

Una característica importante de las blockchains es que los datos de transacciones pasadas no pueden ser modificados después de haber sido incluidos en un bloque. Esto se debe a que cada bloque tiene un `hash de bloque` único, como una huella digital, que se utiliza para enlazar los bloques uno después de otro. Nadie puede cambiar las transacciones pasadas sin cambiar esa huella digital y la huella digital de CADA bloque que le sigue, ya que cada una depende de la anterior.

So each `block` is simply a group of transactions, plus a unique fingerprint (its `block hash`) computed from the block’s contents. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-8ba3bea2.svg)

# Prueba de Conocimientos 4

¿Cuál es el propósito de un hash de bloque?

- [ ] Encriptar los datos del bloque para que nadie pueda leerlos.

> ℹ️ Try again! Block data stays publicly readable. The hash is a fingerprint, not encryption.

- [x] To link blocks together and keep past transaction data unchangeable

> ℹ️ Correct! Each block references the previous block’s fingerprint, so changing past data would break every block that follows.

- [ ] Garantizar que las transacciones se envíen a la dirección correcta.

> ℹ️ Try again! Addresses handle where funds go. The block hash links blocks together.

- [ ] Asegurar que la blockchain se mantenga descentralizada.

> ℹ️ Try again! Decentralization comes from distributing the ledger across many nodes, not from the block hash.

# Interior de un Bloque

Recuerda, los datos de un `bloque` son simplemente un grupo de transacciones juntas. Al examinar un solo bloque, vemos una lista de transacciones y algunos datos sobre quién creó el bloque.

Siguiendo nuestro ejemplo anterior, cuando discutimos sobre el libro mayor de la blockchain, ambas transacciones podrían estar agrupadas en un solo bloque o distribuidas en varios bloques a lo largo del tiempo. Pero sin importar en qué bloque se incluyeran, eventualmente se agregarán todas al libro mayor general de la blockchain.

- Alice envía 5 ETH a Bob.
- Bob envía 2 ETH a Charlie.

Recuerda que cada bloque también debe hacer referencia al `hash de bloque` del _bloque anterior_ para enlazar la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b11c74ce.svg)

# Prueba de Conocimientos 5

What information is contained in a block?

- [ ] All the information contained in previous blocks

> ℹ️ Try again! A block only references the previous block’s hash. It doesn’t copy all past data.

- [ ] Cualquier cosa relevante para la blockchain, ya que el tamaño del bloque es ilimitado.

> ℹ️ Try again! A block is a discrete group of transactions, not an unlimited container.

- [x] Transaction data and a reference to the previous block

> ℹ️ Correct! A block is a group of transactions plus the previous block’s hash, which chains the blocks together.

- [ ] Todos los datos de transacciones generados dentro de un período de tiempo fijo.

> ℹ️ Try again! Transactions can be grouped into one block or spread across multiple blocks over time.

# Transacciones Individuales

Los datos en cualquier blockchain son simplemente una lista de `transacciones`, registros de moneda transferida entre usuarios. Cada transacción debe estar firmada con la `firma digital` del remitente para ser válida.

Esto es lo que haces cuando confirmas una transacción con una billetera, estás firmando con tu firma digital para autorizar la transacción. Puedes pensar en ello como el equivalente digital de firmar físicamente un cheque, un recibo o una transacción con tarjeta de crédito.

Las transacciones pueden ser simples, como _enviar_ activos de criptomonedas, o más complejas, como _intercambiar_ activos de criptomonedas o incluso desplegar código especial que se ejecuta cuando se activa, llamado `contratos inteligentes`.

Finalmente, cada transacción tiene un identificador digital único, llamado su `hash de transacción`, que ninguna otra transacción tiene. Esto facilita referirse a cualquier transacción individual más adelante y garantiza que los detalles de esa transacción no se puedan cambiar después.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-2f6bf118.svg)

# Prueba de Conocimientos 6

Los datos en una blockchain son simplemente una lista de transacciones agrupadas en bloques. Ejemplos de dichas transacciones podrían incluir:

- [x] Sending or receiving crypto assets

> ℹ️ Correct! Transactions record currency moving between users, from simple transfers to smart contract interactions.

- [ ] Cambiar el tamaño del bloque.

> ℹ️ Try again! Block size isn’t something a transaction can change.

- [ ] Editar datos pasados de la blockchain.

> ℹ️ Try again! Past blockchain data cannot be changed. That’s a core feature of blockchains.

- [ ] Todas las anteriores

> ℹ️ Try again! Only one of the above is a valid blockchain transaction.

# Direcciones de Usuario

Una `dirección` es un identificador público al que cualquiera puede acceder en la blockchain. Al igual que una dirección de correo electrónico, cualquier persona puede enviar fondos a ella, pero solo alguien que controle la `clave privada` puede desbloquear y utilizar los fondos en esa dirección.

On Ethereum, an address always starts with \_0x\_\_\_\_\_\_\_\_\_\_ and is 42 characters of numbers and letters derived from the `public key` of that address.

Cuando observamos una transacción individual en un explorador de bloques, podemos ver las direcciones "De:" y "Para:". Esto no nos dice _quiénes son_ las personas que controlan esas direcciones, pero permite a cualquier usuario rastrear el _movimiento_ de criptomonedas en el ledger de la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-e9456d37.svg)

# Prueba de Conocimientos 7

¿Qué es cierto acerca de las direcciones de blockchain?

- [ ] Son los identificadores públicos de diferentes entidades en una blockchain.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Siempre comienzan con _0x_ en Ethereum.

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Whoever controls the private key can use the funds at that address

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! Addresses are public identifiers, start with 0x on Ethereum, and their funds are unlocked by the private key.
