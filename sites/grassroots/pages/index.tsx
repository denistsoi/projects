import Head from "next/head"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Layout } from "@components/Layout"
import { CustomRenderer } from "@components/CustomRenderer"

import { Config } from "config"
import { fetchEntry } from "utils/fetchData"

export default function Home({ page, featuredPartners }) {
  return (
    <div>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto+Slab&display=swap"
        />
      </Head>

      <Layout>
        <div style={{ maxHeight: "590px", overflow: "hidden" }}>
          <Image
            src="/demonstration.webp"
            layout="responsive"
            height={590}
            width={1024}
            loading="eager"
            priority
          />
        </div>
        <article>
          {documentToReactComponents(
            page.fields.content,
            CustomRenderer.options
          )}
        </article>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntry(Config.contentful.homePageId)

  return {
    props: {
      page: res,
    },
  }
}
