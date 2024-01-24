import 'react-notion-x/src/styles.css'
import React from 'react'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

import { Layout } from "@components/Layout"
import { MetaHead } from "@components/MetaHead"
import { ContentContainer } from '@components/ContentContainer'

import {Config} from 'config'
import { LogoRenderer } from '@components/LogoRenderer'

export default function Media({ recordMap, logos }) {
  return (
    <>
      <MetaHead />
      <Layout>

        <ContentContainer>
          <h1>Press kit</h1>
          <LogoRenderer logos={logos} />
        </ContentContainer>

        <ContentContainer>
          <h1>Interviews</h1>
          <NotionRenderer recordMap={recordMap} />
        </ContentContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage('155de4bad6914e01b8ce65e8801c9415')
  const logos = Config.media.logos

  return {
    props: {
      recordMap,
      logos
    }
  }
}