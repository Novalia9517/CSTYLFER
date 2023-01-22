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
          Code,
          HStack,
          Button,
          flatten
    } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Layout from '../Components/Layout'
import { MdContentCopy } from 'react-icons/md'
import CustomSlider from '../Components/CustomSlider'
import {BsArrowUpLeftSquare} from 'react-icons/bs'
import { useEffect } from 'react'

const Neumhorphisme = () => {
    const [width, setWidth] = useState(100)
    const [height, setHeight] = useState(100)
    const [borderRadius, setBorderRadius] = useState('')
    const [distance, setDistance] = useState(7)
    const [blur, setBlur] = useState(7)
    const [transparancy, setTransparancy] = useState('')
    const [intensity, setIntensity] = useState()
    const [linear, setLinear] = useState(false)
    const [color, setColor] = useState(`#ffffff`)
    const [backGround, setBackground] = useState()
    const [backGroundImage, setBackgroundImage] = useState()
    const [inset, setInset] = useState(false)
    const [neu,setNeu] = useState(`${distance}px ${distance}px ${blur}px gray, -${distance}px -${distance}px ${blur}px #ffffff`)

    const DistanceChange  = (e) => {
      setDistance(e)
      setBlur( e * 2)
    }
    const AllDirections = {
      TopLeft : `${inset ? 'inset' : ''} ${distance}px ${distance}px ${blur}px gray, ${inset ? 'inset' : ''} -${distance}px -${distance}px ${blur}px #ffffff`,
      TopRight : `${inset ? 'inset' : ''} -${distance}px ${distance}px ${blur}px gray, ${inset ? 'inset' : ''} ${distance}px -${distance}px ${blur}px #ffffff`,
      BottomLeft : `${inset ? 'inset' : ''} ${distance}px -${distance}px ${blur}px gray, ${inset ? 'inset' : ''} -${distance}px ${distance}px ${blur}px #ffffff`,
      BottomRight : `${inset ? 'inset' : ''} -${distance}px -${distance}px ${blur}px gray, ${inset ? 'inset' : ''} ${distance}px ${distance}px ${blur}px #ffffff`
    }

    const onDirectionChange = (value) => {
      setNeu(AllDirections[value])
      console.log(neu)
    }

    const onChooseType = (value) =>{
      if(value == 'flat'){
        setBackground(color)
        setInset(false)
        setLinear(false)
      }else if(value == 'pressed'){
        setBackground(color)
        setInset(true)
        setLinear(false)
      }else{
        console.log(color)
        const red = parseInt(color.substr(1,2), 16)
        const green = parseInt(color.substr(3,2), 16)
        const blue = parseInt(color.substr(5,2), 16)
        let rgb1 = `#` + `${(Math.ceil(red * 1.2)).toString(16)}` + `${(Math.ceil(green * 1.2)).toString(16)}` + `${Math.ceil((blue * 1.2)).toString(16)}`
        let rgb2 = `#` + `${(Math.ceil(red * 0.8)).toString(16)}` + `${(Math.ceil(green * 0.8)).toString(16)}` + `${Math.ceil((blue * 0.8)).toString(16)}`
        console.log(rgb1, rgb2)
        if(value == 'concave'){
          setBackgroundImage(`linear-gradient(280deg, ${rgb1}, ${rgb2});`)
          setInset(false)
          setLinear(true)
        }else{
          setBackgroundImage(`linear-gradient(315deg, ${rgb2}, ${rgb1});`)
          setInset(false)
          setLinear(true)
        }
      }
    }
    // console.log(backGround)
    // console.log(backGroundImage)
    // console.log(inset)
    // console.log(color)

    useEffect(() => {
    },[backGround, backGroundImage, inset, linear, color, distance, blur, transparancy, neu])
  return (
   <Layout>
    <Text fontSize={'3xl'} fontWeight='bold'>Neumhorphisme</Text>
    <Text fontSize={'xl'} fontWeight='bold'>( Bug Fixing on proggress )</Text>
    <Box w='100%' p={10}>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} >
            <GridItem 
              w={'100%'} h='350px' 
              position={'relative'}
              bg={`${color}`} 
              backgroundImage={linear ? `${backGroundImage}` : ``}
              border='1px' 
              display='flex' 
              justifyContent={'center'} 
              alignItems='center'>
                <Box 
                  w={`${width}px`} h={`${height}px`} 
                  bg={`${color}`}
                  backgroundImage={linear ? `${backGroundImage}` : ``}
                  borderRadius={`${borderRadius}%`}
                  boxShadow={`${neu}`}>
                </Box>
              <Icon 
                as={BsArrowUpLeftSquare} 
                w={7} h={7} 
                color={'pink.300'} 
                position='absolute' 
                top={'0'} left={'0'}
                transform={'rotate(180deg)'}
                onClick={() => onDirectionChange('TopLeft')}
                />
              <Icon 
                as={BsArrowUpLeftSquare} 
                w={7} h={7} color={'pink.300'} 
                position='absolute' 
                top={'0'} 
                right={'0'}
                transform={'rotate(-90deg)'}
                onClick={() => onDirectionChange('TopRight')}
                />
              <Icon 
                as={BsArrowUpLeftSquare} 
                w={7} h={7} 
                color={'pink.300'} 
                position='absolute' 
                bottom={'0'} 
                left={'0'}
                transform={'rotate(90deg)'}
                onClick={() => onDirectionChange('BottomLeft')}
                />
              <Icon 
                as={BsArrowUpLeftSquare} 
                w={7} h={7} 
                color={'pink.300'} 
                position='absolute' 
                bottom={'0'} 
                right={'0'}
                onClick={() => onDirectionChange('BottomRight')}
                />
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
                <CustomSlider min={0} max={50} title={'Blur'} value={blur} change={(e) => setBlur(e)}/>
                <CustomSlider min={5} max={50} title={'Distance'} change={(e) => DistanceChange(e)}/>
                {/* <CustomSlider min={0} max={35} title={'Transparancy'} change={(e) => setTransparancy(e)}/> */}
                <CustomSlider min={0} max={0.6} step={0.01} title={'Intensity'} change={(e) => setIntensity(e)}/>
                <Grid display={'flex'} width='100%' border={'1px'} mt={2} color='pink.400'>
                  <Button 
                    w={'25%'} 
                    variant='text'
                    onClick={() => onChooseType('flat')}
                    >Flat</Button>
                  <Button 
                    w={'25%'} 
                    variant='text'
                    onClick={() => onChooseType('concave')}
                    >Concave</Button>
                  <Button 
                    w={'25%'} 
                    variant='text'
                    onClick={() => onChooseType('convex')}
                    >Convex</Button>
                  <Button 
                    w={'25%'} 
                    variant='text'
                    onClick={() => onChooseType('pressed')}
                    >Pressed</Button>
                </Grid>
            </GridItem>
        </Grid>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} mt='3'>
          <Box bg='gray.800' h={'full'} px={5} py={3} mt={3}>
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
          <Box bg='gray.800' h={'full'} px={5} py={3} mt={3}>
            <Flex justifyContent={'space-between'} color='blue.300'>
              <Text fontSize={'11px'}>CSS</Text>
              <Icon as={MdContentCopy}/>
            </Flex>
            <Box display={'flex'} flexDirection={'column'}>
              <Code 
                bg='gray.800'
                color='blue.300' 
                fontSize={'11px'} mt={3}
                children={`.neu {`}
                >
                {/* box-shadow : {neu} */}
              </Code>
              <Code 
                bg='gray.800'
                color='blue.300' 
                fontSize={'11px'} ml={3}
                >
                  border-radius: {borderRadius};  <br/>
                  box-shadow : {neu} ; <br/>
                  background : {linear ? backGroundImage : backGround}
              </Code>
              <Code 
                bg='gray.800'
                color='blue.300' 
                fontSize={'11px'} mt={3}
                children={`}`}
                >
              </Code>
            </Box>
          </Box>
        </Grid>
    </Box>
   </Layout>
  )
}

export default Neumhorphisme