export interface UserType {
  ensName: string
  avatar: string
  stats?: {
    datadisks: string[],
    handbooks: string[],
    badges: number,
    valid_stamps: string[],
    ens_name: string,
    ens_avatar: string,
    donations: string[]
    score: number,
    rank: number
  }
  badgeTokenIds: number[]
  kudosTokenIds: number[]
  donations: string[]
}
