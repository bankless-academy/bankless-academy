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

import { ALLOWED_ISSUER, STAMP_PROVIDERS } from 'constants/passport'
// import { Stamps } from 'entities/passport'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'

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

  const linkPlatform = (platform, forceAuthUrl) => {
    setLoadingStamp(platform)
    const width = 600
    const height = 800
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2
    const random = Math.floor(Math.random() * 100000)
    const authUrl: string =
      forceAuthUrl ||
      STAMP_PROVIDERS[platform].oauth
        ?.replace('RANDOM_STATE', `&state=${random}`)
        ?.replaceAll('REPLACE_ADDRESS', `${address}`)
    console.log(authUrl)
    if (authUrl.includes('json=true')) {
      apiCall(authUrl)
    } else {
      window.open(
        authUrl,
        '_blank',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
      )
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
              title: t('Stamp added.'),
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
          {Object.entries(STAMP_PROVIDERS).map(([key, provider]) => {
            const stamp = stamps ? stamps[key] : null
            const currentTimestamp = Date.now()
            const isStampExpired = !(
              Date.parse(stamp?.stamp?.expirationDate) > currentTimestamp
            )
            const isTrustedIssuer = stamp?.stamp?.issuer === ALLOWED_ISSUER
            return (
              <Box
                key={`stamp-${key}`}
                pb={8}
                borderBottom="1px solid #72757B"
                p="2"
                display="flex"
                alignItems="center"
              >
                <Box width="40px" display="flex" justifyContent="center">
                  <Image src={provider.icon} height="30px" />
                </Box>
                <Box m={2}>{`${provider.name}`}</Box>
                <Box flexGrow={1} textAlign="right">
                  {key === 'Facebook' ? (
                    <FacebookLogin
                      appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                      autoLoad={false}
                      scope="public_profile"
                      textButton={t('link')}
                      cssClass="css-1edqdd0"
                      onClick={() => {
                        setLoadingStamp('Facebook')
                      }}
                      callback={(res) => {
                        console.log(res)
                        if (res?.accessToken) {
                          apiCall(
                            `/api/stamps/callback/facebook?accessToken=${res.accessToken}&json=true&address=${address}`
                          )
                        }
                      }}
                      redirectUri="/api/stamps/callback/facebook"
                      state={address}
                      render={(renderProps) => (
                        <Button
                          variant="outline"
                          onClick={renderProps.onClick}
                          mt="4"
                        >
                          {t('link')}
                        </Button>
                      )}
                    />
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => {
                        linkPlatform(key, null)
                      }}
                      mt="4"
                      isLoading={loadingStamp === key}
                    >
                      {t('link')}
                    </Button>
                  )}
                  {stamp ? (
                    isStampExpired ? (
                      <span style={{ color: theme.colors.incorrect }}>
                        {t('stamp expired')}
                      </span>
                    ) : isTrustedIssuer ? (
                      // OK
                      <CircleIcon color={theme.colors.correct} />
                    ) : (
                      <span style={{ color: theme.colors.incorrect }}>
                        {t('untrusted DID issuer')}
                      </span>
                    )
                  ) : stamp === null ? (
                    // No info yet
                    // <CircleIcon color={theme.colors.incorrect} />
                    <Box
                      border="1px solid white"
                      borderRadius="50%"
                      width="12px"
                      height="12px"
                      display="inline-block"
                    ></Box>
                  ) : (
                    // Not OK
                    <CircleIcon color={theme.colors.incorrect} />
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
