import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import SubscriptionModal from 'components/SubscriptionModal'
import { useDisclosure } from '@chakra-ui/react'

const pageMeta: MetaData = {
  title: 'Newsletter',
  description:
    'Sign up for our newsletter to be notified of new lessons and platform updates!',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Newsletter = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <>
      <SubscriptionModal isOpen={isOpen} onClose={onClose} />
      <HomePage />
    </>
  )
}

export default Newsletter
