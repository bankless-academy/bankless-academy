import { Contract } from '@ethersproject/contracts'

import { useActiveWeb3React } from './index'
import { MERKLE_DISTRIBUTOR_ADDRESS } from '../constants'
import MERKLE_DISTRIBUTOR_ABI from '../abis/MerkleDistributor.json'
import { useContracts } from './useContract'

export function useMerkleDistributorContracts(): Array<Contract | null> {
  const { chainId, library, account } = useActiveWeb3React()
  if (chainId === undefined) return []
  return useContracts(
    MERKLE_DISTRIBUTOR_ADDRESS[chainId],
    MERKLE_DISTRIBUTOR_ABI,
    true,
    library,
    account
  )
}
