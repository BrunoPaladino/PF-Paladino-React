import React from 'react'
import { Card,CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, CardFooter, Divider} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, description, price, category}) => {
    return (
        <>
            <div className='allProductsContainer'>
                    <div className='itemContainer'>
                        <Card maxW='sm'>
                            <CardBody>
                                <div className='itemImageContainer'>    {/* tomo la prop de ItemList y armo las cards para cada producto, Item es un componente de presentacion */}
                                    <img src={`${image}`} />
                                </div>
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'> {name} </Heading>
                                <Text>
                                    {description}
                                </Text>
                                <Text  color='green.600' fontSize='2xl'>
                                    <p className='priceText'>
                                        US$ {price}
                                    </p>
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Link to={`/item/${id}`}>
                                        <button className='generalButton'>
                                            <span> 
                                                View More
                                            </span>
                                        </button>
                                    </Link>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                </div>
            </div>
        </>
    )
}

export default Item