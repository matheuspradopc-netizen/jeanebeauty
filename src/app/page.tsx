import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Founder from '@/components/sections/Founder'
import Procedures from '@/components/sections/Procedures'
import TeamFlavia from '@/components/sections/TeamFlavia'
import TeamVanessa from '@/components/sections/TeamVanessa'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Founder />
        <TeamFlavia />
        <TeamVanessa />
        <Procedures />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
