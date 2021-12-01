export default {
  Tag: {
    baseStyle: {},
    variants: {
      solid: {
        container: {
          background:
            'linear-gradient(95.83deg, #44A991 -9.2%, rgba(127, 84, 247, 0.7) 97.91%)',
          boxShadow: '0px 0px 50px #000000',
          backdropFilter: 'blur(42px)',
          color: '#000000',
        },
      },
      outline: {
        container: {
          _before: {
            background:
              'linear-gradient(104.42deg, #B06FD8 35.33%, rgba(89, 122, 238, 0.7) 93.21%)',
            content: `""`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'var(--chakra-radii-md)',
            padding: '1px',
            '-webkit-mask':
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'source-out',
            'mask-composite': 'exclude',
          },
          position: 'relative',
          color: '#B06FD8',
          backdropFilter: 'blur(42px)',
          boxShadow: 'none',
        },
      },
    },
  },
}
