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
      top: 72%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
      font-weight: bold;
      font-family: monospace;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px 10px;
      border-radius: 5px;
    }

    .bottom-right {
      position: absolute;
      bottom: 4%;
      right: 4%;
      width: 20%;
    }
  </style>
</head>

<body>
  <div class="container">
    <img id="gifImage" src="/images/smart-wallet.gif" alt="Square GIF">
    <div class="counter">{{counter}}</div>
    <a href="">
      <img class="bottom-right" src="/images/BanklessAcademy.svg" alt="Bankless Academy">
    </a>
  </div>
</body>

</html>
`;
