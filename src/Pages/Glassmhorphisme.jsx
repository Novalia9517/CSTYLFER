import React from 'react'
import Layout from '../Components/Layout'
import { Box, Text, Grid, Wrap, Flex, InputGroup, InputLeftAddon, Input, Icon, Code } from '@chakra-ui/react'
import CustomSlider from '../Components/CustomSlider' 
import { useState } from 'react'
import { MdContentCopy} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Glassmhorphisme = () => {
  const [blur, setBlur] = useState()
  const [transparancy, setTransparancy] = useState(0.4)
  const [colors, setColors] = useState('#a44c6b')
  const [red, setRed] = useState(164)
  const [green, setGreen] = useState(76)
  const [blue, setBlue] = useState(107)
  const borderRadius = 10

  const getColor = (e) => {
    const color = e.target.value
    setRed(parseInt(color.substr(1,2), 16))
    setGreen(parseInt(color.substr(3,2), 16))
    setBlue(parseInt(color.substr(5,2), 16))
  }

  const onCopy = (value) => {
    toast.success('🦄 Wow so easy!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      // alert(value)
  }
  const glass = ` .glass{
                    width : 600px; //custom your own Width
                    height : 300px; //custom your own Height
                    background: rgba( ${red}, ${green}, ${blur}, ${transparancy} );
                    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    backdrop-filter: blur( ${blur}px );
                    -webkit-backdrop-filter: blur( ${blur}px );
                    border-radius: 10px;
                    border: 1px solid rgba( 255, 255, 255, 0.18 );
                  }`

  // console.log(blur, transparancy, color)
  return (
    <Layout>
        <Text fontSize={'3xl'} fontWeight='bold'>Glassmhorphisme</Text>
        <Flex align='center' position={'relative'} zIndex={'-10'}w={'100%'} h={96} bg='blue.300' rounded={'md'} display='grid' overflow="hidden" justifyContent={'center'} alignItems='center' border='1px' borderColor={'pink.300'}>
            <Box 
              w={'600px'} 
              h={'300px'} 
              display='flex'
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              overflowX='hidden'
              backdropFilter={`blur(${blur}px)`}
              borderRadius={`${borderRadius}px`}
              border={`1px solid rgba( 255, 255, 255, 0.18 )`}
              boxShadow={`0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`}
              bg={`rgba( ${red}, ${green}, ${blue}, ${transparancy} )`}
              color={'white'}
              >
                <Text fontSize={'xl'} fontWeight='bold'>Hi, There</Text>
                <Text fontSize={'xl'} fontWeight='bold'>This is Glassmhorphisme</Text>

              </Box>
            <Box 
              w={'200px'} 
              h={'30%'} 
              pos="absolute" bottom="5%" right="10%"
              display='block' 
              overflowX='hidden'
              backdropFilter={`blur(${blur}px)`}
              borderRadius={`${borderRadius}px`}
              border={`1px solid rgba( 255, 255, 255, 0.18 )`}
              boxShadow={`0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`}
              bg={`rgba( ${red}, ${green}, ${blue}, ${transparancy} )`}
              ></Box>
            <Box pos="absolute" top="-5%" right="10%" h='200px' w='200px' bgGradient='linear(to-r, purple.200, blue.400)' borderRadius='50%' zIndex={'-10'}/>
            <Box pos="absolute" bottom="-25%" left="40%" h='200px' w='200px' bgGradient='linear(to-r, green.200, pink.500)' borderRadius='50%' zIndex={'-10'}/>
            <Box pos="absolute" top="10%" left="5%" h='200px' w='200px' bgGradient='linear(to-l, purple.300, gray.400)' borderRadius='50%' zIndex={'-10'}/>
        </Flex>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} mt='3' height={72}>
          <Box display='flex' flexDirection={'column'}>
          <Box px={5} py={5} mt={5} border='1px' borderColor={'blue.200'}>
            <Box w='full'>
              <CustomSlider min={0} max={20}step={0.5}  value={blur} title={'Blur'} change={(e) => setBlur(e)}/>
              <CustomSlider min={0} max={1} step={0.05} value={transparancy} title={'Transparancy'} change={(e) => setTransparancy(e)}/>
            </Box>
            <Box w='full' mt={3}>
              <InputGroup size='sm' w={40} color='blue.300' border={'1px solid skyblue'}>
                  <InputLeftAddon children='Glass Color' bg={'white'} color='blue.300'/>
                  <Input type='color' value={colors} _placeholder={{opacity : '0.4', color : 'skyblue'}}  onChange={(e) => getColor(e)}/>
              </InputGroup>
            </Box>
          </Box>
            <Box bg='gray.800' h={'24'} px={5} py={3} mt={5}>
              <Flex justifyContent={'space-between'} color='blue.300'>
                <Text fontSize={'11px'}>HTML</Text>
                <CopyToClipboard text={`<div class='glass'></div>`}>
                  <Icon as={MdContentCopy} onClick={() => onCopy(`<div class='glass'></div>`)}/>
                </CopyToClipboard>
              </Flex>
              <Code 
                bg='gray.800'
                color='blue.300' 
                fontSize={'11px'}
                children={`<div class='glass'></div>`}
                >
              </Code>
            </Box>
          </Box>
          <Grid templateRows={'repeat(2, 1fr)'} gap={1} mt='3'>
            <Box bg='gray.800' h={''} px={5} py={3}>
              <Flex justifyContent={'space-between'} color='blue.300'>
                <Text fontSize={'11px'}>CSS</Text>
                <CopyToClipboard text={glass}>
                  <Icon as={MdContentCopy} onClick={() => onCopy(`CSS Code Copied`)}/>
                </CopyToClipboard>
              </Flex>
              <Box display={'flex'} flexDirection={'column'}>
                <Code 
                  bg='gray.800'
                  color='blue.300' 
                  fontSize={'11px'} mt={3}
                  children={`.glass : {`}
                  />
                <Code 
                  ml={5}
                  bg='gray.800'
                  color='blue.300' 
                  fontSize={'11px'}
                  >
                  width : 600px; //custom your own Width<br/>
                  height : 300px; //custom your own Height<br/>
                  background: rgba( {red}, {green}, {blue}, {transparancy} ); <br/>
                  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); <br/>
                  backdrop-filter: blur( {blur}px ); <br/>
                  -webkit-backdrop-filter: blur( {blur}px ); <br/>
                  border-radius: 10px;<br/>
                  border: 1px solid rgba( 255, 255, 255, 0.18 ); <br/>
                </Code>
                <Code 
                  bg='gray.800'
                  color='blue.300' 
                  fontSize={'11px'} mt={3}
                  children={`}`}
                  />
              </Box>
            </Box>
          </Grid>

        </Grid>
    </Layout>
  )
}

export default Glassmhorphisme