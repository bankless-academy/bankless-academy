import { useState } from 'react'
import { Tooltip } from '@chakra-ui/react'

const Keyword = ({
  keyword,
  definition,
  forceEnglish,
}: {
  keyword: string
  definition: string
  forceEnglish?: boolean
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Tooltip
      hasArrow
      label={definition}
      closeOnClick={false}
      isOpen={isOpen}
      color="black"
      background="#B498CD"
    >
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className={`keyword${forceEnglish ? ' force-english' : ''}`}
      >
        {keyword}
      </span>
    </Tooltip>
  )
}

export default Keyword
