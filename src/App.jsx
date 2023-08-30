import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Cart from './components/Cart'
import ItemDetail from './components/ItemDetail'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailtContainer from './components/ItemDetailContainer'
import { CartContext, CartProvider } from './contexts/CartContext'
import ItemCount from './components/ItemCount'
import Form from './components/Form'
import Footer from './components/Footer'


const App = (product) => {

  return (
    <>
    <BrowserRouter>
      <CartProvider>        {/* uso CartProvider porque CartContext da error en la consola */}
        <NavBar />
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route exact path = "/about" element = {<About />} />
            <Route exact path = "/contact" element = {<Contact />} />
            <Route exact path = "/cart" element = {<Cart />} />
            <Route exact path = "/product/:id" element={<ItemDetail/>} />
            <Route exact path = "/category/:category" element={<ItemListContainer/>} />
            <Route exact path = "/item/:id" element={<ItemDetailtContainer/>} />
            <Route exact path = "/form" element={<Form />} />
          </Routes>
        <Footer />
      </CartProvider> 
    </BrowserRouter>
    </>
  )
}

export default App