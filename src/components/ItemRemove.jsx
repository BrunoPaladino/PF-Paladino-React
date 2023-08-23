import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Button } from '@chakra-ui/react'

const ItemRemove = ({id}) => {

    const {cart, setCart} = useContext(CartContext)


    const removeFromCart =()=>{
        setCart ( (cart) =>{
            const updatedCart = [...cart];
            const cartUbication = updatedCart.findIndex ((selection) => selection.id === id);//findIndex devuelve la posicion del producto en el array
            updatedCart.splice(cartUbication,1);    //splice elimina elementos del array, le doy la ubicacion y la cantidad de elementos
                                                    //a eliminar desde esa posicion (numero 1 en este caso)
            return updatedCart;
        })
    }


    return (
        <div>
            <Button variant='solid' colorScheme='orange' onClick = {removeFromCart}>
                Remove from the Cart
            </Button>
        </div>
    )
}

export default ItemRemove