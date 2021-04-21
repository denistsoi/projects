import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

const OL = ({ children }) => <ol className="py-2 pl-4 list-disc">{children}</ol>
const UL = ({ children }) => <ul className="py-2 pl-4 list-disc">{children}</ul>
const LI = ({ children }) => <li className="md:pl-4">{children}</li>
const H1 = ({ children }) => <h1 className="font-bold text-xl">{children}</h1>
const H2 = ({ children }) => <h2 className="font-bold text-lg">{children}</h2>
const H3 = ({ children }) => <h3 className="font-bold">{children}</h3>
const P = ({ children }) => <p className="py-2">{children}</p>
const LINK = ({ node, children }) => (
  <a className="underline text-blue-700" href={node.data.uri}>
    {children}
  </a>
)
const SectionPadding = ({ children }) => (
  <div className="px-6 lg:px-8 max-w-4xl items-center justify-center mx-auto">
    {children}
  </div>
)

export const BaseRenderer = {
  options: {
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => <OL>{children}</OL>,
      [BLOCKS.UL_LIST]: (node, children) => <UL>{children}</UL>,
      [BLOCKS.LIST_ITEM]: (node, children) => <LI>{children}</LI>,
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.PARAGRAPH]: (_, children) => <P>{children}</P>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a className="underline text-blue-700" href={node.data.uri}>
          {children}
        </a>
      ),
    },
  },
}

export const InlineArticleRenderer = {
  options: {
    renderNode: {
      [BLOCKS.UL_LIST]: (_, children) => <UL>{children}</UL>,
      [BLOCKS.HEADING_1]: (_, children) => <H1>{children}</H1>,
      [BLOCKS.PARAGRAPH]: (_, children) => <P>{children}</P>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a className="underline text-blue-700" href={node.data.uri}>
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { fields } = node?.data?.target

        return (
          <img
            src={`${fields.file.url}`}
            height={`${fields.file.details.image.height}`}
            width={`${fields.file.details.image.width}`}
            alt={`${fields.title}`}
          />
        )
      },
    },
  },
}

const ImageRenderer = {
  options: {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const { type, asset } = node?.data?.target?.fields

        switch (type) {
          case "hero":
            return (
              <img
                src={`${asset.fields.file.url}`}
                height={`${asset.fields.file.details.image.height}`}
                width="100%"
                alt={`${asset.fields.title}`}
              />
            )
          case "highlight":
            return (
              <SectionPadding>
                <div className="flex justify-center">
                  <img
                    src={`${asset.fields.file.url}`}
                    height={`${asset.fields.file.details.image.height}`}
                    width={`${asset.fields.file.details.image.height}`}
                    alt={`${asset.fields.title}`}
                  />
                </div>
              </SectionPadding>
            )
          default:
            return (
              <SectionPadding>
                <div className="flex justify-center md:justify-end md:float-right rounded-full md:overflow-hidden md:w-60">
                  <img
                    src={`${asset.fields.file.url}`}
                    height={`${asset.fields.file.details.image.height}`}
                    width={`${asset.fields.file.details.image.height}`}
                    alt={`${asset.fields.title}`}
                  />
                </div>
              </SectionPadding>
            )
        }
      },
    },
  },
}

export const CustomRenderer = {
  options: {
    renderNode: {
      ...BaseRenderer.options.renderNode,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const innerContent = node?.data?.target?.fields?.content?.content

        return (
          <section className="pt-4">
            {innerContent.map((element, index) => {
              if (element.nodeType === "embedded-entry-block") {
                return (
                  <div className="py-4" key={index}>
                    {documentToReactComponents(element, ImageRenderer.options)}
                  </div>
                )
              }
              return (
                <div key={index}>
                  <SectionPadding>
                    {documentToReactComponents(
                      element,
                      InlineArticleRenderer.options
                    )}
                  </SectionPadding>
                </div>
              )
            })}
          </section>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { fields } = node?.data?.target

        return (
          <img
            src={`${fields.file.url}`}
            height={`${fields.file.details.image.height}`}
            width={`${fields.file.details.image.width}`}
            alt={`${fields.title}`}
          />
        )
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a className="underline text-blue-700" href={node.data.uri}>
          {children}
        </a>
      ),
    },
  },
}
