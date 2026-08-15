---
TITLE: Estándares de tokens de Ethereum
DESCRIPTION: Descubre cómo las plantillas de activos de Ethereum sostienen clases de activos tradicionales y emergentes.
LANGUAGE: Español
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
## **Puntos clave**

> * Los estándares de `token` de Ethereum son reglas y funciones predefinidas que se usan para desplegar tokens en Ethereum.
>
> * Los estándares de token más populares de Ethereum son `ERC-20`, `ERC-721` y `ERC-1155`.
>
> * Cada estándar permite un nivel distinto de `fungibilidad`, lo que hace posible crear activos onchain tanto comunes como únicos.
>
> * Los estándares de token permiten la interoperabilidad de los tokens en todo el ecosistema de Ethereum: ¡las dApps integran tokens nuevos con mucha facilidad y tú puedes usarlos!

## ¿Qué son los estándares de token de Ethereum?

Millones de tokens cripto distintos viven en Ethereum y en sus redes `Layer 2`, cada uno con propiedades y usos diferentes. ¿Cómo puede la red garantizar que todos funcionen sin fricciones en su ecosistema de dApps, sin que los desarrolladores pasen horas integrando cada token? ¿Y cómo puede quien los usa entender sus propiedades clave sin leer horas de documentación?

¡Aquí entran los estándares de token!

Estas plantillas y conjuntos de reglas hacen posible la `interoperabilidad` de los tokens en el ecosistema de Ethereum. Esto significa que las dApps solo necesitan admitir unos pocos estándares comunes en lugar de miles de tokens individuales. Para Exploradores como tú, significa que puedes mirar el estándar de origen de un token y entender qué puede hacer en Ethereum.

Los estándares de token definen:

* Cómo debe programarse el smart contract de un token.

* El conjunto de funciones que todo token de ese tipo debe admitir, para que cualquier dApp sepa cómo trabajar con él.

Hoy, Ethereum tiene tres estándares de token de uso común:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: un estándar para tokens fáciles de intercambiar (o fungibles).

   Por ejemplo, los tokens USDC y UNI.

2. **ERC-721**: un estándar para tokens únicos (o no fungibles), conocidos como `NFT`.

   Por ejemplo, los NFT de Bored Ape Yacht Club.

3. **ERC-1155**: un estándar que sirve para tokens fungibles y no fungibles en un mismo contrato.

   Por ejemplo, los objetos dentro de un videojuego web3.

Ahora seguramente te preguntas: “¿Qué es exactamente la fungibilidad?”

Veamos este concepto de la economía tradicional para entender su importancia en el ecosistema de Ethereum.

## Fungibilidad frente a no fungibilidad.

La **‘fungibilidad’** es una propiedad de un bien o activo económico, e indica dos rasgos clave:

* Cuando el activo se intercambia, sus unidades son intercambiables sin que cambie su valor.

  (1 dólar se puede cambiar por otro dólar, o por cuatro monedas de 25 centavos, o por veinte monedas de 5 centavos.)

* Cuando el activo se divide, las fracciones más pequeñas conservan sus características fundamentales.

  (1 dólar, dividido en cuatro monedas de 25 centavos, sigue sirviendo como depósito de valor o para hacer compras.)

Algunos ejemplos de activos fungibles son el petróleo, el dinero fiat, los bonos del Estado y las acciones de una empresa. Estos activos no únicos se intercambian y se dividen con facilidad.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

En cambio, la **‘no fungibilidad’** indica:

* El activo tiene propiedades únicas que lo distinguen de sus semejantes y le dan un valor propio.

  (Un cuadro de Van Gogh tiene un precio distinto al de un artista contemporáneo emergente, por su apariencia, su rareza, el nivel de destreza y la reputación detrás de las obras.)

* El acto de dividirlo afecta sus características fundamentales.

  (Un cuadro cortado en cuatro pedazos tiene secciones que no se parecen entre sí, y cada una puede valer algo distinto. La intención original del cuadro también desaparece.)

Algunos ejemplos de activos no fungibles son los bienes raíces, las obras de arte, las identidades digitales y las certificaciones. Estos activos son más difíciles de intercambiar y dividir por sus propiedades únicas.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Si alguna vez dudas sobre la fungibilidad, pregúntate: “¿Qué tan fácil es intercambiarlo y dividirlo?”. Si es difícil, ¡seguramente es no fungible!

Ethereum aspira a ser “la capa de liquidación de la economía mundial”. Poder manejar activos fungibles y no fungibles abre la puerta a representar onchain las clases de activos tradicionales, ¡y a crear otras nuevas!

## Estándares y funciones de los tokens

Al desplegar un nuevo contrato de token en Ethereum, quien crea el activo elige uno de los estándares de token existentes. Eso le otorga propiedades iniciales (llamadas funciones), como el suministro total del activo, si se puede transferir a otra billetera o qué información puede guardar.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Por ejemplo, ERC-20 usa funciones como estas:

**1\. totalSupply:** define el suministro total de un token ERC-20.

El suministro total de un token marca cualidades importantes, como su valor y su distribución.

**2\. balanceOf:** consulta el saldo de tokens de una dirección concreta.

Ayuda a los servicios y las plataformas a revisar el saldo de tu billetera antes de ejecutar la transacción que pediste.

**3\. transfer:** transfiere tokens desde tu dirección a otras direcciones.

Cada vez que envías un token cripto de tu billetera a otra, estás usando la función transfer.

**4\. approve:** permite que una dirección (normalmente un smart contract) opere automáticamente en nombre de tu billetera hasta un monto determinado.

Con esta función puedes autorizar a una plataforma o servicio a usar automáticamente una parte definida de tus fondos y ejecutar transacciones.

**5\. allowance:** sirve para consultar el monto que un gastador puede mover desde una billetera.

Una plataforma puede usar esta función para revisar cuánto le has autorizado a usar y si puede ejecutar la transacción sin que la firmes a mano.

Estandarizar la creación de tokens habilita la `composabilidad` en el ecosistema de Ethereum. Por ejemplo, quien construye una [plataforma de intercambio descentralizada (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) puede añadir soporte para cualquier token que siga el estándar ERC-20, porque todos se comportan de forma parecida. No hace falta programar soporte individual para cada token listado.

Del mismo modo, quien construye un mercado de NFT solo necesita que la plataforma cumpla los estándares ERC-721 y ERC-1155 para admitir todos los NFT creados en Ethereum.

Ahora que entendemos los estándares de token, la fungibilidad y las funciones, veamos los usos de los tres estándares principales de Ethereum.

### ERC-20: tokens fungibles

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) es un estándar de token que define las reglas para crear contratos de tokens fungibles.

Los tokens ERC-20 pueden ser cualquier cosa, desde un `memecoin` hasta un medio de pago en un mercado descentralizado. En la mayoría de los casos encajan en una de estas cuatro categorías:

**1\. Token de utilidad:** cumple una función concreta dentro del ecosistema de una app o plataforma.

Ejemplo: Chainlink (LINK) se usa para pagar a los operadores que llevan datos del mundo real, como los precios de mercado, a los smart contracts.

**2\. Token de gobernanza:** da a quien lo tiene derecho a voto en las decisiones de gobernanza de una plataforma.

Ejemplo: quienes tienen el token del Ethereum Name Service (ENS) pueden votar propuestas para actualizar el protocolo del registro de dominios.

**3\. Stablecoin:** diseñada para mantener un valor estable, normalmente igual al dólar estadounidense.

Ejemplos: Tether (USDT), USD Coin (USDC) y recién llegadas como USDS de Sky.

**4\. Token de valor (security token):** representa la propiedad de un activo subyacente, como las acciones de una empresa.

Ejemplo: fondos de inversión tokenizados, como los fondos del mercado monetario que las grandes gestoras de activos empezaron a emitir onchain en 2024.

Un mismo token puede caer en más de una categoría. Por ejemplo, un token de gobernanza también puede tener cierta utilidad dentro de una plataforma.

Puedes [comprar tokens ERC-20 en un DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) como Uniswap, o en un `intercambio centralizado` como Binance o Coinbase.

### ERC-721: tokens no fungibles

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) es un estándar que define las reglas para que los usuarios de Ethereum creen o usen tokens no fungibles. Garantiza que cada NFT creado sea único de forma demostrable.

¿Cuáles son algunos usos de los tokens ERC-721?

**1\. Propiedad de activos:** los tokens ERC-721 se usan mucho para representar la propiedad de activos únicos, digitales y del mundo real. Por ejemplo, esta entrada del Manual del Explorador tiene 100 versiones numeradas individualmente (no solo para leerlas, sino para tenerlas), como un libro en tu estantería digital. (Puedes `mintear` una y quedártela con el botón dorado ‘Collect Entry’ de arriba). Los ‘Datadisk Collectibles’ de Bankless Academy funcionan igual.

**2\. Suscripciones y membresías:** creadores, artistas, clubes y empresas ya usan NFT para suscripciones, entradas a eventos y membresías. La unicidad demostrable de los NFT asegura que cada unidad del suministro fijo quede ligada a una persona.

**3\. Programas de fidelidad:** Starbucks tuvo un programa de fidelidad llamado Odyssey hasta marzo de 2024, donde sus miembros completaban misiones para obtener NFT que podían canjear por recompensas digitales y del mundo real. Muchas otras marcas ofrecen NFT como recompensa de fidelidad, que sus usuarios pueden canjear o vender cuando quieran.

**4\. Identidad y certificaciones:** los tokens ERC-721 sirven para crear identidades y certificaciones a prueba de manipulaciones. Cuando tu identidad digital o tus certificados son tokens ERC-721, te resulta fácil demostrar que son tuyos y casi imposible que alguien los falsifique y los use de forma indebida.

Para conseguir un token ERC-721, crea una cuenta en un mercado de NFT como [OpenSea](https://opensea.io/) y compra cualquier NFT listado. Asegúrate de tomar nuestra lección de [Seguridad en Web3](https://app.banklessacademy.com/lessons/web3-security) para protegerte de las estafas en estos mercados.

### ERC-1155: tokens fungibles y no fungibles

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Conocido a menudo como `estándar multitoken`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) une los conceptos de ERC-20 y ERC-721, y permite escribir contratos que admiten tokens fungibles y no fungibles a la vez. Esto no cambia mucho la experiencia de uso, pero ayuda a optimizar las funciones de una plataforma. Un ejemplo sería desplegar bajo un mismo contrato una moneda fungible de un juego y sus objetos no fungibles.

Este estándar también permite crear tokens semifungibles: tokens que son fungibles y no fungibles según las circunstancias. Por ejemplo, en una colección de cartas coleccionables, todas las cartas de la misma rareza podrían ser fungibles (intercambiables), mientras que las cartas de rarezas distintas serían no fungibles (no intercambiables).

ERC-1155 también permite transacciones por lotes para enviar varios tipos de token a la vez, lo que puede reducir el costo del `gas` para el usuario.

---

Te felicitamos por llegar hasta el final de esta larga entrada del Manual del Explorador: ‘Entendiendo los estándares de tokens’.

No olvides coleccionar esta entrada si quieres tener una copia a mano en tus viajes, o si quieres apoyar el contenido futuro de Bankless Academy. ¡Buen viaje, Explorador!

---

## Preguntas frecuentes sobre los estándares de token de Ethereum

### ¿Cómo se crean los estándares de token de Ethereum?

Los estándares de token se proponen y publican en Ethereum mediante un proceso de propuestas llamado Ethereum Improvement Proposals (EIP). No hay votación: la propuesta se depura en una discusión pública y, cuando la comunidad coincide en general en que funciona, los editores la finalizan como un estándar llamado Ethereum Request for Comment (ERC). Después se añade el número de serie de la EIP para completar el nombre del estándar, por ejemplo ERC-20 o ERC-721.

### ¿El ether (ETH) sigue algún estándar de token?

No. De hecho, el ETH se considera una ‘moneda’ y no un ‘token’, porque tiene su propia [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### ¿Cualquiera puede lanzar un token?

Sí. Ethereum es un ecosistema sin permisos y cualquiera puede lanzar un token fungible o no fungible. Eso sí, necesitarás conocimientos técnicos o acceso a herramientas sin código.

### Si dos tokens tienen el mismo nombre, ¿cómo sé cuál es el oficial?

Para identificar el token original, revisa la dirección del contrato que se usa para publicar los tokens que quieres usar y compárala con la documentación oficial del proyecto. Así te aseguras de no interactuar con un contrato de token malicioso que podría vaciar tu billetera.

### ¿Hay otros estándares de token en Ethereum además de ERC-20, 721 y 1155?

Sí. Algunos se usan mucho, como [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), un estándar común para los tokens de `bóveda` que representan depósitos que generan rendimiento en DeFi. Los estándares más recientes también cubren las `cuentas inteligentes`, que permiten a una billetera ejecutar su propio código. Otros, como [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) y [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), nunca cuajaron o sirven para usos muy específicos.

---

**Autores**

**[Musharraf](https://x.com/musharrafff)** es cofundador de Unhashed. Ayuda a proyectos web3 con la estrategia y la ejecución de contenidos.

**[Tetranome](https://twitter.com/Tetranome)** es el Project Champion de Bankless Academy, y se enfoca en la experiencia de usuario, la interfaz, el diseño y el contenido.

**Editores**

**[Trewkat](https://twitter.com/trewkat)** es escritora y editora en BanklessDAO. Le interesa aprender sobre cripto y NFT, con especial atención a cómo comunicar mejor ese conocimiento a otras personas.

**Mecenas**

Este artículo sin patrocinio forma parte de tu educación gratuita en Bankless Academy. ¡Colecciona el artículo para apoyar el contenido futuro!
