import Head from "next/head"

import { Config } from "config"

export const MetaHead = () => {
  return (
    <Head>
      <title>{Config.title}</title>
      <meta name="title" content={Config.title}></meta>
      <meta name="description" content={Config.description}></meta>
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com/css2?family=Nunito&amp;family=Roboto+Slab&amp;display=swap"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://grassrootsfuture.org/" />
      <meta property="og:title" content={Config.title} />
      <meta property="og:description" content={Config.description} />
      <meta
        property="og:image"
        content="https://grassrootsfuture.org/hero/demonstration.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://grassrootsfuture.org/" />
      <meta property="twitter:title" content="Grassroots Future" />
      <meta
        property="twitter:description"
        content="Grassroots Future is a registered charity in Hong Kong which came out of a desire to help refugee-led initiatives and grassroots organizations working with refugees build capacity."
      />
      <meta
        property="twitter:image"
        content="https://grassrootsfuture.org/hero/demonstration.webp"
      />
    </Head>
  )
}
