import React from 'react'
import {
  Box,
  Image,
  HStack,
  Spacer,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'

import ConnectWalletButton from 'components/ConnectWalletButton'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'

const Nav: React.FC = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  return (
    <header>
      <Box bgColor="black" borderBottom="1px solid #222222">
        <Flex p={4}>
          <Box cursor="pointer">
            <Link href="/">
              <Image
                width={isSmallScreen ? '27px' : '117px'}
                src={
                  isSmallScreen
                    ? '/images/BanklessAcademy_Logo.svg'
                    : '/images/BanklessAcademy.svg'
                }
                alt="Bankless Academy"
              />
            </Link>
          </Box>
          <Spacer />
          <HStack
            spacing={4}
            isSmallScreen={isSmallScreen}
            justifyContent="space-between"
          >
            <SwitchNetworkButton isSmallScreen={isSmallScreen} />
            <ConnectWalletButton isSmallScreen={isSmallScreen} />
          </HStack>
        </Flex>
      </Box>
    </header>
  )
}

export default Nav
