import Image from "next/image"
import { Config } from "config"

export const Header = () => (
  <header className="bg-emerald">
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto">
      <Image
        src="/logo-dark.png"
        layout="fixed"
        height={45}
        width={158}
        loading="eager"
        priority
        alt={Config.alt.logoName}
      />
    </div>
  </header>
)
