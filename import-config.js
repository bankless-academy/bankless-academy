/* eslint-disable no-console */
require('dotenv').config()
const axios = require('axios')
const FileSystem = require('fs')
const crc32 = require('js-crc').crc32
const fs = require('fs')
const stringifyObject = require('stringify-object')

const PROJECT_DIR = process.env.PROJECT_DIR || ''
// TODO: update
const DEFAULT_NOTION_ID = '623e965e4f10456094d17aa94ec37105'
const POTION_API = 'https://potion.banklessacademy.com'
const CONFIG_FILE = 'whitelabel.ts'

const args = process.argv
const NOTION_ID =
  args[2] && args[2].length === 32
    ? args[2]
    : process.env.DEFAULT_CONFIG_DB_ID || DEFAULT_NOTION_ID
const UMAMI_ID = process.env.UMAMI_ID || '62d1cf48-425d-4658-9b86-3eea78ac9714'
console.log('NOTION_ID', NOTION_ID)

const KEY_MATCHING = {
  'Project name': 'project_name',
  Domain: 'domain_prod',
  'Default metadata description': 'default_metadata_description',
  'Default metadata image': 'default_metadata_image',
  Favicon: 'favicon',
  'Homepage logo': 'logo',
  // 'Homepage logo': 'logo_small',
  'Homepage background image': 'homepage_background',
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
  const image_dir = `/${PROJECT_DIR}${slug}`
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

let config = {}

axios
  .get(`${POTION_API}/table?id=${NOTION_ID}`)
  .then((response) => {
    response.data.map((notion) => {
      config = {}
      // console.log(notion)
      config = Object.keys(KEY_MATCHING).reduce(
        (obj, k) =>
          Object.assign(obj, {
            [KEY_MATCHING[k]]: notion.fields[k],
          }),
        {}
      )
      // console.log(notion.fields)
      if (config.default_metadata_image) {
        config.default_metadata_image = get_img(
          config.default_metadata_image,
          'image',
          ''
        )
      }
      if (config.favicon) {
        config.favicon = get_img(config.favicon, 'favicon', '')
      }
      if (config.logo) {
        config.logo = get_img(config.logo, 'logo', '')
        config.logo_small = config.logo
      }
      if (config.homepage_background) {
        config.homepage_background = get_img(
          config.homepage_background,
          'homepage_background',
          ''
        )
      }
      config.umami_prod = UMAMI_ID
    })
    console.log(config)
    const FILE_CONTENT = `import { WhitelabelType } from 'entities/whitelabel'

export const WHITELABEL: WhitelabelType = ${stringifyObject(config, {
      indent: '  ',
      singleQuotes: true,
    })}
`
    FileSystem.writeFile(
      `src/constants/${CONFIG_FILE}`,
      FILE_CONTENT,
      (error) => {
        if (error) throw error
      }
    )
    console.log(`export done -> check src/constants/${CONFIG_FILE}`)
  })
  .catch((error) => {
    console.log(error)
  })
