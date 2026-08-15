---
TITLE: Web3 사용자 이름 등록하기
DESCRIPTION: ENS로 지갑 주소를 원하는 이름으로 바꾸고 디지털 신원을 만들어 봐요.
LANGUAGE: 한국어
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/registering-your-web3-username
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

> * Ethereum Name Service(ENS)를 쓰면 여러 블록체인에서 자신을 나타내는 하나의 사용자 이름을 만들 수 있어요.
>
> * ENS 이름은 길고 복잡한 지갑 주소를 *web3explorer.eth* 같은 기억하기 쉬운 이름으로 바꿔서 `암호화폐` 송금과 수령을 간단하게 만들어요.
>
> * ENS 이름은 온라인 활동 전반과 연결돼요. 암호화폐 포트폴리오, 블록체인 활동 기록, 소셜 미디어 페이지, 아바타, 웹사이트, 이메일이 하나의 `온체인 신원`으로 묶여요.
>
> * ENS 이름 등록은 .com 웹사이트 주소를 등록하는 것과 비슷해요. `암호화폐 지갑`과 10분이면 돼요.

## 어디서나 통하는 사용자 이름

인터넷 전체에서 쓰는 사용자 이름이 하나 있다고 생각해 보세요. 온라인 활동 전체를 담는 계정 하나, 그것도 스스로 소유하고 인터넷의 다른 앱에 그대로 연결하는 계정이에요. 이 사용자 이름은 디지털 인격이 되어, 인터넷 어디서나 알아볼 수 있는 고유하고 기억에 남는 구성원으로 만들어 줘요.

[Ethereum Name Service (ENS)](https://ens.domains) 같은 프로젝트가 암호화폐 지갑의 힘을 활용해 이 하나의 사용자 이름을 현실로 만들고 있어요. ENS를 쓰면 `논커스터디 지갑` 주소를 원하는 이름으로 바꾸고 `.eth` 확장자를 붙일 수 있어요.

*0xB00e26E79352882391604E24b371A3F3c8658e8c* → *web3explorer.eth*

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-c7baff43.png)

.com 웹사이트 주소처럼 읽기 쉽고, 기억하기 쉽고, 나만의 것이에요. 인터넷 어디에 있든 이름은 그대로 유지되고 알아보기 쉬워요. 지갑으로 `암호화폐`를 보낼 때 긴 주소를 저장하고 복사해 붙여 넣지 않아도 돼요. Base의 [Basenames](https://www.base.org/names)처럼 비슷한 이름 체계가 다른 네트워크에도 있지만, ENS의 .eth 이름이 여전히 가장 널리 쓰이는 표준이에요.

그리고 이건 시작일 뿐이에요.

> *처음에 저희는 ENS를 암호화폐 주소에 이름을 붙이는 체계로 생각했어요.. (하지만) web3 사용자에게 주소의 의미는 훨씬 넓어요. Farcaster 아이디일 수도, 암호화폐 결제 주소일 수도, DAO 컨트랙트일 수도 있어요.*
>
> *web3의 활용 범위는 넓어지고 있고, 다음 10억 명을 web3로 데려오려면 쓰기 쉬워야 해요. 이 모든 것에 제대로 된 이름이 붙을 때 web3는 쓸 만해지고, 사람다워져요.*
>
> *ENS는 web3를 사람답게 만들어요.*
>
> *- Jefflau.eth, ENS Labs 핵심 개발자*

지갑 주소를 고유한 .eth 사용자 이름에 연결하면, 논커스터디 지갑의 소유권을 그대로 지닌 web3 인격이 만들어져요. ENS 이름은 여러 네트워크의 지갑을 지원할 수 있어요. 하나의 이름이 여러 블록체인에 걸친 디지털 재산과 블록체인 활동 기록 등에 연결돼요. 그동안 얻은 특별한 자격 증명, **예를 들면 Bankless Academy 배지도 포함돼요.**

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-c55c7950.png)

## 온체인 신원

ENS는 지갑 주소에 이름을 붙이는 데서 그치지 않아요. `스마트 컨트랙트`처럼 블록체인 위의 거의 모든 대상과 자산에 이름을 붙일 수 있고, `Web2` 인터넷의 어떤 위치든 가리킬 수 있어요. 웹사이트와 소셜 미디어 프로필, 이메일 모두 이 하나의 사용자 이름에 연결할 수 있어요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-7086002e.png)

ENS는 **온체인 여권**이라고 생각해 보세요. 실물 여권에는 이름, 사진, 생년월일, 여권 번호가 담겨 있고 정부 신원 데이터베이스의 방대한 정보와 이어져요. ENS는 .eth 도메인(`yourname.eth`)을 이더리움 주소, 프로필 사진, 거래와 거버넌스 투표 같은 `온체인` 데이터, 웹사이트 같은 `오프체인` 데이터와 연결해요.

결정적인 차이가 있어요. 이 온체인 여권의 모든 면을 스스로 소유하고 통제해요.

ENS 이름은 이더리움 블록체인에서 NFT 토큰(`ERC-721` 토큰)으로 표현되고, 논커스터디 지갑으로 소유하고 관리해요. **암호화폐와 똑같아요.** web3에서는 온라인 신원을 진짜로 소유하고 인터넷 어디로든 들고 다닐 수 있어요. 계정의 데이터와 콘텐츠, 팔로워를 쓰고 있는 플랫폼이 지울 수 없어요. YouTube, Instagram을 비롯해 인터넷 커뮤니티를 관리하는 web2 거인들의 통제를 넘어서고 있어요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-073b8d76.png)

이제 ENS 이름이 온체인 앱에 어떻게 연결되는지, Bankless Academy의 ‘탐험가 프로필’ 기능부터 살펴봐요. ENS 이름이 있는 Bankless Academy 사용자라면 [프로필](https://app.banklessacademy.com/explorer/my-profile)에 ENS 이름과 프로필 사진이 자동으로 나타나요. 이 정보는 레슨 배지, 수집한 콘텐츠 같은 Academy 성취와 함께 표시돼요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-09c3d858.png)

또 다른 예는 탈중앙화 소셜 네트워크 Farcaster예요. 많은 web3 앱처럼 지갑을 연결하면 신원을 처음부터 새로 만들 필요 없이 ENS 이름과 프로필 사진을 그대로 보여 줘요. 하나의 온체인 신원이 앱 사이를 함께 옮겨 다녀요.

> **재미있는 사실**: 2017년 출시 이후 ENS에는 수백만 개의 .eth 이름이 등록됐어요. 🐂

이제 온체인 시민이 되어 탈중앙화된 미래를 함께 만들 때예요. ENS 이름을 등록할 때예요. 등록 과정을 안내하고, Bankless Academy 같은 여러 온체인 앱에서 잘 보이도록 프로필 사진을 지정하는 등 핵심 기능도 함께 열어 볼게요.

과정은 GoDaddy나 Namecheap 같은 곳에서 .com 웹사이트 주소를 등록하는 것과 아주 비슷해요. 고유한 이름을 고르고 블록체인 트랜잭션 두 건을 보내면 끝이에요.

## 사전 준비

**1\. 암호화폐 지갑 만들기**

ENS 이름을 사고 보유하려면 지갑이 필요해요. 아직 없다면 짧은 안내서 [‘암호화폐 지갑 만들기’](https://app.banklessacademy.com/lessons/creating-a-crypto-wallet)를 보고 5분 만에 만들어 보세요.

**2\. 이더리움 메인넷 지갑에 ETH 준비하기**

중앙화 거래소에서 암호화폐를 보내거나 [MoonPay](https://www.moonpay.com/), [Transak](https://global.transak.com/) 같은 서비스를 이용해 지갑을 채울 수 있어요. 등록 수수료는 ETH로 내요.

## 따라 하기

**1\. [ENS Manager App](https://app.ens.domains/)을 열고** **지갑을 연결해요.**

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-2297867c.png)

**2\. 원하는 이름을 검색하고 선택해요.**

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-4d71d393.png)

**3\. 등록 기간을 선택해요.**

ENS 이름은 주기적으로 갱신해야 해요. 만료 전에 알림이 오도록 개인 캘린더에 일정을 등록해 두세요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-0e183437.png)

**4\. 결제 내용을 확인해요.**

등록 수수료와 가스는 지갑의 ETH 잔액에서 나가요.

**선택 사항**: 이 단계에서 도메인을 `Primary Name`으로 지정할 수 있어요. 그러면 Bankless Academy, Farcaster를 비롯한 ENS 지원 플랫폼에서 긴 지갑 주소 대신 ENS 이름과 프로필 사진이 표시돼요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-91795816.png)

**5\. 앞으로 진행될 등록 단계를 확인해요.**

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-d312b342.png)

**6\. 첫 번째 트랜잭션에 서명해서 60초 타이머를 시작해요.**

이 첫 번째 트랜잭션은 다른 사람이 등록 과정을 `프론트러닝`하지 못하게 막아요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-a8bece69.png)

![](https://app.banklessacademy.com/images/registering-your-web3-username/ens-first-transaction-confirmation.png)

**7\. 타이머가 끝날 때까지 기다려요.**

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-0f779c34.png)

**8\. 두 번째 트랜잭션에 서명해요.**

이 트랜잭션이 새 ENS 이름의 소유권을 확정하고 지갑으로 보내 줘요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-b83971f6.png)

**9\. 완료!**

이제 ENS 이름이 지갑에 `ERC-721` 토큰으로 담겨요.

![](https://app.banklessacademy.com/images/registering-your-web3-username/image-ea2d6d2a.png)

<https://etherscan.io/>에 접속해 주소 검색창에 ENS 이름을 넣으면 지갑 주소로 연결되는지 확인할 수 있어요. 몇 분 걸릴 수 있어요. 확인되면 친구에게 공유하고 이더리움 앱에 연결할 준비가 끝난 거예요.

새 ENS 이름을 활용하는 더 많은 방법은 아래 ‘자주 묻는 질문’ 부분을 꼭 확인해 보세요!

---

## 마무리

web3 사용자 이름을 등록하면 탈중앙화된 웹에서 자기주권을 받아들이고, 온체인 신원을 오직 자신만 소유하는 미래로 나아가게 돼요. ENS는 web3 사용자 이름이자 지갑 주소로서 디지털 세계에서의 존재를 표시해요. 온체인 앱과 매끄럽게 이어지고, 트랜잭션 하나하나가 신원을 드러내고 쌓아 올려요.

한번 만든 온체인 신원은 오롯이 자신의 관리 아래 있고, 갱신도 자신의 몫이에요. ENS의 확산은 권력 남용에서 자유롭고 사용자가 힘을 갖는 인터넷을 만드는 열쇠예요. ENS와 함께라면 탈중앙화된 웹에서의 모든 활동이 고유한 온체인 페르소나의 증거가 돼요.

---

ENS로 온체인 신원의 주도권을 잡을 때예요. 탐험가 안내서의 이번 편 ‘Web3 사용자 이름 등록하기’가 즐거우셨기를 바라요.

여행 중에 쉽게 다시 볼 사본을 갖고 싶거나 Bankless Academy의 다음 콘텐츠를 응원하고 싶다면 이번 편을 꼭 수집해 보세요. 안전한 여행 되세요, 탐험가 여러분!

---

## 자주 묻는 질문

### **Primary Name이란 무엇일까요?**

`Primary Name`은 온체인 지갑 주소의 별명처럼 작동해서 복잡한 이더리움 지갑 주소를 간단하게 만들어요. Primary Name을 지정하면 여러 앱이 이 이름과 프로필 사진을 가져다 표시할 수 있어요. [여기서 더 알아보세요](https://support.ens.domains/en/articles/7890756-the-primary-name#)!

### **이메일, 웹사이트, 소셜 미디어를 ENS 이름에 연결할 수 있나요?**

물론이에요! 여권에 여러 정보가 담기듯, ENS 이름에도 다양한 개인 정보를 연결할 수 있어요. 이메일, 개인 웹사이트, 프로필 사진, 소셜 미디어 계정이 모두 여기에 들어가요.

이런 `표준 레코드` 덕분에 연락처 정보를 탈중앙화된 방식으로 공개할 수 있어요. 온체인에 저장되고, ENS 이름을 인식하는 앱이라면 어디서든 읽을 수 있어요.

ENS 이름에 레코드를 설정하는 방법과 각 레코드의 쓰임새는 초보자용 [글](https://support.ens.domains/en/articles/8868504-how-to-edit-profile)을 참고해 보세요.

### **ENS 이름 등록 비용은 얼마인가요?**

현재 ENS 이름 등록 비용은 다음과 같아요.

* 5자 이상 이름: 연 $5(ETH로 결제)

* 4자 이름: 연 $160(ETH로 결제)

* 3자 이름: 연 $640(ETH로 결제)

여기에는 이더리움 네트워크와 상호작용할 때 드는 트랜잭션 `가스비`가 빠져 있어요. 가스비는 [ENS Manager App](https://app.ens.domains/)에서 대략 확인할 수 있어요. `커스텀 레코드` 설정처럼 온체인 데이터를 바꿀 때는 가스비가 더 들어요. 짧은 이름은 희소해서 값이 더 비싸요. 수수료는 투기성 등록을 막고 DAO의 ENS 개발을 뒷받침해요.

### 하나의 ENS 이름에 여러 지갑 주소를 연결할 수 있나요?

물론이에요! ‘yourname.eth’처럼 하나의 ENS 이름에 여러 지갑 주소를 연결할 수도 있고, ‘ethereum.yourname.eth’나 ‘bitcoin.yourname.eth’처럼 서브네임으로 나눠 주소마다 어떤 암호화폐인지 구분할 수도 있어요.

둘 다 [ENS Manager App](https://app.ens.domains)에서 설정할 수 있어요. 자세한 내용은 [단계별 안내가 담긴 이 가이드를 참고해 보세요](https://support.ens.domains/en/articles/7900302-ens-use-cases)

### 기존 웹사이트 주소를 ENS 이름으로 쓸 수 있나요?

네. web3explorer.com 같은 웹사이트를 소유하고 있다면 web3explorer.eth 대신 그 주소를 쓸 수 있어요. ENS와 GoDaddy가 함께 만든 인프라 덕분이에요.

더 알아보려면 ENS Labs의 [블로그 글](https://ens.domains/blog/post/godaddy-partners-with-ens)을 확인해 보세요.

---

**저자**

[**Marcus**](https://twitter.com/estmcmxci)는 ENS DAO 뉴스레터를 발행해요. 프로토콜 수수료에서 생긴 잉여 수익이 애플리케이션 계층 개발과 오픈소스 인프라를 어떻게 지원할 수 있는지 연구해요.

[**Tetranome**](https://twitter.com/Tetranome)은 Bankless Academy의 콘텐츠 및 디자인 리드로, 학습 여정과 사용자 인터페이스, 사용자 경험, 플랫폼 아트워크를 담당해요.

**후원**

이 안내서는 Bankless Academy가 제공해요.
