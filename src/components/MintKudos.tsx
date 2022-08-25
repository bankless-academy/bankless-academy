/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { Button, Link, useToast, Spinner, Image, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import axios from 'axios'

import { useActiveWeb3React } from 'hooks'
import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import {
  PROJECT_NAME,
  MINTKUDOS_API,
  MINTKUDOS_DOMAIN_INFO,
  MINTKUDOS_EXPLORER,
  MINTKUDOS_CHAIN_ID,
  MINTKUDOS_OPENSEA_URL,
  MINTKUDOS_RARIBLE_URL,
} from 'constants/index'
import { NETWORKS } from 'constants/networks'

const MintKudos = ({ kudosId }: { kudosId: number }): React.ReactElement => {
  const [isKudosMinted, setIsKudosMinted] = useState(false)
  const [isKudosClaimed, setIsKudosClaimed] = useState(
    !!localStorage.getItem(`kudos-${kudosId}`)
  )
  const [status, setStatus] = useState('')
  const [isPassportVerified, setIsPassportVerified] = useState(true)

  const { account, library, chainId } = useActiveWeb3React()
  const toast = useToast()

  // TODO: update toast https://chakra-ui.com/docs/components/toast/usage#updating-toasts

  useEffect(() => {
    if (account) {
      axios
        .get(
          `${MINTKUDOS_API}/v1/wallets/${account}/tokens?limit=1000&status=claimed`
        )
        .then(function (res) {
          if (res.data?.data?.some((k) => k?.kudosTokenId === kudosId)) {
            const createdAt = res.data?.data?.find(
              (k) => k?.kudosTokenId === kudosId
            ).createdAt
            localStorage.setItem(`kudos-${kudosId}`, createdAt)
            setIsKudosClaimed(true)
          } else {
            setIsKudosMinted(false)
            setIsKudosClaimed(false)
            axios.get(`/api/passport?address=${account}`).then(function (res) {
              console.log(res.data)
              setIsPassportVerified(res.data?.verified)
            })
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    }
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
          title: 'Credential minted! ✅',
          status: 'success',
          duration: 10000,
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
          duration: 10000,
        })
      }
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
        localStorage.setItem(`kudos-${kudosId}`, result.data.location)
        toast.closeAll()
        toast({
          title: 'Credential claimed 🎉',
          status: 'success',
          duration: 10000,
        })
        setStatus('')
      } else {
        setStatus('')
        toast.closeAll()
        toast({
          title: '⚠️ problem while claiming',
          description: result.data.status || result.data.error,
          status: 'error',
          duration: 10000,
        })
      }
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
    }
  }

  const KudosButton = () => (
    <>
      {isKudosClaimed ? (
        <Box>
          <Link
            href={`${MINTKUDOS_OPENSEA_URL}${kudosId}`}
            target="_blank"
            mr="2"
          >
            <Button leftIcon={<Image width="24px" src="/images/OpenSea.svg" />}>
              OpenSea
            </Button>
          </Link>
          <Link href={`${MINTKUDOS_RARIBLE_URL}${kudosId}`} target="_blank">
            <Button leftIcon={<Image width="24px" src="/images/Rarible.svg" />}>
              Rarible
            </Button>
          </Link>
        </Box>
      ) : isPassportVerified ? (
        <Button
          colorScheme={isKudosClaimed ? 'green' : 'red'}
          onClick={!isKudosMinted ? mintKudos : claimKudos}
          variant="primary"
        >
          {status !== ''
            ? status
            : !isKudosMinted
            ? 'Mint Credential ⚒️'
            : 'Claim your Credential 🙌'}
        </Button>
      ) : (
        <p>
          {`Get a `}
          <NextLink href={`/passport`}>{`${PROJECT_NAME} Passport`}</NextLink>
          {` in order to claim this credential`}
        </p>
      )}
    </>
  )

  const networkKey = Object.keys(NETWORKS).find(
    (network) => NETWORKS[network].chainId === MINTKUDOS_CHAIN_ID
  )

  const networkSwitchButton = () => (
    <>
      <Button
        colorScheme={isKudosClaimed ? 'green' : 'red'}
        onClick={() => switchNetwork(networkKey)}
      >
        Switch Network to {NETWORKS[networkKey]?.name}
      </Button>
    </>
  )

  const ConnectFirstButton = (
    <>
      <Button
        variant="outlined"
        leftIcon={<Spinner speed="1s" />}
        color={'orange'}
        cursor="default"
        boxShadow="none !important"
      >
        {'Waiting to detect your wallet ...'}
      </Button>
      <p>
        {`To collect your lesson credential, click the "Connect wallet" button in the top-right corner`}
      </p>
    </>
  )

  return (
    <Box py="4">
      {!account ? (
        <>{ConnectFirstButton}</>
      ) : chainId === MINTKUDOS_CHAIN_ID ? (
        KudosButton()
      ) : (
        networkSwitchButton()
      )}
    </Box>
  )
}

export default MintKudos
