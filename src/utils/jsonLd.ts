// Shared JSON-LD building blocks. Client-safe (no fs): imported by the
// build-time builders in utils/seoContent.ts and utils/lessonContent.ts.
import { DOMAIN_URL_, PROJECT_NAME } from 'constants/index'

export const ORGANIZATION_ID = `${DOMAIN_URL_}/#organization`

/** Compact reference for `provider` / `publisher` fields on other nodes. */
export const organizationRef = () => ({
  '@type': 'EducationalOrganization',
  '@id': ORGANIZATION_ID,
  name: PROJECT_NAME,
  url: DOMAIN_URL_,
})

/** The full Organization node, emitted once, on the homepage. `sameAs` is the
 * knowledge-graph grounding: the same profiles the README lists, as canonical
 * profile URLs rather than bankless.ac short links. */
export const organizationJsonLd = () => ({
  ...organizationRef(),
  logo: `${DOMAIN_URL_}/app-icon.png`,
  description:
    'Free, open-source, multilingual education that onboards beginners into Web3, DeFi and decentralized finance through interactive lessons, handbooks and onchain quests.',
  email: 'gm@banklessacademy.com',
  sameAs: [
    'https://x.com/BanklessAcademy',
    'https://farcaster.xyz/banklessacademy',
    'https://www.linkedin.com/company/bankless-academy/',
    'https://www.reddit.com/r/banklessacademy/',
    'https://www.instagram.com/banklessacademy/',
    'https://www.youtube.com/@BanklessAcademy',
    'https://github.com/bankless-academy',
    'https://t.me/banklessacademy',
  ],
  knowsAbout: ['Bitcoin', 'Ethereum', 'Cryptocurrency wallets', 'DeFi', 'Web3'],
})

/** `</script>` inside a definition would end the JSON-LD block early. */
export const serializeJsonLd = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, '\\u003c')
