import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Card = styled(Box)`
  border: 1px solid #524f4f;
  background: linear-gradient(
    107.1deg,
    rgba(46, 33, 33, 0.3) -3.13%,
    rgba(80, 73, 84, 0.3) 16.16%,
    rgba(94, 89, 104, 0.3) 29.38%,
    rgba(86, 81, 94, 0.3) 41.5%,
    rgba(23, 21, 21, 0.3) 102.65%
  );
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.8);
  /* disable backdrop because of react-beautiful-dnd bug */
  /* backdrop-filter: blur(50px); */
  /* ::before {
    content: "";
    backdrop-filter: blur(50px);
    position: absolute;
    width: 100%;
    height: 100%;
  } */
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
