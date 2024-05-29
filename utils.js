/* eslint-disable no-console */
/* eslint-disable no-useless-escape */

// utils.js

const axios = require('axios');
const fs = require('fs').promises;
const crc32 = require('js-crc').crc32;

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
  await fs.mkdir(localImageDir, { recursive: true });
  const imagePath = `${imageDir}/${slugify(imageName)}-${hash}.${fileExtension}`;
  const localImagePath = `public${imagePath}`;
  try {
    await fs.access(localImagePath);
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
 * @param {string} filePath - Path to the JSON file
 * @param {string} data - Data to write
 */
const writeFile = async (filePath, data) => {
  const dataToWrite = filePath?.endsWith('.json') ? JSON.stringify(data, null, 2) : data
  try {
    await fs.writeFile(filePath, dataToWrite, 'utf8');
  } catch (error) {
    console.error(`Error writing file: ${error}`);
    throw error;
  }
};

module.exports = {
  slugify,
  downloadImage,
  getImagePath,
  extractKeywords,
  writeFile,
};
