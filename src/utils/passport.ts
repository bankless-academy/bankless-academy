import { Stamp } from '@gitcoinco/passport-sdk-types'
import { ALLOWED_ISSUER, STAMP_PROVIDERS } from 'constants/passport'
import { Stamps } from 'entities/passport'

const ALLOWED_PROVIDERS = Object.keys(STAMP_PROVIDERS)

export const filterValidStamps = (stamps: Stamp[]): Stamp[] => {
  // const currentTimestamp = 1665401965000
  const currentTimestamp = Date.now()
  return stamps?.filter(
    (stamp) =>
      stamp.credential.issuer === ALLOWED_ISSUER &&
      ALLOWED_PROVIDERS.includes(stamp.provider) &&
      Date.parse(stamp.credential.expirationDate) > currentTimestamp
  )
}

export const getNumberOfValidStamps = (stamps: Stamps): number | null => {
  if (stamps === null || !stamps) return null
  const array = Object.values(stamps)
  if (!array.length) {
    return 0
  }
  return filterValidStamps(Object.values(stamps)).length
}
