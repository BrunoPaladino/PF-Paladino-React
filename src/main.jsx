import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react' //Importamos el proveedor de Chakra

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzmXQBEekADPaxe5sxNp8Qks8ay3IcU5Q",
  authDomain: "tech-store-1b7c4.firebaseapp.com",
  projectId: "tech-store-1b7c4",
  storageBucket: "tech-store-1b7c4.appspot.com",
  messagingSenderId: "234453732154",
  appId: "1:234453732154:web:314df7eb2ea6fef6a75e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>, // aplicamos a la aplicacion el contenido del proveedor de Chakra
)
