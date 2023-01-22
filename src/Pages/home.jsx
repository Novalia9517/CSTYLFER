import React from 'react'
import { Box, HStack, Text, Button, VStack, Grid, GridItem, Image, Stack, Heading} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import HomeCard from '../Components/Card'
import Footer from '../Components/Footer'
import Review from '../Components/Review'
import { useNavigate } from 'react-router-dom'
import Neu from '../assets/neu-new.png'
import Glass from '../assets/glass-new.png'
import Gradient from '../assets/gradient.png'
import BgPattern from '../assets/pattern-new.png'
import Blob from '../assets/blob-page.png'
import { motion } from 'framer-motion'

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
    hidden : {opacity : 0, x :'100vw'},
    show : { opacity : 1, transition : {staggerChildren : 0.13}, x : '0'}
  }
  return (
    <Box as={motion.div} variants={parentAnimate} initial='hidden' animate='show' overflow={'hidden'} w='100vw' maxWidth='' minH={'100vh'} position='relative' overflowX={'hidden'}>
      <Navbar/>
      <Box as={motion.div} variants={circleAnimate} initial='hidden' animate='show' pos="absolute" top="0" right="-20%" h='700px' w='700px' bg='pink.200' overflowX={'hidden'} borderRadius='50%' zIndex={'-10'}/>
       <Box as={motion.div} variants={circleAnimate} initial='hidden' animate='show' pos="absolute" top="-5%" left="30%" h='300px' w='300px' bg='purple.200' borderRadius='50%' zIndex={'-10'}/>
      <Box as={motion.div} variants={circleAnimate} initial='hidden' animate='show' pos="absolute" top="20%" left="10%" h='300px' w='300px' bg='blue.200' borderRadius='50%' zIndex={'-10'}/>
      <VStack h='90vh' w={'100%'} py='16'>
        <Box fontSize={'5xl'} fontWeight='bold' display={'flex'}>
          Build <Text color='pink.300' ml={3}>Beau</Text><Text color='purple.400' mr={3}>tiful</Text>
          <Text color='blue.400' mr={3}>CSS</Text>
        </Box>
        <Box fontSize={'5xl'} fontWeight='bold' display={'flex'}>
         Faster than <Text color='blue.400' ml={3}>Clicking</Text>
        </Box>
        <Text w={'40%'} textAlign='center' fontSize={'lg'} fontWeight='semibold'>We help you to got beautiful ui with super fast CSS code, dont waste your time to think about  how to make beautiful UI with boring CSS code</Text>
        <Button bg='blue.500' size='lg' color={'white'} my={4} onClick={getStarted}>Get Started</Button>
      </VStack>
      <VStack h='100%' w={'100%'} py='4'>
        <Box fontSize={'4xl'} fontWeight='bold' mb='5' display={'flex'} color='gray.600'>
          What You can get and do with
          <Text fontSize='36px' color='pink.200' textShadow='0px 3px 5px skyblue' fontWeight='bold' ml={3}>CStylfer</Text>
        </Box>
        <Grid
          h='100%' w='100%' px={'24'} py='5'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(6, 1fr)'
          gap={4}
        >
          <GridItem colSpan={2} rowSpan={1}>
            <HomeCard 
              title='Neumhorphisme' 
              description='Neumhorphisme UI help your website look more real and 3D'
              link={'/neu'} 
              img={Neu}/>
          </GridItem>
          <GridItem colSpan={2}>
            <HomeCard 
              title='Glassmhorphisme' 
              description='Look glassy and classy. Transparancyis better!' 
              link={'/glass'} 
              img={Glass}/>
          </GridItem>
          <GridItem colSpan={2}>
            <HomeCard 
              title={'Gradient Color'} 
              description='No need to try 1 by 1 the color you need'
              link={'/gradient'} 
              img={Gradient}/>
          </GridItem>
          {/* <GridItem colSpan={2}>
            <HomeCard 
              title='Geometrik Art Generator' 
              description='Drag and drop, then drag and drop, Boom..  make it artistic'
              link={'/geo-art'}  
              img={BgPattern}/>
          </GridItem> */}
          <GridItem colSpan={2}>
            <HomeCard 
              title={'Background Pattern'} 
              description='Choose pattern and make it smoother then ever'
              link={'/bg-pattern'}  
              img={BgPattern}/>
          </GridItem>
          <GridItem colSpan={2} >
            <HomeCard 
              title='Blob maker' 
              description='Blobing blobing... blobing blobing Make it unique'
              link={'/blob-maker'}  
              img={Blob}/>
          </GridItem>
        </Grid>
      </VStack>
      <VStack h='100%' w={'100%'} py='4'>
        <Box fontSize={'4xl'} fontWeight='bold' display={'flex'} color='gray.600'>
          Tech Stack
          <Text fontSize='36px' color='pink.200' textShadow='0px 3px 5px skyblue' fontWeight='bold' ml={3}>CStylfer</Text>
        </Box>
        <Grid
          w='100%' px={'24'} py='5' pos={'relative'}
          templateColumns='repeat(6, 1fr)' mb={10}
          gap={4}
        >
          <Review top='10%' left='10%' color='blue.200' title='ReactJS' rev='Javascript most populer framework, easy to use.' id={'one'}/>
          <Review top='30%' left='30%' color='purple.200' title='ChakraUI' rev='CSS framework with Clean UI' id={'two'}/>
          <Review top='30%' left='50%' color='pink.200' title='Framer motion' rev='Animate better and smoother' id={'three'}/>
        </Grid>
      </VStack>
      <Footer/>
    </Box>

  )
}

export default Home