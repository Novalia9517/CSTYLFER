import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import React from 'react'
import App from './Pages/App'
import './index.css'

const theme = extendTheme({
  colors : {
      brand: {
        pink : '#FFC6D3',
        blue : '#1385EF',
        purple : '#CE65FF'
      }
  }
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)