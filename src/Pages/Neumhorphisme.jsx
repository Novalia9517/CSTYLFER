import { Text,  
          Box, 
          Flex, 
          Grid, 
          GridItem, 
          InputGroup, 
          Input, 
          InputLeftAddon, 
          InputRightAddon,
          Icon,
          Code
    } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Layout from '../Components/Layout'
import { MdContentCopy } from 'react-icons/md'
import CustomSlider from '../Components/CustomSlider'

const Neumhorphisme = () => {
    const [width, setWidth] = useState(100)
    const [height, setHeight] = useState(100)
    const [borderRadius, setBorderRadius] = useState('')
    const [shadowX, setShadowX] = useState('')
    const [shadowY, setShadowY] = useState('')
    const [distance, setDistance] = useState(7)
    const [blur, setBlur] = useState(7)
    const [transparancy, setTransparancy] = useState('')
    const [color, setColor] = useState(`white`)
    const neu = `${distance}px ${distance}px ${distance*2}px gray, -${distance}px -${distance}px ${distance * 2}px #ffffff`

    console.log(color)
  return (
   <Layout>
    <Text fontSize={'3xl'} fontWeight='bold'>Neumhorphisme</Text>
    <Box w='100%' p={10}>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
            <GridItem 
              w={'100%'} h='350px' 
              bg={`${color}`} border='1px' 
              display='flex' 
              justifyContent={'center'} 
              alignItems='center'>
                <Box 
                  w={`${width}px`} h={`${height}px`} 
                  bg={`${color}`} 
                  borderRadius={`${borderRadius}%`}
                  boxShadow={`${distance}px ${distance}px ${distance*2}px gray, -${distance}px -${distance}px ${distance * 2}px #ffffff`}>
                </Box>
            </GridItem>
            <GridItem w={'100%'} h='350px'>
                <Text textAlign={'center'} fontWeight='semibold'>Change Below</Text>
                <Grid templateColumns={'repeat(2, 1fr)'} gap={4} mt={3}>
                    <InputGroup size='sm' color='blue.300' border={'2px'}>
                        <InputLeftAddon children='Width' bg={'white'} />
                        <Input type='number' placeholder='max 350' _placeholder={{opacity : '0.4', color : 'skyblue'}} onChange={(e) => e.target.value < 350 ? setWidth(e.target.value) : setWidth(350)}/>
                        <InputRightAddon children='px' bg='white'/>
                    </InputGroup>
                    <InputGroup size='sm' color='blue.300' border={'2px'}>
                        <InputLeftAddon children='Height' bg={'white'} color='blue.300'/>
                        <Input type='number' placeholder='max 350' _placeholder={{opacity : '0.4', color : 'skyblue'}}  onChange={(e) => e.target.value < 350 ? setHeight(e.target.value) : setHeight(350)}/>
                        <InputRightAddon children='px' bg={'white'} color='blue.300'/>
                    </InputGroup>
                </Grid>
                <InputGroup size='sm' w={36} color='blue.300'  border={'2px'} mt={3}>
                    <InputLeftAddon children='Color' bg={'white'} color='blue.300'/>
                    <Input type='color' _placeholder={{opacity : '0.4', color : 'skyblue'}}  onChange={(e) => setColor(e.target.value)}/>
                </InputGroup>
                <CustomSlider min={0} max={50} title={'Border Radius'} change={(e) => setBorderRadius(e)}/>
                {/* <CustomSlider min={0} max={35} title={'Shadow X'} change={(e) => setShadowX(e)}/>
                <CustomSlider min={0} max={35} title={'Shadow Y'} change={(e) => setShadowY(e)}/> */}
                <CustomSlider min={0} max={50} title={'Blur'} change={(e) => setBlur(e)}/>
                <CustomSlider min={5} max={50} title={'Distance'} change={(e) => setDistance(e)}/>
                {/* <CustomSlider min={0} max={35} title={'Transparancy'} change={(e) => setTransparancy(e)}/> */}
            </GridItem>
        </Grid>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} mt='3'>
          <Box bg='gray.800' h={'24'} px={5} py={3} mt={3}>
            <Flex justifyContent={'space-between'} color='blue.300'>
              <Text fontSize={'11px'}>HTML</Text>
              <Icon as={MdContentCopy}/>
            </Flex>
            <Code 
              bg='gray.800'
              color='blue.300' 
              fontSize={'11px'} mt={3}
              children='<div class="neu"></div>'
              >
            </Code>
          </Box>
          <Box bg='gray.800' h={'24'} px={5} py={3} mt={3}>
            <Flex justifyContent={'space-between'} color='blue.300'>
              <Text fontSize={'11px'}>CSS</Text>
              <Icon as={MdContentCopy}/>
            </Flex>
            <Code 
              bg='gray.800'
              color='blue.300' 
              fontSize={'11px'} mt={3}
              children={`.neu : box-shadow : ${neu}`}
              >
              {/* box-shadow : {neu} */}
            </Code>
          </Box>
        </Grid>
    </Box>
   </Layout>
  )
}

export default Neumhorphisme