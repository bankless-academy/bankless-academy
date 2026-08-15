---
TITLE: Intercambios descentralizados
DESCRIPTION: ¡Descubre cómo los smart contracts permiten intercambiar tokens sin permisos!
LANGUAGE: Español
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/decentralized-exchanges
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

# ¿Qué es un intercambio descentralizado?

Los intercambios descentralizados (DEX) son mercados onchain donde los Exploradores intercambian criptomonedas con otros usuarios de forma segura, sin perder la autocustodia de los fondos de su billetera. Estas operaciones entre pares usan smart contracts públicos que conectan a los usuarios con grandes bóvedas comunes de tokens: los `pools de liquidez`. Hay DEX en casi toda blockchain, incluidas la Layer 1 y las Layer 2 de Ethereum.

Intercambiar tokens es una parte esencial de usar `DeFi`. Ahí encontrarás más variedad y utilidad de tokens que en cualquier otro tipo de plataforma. Algunos compran tokens para acceder a productos y servicios onchain. Otros invierten. Algunos tokens dan derecho a voto sobre el rumbo de un proyecto, ¡como las acciones de una empresa tradicional! Sea cual sea tu motivo, visitarás DEX con regularidad en DeFi.

Veamos cómo funcionan y cómo pueden servirte mejor.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Intercambios centralizados y descentralizados

Veamos qué distingue la tecnología de una plataforma centralizada (como Coinbase, Binance, Kraken) de la de un intercambio descentralizado (como Uniswap, PancakeSwap).

Las plataformas centralizadas (`CEX`) permiten operar e invertir en criptomonedas sin tocar el ecosistema blockchain. Como tu cuenta está registrada en la CEX, tus claves privadas y tus fondos quedan bajo su custodia: dependes de su gestión, sus reglas y los riesgos de su modelo de negocio.

Los intercambios descentralizados (`DEX`) permiten operar con criptomonedas en total autocustodia, el propósito original de las blockchains. El modelo entre pares te deja ser consumidor y proveedor a la vez, con acceso a oportunidades financieras antes reservadas al mundo financiero. El sistema es transparente y resistente a la censura: nadie puede congelar tu acceso ni revertir tus operaciones. El riesgo de hackeo sigue existiendo, como veremos más adelante.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

¿Cuál de estas afirmaciones sobre las plataformas de intercambio de criptomonedas es cierta?

- [ ] No hay ningún equipo detrás de un DEX.

> ℹ️ Los DEX sí tienen equipos de desarrollo, pero su influencia sobre el proyecto es limitada.

- [ ] En una CEX solo puedes perder fondos por una mala operación.

> ℹ️ Las CEX también tienen riesgos. En 2022 la plataforma FTX colapsó y casi todos sus usuarios perdieron sus depósitos.

- [x] Los DEX permiten operar en autocustodia; las CEX, no.

> ℹ️ Salvo que se indique lo contrario, una CEX posee tus claves privadas.

# Aplicaciones descentralizadas

Un DEX es un tipo de `dApp`, una aplicación descentralizada que corre sobre una blockchain. Para que una aplicación de internet sea “descentralizada” debe permitir su uso a cualquiera sin distinción, procesar las interacciones sin necesidad de otra persona y estar escrita en código público.

Los servicios de una dApp funcionan con smart contracts: líneas de código que reciben una acción onchain y devuelven una respuesta onchain predecible. La Ethereum Foundation los compara con una máquina expendedora: el usuario marca el número del producto que quiere, pone el dinero justo y recibe el resultado esperado (su snack) sin que otra persona intervenga.

Los smart contracts de un DEX admiten órdenes variadas: intercambiar tokens, votar, o añadir y retirar `liquidez`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Aplicaciones descentralizadas (continuación)

Los DEX siguen la misma lógica: reciben el token que entregas y devuelven el que quieres. Otros ejemplos de dApps:

🎟️ **dApps de voto:** asignan el voto del usuario a una entidad.

📦 **dApps de bridge:** mueven cripto de una blockchain a otra.

🤝 **dApps de préstamo:** prestan a quien cumple los requisitos.

Los smart contracts son cuentas de Ethereum: tienen dirección y saldo, y actúan de forma automática cuando una transferencia y una orden los activan. Un DEX es una cuenta de Ethereum programada con varias funciones.

Las `dApps` suelen usar un sitio web como interfaz visual hacia los smart contracts. ¡Si el sitio cae, con algo de experiencia puedes acceder igual al contrato!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

¿Qué propiedades necesita una dApp para considerarse descentralizada?

- [ ] Sin permisos: acceso abierto a todos los usuarios.

> ℹ️ Es una cualidad de una dApp, pero no es la única.

- [ ] Autónoma: las interacciones no necesitan intermediario.

> ℹ️ Es una cualidad de una dApp, pero no es la única.

- [ ] Transparente: el código del smart contract es público.

> ℹ️ Es una cualidad de una dApp, pero no es la única.

- [x] Todas las anteriores.

> ℹ️ Las dApps de Ethereum destacan por ser sin permisos, autónomas y transparentes.

# Creadores de mercado automatizados

En los mercados tradicionales y las `CEX`, tu custodio usa un `libro de órdenes`: una base de datos con ofertas de compra y venta. La CEX cruza tu oferta con la de otra persona. Suele cobrarte una comisión fija o proporcional, y te quedas con la duda de si ese método de emparejamiento, que nadie publica, te consiguió el mejor precio.

La mayoría de los `DEX` usan la tecnología de creador de mercado automatizado (`AMM`), el diseño más común para intercambiar tokens: un sistema que fija el precio de tu operación con un algoritmo público. Algunos DEX más nuevos usan libros de órdenes o sistemas basados en intenciones. Como el algoritmo AMM es de código abierto, cualquiera puede entenderlo, copiarlo y mejorarlo, lo que genera competencia sana e innovación constante.

Los AMM encaminan las operaciones a través de `pools de liquidez`, en lugar de cruzar directamente las ofertas de los usuarios. Estas bóvedas comunes acumulan y reparten tokens según las interacciones, con cada paso visible en la blockchain pública.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

¿Qué ventaja tienen los AMM frente a un libro de órdenes tradicional?

- [ ] La operación con un AMM es más rápida que con un libro de órdenes.

> ℹ️ Si contamos el tiempo de confirmación de la red, no siempre es cierto.

- [ ] Los AMM te conectan directamente con el otro usuario.

> ℹ️ Los AMM encaminan las operaciones por bóvedas comunes, los pools de liquidez, no directamente entre usuarios.

- [x] Puedes detectar y evitar operaciones desequilibradas de terceros.

> ℹ️ La transparencia de los AMM hace mucho más difícil que una plataforma oculte acciones maliciosas, ¡o que un usuario las intente!

# Intercambios de tokens

En la blockchain, los intercambios de criptomonedas se llaman `intercambios de tokens`. Estas interacciones con smart contracts convierten una criptomoneda en otra usando los `pools de liquidez` de un AMM. Al formar una `ruta de intercambio`, un camino por los pools adecuados, el smart contract del DEX cambia tu token de entrada por el que quieres. Como un pool suele tener solo dos tokens, y no todos los `pares de tokens` tienen pool, una ruta puede pasar por varios.

Para que un smart contract acceda a nuestra billetera, le damos permiso para retirar fondos hasta un monto definido (o ilimitado). Estas `autorizaciones de token` dejan que contratos de confianza operen sin nuestra clave privada. Darlas cuesta gas, así que quedan abiertas para el futuro: una razón para operar desde una billetera y guardar en otra. ¡Aprende a revisarlas y revocarlas en [Gestiona las autorizaciones de tokens](https://app.banklessacademy.com/lessons/managing-token-allowances)!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Intercambios de tokens (continuación)

Veamos un ejemplo para entender el proceso de permiso e intercambio: un cambio de USDC a OP en Velodrome, un gran DEX de la red Optimism. Esta operación suele pasar por dos pools, porque el `pool de liquidez` USDC/OP no es tan eficiente en costos:

1. Primero le das al smart contract de Velodrome el permiso para retirar USDC de tu billetera.
2. Envías tu solicitud de intercambio a Velodrome.
3. La transacción se acepta: Velodrome retira de tu billetera el monto de USDC indicado y lo lleva al pool USDC/ETH. La cantidad equivalente de ETH sale de ese primer pool y pasa al pool ETH/OP. Por último, los OP van del segundo pool a la dirección de tu billetera.

El intercambio está completo. ¡Tus USDC se convirtieron en OP, pasando por ETH!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

Un AMM puede encaminar una operación por varios pools de liquidez, todo en una sola transacción.

- [x] Verdadero

> ℹ️ ¡Correcto! Puede que pagues una tarifa de red más alta, pero las acciones se agrupan en una sola transacción.

- [ ] Falso

> ℹ️ Incorrecto, revisa la diapositiva anterior para entender por qué.

# ¿Qué es la liquidez?

En cripto, la liquidez es la capacidad de un mercado para permitir compras y ventas de activos digitales a precios justos. Con liquidez alta, los precios son más estables; con liquidez baja, más volátiles. Como los usuarios buscan precios justos, los `DEX` intentan tener mucha liquidez en todos sus pools.

Mucha liquidez significa una gran cantidad de tokens en el pool, normalmente repartida al 50/50 en valor entre los dos tokens que los usuarios intercambian. Por ejemplo, un pool USDC/ETH atiende todas las operaciones de ese `par de tokens` en la plataforma.
Cuando hay más tokens, cada operación altera menos ese equilibrio 50/50, lo que ayuda a que los precios se mantengan estables. Cuánto desequilibra una operación ese balance se conoce como `impacto en el precio`.

Como Explorador, quieres el menor impacto en el precio posible, ¡para conseguir el mejor trato! Es decir, quieres liquidez alta y equilibrada.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Proveedores de liquidez

Buscar una `liquidez` alta es clave para el éxito de un DEX, pero como en el ecosistema cripto solo hay cierta cantidad, cada DEX compite por captar la mayor parte posible. ¿De dónde sale esa liquidez?

En un ecosistema descentralizado, los ciudadanos de DeFi tienen incentivos para aportar liquidez a un pool y subir el TVL (valor total bloqueado) de la plataforma. Las comisiones que pagan quienes operan por el pool se reparten entre los LP (proveedores de liquidez) según la liquidez aportada. Sí, leíste bien: al prestar tus tokens a un pool de un DEX, puedes generar ingresos pasivos.

Ser `LP` implica varias consideraciones que veremos en futuros contenidos. Por ahora, ten claro que los grandes APR (tasas anuales) que muestran los pools no están garantizados, y que puede haber pérdidas.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Completa la frase: “Cuando la liquidez es __________.”

- [ ] alta, la volatilidad es alta.

> ℹ️ Incorrecto, inténtalo de nuevo.

- [ ] baja, la volatilidad es baja.

> ℹ️ Incorrecto, inténtalo de nuevo.

- [x] baja, la volatilidad es alta.

> ℹ️ ¡Muy bien! La liquidez y la volatilidad suelen moverse en sentido contrario.

# Knowledge Check 6

¿Cómo incentivan los DEX a los usuarios a aportar liquidez?

- [ ] Un seguro contra las pérdidas en las operaciones.

> ℹ️ Ni las CEX ni los DEX te protegen de las pérdidas de una mala inversión.

- [x] Una parte de las comisiones y/o tokens de bonificación.

> ℹ️ Las comisiones por usar el DEX suelen repartirse entre varias partes, incluidos los LP. Algunas plataformas añaden bonificaciones.

- [ ] Acceso a pools de liquidez privados.

> ℹ️ No existen los pools de liquidez privados; con tan poco tráfico no darían retornos suficientes.

- [ ] Todas las anteriores.

> ℹ️ Aquí solo hay una respuesta correcta, ¿sabes cuál es?

# Comisiones de las plataformas

Tanto las CEX como los DEX cobran por su servicio, y usar la blockchain tampoco es gratis. Cinco costos a tener en cuenta al elegir plataforma.

🏷️ **Comisiones de plataforma:** las CEX fijan las suyas; en un DEX varían según el pool (a menudo una fracción de porcentaje). La diferencia clave: las del DEX son visibles onchain para cualquiera.

🌐 **Tarifas de red:** la blockchain cobra gas además de la transacción de la dApp. Usa la red en horas tranquilas y consulta el precio en [Etherscan](https://etherscan.io/gastracker). En Layer 2 es mucho más barato: compara redes en [growthepie](https://www.growthepie.com/).

📦 **Comisiones de bridge:** las CEX y los bridges cobran por mover cripto de una red a otra. En las CEX, revisa su información; las dApps de bridge muestran una estimación antes de confirmar.

💹 **Tipos de cambio:** al comprar cripto directamente con dinero fiat en una CEX o un DEX, desconfía de los tipos que no reflejen el precio de mercado.

🧊 **Deslizamiento:** los precios se mueven rápido, así que los DEX dejan margen de fluctuación: el `deslizamiento` (ajustable, normalmente 0,5 a 2 %). Puedes perder hasta ese valor, pero si lo pones muy bajo la operación se rechaza.

Investiga siempre por tu cuenta para entender los costos y los compromisos de cada plataforma.

# Ventajas de los DEX

Hemos visto mucha teoría, pero quizá aún te preguntes si los DEX son para ti. En general, te van a convenir si:

- 🔑 Quieres conservar la custodia de tus activos digitales.
- 🔒 Quieres proteger tus activos en la blockchain y evitar el colapso de una CEX.
- ⌛ Quieres acceso al mercado cripto las 24 horas.
- 👛 Quieres acceso a una gama más amplia de criptomonedas.
- 🤑 Te interesa aportar liquidez.
- 🛂 No quieres registrarte y hacer `KYC` en cada plataforma que uses.
- ⚔️ Buscas los riesgos y las recompensas extra de explorar las finanzas descentralizadas.

Dicho esto, casi todo usuario de DeFi tiene cuenta en una plataforma centralizada, porque las CEX ofrecen puertas de entrada y salida fáciles hacia la banca tradicional: puedes mover dinero de tu cuenta bancaria a la blockchain y al revés. [Ryan Sean Adams](https://twitter.com/RyanSAdams) lo compara con un baño público: _“Entras, haces lo tuyo y sales.”_

Esto es bueno: puedes empezar con una cuenta en una CEX y pasar poco a poco a DeFi a medida que ganes confianza.

# Riesgos de los DEX

Usar un DEX también conlleva riesgos. Estos son de los más serios:

🐞 **Riesgo de smart contract:** las auditorías reducen los fallos, pero no los eliminan: en 2025, un gran DEX auditado por varias firmas perdió 128 millones de dólares por un error sutil de código. En el peor caso, puedes perder hasta el monto de tu operación. Prefiere smart contracts confiables y muy auditados.

💰 **Riesgo de autocustodia:** ser el único responsable de tus claves privadas significa que puedes perder una billetera entera por robo, estafa o una frase semilla extraviada. Por eso conviene repartir el riesgo entre varias billeteras y guardar copias de tus frases semilla en un lugar físico seguro.

🥪 **Ataques sándwich:** poner un deslizamiento alto aumenta la probabilidad de que otros coordinen `ataques sándwich` contra ti. En ellos puedes perder hasta el monto de tu deslizamiento. Veremos cómo protegerte en futuros contenidos.

Con estas ventajas y riesgos en mente, una CEX puede encajarte mejor si:

- 🎓 Todavía estás empezando en cripto y aprendiendo los riesgos y las recompensas.
- ⚖️ Operas poco y con montos pequeños, y las tarifas de blockchain no compensan.
- 🏰 Prefieres confiar tus fondos a una plataforma antes que ser tú el responsable.

Algunos adoptan un enfoque híbrido para bajar el riesgo total: compran y venden en una CEX, pero guardan sus criptomonedas en la propia blockchain.

# Knowledge Check 7

¿Por qué usarías un intercambio descentralizado en vez de uno centralizado?

- [ ] Quieres tokens que no cotizan en una plataforma centralizada.

> ℹ️ Es una cualidad de un DEX, pero no es la única.

- [ ] Quieres conservar la custodia total de los fondos intercambiados.

> ℹ️ Es una cualidad de un DEX, pero no es la única.

- [ ] Quieres herramientas y oportunidades poco accesibles en otro sitio.

> ℹ️ Es una cualidad de un DEX, pero no es la única.

- [x] Todas las anteriores.

> ℹ️ ¡Muy bien! Los DEX ofrecen todas estas ventajas frente a las CEX.

# Cómo elegir un DEX

En DeFi hay muchos intercambios descentralizados, y unos son mejores que otros. Ten en cuenta estos cinco factores clave al elegir:

🥇 **Legitimidad:** ¿la entidad es reconocida por su fiabilidad, su calidad y su trayectoria?

⛲ **Liquidez:** ¿el `TVL` de los pools es lo bastante alto para reducir el impacto en el precio?

🖱️ **Facilidad de uso:** ¿la interfaz es cómoda de usar?

🔐 **Seguridad:** ¿los smart contracts han sido auditados por varias firmas?

🎁 **Recompensas y funciones:** ¿hay recompensas por usar el DEX o por aportar liquidez? ¿Puedes votar en la gobernanza?

Entre los nombres que puntúan alto están Uniswap, Curve, Velodrome y PancakeSwap. ¡Puedes pasar de uno a otro hasta encontrar tus favoritos! Para la misión de esta lección usaremos Velodrome, un DEX bien establecido en la red Optimism. Es fácil de usar y, al estar en una Layer 2, ¡las tarifas son mucho más razonables!

# Buenas prácticas en un DEX

Antes de interactuar con una dApp, sigue estas buenas prácticas para mantener tus fondos seguros:

👩‍💻 Verifica el enlace de una dApp en la cuenta oficial del proyecto en X (Twitter) (marca dorada) o con un tercero de confianza, y guárdalo en favoritos. Muchas estafas de DeFi empiezan con un enlace falso, incluso en buscadores conocidos.

🔓 Al conceder `autorizaciones de token` onchain, limítalas al monto de tu operación. Muchos DEX ya usan aprobaciones por firma que cubren solo esa operación: consulta [Gestiona las autorizaciones de tokens](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ No uses las dApps desde tu billetera de HODL; ten una aparte solo para eso. Nuestra lección [Seguridad en web3](https://app.banklessacademy.com/lessons/web3-security) explica las estrategias de billeteras.

¡Ya estás listo para usar un intercambio descentralizado!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

¿Cómo puedes asegurarte de haber elegido un DEX confiable?

- [x] Revisando su reputación y usando solo URL de fuentes confiables.

> ℹ️ ¡Muy bien! Verifica por tu cuenta la reputación del DEX y sigue solo URL que te dé una fuente de confianza.

- [ ] Haciendo una pequeña interacción de prueba la primera vez.

> ℹ️ Una sola interacción con un smart contract malicioso puede vaciar toda tu billetera.

- [ ] Las dos anteriores.

> ℹ️ Incorrecto. Una sola interacción con un smart contract malicioso puede vaciar toda tu billetera.
