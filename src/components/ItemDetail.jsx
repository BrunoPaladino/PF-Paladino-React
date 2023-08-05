import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetail = ( {products} ) => {
    const {id} = useParams();


/*     const filteredProducts = products.filter ((product) => product.id === id) */


    return (
        <div>ItemDetail</div>
    )
}

export default ItemDetail