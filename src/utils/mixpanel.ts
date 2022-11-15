import Mixpanel from 'mixpanel'

import { DOMAIN_PROD } from 'constants/index'

// TODO: remove debug

const mixpanel = Mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID, {
  api_host: 'https://api-eu.mixpanel.com',
  debug: true,
})

// call this function in back-end
export function trackBA(
  address: string,
  mixpanel_distinct_id: string,
  event: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  data?: object
): void {
  const data_object =
    typeof data === 'object'
      ? { $referring_domain: DOMAIN_PROD, ...data }
      : { project: DOMAIN_PROD }
  if (mixpanel_distinct_id !== address.toLowerCase())
    mixpanel.alias(address.toLowerCase(), mixpanel_distinct_id)
  mixpanel.track(event, {
    distinct_id: mixpanel_distinct_id || address,
    wallets: [address.toLowerCase()],
    ...data_object,
  })
}
