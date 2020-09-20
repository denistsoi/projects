import React from "react"

interface FooterProps {
  copyrightText: string
  madeByText: string
}

const Footer: React.FC<FooterProps> = ({ copyrightText, madeByText }) => {
  return (
    <footer className="flex flex-wrap items-center justify-between bg-green-900">
      <div className="flex flex-col flex-1 pt-4 pb-8 px-4 lg:px-8 xl:m-auto max-w-4xl p-4 mx-auto md:p-8">
        <div className="text-white">
          {copyrightText} <br /> {madeByText}
        </div>
      </div>
    </footer>
  )
}

export default Footer
