---
LESSON TITLE: Conceptos Básicos de Blockchain
LESSON LINK: https://app.banklessacademy.com/lessons/blockchain-basics
LANGUAGE: Español
PROTOCOL VERSION: 0.01
LAST UPDATED: 27/06/2023
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
PORTABLE LESSON DATADISK™ COLLECTION                                                                                                           \$$$$$$  |
                                                                                                                                                \______/
__________________________________________________________________________________________________________________________________________________________
```

```
<< LESSON START >>
```
---

# Introducción

La tecnología `Blockchain` es una forma revolucionaria de almacenar y rastrear datos, al mismo tiempo que hace que esos datos sean accesibles para cualquier persona. Es una forma de organizar los datos en una sola lista pública de todas las transacciones históricas que cualquiera puede ver pero no editar. Esta lista pública de transacciones se conoce colectivamente como el "libro mayor" de la cadena de bloques.

Después de examinar las capas de una cadena de bloques, usaremos una herramienta de cadena de bloques llamada "explorador de bloques" para analizar los detalles de la estructura de la cadena de bloques de Ethereum; ampliaremos la cadena de bloques de Ethereum para ver la **lista** de bloques, las **transacciones** dentro de esos bloques y los **detalles** de cada transacción individual.

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/introduction-6d0b6137.svg)

# Estructura de la cadena de bloques

El término cadena de bloques se puede usar como sustantivo, la cadena de bloques de Bitcoin, o como adjetivo, tecnología de cadena de bloques. De cualquier manera, 'blockchain' se refiere a toda la estructura en la que se basan las criptomonedas.

Acercándonos desde el exterior, hay 3 niveles de estructura en una cadena de bloques:

1. La "cadena de bloques" en general se compone de bloques que están vinculados entre sí en orden
2. Los 'bloques' se componen de grupos de transacciones juntas
3. Las `transacciones` son cantidades de dinero enviadas entre dos `direcciones` en la red

Esta estructura de tres niveles se une para crear un libro mayor criptográfico: un historial inalterable de todas las transacciones realizadas en la red.

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/blockchain-structure-346dae14.svg)

# Prueba de Conocimientos 1

¿Qué es una cadena de bloques?

- [ ] Grupos organizados de transacciones llamados bloques
- [ ] Una lista de cantidades de dinero enviadas entre dos direcciones
- [ ] Bloques unidos en secuencia
- [ ] Todo lo anterior

# Examinando el libro mayor

En los sistemas monetarios típicos, confiamos en terceros como los bancos para realizar un seguimiento de cuánto dinero tiene cada persona. Pero, para ser verdaderamente Bankless , queremos un sistema que no requiera que confiemos en una sola entidad para administrar el libro mayor.

El 'libro mayor' es la lista de TODAS las transacciones realizadas en una cadena de bloques, y cualquiera puede verla para las cadenas de bloques 'públicas'. Grupos discretos de transacciones del libro mayor forman los bloques que juntos forman la cadena de bloques.

Cuando se agregan nuevas transacciones al libro mayor, los saldos almacenados en cada "dirección" se actualizan; las transacciones pasadas no se pueden modificar. Es como permitir que todos vean el historial de transacciones de cuentas bancarias de todos los tiempos, en cualquier momento, para siempre.

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/examining-the-ledger-74e5f072.svg)

# Transacciones en el libro mayor

Veamos algunos ejemplos de transacciones:

- Alice envía 5 ETH a Bob
- Bob envía 2 ETH a Charlie

Las transacciones individuales muestran el _cambio_ en la cantidad de criptomonedas para cada dirección, por lo que el resultado total de todas las transacciones ES la cantidad de criptomonedas que tiene cada dirección.

---

⇒ Alice ha perdido 5 ETH

⇒ Bob ha ganado 3 ETH en total (recibió 5, envió 2)

⇒ Charlie ha ganado 2 ETH

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg)

# Prueba de Conocimientos 2

¿Cuál de las siguientes afirmaciones es verdadera para los libros de contabilidad públicos de blockchain?

- [ ] Todas las transacciones son públicas y las transacciones pasadas no se pueden modificar
- [ ] El libro mayor rastrea la cantidad de criptomonedas que tiene cada dirección actualmente
- [ ] El libro mayor crece a medida que se le agregan nuevas transacciones
- [ ] Todo lo anterior

# Descentralización

No solo las transacciones incluidas en un libro mayor de "cadena de bloques" son inalterables, sino que también se comparten y distribuyen entre una gran red de computadoras. Para asegurarse de que ninguna entidad tenga el poder de cambiar los datos, el libro mayor de blockchain se almacena en cada dispositivo, llamado "nodo", en la red.

Estos datos compartidos son los que hacen que el libro mayor de la cadena de bloques sea "descentralizado". Ninguna autoridad o entidad individual controla los datos. Las cadenas de bloques como Ethereum también son "públicas" porque cualquier persona puede ver el libro mayor.

Veremos los detalles de cómo se agregan nuevos datos y cómo nos aseguramos de que todos tengan una copia de los mismos datos todo el tiempo en nuestra próxima lección de Teoría de Blockchain. Para esta lección, recuerde que los datos del libro mayor son compartidos por todas las computadoras que se ejecutan en la red Ethereum.

# Prueba de Conocimientos 3

¿Qué hace que una cadena de bloques sea descentralizada?

- [ ] Solo una entidad puede escribir en la cadena de bloques
- [ ] Cumple con los requisitos de descentralización establecidos por el gobierno
- [ ] Ninguna autoridad o entidad única controla el libro mayor o el acceso a los datos del libro mayor porque se distribuye en una gran red de computadoras
- [ ] El libro mayor se almacena en un único servidor seguro

# Anatomía del bloque

Una característica importante de las cadenas de bloques es que los datos de transacciones pasadas no se pueden cambiar una vez que se han incluido en un bloque. Esto se debe a que cada bloque tiene un "hash de bloque" único, como una huella digital, que se usa para vincular los bloques uno tras otro. Nadie puede cambiar transacciones pasadas sin cambiar esa huella digital y la huella digital de CADA bloque que le sigue porque cada huella digital depende de la anterior.

Así que cada 'bloque' es simplemente un grupo de transacciones reunidas en un archivo junto con el 'hash de bloque' de ese bloque. Los bloques están encadenados porque cada uno hace referencia a la huella digital única del bloque anterior para formar un block_**chain**_ conectado.

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/block-anatomy-8ba3bea2.svg)

# Prueba de Conocimientos 4

¿Cuál es el propósito de un hash de bloque?

- [ ] Para cifrar los datos del bloque para que nadie pueda leerlos
- [ ] Para vincular cada bloque con el anterior y garantizar que los datos de transacciones anteriores no cambien
- [ ] Para garantizar que las transacciones se envíen a la dirección correcta
- [ ] Para garantizar que la cadena de bloques permanezca descentralizada

# Dentro de un Bloque

Recuerde, los datos de "bloque" son solo un grupo de transacciones juntas. Mirando dentro de un solo bloque, vemos una lista de transacciones y algunos datos sobre quién creó el bloque.

De nuestro ejemplo anterior cuando discutimos el libro mayor de blockchain, ambas transacciones pueden agruparse dentro de un bloque o distribuirse en múltiples bloques a lo largo del tiempo. Pero no importa en qué bloque estén incluidos , eventualmente todos se agregan al libro de contabilidad general de la cadena de bloques.

- Alice envía 5 ETH a Bob
- Bob envía 2 ETH a Charlie

Recuerde que cada bloque también debe hacer referencia al "hash de bloque" del bloque anterior para vincular la cadena de bloques.

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/inside-a-block-b11c74ce.svg)

# Prueba de Conocimientos 5

La siguiente información está contenida en un bloque:

- [ ] Toda la información contenida en los bloques anteriores, por lo que la cadena de bloques está siempre actualizada
- [ ] Cualquier cosa relevante para la cadena de bloques ya que el tamaño del bloque es ilimitado
- [ ] Datos de la transacción y una referencia al bloque anterior
- [ ] Todos los datos de transacciones generados dentro de un marco de tiempo fijo

# Transacciones individuales

Los datos en cualquier cadena de bloques son simplemente una lista de "transacciones", registros de moneda movidos entre usuarios. Cada transacción debe estar firmada por la "firma digital" del remitente para que sea válida.

Esto es lo que haces cuando confirmas una transacción con una billetera, estás firmando con tu firma digital para autorizar una transacción. Puede considerarlo como el equivalente digital de firmar físicamente un cheque, un recibo o una transacción con tarjeta de crédito.

Las transacciones pueden ser simples, como enviar activos criptográficos, o más complejas, como intercambiar activos criptográficos o incluso implementar un código especial que se ejecuta cuando se activa, llamados "contratos inteligentes".

Finalmente, cada transacción tiene un identificador digital único, llamado "hash de transacción", que no tiene ninguna otra transacción. Esto facilita la referencia a cualquier transacción individual más adelante y garantiza que los detalles de esa transacción no se puedan cambiar después.

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/individual-transactions-2f6bf118.svg)

# Prueba de Conocimientos 6

Los datos en una cadena de bloques son simplemente una lista de transacciones agrupadas en bloques. Ejemplos de tales transacciones podrían incluir:

- [ ] Enviar o recibir criptoactivos
- [ ] Cambiar el tamaño del bloque
- [ ] Edición de datos anteriores de blockchain
- [ ] Todo lo anterior

# Direcciones de usuario

Una 'dirección' es un identificador público que cualquiera puede buscar en la cadena de bloques. Al igual que una dirección de correo electrónico, cualquiera puede enviarle fondos, pero solo alguien que controle la "clave privada" puede desbloquear y usar los fondos en esa dirección.

En Ethereum, una dirección siempre comienza con _0x__________ y tiene 42 caracteres de números y letras derivados de la "clave pública" de esa dirección.

Al mirar una sola transacción en un explorador de bloques, podemos ver las direcciones From : y To:. Esto no nos dice quiénes son las _personas_ que controlan esas direcciones, pero permite que cualquier usuario rastree el movimiento de las criptomonedas en todo el libro mayor de la cadena de bloques.

![](https://app.banklessacademy.com/lesson/images/blockchain-basics/user-addresses-e9456d37.svg)

# Prueba de Conocimientos 7

¿Qué es cierto sobre las direcciones de blockchain?

- [ ] Son los identificadores públicos de diferentes entidades en una cadena de bloques
- [ ] Siempre comienzan con _0x_ en Ethereum
- [ ] Quien controle la clave privada de una dirección puede usar los fondos en esa dirección
- [ ] Todo lo anterior
