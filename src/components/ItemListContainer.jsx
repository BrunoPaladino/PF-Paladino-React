import React from 'react'
import { Card,CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, CardFooter, Divider} from '@chakra-ui/react'
import RedragonHeadset from '../assets/RedragonHeadset.jfif'
import LogitechHeadset from '../assets/LogitechHeadset.jfif'
import HyperXHeadset from  '../assets/HyperXHeadset.jfif'
import PrimusHeadset from '../assets/PrimusHeadset.jpg'
import LogitechMouse from '../assets/LogitechMouse.jfif'
import RedragonMouse from '../assets/RedragonMouse.jpg'
import RedragonKeyboardKumara from '../assets/RedragonKeyboardKumara.png'
import RedragonKeyboardDeimos from '../assets/RedragonKeyboardDeimos.png'
import LogitechKeyboard from '../assets/LogitechKeyboardPop.jfif'
import HyperXKeyboard from '../assets/HyperXKeyboard.jpg'


const ItemListContainer = () => {

const products = [
        {id: 1, name:"Redragon Headset Zeus", image: <img src={RedragonHeadset} alt="Zeus Headset" width='300px' height='300px' borderRadius='lg'/>, description : "Description 1", price: 10, stock: 10, category: "Headset" },
        {id: 2, name:"Logitech Headset", image: <img src={LogitechHeadset} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 2", price: 10, stock: 10, category: "Headset" },
        {id: 3, name:"HyperX Headset", image: <img src={HyperXHeadset} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 3", price: 10, stock: 10, category: "Headset" },
        {id: 4, name:"Primus Headset", image: <img src={PrimusHeadset} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 4", price: 10, stock: 10, category: "Headset" },
        {id: 5, name:"Logitech Mouse G203", image: <img src={LogitechMouse} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 5", price: 10, stock: 10, category: "Mouse" },
        {id: 6, name:"Redragon M711 Cobra", image: <img src={RedragonMouse} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 6", price: 10, stock: 10, category: "Mouse" },
        {id: 7, name:"Redragon Kumara Keyboard", image: <img src={RedragonKeyboardKumara} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 7", price: 10, stock: 10, category: "Keyboard" },
        {id: 8, name:"Redragon Deimos Keyboard", image: <img src={RedragonKeyboardDeimos} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 8", price: 10, stock: 10, category: "Keyboard" },
        {id: 9, name:"Logitech Pop Keys", image: <img src={LogitechKeyboard} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 9", price: 10, stock: 10, category: "Keyboard" },
        {id: 10, name:"HyperX Alloy Aqua", image: <img src={HyperXKeyboard} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 10", price: 10, stock: 10, category: "Keyboard" },
    ]
    
    return (
        <>
            {products.map( (product) => {
                return (
                    <div className='itemContainer'>
                        <Card maxW='sm'>
                            <CardBody>
                                <p>
                                    {product.image}
                                </p>
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'> {product.name} </Heading>
                                <Text>
                                    {product.description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {product.price}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'> Buy now </Button>
                                    <Button variant='ghost' colorScheme='blue'> Add to cart </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </div>
                )
            })
            }
        </>
    )
}

export default ItemListContainer