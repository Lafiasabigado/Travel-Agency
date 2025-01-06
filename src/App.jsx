import React from 'react'
import { BrowserRouter as Router , Routes, Route , Link  } from 'react-router-dom'
import  Header from './components/Header'
import  About from './components/About'
import  Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Link to='/'></Link>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </Router>
  )
}

export default App