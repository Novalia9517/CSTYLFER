import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SideBard from './SideBard'

const Layout = ({children}) => {
  return (
    <Box>
        <Navbar/>
        <Flex>
            <SideBard/>
            <Box border='1px' borderColor='blue.300' p='10' w='100%' mr={'8'} color='gray.600'>
                {children}
            </Box>
        </Flex>
        <Footer/>
    </Box>
  )
}

export default Layout