import React from 'react'
import Layout from '../Components/Layout'
import {
  Text,
  Flex,
  Box,
  Stack,
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
  Button
} from '@chakra-ui/react'
import CustomSlider from '../Components/CustomSlider'
import { useState } from 'react'

const Gradient = () => {
  const [typeGrad, setTypeGrad] = useState()
  const [xAxis, setXAxis] = useState()
  const [yAxis, setYAxis] = useState()

  const clicked = (type, num) => {
    setTypeGrad(type)
  }

  console.log(xAxis)
  console.log(yAxis)
  return (
    <Layout>
        <Text fontSize={'3xl'} fontWeight='bold'>Gradient Generator</Text>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
          <Flex 
            align='center'
            zIndex={'-10'}
            w={96}
            h={96} bg='gray.200' 
            rounded={'md'} 
            display='grid' 
            overflow="hidden" 
            justifyContent={'center'} 
            alignItems='center' 
            border='1px' 
            borderColor={'pink.300'}>
              <Box 
                w={80} 
                h={'60%'} 
                display='block' 
                overflowX='hidden' 
                bg={'pink.300'}
                rounded={'xl'}
                ></Box>
              {/* <Box pos="absolute" top="-5%" right="10%" h='200px' w='200px' bgGradient='linear(to-r, purple.200, blue.400)' borderRadius='50%' zIndex={'-10'}/>
              <Box pos="absolute" bottom="-25%" left="40%" h='200px' w='200px' bgGradient='linear(to-r, green.200, pink.500)' borderRadius='50%' zIndex={'-10'}/>
              <Box pos="absolute" top="10%" left="5%" h='200px' w='200px' bgGradient='linear(to-l, #7928CA, #FF0080)' borderRadius='50%' zIndex={'-10'}/> */}
          </Flex>
          <GridItem w={'100%'} h='350px'>
                <Text textAlign={'center'} fontWeight='semibold'>Change Below</Text>
                <Grid 
                  templateColumns={'repeat(3, 1fr)'} 
                  mt={3} 
                  border={'2px'}
                  borderColor={'blue.300'}
                  rounded={'full'}
                  >
                    <Button 
                      roundedLeft={'full'} 
                      onClick={() => clicked('radial', 1)}
                      bg={typeGrad == 'radial' ? 'blue.300' : 'gray.200'}
                      color={typeGrad == 'radial' ? 'white' : 'gray.600'}
                      _hover={{bg : 'blue.300', color: 'white'}}
                      >Radial
                    </Button>
                    <Button 
                      rounded={'none'}
                      onClick={() => clicked('linear', 1)}
                      bg={typeGrad == 'linear' ? 'blue.300' : 'gray.200'}
                      color={typeGrad == 'linear' ? 'white' : 'gray.600'}
                      _hover={{bg : 'blue.300', color: 'white'}}
                      >Linear
                    </Button>
                    <Button 
                      roundedRight={'full'}
                      onClick={() => clicked('conic', 1)}
                      bg={typeGrad == 'conic' ? 'blue.300' : 'gray.200'}
                      color={typeGrad == 'conic' ? 'white' : 'gray.600'}
                      _hover={{bg : 'blue.300', color: 'white'}}
                      >Conic
                    </Button>
                </Grid>
                {typeGrad != 'radial' ? 
                <Stack>
                  <CustomSlider min={0} max={50} title={'Blur'} change={(e) => setXAxis(e)}/>
                  <CustomSlider min={5} max={50} title={'Distance'} change={(e) => setYAxis(e)}/>
                </Stack>
                : null
                }
            </GridItem>
        </Grid>
    </Layout>
  )
}

export default Gradient