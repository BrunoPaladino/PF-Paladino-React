import React from 'react'
import { Card,CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, CardFooter, Divider} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, description, price, stock, category}) => {
    return (
        <>
            <div>
                    <div className='itemContainer'>
                        <Card maxW='sm'>
                            <CardBody>
                                <p>    {/* tomo la prop de ItemList y armo las cards para cada producto, Item es un componente de presentacion */}
                                    {image}
                                </p>
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'> {name} </Heading>
                                <Text>
                                    {description}
                                </Text>
                                <Text color='orange.600' fontSize='2xl'>
                                    US$ {price}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Link to={`/item/${id}`}>
                                    <Button variant='solid' colorScheme='orange'> See more </Button>
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