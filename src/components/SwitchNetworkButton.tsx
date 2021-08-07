import React from 'react'
import { Select } from '@chakra-ui/react'
import networks from '../constants/networks'

const SwitchNetworkButton = ({
  isMobile,
}: {
  isMobile: boolean
}): React.ReactElement => {
  return (
    <>
      <Select
        size={isMobile ? 'sm' : 'md'}
        bg={'tomato'}
        borderColor={'tomato'}
      >
        <option value={networks.mainnet.name} selected>
          {networks.mainnet.name}
        </option>
        <option value={networks.kovan.name}>{networks.kovan.name}</option>
      </Select>
    </>
  )
}

export default SwitchNetworkButton
