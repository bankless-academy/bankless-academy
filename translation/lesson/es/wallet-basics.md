---
TITLE: Conceptos Básicos de la Billetera
DESCRIPTION: '¿Qué es una billetera cripto? Learn how wallets work and create your first one today!'
LANGUAGE: Español
WRITERS: Ap0ll0517, Jordy, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: OrnellaWeb3
LINK: https://app.banklessacademy.com/lessons/wallet-basics
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

# Introducción a las Billeteras

**¡Saludos Explorador Bankless!**

Es hora de profundizar tu viaje en el multiverso blockchain. Cada explorador de este espacio necesita crear una billetera criptográfica.

Las billeteras son como las cuentas de internet `web2` a las que estás acostumbrado. Utilizarás una billetera para conectarte al ecosistema de blockchain, también conocido como `web3`. En el podrás utilizar `criptomonedas` y conectarte a `aplicaciones blockchain`.

En esta lección, te presentaremos qué son las billeteras cripto, cómo funcionan y cómo mantener tus criptomonedas segura. We’ll end with a guide on how to set one up and access **the Ethereum blockchain, the home of Bankless Academy.**

![](https://app.banklessacademy.com/images/wallet-basics/wallet-intro-b6d4487a.png)

# Billetera: Definición

¿Qué es exactamente una billetera cripto?

La definición abreviada es: una cuenta en una `cadena de bloques`, utilizada para almacenar activos digitales e iniciar sesión en aplicaciones de la misma.

Es como tener tu propia caja fuerte personal en internet y tú tienes la única llave para abrirla. Al mismo tiempo, esta caja fuerte es similar a una cuenta de un sitio web normal. Puedes usarla para realizar compras, enviar o recibir `criptomonedas` e interactuar con una cadena de bloques.

Sin embargo, a diferencia de las cuentas `web2` a las que estás acostumbrado, una única billetera puede acceder a una cadena de bloques completa, y a su vez, a un gran número de aplicaciones en ella. Es como tener una sola cuenta para todo internet.

![](https://app.banklessacademy.com/images/wallet-basics/wallet-definition-d2912914.svg)

# ¿Es difícil crear una billetera?

Antes era difícil, pero hoy en día cualquiera puede crear una billetera con bastante facilidad.

Si te sientes cómodo descargando e instalando programas en tu computador (o aplicaciones en tu teléfono), no tendrás ningún problema para crear tu primera billetera.

The trickier part of managing a wallet involves keeping it secure, which we’ll dive into shortly!

Elegir cual `aplicación de billetera` usar también puede resultar intimidante. Esta es la aplicación que instalarás en tu dispositivo para acceder a tu billetera en la cadena de bloques. Recomendamos comenzar con la aplicación de billeteras Zerion: es fácil de usar y tiene acceso a muchas blockchains populares. A medida que te sientas más cómodo en el espacio `web3`, es probable que explores otras aplicaciones y crees múltiples billeteras.

![](https://app.banklessacademy.com/images/wallet-basics/is-creating-a-wallet-difficult-9bd9aab4.svg)

# Knowledge Check 1

¿Qué es una billetera?

- [ ] Una cadena de bloques

> ℹ️ ¡Inténtalo de nuevo! Tu billetera está alojada o 'vive' en una cadena de bloques.

- [ ] Una criptomoneda

> ℹ️ ¡Inténtalo de nuevo! Las criptomonedas se tienen en la billetera.

- [ ] Un coleccionable digital

> ℹ️ ¡Inténtalo de nuevo! Los coleccionables digitales se tienen en tu billetera.

- [x] A blockchain account

> ℹ️ ¡Correcto! Las billeteras son cuentas utilizadas para interactuar con blockchains.

# Billeteras y Recuperación de Contraseñas

Esta es una de las cosas más importantes que hay que entender sobre las billeteras `web3`: **no existe el "restablecimiento de contraseña" o "cambios de contraseña".**

La mayoría de nosotros estamos acostumbrados a estas funciones. Si olvidamos una contraseña, pulsamos un botón, hacemos algunas acciones y obtenemos una nueva contraseña. Fácil.

No ocurre lo mismo con las billeteras cripto. Because of how blockchains work, wallets are assigned an “address” and a complex “password” when they’re created, and you do not choose these.

This address and password combination cannot be changed, although you can always create a new wallet if you need to. Some newer wallets add recovery features, but never rely on that. Aprendamos un poco más sobre estas direcciones especiales y contraseñas, ¡para que podamos sentirnos seguros de usarlas!

# La llave pública de tu billetera

Your wallet’s `address` is created from its `public key`. Think of the address as your username: it often looks like a random series of letters and numbers.

Ejemplo: _0xe1887fF140BfA9D3b45D0B2077b7471124acD242_

Es posible crear versiones de esta dirección más fáciles de recordar con algunos servicios `web3`, pero eso es una lección para otro momento.

You can also think of your address like a house address. It is public, anyone can see it, and it tells others where they can send you crypto assets, without revealing anything personal about you.

It is perfectly safe to share your wallet’s **address**.

**Nota:** Una única aplicación de billetera puede contener varios pares de llave públicas y `llave privada`.

![](https://app.banklessacademy.com/images/wallet-basics/your-wallets-public-key-87828c3e.svg)

# La llave privada de tu billetera

If your address is like a house address, then the `private key` is like the key to the front door. Es la "contraseña" de tus fondos y activos.

Example: _eceac283e04f121cbd40b69e16ab9dec0220df80bf092a4c72b53e69cf74d215_

**It’s never safe to share this key: you could lose your wallet and everything in it.**

La mayoría de la personas recomienda que ni siquiera la guardes digitalmente. Cualquiera que tenga acceso a una llave privada, tiene acceso a lo que esté en la `billetera` correspondiente.

Esto es más que una simple contraseña. No podrás restablecerla si pierdes acceso a ella.

Afortunadamente, la mayoría de `aplicaciones blockchain` no requieren que escribas una larga y complicada cadena de caracteres cada vez que necesites enviar fondos o firmar una transacción. La llave privada suele funcionar silenciosamente en segundo plano.

![](https://app.banklessacademy.com/images/wallet-basics/your-wallets-private-key-0d84ad39.svg)

# Knowledge Check 2

Your wallet address is like your _____ and your private key is like your _____ .

- [ ] Número de ruta / Número de cuenta

> ℹ️ ¡Inténtalo de nuevo! A diferencia de un número de cuenta bancaria, tu llave privada no debe compartirse con otros.

- [ ] Email address / Zip code

> ℹ️ ¡Inténtalo de nuevo! A diferencia del código postal, tu llave privada no debe compartirse con otros.

- [x] House address / House key

> ℹ️ ¡Correcto! Your address lets others find you, while only your private key lets you in.

- [ ] Número de teléfono / número de pasaporte

> ℹ️ ¡Inténtalo de nuevo! Estos son ejemplos de información pública & privada, pero no están relacionados.

# Frase de Recuperación

Cuando configures una nueva billetera, la aplicación de tu billetera te proporcionará una `frase de recuperación`.

También llamada "frase semilla" o "frase secreta", esta cadena de palabras puede utilizarse para acceder a tu billetera y a tus criptoactivos si:

- Tu `aplicación de billetera` o dispositivo falla inesperadamente o es dañada.
- Tu dispositivo se ha perdido o robado.
- Quieres acceder a tu billetera desde varios dispositivos.

La mayoría de las frases de recuperación son una lista de 12 a 24 palabras que representan una cantidad de datos específicos. Estos datos se utilizan para generar tanto la `llave pública` como la `llave privada` de tu billetera.

La recuperación de la billetera **no** cambia ni restablece las claves.

Your recovery phrase is like a master key: it can recreate every key pair in your wallet. **Nunca compartas tu frase de recuperación.**

![](https://app.banklessacademy.com/images/wallet-basics/recovery-phrase-c614c36c.svg)

# Knowledge Check 3

¿Puedes acceder a tu billetera con una frase de recuperación si tu dispositivo se daña o se pierde?

- [ ] No

> ℹ️ ¡Inténtalo de nuevo!

- [x] Yes

> ℹ️ ¡Correcto! Las frases de recuperación permiten el acceso a tu billetera, incluso en múltiples dispositivos.

# Tipos de Billeteras

Así como existen muchos tipos de programas informáticos, también existen muchos tipos de billeteras. Veamos las cuatro categorías principales:

- 🏦 **Billeteras de custodia:** en los que un tercero es responsable de tus claves privadas.
- **👤 Billeteras de autocustodia (sin custodia de un tercero):** en los que eres responsable de tus llaves privadas.

Existen dos estilos de `billetera de autocustodia`:

- 🔥 **Billeteras calientes:** software en tu computador o teléfono.
- 🧊 **Billeteras frías:** una pieza de hardware (como un dispositivo de memoria) que almacenas en un lugar seguro.

You may also hear about `smart wallets`: an emerging type that runs code, enabling extras like passkey logins and account recovery.

Each wallet serves a different use-case. No te preocupes, hoy crearemos sólo una billetera.

![](https://app.banklessacademy.com/images/wallet-basics/types-of-wallet-094f0eb1.png)

# Billetera Custodiadas

Dado que tu `llave privada` desbloquea el acceso a tu `billetera`, ¡es muy importante mantenerla segura!

Ejemplos de servicios de `billetera custodiada` son las bolsas de intercambio de criptodivisas como Coinbase y Kraken. **They are your wallet custodian**: they look after your private keys for you. Accedes a sus servicios como en cualquier otro sitio web (con un nombre de usuario de correo electrónico y una contraseña restablecible).

Esto puede ser todo lo que algunas personas necesiten, pero requiere que confíes en terceros la seguridad de tus criptoactivos, como a su vez el acceso a ellos cuando quieras comercializarlos o enviarlos a algún lugar. Además, tu acceso a algunas `aplicaciones blockchain` podría estar limitado.

![](https://app.banklessacademy.com/images/wallet-basics/custodial-wallets-4eede755.svg)

# Knowledge Check 4

¿Controlas tú la llave privada de una billetera custodiada?

- [ ] Sí

> ℹ️ ¡Inténtalo de nuevo!

- [x] No

> ℹ️ ¡Correcto! Las billeteras custodiadas requieren confiar en un tercero (custodio) para que controle tus llaves privadas.

# Billetera No Custodiada o de Autocustodia

Tienes una `billetera de autocustodia` (como Zerion o Trezor) cuando controlas por completo su acceso a través de tu `llave privada`. **No tiene custodio externo**, y sólo tú eres responsable de mantener a salvo tu llave privada.

Estas billeteras ofrecen el mayor rango de acceso y libertad dentro del mundo `web3`. Nunca tendrás que preocuparte de que un tercero congele o maneje mal tus fondos.

La contrapartida está en el riesgo: si pierdes el acceso a tu `frase de recuperación`, o tu llave privada se ve comprometida, a menudo existe muy poco que puedas hacer para restaurar el acceso a la billetera.

Cualquiera que sea la ruta que elijas, trae sus beneficios el estar familiarizado y cómodo/a con la seguridad de tu billetera. Te daremos algunos consejos antes de completar esta lección.

![](https://app.banklessacademy.com/images/wallet-basics/non-custodial-wallet-833c3d6b.svg)

# Knowledge Check 5

¿Eres tú el responsable de tu llave privada con una billetera de autocustodia?

- [x] Yes

> ℹ️ ¡Correcto! Con una billetera de autocustodia, tú eres el único responsable de tus llaves privadas.

- [ ] No

> ℹ️ ¡Inténtalo de nuevo!

# Billeteras Calientes

Escucharás los términos "billetera caliente" y "billetera fría" bastante en `web3`.

A `hot wallet` is a wallet accessed via an app on your device, the Zerion app for example. Al igual que muchas aplicaciones `web2`, una aplicación de billetera está siempre conectada a internet.

Tu `llave privada` se cifra y almacena dentro de la aplicación de billetera, y sólo se accede a ella cuando interactúas con la cadena de bloques. Estas billeteras se llaman ‘billeteras calientes’ por esta conexión “caliente o activa” entre internet y su llave privada.

Las billeteras calientes son convenientes para las interacciones pequeñas del día a día, de la misma manera que una billetera o monedero físics que mantienes en tu bolsillo. ¡Hoy crearemos una billetera caliente!

![](https://app.banklessacademy.com/images/wallet-basics/hot-wallets-9356886d.svg)

# Billeteras Frías

A medida que profundices tu viaje en `web3`, irás conociendo un panorama lleno de interesantes equilibrios tecnológicos.

Las `billeteras frías` garantizan una mayor seguridad a costa de la conveniencia. Una billetera fría es aquella en la que tu `llave privada` se almacena en un dispositivo hardware dedicado (como un disco de memoria o disco duro externo). Debes conectar físicamente la billetera física a su computador para acceder a tu billetera en la cadena de bloques. En este caso, tu llave privada nunca está o ha estado conectada directamente a internet. Las billeteras frías se llaman así debido a esta conexión de internet “fría”.

They are widely considered to be more secure than `hot wallets`, because your `private key` is stored offline, out of reach of digital attackers.

Ledger y Trezor son ejemplos de `billeteras frías`.

![](https://app.banklessacademy.com/images/wallet-basics/cold-wallets-0e3183d1.svg)

# Knowledge Check 6

¿Cuál de los siguientes tipos de billetera se considera el más seguro?

- [ ] Todas las billeteras son similares

> ℹ️ ¡Inténtalo de nuevo! Cada tipo de billetera tiene sus ventajas y desventajas, y el nivel de seguridad es una de ellas.

- [ ] Una billetera caliente

> ℹ️ ¡Inténtalo de nuevo! Una billetera caliente tiene una conexión activa a internet que la hace más susceptible a ataques digitales.

- [ ] Una billetera custodiada

> ℹ️ ¡Inténtalo de nuevo! El tercero que posea las llaves privadas puede ser hackeado o ir en quiebra.

- [x] A cold wallet

> ℹ️ ¡Correcto! Las billeteras frías no están conectadas activamente a internet, lo que las hace resistente a ataques.

# Seguridad de la Billetera

Independientemente de si tu `billetera de autocustodia` es caliente o fría, hay muchas prácticas de seguridad inteligentes que deberías desarrollar.

🖊️ Record your `recovery phrase` on durable physical material (laminated paper, or even steel) and store it somewhere very safe. Nunca la compartas ni compartas tu `llave privada` con nadie. **It’s more than just a password.**

🔍 Double-check the details whenever you send funds or sign, even for small amounts: mistakes cannot be undone.

🔭 Research any `blockchain apps` you plan to use before connecting your wallet or signing their transactions.

💰 Use wallets with low amounts of funds to try new things and explore web3, and consider storing high value assets across multiple wallet accounts.

🛡️ Watch out for scams that trick you into signing harmful transactions or approvals: our [Web3 Security](https://app.banklessacademy.com/lessons/web3-security) lesson shows how to spot them.

![](https://app.banklessacademy.com/images/wallet-basics/wallet-security-3a185d90.png)

# Knowledge Check 7

¿Cuál es la forma más segura de proteger tu frase de recuperación?

- [x] Write it on a durable material and store it in a safe place.

> ℹ️ ¡Correcto! Una copia de seguridad física sin rastros digitales es la opción de almacenamiento más segura.

- [ ] Guardarlo en tu computador e imprimirlo

> ℹ️ ¡Inténtalo de nuevo! Si su computadora es hackeada, su frase de recuperación podría ser encontrada. Imprimir también abre muchas oportunidades de ataque.

- [ ] Toma una captura de pantalla y guárdala en tu teléfono.

> ℹ️ ¡Inténtalo de nuevo! Si tu teléfono es hackeado, podrías perder todos los activos de tu billetera.

- [ ] Guardarlo en su gestor de contraseñas.

> ℹ️ ¡Inténtalo de nuevo! A single password manager breach could expose it. Keep your phrase offline.

# ¡Estás listo para crear tu primera billetera!

De hecho, necesitarás una si deseas reclamar la certificación de nuestra prueba de conocimientos.

Hoy en día existen varias aplicaciones de `billetera caliente` con `autocustodia`. Para finalizar esta lección, exploraremos la billetera de Zerion, ya que:

- ⚙️ Es compatible con la mayoría de las `aplicaciones blockchain`.
- ⚡ La interfaz es increíblemente fluida y fácil de usar.
- 💻 It has a browser extension for Chrome, Brave, Edge, Opera, and Firefox internet browsers.
- 📱 También está disponible como aplicación móvil para usuarios de Android e iOS.
- 🗣️ Zerion soporta varios idiomas.

El final de la lección está a la vuelta de la esquina, ¡donde compartiremos las instrucciones para configurar tu billetera con Zerion!

![](https://app.banklessacademy.com/images/wallet-basics/youre-ready-to-create-your-first-wallet-6d8136f2.svg)

# Knowledge Check 8

¿Es Zerion una aplicación de billetera custodiada?

- [ ] Sí

> ℹ️ ¡Inténtalo de nuevo! Tu billetera Zerion no está controlada por un custodiano.

- [x] No

> ℹ️ ¡Correcto! Zerion wallets are self-custody wallets, controlled by you, and you alone.
