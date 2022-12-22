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
    margin-left: -23px;
    margin-right: -23px;
    `
      : `
    transform: scale(1.2);
    padding-top:var(--chakra-space-6);
    padding-bottom:var(--chakra-space-6);
  `};
`

export default LessonBanner
