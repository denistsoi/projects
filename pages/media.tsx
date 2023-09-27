import 'react-notion-x/src/styles.css'
import React from 'react'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

import { Layout } from "@components/Layout"
import { MetaHead } from "@components/MetaHead"

export default function Media({ recordMap }) {
  return (
    <>
      <MetaHead />
      <Layout>
        <div className="mt-4">
          <NotionRenderer recordMap={recordMap} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage('62040807f1af4f808d18c51a0f6efa23')
  
  return {
    props: {
      recordMap
    }
  }
}