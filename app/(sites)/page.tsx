import React from 'react'
import { Footer, Header } from '../components/common'
import { CallToAction, Hero, LogoTicker,Testimonials ,GridCard} from '../components/landing-page'

const Home =() => {

  return (
    <main id='home'>
      <Header />
      <LogoTicker />
      <Hero />
      {/* <ProductShowCase /> */}
      {/* <Pricing /> */}
      <GridCard/>
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default Home