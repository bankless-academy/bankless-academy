import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

export function useSmallScreen(): boolean[] | null {
  return useMediaQuery(
    [
      '(max-width: 800px)',
      '(max-width: 1260px)',
      '(max-width: 500px)',
      '(max-width: 389px)',
    ],
    {
      ssr: false,
    }
  )
}

export const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}
