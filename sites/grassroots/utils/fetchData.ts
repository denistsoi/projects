const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

interface SearchOptions {
  content_type?: string
}

export async function fetchEntries(options?: SearchOptions) {
  const content_type = options?.content_type || "pages"

  const entries = await client.getEntries({ content_type })
  if (entries.items) return entries.items
}

export async function fetchEntry(entryId) {
  return await client.getEntry(entryId)
}

export default { fetchEntries }