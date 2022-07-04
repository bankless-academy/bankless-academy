import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { PROJECT_NAME, IS_WHITELABEL } from 'constants/index'

const Footer: React.FC = () => (
  <footer>
    <Box
      display="flex"
      justifyContent={IS_WHITELABEL ? 'center' : 'space-around'}
      w="100%"
      maxW="800px"
      mx="auto"
      mt="16"
    >
      {IS_WHITELABEL ? (
        <>
          {`${PROJECT_NAME} | powered by`}&nbsp;
          <Link
            display="flex"
            target="_blank"
            href="http://app.banklessacademy.com/?utm_source=BanklessAcademyWhiteLabel&utm_medium=website&utm_campaign=WhiteLabel"
          >
            Bankless Academy
          </Link>
        </>
      ) : (
        <>
          <Link
            display="flex"
            target="_blank"
            href="https://twitter.com/BanklessAcademy"
          >
            Twitter
          </Link>
          <span> | </span>
          <NextLink href="/lessons/academy-community">Community</NextLink>
          <span> | </span>
          <Link
            target="_blank"
            href="https://bankless.notion.site/Bankless-Academy-POAP-Support-9a9e60c883ac427da14dad324731028c"
          >
            Support
          </Link>
          <span> | </span>
          <Link
            target="_blank"
            href="https://bankless.notion.site/Bankless-Academy-Jobs-56d3b0a011fe443aa2a9682f0ca443bb"
          >
            Join the team
          </Link>
        </>
      )}
    </Box>
  </footer>
)

export default Footer
