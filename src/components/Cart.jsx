import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Cart = () => {

    const {cart, id} = useContext(CartContext)

    console.log(cart);



    return (
        <div>
            <h1 className='welcome'>
                Cart
            </h1>
            {cart.map( (product) => {
                return (    
                    <div className='productInCart' key = {product.id} id='productDetail'>
                        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                            <div className='detailInCart'>
                            <p className='imageInCartContainer'>
                                {product.image}
                            </p>
                            <Stack>
                            <CardBody>
                                <Heading size='sm'>{product.name}</Heading>
                                <Text py='2'>
                                {product.description}
                                </Text>
                                <Text>
                                    Quantity: {product.quantityInCart}
                                </Text>
                                <Text>
                                    Total Price: {product.totalPrice}
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Button variant='solid' colorScheme='orange'>
                                    Remove from the cart
                                </Button>
                            </CardFooter>
                            </Stack>
                            </div>
                        </Card>
                    </div>
                )
            }
        )}
        </div>
)}


export default Cart