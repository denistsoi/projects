import Head from "next/head"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Layout } from "@components/Layout"

import { fetchEntry } from "utils/fetchData"
import { Config } from "config"

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
        <article className="px-6 lg:px-8 max-w-4xl items-center justify-center mx-auto">
          <section className="pt-4">
            {documentToReactComponents(
              page.fields.content,
              Config.contentful.options
            )}
          </section>

          <section className="pt-4 pb-12">
            <h3 className="font-bold pb-4">{featuredPartners.name}</h3>

            <div className="flex w-full flex-wrap">
              {featuredPartners.partners?.map((partner, index) => {
                const { file, description, title } = partner.fields.logo.fields
                return (
                  <div
                    key={`partner-${index}`}
                    className="w-full md:flex sm:w-1/3 image-container"
                  >
                    <img alt={description} src={file.url} title={title} />
                  </div>
                )
              })}
            </div>
          </section>
        </article>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntry(process.env.HOME_PAGE)
  const featuredPartners = await fetchEntry(process.env.FEATURED_PARTNERS)

  return {
    props: {
      page: res,
      featuredPartners: {
        name: featuredPartners.fields.collectionName,
        partners: featuredPartners.fields.partners,
      },
    },
  }
}
