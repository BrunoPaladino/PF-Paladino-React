import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const products = [
        {id: 1, name:"Redragon Headset Zeus", image: <img src={RedragonHeadset} alt="Zeus Headset" width='300px' height='300px' borderRadius='lg'/>, description : "Description 1", price: 10, stock: 10, category: "Headset" },
        {id: 2, name:"Logitech Headset", image: <img src={LogitechHeadset} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 2", price: 10, stock: 10, category: "Headset" },
        {id: 3, name:"HyperX Headset", image: <img src={HyperXHeadset} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 3", price: 10, stock: 10, category: "Headset" },
        {id: 4, name:"Primus Headset", image: <img src={PrimusHeadset} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 4", price: 10, stock: 10, category: "Headset" },
        {id: 5, name:"Logitech Mouse G203", image: <img src={LogitechMouse} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 5", price: 10, stock: 10, category: "Mouse" },
        {id: 6, name:"Redragon M711 Cobra", image: <img src={RedragonMouse} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 6", price: 10, stock: 10, category: "Mouse" },
        {id: 7, name:"Redragon Kumara Keyboard", image: <img src={RedragonKeyboardKumara} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 7", price: 10, stock: 10, category: "Keyboard" },
        {id: 8, name:"Redragon Deimos Keyboard", image: <img src={RedragonKeyboardDeimos} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 8", price: 10, stock: 10, category: "Keyboard" },
        {id: 9, name:"Logitech Pop Keys", image: <img src={LogitechKeyboard} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 9", price: 10, stock: 10, category: "Keyboard" },
        {id: 10, name:"HyperX Alloy Aqua", image: <img src={HyperXKeyboard} alt="Logitech Headset" width='300px' height='300px'/>, description : "Description 10", price: 10, stock: 10, category: "Keyboard" },
    ]
    
    const getProducts = new Promise ((resolve, reject) => {
        if (products.lenght > 0) {
            setTimeout (() => {
                resolve(products)
            }, 3000)
            } else {
                reject(("The system doesnt have information about the products"))
            }
    })

    getProducts
        .then((res) => {
        })
        .catch((error) => {
            console.log(error)
        })


    return (
        <>
        <ItemDetail>
            products = {products}
        </ItemDetail>
        </>
    )
}

export default ItemDetailContainer