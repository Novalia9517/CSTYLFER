import React from 'react'
import Layout from '../Components/Layout'
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react'

const BgPattern = () => {
  const styles = [
    
  ]
  return (
    <Layout>
         <Text fontSize={'3xl'} fontWeight='bold'>Background Pattern</Text>
        <Flex align='center' position={'relative'} zIndex={'-10'}w={'100%'} h={96} bg='blue.800' rounded={'md'} display='grid' overflow="hidden" justifyContent={'center'} alignItems='center' border='1px' borderColor={'pink.300'}>
            <Box 
              w={'500px'} 
              h={'70%'} 
              display='block' 
              overflowX='hidden' 
              bg={'pink.300'}
              borderRadius={'20px'}
              ></Box>
            <Box pos="absolute" 
              top="3%" 
              left="3%" 
              h='100px' 
              w='200px' 
              borderRadius='10px'
              backgroundColor={`#ffffff`}
              opacity={0.8}
              backgroundImage={`radial-gradient(#444cf7 0.8500000000000001px, transparent 0.8500000000000001px), radial-gradient(#444cf7 0.8500000000000001px, #e5e5f7 0.8500000000000001px)`}
              style={{backgroundSize : `34px 34px`, backgroundPosition : `0 0,17px 17px`}}
              zIndex={'-10'}/>
            <Box pos="absolute" 
              // top="3%" 
              left="3%" 
              h='100px' 
              w='200px'
              borderRadius='10px'
              backgroundColor={`#ffffff`}
              opacity={0.8}
              backgroundImage={`repeating-linear-gradient(to right, #444cf7, #444cf7 1px, #e5e5f7 1px, #e5e5f7)`}
              style={{backgroundSize : `8px 8px`}}
              zIndex={'-10'}/>
            <Box pos="absolute" 
              bottom="3%" 
              left="3%" 
              h='100px' 
              w='200px' 
              borderRadius='10px'
              backgroundColor={`#ffffff`}
              opacity={0.8}
              backgroundImage={`linear-gradient(to right, #444cf7, #444cf7 11px, #e5e5f7 11px, #e5e5f7)`}
              style={{backgroundSize : `22px 100%`}}
              zIndex={'-10'}/>
            <Box pos="absolute" 
              top="3%" 
              right="3%" 
              h='100px' 
              w='200px' 
              borderRadius='10px'
              backgroundImage={` repeating-linear-gradient(45deg, #444cf7 0, #444cf7 2.2px, #e5e5f7 0, #e5e5f7 50%)`}
              style={{backgroundSize : `22px 22px`}}
              zIndex={'-10'}/>
            <Box pos="absolute" 
              // top="3%" 
              right="3%" 
              h='100px' 
              w='200px' 
              borderRadius='10px'
              backgroundImage={`linear-gradient(#444cf7 2.2px, transparent 2.2px), linear-gradient(to right, #444cf7 2.2px, #e5e5f7 2.2px)`}
              style={{backgroundSize : `44px 44px`}}
              zIndex={'-10'}/>
            <Box pos="absolute" 
              bottom="3%" 
              right="3%" 
              h='100px' 
              w='200px'
              borderRadius='10px'
              backgroundImage={` linear-gradient(-45deg, #e5e5f7, #e5e5f7 50%, #444cf7 50%, #444cf7)`}
              style={{backgroundSize : `44px 44px`}}
              zIndex={'-10'}/>
          
        </Flex>
    </Layout>
  )
}

export default BgPattern