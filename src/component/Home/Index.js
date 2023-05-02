import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sickportfolio from './Sickportfolio'
import Join from './Join'
import Investment from './Investment'
import Latestnews from './Latestnews'
import Faq from './Faq'
import Footer from './Footer'

export default function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sickportfolio />
      <Join />
      <Investment />
      <Latestnews />
      <Faq />
      <Footer />
    </div>
  )
}
