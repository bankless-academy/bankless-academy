import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

// TODO: clean dirty HACK
const LessonBanner = styled(Box)<{ iswhitelabel: string }>`
  ${(props) =>
    props.iswhitelabel === 'true'
      ? `
      img {
        border-radius: 10px;
      }
  `
      : `
  transform: scale(1.2);
  `};
`

export default LessonBanner
