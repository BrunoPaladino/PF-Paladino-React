import React from 'react'
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const ItemCount = ({product, id}) => {   //recibe como prop al producto, desde "ItemDetail"

/*     console.log(product);
    console.log(id); */

    const {cart, setCart} = useContext(CartContext);        //de esta forma traigo el array carrito

/*     console.log(cart); */

    const [quantity, amount] = useState(1);     
    //le doy valor inicial "1" a la variable quantity, no uso comillas ya que lo toma como string y al sumarle un producto coloca 11 y no 2

    const addProduct = () => {      //funcion boton para aumentar cantidad
        amount (quantity + 1);
    }

    const removeProduct = () => {       //funcion boton para reducir cantidad
        if(quantity > 1){
            amount(quantity - 1)
        } else {
            amount (1);
        }
    }

    const reset = () => {       //funcion reseteo de cantidad del producto
        amount (1);
    }


//FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
//con el spread operator (...), genero una copia de los elementos que forman al objeto "product" y le agrego la caracteristica quantityInCart
// y todo eso lo ingreso en el producto a ingresar al carrito
const onAdd = () => {
    setCart ( (cart) =>{
        const updatedCart = [...cart];
        const cartUbication = updatedCart.findIndex ((selection) => selection.id === id);//findIndex devuelve la posicion del producto en el array
        console.log(cartUbication);
        console.log(updatedCart);
        if (cartUbication != -1){                                                  //devuelve -1 si no encuentra la posicion (no esta el producto)                       
            updatedCart[cartUbication].quantityInCart = updatedCart[cartUbication].quantityInCart + quantity;
            updatedCart[cartUbication].totalPrice = updatedCart[cartUbication].quantityInCart * updatedCart[cartUbication].price;
            console.log(updatedCart);
            return updatedCart
        } else {                                             //si encuentra el producto, me trae la posicion y actualizo la cantidad en el carrito
            const totalPrice = quantity* product.price;
            const productSelected = {...product, quantityInCart: quantity, totalPrice};     
            updatedCart.push(productSelected);
            console.log(updatedCart);
            return updatedCart;    //uso los return para que se devuelva al hook "setCart" el nuevo carrito (updatedCart) y este tome el lugar
        }                         //del viejo cart. Esto es diferente a modificar el cart original directamente, porque puede tener problemas
    })                           //con los cambios de estado del hook
}


    return (
        <div>
        <div id='buttonContainerQuantity'>
            <Button variant='outline' colorScheme='orange' onClick = {removeProduct}> - </Button>
            <p>{quantity}</p>
            <Button variant='outline' colorScheme='orange' onClick = {addProduct}> + </Button>
        </div>

        <div id='buttonContainerAux'>
            <Button variant='ghost' colorScheme='orange' onClick = {reset}> Reset </Button>
            <Button variant='solid' colorScheme='orange' onClick = {onAdd}> Add to Cart </Button>
        </div>

        </div>
    )
}

export default ItemCount