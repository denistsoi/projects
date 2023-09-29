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
  const recordMap = await notion.getPage('62040807f1af4f808d18c51a0f6efa23')
  
  const logos = Config.media.logos
  

  return {
    props: {
      recordMap,
      logos
    }
  }
}