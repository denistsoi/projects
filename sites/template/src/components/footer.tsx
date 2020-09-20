import React from "react"

interface FooterProps {
  copyrightText: string
  madeByText: string
  themeColor: string
}

const Footer: React.FC<FooterProps> = ({
  copyrightText,
  madeByText,
  themeColor = "bg-green-900",
}) => {
  return (
    <footer
      className={`flex flex-wrap items-center justify-between ${themeColor}`}
    >
      <div className="flex flex-col flex-1 pt-4 pb-8 px-4 lg:px-8 xl:m-auto max-w-4xl p-4 mx-auto md:p-8">
        <div className="text-white">
          {copyrightText} <br /> {madeByText}
        </div>
      </div>
    </footer>
  )
}

export default Footer
