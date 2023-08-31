/* eslint-disable no-console */
const axios = require('axios')
const fs = require('fs')

async function main() {
  const languages = [
    'fr',
    'de',
    'es',
    'cn',
    'jp'
  ]
  const nameSpaces = [
    'common',
    'homepage',
    'quests'
  ]
  for (const language of languages) {
    for (const nameSpace of nameSpaces) {
      try {
        console.log(`${language}/${nameSpace}`)
        const jsonPath = `src/translation/${language}/${nameSpace}.json`
        const github = `https://raw.githubusercontent.com/bankless-academy/bankless-academy/l10n_main/${jsonPath}`
        const crowdin = await axios.get(github, { responseType: 'text' })
        if (crowdin.status === 200) {
          const newTranslation = JSON.stringify(crowdin.data, null, 2)
          // console.log('newTranslation', newTranslation)
          const existingTranslation = await fs.promises.readFile(jsonPath, 'utf8')
          // console.log('existingTranslation', existingTranslation)
          if (newTranslation.trim() !== existingTranslation.trim()) {
            console.log('- new translation available')
            fs.writeFile(jsonPath, `${newTranslation}\n`, (error) => {
              if (error) throw error
            })
          } else {
            console.log('- same same')
          }
        } else console.log(`- ${language}/${nameSpace}.json error ${crowdin.status}`)
      } catch (error) {
        // console.log(error)
        console.log(`- ${language}/${nameSpace}.json not available yet`)
      }
    }
  }
}

main()
