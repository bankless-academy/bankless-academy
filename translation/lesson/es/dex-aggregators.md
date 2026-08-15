---
TITLE: Agregadores de DEX
DESCRIPTION: Sumérgete en los agregadores de DEX, la liquidez y el panorama de los intercambios DeFi.
LANGUAGE: Español
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

# Introducción

Los `intercambios descentralizados` (DEX) eliminan los costos de los intermediarios y le ahorran dinero al Explorador cuando opera con activos.

Pero, Explorador, ¿sabías que la DeFi permite ahorrar aún más? Con los `agregadores de DEX` puedes revisar a la vez todas las operaciones posibles en varias plataformas y ejecutar la mejor ruta, todo en una sola acción. Te consiguen el mejor precio al hacer un `intercambio` de tokens. Igual que un buscador de vuelos encuentra el boleto más barato, un agregador de DEX maximiza el valor de tu operación.

Esta lección muestra:

1. Cómo los DEX fragmentan la liquidez y por qué eso empeora los precios.
2. Cómo los agregadores permiten ver y usar varios DEX desde una sola interfaz.
3. Las formas en que una interfaz de agregador te ahorra tiempo y dinero.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# El efecto de la liquidez en los precios

La cantidad de un token disponible para operar en un mercado se llama su `liquidez`. El nivel de liquidez influye mucho en el `impacto en el precio` al operar en DeFi: un impacto grande encarece la operación, y uno pequeño la abarata. La mayoría prefiere operar en mercados con más liquidez para reducir ese impacto.

Piénsalo como una piscina: cuanta más agua (liquidez) hay, menor es el _cambio_ del nivel del agua (impacto en el precio) cuando alguien entra o sale. El tamaño de ese “alguien” (la operación) también influye en ese _cambio_.

# Un ejemplo del impacto de la liquidez en los precios

Veamos un ejemplo.

Imagina un token que se opera en varios DEX a la vez. Uno tiene un pool profundo con casi toda la `liquidez` del token; otro, un pool poco profundo con solo una pequeña parte.

Si un Explorador compra la misma cantidad de token en cada pool, el `impacto en el precio` será mayor en el pool poco profundo. La misma operación se lleva un porcentaje mucho más alto de su liquidez total, así que mueve más el precio y le cuesta más al comprador.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Completa: para conseguir el mejor precio, conviene operar en mercados con liquidez ________ y así tener un impacto ________ en el precio.

- [ ] buena, máximo

> ℹ️ ¡Inténtalo de nuevo! Un impacto máximo en el precio encarece la operación, no la abarata.

- [x] alta, bajo

> ℹ️ ¡Correcto! Más liquidez significa menor impacto en el precio, como una piscina grande cuyo nivel apenas cambia cuando alguien se lanza.

- [ ] baja, bueno

> ℹ️ ¡Inténtalo de nuevo! Poca liquidez aumenta el impacto en el precio y encarece las operaciones.

- [ ] escasa, grande

> ℹ️ ¡Inténtalo de nuevo! La liquidez escasa provoca un impacto grande en el precio, justo lo que se quiere evitar.

# El problema de los DEX tradicionales: la liquidez escasa

La DeFi sigue creciendo, pero surge un problema para los usuarios: a medida que se lanzan más DEX, la cantidad total de cada token se dispersa. A eso se le llama liquidez escasa.

Recuerda la piscina: si el agua disponible (la `liquidez`) se reparte entre varias piscinas, cada una tendrá menos agua que la piscina original.

En los inicios de la DeFi, uno o dos DEX concentraban casi toda la liquidez. En 2020, nuevos DEX empezaron a competir por ella: un rival le quitó a Uniswap más de mil millones de dólares en liquidez pocas semanas después de lanzarse. Hoy está repartida entre cientos de DEX en muchas blockchains y redes `Layer 2`, lo que adelgaza cada pool.

Por eso cualquier operación tiene hoy un `impacto en el precio` mayor que cuando un solo DEX concentraba la liquidez. Sin nuevas innovaciones, operar en un DEX aislado le cuesta más al Explorador.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

¿Qué dos factores determinan el impacto de una operación en el precio?

- [ ] El DEX elegido para operar y el tamaño de la operación

> ℹ️ ¡Inténtalo de nuevo! El DEX en sí no importa. Lo que cuenta es la liquidez disponible en el pool.

- [ ] El token elegido y el DEX usado para operar

> ℹ️ ¡Inténtalo de nuevo! Ni el token ni la marca del DEX determinan el impacto. Lo hacen la liquidez y el tamaño.

- [x] El tamaño de la operación y la liquidez disponible

> ℹ️ ¡Correcto! Como en una piscina, el tamaño del chapuzón depende de quién se lanza y de cuánta agua hay.

- [ ] La liquidez disponible y el token elegido

> ℹ️ ¡Inténtalo de nuevo! La liquidez es un factor, pero el otro es el tamaño de la operación, no el token.

# Recombinar la liquidez con los agregadores

Hace falta mucha `liquidez` para reducir el impacto en el precio y ahorrarte dinero. Los agregadores de DEX permiten pasar una operación por varios DEX a la vez y reducir ese impacto: una operación grande desde la billetera de un Explorador se divide en varias operaciones pequeñas repartidas entre varios DEX.

Incluso pueden enrutar una operación por un `token intermediario`, o por varios, si el resultado es mejor, como un buscador de vuelos que propone una escala extra porque sale más barata. Esta búsqueda de la `ruta de intercambio` óptima la hacen algoritmos sofisticados que exploran todos los caminos posibles para hallar el más barato en ese momento.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

En los agregadores de DEX, el enrutamiento de operaciones significa que:

- [ ] Las operaciones pasan por acuerdos especiales con ciertos DEX

> ℹ️ ¡Inténtalo de nuevo! Los agregadores exploran todos los DEX disponibles con algoritmos, no con acuerdos especiales.

- [ ] Las operaciones siempre pasan por varios DEX

> ℹ️ ¡Inténtalo de nuevo! Los agregadores dividen una operación solo si el resultado mejora. A veces un solo DEX da la mejor ruta.

- [ ] Las operaciones pasan solo por el DEX favorito del usuario

> ℹ️ ¡Inténtalo de nuevo! Quedarse en un solo DEX quitaría todo el sentido. Los agregadores comparan muchos DEX.

- [x] Las operaciones pueden pasar por varios DEX y tokens intermediarios

> ℹ️ ¡Correcto! Los algoritmos exploran todos los caminos posibles, incluidas “escalas” en tokens intermediarios.

# Cómo se calcula el costo del gas en Ethereum

Repasemos ese cálculo antes de ver cómo los agregadores reducen las tarifas. Este ahorro cuenta sobre todo en Ethereum Mainnet; en las redes `Layer 2` las tarifas son de centavos.

Como el combustible de un auto, el `gas` hace funcionar el código de Ethereum. Cuantos más cálculos pidas, más gas consume tu código. Su precio se mide en unidades muy pequeñas de ether, los `gwei`: 1 gwei es una milmillonésima de ether (0,000000001 ETH).

El costo total depende del gas consumido y de su precio unitario en ese momento. La fórmula es:
_Gas utilizado * Precio del gas = Costo total en gas_

Por ejemplo, con el gas a 22 gwei por unidad y una transacción que consume 120 000 unidades:
_120 000 * 22 gwei = 2 640 000 gwei_ _**o sea**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Cómo los agregadores reducen el costo del gas

Dividir una operación debería generar más tarifas por la actividad onchain extra, salvo que los agregadores avanzados anticipan esas tarifas y las incluyen al calcular la ruta. Simulan las operaciones fuera de la cadena, con los costos de `gas` incluidos, para hallar las `rutas de intercambio` que dejan más valor al Explorador al final.

Algunos van más lejos. 1inch, pionero de la agregación de DEX, ahora deja que ejecutores profesionales compitan por tu operación y paguen el gas ellos mismos (un sistema llamado Fusion). Muchas veces el usuario no paga nada de gas.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

¿Cuál de estas NO es una forma en que los agregadores reducen costos?

- [ ] Simular las transacciones fuera de la cadena antes de ejecutarlas

> ℹ️ ¡Inténtalo de nuevo! Los agregadores sí simulan las operaciones fuera de la cadena, con el gas incluido, para hallar la mejor ruta.

- [x] Pedir a los DEX que bajen las tarifas de red

> ℹ️ ¡Correcto! Las tarifas de red las fija la blockchain, no los DEX. Nadie puede pedir simplemente que bajen.

- [ ] Tener en cuenta el costo del gas al planear la ruta

> ℹ️ ¡Inténtalo de nuevo! Los agregadores avanzados sí incluyen las tarifas de transacción al calcular la ruta.

- [ ] Dejar que ejecutores profesionales operen y paguen el gas

> ℹ️ ¡Inténtalo de nuevo! En los sistemas de intenciones como 1inch Fusion, los ejecutores sí cubren el gas.

# Los meta-agregadores

¡Existen incluso meta-agregadores de agregadores de DEX! Estas plataformas consultan a los agregadores que compiten entre sí y ofrecen las mejores cotizaciones. Por ejemplo, la función de intercambio integrada en billeteras como MetaMask reúne cotizaciones de varios proveedores, entre ellos agregadores como 1inch, y añade su propia comisión.

Ojo: aunque son cómodos, los servicios de `meta-agregador` pueden sumar costos por encima de las tarifas de red y encarecer el total. Explorador, asegúrate de que tus operaciones no terminen costando más de lo previsto.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Los meta-agregadores comparan varios agregadores de DEX para encontrar los mejores precios para sus usuarios.

- [x] Verdadero

> ℹ️ ¡Correcto! Los meta-agregadores consultan a los agregadores de DEX que compiten entre sí y ofrecen las mejores cotizaciones.

- [ ] Falso

> ℹ️ ¡Inténtalo de nuevo! Buscar entre varios agregadores de DEX es justo lo que hacen los meta-agregadores.

# Cómo evitar los ataques sándwich

Quien intercambia directamente en un `DEX` puede perder valor hasta el límite de su `tolerancia al deslizamiento`, cuando los bots colocan operaciones justo antes y justo después de la suya para mover el precio. Esas pérdidas se llaman `ataques sándwich`: solo en 2021 costaron a los usuarios unos 235 000 000 de dólares. Hoy, protecciones como el `enrutamiento privado de transacciones` y las operaciones por intenciones cubren la mayoría de los intercambios diarios, pero sigue conviniendo mantener baja la tolerancia al deslizamiento.

Por suerte, la liquidez recombinada de los agregadores de DEX reduce el impacto de una operación en el precio. Así el Explorador puede mantener baja su tolerancia y ahorrar más que operando directamente en un DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Para protegerte, tu tolerancia al deslizamiento debe mantenerse:

- [x] baja

> ℹ️ ¡Correcto! Una tolerancia baja limita cuánto valor puede extraer un ataque sándwich de tu operación.

- [ ] alta

> ℹ️ ¡Inténtalo de nuevo! Una tolerancia alta deja que los ataques sándwich se lleven más valor de tu operación.

# Más protección contra los sándwiches: las operaciones OTC

Algunos agregadores como 1inch ofrecen incluso servicios `OTC` (`extrabursátil`) que protegen por completo de los ataques sándwich. Estos servicios opcionales permiten operar directamente con otros usuarios, sin pasar por los `pools de liquidez` de la DeFi: otra gran forma de ahorrar para el Explorador.

CoW Swap sigue otro camino: el usuario firma una solicitud de operación (una `intención`) y `solucionadores` profesionales compiten en `subastas por lotes` por ejecutarla al mejor precio. Un solucionador puede incluso emparejar a dos usuarios directamente, así que las operaciones quedan protegidas de los ataques sándwich por defecto.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

¿Qué herramientas ofrecen muchos agregadores de DEX para ahorrarle dinero a sus usuarios?

- [ ] Enrutar las operaciones por la liquidez de varios DEX.

> ℹ️ ¡Inténtalo de nuevo! La liquidez agregada reduce el impacto en el precio, pero no es la única fuente de ahorro.

- [ ] Operaciones OTC totalmente protegidas de los ataques sándwich.

> ℹ️ ¡Inténtalo de nuevo! Es una fuente de ahorro, pero no es la única.

- [ ] Tener en cuenta el costo del gas al construir las mejores rutas.

> ℹ️ ¡Inténtalo de nuevo! Es una fuente de ahorro, pero no es la única.

- [x] Todas las anteriores

> ℹ️ ¡Correcto! Los agregadores combinan liquidez, incluyen el costo del gas y ofrecen operaciones OTC, para dejarte más valor.
