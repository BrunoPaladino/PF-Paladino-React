import React from 'react'
import { useContext, useState } from 'react'
import { Card,Stack,CardBody,Heading,Divider,Text,CardFooter,Link, Button } from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../contexts/CartContext'

const Form = () => {

    const{cart, setCart, totalAmountOfProducts, finalAmount} = useContext(CartContext)


    const [orderId,setOrder] = useState(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adress, setAdress] = useState("");

const dataBase = getFirestore();

const order = {                                 //creo la orden donde se guardaran los datos del comprador y de la compra
    name,
    email,
    telephone,
    adress,
    products:cart,
    quantityOfProducts: totalAmountOfProducts,
    price: finalAmount
}

console.log(order)

const ordersCollection = collection(dataBase, "Purchase order");    //creo la coleccion, que llama a la base de datos y el nombre de la coleccion
                                                                    //donde se guardaran las compras

const confirmBought = (event) => {
    event.preventDefault()                                   //para evitar que el form envie la informacion antes de confirmar
    addDoc(ordersCollection, order).then(({id}) =>    //addDoc recibe el nombre de la coleccion a crear y el elemento que forma 
        setOrder(id));                                //parte de la coleccion en este caso "order"
        setCart([]);                                   //vacia el carrito tras realizar la compra
    }

    console.log(cart)

    return (
        <>
            <h1 className='welcome'>
                Formulary
            </h1>
            <div id='formContainer'>

            <p>Order number: {orderId}</p>

            <form onSubmit={confirmBought}>
                <Card  direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                            <div className='formInCart'>
                            <Stack>
                            <CardBody>
                                <Heading size='sm'>{"Purchase Order"}</Heading>
                                <Divider className='dividerCart'/>
                                <Text>
                                    First name and Last name: 
                                        <input type="text" placeholder='Nombre'
                                        onChange={(event)=> setName(event.target.value)}
                                        />
                                </Text>
                                <Text>
                                    email: 
                                        <input type="email" placeholder='email'
                                        onChange={(event)=> setEmail(event.target.value)}
                                        />
                                </Text>
                                <Text>
                                    Telephone: 
                                        <input type="number" placeholder='Nombre'
                                        onChange={(event)=> setTelephone(event.target.value)}
                                        />
                                </Text>
                                <Text>
                                    Adress: 
                                        <input type="text" placeholder='direccion'
                                        onChange={(event)=> setAdress(event.target.value)}
                                        />
                                </Text>
                            </CardBody>
                            <CardFooter>
                                    <Button type="submit" variant='solid' colorScheme='orange'>
                                        Confirm Purchase
                                    </Button>
                            </CardFooter>
                            </Stack>
                            </div>
                        </Card>
                        </form>
            </div>
        </>
    )
}

export default Form