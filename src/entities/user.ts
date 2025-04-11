export interface UserStatsType {
  datadisks?: string[]
  handbooks?: string[]
  badges?: number
  valid_stamps?: string[]
  ens_name?: string
  ens_avatar?: string
  // donations?: { [key: string]: any }
  achievements?: string[]
  score?: number
  rank?: number
  referrals?: { profile_address: string, created_at: string }[]
  community?: string
  referrer?: { address: string, ens_name: string | null }
}
export interface UserType {
  address: string
  emailLinked: boolean
  ensName: string
  avatar: string
  stats?: UserStatsType
  badgeTokenIds: number[]
  kudosTokenIds: number[]
  error?: string
  community?: string
}
