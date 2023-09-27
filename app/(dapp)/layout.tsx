import { MainNav } from "@/components/main-nav"
import { mainConfig } from "@/config/site"

export default function DappLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <MainNav items={mainConfig.mainNav} />
      {children}
    </section>
  )
}
