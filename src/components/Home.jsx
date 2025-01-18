import React from 'react'
import About from './About'
import Header from './Header'
import Tour  from './Tour'
import Services from './Services'

const Home = () => {
  return (
  <div className=''>
    <Header></Header>
    <div>
      <About></About>
      <Tour></Tour>
      <Services></Services>
    </div>
  </div>
  )
}

export default Home
