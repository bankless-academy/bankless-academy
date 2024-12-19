import { Box, Image } from '@chakra-ui/react'

import { LessonType } from 'entities/lesson'
import Helper from 'components/Helper'
import ExternalLink from './ExternalLink'

const Reward = ({
  lesson,
  displayHelper = false,
}: {
  lesson: LessonType
  displayHelper?: boolean
}) => {
  return (
    <>
      {lesson.slug === 'ethereum-basics' && (
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          {'Earn 1 USDGLO'}
          <Image
            src="/images/understanding-stablecoins/sponsor-d3df6afb.png"
            width="24px"
            ml="1"
            alt="USDGLO"
          />
          <Box position="absolute" top="0px" right="-12px">
            {displayHelper && (
              <Helper
                title={'Earn 1 USDGLO for completing this lesson'}
                definition={
                  <>
                    <Box mb="4">
                      Campaign deadline: December 30th, 12 pm UTC or the first
                      250 mints, whatever happens first.
                      <br />
                      <br />
                      Rewards will be airdropped to all eligible addresses once
                      the campaign is finalized. Explorers who already claimed
                      this badge previously are already eligible ✅
                      <br />
                      <br />
                      <ExternalLink
                        underline="true"
                        href="https://x.com/BanklessAcademy/status/1869412319819956491"
                      >
                        Learn more
                      </ExternalLink>
                    </Box>
                  </>
                }
              />
            )}
          </Box>
        </Box>
      )}
    </>
  )
}

export default Reward
