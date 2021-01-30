import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export const Config = {
  title: "Grassroots Future",
  footer:
    "Grassroots Future is a charitable institution under section 88 of the Inland Revenue Ordinance with No. 91/17131",
  contentful: {
    options: {
      renderNode: {
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
        [INLINES.HYPERLINK]: (node, children) => (
          <a className="underline text-blue-700" href={node.data.uri}>
            {children}
          </a>
        ),
      },
    },
  },
}
