import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { MetaData } from 'components/Head'
import MiniApp from 'components/MiniApp'
import MiniAppsList from 'components/MiniAppsList'
import styled from '@emotion/styled'

const pageMeta: MetaData = {
  description: 'Bankless Academy Farcaster Frame',
  canonical: '/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

interface MiniApp {
  domain: string
  name: string
  iconUrl: string
  homeUrl: string
  imageUrl: string
  buttonTitle: string
  splashImageUrl: string
  splashBackgroundColor: string
  author: {
    fid: number
    username: string
    displayName: string
    pfp: {
      url: string
      verified: boolean
    }
  }
}

const MiniApps = (): JSX.Element => {
  const [selectedApp, setSelectedApp] = useState<MiniApp | null>(null)

  const handleSelectApp = (app: MiniApp) => {
    setSelectedApp(null)
    setTimeout(() => setSelectedApp(app), 0)
  }

  const handleRefresh = () => {
    if (selectedApp) {
      setSelectedApp(null)
      setTimeout(() => setSelectedApp(selectedApp), 0)
    }
  }

  return (
    <Container>
      <Title>Mini Apps</Title>
      <ContentWrapper>
        <AppsListContainer>
          <MiniAppsList onSelectApp={handleSelectApp} />
        </AppsListContainer>
        <FrameContainer>
          {selectedApp ? (
            <>
              <AppHeader>
                <HeaderContent>
                  <div>
                    <AppName>{selectedApp.name}</AppName>
                    <AppDomain>{selectedApp.domain}</AppDomain>
                  </div>
                  <RefreshButton onClick={handleRefresh}>Refresh</RefreshButton>
                </HeaderContent>
              </AppHeader>
              <MiniApp
                key={selectedApp.homeUrl}
                frameUrl={selectedApp.homeUrl}
              />
            </>
          ) : (
            <Placeholder>
              <PlaceholderText>Select a mini app to view</PlaceholderText>
            </Placeholder>
          )}
        </FrameContainer>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const AppsListContainer = styled.div`
  flex: 1;
  max-height: 600px;
  overflow-y: auto;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AppHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

const AppName = styled.h2`
  margin: 0;
  font-size: 24px;
`

const AppDomain = styled.div`
  color: #666;
  font-size: 14px;
`

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 695px;
  width: 424px;
  background-color: #f5f5f5;
  border-radius: 12px;
  border: 2px dashed #ccc;
`

const PlaceholderText = styled.p`
  color: #666;
  font-size: 16px;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const RefreshButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0051a2;
  }
`

export default MiniApps
