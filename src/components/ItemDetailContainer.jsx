import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [productRegister, setProduct] = useState([])      //creo el array vacio donde pondremos los productos de la base de datos
    console.log(productRegister)

    useEffect( () => {
        const dataBase = getFirestore();              //traigo la base de datos de firestore

        const productsCollection = collection(dataBase, "Productos");     //traigo de la coleccion "Productos" un elemento y lo pongo en dataBase
        getDocs(productsCollection).then( (querySnapshot) => {       //mapeo el elemento traido de la base de datos y lo agrego al array
            const element  = querySnapshot.docs.map((doc) =>
                ({ ...doc.data(), id: doc.id} ));                      //data() nos trae la demas informacion del elemento de la coleccion
                setProduct(element);                                  //por el diseño de firestore, ID no es una caracteristica del elemento 
        })                                                           //por ello la aclaramos por separado al sumarla al array
    }, [])

    return (
        <>
            <ItemDetail 
                products = {productRegister}
            />
        </>
    )
}

export default ItemDetailContainer