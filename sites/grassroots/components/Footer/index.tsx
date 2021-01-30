import { Config } from "config"

export const Footer = () => (
  <footer className="p-4 bg-green-900 text-white">
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto">
      <p className="text-white flex items-center text-sm">{Config.footer}</p>
    </div>
  </footer>
)
