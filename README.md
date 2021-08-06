# Onboard

## Project Specifications

- [Notion](https://www.notion.so/bankless/ONBOARD-c431218052c84cf598a6408aa464287b)
- [Planning / Tasks](https://www.notion.so/bankless/Onboard-planning-open-tasks-availability-405f670d58ee4aef8f10f8c8b46a329d)
- [Initial Figma wireframe](https://www.figma.com/file/ryapBbsKrI0Q77bKrMsNrQ/Onboard-MVP1?node-id=8%3A461) / [[WIP] New Figma wireframe](https://www.figma.com/file/FebGvlqhBqT5QO2iQ9mTUJ/Bankless-Onboarding?node-id=3%3A2)

## How to import content dynamically from Notion

### Where to update the content

[https://www.notion.so/bankless/1813af42f771491b8d9af966d9d433fe](https://www.notion.so/bankless/1813af42f771491b8d9af966d9d433fe)

### Defaut import command

```bash
yarn import-content
```

### Import a specific Notion ID

```bash
yarn import-content 1813af42f771491b8d9af966d9d433fe
```

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
- Assign @didierkrux + @wpmonty as reviewers

## Local Development

```bash
yarn dev
```

## Notes

Before committing yarn.lock, verify that the entry for `ethereumjs-abi` reads

```javascript
"ethereumjs-abi@git+https://github.com/ethereumjs/ethereumjs-abi.git":
  version "0.6.8"
  resolved "https://github.com/ethereumjs/ethereumjs-abi#1a27c59c15ab1e95ee8e5c4ed6ad814c49cc439e"
  dependencies:
    bn.js "^4.11.8"
    ethereumjs-util "^6.0.0"
```

This is a temporary fix to allow Netlify to build with walletconnect
