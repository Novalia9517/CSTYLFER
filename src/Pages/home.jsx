import React from 'react'
import { Box, HStack, Text, Button, VStack, Grid, GridItem, Image, Stack, Heading} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import HomeCard from '../Components/Card'
import Footer from '../Components/Footer'
import Review from '../Components/Review'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const getStarted = () => {
    navigate('/get-started')
  }
  return (
    <Box overflow={'hidden'} w='100vw' maxWidth='' minH={'100vh'} position='relative' overflowX={'hidden'}>
      <Navbar/>
      <Box pos="absolute" top="0" right="-20%" h='700px' w='700px' bg='pink.200' overflowX={'hidden'} borderRadius='50%' zIndex={'-10'}/>
      <Box pos="absolute" top="-5%" left="30%" h='300px' w='300px' bg='purple.200' borderRadius='50%' zIndex={'-10'}/>
      <Box pos="absolute" top="20%" left="10%" h='300px' w='300px' bg='blue.200' borderRadius='50%' zIndex={'-10'}/>
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
            <HomeCard title='Neumhorphisme' description='Neumhorphisme UI help your website look more real and 3D' img=''/>
          </GridItem>
          <GridItem colSpan={2}>
            <HomeCard title='Glassmhorphisme' description='Look glassy and classy. Transparancyis better!' img=''/>
          </GridItem>
          <GridItem colSpan={2}>
            <HomeCard title={'Gradient Color'} description='No need to try 1 by 1 the color you need' img=''/>
          </GridItem>
          <GridItem colSpan={2}>
            <HomeCard title='Geometrik Art Generator' description='Drag and drop, then drag and drop, Boom..  make it artistic' img=''/>
          </GridItem>
          <GridItem colSpan={2}>
            <HomeCard title={'Background Pattern'} description='Choose pattern and make it smoother then ever' img=''/>
          </GridItem>
          <GridItem colSpan={2} >
            <HomeCard title='Blob maker' description='Blobing blobing... blobing blobing Make it unique' img=''/>
          </GridItem>
        </Grid>
      </VStack>
      <VStack h='100%' w={'100%'} py='4'>
        <Box fontSize={'4xl'} fontWeight='bold' display={'flex'} color='gray.600'>
          What They Said About
          <Text fontSize='36px' color='pink.200' textShadow='0px 3px 5px skyblue' fontWeight='bold' ml={3}>CStylfer</Text>
        </Box>
        <Grid
          w='100%' px={'24'} py='5' pos={'relative'}
          templateColumns='repeat(6, 1fr)' mb={10}
          gap={4}
        >
          <Review top='20%' left='10%' color='blue.200' title='Name' rev='This help me so much. I dont wasting my time to try one by one' id={'one'}/>
          <Review top='70%' left='50%' color='purple.200' title='Name' rev='This help me so much. I dont wasting my time to try one by one' id={'two'}/>
          <Review top='0%' left='100%' color='pink.200' title='Name' rev='This help me so much. I dont wasting my time to try one by one' id={'three'}/>
        </Grid>
      </VStack>
      <Footer/>
    </Box>

  )
}

export default Home