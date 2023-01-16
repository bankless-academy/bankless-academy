import Button from 'theme/components/button'
import Tag from 'theme/components/tag'
import Link from 'theme/components/link'
import { StyleConfig } from '@chakra-ui/theme-tools'

const components: Record<string, StyleConfig> = {
  ...Button,
  ...Link,
  ...Tag,
}

export default {
  components,
}
