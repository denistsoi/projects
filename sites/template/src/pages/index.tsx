import React from "react"

import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface IndexProps {
  data?: {
    file?: {
      childImageSharp?: {
        fluid: FluidObject
      }
    }
  }
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      {/* Summary */}
      <article className="px-6 lg:px-8 max-w-2xl items-center justify-center xl:m-auto">
        <section className="py-4">
          <div className="py-2">
            <p className="py-2">
              <strong>Gatsby Starter Template with Tailwindcss</strong>
            </p>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage
