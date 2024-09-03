import React from 'react'
import Code from './code'
import Header from './header'
import Video from './video'
import WhyUs from './why'
import Reviews from './reviews'
import Limited from './limited'
import Products from './products'
import Banner from './banner'
import Travel from './travel'
import About from './aboutUs'
import Footer from './footer'

const Landing = () => {
  return (
   <>
   <Code />
   <Header />
   <Video />
   <WhyUs />
   <Reviews />
   <Limited />
   <Products />
   <Banner />
   <Travel />
   {/* <Gallery /> */}
   {/* <About /> */}
   <Footer />
   </>
  )
}

export default Landing