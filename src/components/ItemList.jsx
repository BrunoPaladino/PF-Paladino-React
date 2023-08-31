import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ( {products} ) => {
    console.log("Received products:", products)
                    
//tomo la prop pasada por ItemListContainer y hago un map para cada producto, asi puedo desestructurarlo por cada propiedad y se lo paso a Item
    return (        
        <>    
        <Flex flexWrap='wrap' justifyContent='space-evenly'>      {/* hago que lo que mapee, lo haga en un componente con display flex */}
            {products.map( (product) => {                               /* asi puedo acomodar los productos en cuadricula */
                return (
                    <Item
                        key = {product.id}
                        id = {product.id}
                        name = {product.name}
                        image = {product.image}
                        description = {product.description}
                        price = {product.price}
                        stock = {product.stock}
                        category = {product.category}
                    />
                )
            })
            }</Flex>
        </>
    )
}

export default ItemList