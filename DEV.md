# Bankless Academy

Bankless Academy is a free, open-source, and multilingual educational platform designed to onboard individuals into the world of Web3, DeFi, DAOs, and decentralized finance through interactive, gamified learning experiences.

## Mission

To empower individuals with the knowledge and tools to achieve financial sovereignty through decentralized technologies.

## Project Links

- [Press & Media Kit](https://bankless.ac/kit): About Bankless Academy, Brand Assets, Team, Official Links and Press Links.
- [Whitelabel](https://whitelabel.banklessacademy.com/): Build your own web3 educational platform in no time by leveraging Bankless Academy's infrastructure.
- [Documentation](https://documentation.banklessacademy.com/): Understand how you can integrate Bankless Academy to your website.
- [FAQ](https://app.banklessacademy.com/faq): Frequently Asked Questions about Bankless Academy.
- [Sponsor](https://sponsors.banklessacademy.com/): Sponsor a Bankless Academy lesson.
- [Gitcoin Grant](https://grants.gitcoin.co/): Donate on Gitcoin Grant to support the project.
- [Dework](https://app.dework.xyz/bankless-academy-25331): Check for open tasks to help us improve Bankless Academy.
- [Jobs](https://talent.banklessacademy.com/): Open job positions.

## Platform Features

- **Interactive Lessons**: Engaging content with quizzes, simulations, and hands-on onchain exercises
- **Progress Tracking**: Personal dashboard to monitor course completion and achievements
- **Achievement Badges**: Earn on-chain badges for completing lessons
- **Multilingual Support**: Lessons available in multiple languages
- **Mobile Optimization**: Access content seamlessly across all devices

## Community & Social

- [X (Twitter)](https://bankless.ac/twitter)
- [Telegram Community](https://bankless.ac/community)
- [LinkedIn](https://www.linkedin.com/company/bankless-academy/)
- [Warpcast](https://bankless.ac/farcaster)
- [Lens](https://bankless.ac/hey)
- [Reddit](https://www.reddit.com/r/banklessacademy/)
- [Instagram](https://www.instagram.com/banklessacademy/)
- [YouTube](https://www.youtube.com/@BanklessAcademy)
- [Newsletter](https://bankless.ac/newsletter)

## Tech Stack

### Bootstrapped with

- [Next.js](https://nextjs.org/docs)
- [Chakra UI](https://chakra-ui.com/docs/getting-started) (includes [@emotion/styled](https://emotion.sh/docs/styled), which works like [Styled Components](https://styled-components.com/docs/basics))
- [wagmi](https://github.com/wagmi-dev/wagmi)
- [reown](https://reown.eth)
- [viem](https://viem.sh)

### Configured with

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks

### Integrations

- [Human Passport](https://passport.human.tech/) for Sybil protection with proof of personhood verification

## Local Development

```bash
yarn dev
```

## Database

Wallet addresses, encrypted Passport stamps & lesson completions are stored in a PostgreSQL database.
Database setup is only required for lesson badge distribution but not to run the app.

### Setup

Setup and connection to database are done via [Knex.js](https://knexjs.org/#Migrations-CLI).

### Config

DM `@didierkrux` on Telegram if you need the configs to add to your .env.local file (see [.env.example](https://github.com/bankless-academy/bankless-academy/blob/main/.env.example)).

### Migrations

Migration files: [https://github.com/bankless-academy/bankless-academy/tree/main/migrations](https://github.com/bankless-academy/bankless-academy/tree/main/migrations)

```bash
# Install Migration CLI
yarn global add knex
# Migrate to latest
knex migrate:latest
# Rollback the last batch of migrations
knex migrate:rollback
# add a new migration
knex migrate:make nameYourMigration
```

## Data Tracking

### Umami

Documentation + data tracked: [https://www.notion.so/bankless/Analytics-with-Umami-4f867b3c808e483790db7db617cc51b6](https://www.notion.so/bankless/Analytics-with-Umami-4f867b3c808e483790db7db617cc51b6#33ff53efb0394ed8849e24087054fae0)

### MixPanel

User interactions tracked in the app:

- [front-end](https://github.com/bankless-academy/bankless-academy/search?q=Mixpanel.track)
- [back-end](https://github.com/bankless-academy/bankless-academy/search?q=trackBE)

### Gitcoin Passport

We save the encrypted account username associated with each Passport stamp to detect Sybils. Human Passport provides 35M+ verifiable credentials and helps protect against bots and bad actors.

### Hotjar

Heatmap recording via [hotjar.com](https://hotjar.com)
This helps us understand how a user interacts with the product in order to improve the user experience.

## How to import content from Notion

### Where to update the content

[https://banklessacademy.notion.site/129141602de240e484356bd85f7c75e0](https://banklessacademy.notion.site/129141602de240e484356bd85f7c75e0)

### Default content import command

```bash
yarn import-content
```

### Show import command help

```bash
yarn import-content -h
```

### Import content with a specific Notion ID

```bash
yarn import-content -nid 129141602de240e484356bd85f7c75e0
```

### Import all translations for a specific lesson

```bash
yarn import-content -lid 6a440f5dd00a4179811178943bf89e1d -lg all
```

### Import a translation for a specific lesson

```bash
yarn import-content -lid 6a440f5dd00a4179811178943bf89e1d -lg fr
```

### How does it work

The [import script](https://github.com/bankless-academy/bankless-academy/blob/main/import-content.js) connects to a custom unofficial Notion API called Potion [https://github.com/bankless-academy/potion](https://github.com/bankless-academy/potion) and transforms the content into [this Object](https://github.com/bankless-academy/bankless-academy/blob/main/src/constants/lessons.ts).

## How to import keywords definitions from Notion

Note: import keywords before importing content.

### Where to update the keywords

[https://banklessacademy.notion.site/d452559560a447169e10f2d3c6ee5288](https://banklessacademy.notion.site/d452559560a447169e10f2d3c6ee5288)

### Default keywords import command

```bash
yarn import-keywords
```

### Import keywords with a specific Notion ID

```bash
yarn import-keywords d452559560a447169e10f2d3c6ee5288
```

## How to get started for devs

- Get familiar with the project
- Check [open issues](https://github.com/bankless-academy/bankless-academy/issues) and assign yourself
- Create and submit a PR
- Assign [@didierkrux](https://github.com/didierkrux) as reviewers

## Partnerships

Bankless Academy collaborates with leading Web3 organizations including:

- **Optimism**: Layer 2 scaling solutions
- **Zerion**: Wallet integration
- **Rocket Pool**: Decentralized staking education
- **1inch**: DEX aggregation insights
- **Gitcoin**: Grants support
- **Human Passport**: Sybil resistance and proof of personhood verification
- **Glo Dollar**: The stablecoin that funds public goods

## Core Values

- **Decentralization**: Empowering individuals through decentralized technologies
- **Inclusivity**: Open platform welcoming all experience levels
- **Open-Source Collaboration**: Encouraging community innovation
- **Education and Empowerment**: Providing high-quality resources for financial sovereignty
- **Integrity and Transparency**: Operating with trust and openness

## Support

If you believe in our mission, you can support Bankless Academy by donating to our Ethereum address: banklessacademy.eth (0xe1887fF140BfA9D3b45D0B2077b7471124acD242)

## Contact

- Links Hub: [bankless.ac/connect](https://bankless.ac/connect)
- Report Issues: [app.banklessacademy.com/report-an-issue](https://app.banklessacademy.com/report-an-issue)
- Feature Requests: [app.banklessacademy.com/feature-request](https://app.banklessacademy.com/feature-request)
