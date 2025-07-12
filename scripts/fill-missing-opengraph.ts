import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { Client } from '@notionhq/client';
import ogs from 'open-graph-scraper';
// @ts-ignore
import metascraper from 'metascraper';
// @ts-ignore
import metascraperTitle from 'metascraper-title';
// @ts-ignore
import metascraperDescription from 'metascraper-description';
// @ts-ignore
import metascraperImage from 'metascraper-image';
// @ts-ignore
import metascraperDate from 'metascraper-date';

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = '6942ec4e30ce4c0082092818624cf392';

if (!NOTION_TOKEN) {
  throw new Error('NOTION_TOKEN env variable is required');
}

const notion = new Client({ auth: NOTION_TOKEN });
const metascraperInstance = metascraper([
  metascraperTitle(),
  metascraperDescription(),
  metascraperImage(),
  metascraperDate(),
]);

async function scrapeUrl(url: string) {
  const ogResult = await ogs({ url });
  const ogData = ogResult.result;
  const res = await fetch(url);
  const html = await res.text();
  const metadata = await metascraperInstance({ html, url });
  const image = ogData.ogImage?.[0]?.url || metadata.image || null;
  const title = ogData.ogTitle || metadata.title || null;
  const description = ogData.ogDescription || metadata.description || null;
  let year = null;
  if (ogData.publishedTime) {
    year = new Date(ogData.publishedTime).getFullYear();
  } else if (ogData.ogDate) {
    year = new Date(ogData.ogDate).getFullYear();
  } else if (metadata.date) {
    year = new Date(metadata.date).getFullYear();
  }
  return { image, title, description, year };
}

async function getAllPages() {
  let results: any[] = [];
  let cursor = undefined;
  do {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      start_cursor: cursor,
      page_size: 100,
    });
    results = results.concat(response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);
  return results;
}

function getProp(props: any, key: string) {
  return props[key]?.type === 'title' ? props[key].title[0]?.plain_text :
         props[key]?.type === 'rich_text' ? props[key].rich_text[0]?.plain_text :
         props[key]?.type === 'url' ? props[key].url :
         props[key]?.type === 'number' ? props[key].number :
         '';
}

async function main() {
  const pages = await getAllPages();
  for (const page of pages) {
    const props = page.properties;
    const url = getProp(props, 'url');
    if (!url) continue;
    const missing = {
      title: !getProp(props, 'Title'),
      description: !getProp(props, 'Description'),
      image: !getProp(props, 'open-graph-image'),
      year: !getProp(props, 'Year'),
    };
    if (!missing.title && !missing.description && !missing.image && !missing.year) continue;
    console.log(`Scraping: ${url}`);
    try {
      const scraped = await scrapeUrl(url);
      const update: any = {};
      if (missing.title && scraped.title) update['Title'] = [{ type: 'text', text: { content: scraped.title } }];
      if (missing.description && scraped.description) update['Description'] = [{ type: 'text', text: { content: scraped.description } }];
      if (missing.image && scraped.image) update['open-graph-image'] = scraped.image;
      if (missing.year && scraped.year) update['Year'] = scraped.year;
      if (Object.keys(update).length > 0) {
        await notion.pages.update({
          page_id: page.id,
          properties: {
            ...(update['Title'] && { 'Title': { title: update['Title'] } }),
            ...(update['Description'] && { 'Description': { rich_text: update['Description'] } }),
            ...(update['open-graph-image'] && { 'open-graph-image': { url: update['open-graph-image'] } }),
            ...(update['Year'] && { 'Year': { number: update['Year'] } }),
          },
        });
        console.log(`Updated: ${url}`);
      }
    } catch (err: any) {
      console.error(`Failed to update ${url}:`, err.message);
    }
  }
}

main(); 