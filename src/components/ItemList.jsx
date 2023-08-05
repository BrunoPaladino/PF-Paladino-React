import React from 'react'
import Item from './Item'

const ItemList = ( {products} ) => {

    console.log(products)

    return (
        <>
            {products.map ( (product) => {
                return (
                    <Item
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
            }
        </>
    )
}

export default ItemList