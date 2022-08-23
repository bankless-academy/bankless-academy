/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { Button, Link, useToast } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import axios from 'axios'

import { useActiveWeb3React } from 'hooks'
import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import {
  MINTKUDOS_API,
  MINTKUDOS_DOMAIN_INFO,
  MINTKUDOS_EXPLORER,
} from 'constants/index'

const MintKudos = ({ kudosId }: { kudosId: number }): React.ReactElement => {
  const [isKudosMinted, setIsKudosMinted] = useState(false)
  const [isKudosClaimed, setIsKudosClaimed] = useState(false)
  const [status, setStatus] = useState('')

  const { account, library, chainId } = useActiveWeb3React()
  const toast = useToast()

  const hostname = window?.location.hostname

  // TODO: update toast https://chakra-ui.com/docs/components/toast/usage#updating-toasts

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

  const followOperation = async (location: string, iteration = 0) => {
    try {
      const result = await axios.get(location)
      if (result.data?.status !== 'success') {
        if (iteration === 0) {
          toast.closeAll()
          const txLink = `${MINTKUDOS_EXPLORER}tx/${result.data.txHash}`
          toast({
            title: `Transaction in progress`,
            description: (
              <Link href={txLink} target="_blank">
                {txLink}
              </Link>
            ),
            status: 'warning',
            duration: null,
          })
        }
        // wait 1 sec
        await new Promise((resolve) => setTimeout(resolve, 1000))
        await followOperation(location, iteration + 1)
      } else {
        console.log('done!')
      }
      console.log(result.data?.status)
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
    }
  }

  const mintKudos = async () => {
    try {
      setStatus('⚒️ minting in progress ...')
      const bodyParameters = {
        address: account,
        kudosId,
      }
      const result = await axios.post(`/api/mint-kudos`, bodyParameters)
      console.log(result.data)
      if (result.data.location) {
        await followOperation(result.data.location)
        setIsKudosMinted(true)
        toast.closeAll()
        toast({
          title: 'Minting done! ✅',
          // TODO: add OpenSea link
          status: 'success',
          duration: 5000,
        })
        setStatus('')
      } else {
        setStatus('')
        if (result.data.status === 'address already on allowlist') {
          setIsKudosMinted(true)
        }
        toast.closeAll()
        toast({
          title: '⚠️ problem while minting',
          description: result.data.status || result.data.error,
          status: 'error',
          duration: 5000,
        })
      }
      // TODO: check header/Location to know when the token has been claimed
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
    }
  }

  const claimKudos = async () => {
    if (isKudosClaimed) return

    setStatus('🙌 claiming in progress ...')
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
      // console.log('signature', signature)
      const bodyParameters = {
        address: account,
        kudosId,
        signature,
        message: value,
      }
      const result = await axios.post(`/api/claim-kudos`, bodyParameters)
      console.log(result.data)
      if (result.data.location) {
        await followOperation(result.data.location)
        setIsKudosClaimed(true)
        toast.closeAll()
        toast({
          title: 'Claiming done! ✅',
          // TODO: add OpenSea link
          status: 'success',
          duration: 5000,
        })
        setStatus('')
      } else {
        setStatus('')
        toast.closeAll()
        toast({
          title: '⚠️ problem while claiming',
          description: result.data.status || result.data.error,
          status: 'error',
          duration: 5000,
        })
      }
      // TODO: check header/Location to know when the token has been claimed
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
    }
  }

  const signatureButton = () => (
    <>
      <Button
        colorScheme={isKudosClaimed ? 'green' : 'red'}
        onClick={!isKudosMinted ? mintKudos : claimKudos}
        variant="primary"
      >
        {status !== ''
          ? status
          : !isKudosMinted
          ? 'Mint Credential ⚒️'
          : isKudosClaimed
          ? 'Credential claimed 🎉'
          : 'Claim your Credential 🙌'}
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
