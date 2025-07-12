import { Client } from '@notionhq/client';

const DATABASE_ID = '6942ec4e30ce4c0082092818624cf392';

export interface MediaEntry {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  url: string;
}

function getProp(props: any, key: string) {
  return props[key]?.type === 'title' ? props[key].title[0]?.plain_text :
         props[key]?.type === 'rich_text' ? props[key].rich_text[0]?.plain_text :
         props[key]?.type === 'url' ? props[key].url :
         props[key]?.type === 'number' ? props[key].number :
         '';
}

export async function fetchMediaEntries(): Promise<MediaEntry[]> {
  // Check if NOTION_TOKEN is available
  if (!process.env.NOTION_TOKEN) {
    console.warn('NOTION_TOKEN not found, returning empty media entries');
    return [];
  }

  try {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
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

    const mediaEntries: MediaEntry[] = results
      .map(page => {
        const props = page.properties;
        return {
          id: page.id,
          title: getProp(props, 'Title') || 'Untitled',
          description: getProp(props, 'Description') || '',
          image: getProp(props, 'open-graph-image') || '',
          year: getProp(props, 'Year') || new Date().getFullYear(),
          url: getProp(props, 'url') || '',
        };
      })
      .filter(entry => entry.url) // Only include entries with URLs
      .sort((a, b) => b.year - a.year); // Sort by year descending

    return mediaEntries;
  } catch (error) {
    console.error('Failed to fetch media entries from Notion:', error);
    return [];
  }
} 