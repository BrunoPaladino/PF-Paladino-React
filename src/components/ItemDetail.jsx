import React from 'react'

const ItemDetail = ( {products} ) => {
    const {id} = useParams();


    const filteredProducts = products.filter ((product) => product.id === id)


    return (
        <div>ItemDetail</div>
    )
}

export default ItemDetail