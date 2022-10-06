import React, { useState, useEffect } from 'react'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'
import { ethers } from 'ethers'
import { Network } from '@ethersproject/networks'

import { NETWORKS } from 'constants/networks'
import { shortenAddress } from 'utils'

async function getNameForAddress(address, provider) {
  if (!provider || !address) {
    return null
  }
  try {
    if (
      (provider.networkVersion === '137' || provider.chainId === 137) &&
      address !== '0x'
    ) {
      const matic: Network = {
        name: 'matic',
        chainId: NETWORKS['matic'].chainId,
        _defaultProvider: (providers) =>
          new providers.JsonRpcProvider(NETWORKS['matic'].rpcUrl),
      }
      const p = ethers.getDefaultProvider(matic)
      const defaultProfile = await p.call({
        // contract we want to talk to
        to: '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d',

        // `function name() view returns (string)`
        data: `0x92254a62000000000000000000000000${address
          .replace('0x', '')
          .toLowerCase()}`,
      })
      if (
        defaultProfile !==
        '0x0000000000000000000000000000000000000000000000000000000000000000'
      ) {
        const getProfile = await p.call({
          // contract we want to talk to
          to: '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d',

          // `function name() view returns (string)`
          data: `0xec81d194${defaultProfile.substring(2)}`,
        })
        if (
          getProfile !==
          '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000'
        ) {
          const lens = ethers.utils
            .toUtf8String(getProfile)
            .replace(/[^a-z0-9\\.]/gi, '')
          if (lens.includes('.lens')) {
            return lens
          }
        }
      }
    } else if (provider.networkVersion === '1' || provider.chainId === 1) {
      const ens = new ENS({ provider, ensAddress: getEnsAddress('1') })
      const response = await ens.getName(address)
      return response && response.name
    }
  } catch (err) {
    console.error(err)
  }
}

function useName(address, provider) {
  const [name, setName] = useState<string>()
  useEffect(() => {
    getNameForAddress(address, provider).then(setName)
  }, [address, provider, provider.networkVersion, provider.chainId])
  return name
}

export default function ENSName({
  address,
  provider = window.web3 ? window.web3.currentProvider : window.ethereum,
}: {
  address: string
  provider?: any
}): React.ReactElement {
  const name = useName(address, provider)
  return <>{name || shortenAddress(address)}</>
}
