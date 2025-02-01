import React from 'react'
import About from './About'
import Header from './Header'
import Tour  from './Tour'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'
import Blog from './Blog'

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
    </div>
  </div>
  )
}

export default Home
