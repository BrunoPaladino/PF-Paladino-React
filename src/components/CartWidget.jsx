import React from 'react'
import { Image, Box, Flex} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import cartIcon from '../assets/cartIcon.png'

const CartWidget = () => {

const {cart, totalAmountOfProducts} = useContext(CartContext)       //toma el array carrito y la cantidad de productos en el array


    return (                    //retorna el icono del carrito y lo tomo desde el componente NavBar
        <div id='cart'>
                <Flex>
                <Box boxSize='20px' >
                    <Image src= {cartIcon} alt='Cart Icon' width='50px' height='50px'/>
                </Box>
                <p id='cartQuantity'> {totalAmountOfProducts} </p>
                </Flex>
        </div>
    )
}

export default CartWidget