import React, { useState } from 'react'
import { Card,Stack,CardBody,Heading,Divider,Text,CardFooter,Link, Button } from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Form = () => {

    const [orderId,setOrder] = useState(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adress, setAdress] = useState("");

const dataBase = getFirestore();

const order = {
    name,
    email,
    telephone,
    adress
}

const ordersCollection = collection(dataBase, "Purchase order");

const confirmBought = (event) => {
    event.preventDefaul()                                   //para evitar que el form envie la informacion antes de confirmar
    addDoc(ordersCollection, order).then(({id}) =>
        setOrder(id))
}

    return (
        <>
            <h1 className='welcome'>
                Formulary
            </h1>
            <div id='formContainer'>
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