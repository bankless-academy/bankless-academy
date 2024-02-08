import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import { Box, useToast, Image, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { STAMP_PLATFORMS } from 'constants/passport'
import { shortenAddress } from 'utils/index'

const pageMeta: MetaData = {
  description: 'Confirmation',
  nolayout: true,
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Confirmation = (): JSX.Element => {
  const router = useRouter()
  const { isStampValidated, status, platform, fraud } = router.query
  const toast = useToast()

  useEffect((): void => {
    if (status) {
      localStorage.setItem('refreshPassport', 'true')
      toast.closeAll()
      toast({
        title:
          isStampValidated === 'true'
            ? `Your ${
                STAMP_PLATFORMS[platform as string]?.name
              } account has been connected to your Explorer Profile.`
            : status,
        description: (
          <>
            <Box>
              {fraud
                ? `Switch back to: ${shortenAddress(fraud as string)}`
                : null}
            </Box>
            <Box display="flex" minW="50vw">
              <Button
                variant="primaryWhite"
                onClick={() => {
                  window.opener = null
                  window.open('', '_self')
                  window.close()
                }}
                m="10px auto"
              >
                Close Window
              </Button>
            </Box>
          </>
        ),
        status: isStampValidated === 'true' ? 'success' : 'warning',
        duration: null,
        isClosable: false,
        position: 'top',
      })
    }
  }, [isStampValidated])

  return (
    <Box h="100vh">
      <Image
        position="absolute"
        bottom="0"
        right="0"
        h="auto"
        w="auto"
        maxH="80vh"
        src="/images/bankless-instructor.png"
      />
    </Box>
  )
}

export default Confirmation
