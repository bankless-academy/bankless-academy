import { useMediaQuery } from '@chakra-ui/react'

export function useSmallScreen(): boolean[] {
  return useMediaQuery(['(max-width: 800px)', '(max-width: 1260px)', '(max-width: 500px)'])
}
