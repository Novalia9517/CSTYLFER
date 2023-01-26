import React from 'react'
import { Box, Text, Button, VStack, SimpleGrid} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import HomeCard from '../Components/Card'
import Footer from '../Components/Footer'
import Review from '../Components/Review'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import WhatGet from '../Components/WhatGet'

const Home = () => {
  const navigate = useNavigate()
  const getStarted = () => {
    navigate('/get-started')
  }
  const parentAnimate = {
    hidden : {opacity : 0},
    show : { opacity : 1, transition : {staggerChildren : 0.13}}
  }
  const circleAnimate = {
    hidden : {opacity : 0, x :'100vw', y : '20vh'},
    show : { opacity : 1, transition : {staggerChildren : 0.13}, x : '0', y : '0'}
  }
  return (
    <Box as={motion.div} variants={parentAnimate} initial='hidden' animate='show' overflow={'hidden'} w='100vw' maxWidth='' minH={'100vh'} position='relative' overflowX={'hidden'}>
      <Navbar/>
      <Box as={motion.div} variants={circleAnimate} initial='hidden' animate='show' pos="absolute" top="0" right="-20%" h='700px' w='700px' bg='pink.200' overflowX={'hidden'} borderRadius='50%' zIndex={'-10'}/>
       <Box as={motion.div} variants={circleAnimate} initial='hidden' animate='show' pos="absolute" top="-5%" left="30%" h='300px' w='300px' bg='purple.200' borderRadius='50%' zIndex={'-10'}/>
      <Box as={motion.div} variants={circleAnimate} initial='hidden' animate='show' pos="absolute" top="20%" left="10%" h='300px' w='300px' bg='blue.200' borderRadius='50%' zIndex={'-10'}/>
      <VStack h='90vh' w={'100%'} py='16'>
        <Box fontSize={{base : '2xl', md :'5xl'}} fontWeight='bold' display={'flex'}>
          Build <Text color='pink.300' ml={{base : 1, md :3}}>Beau</Text><Text color='purple.400' mr={{base : 1, md :3}}>tiful</Text>
          <Text color='blue.400' mr={{base : 1, md :3}}>CSS</Text>
        </Box>
        <Box fontSize={{base : '2xl', md :'5xl'}} fontWeight='bold' display={'flex'}>
         Faster than <Text color='blue.400' ml={{base : 1, md :3}}>Clicking</Text>
        </Box>
        <Text w={'40%'} textAlign='center' fontSize={'lg'} fontWeight='semibold'>We help you to got beautiful ui with super fast CSS code, dont waste your time to think about  how to make beautiful UI with boring CSS code</Text>
        <Button bg='blue.500' size='lg' color={'white'} my={4} onClick={getStarted}>Get Started</Button>
      </VStack>
      
      {/* What you get in CSylfer */}
      <WhatGet/>

      <VStack h='100%' w={'100%'} py='4'>
        <Box fontSize={'4xl'} fontWeight='bold' display={'flex'} color='gray.600'>
          Tech Stack
          <Text fontSize='36px' color='pink.200' textShadow='0px 3px 5px skyblue' fontWeight='bold' ml={3}>CStylfer</Text>
        </Box>
        <SimpleGrid columns={{ base : 1, md : 4}}
          w='100%' px={'24'} py='5' pos={'relative'}
          gap={4}
        >
          <Review top='10%' left='10%' color='blue.200' title='ReactJS' rev='Javascript most populer library, easy to use.' id={'one'}/>
          <Review top='30%' left='30%' color='purple.200' title='ChakraUI' rev='CSS framework with Clean UI' id={'two'}/>
          <Review top='30%' left='50%' color='pink.200' title='Framer motion' rev='Animate better and smoother' id={'three'}/>
        </SimpleGrid>
      </VStack>
      <Footer/>
    </Box>

  )
}

export default Home