import { Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'
import Layout from '../Components/Layout'

const GetStarted = () => {
  return (
    <Layout>
        <Text fontSize={'3xl'} fontWeight='bold'>Getting Started</Text>
        <Box display='flex' fontSize={'lg'} mt='5' fontWeight={'semibold'}>
            <Text>What to do to start</Text>
            <Text color={'pink.300'} ml='2' fontWeight={'bold'}>CStylfer</Text>
        </Box>
        <Box px={'10'} mt='5'>
            <Text>No need to do. Just choose  what theme you wanna try on the side bar, play with it. Get  CSS code that you need, copy it to your Web Project</Text>
            <Text mt={5} fontWeight='semibold'>Have fun and enjoy</Text>
        </Box>
    </Layout>
  )
}

export default GetStarted