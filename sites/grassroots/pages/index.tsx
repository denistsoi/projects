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
        <article className="px-6 lg:px-8 max-w-4xl items-center justify-center mx-auto">
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
  const res = await fetchEntry(process.env.HOME_PAGE)
  return {
    props: {
      page: res,
    },
  }
}
