import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import QuantityButton from './components/QuantityButton'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {

  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route exact path = '/about' element = {<About />} />
        <Route exact path = '/contact' element = {<Contact />} />
      </Routes>

<div className='itemListContainer'>
      <ItemListContainer/>
</div>

      <QuantityButton />

    </BrowserRouter>
    </>
  )
}

export default App