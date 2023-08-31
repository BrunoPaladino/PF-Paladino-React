import React from 'react'
import { Card,CardBody, Stack, Heading, ButtonGroup, CardFooter, Divider} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, description, price, category}) => {
    return (
        <>
            <div className='allProductsContainer'>
                    <div className='itemContainer'>
                        <Card maxW='sm' flex='1'>
                            <CardBody>
                                <div className='itemImageContainer'>    {/* tomo la prop de ItemList y armo las cards para cada producto, Item es un componente de presentacion */}
                                    <img src={`${image}`} />
                                </div>
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'> {name} </Heading>
                                    <p className='priceText'>
                                        US$ {price}
                                    </p>
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