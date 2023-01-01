import React from 'react'
import Layout from '../Components/Layout'
import { Box, Text, Grid, Wrap, Flex, InputGroup, InputLeftAddon, Input, Icon } from '@chakra-ui/react'
import CustomSlider from '../Components/CustomSlider' 
import { useState } from 'react'
import { MdContentCopy} from 'react-icons/md'

const Glassmhorphisme = () => {
  const [blur, setBlur] = useState()
  const [transparancy, setTransparancy] = useState()
  const [color, setColor] = useState()
  return (
    <Layout>
        <Text fontSize={'3xl'} fontWeight='bold'>Glassmhorphisme</Text>
        <Flex align='center' position={'relative'} zIndex={'-10'}w={'100%'} h={96} bg='blue.800' rounded={'md'} display='grid' overflow="hidden" justifyContent={'center'} alignItems='center' border='1px' borderColor={'pink.300'}>
            <Box w={'600px'} h={'70%'} display='block' overflowX='hidden' bg={'pink.300'}></Box>
            <Box pos="absolute" top="-5%" right="10%" h='200px' w='200px' bgGradient='linear(to-r, purple.200, blue.400)' borderRadius='50%' zIndex={'-10'}/>
            <Box pos="absolute" bottom="-25%" left="40%" h='200px' w='200px' bgGradient='linear(to-r, green.200, pink.500)' borderRadius='50%' zIndex={'-10'}/>
            <Box pos="absolute" top="10%" left="5%" h='200px' w='200px' bgGradient='linear(to-l, #7928CA, #FF0080)' borderRadius='50%' zIndex={'-10'}/>
        </Flex>
        <Box border='1px' borderColor={'blue.200'} px={42} py={5} mt={5} display='flex'>
          <Box w='70%'>
            <CustomSlider min={0} max={50} title={'Blur'} change={(e) => setBlur(e)}/>
            <CustomSlider min={0} max={50} title={'Transparancy'} change={(e) => setTransparancy(e)}/>
          </Box>
          <Box w='30%' mx={12}>
            <InputGroup size='sm' w={'120px'} color='blue.300' >
                <InputLeftAddon children='Color' bg={'white'} color='blue.300'/>
                <Input type='color' _placeholder={{opacity : '0.4', color : 'skyblue'}}  onChange={(e) => setColor(e.target.value)}/>
            </InputGroup>
          </Box>
        </Box>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} mt='3'>
          <Box bg='gray.800' h={'24'} px={5} py={3} mt={3}>
            <Flex justifyContent={'space-between'} color='blue.300'>
              <Text fontSize={'11px'}>HTML</Text>
              <Icon as={MdContentCopy}/>
            </Flex>
          </Box>
          <Box bg='gray.800' h={'24'} px={5} py={3} mt={3}>
            <Flex justifyContent={'space-between'} color='blue.300'>
              <Text fontSize={'11px'}>CSS</Text>
              <Icon as={MdContentCopy}/>
            </Flex>
          </Box>
        </Grid>
    </Layout>
  )
}

export default Glassmhorphisme