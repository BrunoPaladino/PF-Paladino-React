import React from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'

const CartWidget = () => {
    return (
        <div id='cart'>
                <Flex>
                <Box boxSize='20px' borderRadius='full'>
                    <Image src='https://th.bing.com/th/id/R.ba524da71de599b03c827126d7d2d993?rik=oyDcxxDicQV%2bgA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_297653.png&ehk=vRpMzXBWFR0GHZ%2bbkugqIwBAikiqg%2fVnFRYjzjaBM8Q%3d&risl=&pid=ImgRaw&r=0' alt='Cart Icon' />
                </Box>
                <p id='cartQuantity'>0</p>
                </Flex>
        </div>
    )
}

export default CartWidget