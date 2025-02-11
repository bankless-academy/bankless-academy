import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import InstallAppModal from 'components/InstallAppModal'

const pageMeta: MetaData = {
  description: 'Install the Bankless Academy Mobile App on Android or iOS.',
  image: '/images/download-mobile-app.png',
  canonical: '/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Mobile = (): JSX.Element => {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false)

  useEffect(() => {
    setIsAppModalOpen(true)
  }, [])

  return (
    <>
      <InstallAppModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        yes={true}
      />
      <HomePage />
    </>
  )
}

export default Mobile
