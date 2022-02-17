import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Card = styled(Box)`
  border: 1px solid #646587;
  box-shadow: 0px 0px 50px rgba(123, 0, 255, 0.25);
  border-radius: 8px;
  /* position: relative;
  backdrop-filter: blur(42px);
  ::before {
    background: radial-gradient(
        263.79% 2784.77% at 53.46% 50%,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        68.97% 2269.66% at 48.48% 57.76%,
        #9b09df 0%,
        rgba(9, 56, 223, 0) 100%
      ),
      radial-gradient(
        50.97% 1974.55% at 52.22% 50%,
        #141414 0%,
        rgba(0, 0, 0, 0) 100%
      );
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  } */
`

export default Card
