import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import { Box, useToast, Image, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

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
  const { isStampValidated, status } = router.query
  const toast = useToast()

  useEffect((): void => {
    if (status) {
      localStorage.setItem('refreshPassport', 'true')
      toast.closeAll()
      toast({
        title: status,
        description: (
          <Button
            variant="secondaryWhite"
            onClick={() => {
              window.opener = null
              window.open('', '_self')
              window.close()
            }}
          >
            Close
          </Button>
        ),
        status: isStampValidated ? 'success' : 'warning',
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
