# Traditional Chinese (zh-tw) — style guide

**zh-tw is DERIVED, never authored.** Every file under `translation/lesson/zh-tw/`,
`translation/keywords/zh-tw/` and `translation/website/zh-tw/` is generated from
the finished Simplified Chinese (`zh`) by `node convert-zh-tw.js` (OpenCC
cn->twp plus the override table in that script). Do not hand-edit zh-tw files
and do not point translation agents at this guide: fix the `zh` source (or the
converter's override table) and re-run the conversion. Any zh change therefore
requires regenerating zh-tw in the same commit.

## Vocabulary decisions (encoded in `convert-zh-tw.js`)

- **Taiwan tech vocabulary** comes from OpenCC's twp phrase dictionary:
  網路 (not 網絡), 軟體, 硬體, 伺服器, 網際網路, 使用者, 介面, 預設, 登入,
  儲存, 執行, 資訊, 駭客, 螢幕.
- **smart contract / smart wallet / smart account = 智能合約 / 智能錢包 /
  智能帳戶** — the ETHGlossary zh-tw citation forms (twp's 智慧X is only an
  alias there, and 智能合約 is the dominant form in TW crypto usage).
- **數位, not 數字, for "digital"** (數位資產, 數位貨幣, 數位黃金); 數字 is
  reserved for the "digits/number" sense (數字和字母, 一次性數字).
- **digital signature = 數位簽章** (the TW standard term), while the act of
  signing stays 簽名.
- **透過 for instrumental "by means of"; 通過 only for "pass/approve"**
  (交易通過後, 通過驗證).
- **帳, never 賬** (帳戶, 帳本, 記帳); **存取** for accessing data or a wallet
  (前往 for visiting a URL); **品質** for quality (質量 is physics "mass" in
  TW); **列印**; block proposer = 區塊提案者; peer = 對等節點.
- **Latin keeps Latin**: Gas, Blob, gwei, HODL, DEX, NFT and the other
  keep_latin terms stay exactly as `zh` ships them.
- Typography is inherited from `zh` unchanged: full-width punctuation （，、。：？！）,
  「」 for quotes, and a space between CJK and Latin/digits where `zh` has one.

## Pinned terms

These must match the shipped `translation/keywords/zh-tw/keywords.json` exactly
(the build gate compares them). They are the adjudicated calls above plus the
highest-traffic lesson terms; if a converter re-run changes one of these, the
gate fails rather than shipping silent terminology drift.

```terms
private key = 私鑰
public key = 公鑰
blockchain = 區塊鏈
smart contract = 智能合約
smart account = 智能帳戶
smart wallet = 智能錢包
digital signature = 數位簽章
block proposer = 區塊提案者
peer = 對等節點
cryptocurrency = 加密貨幣
wallet = 錢包
gas = Gas
seed phrase = 助記詞
stablecoin = 穩定幣
token = 代幣
transaction = 交易
staking = 質押
liquidity pool = 流動性池
```
