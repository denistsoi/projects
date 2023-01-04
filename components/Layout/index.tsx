import { Footer } from "@components/Footer"
import { Header } from "@components/Header"

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
