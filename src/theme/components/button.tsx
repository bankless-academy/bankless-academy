export default {
  Button: {
    baseStyle: {},
    variants: {
      primary: {
        background:
          'linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)',
        backdropFilter: 'blur(50px)',
        borderRadius: '8px',
        _hover: {
          paddingLeft: '15px',
          paddingRight: '15px',
          border: '1px solid #B85FF1',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(42px)',
          background:
            'linear-gradient(84.62deg, #B06FD8 7.42%, #597AEE 218.41%)',
          bgClip: 'text',
          color: 'transparent',
          span: {
            path: {
              fill: '#5c79ed',
            },
          },
        },
      },
      primaryBig: {
        background:
          'linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)',
        backdropFilter: 'blur(50px)',
        borderRadius: '60px',
        _hover: {
          paddingLeft: '23px',
          paddingRight: '23px',
          border: '1px solid #B85FF1',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(42px)',
          background:
            'linear-gradient(84.62deg, #B06FD8 7.42%, #597AEE 218.41%)',
          bgClip: 'text',
          color: 'transparent',
          span: {
            path: {
              fill: '#5c79ed',
            },
          },
        },
      },
      secondary: {
        background: '#3F3253',
        backdropFilter: 'blur(50px)',
        borderRadius: '8px',
        _hover: {
          paddingLeft: '15px',
          paddingRight: '15px',
          background: 'transparent',
          border: '1px solid #F2E5FF',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(42px)',
          color: '#F2E5FF',
          span: {
            path: {
              fill: '#F2E5FF',
            },
          },
        },
      },
      secondaryBig: {
        background: '#3F3253',
        backdropFilter: 'blur(50px)',
        borderRadius: '60px',
        _hover: {
          paddingLeft: '23px',
          paddingRight: '23px',
          background: 'transparent',
          border: '1px solid #F2E5FF',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(42px)',
          color: '#F2E5FF',
          span: {
            path: {
              fill: '#F2E5FF',
            },
          },
        },
      },
    },
  },
}
