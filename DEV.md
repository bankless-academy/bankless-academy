# Bankless Academy Developer Documentation

This document contains technical information and setup instructions for developers who want to contribute to Bankless Academy. For general information about the platform, please refer to our [README](./README.md).

## Project Links

- [Documentation](https://documentation.banklessacademy.com/): Understand how you can integrate Bankless Academy to your website.
- [Dework](https://app.dework.xyz/bankless-academy-25331): Check for open tasks to help us improve Bankless Academy.

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

## Content Management

### How to import content from Notion

#### Where to update the content

[https://banklessacademy.notion.site/129141602de240e484356bd85f7c75e0](https://banklessacademy.notion.site/129141602de240e484356bd85f7c75e0)

#### Default content import command

```bash
yarn import-content
```

#### Show import command help

```bash
yarn import-content -h
```

#### Import content with a specific Notion ID

```bash
yarn import-content -nid 129141602de240e484356bd85f7c75e0
```

#### Import all translations for a specific lesson

```bash
yarn import-content -lid 6a440f5dd00a4179811178943bf89e1d -lg all
```

#### Import a translation for a specific lesson

```bash
yarn import-content -lid 6a440f5dd00a4179811178943bf89e1d -lg fr
```

#### How does it work

The [import script](https://github.com/bankless-academy/bankless-academy/blob/main/import-content.js) connects to a custom unofficial Notion API called Potion [https://github.com/bankless-academy/potion](https://github.com/bankless-academy/potion) and transforms the content into [this Object](https://github.com/bankless-academy/bankless-academy/blob/main/src/constants/lessons.ts).

### How to import keywords definitions from Notion

Note: import keywords before importing content.

#### Where to update the keywords

[https://banklessacademy.notion.site/d452559560a447169e10f2d3c6ee5288](https://banklessacademy.notion.site/d452559560a447169e10f2d3c6ee5288)

#### Default keywords import command

```bash
yarn import-keywords
```

#### Import keywords with a specific Notion ID

```bash
yarn import-keywords d452559560a447169e10f2d3c6ee5288
```

## How to get started for devs

1. Get familiar with the project by reading the [README](./README.md)
2. Check [open issues](https://github.com/bankless-academy/bankless-academy/issues) and assign yourself
3. Create and submit a PR
4. Assign [@didierkrux](https://github.com/didierkrux) as reviewers
