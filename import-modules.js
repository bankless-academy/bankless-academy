/* eslint-disable no-console */
require('dotenv').config()
const axios = require('axios')
const FileSystem = require('fs')
const crc32 = require('js-crc').crc32
const fs = require('fs')
const stringifyObject = require('stringify-object')

const PROJECT_DIR = process.env.PROJECT_DIR || ''
const IS_WHITELABEL = PROJECT_DIR !== ''
// TODO: update
const DEFAULT_NOTION_ID = '623e965e4f10456094d17aa94ec37105'
const POTION_API = 'https://potion.banklessacademy.com'
const MODULES_FILE = IS_WHITELABEL ? 'whitelabel_modules.ts' : 'modules.ts'

const args = process.argv
const NOTION_ID =
  args[2] && args[2].length === 32
    ? args[2]
    : process.env.DEFAULT_MODULE_DB_ID || DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

const KEY_MATCHING = {
  'Module name': 'name',
  'Module image': 'moduleImageLink',
  'Social image': 'socialImageLink',
  Description: 'description',
  // 'Parent Module': 'parentModule',
  // Submodules: 'subModules',
}

// TODO: move to lib file
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/<[^>]*>?/gm, '') // remove tags
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

const download_image = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(image_path))
  })

const get_img = (imageLink, slug, image_name) => {
  const [file_name] = imageLink.split('?')
  const file_extension = file_name
    .match(/\.(png|svg|jpg|jpeg|webp|mp4)/)[1]
    .replace('jpeg', 'jpg')
  // console.log(file_extension)
  // create "unique" hash based on Notion imageLink (different when re-uploaded)
  const hash = crc32(file_name)
  const image_dir = `/${PROJECT_DIR}module/${slug}`
  const image_path = `${image_dir}${slugify(
    image_name
  )}-${hash}.${file_extension}`
  // console.log('image_path', image_path)
  const local_image_path = `public${image_path}`
  if (!fs.existsSync(local_image_path)) {
    download_image(imageLink, local_image_path)
    console.log('downloading image: ', local_image_path)
  }
  return image_path
}

const modules = []

axios
  .get(`${POTION_API}/table?id=${NOTION_ID}`)
  .then((response) => {
    response.data.map((notion) => {
      // console.log(notion)
      const module = Object.keys(KEY_MATCHING).reduce(
        (obj, k) =>
          Object.assign(obj, {
            [KEY_MATCHING[k]]: notion.fields[k],
          }),
        {}
      )
      // console.log(notion.fields)
      module.slug = slugify(module.name)
      module.moduleId = notion.id.replace(/-/g, '')
      if (module.moduleImageLink) {
        module.moduleImageLink = get_img(
          module.moduleImageLink,
          module.slug,
          ''
        )
      }
      if (module.socialImageLink) {
        module.socialImageLink = get_img(
          module.socialImageLink,
          module.slug,
          '-social'
        )
      }
      module.parentModule = notion.fields['Parent module'][0] || null
      module.subModules = notion.fields['Submodules']
      // console.log(module)
      modules.push(module)
    })
    console.log(modules)
    const FILE_CONTENT = `import { ModuleType } from 'entities/module'

const MODULES: ModuleType[] = ${stringifyObject(modules, {
      indent: '  ',
      singleQuotes: true,
    })}

export default MODULES
`
    FileSystem.writeFile(
      `src/constants/${MODULES_FILE}`,
      FILE_CONTENT,
      (error) => {
        if (error) throw error
      }
    )
    console.log(`export done -> check src/constants/${MODULES_FILE}`)
  })
  .catch((error) => {
    console.log(error)
  })
