import React from 'react'
import Layout from '../Components/Layout'
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react'

const BgPattern = () => {
  return (
    <Layout>
         <Text fontSize={'3xl'} fontWeight='bold'>Background Pattern</Text>
        <Flex align='center' position={'relative'} zIndex={'-10'}w={'100%'} h={96} bg='blue.800' rounded={'md'} display='grid' overflow="hidden" justifyContent={'center'} alignItems='center' border='1px' borderColor={'pink.300'}>
            <Box w={'600px'} h={'70%'} display='block' overflowX='hidden' bg={'pink.300'}></Box>
            <Box pos="absolute" top="-5%" right="10%" h='200px' w='200px' bgGradient='linear(to-r, purple.200, blue.400)' borderRadius='50%' zIndex={'-10'}/>
            <Box pos="absolute" bottom="-25%" left="40%" h='200px' w='200px' bgGradient='linear(to-r, green.200, pink.500)' borderRadius='50%' zIndex={'-10'}/>
            <Box pos="absolute" top="10%" left="5%" h='200px' w='200px' bgGradient='linear(to-l, #7928CA, #FF0080)' borderRadius='50%' zIndex={'-10'}/>
        </Flex>
    </Layout>
  )
}

export default BgPattern