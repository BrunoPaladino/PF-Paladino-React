import React from 'react'
import Item from './Item'

const ItemList = ( {products} ) => {
    console.log("Received products:", products)
                    
//tomo la prop pasada por ItemListContainer y hago un map para cada producto, asi puedo desestructurarlo por cada propiedad y se lo paso a Item
    return (        
        <>          
            {products.map( (product) => {
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
            }
        </>
    )
}

export default ItemList