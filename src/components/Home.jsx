import React from 'react'
import About from './About'
import Header from './Header'
import Tour  from './Tour'
import Services from './Services'
import Gallery from './Gallery'

const Home = () => {
  return (
  <div className=''>
    <Header />
    <div>
      <About />
      <Tour />
      <Services />
      <Gallery />
    </div>
  </div>
  )
}

export default Home
