---
TITLE: Gestionar autorizaciones de tokens
DESCRIPTION: Protege tu billetera de interacciones no deseadas con smart contracts.
LANGUAGE: Español
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/managing-token-allowances
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

> * Las autorizaciones de token son permisos que se dan a los `smart contracts` para gastar tokens de una billetera sin pedir aprobación cada vez.
>
> * Los actores maliciosos pueden aprovecharlas si el usuario no sabe que esos permisos siguen activos.
>
> * Herramientas como Revoke.cash permiten revisar y revocar autorizaciones de token con facilidad.

## Introducción

La DeFi le da al usuario el control de sus activos, incluidas sus `claves privadas`, con una soberanía y una autoridad sobre sus fondos que no existían antes. Pero a mayor poder, mayor responsabilidad: el usuario debe hacerse cargo por completo de la seguridad y la gestión de sus activos.

Hay cuatro categorías comunes de estafas que todo usuario de DeFi debe conocer:

* **Frase semilla comprometida:** los atacantes intentan engañarte para que reveles tu frase semilla, lo que les daría acceso no autorizado a tus fondos. Con tu frase semilla, un atacante puede vaciar todos tus fondos y seguir haciéndolo cada vez que deposites más en esa billetera. Por desgracia, no hay forma de recuperarse de esta situación: la única solución es crear una billetera totalmente nueva con una `frase semilla` nueva.

* **Transferencias directas de ETH:** los estafadores pueden ocultar transferencias de ETH disfrazándolas de llamada a una función, como “Security Update” (actualización de seguridad). El método de firma en bruto que usaban las versiones antiguas de esta estafa ya no existe en MetaMask; los kits de phishing modernos abusan de solicitudes de firma con aspecto normal y cuentan con que firmes sin leer lo que muestra tu billetera. Si caes en esta estafa no podrás recuperar tus fondos, pero sí podrás seguir usando tu billetera con seguridad para otras transacciones.

* **Anuncios en mercados de NFT:** ten cuidado con los anuncios falsos y los contratos maliciosos que aprovechan las autorizaciones que das a mercados como OpenSea. Los estafadores pueden engañarte para que firmes un mensaje `offchain` que pone en venta tus `NFT` aprobados, sin que ocurra ninguna transacción de tokens.

* **Autorizaciones de token:** los atacantes pueden manipular los permisos para acceder a más fondos de los aprobados en un inicio. Las “aprobaciones” son transacciones onchain que dan acceso a tus tokens o NFT. Los “permisos” dan el mismo acceso, pero solo requieren una firma offchain sin gas. Uniswap y la mayoría de las apps de trading modernas usan este sistema (llamado Permit2). Las firmas de tipo permit no aparecen como aprobaciones onchain hasta que se usan, y pueden tener fecha de caducidad; la vista “Signatures” de Revoke.cash te permite revisarlas y cancelarlas.

  A medida que los smart contracts se popularizan, las `autorizaciones de token` se vuelven necesarias para que los contratos de confianza ejecuten transacciones sin exponer tus claves privadas. Las autorizaciones de token permiten que las dApps muevan tokens de tu billetera automáticamente en tu nombre. Esa comodidad mejora la eficiencia, pero también expone al usuario a posibles vectores de ataque mediante estafas y accesos no autorizados.

En este artículo hablaremos de las ‘autorizaciones de token’ y te presentaremos una herramienta comunitaria creada para ayudarte a gestionar tus permisos.

## Autorizaciones de token: entenderlas, gestionarlas y usarlas con seguridad

Las autorizaciones de token son permisos que se dan por adelantado a los smart contracts para gastar tokens de una billetera. Cumplen un papel clave: hacen posibles las transacciones sin tener que dar permiso explícito cada vez que un activo sale de la billetera. Sin embargo, mal usadas, pueden convertirse en un vector de ataque contra quien no está atento. Para reducir ese riesgo, los usuarios de DeFi deben ser prudentes, informarse sobre el panorama de seguridad y entender cómo funcionan realmente las autorizaciones de token.

Dar permisos a un contrato de terceros implica dos pasos:

1. Conexión de la billetera: al conectar tu billetera a una dApp, solo compartes la `dirección` de tu billetera con su interfaz, para que pueda mostrar tus saldos y tu actividad. Conectarse, por sí solo, no concede ningún permiso onchain.

2. Aprobación de tokens: para operar con la dApp, luego apruebas que su smart contract mueva tokens concretos en tu nombre. Este es el paso que otorga verdadero poder de gasto.

Al gestionar tus autorizaciones de token de forma proactiva, te aseguras de que ningún contrato retire de tu billetera más de la cantidad que fijaste. Por suerte, existen herramientas comunitarias creadas para dar confianza y tranquilidad a los usuarios de DeFi.

## Paso a paso: cómo usar Revoke.cash

[Revoke.cash](https://revoke.cash/) permite gestionar fácilmente tus autorizaciones de token desde un sitio web sencillo que ayuda a revisar y vigilar los permisos dados a distintas dApps. Veamos paso a paso cómo usar esta potente herramienta comunitaria para proteger tus activos y recuperar el control de tu billetera.

**1\. Conecta tu billetera**:

Para empezar a revocar tus autorizaciones de token, entra en [Revoke.cash](http://revoke.cash/) y haz clic en “Connect Wallet” (conectar la billetera), arriba a la derecha. También puedes escribir a mano la dirección pública de tu billetera en la barra de búsqueda. Cuando termine de cargar, verás la lista de todas tus `aprobaciones de token` en esa red.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Revisa tus autorizaciones**:

Una vez conectada tu billetera, puedes revisar las aprobaciones existentes. Puedes ordenarlas, filtrarlas o buscar aprobaciones concretas según la dirección autorizada a gastar. Ordenar por “Newest to Oldest” (de la más nueva a la más antigua) es muy útil si sospechas de una aprobación maliciosa reciente. Usa las opciones de orden y filtro para tener una visión general de las autorizaciones que has concedido. Las autorizaciones se conceden por cadena, así que usa el selector de red para repetir la revisión en cada red que uses.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Revoca las autorizaciones que no quieras:**

Cuando identifiques las aprobaciones que quieres revocar, solo haz clic en el botón “Revoke” (revocar) junto a cada una. Si todavía necesitas una aprobación en el futuro pero quieres reducir tu riesgo, puedes cambiarla a otra cantidad haciendo clic en el ícono del lápiz junto al monto aprobado.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Te conviene revocar o ajustar una autorización de token si:

1. Un smart contract desplegado hace poco sufre un exploit y abre una vulnerabilidad en un `intercambio descentralizado` que usas con frecuencia.

   En abril de 2023, el popular `DEX` SushiSwap sufrió un exploit parecido y se robaron unos 3,5 millones de dólares a los usuarios. Los afectados siguieron en riesgo mientras no revocaron su autorización de token.

2. Una propuesta de gobernanza maliciosa actualiza varios contratos con la intención de vaciar los fondos de los usuarios.

   Más de 2,5 millones de dólares en activos quedaron comprometidos cuando Atlantis Loans, un protocolo `DeFi` en una cadena BNB, ejecutó una propuesta de gobernanza dirigida contra varios contratos. Quienes tenían controlado su límite de aprobación redujeron el riesgo de que la propuesta maliciosa vaciara sus billeteras por completo.

## No olvides las delegaciones

Desde la actualización Pectra de Ethereum (mayo de 2025), las autorizaciones ya no son el único permiso que conviene revisar. Una función más reciente de las billeteras (EIP-7702) permite que tu billetera delegue en código adicional, lo que habilita comodidades como agrupar transacciones, pero también un truco nuevo para vaciar cuentas: una sola firma maliciosa puede instalar un código “barredor” que reenvía al atacante todo lo que deposites, al instante, sin que tu frase semilla quede expuesta. En 2025, investigadores de Wintermute encontraron que más del 97 % de las primeras delegaciones de billeteras apuntaban a un mismo código barredor.

Revoke.cash muestra tus delegaciones activas en la pestaña “Delegations”, pero como las delegaciones las controla tu billetera y no las dApps, una delegación no deseada se revoca desde la billetera misma. En MetaMask, abre los detalles de la cuenta y devuélvela a una cuenta estándar. Si nunca elegiste convertirla en una `cuenta inteligente`, trata como hostil cualquier delegación que encuentres.

---

¡Es hora de reforzar las defensas de nuestra billetera! Esperamos que hayas disfrutado esta entrada del Manual del Explorador: ‘Gestionar las autorizaciones de tokens’.

No olvides coleccionar esta entrada si quieres tener una copia a mano en tus viajes, o si quieres apoyar el contenido futuro de Bankless Academy. ¡Buen viaje, Explorador!

---

## Preguntas frecuentes

### ¿Cuándo debo usar Revoke.cash?

Usa Revoke.cash cada cierto tiempo, sobre todo en los periodos en que no estás usando activamente una dApp, y en especial con los mercados de NFT. Limitar las aprobaciones reduce el riesgo de perder fondos por hackeos, exploits o estafas de phishing. Al ordenar tus aprobaciones de la más reciente a la más antigua, puedes detectar las sospechosas y revocarlas rápido, para evitar daños mayores.

### ¿Desconectar mi billetera me protege de los exploits de aprobaciones?

Desconectar tu billetera de una dApp no te protege de exploits, ni de aprobaciones ni de nada más. Las aprobaciones de token que concediste antes siguen activas aunque te desconectes, porque están guardadas onchain.

### ¿Cómo puedo evitar los exploits de autorizaciones de token y riesgos parecidos?

Un enfoque proactivo de las autorizaciones de token incluye:

* conceder autorizaciones solo a dApps de confianza.

* revisar tus autorizaciones de token cada cierto tiempo.

* eliminar las autorizaciones innecesarias o sospechosas.

* buscar delegaciones de billetera que no reconozcas.

* mantenerte al día sobre las actualizaciones de seguridad de las dApps.

Considera usar herramientas de terceros como la [extensión de navegador](https://revoke.cash) de Revoke.cash: funciona como medida preventiva frente a posibles amenazas. La extensión te avisa si estás a punto de firmar algo potencialmente dañino, y te protege de estafas de phishing y de otras actividades maliciosas.

### ¿Puedo recuperar fondos con Revoke.cash?

Por desgracia, Revoke.cash no puede recuperar fondos robados. Es una herramienta preventiva que reduce la probabilidad de caer en un exploit de aprobaciones. Eso sí, revocar las aprobaciones usadas para robarte puede impedir robos posteriores.

### ¿Por qué vacían mi billetera cada vez que la recargo?

Tu billetera puede tener detrás un “bot barredor”, un script que vigila una billetera comprometida y saca cualquier depósito nuevo antes de que puedas reaccionar. Una causa es una frase semilla comprometida. En ese caso, revocar aprobaciones no sirve de nada: abandona la billetera y crea una nueva. Pero una delegación maliciosa es una causa igual de probable: código barredor instalado con una firma que te engañaron para dar, sin que tu frase semilla se filtrara. Revisa la pestaña “Delegations” en Revoke.cash. Si encuentras una delegación que no reconoces, revócala desde tu billetera (por ejemplo, desde los detalles de la cuenta en MetaMask). Si no hay ninguna delegación y el vaciado continúa, da por hecho que tu frase semilla está comprometida y pásate a una billetera nueva.

---

**Autor**

**[Marcus](https://twitter.com/estmcmxci)** publica el boletín de la ENS DAO. Investiga cómo los ingresos excedentes que generan las comisiones de protocolo pueden financiar el desarrollo de la capa de aplicaciones y otras infraestructuras de código abierto.

**Editores**

**[Tetranome](https://twitter.com/Tetranome)** es el Project Champion de Bankless Academy, y se enfoca en la experiencia de usuario, la interfaz, el diseño y el contenido.

**[Trewkat](https://twitter.com/trewkat)** es escritora y editora en BanklessDAO. Le interesa aprender sobre cripto y NFT, con especial atención a cómo comunicar mejor ese conocimiento a otras personas.

**Mecenas**

Este artículo sin patrocinio forma parte de tu educación gratuita en Bankless Academy. ¡Colecciona el artículo para apoyar el contenido futuro!
