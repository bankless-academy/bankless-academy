/* eslint-disable no-console */
/* eslint-disable no-useless-escape */

// utils.js

const axios = require('axios');
const fs = require('fs');
const fsPromises = require('fs').promises;
const crc32 = require('js-crc').crc32;
const { Client } = require("@notionhq/client")
const { NotionToMarkdown } = require("notion-to-md")
const cheerio = require('cheerio')

const {
  LESSON_SPLITTER,
} = require('./config.js')

/**
 * Slugify a string
 * @param {string} text - Text to slugify
 * @returns {string} - Slugified text
 */
const slugify = (text) => text.toLowerCase()
  .replace('á', 'a')
  .replace(/<[^>]*>?/gm, '') // remove tags
  .replace(/[^a-z0-9\. -]/g, '') // remove invalid chars
  .replace(/\s+/g, '-') // collapse whitespace and replace by -
  .replace(/-+/g, '-');

/**
 * Download an image and save it locally
 * @param {string} url - Image URL
 * @param {string} imagePath - Local path to save the image
 */
const downloadImage = async (url, imagePath) => {
  try {
    const response = await axios({
      url,
      responseType: 'stream',
    });
    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading image: ${error}`);
    throw error;
  }
};

/**
 * Get image path and download if not exists
 * @param {string} imageLink - Image URL
 * @param {string} slug - Slug for the lesson
 * @param {string} imageName - Name for the image
 * @returns {string} - Local image path
 */
const getImagePath = async (imageLink, slug, imageName) => {
  const [fileName] = imageLink.split('?');
  const fileExtension = (fileName.match(/\.(png|svg|jpg|jpeg|webp|webm|mp4|gif)/))?.[1].replace('jpeg', 'jpg') || 'png';
  const hash = crc32(fileName);
  const imageDir = `/images/${slug}`;
  const localImageDir = `public${imageDir}`;
  await fsPromises.mkdir(localImageDir, { recursive: true });
  const imagePath = `${imageDir}/${slugify(imageName)}-${hash}.${fileExtension}`;
  const localImagePath = `public${imagePath}`;
  try {
    await fsPromises.access(localImagePath);
  } catch (error) {
    await downloadImage(imageLink, localImagePath);
    console.log('Downloading image: ', localImagePath);
  }
  return imagePath;
};

/**
 * Extract keywords from a content string
 * @param {string} content - Content to extract keywords from
 * @returns {Array} - Array of unique keywords
 */
const extractKeywords = (content) => {
  const regex = /`([^`]+)`/g;
  const keywords = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    keywords.push(match[1]);
  }
  return [...new Set(keywords)];
};

/**
 * Write data to a file
 * @param {string} filePath - Path to the file
 * @param {Object|string} data - Data to write
 */
const writeFile = async (filePath, data) => {
  const dataToWrite = filePath?.endsWith('.json') ? JSON.stringify(data, null, 2) : data;
  try {
    await fsPromises.writeFile(filePath, dataToWrite, 'utf8');
  } catch (error) {
    console.error(`Error writing file: ${error}`);
    throw error;
  }
};

const importTranslations = async (lesson, TRANSLATION_LANGUAGE) => {
  if (!TRANSLATION_LANGUAGE) return
  for (const language of lesson.languages) {
    if (language === TRANSLATION_LANGUAGE || TRANSLATION_LANGUAGE === 'all') {
      console.log('import translation:', language)
      try {
        const random = Math.floor(Math.random() * 100000)
        const crowdinFile = `https://raw.githubusercontent.com/bankless-academy/bankless-academy/l10n_main/translation/lesson/${language}/${lesson.slug}.md?${random}`
        // console.log(crowdinFile)
        const crowdin = await axios.get(crowdinFile)
        // console.log(crowdin)
        if (crowdin.status === 200) {
          // const newTranslation = crowdin.data.replace(/LAST UPDATED\: (.*?)\n/, `LAST_UPDATED\n`)
          const newTranslation = crowdin.data
            // fix Crowdin bug
            .replace(`***

#`, `---

#`)
          const [, title, description] = crowdin.data.match(/---\nTITLE:\s(.*?)\nDESCRIPTION:\s(.*?)\n/)
          // console.log('title', title)
          // console.log('description', description)
          const lessonInfoPath = `translation/website/${language}/lesson.json`
          const lessonInfo = fs.existsSync(lessonInfoPath) ? await fsPromises.readFile(lessonInfoPath, 'utf8') : '{}';
          const translationInfo = {}
          translationInfo[lesson.name] = title
          translationInfo[lesson.description] = description
          // console.log('translationInfo', translationInfo)
          const jsonLessonInfo = { ...JSON.parse(lessonInfo), ...translationInfo }
          // console.log('jsonLessonInfo', jsonLessonInfo)
          await writeFile(lessonInfoPath, jsonLessonInfo)
          // console.log(newTranslation)
          const lessonPath = `translation/lesson/${language}/${lesson.slug}.md`
          const existingTranslation = fs.existsSync(lessonPath) ? await fsPromises.readFile(lessonPath, 'utf8') : ''
          // console.log(existingTranslation)
          // check if translation has been modified
          if (newTranslation.trim() !== existingTranslation.trim()) {
            console.log('- new translation available')
            await writeFile(lessonPath, newTranslation)
          } else {
            console.log('- same same')
          }
        }
      } catch (error) {

        console.log(`- ${language} not available yet`)
      }
    }
  }
}

// const PROTOCOL_VERSION = "0.01"
// LAST UPDATED: ${new Date().toLocaleDateString('en-GB')}
// PROTOCOL VERSION: ${PROTOCOL_VERSION}

const mdHeader = (lesson, format) => `---
TITLE: ${lesson.name}
DESCRIPTION: ${lesson.description}
LANGUAGE: English
WRITERS: ${lesson.lessonWriters || ''}
TRANSLATORS: X
LINK: https://app.banklessacademy.com/lessons/${lesson.slug}
FORMAT: ${format}
---

\`\`\`
__________________________________________________________________________________________________________________________________________________________

$$$$$$$\\                      $$\\       $$\\                                      $$$$$$\\                           $$\\                                   
$$  __$$\\                     $$ |      $$ |                                    $$  __$$\\                          $$ |                                  
$$ |  $$ | $$$$$$\\  $$$$$$$\\  $$ |  $$\\ $$ | $$$$$$\\   $$$$$$$\\  $$$$$$$\\       $$ /  $$ | $$$$$$$\\ $$$$$$\\   $$$$$$$ | $$$$$$\\  $$$$$$\\$$$$\\  $$\\   $$\\ 
$$$$$$$\\ | \\____$$\\ $$  __$$\\ $$ | $$  |$$ |$$  __$$\\ $$  _____|$$  _____|      $$$$$$$$ |$$  _____|\\____$$\\ $$  __$$ |$$  __$$\\ $$  _$$  _$$\\ $$ |  $$ |
$$  __$$\\  $$$$$$$ |$$ |  $$ |$$$$$$  / $$ |$$$$$$$$ |\\$$$$$$\\  \\$$$$$$\\        $$  __$$ |$$ /      $$$$$$$ |$$ /  $$ |$$$$$$$$ |$$ / $$ / $$ |$$ |  $$ |
$$ |  $$ |$$  __$$ |$$ |  $$ |$$  _$$<  $$ |$$   ____| \\____$$\\  \\____$$\\       $$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$   ____|$$ | $$ | $$ |$$ |  $$ |
$$$$$$$  |\\$$$$$$$ |$$ |  $$ |$$ | \\$$\\ $$ |\\$$$$$$$\\ $$$$$$$  |$$$$$$$  |      $$ |  $$ |\\$$$$$$$\\\\$$$$$$$ |\\$$$$$$$ |\\$$$$$$$\\ $$ | $$ | $$ |\\$$$$$$$ |
\\_______/  \\_______|\\__|  \\__|\\__|  \\__|\\__| \\_______|\\_______/ \\_______/       \\__|  \\__| \\_______|\\_______| \\_______| \\_______|\\__| \\__| \\__| \\____$$ |
                                                                                                                                               $$\\   $$ |
PORTABLE LESSON DATADISK COLLECTION                                                                                                            \\$$$$$$  |
                                                                                                                                                \\______/
__________________________________________________________________________________________________________________________________________________________
${LESSON_SPLITTER}
`

const placeholder = async (lesson, size, image_name) => {
  const placeholder_link = `https://placehold.co/${size}/4b4665/FFFFFF/png?text=${lesson.name.replaceAll(' ', '+')}`
  return await getImagePath(placeholder_link, lesson.slug, image_name)
}

const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

// types of blocs to ignore
// BlockType https://github.com/souvikinator/notion-to-md/blob/master/src/types/index.ts
const blockTypesToIgnore = [
  // "image",
  "video",
  "file",
  "pdf",
  "table",
  "bookmark",
  // "embed",
  "equation",
  // "divider",
  // "toggle",
  // "to_do",
  "synced_block",
  "column_list",
  "column",
  "link_preview",
  // "link_to_page",
  // "paragraph",
  // "heading_1",
  // "heading_2",
  "heading_3",
  // "bulleted_list_item",
  // "numbered_list_item",
  // "quote",
  "template",
  "child_page",
  "child_database",
  "code",
  "callout",
  "breadcrumb",
  "table_of_contents",
  "audio",
  "unsupported"
]
for (const blockType of blockTypesToIgnore) {
  n2m.setCustomTransformer(blockType, async () => {
    return ""
  })
}

n2m.setCustomTransformer("image", async (b) => {
  // console.log(b)
  return `![](https://www.notion.so/image/${encodeURIComponent(b?.image?.file?.url?.split('?')[0].replace('https://s3.', 'https://s3-'))}?table=block&id=${b?.id})`
})

async function getBuildIdFromDomain(domain) {
  try {
    // Ensure the domain starts with http:// or https://
    const url = domain.startsWith('http') ? domain : `https://${domain}`;

    // Fetch the HTML content
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const html = await response.text();

    // Parse the HTML with cheerio
    const $ = cheerio.load(html);

    // Find the __NEXT_DATA__ script tag
    const nextDataScript = $('#__NEXT_DATA__').html();
    if (!nextDataScript) {
      throw new Error('No __NEXT_DATA__ script tag found');
    }

    // Parse the JSON content inside the script tag
    const nextData = JSON.parse(nextDataScript);

    // Extract the buildId
    const buildId = nextData.buildId;
    if (!buildId) {
      throw new Error('No buildId found in __NEXT_DATA__');
    }

    return buildId;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

module.exports = {
  slugify,
  downloadImage,
  getImagePath,
  extractKeywords,
  writeFile,
  importTranslations,
  LESSON_SPLITTER,
  mdHeader,
  placeholder,
  n2m,
  getBuildIdFromDomain,
};
