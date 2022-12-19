import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

// TODO: clean dirty HACK
const LessonBanner = styled(Box)<{
  iswhitelabel: string
  isArticle?: string
}>`
  ${(props) =>
    props.iswhitelabel === 'true'
      ? `
      img {
        border-radius: 10px;
      }
  `
      : props.isArticle === 'true'
      ? `
    margin-left: -16px;
    margin-right: -16px;
    `
      : `
    transform: scale(1.2);
  `};
`

export default LessonBanner
