import { Contract } from '@ethersproject/contracts'

import { useActiveWeb3React } from '../'
import { TOKEN_ADDRESS, TOKEN_ABI } from '../../constants'
import { useContract } from '../useContract'

export function useTokenContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId ? TOKEN_ADDRESS[chainId] : undefined,
    TOKEN_ABI,
    true
  )
}
