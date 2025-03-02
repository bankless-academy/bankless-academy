import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

export function useSmallScreen(): boolean[] | null {
  if (typeof window === 'undefined') {
    return [false, false, false, false]
  }
  return useMediaQuery(
    [
      '(max-width: 800px)',
      '(max-width: 1260px) or (max-height: 719px)',
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
      if (typeof window !== 'undefined') {
        setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updatePosition)
      updatePosition()

      return () => window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return scrollPosition
}
