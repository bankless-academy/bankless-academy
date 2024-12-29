import React, { useEffect } from 'react'
import { Box, Text, Image, Heading, Button, SimpleGrid } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import LessonBanner from 'components/LessonBanner'
import InternalLink from 'components/InternalLink'
import { IS_WHITELABEL, LESSONS } from 'constants/index'
import { ModuleType } from 'entities/module'
import { useSmallScreen } from 'hooks/index'
import { Mixpanel } from 'utils/index'

const LessonGrid = styled(SimpleGrid)`
  border-bottom: 1px solid #72757b;
  :last-child {
    border-bottom: none;
  }
`

const Modules = ({
  modules,
  parentModule,
}: {
  modules: ModuleType[]
  parentModule?: ModuleType
}): React.ReactElement => {
  const { t } = useTranslation()
  const [isSmallScreen] = useSmallScreen()

  useEffect(() => {
    Mixpanel.track('open_module', {
      module: parentModule?.name || 'Learning Modules',
    })
  }, [])

  return (
    <Box mt="16">
      <Heading
        as="h1"
        size={parentModule ? '2xl' : 'xl'}
        textAlign={parentModule ? 'center' : 'unset'}
      >
        {parentModule?.name || 'Learning Modules'}
      </Heading>
      <Box>
        {modules.map((module, key) => {
          const lessonsInModule = LESSONS.filter(
            (lesson) => lesson.moduleId === module.moduleId
          )
          const moduleLink =
            lessonsInModule?.length === 1
              ? `/lessons/${lessonsInModule[0].slug}`
              : `/module/${module.slug}`
          const ModuleImage = (
            <LessonBanner
              iswhitelabel={IS_WHITELABEL.toString()}
              cursor="pointer"
              style={{
                aspectRatio: '1.91/1',
              }}
              maxW="600px"
            >
              <InternalLink href={moduleLink} alt={module.name}>
                <Image src={module.moduleImageLink} />
              </InternalLink>
            </LessonBanner>
          )
          const ModuleDescription = (
            <Box alignSelf="center" mt="4">
              <Heading fontSize="2xl">{module.name}</Heading>
              <Text fontSize="lg" my="4">
                {module.description}
              </Text>
              <InternalLink href={moduleLink} alt={module.name}>
                <Button variant="primary" mt="4">
                  {t('Explore Module')}
                </Button>
              </InternalLink>
            </Box>
          )
          return (
            <LessonGrid
              columns={{ sm: 1, md: 2, lg: 2 }}
              key={key}
              gap={6}
              py="10"
              mx={isSmallScreen ? '0' : '12'}
            >
              {key % 2 === 0 || isSmallScreen ? (
                <>
                  {ModuleImage}
                  {ModuleDescription}
                </>
              ) : (
                <>
                  {ModuleDescription}
                  {ModuleImage}
                </>
              )}
            </LessonGrid>
          )
        })}
      </Box>
    </Box>
  )
}

export default Modules
