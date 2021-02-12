import Head from "next/head"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Layout } from "@components/Layout"

import { fetchEntry } from "utils/fetchData"
import { Config } from "config"

export default function Home({ page }) {
  return (
    <div>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <article className="px-6 lg:px-8 max-w-2xl items-center justify-center xl:m-auto">
          <section className="py-4">
            {documentToReactComponents(
              page.fields.content,
              Config.contentful.options
            )}
          </section>
        </article>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntry(process.env.ABOUT_PAGE)
  return {
    props: {
      page: res,
    },
  }
}
