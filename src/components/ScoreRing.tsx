// https://github.com/gitcoinco/passport/blob/main/app/components/DashboardScorePanel.tsx

import { Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import ExternalLink from './ExternalLink'

const ScoreRing = ({ score }: { score: string | number }) => {
  const dashLength = 255
  const earlyStartOffset = 6
  const displayScore = score === '...' ? 0 : (score as number)

  const StyledBox = styled(Box)`
    position: relative;
    .style1 {
      tab-size: 4;
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizelegibility;
      color-scheme: light;
      font-feature-settings: 'kern';
      line-height: var(--chakra-lineHeights-base);
      --tw-bg-opacity: 1;
      font-family: var(--font-body);
      --tw-border-opacity: 1;
      --tw-gradient-from: rgb(var(--color-background) / 1);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
      --tw-gradient-to: rgb(var(--color-background-4) / 1);
      --tw-text-opacity: 1;
      color: rgb(var(--color-foreground-2) / var(--tw-text-opacity));
      fill: transparent;
      stroke: currentcolor;
      stroke-width: 8;
      /* stroke-dasharray: 255; */
      /* stroke-dashoffset: 154.403; */
      d: path(
        'M 31.1769 3.5 Q 37.2391 0 43.3013 3.5 L 68.416 18 Q 74.4782 21.5 74.4782 28.5 L 74.4782 57.5 Q 74.4782 64.5 68.416 68 L 43.3013 82.5 Q 37.2391 86 31.1769 82.5 L 6.06218 68 Q 0 64.5 0 57.5 L 0 28.5 Q 0 21.5 6.06218 18 Z'
      );
      border: 0 solid #e5e7eb;
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
      overflow-wrap: break-word;
      border-color: var(--chakra-colors-chakra-border-color);
      --tw-translate-x: 3.5px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      --tw-translate-y: 4px;
      transition-property: stroke-dashoffset;
      transition-delay: 0.3s;
      transition-duration: 1s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      color: white;
    }
    .style2 {
      tab-size: 4;
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizelegibility;
      --onboard-shadow-3: none;
      color-scheme: light;
      font-feature-settings: 'kern';
      line-height: var(--chakra-lineHeights-base);
      --tw-bg-opacity: 1;
      font-family: var(--font-body);
      --tw-border-opacity: 1;
      --tw-gradient-from: rgb(var(--color-background) / 1);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
      --tw-gradient-to: rgb(var(--color-background-4) / 1);
      --tw-text-opacity: 1;
      color: rgb(var(--color-foreground-2) / var(--tw-text-opacity));
      fill: transparent;
      stroke: rgb(var(--color-background));
      stroke-width: 8;
      /* stroke-dasharray: 255; */
      /* stroke-dashoffset: 249; */
      d: path(
        'M 31.1769 3.5 Q 37.2391 0 43.3013 3.5 L 68.416 18 Q 74.4782 21.5 74.4782 28.5 L 74.4782 57.5 Q 74.4782 64.5 68.416 68 L 43.3013 82.5 Q 37.2391 86 31.1769 82.5 L 6.06218 68 Q 0 64.5 0 57.5 L 0 28.5 Q 0 21.5 6.06218 18 Z'
      );
      border: 0 solid #e5e7eb;
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
      overflow-wrap: break-word;
      border-color: var(--chakra-colors-chakra-border-color);
      --tw-translate-x: 3.5px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      --tw-translate-y: 4px;
      color: white;
    }
    .style3 {
      tab-size: 4;
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizelegibility;
      color-scheme: light;
      font-feature-settings: 'kern';
      line-height: var(--chakra-lineHeights-base);
      --tw-bg-opacity: 1;
      font-family: var(--font-body);
      --tw-border-opacity: 1;
      --tw-gradient-from: rgb(var(--color-background) / 1);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
      --tw-gradient-to: rgb(var(--color-background-4) / 1);
      --tw-text-opacity: 1;
      color: rgb(var(--color-foreground-2) / var(--tw-text-opacity));
      fill: transparent;
      stroke: rgb(var(--color-background-4) / 0.6);
      stroke-width: 8;
      /* stroke-dasharray: 255; */
      /* stroke-dashoffset: 249; */
      d: path(
        'M 31.1769 3.5 Q 37.2391 0 43.3013 3.5 L 68.416 18 Q 74.4782 21.5 74.4782 28.5 L 74.4782 57.5 Q 74.4782 64.5 68.416 68 L 43.3013 82.5 Q 37.2391 86 31.1769 82.5 L 6.06218 68 Q 0 64.5 0 57.5 L 0 28.5 Q 0 21.5 6.06218 18 Z'
      );
      border: 0 solid #e5e7eb;
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
      overflow-wrap: break-word;
      border-color: var(--chakra-colors-chakra-border-color);
      --tw-translate-x: 3.5px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      --tw-translate-y: 4px;
      color: white;
    }
    .style4 {
      tab-size: 4;
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizelegibility;
      color-scheme: light;
      font-feature-settings: 'kern';
      line-height: var(--chakra-lineHeights-base);
      --tw-bg-opacity: 1;
      font-family: var(--font-body);
      --tw-border-opacity: 1;
      --tw-gradient-from: rgb(var(--color-background) / 1);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
      --tw-gradient-to: rgb(var(--color-background-4) / 1);
      --tw-text-opacity: 1;
      color: rgb(var(--color-foreground-2) / var(--tw-text-opacity));
      fill: transparent;
      stroke: currentcolor;
      stroke-width: 2;
      d: path(
        'M 26.8468 3.5 Q 32.909 0 38.9711 3.5 L 59.7558 15.5 Q 65.8179 19 65.8179 26 L 65.8179 50 Q 65.8179 57 59.7558 60.5 L 38.9711 72.5 Q 32.909 76 26.8468 72.5 L 6.06218 60.5 Q 0 57 0 50 L 0 26 Q 0 19 6.06218 15.5 Z'
      );
      border: 0 solid #e5e7eb;
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
      overflow-wrap: break-word;
      border-color: var(--chakra-colors-chakra-border-color);
      --tw-translate-x: 7.8px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      --tw-translate-y: 9px;
      color: white;
    }
    .score {
      font-size: 28px;
      line-height: 1.5em;
      position: absolute;
      top: 25px;
      left: 17px;
      width: 50px;
      text-align: center;
    }
    .style2 {
      stroke: transparent !important;
    }
  `
  return (
    <Box mt="4">
      <StyledBox m="auto" width="fit-content" display="flex">
        <Box alignSelf="center" mr="2">
          {/* <ExternalLink href="https://passport.gitcoin.co/">
            <Button
              variant="primaryWhite"
              color="#5D4E78"
              // leftIcon={
              //   <Image
              //     height="30px"
              //     src="/images/gitcoin-passport.svg"
              //     alt="Gitcoin Passport"
              //   />
              // }
            >
              {'Gitcoin Passport'}
            </Button>
          </ExternalLink> */}
          {'Gitcoin Passport score: '}
        </Box>
        <Box position="relative">
          <svg
            className="col-start-1 row-start-1"
            width="82"
            height="94"
            viewBox="0 0 81.40638795573723 94"
          >
            {/* progress ring l = 43, r=7 */}
            <path
              className="style1"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={dashLength}
              strokeDashoffset={
                dashLength * (1 - displayScore / 100) - earlyStartOffset
              }
              d="M31.176914536239785 3.4999999999999996Q37.23909236273086 0 43.30127018922193 3.5L68.41600689897065 18Q74.47818472546172 21.5 74.47818472546172 28.5L74.47818472546172 57.5Q74.47818472546172 64.5 68.41600689897065 68L43.30127018922193 82.5Q37.23909236273086 86 31.17691453623979 82.5L6.06217782649107 68Q0 64.5 0 57.5L0 28.5Q0 21.5 6.062177826491071 18Z"
            ></path>
            {/* cover too-early start of progress ring, backdrop combines */}
            {/* with next ring to match background color l = 43, r=7 */}
            <path
              className="style2"
              fill="transparent"
              stroke={
                displayScore < 100
                  ? 'rgb(var(--color-background))'
                  : 'currentColor'
              }
              strokeWidth="8"
              strokeDasharray={dashLength}
              strokeDashoffset={dashLength - earlyStartOffset}
              d="M31.176914536239785 3.4999999999999996Q37.23909236273086 0 43.30127018922193 3.5L68.41600689897065 18Q74.47818472546172 21.5 74.47818472546172 28.5L74.47818472546172 57.5Q74.47818472546172 64.5 68.41600689897065 68L43.30127018922193 82.5Q37.23909236273086 86 31.17691453623979 82.5L6.06217782649107 68Q0 64.5 0 57.5L0 28.5Q0 21.5 6.062177826491071 18Z"
            ></path>
            {/* cover too-early start of progress ring, partial transparent color */}
            {/* combines with previous ring to match color l = 43, r=7 */}
            <path
              className="style3"
              fill="transparent"
              stroke={
                displayScore < 100
                  ? 'rgb(var(--color-background-4) / .6)'
                  : 'currentColor'
              }
              strokeWidth="8"
              strokeDasharray={dashLength}
              strokeDashoffset={dashLength - earlyStartOffset}
              d="M31.176914536239785 3.4999999999999996Q37.23909236273086 0 43.30127018922193 3.5L68.41600689897065 18Q74.47818472546172 21.5 74.47818472546172 28.5L74.47818472546172 57.5Q74.47818472546172 64.5 68.41600689897065 68L43.30127018922193 82.5Q37.23909236273086 86 31.17691453623979 82.5L6.06217782649107 68Q0 64.5 0 57.5L0 28.5Q0 21.5 6.062177826491071 18Z"
            ></path>
            {/* inner ring l = 38, r=7 */}
            <path
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              className="style4"
              d="M26.846787517317594 3.4999999999999996Q32.90896534380867 0 38.97114317029974 3.5L59.75575286112626 15.5Q65.81793068761733 19 65.81793068761733 26L65.81793068761733 50Q65.81793068761733 57 59.75575286112626 60.5L38.97114317029974 72.5Q32.90896534380867 76 26.846787517317598 72.5L6.06217782649107 60.5Q0 57 0 50L0 26Q0 19 6.062177826491071 15.5Z"
            ></path>
            {/* outer ring l = 48, r=7 */}
            <path
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              d="M34.64101615137754 3.4999999999999996Q40.703193977868615 0 46.76537180435969 3.4999999999999996L75.34421012924616 20Q81.40638795573723 23.5 81.40638795573723 30.5L81.40638795573723 63.5Q81.40638795573723 70.5 75.34421012924616 74L46.76537180435969 90.5Q40.703193977868615 94 34.64101615137754 90.5L6.062177826491071 74Q0 70.5 0 63.5L0 30.5Q0 23.5 6.062177826491071 20Z"
            ></path>
          </svg>
          <Box className="score">
            <span>{score}</span>
          </Box>
        </Box>
        <Box alignSelf="center" ml={4}>
          {/* {`score > 20`} */}
          <ExternalLink href="https://passport.gitcoin.co/">
            <Button
              variant="primaryWhite"
              color="#5D4E78"
              // leftIcon={
              //   <Image
              //     height="30px"
              //     src="/images/gitcoin-passport.svg"
              //     alt="Gitcoin Passport"
              //   />
              // }
            >
              {'Update'}
            </Button>
          </ExternalLink>
        </Box>
      </StyledBox>
    </Box>
  )
}

export default ScoreRing
