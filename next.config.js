/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
  },
  images: {
    domains: [
      'hivelife.com',
      'cdn.i-scmp.com',
      'podcast.rthk.hk',
      'refugeeweek.org.uk',
      'cdn.tatlerasia.com',
      'sassyhongkong.com',
      'hongkongfp.com',
      'thehoneycombers.com',
    ],
  },
}

module.exports = nextConfig 