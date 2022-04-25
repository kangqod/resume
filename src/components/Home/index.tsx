import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Certificate from './Certificate'
import { HomeContainer, Divider } from './styled'

function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Certificate />
      </HomeContainer>
      <Footer />
    </>
  )
}

export default Home
