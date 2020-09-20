import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import "./layout.css"

function Layout({ children }: { children: React.ReactNode }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />

        <main className="flex-1 flex-wrap">{children}</main>
      </div>

      <Footer
        copyrightText="Grassroots © 2020. All rights reserved."
        madeByText="Made with ❤️ by Denis Tsoi"
      />
    </>
  )
}

export default Layout
