---
TITLE: Blockchains Layer 2
DESCRIPTION: Únete al ecosistema Layer 2 para acelerar tus transacciones y reducir las tarifas.
LANGUAGE: Español
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
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

Lo ideal para cualquier blockchain es ser lo más descentralizada, segura y escalable posible. Construir una que haga bien las tres cosas ha resultado un reto, todavía sin resolver. Ese reto tiene nombre: el `trilema de la blockchain`.

Bitcoin y Ethereum son bastante descentralizadas y seguras, pero no escalan bien, como se ve en las altas tarifas y las largas colas de transacciones cuando la red está ocupada. Para esquivar esto, los Exploradores pueden usar tecnologías que reducen mucho el costo de las transacciones y aumentan su velocidad. En conjunto se les llama soluciones de escalado de capa 2 (L2).

La `Lightning Network` es la solución de escalado más conocida de Bitcoin, y se apoya en `canales de pago` para escalar los pagos entre partes. Ethereum alivia el trilema con varias soluciones L2, respaldadas por el almacenamiento `blob`, barato y temporal, añadido a Mainnet en 2024 (una forma ligera del “sharding” que antes se planeaba).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Canales de pago

En la blockchain de Bitcoin, la Lightning Network usa canales de pago bidireccionales, que permiten a varias partes intercambiar BTC sin transaccionar en la cadena principal.

La arquitectura permite que dos usuarios abran un canal de pago entre ellos. Cada canal es solo entre dos partes, aunque los pagos pueden enrutarse por una red de canales conectados para llegar a usuarios lejanos. Entre la apertura y el cierre, las partes pueden moverse fondos. El micro-registro de cada participante se actualiza cuando ambos firman la transacción, lo que suele exigir que los nodos de ambas partes estén accesibles.
Cualquiera de las partes puede cerrar el canal en cualquier momento, transmitiendo a la blockchain la versión más reciente del micro-registro.

Los canales de pago no admiten interacciones avanzadas con `smart contract`, solo transacciones básicas entre pares.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Debes estar en línea para transaccionar con la Lightning Network de Bitcoin.

- [x] Verdadero

> ℹ️ ¡Correcto! Actualizar un canal de pago requiere la firma de ambos usuarios, así que los nodos de ambas partes suelen tener que estar accesibles.

- [ ] Falso

> ℹ️ ¡Inténtalo de nuevo! Las actualizaciones del canal necesitan firmas de ambas partes, así que sus nodos suelen tener que estar en línea.

# Soluciones de escalado de Ethereum

Los desarrolladores de Ethereum llevan trabajando en soluciones de escalado nativas casi desde que la red está en marcha.

La mayoría de la comunidad sostiene que, para ser una “solución de escalado de Ethereum”, un proyecto debe corregir las carencias de `escalabilidad` de Ethereum sin sacrificar su `seguridad` ni su `descentralización`. Para los usuarios, lo práctico es tener transacciones más rápidas y `gas` más barato que en la Mainnet de Ethereum. Para competir, algunas soluciones aceptan más concesiones en el trilema que otras.

Ethereum se define por su capacidad de smart contracts, así que sus soluciones de escalado también deben heredarla. De poco sirven transacciones rápidas y baratas si los usuarios no pueden acceder a sus `dApps` favoritas desde una Layer 2.

# Knowledge Check 2

Las soluciones de escalado de Ethereum:

- [ ] usan canales de pago para escalar la red.

> ℹ️ ¡Inténtalo de nuevo! Los canales de pago son el enfoque de la Lightning Network de Bitcoin. Ethereum escala con soluciones como los rollups.

- [ ] no pueden admitir interacciones con smart contracts.

> ℹ️ ¡Inténtalo de nuevo! El soporte de smart contracts es esencial: los usuarios necesitan sus dApps favoritas desde una Layer 2.

- [x] deben mejorar la escalabilidad sin debilitar el resto del trilema.

> ℹ️ ¡Correcto! Una verdadera solución de escalado de Ethereum resuelve la escalabilidad sin sacrificar seguridad ni descentralización.

- [ ] permiten transacciones más rápidas a cambio de más gas.

> ℹ️ ¡Inténtalo de nuevo! Las soluciones de escalado buscan transacciones más rápidas Y gas más barato que la Mainnet de Ethereum.

# Conectar Layer 1 y Layer 2

Como vimos en [Conceptos Básicos de Blockchain](https://app.banklessacademy.com/lessons/blockchain-basics), las blockchains son bases de datos llamadas `registros`, que anotan una lista cronológica de transacciones protegida por criptografía. Las L1 y las soluciones L2 son blockchains por derecho propio, con sus propias bases de datos de direcciones y datos.

Se usa una infraestructura llamada `bridges` para transferir información entre bases de datos de distintas blockchains. Por ejemplo, si imaginas la Mainnet de Ethereum (o cualquier otra blockchain `L1`) como una isla, y otra blockchain o tu solución de escalado preferida como otra, un bridge cripto es el nombre genérico de la autopista que conecta esas dos islas digitales.

La tecnología es muy compleja, pero desde la perspectiva del usuario final el proceso es tan simple como elegir un destino.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Cadenas laterales

Una `cadena lateral` es una blockchain separada que corre independiente de Ethereum, pero conectada a Mainnet por un `bridge`. Para migrar tokens, los bloqueas en un contrato bridge en Mainnet y se emiten tokens equivalentes en la cadena lateral. Ojo: esto NO da a tus fondos la seguridad de Ethereum; el bridge y la cadena lateral dependen de sus propios validadores. Si alguno se ve comprometido (como el hackeo del bridge de Ronin en 2022, de 625 millones de dólares), los fondos bloqueados pueden robarse.

Las cadenas laterales siguen sujetas al trilema. Su `gas` más barato y sus transacciones más rápidas vienen de un conjunto de validadores más pequeño pero más potente: cambian algo de descentralización y seguridad por escalabilidad.

Cadenas laterales como Polygon PoS publican instantáneas (“checkpoints”) en Ethereum con regularidad. Eso da a su historial una forma de finalidad y permite probar saldos al salir por el bridge, pero no hace sus fondos tan seguros como los de Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Las cadenas laterales:

- [ ] bloquean los tokens migrados en un contrato en Mainnet.

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [ ] tienen tarifas de gas más baratas que Mainnet.

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [ ] tienen más riesgos de centralización que Mainnet.

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación verdadera.

- [x] Todas las anteriores.

> ℹ️ ¡Correcto! Bloquean los tokens en Mainnet y cobran menos, pero su conjunto reducido de validadores cambia descentralización por velocidad.

# Rollups

Los protocolos Layer 2 con tecnología de rollup se mantienen cerca del nivel de seguridad de Ethereum Mainnet.

Como las cadenas laterales, los rollups permiten ejecutar transacciones fuera de Mainnet. Después se “enrollan” en un solo lote, y los datos del lote se publican en Ethereum en paquetes baratos y temporales llamados `blobs`, introducidos en la actualización Dencun de marzo de 2024. Los blobs son la razón principal de que las tarifas de L2 bajaran a unos centavos o menos.

Para probar que es lo bastante seguro como para procesar transacciones en nombre de Mainnet, el rollup debe aportar “pruebas convincentes” de que las transacciones de cada lote son seguras y válidas. Esa evidencia va dentro del rollup y la verifica el contrato bridge en la Mainnet de Ethereum.

Hoy hay dos métodos capaces de aportarla: los `rollups optimistas` y los `rollups ZK`. Veamos ambos de cerca.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Rollups optimistas

Protocolos L2 como Optimism, Base y Arbitrum usan `rollups optimistas` como arquitectura de escalado. Se llaman así porque la información del lote se considera válida mientras no se demuestre lo contrario: se hace una suposición optimista.

Para evitar abusos, suele haber una demora de varios días cuando pides sacar fondos de la L2 hacia Mainnet. En ese plazo, los validadores del bridge pueden publicar una `prueba de fraude` para cancelar el retiro. Este mecanismo se parece a los procesos de compensación bancarios, pero es descentralizado.

Nota: servicios de bridge externos, como Across y Relay, mueven fondos en minutos en vez de días. Estos bridges rápidos te adelantan el dinero de su propio fondo, así que asumes el riesgo de sus smart contracts y de sus proveedores de fondos, una capa extra de confianza frente al bridge propio del rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Con los rollups optimistas, las transacciones se consideran válidas mientras no se demuestre lo contrario.

- [x] Verdadero

> ℹ️ ¡Correcto! La suposición optimista es que los lotes son válidos, con un periodo de disputa donde una prueba de fraude puede cancelar un retiro.

- [ ] Falso

> ℹ️ ¡Inténtalo de nuevo! De esa suposición optimista es de donde estos rollups toman su nombre.

# Rollups ZK

Los `rollups ZK` son un tipo de rollup basado en tecnología de conocimiento cero. A diferencia de los `rollups optimistas`, confirman la legitimidad del lote sin depender de que ciertos usuarios busquen indicios de fraude. En su lugar envían una prueba matemática, la `prueba de validez`, que deja a Ethereum comprobar todo un lote sin rehacer el trabajo.

La gran ventaja es el `tiempo de liquidación`, también llamado `finalidad de la transacción`. En vez de un periodo de disputa de varios días, permiten acceder a los fondos en Mainnet en pocas horas, en cuanto se envía la siguiente prueba de validez. Pese al nombre, aquí el conocimiento cero no se usa para privacidad: las transacciones de los grandes rollups ZK son tan públicas como en Mainnet.

Algunos protocolos importantes usan esta tecnología para construir sus soluciones de escalado, como ZKsync, Starknet y Linea. Es pronto en su desarrollo, pero tiene mucho potencial.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Comparados con los rollups optimistas, los rollups ZK:

- [ ] mantienen privadas las transacciones en Mainnet.

> ℹ️ Pese al nombre “conocimiento cero”, los grandes rollups ZK son tan transparentes como Mainnet: las pruebas dan validez, no privacidad.

- [x] usan pruebas de validez y evitan el periodo de disputa.

> ℹ️ ¡Correcto! Una prueba matemática confirma cada lote, así que la finalidad en Mainnet no exige esperar una ventana de prueba de fraude.

- [ ] dependen de vigilantes que envían pruebas de fraude.

> ℹ️ Así funcionan los rollups optimistas. Los rollups ZK prueban la validez por adelantado.

# Compatibilidad de dApps entre cadenas

Al comparar `rollups optimistas` y `rollups ZK`, a casi todos los usuarios les preocupan los tiempos de retiro. Pero como los bridges externos resuelven esa demora, no debería pesar mucho al elegir qué solución de escalado explorar.

Muchos rollups optimistas son “equivalentes a la EVM”: la L2 admite de forma nativa cualquier dApp que corra en la `Máquina Virtual de Ethereum` (EVM). Esa equivalencia permite desplegar cualquier smart contract que ya estuviera en Mainnet, así los usuarios de L2 acceden a sus dApps favoritas.

Cadenas laterales como Polygon PoS también corren la EVM de forma nativa, y la mayoría de los rollups ZK modernos (ZKsync, Linea, Scroll) son equivalentes a la EVM o casi. Por eso tus dApps favoritas de Ethereum están disponibles en casi todo el ecosistema L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Las soluciones de escalado equivalentes a la EVM pueden reutilizar fácilmente los smart contracts desplegados en Mainnet.

- [x] Verdadero

> ℹ️ ¡Correcto! La equivalencia con la EVM permite desplegar en la L2 cualquier smart contract que corra en Mainnet, con sus dApps familiares.

- [ ] Falso

> ℹ️ ¡Inténtalo de nuevo! Reutilizar los smart contracts de Mainnet es justo el punto de la equivalencia con la EVM.

# Repaso de la lección

Las blockchains L1 como Bitcoin y Ethereum están limitadas hoy por el `trilema de la blockchain`. Los `canales de pago` en Bitcoin, o las cadenas laterales y los rollups en Ethereum, ayudan a escalar y a aliviar el trilema.

Los `bridges` conectan las blockchains L1 con las `cadenas laterales` y los `rollups`, y el funcionamiento del contrato bridge influye en las propiedades de la red conectada.

Los fondos de una cadena lateral no heredan la `seguridad` de Ethereum: los tokens migrados quedan bloqueados en un contrato en Mainnet, pero su protección depende de los validadores y del contrato bridge de la propia cadena lateral. Estas cadenas tienen un conjunto de validadores pequeño pero potente, que les permite acelerar las transacciones y bajar el gas a costa de descentralización y seguridad.

Los rollups también validan y procesan sus transacciones, pero su contrato bridge les exige “pruebas convincentes” de validez antes de dar los datos por buenos. Así sostienen un nivel de `seguridad` y `descentralización` acorde con Ethereum. Hay dos métodos: los `rollups optimistas` esperan varios días antes de liquidar sus lotes en Mainnet, tiempo en el que los validadores del bridge detectan y reportan fraudes; los `rollups ZK` dan garantía matemática de legitimidad con tecnología `zero-knowledge`.

Hoy tanto los rollups optimistas como los ZK modernos ofrecen alta compatibilidad de smart contracts con la Mainnet de Ethereum, lo que permite a las dApps desplegarse fácilmente en sus redes. Muchos creen que los rollups ZK serán la solución de escalado del futuro, por su finalidad rápida y sus garantías de validez.

# Empieza tu viaje por Layer 2 con Optimism o Base 🙂

Optimism y Base, ambos rollups optimistas equivalentes a la EVM, son grandes L2 para empezar. Usar dApps en cualquiera de las dos se siente como en L1, solo que más barato y rápido, y ambas usan ETH como gas. ¡Tu próxima misión es el primer paso de tu viaje por Optimism o Base!

Ambos ecosistemas están muy influidos por los valores de Ethereum, y Optimism es conocido por [financiar bienes públicos](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) que aportan valor al ecosistema, como la educación gratuita de Bankless Academy.

Optimism y Base no son solo plataformas que usan rollups optimistas: muestran cómo las blockchains pueden resolver problemas reales y abrir nuevas formas de transaccionar y coordinarse. Y eso debería hacernos a todos optimistas. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
