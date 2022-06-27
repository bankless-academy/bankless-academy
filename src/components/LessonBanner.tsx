import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

// TODO: clean dirty HACK
const LessonBanner = styled(Box)<{ iswhitelabel: boolean }>`
  ${(props) =>
    props.iswhitelabel
      ? `
      border-radius: 20px;
  `
      : `
  transform: scale(1.2);
  `};
`

export default LessonBanner
