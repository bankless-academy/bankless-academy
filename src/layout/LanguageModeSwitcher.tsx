import * as React from 'react'
import { Button, IconButtonProps } from '@chakra-ui/react'

type LanguageModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

const LanguageModeSwitcher: React.FC<LanguageModeSwitcherProps> = (props) => {
  return (
    <Button
      p="0"
      variant="outline"
      aria-label={`Switch language`}
      onClick={() => alert('TODO')}
      {...props}
    >
      🇺🇸
    </Button>
  )
}

export default LanguageModeSwitcher
