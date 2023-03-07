import { CacheProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CacheProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </CacheProvider>
)
