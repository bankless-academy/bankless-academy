export interface ModuleType {
  name: string
  slug: string
  description: string
  moduleImageLink?: string
  submodules?: {
    name: string
    slug: string
    description: string
    moduleImageLink?: string
  }[]
}
