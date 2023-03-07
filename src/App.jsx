import React from 'react';
import ItemListContainer from './components/ItemListContainer';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import CartWidget from './components/CartWidget';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
      <NavBar/>
    <ItemListContainer saludo="Bienvenida"/>
    </ChakraProvider>
  )
}

export default App;
