---
TITLE: Blockchains Layer 1
DESCRIPTION: ¡Entiende cómo funcionan las blockchains Layer 1 y conoce sus límites!
LANGUAGE: Español
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

Los problemas aparecen cuando más usuarios quieren usar una red `blockchain` de los que esta puede atender. La alta demanda de `espacio de bloque` puede ser pasajera o durar tanto como las ganas de usar esa blockchain. Cuando hay mucha demanda, los usuarios pujan entre sí para que sus transacciones se procesen rápido, las tarifas suben y quienes tienen menos capital quedan fuera.

Esta lección explica por qué Ethereum y otras blockchains están sujetas al `trilema de la blockchain`, cómo ese trilema origina los problemas anteriores y qué implica para los planes de Ethereum. Veremos las decisiones que han tomado varias blockchains frente al trilema y qué significan para los Exploradores de la Academy.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# El trilema de la blockchain

Como sugiere la palabra _**tri**_lema, hay tres cualidades de las blockchains que compiten entre sí e impiden optimizarlas las tres a la vez.

Son: la `seguridad`, la `escalabilidad` y la `descentralización`.

Para servir de base imparcial a un sistema monetario mundial, una blockchain debería destacar en las tres. Un sistema monetario necesita estar a salvo del fraude, protegido de la censura gracias a la descentralización, y ser escalable para atender a más de 8 mil millones de personas.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

El trilema de la blockchain describe la relación entre:

- [ ] Ethereum, Bitcoin y las altcoins

> ℹ️ ¡Inténtalo de nuevo! El trilema enfrenta cualidades dentro de una blockchain, no blockchains entre sí.

- [ ] la seguridad, la censura y el fraude

> ℹ️ ¡Inténtalo de nuevo! La seguridad es una de las tres, pero la censura y el fraude son amenazas, no cualidades del trilema.

- [x] la descentralización, la escalabilidad y la seguridad

> ℹ️ ¡Correcto! Estas tres cualidades compiten entre sí, lo que impide que una blockchain las optimice todas a la vez.

- [ ] la seguridad, la velocidad y las tarifas bajas

> ℹ️ ¡Inténtalo de nuevo! Velocidad y tarifas forman parte de la escalabilidad, que es solo una de las tres cualidades.

# Seguridad y consenso

La seguridad es el requisito más básico de una blockchain pública. Las computadoras de una red deben ponerse de acuerdo sobre qué transacciones ocurrieron de verdad para poder trabajar juntas; ese acuerdo se llama `consenso`. Una blockchain es segura si los atacantes no pueden impedir que la red llegue a esa verdad común. Los algoritmos de consenso se diseñan para resistir esos ataques.

Las cadenas como Bitcoin, que usan `prueba de trabajo`, protegen ese acuerdo haciendo muy competitiva la producción de bloques: cada productor compite por resolver un problema matemático. El primero en lograrlo gana el derecho a crear el bloque siguiente y la `recompensa de bloque` que lo acompaña. Reescribir la historia reciente de la cadena exigiría inversiones enormes en cómputo y energía, así que un atacante gastaría más de lo que ganaría.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

El consenso de una blockchain de criptomonedas es:

- [ ] El proceso por el que los nodos acuerdan qué pasó onchain

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación correcta.

- [ ] Importante para el ecosistema de la cadena, para evitar fraudes

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación correcta.

- [ ] Algo asegurado mediante incentivos económicos

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación correcta.

- [x] Todas las anteriores

> ℹ️ ¡Correcto! El consenso es cómo los nodos acuerdan la verdad, y los incentivos económicos hacen que atacarlo cueste más de lo que rinde.

# Seguridad y ataques

Una forma posible de atacar el consenso es el `ataque del 51 %`: quien controla la mayoría del poder de consenso de una red puede revertir transacciones recientes para gastar dos veces las mismas monedas, o censurar las nuevas. No puede falsificar firmas ni gastar fondos ajenos. Esa mayoría equivale al 51 % del poder de cómputo en prueba de trabajo y al 51 % de la `participación` en prueba de participación, una inversión enorme. Y en prueba de participación, una trampa demostrable, como firmar dos bloques contradictorios, destruye esa participación (se llama `slashing`): el atacante perdería más de lo que ganaría.

En la `prueba de participación`, el productor del bloque no se elige por competencia sino al azar. Igual que en prueba de trabajo, el algoritmo asegura que ninguna entidad pueda “ganar” con regularidad el derecho a crear un `bloque` nuevo.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

El objetivo final de un ataque del 51 % es:

- [ ] Interrumpir las operaciones de minería

> ℹ️ ¡Inténtalo de nuevo! El ataque apunta al consenso: revertir o censurar transacciones, no estorbar a los mineros.

- [x] Gastar dos veces las monedas o censurar transacciones

> ℹ️ ¡Correcto! La mayoría del poder de consenso permite revertir transacciones recientes o bloquear las nuevas.

- [ ] Crear una criptomoneda nueva

> ℹ️ ¡Inténtalo de nuevo! Cualquiera puede crear una criptomoneda sin atacar una red existente.

- [ ] Eliminar al otro 49 %

> ℹ️ ¡Inténtalo de nuevo! Los demás participantes no desaparecen. La mayoría se usa para revertir o censurar transacciones.

# Escalabilidad: la capacidad

La `escalabilidad` es la aptitud de una blockchain para procesar muchas transacciones rápido. Dos partes la determinan: la capacidad y la finalidad.

1) `capacidad de transacciones`: cuántas transacciones puede procesar una blockchain a la vez, medida normalmente en transacciones por segundo (`TPS`).

Imagina mucha gente esperando en una parada de autobús, con más llegando cada minuto: todos quieren viajar. Pero en cada autobús solo caben unos cuantos. Para vaciar la parada más rápido harían falta autobuses más grandes o más frecuentes. Con las transacciones pasa igual: compiten por el poco `espacio de bloque` que hay en cada bloque. Puedes verlo con datos en vivo en [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

¿Qué es cierto en la analogía de la parada de autobús?

- [ ] Las personas (transacciones) se agrupan en autobuses (bloques)

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación correcta.

- [ ] En cada autobús (bloque) cabe un número limitado de personas

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación correcta.

- [ ] Mover más personas exige autobuses más grandes o más frecuentes

> ℹ️ ¡Inténtalo de nuevo! Es cierto, pero no es la única afirmación correcta.

- [x] Todas las anteriores

> ℹ️ ¡Correcto! Las transacciones llenan el espacio de bloque como los pasajeros llenan los autobuses. Vaciar la fila exige bloques mayores o más seguidos.

# Escalabilidad: la finalidad

El segundo aspecto de la escalabilidad es:

2) `finalidad`: ¿cuándo podemos estar razonablemente seguros de que una transacción no cambiará ni se revertirá?

En cadenas de prueba de trabajo como Bitcoin, la finalidad se mide en bloques: cuantos más bloques se añaden después de tu transacción, más seguro puedes estar de que no se revertirá. Recuerda que un consenso seguro encarece mucho cambiar bloques pasados, y el costo crece cuanto más atrás se intente. Bitcoin produce un `bloque` cada 10 minutos, así que esperar varias confirmaciones toma cerca de una hora. La prueba de participación de Ethereum va por otro camino: los `validadores` votan para finalizar bloques, y tras unos 13 minutos (dos `épocas` de votos) la transacción es final.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# La descentralización reparte el poder

La `descentralización` es el último pilar del trilema: pasar el control y las decisiones de una sola entidad a una red distribuida entre muchas. Es el principio que hace que las blockchains sean redes `sin permisos` y `resistentes a la censura`: cualquiera puede usarlas y cualquiera puede crear software sobre ellas.

Plataformas centralizadas como Facebook o Twitter pueden desactivar una cuenta cuando quieran. Muchos streamers influyentes de Twitch o TikTok fueron expulsados sin motivo, y recuperar la cuenta suele ser largo y penoso. Sin descentralización, el `registro` de una blockchain sería una simple hoja de cálculo en la computadora de un banco, y los banqueros decidirían quién abre una cuenta. Una red `sin permisos` significa que la autoridad está bastante repartida: no hay forma de quitarle el acceso a nadie.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

¿Cuál de estas afirmaciones NO es cierta sobre la descentralización?

- [ ] Hace que las blockchains resistan la censura

> ℹ️ ¡Inténtalo de nuevo! Esta afirmación es cierta: sin una entidad que mande, nadie puede censurar la red.

- [ ] Hace que las blockchains funcionen sin permisos

> ℹ️ ¡Inténtalo de nuevo! Esta afirmación es cierta: con la autoridad repartida, nadie puede quitarte el acceso.

- [x] Ayuda a los poderes autoritarios a mantener el control

> ℹ️ ¡Correcto! Esto NO es cierto: la descentralización hace lo contrario, reparte el control lejos de cualquier entidad única.

- [ ] Cualquiera puede usar los sistemas sin permisos

> ℹ️ ¡Inténtalo de nuevo! Esta afirmación es cierta: sin permisos significa que a nadie se le puede negar el acceso.

# ¿Está descentralizado?

Que algo esté descentralizado no es una respuesta de sí o no. ¿Diez entidades al mando son descentralización? ¿Y mil? ¿Un millón? No hay un límite estándar para decir que algo está lo bastante descentralizado, así que conviene verlo como un espectro. En vez de solo blanco y negro, hay muchos grises entre medio.

Podemos decir que algo está “más o menos descentralizado que otra cosa”, en lugar de “centralizado o descentralizado”. Un sistema monetario neutral necesita mucha descentralización para resistir la censura de un Estado. Las blockchains más nuevas suelen cambiar descentralización por escalabilidad, pero así quedan expuestas a las mismas presiones de gobiernos y sociedades que sufren las plataformas centralizadas. Pueden acabar censurando igual que las redes sociales centralizadas.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Cada blockchain usa un grado distinto de descentralización.

- [x] Verdadero

> ℹ️ ¡Correcto! La descentralización es un espectro: cada blockchain elige cuánta cede a cambio de escalabilidad u otras metas.

- [ ] Falso

> ℹ️ ¡Inténtalo de nuevo! La descentralización es un espectro, y cada blockchain hace su propio balance dentro de él.

# Algunos ejemplos

Cada blockchain aborda el trilema a su manera y hace concesiones para centrarse en sus metas. Bitcoin y Ethereum priorizan seguridad y descentralización sobre escalabilidad, lo que da un `tiempo de finalidad` largo en Bitcoin y poco `espacio de bloque` en Ethereum. Cuando se dispara la demanda de `smart contracts`, sobre todo en DeFi, las tarifas de Ethereum suben; en el pico de 2021 una sola transacción podía costar decenas de dólares.

Esas tarifas altas abrieron la puerta a `Layer 1 alternativas` como BNB Chain, que priorizó la escalabilidad sobre la descentralización para lograr más `capacidad de transacciones` y tarifas más baratas. Cadenas de tercera generación como Solana usan métodos novedosos, pero todas siguen sujetas a estas restricciones básicas. La elección de cada cadena define su ecosistema.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# ¿Qué se puede hacer?

Si Ethereum prioriza seguridad y descentralización, ¿cómo puede escalar para atender a todos sus usuarios como la red financiera mundial que aspira a ser? La hoja de ruta exploró dos respuestas: las `Layer 2` y el `sharding`.

Las `Layer 2` aumentan la escalabilidad de Ethereum sin sacrificar las otras dos partes del trilema. Son una capa adicional encima de la cadena principal: se apoyan en ella para la seguridad, pero ofrecen tarifas más bajas y transacciones más rápidas. Las veremos a fondo en nuestra lección sobre Layer 2.

El `sharding` habría dividido la blockchain en varias cadenas paralelas, como sumar carriles a una carretera. Ethereum dejó ese plan por otro más simple: abaratar los datos de bloque para las Layer 2 (añadido en 2024) y subir la capacidad poco a poco.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Las Layer 2:

- [ ] Aportan su propia seguridad

> ℹ️ ¡Inténtalo de nuevo! Las Layer 2 se apoyan en la blockchain principal para su seguridad.

- [x] Aumentan la escalabilidad de la blockchain principal

> ℹ️ ¡Correcto! Las Layer 2 se asientan sobre la cadena principal y suman escalabilidad sin ceder seguridad ni descentralización.

- [ ] Suben las tarifas para los usuarios

> ℹ️ ¡Inténtalo de nuevo! Las Layer 2 hacen lo contrario: los usuarios pagan tarifas más bajas.

- [ ] Alargan el tiempo de finalidad

> ℹ️ ¡Inténtalo de nuevo! Las Layer 2 ofrecen transacciones más rápidas, no más lentas.

# El futuro de Ethereum

Ethereum sigue mejorando su escalabilidad sin sacrificar los otros aspectos del trilema. La Fusión hacia la `prueba de participación` (2022) redujo el consumo de energía de la red en más del 99 %, y en 2024 llegaron los datos de bloque baratos para las Layer 2. **Escalar es un trabajo continuo: cada mejora hace Ethereum más rápido y barato manteniendo la seguridad y la descentralización como principios.** La Ethereum Foundation tiene una página excelente sobre la [hoja de ruta de Ethereum](https://ethereum.org/roadmap/).

Mientras tanto, muchos protocolos `Layer 2` se construyen sobre Ethereum para atender la demanda sin cambiar el protocolo. Se apoyan en Ethereum para la seguridad descentralizada y aportan escalabilidad; ¡su diversidad forma un ecosistema descentralizado! Entre los `rollups` principales están Arbitrum, OP Mainnet y Base; Polygon PoS es una `cadena lateral` popular con seguridad propia.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Las mejoras de Ethereum incluyen:

- [ ] Usar Layer 2 y datos de bloque baratos para escalar

> ℹ️ ¡Inténtalo de nuevo! Es parte de las mejoras, pero no es la única.

- [ ] Mantener la descentralización y la seguridad como principios

> ℹ️ ¡Inténtalo de nuevo! Es parte de las mejoras, pero no es la única.

- [ ] Reducir el consumo de energía con la prueba de participación

> ℹ️ ¡Inténtalo de nuevo! Es parte de las mejoras, pero no es la única.

- [x] Todas las anteriores

> ℹ️ ¡Correcto! Las Layer 2 y los datos baratos suman escala, la prueba de participación bajó el consumo, y seguridad y descentralización siguen firmes.

# ¿Qué significa para los Exploradores?

Los usuarios necesitan tarifas bajas para aprender y explorar la tecnología con pocas barreras de entrada y errores baratos, sobre todo al empezar. La blockchain de Ethereum aún no es ideal, pero sus valores la convierten en una de las mejores candidatas para cumplir el sueño de un sistema financiero mundial. Con las Layer 2, los Exploradores pueden usar Ethereum sin pagar tarifas enormes y sumar su seguridad y descentralización a una escalabilidad mayor.

La siguiente lección explicará las soluciones `Layer 2` y cómo empezar. ¡Adelante, Exploradores!
