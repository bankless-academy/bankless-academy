import React from 'react'
import { useActiveWeb3React } from 'hooks'

const WalletBasics = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { account } = useActiveWeb3React()

  return {
    isQuestCompleted: !!account,
    questComponent: (
      <>
        <h2>How to setup a MetaMask wallet</h2>
        <p>
          For convenience and ease of access throughout this course, you will
          need a MetaMask wallet. Next we will demonstrate how to set up a
          MetaMask wallet.
        </p>
        <p>
          Download the browser extension from the official website:
          <a href="https://metamask.io/download">
            https://metamask.io/download
          </a>
        </p>
        <iframe src="https://www.youtube.com/embed/yr-SmVQAiTM"></iframe>
        {account ? (
          <h2>Congrats for connecting your wallet! 👏🙂</h2>
        ) : (
          <h2>Waiting for you to connect your wallet ...</h2>
        )}
      </>
    ),
  }
}

export default WalletBasics
