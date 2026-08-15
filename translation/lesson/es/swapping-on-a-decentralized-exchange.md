---
TITLE: Intercambiar en un DEX
DESCRIPTION: Empieza en DeFi con esta guía paso a paso de un exchange descentralizado.
LANGUAGE: Español
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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
## Puntos clave

> * Los intercambios descentralizados son un tipo de dApp que permite intercambiar tokens con autocustodia.
>
> * Interactuar con confianza con un DEX requiere algunos conocimientos prácticos.
>
> * Los exploradores de bloques nos permiten inspeccionar nuestras transacciones onchain.

El intercambio descentralizado (DEX) es la aplicación más usada del mundo de las `Finanzas Descentralizadas` (DeFi), ¡y con razón! Los DEX permiten intercambiar de forma automática un token de criptomoneda por otro, sin necesidad de un intermediario. A diferencia de los intercambios centralizados (CEX), este tipo de intercambio también te deja conservar la propiedad total de tus activos.

La autonomía y los protocolos sin permisos son pilares de DeFi. Dan a sus usuarios la propiedad real de sus activos digitales y acceso abierto a servicios blockchain fundamentales las 24 horas. Cualquier persona con conexión a internet puede acceder a DeFi, sin importar su origen, sus creencias o su ubicación geográfica.

En esta entrada del manual veremos cómo usar tu billetera de autocustodia para interactuar con un DEX, con el objetivo de intercambiar un token por otro. Puedes conocer más sobre la mecánica, las cualidades y el perfil de riesgo de esta tecnología, y cómo se compara con los CEX, en nuestra lección [Exchanges descentralizados](https://app.banklessacademy.com/lessons/decentralized-exchanges).

## Cómo elegir un DEX

Elegir una plataforma segura y económica es el primer paso para hacer un intercambio de tokens. En este recorrido usaremos Velodrome, un DEX bien establecido en la red Optimism. A medida que ganes confianza navegando la blockchain, aprenderás a evaluar otras plataformas y a encontrar la que mejor se adapte a ti. Nuestra lección [Exchanges descentralizados](https://app.banklessacademy.com/lessons/decentralized-exchanges) incluye una lista completa de cualidades a tener en cuenta.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

Los DEX son un gran punto de partida en tu viaje web3, porque la mayoría de las dApps siguen una interfaz parecida a la de los DEX y usan interacciones similares con tu billetera de autocustodia.

Comencemos nuestro intercambio de tokens.

## Cómo hacer un intercambio de tokens

**1\. Abre la dApp:**

Abre [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) en una pestaña nueva del navegador.

**2\. Conecta tu billetera:**

Usa el botón “Connect” (conectar), que suele estar en la esquina superior derecha de cualquier dApp.

Si estás en computadora, conecta con la billetera de tu navegador.

Si estás en el celular, un aviso de conexión te permitirá vincular tu billetera móvil con la dApp.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3\. Aprueba la conexión:**

Selecciona “Connect” en tu aplicación de billetera para confirmar la conexión con el sitio. Esto permite que la dApp vea tu dirección y los saldos de tus tokens. Todavía no has concedido ningún otro permiso.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4\. Revisa y firma los términos del servicio (si los aceptas):**

Muchas dApps te pedirán firmar un mensaje para confirmar que has leído sus términos y condiciones. Firmar mensajes no cuesta gas y no guarda ninguna información en la blockchain. Si estás de acuerdo con los términos, puedes firmar el mensaje.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5\. Cambia a la red correcta:**

Para este recorrido, asegúrate de que tu billetera esté en la red Optimism.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6\. Configura tu intercambio:**

Es hora de elegir los tokens de entrada y de salida. En este ejemplo intercambiaremos ETH por OP, ¡pero puedes intercambiar los tokens que quieras!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7\. Aprueba los permisos del token (solo para intercambios de tokens):**

Si intercambias un token como USDC, tu billetera te pedirá primero aprobar el permiso para que Velodrome acceda a ese token. Recomendamos limitar la aprobación al tamaño de tu operación. ETH es la moneda nativa de la red y no necesita aprobación, así que en nuestro ejemplo la billetera pasa directo a la confirmación del intercambio.

**8\. Confirma la transacción:**

Cuando estés conforme con la cotización y los ajustes, puedes iniciar el intercambio. Este paso incluye confirmar en la dApp y confirmar de nuevo en tu billetera.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9\. Revisa tu saldo:**

Tu transacción debería confirmarse en unos segundos, y después verás el nuevo saldo del token en tu billetera. Si no aparece ese tipo de token, asegúrate de haber importado las direcciones del token.

*Dirección del contrato del token de Optimism: 0x4200000000000000000000000000000000000042*

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10\. Consigue el hash de tu transacción:**

Para completar la misión de nuestra lección [Exchanges descentralizados](https://app.banklessacademy.com/lessons/decentralized-exchanges), necesitarás el ***hash de la transacción del intercambio*** (no lo confundas con el hash de una transacción de permiso de token, ni con la dirección de tu billetera). Normalmente aparecerá un enlace a un explorador de bloques en la interfaz del DEX, que te deja ver los detalles de la transacción confirmada. Si no lo viste, o no aparece, encontrarás otro enlace en el registro de actividad de tu billetera, ligado directamente a tu operación.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

---

¡Es hora de explorar el mundo del intercambio descentralizado! Esperamos que hayas disfrutado esta entrada del Manual del Explorador: “Intercambiar en un exchange descentralizado”.

No olvides coleccionar esta entrada si quieres tener una copia a mano para consultarla en tus viajes, o para apoyar el contenido futuro de Bankless Academy. ¡Buen viaje, Explorador!

---

## Preguntas frecuentes

### ¿Por qué mi cotización cambia varias veces por minuto?

Las cotizaciones se calculan en el momento en que introduces el intercambio que quieres en la interfaz del DEX. Con el paso del tiempo, otros usuarios hacen intercambios y afectan la oferta de tokens en la plataforma. El DEX actualiza tu cotización con regularidad para mantenerla al día.

### ¿Cuánto tarda en ejecutarse un intercambio de tokens?

La respuesta depende de varios factores, sobre todo de la velocidad de bloque de la blockchain y de cuánto pagues de menos o de más en la tarifa de gas. Las transacciones de DEX enviadas a Ethereum Mainnet suelen tardar entre 12 segundos y un par de minutos en confirmarse. ¡Las transacciones en Layer 2 suelen ser más rápidas!

### ¿Por qué falló mi transacción?

Hay varias razones por las que una transacción puede fallar: fondos insuficientes para pagar el gas, límite de gas demasiado bajo o tolerancia al deslizamiento demasiado baja. Lo mejor para empezar a investigar es buscar mensajes de error en la interfaz. También puedes ver tu transacción en un explorador de bloques, como [Etherscan](https://optimistic.etherscan.io/), para comprobar si hay mensajes de error onchain. Puedes subir tu `tolerancia al deslizamiento` en los ajustes del DEX si los precios se mueven más rápido que tu operación. Muchas billeteras y DEX ofrecen además enrutamiento protegido de transacciones, que protege tu intercambio de los bots `MEV` que buscan aprovecharse de las operaciones pendientes.

### ¿Puedo cambiar o quitar los permisos de un token?

Conceder permisos de token a un smart contract puede dejar nuestra billetera expuesta a interacciones futuras no deseadas, si hackean ese contrato. Es posible cambiar o quitar los permisos con aplicaciones como [Revoke.cash](https://revoke.cash/). Como ajustar permisos cuesta gas, esta precaución puede volverse cara rápidamente. Esta es una de las razones por las que muchos usuarios guardan sus activos digitales en una billetera (fría) mientras interactúan con las dApps desde otra (billetera de operaciones), y solo transfieren activos entre ellas cuando hace falta.

### ¿Por qué el token que busco no está disponible para intercambiar?

Si tu token no aparece en la lista por defecto, tendrás que pegar la dirección de su contrato. Para encontrarla, consulta <https://www.coingecko.com/> o el sitio web oficial del proyecto.

**Nota:** las direcciones de un mismo token cambian según la red. Por ejemplo, el [contrato de USDC en Mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) es distinto del [contrato de USDC en Optimism](https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85). ¡Verifica siempre las direcciones de los tokens antes de intercambiar!

---

**Autor**

**[Tetranome](https://twitter.com/tetranome)** es Project Champion en Bankless Academy, y se enfoca en la experiencia de usuario, la interfaz, el diseño y el plan de estudios de la plataforma.

**Editora**

**[Trewkat](https://twitter.com/trewkat)** es escritora y editora en BanklessDAO. Le interesa aprender todo lo posible sobre cripto y NFT, con especial atención a cómo comunicar mejor ese conocimiento a los demás.

**Mecenas**

Este artículo sin patrocinio forma parte de tu educación gratuita en Bankless Academy. ¡Colecciona el artículo para apoyar el contenido futuro!
