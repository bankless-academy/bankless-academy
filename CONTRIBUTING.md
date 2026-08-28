# Bankless Academy Developer Documentation

This document contains technical information and setup instructions for developers who want to contribute to Bankless Academy. For general information about the platform, please refer to our [README](./README.md).

Working on the codebase with an AI assistant? [CLAUDE.md](./CLAUDE.md) is the deep-dive companion to this file: content pipeline, i18n internals, routing, and the traps behind each.

## Project Links

- [Documentation](https://documentation.banklessacademy.com/): Understand how you can integrate Bankless Academy to your website.

## Tech Stack

### Bootstrapped with

- [Next.js](https://nextjs.org/docs) (pages router)
- [Chakra UI v2](https://v2.chakra-ui.com/getting-started) (includes [@emotion/styled](https://emotion.sh/docs/styled), which works like [Styled Components](https://styled-components.com/docs/basics))
- [wagmi](https://wagmi.sh/)
- [reown](https://docs.reown.com/appkit/overview)
- [viem](https://viem.sh)

### Configured with

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks

## Local Development

```bash
yarn install
yarn dev
```

Type errors do not fail the build (`typescript.ignoreBuildErrors: true`), so run `yarn type-check` yourself before opening a PR.

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

### Human Passport

We save the encrypted account username associated with each Passport stamp to detect Sybils. Human Passport provides 35M+ verifiable credentials and helps protect against bots and bad actors.

### Hotjar

Heatmap recording via [hotjar.com](https://hotjar.com)
This helps us understand how a user interacts with the product in order to improve the user experience.

## Content

**This repository is the source of truth for lesson content.** Lessons were historically authored in Notion and imported; that flow is retired. The Notion import scripts are kept for reference only and refuse to run without an explicit opt-in.

### Editing a lesson

1. Edit `translation/lesson/en/<slug>.md` — frontmatter, slides as `#` sections, quizzes as `- [ ]` options with the correct one marked `- [x]`, per-option feedback as `> ℹ️` blockquotes. Lesson metadata that isn't prose (badges, quest binding, duration, per-slide types, `languages[]`) lives in `src/constants/lesson-meta.json`.
2. `yarn build-content` — regenerates `src/constants/lessons.json` + `lessons.ts`. Commit sources and generated files together.
3. `yarn validate-content && yarn test-content` — both also run inside `yarn build`, so a deploy fails on invalid content or stale artifacts.

Two rules that are easy to break and expensive to fix, because user progress lives in the visitor's own browser (`localStorage`):

- **Never move the correct answer to a different option position** — saved answers are option *numbers*.
- **Don't add, remove or reorder slides** — a resume position is a slide *index*, and quiz ids are positional.

The full editing rules (length limits, glossary/backtick rules, writing for translatability) are in [CLAUDE.md](./CLAUDE.md).

### Glossary

`translation/keywords/en/keywords.json` is hand-edited and canonical. Every backticked `term` in a lesson must resolve to an entry there — `validate-content.js` fails the build otherwise.

### Translations

Every published lesson ships in 28 languages. Translations are generated (never hand-edited per language on a whim) against `translation/style/<lang>.md` and verified structurally — same section count, same quiz options, `[x]` in the same position:

```bash
yarn translate-content --lang fr --slug bitcoin-basics
yarn translate-content --lang fr --all
```

Needs `ANTHROPIC_API_KEY` in `.env`. See [docs/translation-pipeline.md](./docs/translation-pipeline.md) for the full walkthrough.

Traditional Chinese (`zh-tw`) is **derived** from `zh` by `node convert-zh-tw.js` — never hand-edit it; fix `zh` (or the converter's override table) and re-run.

## How to get started for devs

1. Get familiar with the project by reading the [README](./README.md)
2. Check [open issues](https://github.com/bankless-academy/bankless-academy/issues) and assign yourself
3. Create and submit a PR
4. Assign [@didierkrux](https://github.com/didierkrux) as reviewers
