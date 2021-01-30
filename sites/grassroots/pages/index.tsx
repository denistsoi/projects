import Head from "next/head"
import Image from "next/image"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { fetchEntry } from "utils/fetchData"
import { Config } from "config"

export default function Home({ page }) {
  return (
    <div>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-900">
        <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
          <h1 className="text-white flex items-center">{Config.title}</h1>
        </div>
      </header>

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

      <article className="px-6 lg:px-8 max-w-2xl items-center justify-center xl:m-auto">
        <section className="py-4">
          {documentToReactComponents(
            page.fields.content,
            Config.contentful.options
          )}
        </section>
      </article>

      <footer className="p-4 bg-green-900 text-white">
        <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto">
          <p className="text-white flex items-center text-sm">
            {Config.footer}
          </p>
        </div>
      </footer>
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
