# generate all translation files via command line

# common
i18next \"$(grep -l "useTranslation()" -R src/* | tr '\n', ' ' | sed 's/.$//; s/$/ src\/constants\/animations.ts/' | sed 's/ /" "/g')\" -o translation/website/en/common.json

# homepage
i18next src/pages/index.tsx -o translation/website/en/homepage.json

# quests
i18next src/components/Quest/*.tsx -o translation/website/en/quests.json
