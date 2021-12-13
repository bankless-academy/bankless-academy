# Bankless Academy

## Project Specifications

- [Notion](https://www.notion.so/bankless/Bankless-Academy-c431218052c84cf598a6408aa464287b)
- [Planning / Tasks](https://www.notion.so/bankless/Bankless-Academy-planning-open-tasks-availability-405f670d58ee4aef8f10f8c8b46a329d)
- [Figma wireframe](https://www.figma.com/file/RAaaNdsEWC9tuPuoX35Fsz/Academy?node-id=215%3A1179)

## Tech Stack

### Bootstrapped with

- [Next.js](https://nextjs.org/docs)
- [Chakra UI](https://chakra-ui.com/docs/getting-started) (includes [@emotion/styled](https://emotion.sh/docs/styled), which works like [Styled Components](https://styled-components.com/docs/basics))
- [Web3React](https://github.com/NoahZinsmeister/web3-react)
- [Web3 Modal](https://www.npmjs.com/package/web3modal)
- [Ethers](https://www.npmjs.com/package/ethers)

### Configured with

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

### Tools

- [POAP Subgraph](https://thegraph.com/legacy-explorer/subgraph/poap-xyz/poap-xdai) to get the number of POAP claimed
- [Moralis](https://docs.moralis.io/transactions-and-balances/realtime-transactions) to track onchain transactions

## How to get started for devs

- Get familiar with the project
- Check [open issues](https://github.com/BanklessDAO/onboard/issues) and assign yourself
- Create and submit a PR
- Assign [@didierkrux](https://github.com/didierkrux) as reviewers

## Local Development

```bash
yarn dev
```

## Database

Currently only POAP codes are stored in a PostgreSQL database. Database setup is not required in order to run the app.

### Setup

Setup and connection to the database is done via [Knex.js](https://knexjs.org/#Migrations-CLI).

### Config

Ask [@didierkrux](https://github.com/didierkrux) for the configs to add to your [.env.local](https://github.com/BanklessDAO/bankless-academy/blob/main/.env.example) file.

### Migrations

[https://github.com/BanklessDAO/bankless-academy/tree/main/migrations](https://github.com/BanklessDAO/bankless-academy/tree/main/migrations)

```bash
# Install Migration CLI
yarn global add knex
# Migrate to latest
knex migrate:latest
# Rollback the last batch of migrations
knex migrate:rollback
```
## How to import content manually from Notion

### Where to update the content

[https://www.notion.so/bankless/1dd77eb6ed4147f6bdfd6f23a30baa46](https://www.notion.so/bankless/1dd77eb6ed4147f6bdfd6f23a30baa46)

### Defaut content import command

```bash
yarn import-content
```

### Import content with a specific Notion ID

```bash
yarn import-content 1dd77eb6ed4147f6bdfd6f23a30baa46
```

### How does it work

The [import script](https://github.com/BanklessDAO/bankless-academy/blob/main/import-content.js) connects to a custom unofficial Notion API called Potion [https://github.com/didierkrux/potion](https://github.com/didierkrux/potion) and who transforms the content into [this Object](https://github.com/BanklessDAO/bankless-academy/blob/main/src/constants/quests.ts).

## How to import keywords dynamically from Notion

### Where to update the keywords

[https://www.notion.so/bankless/623e965e4f10456094d17aa94ec37105](https://www.notion.so/bankless/623e965e4f10456094d17aa94ec37105)

### Defaut keywords import command

```bash
yarn import-keywords
```

### Import keywords with a specific Notion ID

```bash
yarn import-keywords 623e965e4f10456094d17aa94ec37105
```

## How to import POAP codes into the database

If your POAP event id is `6454`, rename `links.txt` to `6454.txt`, move it into the `/poaps/` folder, then run the following command to automatically import all the `*.txt` files:

```bash
yarn import-poaps
```
