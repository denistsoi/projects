import Link from "next/link"
import Image from "next/legacy/image";
import { Config } from "config"

interface HeaderLink {
  href: string
  text: string
}

export const Header = () => (
  <header className="bg-emerald">
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-6 mx-auto">
      
      <Link href="/" >
        <Image
          src="/logo-dark.png"
          layout="fixed"
          height={45}
          width={158}
          loading="eager"
          priority
          alt={Config.alt.logoName}
          className="cursor-pointer"
        />
      </Link>

      <div className="flex items-between gap-4">
        {Config?.links?.map((link: HeaderLink, index: Number) => {
          return (
            <Link href={link?.href ?? "#"} key={`menu-link-${index}`}>
              <span className="text-gray-50 cursor-pointer hover:underline underline-offset-4">
                {link.text}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  </header>
)
