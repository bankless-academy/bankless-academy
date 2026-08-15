---
TITLE: Fundamentos de blockchain
DESCRIPTION: Descubre la arquitectura fundamental de la tecnología blockchain.
LANGUAGE: Español
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

# Introducción

La tecnología `blockchain` es una forma revolucionaria de guardar y rastrear datos, y a la vez hacerlos accesibles para cualquiera. Organiza la información en una única lista pública de todas las transacciones históricas, que cualquiera puede consultar pero nadie puede editar. Esa lista pública se conoce como el `registro` de la blockchain.

Tras examinar las capas de una blockchain, entenderás la estructura que muestra una herramienta llamada `explorador de bloques`: la **lista** de bloques, las **transacciones** dentro de esos bloques y los **detalles** de cada transacción. Para verlo en acción, prueba [Etherscan](https://etherscan.io/), un explorador de bloques muy usado para Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Estructura de la blockchain

El término blockchain se usa como sustantivo (la blockchain de Bitcoin) o como adjetivo (tecnología blockchain). En ambos casos, `blockchain` se refiere a toda la estructura sobre la que se construyen las criptomonedas.

Mirando de fuera hacia dentro, hay 3 niveles de estructura en una blockchain:

1. La `blockchain` completa está formada por bloques enlazados en orden
2. Los `bloques` están formados por grupos de transacciones
3. Las `transacciones` son transferencias de valor, o instrucciones a programas, entre `direcciones` de la red

Estos tres niveles forman juntos un registro criptográfico: un historial inalterable de todas las transacciones de la red.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

¿Qué es una blockchain?

- [ ] Grupos organizados de transacciones llamados bloques

> ℹ️ ¡Inténtalo de nuevo! Los bloques son parte de la estructura, pero no son la única respuesta correcta.

- [ ] Un registro compartido que todos ven y nadie puede editar

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única respuesta correcta.

- [ ] Bloques enlazados uno tras otro en secuencia

> ℹ️ ¡Inténtalo de nuevo! Describe cómo se enlazan los bloques, pero no es la única respuesta correcta.

- [x] Todas las anteriores

> ℹ️ ¡Correcto! Las tres son ciertas: un registro compartido que nadie puede editar, con transacciones agrupadas en bloques y enlazadas en orden.

# Examinando el registro

En los sistemas monetarios habituales, confiamos en terceros como los bancos para llevar la cuenta de cuánto dinero tiene cada persona. Pero para ser realmente Bankless, queremos un sistema que no dependa de confiar en una sola entidad para gestionar el registro.

El `registro` es la lista de TODAS las transacciones hechas en una blockchain, y en las blockchains de acceso `público` cualquiera puede verla. Grupos concretos de transacciones del registro forman los bloques que juntos crean la blockchain.

Cuando se añaden transacciones nuevas al registro, los saldos de cada `dirección` se actualizan; las transacciones pasadas no se pueden alterar. Es como si cualquiera pudiera ver el historial completo de la cuenta bancaria de todo el mundo, en cualquier momento.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transacciones en el registro

Veamos algunas transacciones de ejemplo:

- Alice envía 5 ETH a Bob
- Bob envía 2 ETH a Charlie

Cada transacción muestra el _cambio_ en la cantidad de criptomoneda de cada dirección, así que el resultado total de todas las transacciones ES la cantidad de criptomoneda que tiene cada dirección.

---

⇒ Alice ha perdido 5 ETH

⇒ Bob ha ganado 3 ETH en total (recibió 5, envió 2)

⇒ Charlie ha ganado 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

¿Qué es cierto para los registros de las blockchains públicas?

- [ ] Todas las transacciones son públicas y las pasadas no cambian

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [ ] El registro indica cuánta criptomoneda tiene ahora cada dirección

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [ ] El registro crece a medida que se añaden transacciones nuevas

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [x] Todas las anteriores

> ℹ️ ¡Correcto! El registro es público, no se puede modificar, mantiene los saldos al día y crece con cada transacción nueva.

# Descentralización

Las transacciones incluidas en el `registro` de una `blockchain` no solo son inalterables: también se comparten y se distribuyen en una gran red de computadoras. Para que ninguna entidad pueda cambiar los datos por su cuenta, se guardan copias del registro en muchas computadoras de la red, llamadas `nodos`.

Esos datos compartidos son lo que hace que el registro sea `descentralizado`. Ninguna autoridad ni entidad controla la información. Blockchains como Ethereum también son de acceso `público`, porque cualquiera puede ver el registro.

Para esta lección, recuerda que los datos del registro se comparten entre las muchas computadoras que hacen funcionar la red de Ethereum.

# Knowledge Check 3

¿Qué hace que una blockchain sea descentralizada?

- [ ] Solo una entidad puede escribir en la blockchain

> ℹ️ ¡Inténtalo de nuevo! Que una sola entidad tenga el control es lo contrario de la descentralización.

- [ ] Cumple los requisitos de descentralización del gobierno

> ℹ️ ¡Inténtalo de nuevo! La descentralización viene del diseño de la red, no de una aprobación oficial.

- [x] Ninguna entidad controla el registro, guardado en muchas computadoras

> ℹ️ ¡Correcto! Guardar copias del registro en muchos nodos hace que ninguna entidad pueda controlar ni cambiar los datos.

- [ ] El registro se guarda en un único servidor seguro

> ℹ️ ¡Inténtalo de nuevo! Un solo servidor sería un punto central de control. Las copias del registro viven en muchos nodos.

# Anatomía de un bloque

Una característica clave de las blockchains es que los datos de transacciones pasadas no se pueden cambiar una vez incluidos en un bloque. Esto es así porque cada bloque tiene un `hash de bloque` único, como una huella digital, que sirve para enlazar los bloques uno tras otro. Nadie puede cambiar transacciones pasadas sin cambiar esa huella y la de TODOS los bloques siguientes, porque cada huella depende de la anterior.

Así, cada `bloque` es simplemente un grupo de transacciones más una huella única (su `hash de bloque`) calculada a partir de su contenido. Los bloques quedan encadenados porque cada uno hace referencia a la huella del bloque anterior, formando una sola block_**chain**_ conectada.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

¿Para qué sirve el hash de bloque?

- [ ] Para cifrar los datos del bloque y que nadie los lea

> ℹ️ ¡Inténtalo de nuevo! Los datos del bloque siguen siendo públicos. El hash es una huella, no un cifrado.

- [x] Para enlazar bloques y que los datos pasados no cambien

> ℹ️ ¡Correcto! Cada bloque referencia la huella del anterior, así que cambiar datos pasados rompería todos los bloques siguientes.

- [ ] Para asegurar que las transacciones llegan a la dirección correcta

> ℹ️ ¡Inténtalo de nuevo! Las direcciones definen a dónde van los fondos. El hash de bloque enlaza los bloques.

- [ ] Para asegurar que la blockchain siga siendo descentralizada

> ℹ️ ¡Inténtalo de nuevo! La descentralización viene de distribuir el registro en muchos nodos, no del hash de bloque.

# Dentro de un bloque

Recuerda: los datos de un `bloque` son solo un grupo de transacciones. Si miramos dentro de un bloque, vemos una lista de transacciones y algunos datos sobre quién lo creó.

Volviendo al ejemplo anterior del registro, esas dos transacciones podrían ir juntas en un bloque o repartirse en varios bloques con el tiempo. Pero sea cual sea el bloque, todas acaban sumándose al registro general de la blockchain.

- Alice envía 5 ETH a Bob
- Bob envía 2 ETH a Charlie

Recuerda que cada bloque también debe hacer referencia al `hash de bloque` del bloque anterior para enlazar la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

¿Qué información contiene un bloque?

- [ ] Toda la información contenida en los bloques anteriores

> ℹ️ ¡Inténtalo de nuevo! Un bloque solo referencia el hash del anterior; no copia todos los datos pasados.

- [ ] Cualquier cosa relevante, porque no tiene límite de tamaño

> ℹ️ ¡Inténtalo de nuevo! Un bloque es un grupo concreto de transacciones, no un contenedor ilimitado.

- [x] Datos de transacciones y una referencia al bloque anterior

> ℹ️ ¡Correcto! Un bloque es un grupo de transacciones más el hash del bloque anterior, que encadena los bloques.

- [ ] Todas las transacciones generadas en un tiempo fijo

> ℹ️ ¡Inténtalo de nuevo! Las transacciones pueden ir en un bloque o repartirse en varios con el tiempo.

# Transacciones individuales

Los datos de cualquier blockchain son simplemente una lista de `transacciones`, registros de dinero que se mueve entre usuarios. Para ser válida, cada transacción debe llevar la `firma digital` de quien la envía.

Eso es lo que haces al confirmar una transacción con tu billetera: firmas para autorizarla. Es el equivalente digital de firmar un cheque, un recibo o un pago con tarjeta.

Las transacciones pueden ser simples, como enviar activos cripto, o más complejas, como intercambiar activos o incluso desplegar código que se ejecuta cuando se activa, llamado `smart contracts`.

Por último, cada transacción tiene un identificador digital único que ninguna otra comparte: su `hash de transacción`. Así es fácil referirse a ella después, y sus detalles ya no pueden cambiar.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Los datos de una blockchain son una lista de transacciones agrupadas en bloques. Algunos ejemplos serían:

- [x] Enviar o recibir activos cripto

> ℹ️ ¡Correcto! Las transacciones registran dinero moviéndose entre usuarios, desde transferencias simples hasta interacciones con smart contracts.

- [ ] Cambiar el tamaño del bloque

> ℹ️ ¡Inténtalo de nuevo! El tamaño del bloque no es algo que una transacción pueda cambiar.

- [ ] Editar datos pasados de la blockchain

> ℹ️ ¡Inténtalo de nuevo! Los datos pasados no se pueden cambiar. Es una característica esencial de las blockchains.

- [ ] Todas las anteriores

> ℹ️ ¡Inténtalo de nuevo! Solo una de las opciones es una transacción válida en una blockchain.

# Direcciones de usuario

Una `dirección` es un identificador público que cualquiera puede consultar en la blockchain. Como con un correo electrónico, cualquiera puede enviarle fondos, pero solo quien controla la `clave privada` puede desbloquear y usar los fondos de esa dirección.

En Ethereum, una dirección siempre empieza por _0x__________ y tiene 42 caracteres entre números y letras, derivados de la `clave pública` de esa dirección.

Al mirar una transacción en un explorador de bloques, vemos las direcciones From: y To:. Eso no nos dice quiénes son las _personas_ que controlan esas direcciones, pero permite seguir el movimiento de las criptomonedas por el registro de la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

¿Qué es cierto sobre las direcciones de una blockchain?

- [ ] Son los identificadores públicos de distintas entidades

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [ ] En Ethereum siempre empiezan por _0x_

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [ ] Quien controla la clave privada puede usar sus fondos

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [x] Todas las anteriores

> ℹ️ ¡Correcto! Son identificadores públicos, en Ethereum empiezan por 0x y sus fondos se desbloquean con la clave privada.
