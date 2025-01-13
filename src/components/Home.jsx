import React from 'react'
import About from './About'
import Header from './Header'
import Tour  from './Tour'

const Home = () => {
  return (
  <div className=''>
    <Header></Header>
    <div>
      <About></About>
      <Tour></Tour>
    </div>
  </div>
  )
}

export default Home
