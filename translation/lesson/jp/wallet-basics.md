---
TITLE: ウォレットの基礎
DESCRIPTION: 仮想通貨ウォレットとは Learn how wallets work and create your first one today!
LANGUAGE: 英語
WRITERS: Ap0ll0517, Jordy, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: X
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

# 財布の紹介

**バンクレス・エクスプローラーの皆様、こんにちは！**

ブロックチェーン・マルチバースへの旅をさらに深くする時が来た。 この分野のエクスプローラーは、最終的に暗号ウォレットを作成する必要がある。

お財布は、みなさんが慣れ親しんでいる`ウェブ2`インターネットの口座のようなものです。 `暗号通貨を`使用したり、`ブロックチェーンアプリに`接続したりすることができる！

このレッスンでは、ウォレットとその仕組み、そして暗号通貨を安全に保管する方法を紹介します。 We’ll end with a guide on how to set one up and access **the Ethereum blockchain, the home of Bankless Academy.**

![](https://app.banklessacademy.com/images/wallet-basics/wallet-intro-b6d4487a.png)

# 財布の定義

仮想通貨ウォレットとは

簡単に定義すると、`ブロックチェーン`上のアカウントで、デジタル資産を保管したり、ブロックチェーンアプリにログインしたりするために使用される。

インターネット上に自分専用の金庫があるようなもので、その鍵を開けるのは自分しかいない。 同時に、この金庫は通常のウェブサイトのアカウントに似ている。 購入や`暗号通貨の`送受信、ブロックチェーンとのやりとりに利用できる。

しかし、皆さんが慣れ親しんでいる`ウェブ2`アカウントとは異なり、1つのウォレットでブロックチェーン全体、そして多数のブロックチェーンアプリにアクセスすることができる。 インターネット全体に1つのアカウントを持っているようなものだ。

![](https://app.banklessacademy.com/images/wallet-basics/wallet-definition-d2912914.svg)

# 財布を作るのは難しいですか？

以前は難しかったが、最近では誰でも簡単に財布を作ることができる。

コンピューター（または携帯電話のアプリ）のソフトウェアのダウンロードとインストールに慣れているのであれば、最初の財布の作成に問題はないだろう。

The trickier part of managing a wallet involves keeping it secure, which we’ll dive into shortly!

`お財布アプリを`選ぶのもおっくうに感じるかもしれない。 これは、ブロックチェーン上のウォレットにアクセスするためにデバイスにインストールするアプリです。 Zerionウォレット・アプリから始めることをお勧めする：使い勝手が良く、多くの人気ブロックチェーンにアクセスできる。 `web3`スペースに慣れてくると、他のプロバイダーを探したり、複数のウォレットを作成したりすることになるでしょう。

![](https://app.banklessacademy.com/images/wallet-basics/is-creating-a-wallet-difficult-9bd9aab4.svg)

# Knowledge Check 1

What is a wallet?

- [ ] A blockchain

> ℹ️ Try again! Your wallet is hosted on a blockchain.

- [ ] A cryptocurrency

> ℹ️ Try again! Cryptocurrencies are something you hold in your wallet.

- [ ] A digital collectible

> ℹ️ Try again! Digital collectibles are something you hold in your wallet.

- [x] A blockchain account

> ℹ️ Correct! Wallets are accounts used to interact with blockchains.

# Wallets & Password Recovery

Here is one of the most important things to understand about `web3` wallets: **There are no “password resets” or “password changes”.**

Most of us are used to these features. If we forget a password, we click a button, do a few things, and get a new password. Easy.

Not so with crypto wallets. Because of how blockchains work, wallets are assigned an “address” and a complex “password” when they’re created, and you do not choose these.

This address and password combination cannot be changed, although you can always create a new wallet if you need to. Some newer wallets add recovery features, but never rely on that. Let’s learn a bit more about these special addresses and passwords, so that we can feel confident using them!

# Your wallet’s public key

Your wallet’s `address` is created from its `public key`. Think of the address as your username: it often looks like a random series of letters and numbers.

Example: _0xe1887fF140BfA9D3b45D0B2077b7471124acD242_

It is possible to create easier to remember versions of this with some `web3` services, but that’s a lesson for another time.

You can also think of your address like a house address. It is public, anyone can see it, and it tells others where they can send you crypto assets, without revealing anything personal about you.

It is perfectly safe to share your wallet’s **address**.

**Note:** A single wallet app can hold multiple public/`private key` pairs.

![](https://app.banklessacademy.com/images/wallet-basics/your-wallets-public-key-87828c3e.svg)

# Your wallet’s private key

If your address is like a house address, then the `private key` is like the key to the front door. It’s the “password” to your funds and assets.

Example: _eceac283e04f121cbd40b69e16ab9dec0220df80bf092a4c72b53e69cf74d215_

**It’s never safe to share this key: you could lose your wallet and everything in it.**

Most people recommend that you do not even save it digitally. Whoever has access to a private key has access to whatever is in the `wallet`.

This is more than just a password. You cannot reset it if you lose access to it.

Luckily, most `blockchain apps` do not require you to type a long, complicated string of characters every time you need to send funds or sign a blockchain transaction. The private key usually operates quietly in the background.

![](https://app.banklessacademy.com/images/wallet-basics/your-wallets-private-key-0d84ad39.svg)

# Knowledge Check 2

Your wallet address is like your _____ and your private key is like your _____ .

- [ ] Routing Number / Account Number

> ℹ️ Try again! Unlike a bank account number, your private key shouldn’t be shared with others.

- [ ] Email address / Zip code

> ℹ️ Try again! Unlike a zip code, your private key shouldn’t be shared with others.

- [x] House address / House key

> ℹ️ Correct! Your address lets others find you, while only your private key lets you in.

- [ ] Phone Number / Passport Number

> ℹ️ Try again! These are examples of public & private information, but they’re unrelated.

# Recovery Phrase

When you set up a new wallet, your wallet app will provide you with a `recovery phrase`.

Also called a “seed phrase” or “secret phrase”, this string of words can be used to access your wallet and crypto assets if:

- Your `wallet app` or device fails unexpectedly or is damaged.
- Your device has been lost or stolen.
- You want to access your wallet on multiple devices.

Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. This data is used to generate both the `public key` and `private key` for your wallet.

Wallet recovery does **not** change or reset the keys.

Your recovery phrase is like a master key: it can recreate every key pair in your wallet. **Never share your recovery phrase.**

![](https://app.banklessacademy.com/images/wallet-basics/recovery-phrase-c614c36c.svg)

# Knowledge Check 3

Can you access your wallet with a recovery phrase if your device gets damaged or lost?

- [ ] No

> ℹ️ Try again!

- [x] Yes

> ℹ️ Correct! Recovery phrases grant access to your wallet, even on multiple devices.

# Types of Wallet

Just as there are many types of computer software, there many types of wallet. Let’s look at the four main categories:

- 🏦 **Custodial wallets:** where a third party is responsible for your private keys.
- 👤 **Self-custody (non-custodial) wallets:** where you are responsible for your private keys.

There are two styles of `self-custody wallet`:

- 🔥 **Hot wallets:** software on your desktop or phone.
- 🧊 **Cold wallets:** a piece of hardware (like a memory stick) you store somewhere safe.

You may also hear about `smart wallets`: an emerging type that runs code, enabling extras like passkey logins and account recovery.

Each wallet serves a different use-case. Don’t worry, we’ll only be creating one wallet today.

![](https://app.banklessacademy.com/images/wallet-basics/types-of-wallet-094f0eb1.png)

# Custodial Wallets

Since your `private key` unlocks access to your `wallet`, keeping it safe and secure is very important!

`Custodial wallet` services include cryptocurrency exchanges such as Coinbase and Kraken. **They are your wallet custodian**: they look after your private keys for you. You access their services like any other website (with an email login and resettable password).

This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Also, your access to some `blockchain apps` may be limited.

![](https://app.banklessacademy.com/images/wallet-basics/custodial-wallets-4eede755.svg)

# Knowledge Check 4

Do you control your private key with a custodial wallet?

- [ ] Yes

> ℹ️ Try again!

- [x] No

> ℹ️ Correct! Custodial wallets require trust in a third party (custodian) to control your private keys.

# Non-custodial Wallet

A `self-custody wallet` (like Zerion or Trezor) is when you fully control your `private key`. You have **no custodian**, and you alone are responsible for keeping your private key safe.

These wallets offer the widest range of access and freedom within the world of `web3`. You never have to worry about a third party freezing or mishandling your funds.

The trade-off is in risk: if you lose access to your `recovery phrase`, or your private key is compromised, there is often very little you can do to restore access to the wallet.

Whichever route you choose, it pays to be familiar and comfortable with wallet security. We’ll give you some tips before you complete this lesson.

![](https://app.banklessacademy.com/images/wallet-basics/non-custodial-wallet-833c3d6b.svg)

# Knowledge Check 5

Are you responsible for your private key with a self-custody wallet?

- [x] Yes

> ℹ️ Correct! With a self-custody wallet you are solely responsible for your private keys.

- [ ] No

> ℹ️ Try again!

# Hot Wallets

You will hear the terms “hot” and “cold wallet” quite a bit in `web3`.

A `hot wallet` is a wallet accessed via an app on your device, the Zerion app for example. Similar to many `web2` apps, a wallet app is consistently connected to the internet.

Your `private key` is encrypted and stored inside the wallet app, and is only accessed when you interact with the blockchain. These wallets are named ‘hot wallets’ for this “hot” connection between the internet and your private key.

Hot wallets are convenient for small day-to-day interactions, much like a physical wallet you keep in your pocket. We’ll be creating a hot wallet today!

![](https://app.banklessacademy.com/images/wallet-basics/hot-wallets-9356886d.svg)

# Cold Wallets

As you dive deeper into your `web3` journey, you will come to know a landscape full of interesting tech trade-offs.

`Cold wallets` grant higher security at the cost of convenience. A cold wallet is one where your `private key` is stored on a dedicated hardware device (like a memory stick or external hard drive). You must physically connect the hardware wallet to your computer to access your wallet on the blockchain. Your private key is never directly connected to the internet. Cold wallets are named after this “cold” internet connection.

They are widely considered to be more secure than `hot wallets`, because your `private key` is stored offline, out of reach of digital attackers.

Ledger and Trezor are examples of `cold wallets`.

![](https://app.banklessacademy.com/images/wallet-basics/cold-wallets-0e3183d1.svg)

# Knowledge Check 6

Which of the following wallet types is considered the most secure?

- [ ] All wallets are about the same

> ℹ️ Try again! There are various trade-offs for each wallet type, with level of security being one of them.

- [ ] A hot wallet

> ℹ️ Try again! A hot wallet has an active internet connection which makes it more susceptible to digital attack.

- [ ] A custodial wallet

> ℹ️ Try again! The third party holding the private keys can get hacked or go bankrupt.

- [x] A cold wallet

> ℹ️ Correct! Cold wallets aren’t actively connected to the internet, making them more attack-resistant.

# Wallet Security

Regardless if your `self-custody wallet` is hot or cold, there are many smart security practices you should develop.

🖊️ Record your `recovery phrase` on durable physical material (laminated paper, or even steel) and store it somewhere very safe. Never share it or your `private key` with anyone. **It’s more than just a password.**

🔍 Double-check the details whenever you send funds or sign, even for small amounts: mistakes cannot be undone.

🔭 Research any `blockchain apps` you plan to use before connecting your wallet or signing their transactions.

💰 Use wallets with low amounts of funds to try new things and explore web3, and consider storing high value assets across multiple wallet accounts.

🛡️ Watch out for scams that trick you into signing harmful transactions or approvals: our [Web3 Security](https://app.banklessacademy.com/lessons/web3-security) lesson shows how to spot them.

![](https://app.banklessacademy.com/images/wallet-basics/wallet-security-3a185d90.png)

# Knowledge Check 7

What is the safest way to protect your recovery phrase?

- [x] Write it on a durable material and store it in a safe place.

> ℹ️ Correct! A safely stored physical backup with no digital traces is the safest storage option.

- [ ] Save it on your computer and print it out.

> ℹ️ Try again! If your computer is hacked, your recovery phrase could be found. Printing also opens many attack opportunities.

- [ ] Take a screenshot and save it on your phone.

> ℹ️ Try again! If your phone is hacked, you could lose all assets in your wallet.

- [ ] Save it in your password manager.

> ℹ️ Try again! A single password manager breach could expose it. Keep your phrase offline.

# You’re ready to create your first wallet!

In fact, you’ll need one if you want to claim proof of completing this quest!

There are several `self-custody`, `hot wallet` apps available today. We will explore the Zerion wallet for the rest of this lesson as:

- ⚙️ It’s compatible with most `blockchain apps`.
- ⚡ The interface is incredibly smooth and easy to use.
- 💻 It has a browser extension for Chrome, Brave, Edge, Opera, and Firefox internet browsers.
- 📱 It is also available as a mobile app for Android and iOS users.
- 🗣️ Zerion supports a variety of languages.

The end of the lesson is right around the corner, where we will share your instructions for setting up your wallet with Zerion!

![](https://app.banklessacademy.com/images/wallet-basics/youre-ready-to-create-your-first-wallet-6d8136f2.svg)

# Knowledge Check 8

Is Zerion a custodial wallet app?

- [ ] Yes

> ℹ️ Try again! Your Zerion wallet isn’t controlled by a custodian.

- [x] No

> ℹ️ Correct! Zerion wallets are self-custody wallets, controlled by you, and you alone.
