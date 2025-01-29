import React from 'react'
import About from './About'
import Header from './Header'
import Tour  from './Tour'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'

const Home = () => {
  return (
  <div className=''>
    <Header />
    <div>
      <About />
      <Tour />
      <Services />
      <Gallery />
      <Contact />
    </div>
  </div>
  )
}

export default Home
