export const template = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smart Wallet NFT</title>
  <style>
    body,
    html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      background-color: #4d2845;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
      max-height: 100vw;
      max-width: 100vh;
    }

    #gifImage {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .counter {
      position: absolute;
      top: 77%;
      left: 50.6%;
      transform: translateX(-50%);
      font-weight: bold;
      font-family: monospace;
      color: white;
      background-color: rgba(0, 0, 0, 0.3);
      font-size: 4vw;
      padding: 0.5vw 1vw;
      border-radius: 1vw;
      border: 0.25vw solid #BFB8C8;
    }

    .bottom-right {
      position: absolute;
      bottom: 3.5%;
      right: 3.5%;
      width: 24%;
    }
  </style>
</head>

<body>
  <div class="container">
    <img id="gifImage" src="https://app.banklessacademy.com/images/smart-wallet.gif" alt="Square GIF">
    <div class="counter">{{counter}}</div>
    <a href="https://app.banklessacademy.com/?utm_source=BanklessAcademy&utm_medium=nft&utm_campaign=onchain-summer-challenge" target="_blank">
      <img class="bottom-right" src="https://app.banklessacademy.com/images/BanklessAcademy.svg" alt="Bankless Academy" title="Bankless Academy - Level up your knowledge of Web3 and DeFi">
    </a>
  </div>
</body>

</html>
`;
