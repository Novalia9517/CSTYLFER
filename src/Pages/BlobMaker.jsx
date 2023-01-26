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
  Button,
  HStack,
  Icon,
  Code
} from '@chakra-ui/react'
import CustomSlider from '../Components/CustomSlider'
import { useState } from 'react'
import { useEffect } from 'react'
import { MdContentCopy } from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const BlobMaker = () => {
  const [typeGrad, setTypeGrad] = useState('linear')
  const [color1, setColor1] = useState('#07edc7')
  const [color2, setColor2] = useState('#91a9f3')
  const [color3, setColor3] = useState('#ff90a8')
  const [xAxis, setXAxis] = useState(50)
  const [yAxis, setYAxis] = useState(50)
  const [angle, setAngle] = useState(90)
  const [border1, setBorder1] = useState(42)
  const [border2, setBorder2] = useState(62)
  const [border3, setBorder3] = useState(24)
  const [border4, setBorder4] = useState(68)
  const [radialType, setRadialType] = useState('circle')
  const [background, setBackground] = useState(`linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`)
  const [blob, setBlob] = useState(`${border1}% ${100 - border1}% ${100 - border3}% ${border3}% / ${border4}%  ${border2}% ${100 - border2}% ${100 - border4}%`)


  const gradient = `.blob {
                      width : '300px', //custom your own width
                      height : '230px', //custom your own height
                      background-image : ${background},
                      border-radius : ${blob}
                    }`

  const clicked = (type, num) => {
    setTypeGrad(type)
    getBackground()
  }

  const onBlob = (choose, value) => {
    choose(value)
    blobing
  }

  const getBackground = () => {
    let bg = ``
    if(typeGrad == 'radial'){
      bg = `radial-gradient(${radialType} at ${xAxis}% ${yAxis}%, ${color1}, ${color2}, ${color3})`
      setBackground(bg)
    }else if (typeGrad == 'conic'){
      bg = `conic-gradient(from ${angle}deg at ${xAxis}% ${yAxis}%, ${color1}, ${color2}, ${color3})`
      setBackground(bg)
    }else{
      bg = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`
      setBackground(bg)
    }
    setBackground(bg)
    blobing()
  }

  const blobing = () => {
    let radius = `${border1}% ${100 - border1}% ${100 - border3}% ${border3}% / ${border4}%  ${border2}% ${100 - border2}% ${100 - border4}%`
    setBlob(radius)
  }
  const onCopy = (value) => {
    toast.info(`${value}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    // toast(' Copied!')
      // alert(value)
  }

  useEffect(() => {
    getBackground()
  },[typeGrad, xAxis, yAxis, angle, radialType, color1, color2, color3, border1, border2, border3, border4])

  return (
    <Layout>
        <Text fontSize={'3xl'} fontWeight='bold'>Blob Maker</Text>
        <Grid 
          templateColumns={'repeat(2, 1fr)'} 
          gap={8} display={'flex'} 
          flexDirection={{sm : 'column', md : 'column', lg : 'row'}}
          flexWrap={'wrap'}
          h='full'
          >
          <GridItem
            align='center'
            zIndex={'-10'}
            xs={12} md={12} lg={6}
            px={8}
            bg='gray.200' 
            rounded={'md'} 
            display='grid' 
            overflow="hidden" 
            justifyContent={'center'} 
            alignItems='center'
            border='1px' 
            borderColor={'pink.300'}>
              <Box 
                w={{lg : 80, sm : 48}}
                // w={'60%'}
                h={'55%'} 
                display='block' 
                overflowX='hidden'
                backgroundImage={background}
                rounded={'xl'}
                borderRadius={blob}
                ></Box>
          </GridItem>
          <GridItem xs={12} md={12} lg={6} h='full'>
                <Text textAlign={'center'} fontWeight='semibold'>Change Below</Text>
                <Grid 
                  templateColumns={'repeat(3, 1fr)'} 
                  mt={3} 
                  width={'100%'}
                  height={12}
                  border='1px' 
                  borderColor={'blue.400'} 
                  borderRadius={'10px'}
                  display={'flex'}
                  justifyContent={'start'}
                  alignItems={'center'}
                  px={3}
                  gap={4}
                  >
                    <Text fontWeight={'bold'}>Gradient Color :</Text>
                        <Input type='color' value={color1} w={16}
                        onChange={(e) => setColor1(e.target.value)}/>
                        <Input type='color' value={color2} w={16}
                        onChange={(e) => setColor2(e.target.value)}/>
                        <Input type='color' value={color3} w={16}
                        onChange={(e) => setColor3(e.target.value)}/>
                  </Grid>
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
                  <CustomSlider min={0} max={360} step={15} title={'Angle'} change={(e) => setAngle(e)}/>
                </Stack>
                : null
                }
                {typeGrad == 'radial' ? 
                <Grid templateColumns={'repeat(2, 1fr)'} gap={4} mt={3} px={5}>
                 <Button 
                  colorScheme='teal'
                  variant={radialType == 'circle' ? 'solid' : 'outline'}
                  onClick={() => setRadialType('circle')}
                  >Circle</Button>
                 <Button 
                  colorScheme='teal'
                  variant={radialType == 'ellipse' ? 'solid' : 'outline'}
                  onClick={() => setRadialType('ellipse')}
                  >Ellipse</Button>
                </Grid>
                : null
                }
                {typeGrad != 'linear' ? 
                <Stack>
                  <CustomSlider min={0} max={125} title={'Center X-axis'} change={(e) => setXAxis(e)}/>
                  <CustomSlider min={0} max={125} title={'Center Y-Axis'} change={(e) => setYAxis(e)}/>
                </Stack>
                : null
                }
                <Grid border='1px' h={'full'} borderColor={'blue.400'} borderRadius={'10px'} p={5}>
                  <CustomSlider min={20} max={100} value={border1} title={'Border Radius 1'} change={(e) => onBlob(setBorder1,e)}/>
                  <CustomSlider min={20} max={100} value={border2} title={'Border Radius 2'} change={(e) => onBlob(setBorder2,e)}/>
                  <CustomSlider min={20} max={100} value={border3} title={'Border Radius 3'} change={(e) => onBlob(setBorder3,e)}/>
                  <CustomSlider min={20} max={100} value={border4} title={'Border Radius 4'} change={(e) => onBlob(setBorder4,e)}/>
                </Grid>
            </GridItem>
        </Grid>
        <Grid 
          templateColumns={'repeat(2, 1fr)'} 
          gap={4} mt={5}
          display={'flex'}
          flexDirection={{xs : 'column', sm : 'column', md : 'row', lg:'row'}}
          flexWrap={'wrap'}
          >
          <Box bg='gray.800' h={'full'} px={5} py={3} mt={3}>
            <Flex justifyContent={'space-between'} color='blue.300'  cursor={'pointer'}>
              <Text fontSize={'11px'}>HTML</Text>
              <CopyToClipboard text={'<div class="blob"></div>'}>
                <Icon as={MdContentCopy}  onClick={() => onCopy(`HTML Code Copied`)}/>
              </CopyToClipboard>
            </Flex>
            <Code 
              bg='gray.800'
              color='blue.300' 
              fontSize={'11px'} mt={3}
              children='<div class="blob"></div>'
              >
            </Code>
          </Box>
          <Box bg='gray.800' h={'full'} px={5} py={3} mt={3}>
            <Flex justifyContent={'space-between'} color='blue.300' cursor={'pointer'}>
              <Text fontSize={'11px'}>CSS</Text>
              <CopyToClipboard text={gradient}>
                <Icon as={MdContentCopy} onClick={() => onCopy(`CSS Code Copied`)}/>
              </CopyToClipboard>
            </Flex>
            <Box display={'flex'} flexDirection={'column'}>
              <Code 
                bg='gray.800'
                color='blue.300' 
                fontSize={'11px'} mt={3}
                children={`.blob {`}
                >
              </Code>
              <Code 
                bg='gray.800'
                color='blue.300' 
                fontSize={'11px'} ml={3}
                >
                  background-image : {background}; <br/>
                  borderRadius : {blob};
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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Grid>
    </Layout>
  )
}

export default BlobMaker