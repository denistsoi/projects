import Head from "next/head"

import Splash from "components/splash"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Splash />
    </div>
  )
}
