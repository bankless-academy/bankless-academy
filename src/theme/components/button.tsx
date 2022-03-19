import { isMobile } from 'react-device-detect'

const primaryStyle = {
  border: '1px solid #B85FF1',
  boxSizing: 'border-box',
  backdropFilter: 'blur(42px)',
  background: 'linear-gradient(84.62deg, #B06FD8 7.42%, #597AEE 218.41%)',
  bgClip: 'text',
  color: '#F2E5FF',
  span: {
    path: {
      fill: '#5c79ed',
    },
  },
}

const secondaryStyle = {
  background: 'transparent',
  border: '1px solid #F2E5FF',
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

export default {
  Button: {
    baseStyle: {
      _hover: {
        textDecoration: 'none !important',
      },
    },
    variants: {
      primary: {
        background:
          'linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)',
        backdropFilter: 'blur(50px)',
        borderRadius: '8px',
        _hover: isMobile
          ? {}
          : {
              ...padding,
              ...primaryStyle,
            },
      },
      primaryBig: {
        background:
          'linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)',
        backdropFilter: 'blur(50px)',
        borderRadius: '60px',
        _hover: isMobile
          ? {}
          : {
              ...paddingBig,
              ...primaryStyle,
            },
      },
      primaryBigLast: {
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
      },
      secondary: {
        background: '#3F3253',
        backdropFilter: 'blur(50px)',
        borderRadius: '8px',
        _hover: isMobile
          ? {}
          : {
              ...padding,
              ...secondaryStyle,
            },
      },
      secondaryBig: {
        background: '#3F3253',
        backdropFilter: 'blur(50px)',
        borderRadius: '60px',
        _hover: isMobile
          ? {}
          : {
              ...paddingBig,
              ...secondaryStyle,
            },
      },
    },
  },
}
