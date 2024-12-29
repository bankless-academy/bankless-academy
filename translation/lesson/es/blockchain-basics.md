---
TITLE: Conceptos Básicos de Blockchain
DESCRIPTION: Aprende sobre la arquitectura fundamental de la tecnología de cadena de bloques [blockchain].
LANGUAGE: Español
WRITERS: iSpeakNerd
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

Después de examinar las capas de una blockchain, utilizaremos una herramienta de blockchain llamada `explorador de bloques` para investigar los detalles de la estructura de la blockchain de Ethereum. Nuestro foco será ver y analizar: la **lista** de bloques, las **transacciones** dentro de esos bloques y los **detalles** de cada transacción de manera individual.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-6d0b6137.svg)

# Estructura de la Blockchain

El término "blockchain" puede utilizarse como un sustantivo, como "la blockchain de Bitcoin", o como un adjetivo, como "tecnología blockchain". En cualquier caso, `blockchain` se refiere a toda la estructura sobre la cual se construyen las criptomonedas.

Al acercarnos desde el exterior, existen 3 niveles de estructura en una blockchain:

1. La `blockchain` en general está compuesta por bloques que están vinculados entre sí, en orden.
2. Los `bloques` están formados por grupos de transacciones que se unen.
3. Las `transacciones` son cantidades de dinero enviadas entre dos `direcciones` en la red.

Esta estructura de tres niveles se une para crear un libro de contabilidad criptográfico: un historial inmutable de todas las transacciones realizadas en la red.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-346dae14.svg)

# Prueba de Conocimientos 1

¿Qué es una blockchain?

- [ ] Grupos organizados de transacciones llamados bloques
- [ ] Una lista de cantidades de dinero enviadas entre dos direcciones
- [ ] Bloques vinculados entre sí en secuencia
- [ ] Todas las anteriores

# Examinando el Ledger

En los sistemas monetarios convencionales, confiamos en terceros como los bancos para llevar un registro de cuánto dinero tiene cada persona. Sin embargo, para ser verdaderamente "Bankless" (sin bancos), queremos un sistema que no requiera confiar en una entidad para gestionar el libro de contabilidad.

El `ledger` es la lista de TODAS las transacciones realizadas en una blockchain, y cualquiera puede verlo en las blockchains `públicas`. Grupos discretos de transacciones del ledger forman los bloques, los cuales una vez juntos, conforman la blockchain.

Cuando se añaden nuevas transacciones al ledger, los saldos almacenados en cada `dirección` se actualizan; y las transacciones pasadas no se pueden alterar. Es como permitir que todos vean el historial completo de transacciones de la cuenta bancaria de todos, en cualquier momento y para siempre.

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

¿Cuál(es) de las siguientes afirmaciones es/son verdadera(s) para los registros de blockchain públicos?

- [ ] Todas las transacciones son públicas y las transacciones pasadas no se pueden cambiar.
- [ ] El registro lleva un seguimiento de la cantidad de criptomoneda que cada dirección tiene actualmente.
- [ ] El registro crece a medida que se agregan nuevas transacciones.
- [ ] Todas las anteriores

# Decentralización

No solo las transacciones incluidas en el registro de la `blockchain` son inmutables, sino que también se comparten y distribuyen entre una gran red de computadoras. Para asegurarse de que ninguna entidad tenga el poder de cambiar los datos, el registro de la blockchain se almacena en cada dispositivo de la red llamado `nodo`.

Estos datos compartidos son los que hacen que el registro de la blockchain sea `descentralizado`. Ninguna autoridad o entidad única controla los datos. Blockchains como Ethereum también son `públicas` porque el registro puede ser visto por cualquier persona.

Veremos los detalles de cómo se añaden nuevos datos y cómo nos aseguramos de que todos tengan una copia de los mismos datos en todo momento en nuestra próxima lección de **Teoría de la Blockchain**. Para esta lección, simplemente recuerda que los datos del registro son compartidos por todas las computadoras que funcionan en la red de Ethereum.

# Prueba de Conocimientos 3

¿Qué hace que una blockchain sea descentralizada?

- [ ] Solo una entidad puede escribir en la blockchain.
- [ ] Cumple con los requisitos de descentralización establecidos por el gobierno.
- [ ] Ninguna autoridad o entidad única controla el registro ni el acceso a los datos del registro, ya que están distribuidos en una gran red de computadoras.
- [ ] El registro se almacena en un único servidor seguro.

# Anatomía de un Bloque

Una característica importante de las blockchains es que los datos de transacciones pasadas no pueden ser modificados después de haber sido incluidos en un bloque. Esto se debe a que cada bloque tiene un `hash de bloque` único, como una huella digital, que se utiliza para enlazar los bloques uno después de otro. Nadie puede cambiar las transacciones pasadas sin cambiar esa huella digital y la huella digital de CADA bloque que le sigue, ya que cada una depende de la anterior.

Entonces, cada `bloque` es simplemente un grupo de transacciones que se juntan en un archivo junto con el `hash de bloque` del mismo. Los bloques se encadenan entre sí, porque cada uno hace referencia a la huella digital única del bloque _anterior_, formando así una _**cadena de bloques**_ conectados.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-8ba3bea2.svg)

# Prueba de Conocimientos 4

¿Cuál es el propósito de un hash de bloque?

- [ ] Encriptar los datos del bloque para que nadie pueda leerlos.
- [ ] Enlazar cada bloque con el anterior y asegurarse de que los datos de transacciones pasadas no cambien.
- [ ] Garantizar que las transacciones se envíen a la dirección correcta.
- [ ] Asegurar que la blockchain se mantenga descentralizada.

# Interior de un Bloque

Recuerda, los datos de un `bloque` son simplemente un grupo de transacciones juntas. Al examinar un solo bloque, vemos una lista de transacciones y algunos datos sobre quién creó el bloque.

Siguiendo nuestro ejemplo anterior, cuando discutimos sobre el libro mayor de la blockchain, ambas transacciones podrían estar agrupadas en un solo bloque o distribuidas en varios bloques a lo largo del tiempo. Pero sin importar en qué bloque se incluyeran, eventualmente se agregarán todas al libro mayor general de la blockchain.

- Alice envía 5 ETH a Bob.
- Bob envía 2 ETH a Charlie.

Recuerda que cada bloque también debe hacer referencia al `hash de bloque` del _bloque anterior_ para enlazar la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b11c74ce.svg)

# Prueba de Conocimientos 5

La siguiente información se encuentra contenida en un bloque:

- [ ] Toda la información contenida en bloques anteriores, para que la blockchain esté siempre actualizada.
- [ ] Cualquier cosa relevante para la blockchain, ya que el tamaño del bloque es ilimitado.
- [ ] Datos de transacciones y una referencia al bloque anterior.
- [ ] Todos los datos de transacciones generados dentro de un período de tiempo fijo.

# Transacciones Individuales

Los datos en cualquier blockchain son simplemente una lista de `transacciones`, registros de moneda transferida entre usuarios. Cada transacción debe estar firmada con la `firma digital` del remitente para ser válida.

Esto es lo que haces cuando confirmas una transacción con una billetera, estás firmando con tu firma digital para autorizar la transacción. Puedes pensar en ello como el equivalente digital de firmar físicamente un cheque, un recibo o una transacción con tarjeta de crédito.

Las transacciones pueden ser simples, como _enviar_ activos de criptomonedas, o más complejas, como _intercambiar_ activos de criptomonedas o incluso desplegar código especial que se ejecuta cuando se activa, llamado `contratos inteligentes`.

Finalmente, cada transacción tiene un identificador digital único, llamado su `hash de transacción`, que ninguna otra transacción tiene. Esto facilita referirse a cualquier transacción individual más adelante y garantiza que los detalles de esa transacción no se puedan cambiar después.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-2f6bf118.svg)

# Prueba de Conocimientos 6

Los datos en una blockchain son simplemente una lista de transacciones agrupadas en bloques. Ejemplos de dichas transacciones podrían incluir:

- [ ] Enviar o recibir activos de criptomonedas.
- [ ] Cambiar el tamaño del bloque.
- [ ] Editar datos pasados de la blockchain.
- [ ] Todas las anteriores.

# Direcciones de Usuario

Una `dirección` es un identificador público al que cualquiera puede acceder en la blockchain. Al igual que una dirección de correo electrónico, cualquier persona puede enviar fondos a ella, pero solo alguien que controle la `clave privada` puede desbloquear y utilizar los fondos en esa dirección.

En Ethereum, una dirección siempre comienza con _0x__________ y consta de 42 caracteres de números y letras derivados de la `clave pública` de esa dirección.

Cuando observamos una transacción individual en un explorador de bloques, podemos ver las direcciones "De:" y "Para:". Esto no nos dice _quiénes son_ las personas que controlan esas direcciones, pero permite a cualquier usuario rastrear el _movimiento_ de criptomonedas en el ledger de la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-e9456d37.svg)

# Prueba de Conocimientos 7

¿Qué es cierto acerca de las direcciones de blockchain?

- [ ] Son los identificadores públicos de diferentes entidades en una blockchain.
- [ ] Siempre comienzan con _0x_ en Ethereum.
- [ ] Quien controle la clave privada de una dirección puede utilizar los fondos en esa dirección.
- [ ] Todas las anteriores.
