import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export const Config = {
  title: "Grassroots Future",
  footer:
    "Grassroots Future is a charitable institution under section 88 of the Inland Revenue Ordinance with No. 91/17131",
  alt: {
    logoName: "Grassroots Future logo",
  },
  contentful: {
    options: {
      renderNode: {
        [BLOCKS.OL_LIST]: (node, children) => (
          <ul className="py-2 pl-4 list-disc">{children}</ul>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
          <ul className="py-2 pl-4 list-disc">{children}</ul>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
          <li className="md:pl-4">{children}</li>
        ),
        [BLOCKS.HEADING_3]: (node, children) => {
          return <h3 className="font-bold">{children}</h3>
        },
        [BLOCKS.PARAGRAPH]: (_, children) => <p className="py-2">{children}</p>,
        [BLOCKS.HR]: (_, children) => (
          <div className="py-2">
            <hr />
            {children}
          </div>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { fields } = node?.data?.target
          return (
            <img
              src={`${fields.file.url}`}
              height={`${fields.file.details.image.height}`}
              width={`${fields.file.details.image.width}`}
              alt={`${fields.description}`}
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
  },
}
