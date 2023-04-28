import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LessonBanner = styled(Box)<{
  iswhitelabel: string
  isarticle?: string
}>`
  ${(props) =>
    props.iswhitelabel === 'true'
      ? `
      img {
        border-radius: 10px;
      }
  `
      : `
      margin-left: -23px;
      margin-right: -23px;
  `};
`

export default LessonBanner
