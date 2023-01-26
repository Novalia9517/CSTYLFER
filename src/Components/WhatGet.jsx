import React from 'react'
import {
    Stack,
    Box,
    Grid,
    GridItem,
    Text,
    SimpleGrid,
    VStack
} from '@chakra-ui/react'
import HomeCard from './Card'
import Neu from '../assets/neu-new.png'
import Glass from '../assets/glass-new.png'
import Gradient from '../assets/gradient.png'
import BgPattern from '../assets/pattern-new.png'
import Blob from '../assets/blob-page.png'

const WhatGet = () => {
  return (
    <VStack h='full' w={'100%'} py='4'>
        <Box fontSize={{base : 'xl', md : '4xl'}} fontWeight='bold' mb='5' display={'flex'} color='gray.600'>
          What You can get and do with
          <Text fontSize={{base : 'xl', md : '4xl'}}  color='pink.200' textShadow='0px 3px 5px skyblue' fontWeight='bold' ml={3}>CStylfer</Text>
        </Box>
        <SimpleGrid columns={[1, 1, 2,3]}
          h='100%' w='100%' px={'24'} py='5'
          gap={4}
        >
          <GridItem>
            <HomeCard 
              title='Neumhorphisme' 
              description='Neumhorphisme UI help your website look more real and 3D'
              link={'/neu'} 
              img={Neu}/>
          </GridItem>
          <GridItem>
            <HomeCard 
              title='Glassmhorphisme' 
              description='Look glassy and classy. Transparancyis better!' 
              link={'/glass'} 
              img={Glass}/>
          </GridItem>
          <GridItem>
            <HomeCard 
              title={'Gradient Color'} 
              description='No need to try 1 by 1 the color you need'
              link={'/gradient'} 
              img={Gradient}/>
          </GridItem>
          {/* <GridItem>
            <HomeCard 
              title='Geometrik Art Generator' 
              description='Drag and drop, then drag and drop, Boom..  make it artistic'
              link={'/geo-art'}  
              img={BgPattern}/>
          </GridItem> */}
          <GridItem>
            <HomeCard 
              title={'Background Pattern'} 
              description='Choose pattern and make it smoother then ever'
              link={'/bg-pattern'}  
              img={BgPattern}/>
          </GridItem>
          <GridItem >
            <HomeCard 
              title='Blob maker' 
              description='Blobing blobing... blobing blobing Make it unique'
              link={'/blob-maker'}  
              img={Blob}/>
          </GridItem>
        </SimpleGrid>
      </VStack>
  )
}

export default WhatGet