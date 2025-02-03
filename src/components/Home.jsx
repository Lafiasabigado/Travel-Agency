import React from 'react'
import About from './About'
import Header from './Header'
import Tour  from './Tour'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'
import Blog from './Blog'
import Partner from './Partner'

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
      <Blog />
      <Partner />
    </div>
  </div>
  )
}

export default Home
