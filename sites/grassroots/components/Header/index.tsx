import Link from "next/link"
import Image from "next/image"
import { Config } from "config"

export const Header = () => (
  <header className="bg-emerald">
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-6 mx-auto">
      <Image
        src="/logo-dark.png"
        layout="fixed"
        height={45}
        width={158}
        loading="eager"
        priority
        alt={Config.alt.logoName}
      />

      {/* <div>
        {Config?.links?.map((link) => {
          return (
            <Link href={link.href}>
              <span className="text-gray-50 cursor-pointer underline">
                {link.text}
              </span>
            </Link>
          )
        })}
      </div> */}
    </div>
  </header>
)
