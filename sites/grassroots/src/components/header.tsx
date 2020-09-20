import { Link } from "gatsby"
import React, { useState } from "react"

export const Header = ({ siteTitle }) => {
  const [isExpanded, toggleMenu] = useState(false)

  const Links = [
    {
      route: `/about`,
      title: `About`,
    },
    {
      route: `/contact`,
      title: `Contact`,
    },
  ]

  return (
    <header className="bg-green-900">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="title">{siteTitle}</span>
          </h1>
        </Link>

        <button
          className="flex items-center px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleMenu(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {Links.map(link => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
