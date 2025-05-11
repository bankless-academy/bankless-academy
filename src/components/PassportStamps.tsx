/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import {
  Box,
  SimpleGrid,
  Image,
  Icon,
  Button,
  useToast,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import FacebookLogin from 'react-facebook-login'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'

import { STAMP_PLATFORMS } from 'constants/passport'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'
import ExternalLink from 'components/ExternalLink'

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

const GitcoinGrid = styled(SimpleGrid)<{ issmallscreen?: string }>`
  > div:nth-last-child(-n
      + ${(props) => (props.issmallscreen === 'true' ? '1' : '2')}) {
    border-bottom: none;
  }
`

const PassportStamps = ({
  stamps,
  displayStamps,
}: {
  stamps?: any
  displayStamps?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const { address } = useAccount()
  const [isSmallScreen] = useSmallScreen()
  const [loadingStamp, setLoadingStamp] = useState('')
  const [refreshPassportLS, setRefreshPassportLS] = useLocalStorage(
    'refreshPassport',
    false
  )
  const toast = useToast()

  useEffect(() => {
    setLoadingStamp('')
  }, [refreshPassportLS])

  const linkPlatform = (platform) => {
    setLoadingStamp(platform)
    const width = 600
    const height = 800
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2
    const random = Math.floor(Math.random() * 100000)
    const authUrl: string = STAMP_PLATFORMS[platform].oauth
      ?.replace('RANDOM_STATE', `&state=${random}`)
      ?.replaceAll('REPLACE_ADDRESS', `${address}`)
    console.log(authUrl)
    if (authUrl.includes('json=true')) {
      apiCall(authUrl)
    } else {
      const page = window.open(
        authUrl,
        '_blank',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
      )
      const timer = setInterval(function () {
        if (page.closed) {
          clearInterval(timer)
          setLoadingStamp('')
        }
      }, 1000)
    }
  }

  const apiCall = (url) => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          toast.closeAll()
          if (res.isStampValidated) {
            toast({
              title: `Your ${
                STAMP_PLATFORMS[res.platform]?.name
              } account has been connected to your Explorer Profile.`,
              status: 'success',
              duration: 10000,
              isClosable: true,
            })
            setRefreshPassportLS(true)
          } else {
            toast({
              title: res.status || t('Issue while adding the stamp.'),
              status: 'warning',
              duration: 10000,
              isClosable: true,
            })
            if (res?.fraud) setRefreshPassportLS(true)
            setLoadingStamp('')
          }
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {displayStamps && (
        <GitcoinGrid
          columns={[1, 2]}
          spacingX="40px"
          spacingY="0"
          issmallscreen={isSmallScreen.toString()}
        >
          {Object.entries(STAMP_PLATFORMS).map(([key, platform]) => {
            const stamp = stamps ? stamps[platform.provider] : null
            const isFacebookLogin = key === 'deprecated-facebook' && !stamp
            return (
              <Box
                key={`stamp-${key}`}
                pb={8}
                borderBottom="1px solid #72757B"
                p="2"
                display="flex"
                alignItems="center"
                h="80px"
              >
                {!isFacebookLogin && (
                  <Box width="40px" display="flex" justifyContent="center">
                    <Image
                      src={platform.icon}
                      minHeight="40px"
                      minWidth="40px"
                    />
                  </Box>
                )}
                {!isFacebookLogin && <Box m={2}>{`${platform.name}`}</Box>}
                <Box flexGrow={1} textAlign="right">
                  {stamp ? (
                    // OK
                    <CircleIcon
                      width="24px"
                      height="24px"
                      color={theme.colors.correct}
                    />
                  ) : (
                    <>
                      {key === 'facebook' ? (
                        <FacebookLogin
                          appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                          autoLoad={false}
                          scope="public_profile"
                          textButton={t('Connect')}
                          cssClass="css-rgn8uq css-1pu4076"
                          // cssClass="css-fb-button"
                          onClick={() => {
                            setLoadingStamp('facebook')
                          }}
                          isLoading={loadingStamp === 'facebook'}
                          callback={(res) => {
                            console.log(res)
                            if (res?.status === 'unknown') {
                              toast({
                                title: 'Login cancelled.',
                                status: 'warning',
                                duration: 10000,
                                isClosable: true,
                              })
                            } else if (res?.accessToken) {
                              apiCall(
                                `/api/stamps/callback/facebook?code=${res?.accessToken}&json=true&address=${address}`
                              )
                            }
                          }}
                          // HACK: force login via browser
                          isMobile={false}
                          render={(renderProps) => (
                            <Button
                              variant="primaryWhite"
                              onClick={renderProps.onClick}
                              isLoading={loadingStamp === key}
                            >
                              {t('Connect')}
                            </Button>
                          )}
                        />
                      ) : key === 'brightid' ? (
                        <ExternalLink href={STAMP_PLATFORMS[key].oauth}>
                          <Button
                            variant="primaryWhite"
                            isLoading={loadingStamp === key}
                            onClick={() =>
                              alert(
                                'You are going to be redirected to the Human Passport website. Sign-in with your wallet, go to dashboard, and connect with your Bright-ID account. Once you verified, go back to this page and click the refresh button.'
                              )
                            }
                          >
                            {t('Connect')}
                          </Button>
                        </ExternalLink>
                      ) : (
                        <Button
                          variant="primaryWhite"
                          onClick={() => {
                            linkPlatform(key)
                          }}
                          isLoading={loadingStamp === key}
                        >
                          {t('Connect')}
                        </Button>
                      )}
                    </>
                  )}
                </Box>
              </Box>
            )
          })}
        </GitcoinGrid>
      )}
    </>
  )
}

export default PassportStamps
