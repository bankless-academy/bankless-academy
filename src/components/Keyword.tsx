import { useState } from 'react'
import { Tooltip } from '@chakra-ui/react'

const Keyword = ({
  keyword,
  definition,
}: {
  keyword: string
  definition: string
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Tooltip hasArrow label={definition} closeOnClick={false} isOpen={isOpen}>
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className="keyword"
      >
        {keyword}
      </span>
    </Tooltip>
  )
}

export default Keyword
