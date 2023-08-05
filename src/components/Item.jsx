import React from 'react'
import { Card,CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, CardFooter, Divider} from '@chakra-ui/react'

const Item = ({id, name, image, description, price}) => {


    return (
        <>
            <div key = {id}>
                    <div className='itemContainer'>
                        <Card maxW='sm'>
                            <CardBody>
                                <p>
                                    {image}
                                </p>
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'> {name} </Heading>
                                <Text>
                                    {description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {price}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'> See more </Button>
                                    <Button variant='ghost' colorScheme='blue'> Add to cart </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                </div>
            </div>
        </>
    )
}

export default Item