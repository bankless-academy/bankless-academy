import React, { useState, useEffect } from 'react'
import { Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

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

interface MiniAppsListProps {
  onSelectApp: (app: MiniApp) => void
}

const MiniAppsList: React.FC<MiniAppsListProps> = ({ onSelectApp }) => {
  const [apps, setApps] = useState<MiniApp[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchApps = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/mini-apps')

        if (!response.ok) {
          throw new Error(`Failed to fetch apps: ${response.status}`)
        }

        const data = await response.json()
        // Remove console.log and directly use the data
        setApps(data || [])
      } catch (err) {
        console.error('Error fetching mini apps:', err)
        setError('Failed to load mini apps. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchApps()
  }, [])

  if (loading) {
    return <LoadingContainer>Loading mini apps...</LoadingContainer>
  }

  if (error) {
    return <ErrorContainer>{error}</ErrorContainer>
  }

  return (
    <AppsGrid>
      {apps.map((app, index) => (
        <AppCard
          key={`${app.domain}-${index}`}
          onClick={() => onSelectApp(app)}
        >
          <AppIcon>
            {app.iconUrl && (
              <Image
                src={app.iconUrl}
                alt={app.name}
                width="48px"
                height="48px"
                style={{ borderRadius: '8px', objectFit: 'cover' }}
              />
            )}
          </AppIcon>
          <AppInfo>
            <AppName>{app.name}</AppName>
            <AuthorUsername>@{app.author.username}</AuthorUsername>
            {/* <Button>Open</Button> */}
          </AppInfo>
        </AppCard>
      ))}
    </AppsGrid>
  )
}

const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background-color: #1a202c;
  border-radius: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const AppCard = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background-color: #2d3748;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`

const AppIcon = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #1a202c;
`

const AppInfo = styled.div`
  margin-left: 16px;
  flex: 1;
`

const AppName = styled.div`
  font-weight: 700;
  margin-bottom: 4px;
  color: #e2e8f0;
`

const AuthorUsername = styled.span`
  color: #666;
`

// const Button = styled.button`
//   background-color: #4a5568;
//   color: #e2e8f0;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #5a6578;
//   }
// `

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #e53935;
`

export default MiniAppsList
