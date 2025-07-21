import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import NonSSRWrapper from 'components/NonSSRWrapper'

const ConfettiComponent = ({
  showConfetti,
  onConfettiComplete,
}: {
  showConfetti: boolean
  onConfettiComplete: () => void
}): JSX.Element => {
  const { width, height } = useWindowSize()
  return (
    <NonSSRWrapper>
      <Confetti
        style={{ position: 'fixed', zIndex: '2000', top: '0', left: '0' }}
        width={width}
        height={height}
        run={showConfetti}
        gravity={0.05}
        numberOfPieces={2000}
        tweenDuration={10000}
        recycle={false}
        onConfettiComplete={() => onConfettiComplete()}
      />
    </NonSSRWrapper>
  )
}

export default ConfettiComponent
