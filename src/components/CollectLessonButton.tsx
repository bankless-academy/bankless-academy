import { ReactNode } from 'react'
import { QuestionIcon } from '@chakra-ui/icons'
import { Button, Box, IconButton, Tooltip } from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'

const ButtonHelper = ({
  info,
  definition,
}: {
  info: string
  definition: ReactNode
}): JSX.Element => (
  <Box position="absolute" top="-20px" right="-20px">
    <Tooltip hasArrow label={definition} closeOnClick={false}>
      <IconButton
        variant="unstyled"
        icon={<QuestionIcon color="white" />}
        aria-label={info}
      />
    </Tooltip>
  </Box>
)

const CollectLessonButton = ({
  lesson,
}: {
  lesson: LessonType
}): JSX.Element => {
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )
  // TODO: replace with lesson.collectiblesId
  if (lesson.kudosId)
    return (
      <>
        {lesson.kudosId && (
          <Button
            variant={isKudosMintedLS ? 'primaryGold' : 'secondaryGold'}
            // onMouseEnter
            onClick={() =>
              isKudosMintedLS && alert(`TODO: collect ${lesson.name}`)
            }
          >
            <ButtonHelper
              info="Lesson Collectible"
              definition={
                <>
                  <Box>
                    Lesson collectibles are tradable NFTs containing lesson
                    content from Bankless Academy, built for 100 passionate
                    Bankless Explorers. Owning a lesson data-disk alters your
                    in-site experience, gets you an invite to our collectors
                    Telegram group, and displays your support for providing a
                    free blockchain education for internet citizens around the
                    globe.
                  </Box>
                  <Box>
                    There are only 100 versions available for each collectible
                    lesson, but if the original batch sells out you can always
                    try the secondary market.
                  </Box>
                  <Box>*10% creator fee on secondary trades.</Box>
                </>
              }
            />
            <Box>
              <Box>
                {isKudosMintedLS ? 'Collect Lesson' : 'Claim Badge First'}
              </Box>
              <Box fontSize="xs">-XX/100 claimed-</Box>
            </Box>
          </Button>
        )}
      </>
    )
}

export default CollectLessonButton
