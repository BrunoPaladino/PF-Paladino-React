import React from 'react'
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card,CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, CardFooter, Divider} from '@chakra-ui/react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetail = ( {products} ) => {
    
    const {id} = useParams();
    console.log (id)

    const [productRegister, setProduct] = useState([])      //creo el array vacio donde pondremos los productos de la base de datos
    console.log(productRegister)

    useEffect( () => {
        const dataBase = getFirestore()                 //traigo la base de datos de firestore

        const getProduct = doc(dataBase, "Productos", `${id}`);     //el segundo parametro (Productos) dice a que coleccion accedemos y el tercero
        getDoc(getProduct).then( (snapshot) => {                    //a que documento de dicha coleccion
            if( snapshot.exists() ) {           //si existe lo que traemos del getProduct, lo guardo en docs y este lo ingreso en el array
                const docs = snapshot.data()
                setProduct( docs )
            }
        })
    }, [])

    const filteredProducts = products.filter ((product) => product.id == id)

    return (
        <div>
            {filteredProducts.map( (product) => {
                return (
                <div key = {product.id} id='productDetail'>
                        <div className='itemContainer'>
                            <Card maxW='sm'>
                                <CardBody>
                                    <div className='itemImageContainer'>    {/* tomo la prop de ItemList y armo las cards para cada producto, Item es un componente de presentacion */}
                                    <img src={`${product.image}`} />
                                    </div>
                                    <Stack mt='6' spacing='3'>
                                    <Heading size='md'> {product.name} </Heading>
                                    <Text>
                                        <p id='productDescription'>
                                            {product.description}
                                        </p>
                                        
                                    </Text>
                                    <Text fontSize='2xl'>
                                        <p className='priceText'>
                                            US$ {product.price}
                                        </p>
                                    </Text>
                                    </Stack>
                                </CardBody>
                                <Divider/>
                                <ItemCount product={product} id={product.id} />        {/* contador de cantidad de productos a agregar al cart */}
                            </Card>
                        </div>
                    </div>
            )}
        )}
        </div >
    )
}

export default ItemDetail