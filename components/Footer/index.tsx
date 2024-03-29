import { Config } from "config"

export const Footer = () => (
  <footer className="bg-emerald text-white">
    <div className="flex flex-wrap items-center justify-between max-w-4xl p-6 mx-auto">
      <p className="text-white flex items-center text-sm">{Config.footer}</p>
    </div>
  </footer>
)
