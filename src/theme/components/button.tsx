// import {
//   SystemStyleObject,
//   SystemStyleFunction,
// } from '@chakra-ui/theme-tools/src/component'
import { isMobile } from 'react-device-detect'

const primaryStyle = {
  border: '1px solid #B85FF1',
  boxSizing: 'border-box',
  backdropFilter: 'blur(42px)',
  background: 'linear-gradient(132deg, #67407E 0%, #354374 100%)',
  // background: 'linear-gradient(84.62deg, #B06FD8 7.42%, #597AEE 218.41%)',
  // bgClip: 'text',
  color: '#F2E5FF',
  span: {
    path: {
      fill: '#5c79ed',
    },
  },
}

const secondaryStyle = {
  background: 'transparent',
  border: '1px solid #3f3154',
  boxSizing: 'border-box',
  backdropFilter: 'blur(42px)',
  color: '#F2E5FF',
  span: {
    path: {
      fill: '#F2E5FF',
    },
  },
}

const padding = { paddingLeft: '15px', paddingRight: '15px' }
const paddingBig = { paddingLeft: '23px', paddingRight: '23px' }

const primary = {
  background: 'linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)',
  backdropFilter: 'blur(50px)',
  borderRadius: '8px',
  _hover: isMobile
    ? {}
    : {
        ...padding,
        ...primaryStyle,
      },
  _active: {
    background: 'linear-gradient(132deg, #67407E 0%, #354374 100%);',
  },
  _disabled: {
    ...padding,
    cursor: 'default',
    color: '#daa0ff',
    opacity: '0.6',
    background: 'transparent',
    _before: {
      background:
        'linear-gradient(104.42deg, #B06FD8 35.33%, rgba(89, 122, 238, 0.7) 93.21%)',
      content: `""`,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '8px',
      padding: '1px',
      '-webkit-mask':
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      '-webkit-mask-composite': 'source-out',
      'mask-composite': 'exclude',
    },
    span: {
      path: {
        fill: '#daa0ff',
      },
    },
    _hover: {
      border: '0',
      color: '#daa0ff',
      span: {
        path: {
          fill: '#daa0ff',
        },
      },
    },
  },
}

const primaryGold = {
  ...primary,
  background: 'linear-gradient(105.55deg, #fbba59 12.48%, #bf8260 95.84%)',
  _hover: {
    ...padding,
    background: 'linear-gradient(134deg, #9E8053 0%, #684D3E 100%)',
    border: '1px solid #f1b15a',
  },
  _active: {
    ...padding,
    background: 'linear-gradient(134deg, #9E8053 0%, #684D3E 100%)',
    border: '1px solid #f1b15a',
  },
  _disabled: {
    ...padding,
    cursor: 'default',
    color: '#f1b15a',
    opacity: '0.6',
    background: 'transparent',
    border: '1px solid #f1b15a',
  },
}

const primaryBig = {
  background: 'linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)',
  backdropFilter: 'blur(50px)',
  borderRadius: '60px',
  _hover: isMobile
    ? {}
    : {
        ...paddingBig,
        ...primaryStyle,
      },
}

const primaryWhite = {
  ...primaryBig,
  background: 'white',
  color: '#5D4E78',
  border: '2px solid transparent',
  _hover: {
    background: 'white',
    border: '2px solid #b357ec',
  },
  _disabled: {
    color: '#5D4E78',
    border: '2px solid transparent',
    background: 'white',
    _hover: {
      background: 'white',
      color: 'white',
      border: '2px solid transparent',
    },
  },
}

const primaryBigLast = {
  background:
    'linear-gradient(270deg, #FFFCF9 -44.74%, #F77B54 -11.81%, #916AB8 94.44%)',
  backdropFilter: 'blur(50px)',
  borderRadius: '60px',
  _hover: isMobile
    ? {}
    : {
        ...paddingBig,
        ...primaryStyle,
      },
}

const secondary = {
  background: '#3F3253',
  backdropFilter: 'blur(50px)',
  borderRadius: '8px',
  _hover: isMobile
    ? {}
    : {
        ...padding,
        ...secondaryStyle,
      },
}

const secondaryGold = {
  ...primary,
  background: 'transparent',
  color: '#f1b15a',
  border: '1px solid #f1b15a',
  _hover: {
    cursor: 'default',
    background: 'linear-gradient(134deg, #9E8053 0%, #684D3E 100%)',
  },
}

const secondaryBig = {
  background: '#3f3154',
  backdropFilter: 'blur(50px)',
  borderRadius: '60px',
  _hover: isMobile
    ? {}
    : {
        ...paddingBig,
        ...secondaryStyle,
        background: '#25212e',
      },
}

const secondaryLg = {
  background: '#3F3253',
  backdropFilter: 'blur(50px)',
  _hover: isMobile
    ? {}
    : {
        ...paddingBig,
        ...secondaryStyle,
      },
}

const secondaryWhite = {
  ...secondaryBig,
  background: 'transparent',
  color: 'white',
  border: '2px solid white',
  _hover: {
    border: '2px solid transparent',
  },
}

// TODO: https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings for auto-complete
type variantType = any
type variantsTypes = {
  primary: variantType
  primaryGold: variantType
  primaryWhite: variantType
  primaryBig: variantType
  primaryBigLast: variantType
  secondary: variantType
  secondaryGold: variantType
  secondaryBig: variantType
  secondaryLg: variantType
  secondaryWhite: variantType
}

const variants: variantsTypes = {
  primary,
  primaryGold,
  primaryWhite,
  primaryBig,
  primaryBigLast,
  secondary,
  secondaryGold,
  secondaryBig,
  secondaryLg,
  secondaryWhite,
}

export default {
  Button: {
    baseStyle: {
      color: 'white',
      _hover: {
        textDecoration: 'none !important',
      },
    },
    variants,
  },
}
