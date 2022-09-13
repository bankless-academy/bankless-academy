export interface ModuleType {
  name: string
  moduleId: string
  slug: string
  description: string
  moduleImageLink?: string
  socialImageLink?: string
  parentModule?: string
  subModules?: string[]
}
