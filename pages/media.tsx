import 'react-notion-x/src/styles.css'
import React from 'react'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

import { Layout } from "@components/Layout"
import { MetaHead } from "@components/MetaHead"
import { ContentContainer } from '@components/ContentContainer'
import { MediaCard } from '@components/MediaCard'

import {Config} from 'config'
import { LogoRenderer } from '@components/LogoRenderer'
import { fetchMediaEntries, MediaEntry } from '../utils/fetchNotionDatabase'

interface MediaProps {
  recordMap: any;
  logos: any;
  mediaEntries: MediaEntry[];
}

export default function Media({ recordMap, logos, mediaEntries }: MediaProps) {
  return (
    <>
      <MetaHead />
      <Layout>
        <ContentContainer>
          <h1>Press kit</h1>
          <LogoRenderer logos={logos} />
        </ContentContainer>

        <ContentContainer>
          <h1>Media Coverage</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {mediaEntries.map((entry) => (
              <MediaCard key={entry.id} entry={entry} />
            ))}
          </div>
        </ContentContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage('155de4bad6914e01b8ce65e8801c9415')
  const logos = Config.media.logos
  const mediaEntries = await fetchMediaEntries()

  return {
    props: {
      recordMap,
      logos,
      mediaEntries
    }
  }
}