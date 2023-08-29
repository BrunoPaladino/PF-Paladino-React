import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore} from 'firebase/firestore'


const ItemListContainer = () => {

    const {category} = useParams();

    const [productRegister, setProducts] = useState([]);        //creacion del array para mostrar productos
    console.log(productRegister)

    useEffect( () =>{
        const dataBase = getFirestore()                         //traigo la base de datos de firestore

        const itemsCollection = collection (dataBase, "Productos")      //traigo los elementos de la base de la coleccion "Productos"
        getDocs(itemsCollection).then( (snapshot) =>{       //tomo la informacion de itemsColecction y mapeo lo que viene de los documentos
            const docs = snapshot.docs.map( (doc) => ( {id:doc.id, ...doc.data ()} )) 
            //data() nos trae la demas informacion del elemento de la coleccion, pero por el diseño de firestore,
            // ID no es una caracteristica del elemento, por ello la aclaramos por separado al sumarla al array
            
            setProducts(docs)       //introduzco lo que tengo en docs en el array
        })
    }, [])

const filteredProducts = productRegister.filter((product) => product.category === category)
const stockProducts = productRegister.filter((element) => element.stock === 'available' )

console.log("Filtered Products:", filteredProducts) 

    return (
    <div>
        {category ? <ItemList products = {filteredProducts}/> : <ItemList products={stockProducts} /> }
    </div>
    )
}

export default ItemListContainer