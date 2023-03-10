import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const saludo = "Bienvenido a nuestra tienda.";

  return <>
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={saludo} />
    </ChakraProvider>
  </>
}

export default App
