import React from 'react'
import { Footer, Header } from '../components/common'
import { CallToAction, Hero, LogoTicker, ProductShowCase,Testimonials ,GridCard} from '../components/landing-page'

const Home =() => {

  return (
    <main id='home'>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      {/* <Pricing /> */}
      <GridCard/>
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default Home