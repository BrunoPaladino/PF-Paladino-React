import React from 'react'
import { useParams } from 'react-router-dom';
import { Card,CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, CardFooter, Divider} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';

const ItemDetail = ( {products} ) => {
    const {id} = useParams();

    const filteredProducts = products.filter ((product) => product.id == id)

    return (
        <div id='productDetail'>
            {filteredProducts.map( (product) => {
                return (
                <div key = {product.id} id='productDetail'>
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
                                    <Text color='orange.600' fontSize='2xl'>
                                        US$ {product.price}
                                    </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <ItemCount product={filteredProducts} id={product.id} />        {/* contador de cantidad de productos a agregar al cart */}
                            </Card>
                        </div>
                    </div>
            )}
        )}
        </div >
    )
}

export default ItemDetail