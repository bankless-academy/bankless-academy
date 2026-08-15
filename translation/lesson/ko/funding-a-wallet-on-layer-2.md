---
TITLE: 레이어 2 지갑에 입금하기
DESCRIPTION: CEX, 외부 온램프, 브릿지로 L2 지갑에 입금하는 방법을 배워요.
LANGUAGE: 한국어
WRITERS: HiroKennelly
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2
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
## 핵심 요약

> * Base, Optimism, Arbitrum 같은 이더리움 확장 솔루션에서 지갑에 입금하는 방법은 여러 가지예요.
>
> * 중앙화 거래소는 레이어 2로 바로 이어지는 `온램프`를 제공하는 경우가 많아요.
>
> * 외부 결제 앱을 쓰면 은행 계좌나 체크카드, 신용카드로 레이어 2 지갑에 입금할 수 있어요.
>
> * 프로토콜 브릿지로는 `이더리움 메인넷`에서 레이어 2로 자금을 보낼 수 있어요.

암호화폐를 막 시작했다면 `레이어 2`(L2)가 중요하다는 이야기가 낯설고 헷갈릴 거예요. [레이어 1](https://app.banklessacademy.com/lessons/layer-1-blockchains)은 보통 [이더리움 메인넷](https://ethereum.org/)을 가리키는데, 레이어 2는 이더리움의 보안을 그대로 물려받으면서 트랜잭션 수수료는 낮고 `블록`에 담기는 시간은 빠른 이더리움 확장 솔루션을 뜻해요. [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/), [Base](https://www.base.org/)를 들어 봤다면 그것들이 바로 레이어 2예요. [Polygon](https://polygon.technology/)도 함께 묶여 이야기되곤 해요(사실은 `사이드체인`이지만 여기서는 넘어갈게요).

모든 이더리움 트랜잭션에는 `가스`라는 수수료가 붙어요. 가스 가격은 ETH의 아주 작은 단위인 `Gwei`로 매겨요. 수수료는 수요에 따라 오르내려요. 수요가 몰린 2021년에는 메인넷에서 간단한 `토큰 스왑` 한 번에 수십 달러가 들었고, 인기 NFT 민팅 때는 훨씬 더 올랐어요. 지금은 일반적인 메인넷 트랜잭션이 1달러에 한참 못 미치고, 레이어 2에서 같은 일을 하면 몇 센트 이하예요.

레이어 2는 트랜잭션이 빨리 확정되고 비용도 싸서 혁신적인 프로토콜이 많이 자리를 잡고 있어요. 다만 생태계에 오래 있지 않았다면 레이어 2를 어떻게 시작할지 감이 잘 안 오죠. 그래도 출발점은 분명해요. 레이어 2에서 `지갑`에 입금하는 것부터예요.

L2 지갑에 입금하는 방법은 크게 세 가지예요. `중앙화 거래소`에서 레이어 2 네트워크로 바로 보내기, 외부 암호화폐 결제 서비스로 L2 지갑을 채우기, 브릿지 프로토콜로 메인넷에서 L2로 자산 보내기예요.

> 시작하려면 [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/), [Taho](https://taho.xyz/) 같은 암호화폐 지갑과 이더리움 지갑 `주소`가 필요해요. 아직 `논커스터디 지갑`을 만들지 않았다면 [이 레슨을 먼저 들어](https://app.banklessacademy.com/lessons/wallet-basics) 주세요!
>
> 논커스터디 이더리움 지갑 주소를 갖추면 암호화폐 여정을 이어 갈 준비가 끝나요.

## CEX에서 입금하기

중앙화 거래소(CEX)에서 지갑으로 바로 보내는 것이 자산을 L2로 옮기는 가장 간단한 방법일 거예요. 이미 거래소에 암호화폐가 있다면 더욱 그렇죠. 주요 CEX는 대부분 이 기능을 제공하지만, 화면에서 눈에 잘 띄지 않을 때가 있어요.

예를 들어 [Coinbase](https://www.coinbase.com/)에서는 몇 단계만 거치면 Optimism, Polygon, Base(Coinbase가 만든 레이어 2) 같은 네트워크로 자금을 바로 보낼 수 있어요.

1\. [Coinbase](https://www.coinbase.com/)에 접속해요.

2\. Coinbase에서 ETH를 [구매](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency)하거나 보유해요.

3\. 웹사이트 상단의 ‘Send & Receive’를 눌러요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. 보낼 금액을 법정화폐나 ETH로 입력하고(금액 오른쪽에서 법정화폐와 암호화폐를 전환할 수 있어요), ‘Pay with’에서 Ethereum을 고른 뒤 ‘To’ 칸에 받을 지갑 주소를 넣어요. ‘Continue’를 눌러요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. 다음 화면에서 ‘Network’를 눌러 네트워크를 Ethereum에서 Optimism으로 바꿔요(목록에는 Base 같은 다른 레이어 2도 있어요).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. 내용을 확인하고 맞으면 ‘Send Now’를 눌러요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

주요 거래소는 대부분 암호화폐를 L2로 바로 보내는 기능을 제공해요. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/), [Kraken](https://www.kraken.com/) 모두 Base, Optimism, Arbitrum 같은 주요 레이어 2로의 출금을 지원해요. 꿀팁: 보내기 전에 거래소의 출금 네트워크 목록에서 어떤 L2를 지원하는지 꼭 확인해요.

## 외부 온램프

L2 지갑에 입금하는 또 하나의 간단한 방법은 여러 외부 암호화폐 결제 회사가 제공하는 L2 직접 전송 서비스예요. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/), [Transak](https://global.transak.com/)은 중앙화 거래소를 거치지 않고 지갑에 입금할 때 가장 많이 쓰이는 세 곳이에요.

대부분의 거래소처럼 이런 외부 `온램프`도 `고객 신원 확인` 정보를 요구해요. 하지만 그 기본 단계만 지나면 생태계 곳곳에서 암호화폐를 사서 레이어 2로 옮기기가 쉬워져요.

MoonPay에서는 이렇게 해요.

1\. [MoonPay](https://www.moonpay.com/)에 접속해요.

2\. 웹사이트 상단이나 가운데의 ‘Buy crypto’를 눌러요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. 보낼 법정화폐 금액과 통화 단위를 입력해요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. 자산을 고르는데, 여기서는 ETH예요. “ETH”를 입력하면 ETH를 살 수 있는 여러 네트워크가 보여요(아래로 내려야 할 수도 있어요). 쓰고 싶은 레이어 2를 고르고 ‘Continue’를 눌러요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. 다음으로 본인 확인 정보와 결제 정보를 입력하라는 안내가 나와요.

6\. 입력을 마치면 이더리움 지갑 주소를 넣어요. 그 지갑을 안전하게 쓸 수 있는지 확인하라는 안내도 나와요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. 모두 끝내고 정보가 맞는지 확인한 뒤 ‘Pay’를 눌러요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

CEX와 마찬가지로 주요 외부 결제 온램프도 대부분 L2 직접 전송을 지원해요. 이런 기능을 활용해 트랜잭션 수수료를 아끼고 `블록체인` 탐험의 범위를 넓혀 봐요.

## 브릿지로 입금하기

이미 `이더리움 메인넷`에 자금이 있다면 브릿지 프로토콜을 쓰는 것이 L2로 옮기는 가장 쉬운 방법이에요. 브릿지는 암호화폐 세계 곳곳으로 자금을 옮기도록 만든 프로토콜을 부르는 이름이고, 이더리움 메인넷에서 레이어 2로 옮기는 브릿지도 여럿 있어요.

### 네이티브 브릿지

네이티브 브릿지는 레이어 2 프로토콜이 직접 만든 브릿지예요. Arbitrum, Optimism, Base 같은 `옵티미스틱 롤업`에서는 입금이 보통 몇 분 안에 L2에 도착하지만, 메인넷으로 되돌릴 때는 일주일쯤 걸려요. [Arbitrum Bridge](https://bridge.arbitrum.io/)와 [Optimism Bridge](https://app.optimism.io/bridge/) 모두 이런 방식이에요. 기다리는 기간 동안 네트워크가 잘못된 출금을 정산 전에 잡아낼 수 있거든요.

### 외부 브릿지

아무도 기다리기를 좋아하지 않으니, L2로 자금을 즉시 오갈 수 있게 해 주는 외부 브릿지 서비스도 여럿 있어요. [Across Protocol](https://across.to/bridge)과 [Relay](https://relay.link/bridge)가 많이 쓰이고, [Bungee](https://bungee.exchange/)에서는 여러 프로토콜의 브릿지 수수료를 비교할 수 있어요. 예를 들어 Across는 이렇게 써요.

1\. [Across Protocol](https://across.to/bridge) 브릿지에 접속해 지갑을 연결해요.

2\. L2로 자금을 옮기려면 ‘From’에서 Ethereum을 골라요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. 옮길 자산과 금액을 골라요(꿀팁: 그 블록체인의 기본 `코인`만 옮기세요. 여기서는 ETH예요).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. 다음으로 ‘To’에서 쓸 L2를 골라요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. 트랜잭션을 확인하고 문제가 없으면 ‘Send’를 눌러요.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

메인넷에서 L2로 자금을 옮기는 일은 이렇게 간단하고, 거의 모든 브릿지가 같은 방식이에요. 보낼 블록체인을 고르고, Base나 Optimism 같은 목적지를 정하고, 자산과 금액을 선택하면 블록체인 사이의 틈을 건너가요. 꿀팁: CEX에서 보낼 때처럼, 목적지 L2에 맞는 브릿지는 [L2BEAT](https://l2beat.com/bridges/summary)에서 찾을 수 있어요.

## L2로 가는 길

레이어 2는 메인넷에서는 비용 때문에 엄두를 내기 어려운 탈중앙화 금융 실험을 경험 수준과 상관없이 해 볼 수 있게 해 줘요. 이 네트워크에서는 트랜잭션 비용이 몇 센트뿐이라([여기](https://www.growthepie.com/)서 비교해 볼 수 있어요), 스왑, `유동성 풀`, `이자 농사` 같은 탈중앙화 금융의 기본 요소를 익히기에 좋아요.

CEX나 브릿지로 자금을 L2에 옮기는 일은 초보에서 능숙한 사용자로 가는 여정의 필수 단계예요. 지갑에 자금이 보이려면 지갑 설정에서 네트워크를 추가해야 할 수도 있는데, [Chainlist](https://chainlist.org/)에서 할 수 있어요. 자금이 L2 지갑에 잘 도착했는지만 확인하고 싶다면 여러 네트워크를 한 번에 찾아 주는 [Blockscan](https://blockscan.com/) 같은 `블록 탐색기`에서 주소를 조회하거나, [Uniswap](https://app.uniswap.org/) 같은 DEX에서 L2 네트워크와 자산을 골라 잔액을 볼 수 있어요.

실력을 키울수록 트랜잭션 수수료를 줄이는 법도 익혀야 해요. L2 지갑에 입금하는 법을 배우는 것이 첫걸음이고, 그다음 발걸음은 각자의 몫이에요. 탐험가님, 환영해요. 새로운 세계가 기다리고 있어요.

---

이제 움직여 볼까요, 레이어 2 이더리움이 기다려요! 탐험가 핸드북의 이 항목 ‘레이어 2 지갑에 입금하기’가 즐거웠기를 바라요.

여행 중에 쉽게 찾아볼 사본을 갖고 싶거나 Bankless Academy의 다음 콘텐츠를 응원하고 싶다면 이 항목을 수집하는 것도 잊지 마세요. 안전한 여정 되세요, 탐험가님!

***

**저자**

[**Hiro Kennelly**](https://twitter.com/HiroKennelly)는 BanklessDAO의 작가이자 편집자, 코디네이터이고 Good Morning News의 편집장이에요. DAOpunks에서 보조금 중심 조직을 만드는 일도 돕고 있어요.

**편집자**

[**Trewkat**](https://twitter.com/trewkat)은 BanklessDAO의 작가이자 편집자예요. 암호화폐와 NFT를 최대한 많이 배우는 데 관심이 있고, 그 지식을 어떻게 하면 잘 전할 수 있을지에 특히 집중해요.

**후원**

이 글은 [**Optimism**](https://www.optimism.io/)의 후원으로 만들어졌어요.
