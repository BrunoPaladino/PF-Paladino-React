import React from 'react'
import { useState } from 'react';

const QuantityButton = () => {

    const [quantity, amount] = useState('0');

    const addProduct = () => {
        amount (quantity + 1);
    }

    const removeProduct = () => {
        amount (quantity - 1);
    }

    const reset = () => {
        amount (0);
    }


    return (
        <div>
            <p>{quantity}</p>
            <button onClick = {addProduct}> Add </button>
            <button onClick = {reset}> Reset </button>
            <button onClick = {removeProduct}> Remove </button>
        </div>
    )
}

export default QuantityButton