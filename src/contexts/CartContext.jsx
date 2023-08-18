import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {

    const[cart, setCart] = useState([]);    //declaro el array del carrito de compras

    return (
        <CartContext.Provider value={{cart, setCart}}>      {/* variables a pasar a los children */}
            {children}
        </CartContext.Provider> 
    )
}