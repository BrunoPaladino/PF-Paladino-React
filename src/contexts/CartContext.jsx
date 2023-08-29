import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {

    const[cart, setCart] = useState([]);    //declaro el array del carrito de compras

    const totalAmountOfProducts = cart.reduce((acumulator, product) => {        //total de productos en el carrito
        return acumulator + product.quantityInCart}, 0);

    const finalAmount = cart.reduce((acumulator, product) => {                  //total de la compra
        return acumulator + product.totalPrice}, 0);

    let cartEmpty;

    if(cart.length===0){
        cartEmpty=true;
    } else {
        cartEmpty=false;
    }

    return (
        <CartContext.Provider value={{cart, setCart, totalAmountOfProducts, finalAmount, cartEmpty}}>      {/* variables a pasar a los children */}
            {children}
        </CartContext.Provider> 
    )
}