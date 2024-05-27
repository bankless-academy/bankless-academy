export interface UserStatsType {
  datadisks?: string[]
  handbooks?: string[]
  badges?: number
  valid_stamps?: string[]
  ens_name?: string
  ens_avatar?: string
  donations?: { [key: string]: any }
  score?: number
  rank?: number
  referrals?: string[]
  community?: string
}
export interface UserType {
  address: string
  ensName: string
  avatar: string
  stats?: UserStatsType
  badgeTokenIds: number[]
  kudosTokenIds: number[]
  error?: string
  community?: string
}
