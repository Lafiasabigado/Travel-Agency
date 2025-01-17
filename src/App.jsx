import React from 'react'
import { BrowserRouter as Router , Routes, Route , Link  } from 'react-router-dom'
import  Header from './components/Header'
import  About from './components/About'
import  Home from './components/Home'
import Tour from './components/Tour'

const App = () => {
  return (
    <Router>
      <Link to='/'></Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/header' element={<Header />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/tour' element={<Tour />}></Route>
      </Routes>
    </Router>
  )
}

export default App