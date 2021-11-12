export default {
  Button: {
    baseStyle: {
      'border-radius': '4px',
    },
    variants: {
      solid: {
        background:
          'radial-gradient(156.09% 261.49% at 100% 15.62%, #8F4AE7 0%, #EB77FE 51.56%, #FF87A1 100%)',
        border: '1px solid transparent',
        _hover: {
          border: '1px solid #B85FF1',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(42px)',
          background:
            'radial-gradient(156.09% 261.49% at 100% 15.62%, #8F4AE7 0%, #EB77FE 51.56%, #FF87A1 100%)',
          bgClip: 'text',
          color: 'transparent',
          span: {
            path: {
              fill: '#B85FF1',
            },
          },
        },
        _press: {
          border: '1px solid #B85FF1',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(42px)',
          background:
            'radial-gradient(156.09% 261.49% at 100% 15.62%, #8F4AE7 0%, #EB77FE 51.56%, #FF87A1 100%)',
          bgClip: 'text',
          color: 'transparent',
          span: {
            path: {
              fill: '#B85FF1',
            },
          },
        },
        _active: {
          border: '1px solid #B85FF1',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(42px)',
          background:
            'radial-gradient(156.09% 261.49% at 100% 15.62%, #8F4AE7 0%, #EB77FE 51.56%, #FF87A1 100%)',
          bgClip: 'text',
          color: 'transparent',
          span: {
            path: {
              fill: '#B85FF1',
            },
          },
        },
      },
      primary: {},
      outline: {
        border: '1px solid #B85FF1',
        'box-sizing': 'border-box',
        'backdrop-filter': 'blur(42px)',
      },
    },
  },
}
