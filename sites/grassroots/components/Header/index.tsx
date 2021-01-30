import { Config } from "config"

export const Header = () => (
  <header className="bg-green-900">
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
      <h1 className="text-white flex items-center">{Config.title}</h1>
    </div>
  </header>
)
