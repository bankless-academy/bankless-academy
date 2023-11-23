export interface UserType {
  ensName: string
  avatar: string
  stats?: {
    collectibles: number,
    handbooks: number,
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
