import React from 'react'
import { BrowserRouter as Router , Routes, Route , Link  } from 'react-router-dom'
import  Header from './components/Header'
import  About from './components/About'
import  Home from './components/Home'
import Tour from './components/Tour'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <Link to='/'></Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/header' element={<Header />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/tour' element={<Tour />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App