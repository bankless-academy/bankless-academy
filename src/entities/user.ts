export interface UserStatsType {
  datadisks?: string[],
  handbooks?: string[],
  badges?: number,
  valid_stamps?: string[],
  ens_name?: string,
  ens_avatar?: string,
  donations?: string[]
  score?: number,
  rank?: number
}
export interface UserType {
  ensName: string
  avatar: string
  stats?: UserStatsType
  badgeTokenIds: number[]
  kudosTokenIds: number[]
  error?: string
}
