/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { Button, Link } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import axios from 'axios'

import { useActiveWeb3React } from 'hooks'
import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import { MINTKUDOS_API, MINTKUDOS_DOMAIN_INFO } from 'constants/index'

const MintKudos = ({ kudosId }: { kudosId: number }): React.ReactElement => {
  const [isKudosClaimed, setIsKudosClaimed] = useState(false)

  const { account, library, chainId } = useActiveWeb3React()

  const hostname = window?.location.hostname

  useEffect(() => {
    axios
      .get(`${MINTKUDOS_API}/v1/wallets/${account}/tokens`)
      .then(function (res) {
        if (res.data?.data?.some((k) => k?.kudosId === kudosId))
          // setIsKudosClaimed(true)
          setIsKudosClaimed(false)
        // TODO: store in localStorage also
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [account])

  const signMessage = async () => {
    if (isKudosClaimed) return

    const types = {
      Claim: [{ name: 'tokenId', type: 'uint256' }],
    }

    // The data to sign
    const value = {
      tokenId: kudosId,
    }

    try {
      const signer = library.getSigner(account)
      const signature = await signer._signTypedData(
        MINTKUDOS_DOMAIN_INFO,
        types,
        value
      )
      console.log('signature', signature)
      const bodyParameters = {
        address: account,
        kudosId,
        signature,
        message: value,
      }
      const result = await axios.post(`/api/mint-kudos`, bodyParameters)
      console.log(result)
      console.log(result.data)
      // TODO: check header/Location to know when the token has been claimed
      // if (result) setIsKudosClaimed(true)
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
    }
  }

  const signatureButton = () => (
    <>
      <Button
        colorScheme={isKudosClaimed ? 'green' : 'red'}
        onClick={signMessage}
        variant="primary"
      >
        {isKudosClaimed ? 'Kudos claimed 🎉' : 'Claim your Kudos 🎉'}
      </Button>
      {isMobile && (
        <p>
          * if you have trouble signing on mobile, we recommend to open this
          website directly inside&nbsp;
          <Link href={`https://metamask.app.link/dapp/${hostname}`} color="red">
            MetaMask&apos;s browser
          </Link>
        </p>
      )}
    </>
  )

  const networkSwitchButton = () => (
    <>
      <Button
        colorScheme={isKudosClaimed ? 'green' : 'red'}
        onClick={() => switchNetwork('mumbai')}
      >
        Switch Network to {'"Matic(Polygon) Testnet Mumbai"'}
      </Button>
      {isMobile && (
        <p>
          * network switching with your mobile wallet only works if you open
          this website directly inside&nbsp;
          <strong>MetaMask&apos;s browser</strong>
        </p>
      )}
    </>
  )

  return <>{chainId === 80001 ? signatureButton() : networkSwitchButton()}</>
}

export default MintKudos
