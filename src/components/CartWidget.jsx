import React from 'react'
import { Image, Box, Flex} from '@chakra-ui/react'
import cartIcon from '../assets/cartIcon.png'

const CartWidget = () => {
    return (                    //retorna el icono del carrito y lo tomo desde el componente NavBar
        <div id='cart'>
                <Flex>
                <Box boxSize='20px' >
                    <Image src= {cartIcon} alt='Cart Icon' width='50px' height='50px'/>
                </Box>
                <p id='cartQuantity'> 0 </p>
                </Flex>
        </div>
    )
}

export default CartWidget