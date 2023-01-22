import React from 'react'
import Layout from '../Components/Layout'
import {
  Flex,
  Box,
  Text,
  Button,
  HStack,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Code,
  Icon,
  Grid
} from '@chakra-ui/react'
import { useState } from 'react'
import CustomSlider from '../Components/CustomSlider'
import { useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { MdContentCopy} from 'react-icons/md'




const BgPattern = () => {
  const [bgColor, setBgColor] = useState('#fefaff')
  const [color, setColor] = useState('#444cf7')
  const [opacity, setOpacity] = useState(0.8)
  const [size, setSize] = useState(22)

  const styles = {
    volca : {
      opacity : opacity,
      borderRadius : '10px',
      backgroundSize : `${Math.ceil(size * 2)}px ${Math.ceil(size * 2)}px`, 
      backgroundImage : `radial-gradient(${color} 0.8500000000000001px, transparent 0.8500000000000001px), radial-gradient(${color} 0.8500000000000001px, ${bgColor} 0.8500000000000001px)`, 
      backgroundPosition : `0 0,17px 17px`,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    },
    lineTick : {
      opacity: opacity,
      borderRadius:'10px',
      backgroundImage : `repeating-linear-gradient(to right, ${color}, ${color} 2px,${bgColor} 2px,${bgColor})`,
      backgroundSize : `${Math.ceil(size * 1/3)}px ${Math.ceil(size * 1/3)}px`,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    },
    line2 : {
      opacity : opacity,
      borderRadius:'10px',
      backgroundImage : `linear-gradient(to right, ${color}, ${color} 11px,${bgColor} 11px,${bgColor})`,
      backgroundSize : `${size}px 100%`,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    },
    diagonal : {
      opacity : opacity,
      borderRadius:'10px',
      backgroundImage: ` repeating-linear-gradient(45deg, ${color} 0, ${color} 2.2px,${bgColor} 0,${bgColor} 50%)`,
      backgroundSize : `${size}px ${size}px`,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    },
    square : {
      opacity : opacity,
      borderRadius:'10px',
      backgroundImage : `linear-gradient(${color} 2.2px, transparent 2.2px), linear-gradient(to right, ${color} 2.2px,${bgColor} 2.2px)`,
     backgroundSize : `${Math.ceil(size * 2)}px ${Math.ceil(size * 2)}px`,
     display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    },
    squareDiag : {
      opacity : opacity,
      borderRadius:'10px',
      backgroundImage : ` linear-gradient(-45deg,${bgColor} , ${bgColor} 50%, ${color} 50%, ${color})`,
      backgroundSize : `${Math.ceil(size * 2)}px ${Math.ceil(size * 2)}px`,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    }
  }

  const [activeBg, setActiveBg] = useState(styles.volca)
  const buttonStyle = {
    fontSize : 11,
    color : 'white',
    bg : 'blue',
  }

  const changeBg = (choose) => {
    setActiveBg(styles[choose])
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
  }

  console.log(bgColor)
  
  useEffect(() => {

  }, [activeBg, color, bgColor, opacity,styles, changeBg])
  return (
    <Layout>
        <Text fontSize={'3xl'} fontWeight='bold'>Background Pattern</Text>
        <Flex align='center' w={'full'} h={96} bg='blue.800' rounded={'md'} overflow="auto" justifyContent={'space-between'} alignItems='center' border='1px' borderColor={'pink.300'} px={4}>
              <VStack>
                <Box
                  h='100px' 
                  w='200px' 
                  style={styles.volca}
                  >
                    <Button size={'small'} p={2} bg={'blue.300'} style={buttonStyle} onClick={() => changeBg('volca')}>Try this Pattern</Button>
                  </Box>
                <Box 
                  h='100px' 
                  w='200px'
                  style={styles.lineTick}
                  >
                    <Button  size={'small'} p={2} bg={'blue.300'} style={buttonStyle} onClick={() => changeBg('lineTick')}>Try this Pattern</Button>
                    </Box>
                <Box
                  h='100px' 
                  w='200px' 
                  style={styles.line2}
                  onClick={() => changeBg('line2')}
                  >
                      <Button  size={'small'} p={2} bg={'blue.300'} style={buttonStyle} onClick={() => changeBg('line2')}>Try this Pattern</Button>
                    </Box>
              </VStack>
            <Box 
              w={'500px'} 
              h={'70%'} 
              display='block' 
              overflowX='hidden' 
              style={activeBg}
              ></Box>
              <VStack>
                <Box
                  h='100px' 
                  w='200px' 
                  style={styles.diagonal}
                  >
                      <Button size={'small'} p={2} bg={'blue.300'} style={buttonStyle} onClick={() => changeBg('diagonal')}>Try this Pattern</Button>
                  </Box>
                <Box
                  h='100px' 
                  w='200px' 
                  style={styles.square}
                  >
                      <Button  size={'small'} p={2} bg={'blue.300'} style={buttonStyle} onClick={() => changeBg('square')}>Try this Pattern</Button>
                  </Box>
                <Box
                  h='100px' 
                  w='200px'
                  style={styles.squareDiag}
                  >
                      <Button  size={'small'} p={2} bg={'blue.300'} style={buttonStyle} onClick={() => changeBg('squareDiag')}>Try this Pattern</Button>
                  </Box>
              </VStack>
        </Flex>
        <Flex gap={4} mt={3} border={'1px'} borderColor={'blue.300'} p={3}>
          <Box w={'50%'} >
              <CustomSlider 
                min={0} 
                max={1} 
                step={0.01}  
                value={opacity} 
                title={'Opacity'}
                change={(e) => setOpacity(e)}/>
              <CustomSlider 
                min={2} 
                max={200} 
                step={5} 
                value={size} 
                title={'Size'} 
                change={(e) => setSize(e)}/>
            </Box>
            <Box w={'50%'}>
              <InputGroup size='sm' w={'40'} color='blue.300' border={'1px solid skyblue'}>
                  <InputLeftAddon children='Background' bg={'white'} color='blue.300'/>
                  <Input 
                    type='color' 
                    _placeholder={{opacity : '0.4', color : 'skyblue'}} 
                    onChange={(e) =>setBgColor(e.target.value)}/>
              </InputGroup>
              <InputGroup size='sm' w={'40'} color='blue.300' border={'1px solid skyblue'}>
                  <InputLeftAddon children='Pattern Color' bg={'white'} color='blue.300'/>
                  <Input
                    type='color'  
                    _placeholder={{opacity : '0.4', color : 'skyblue'}} 
                    onChange={(e) =>setColor(e.target.value)}/>
              </InputGroup>
            </Box>
        </Flex>
        <Flex gap={3}>
          <Box w={'50%'}bg='gray.800' h={'24'} px={5} py={3} mt={5}>
            <Flex justifyContent={'space-between'} color='blue.300'>
              <Text fontSize={'11px'}>HTML</Text>
              <CopyToClipboard text={`<div class='glass'></div>`}>
                <Icon as={MdContentCopy} onClick={() => onCopy(`<div class='pattern'></div>`)}/>
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
          <Grid w={'50%'} templateRows={'repeat(2, 1fr)'} gap={1} mt='3'>
              <Box bg='gray.800' h={''} px={5} py={3}>
                <Flex justifyContent={'space-between'} color='blue.300'>
                  <Text fontSize={'11px'}>CSS</Text>
                  <CopyToClipboard text={activeBg}>
                    <Icon 
                      as={MdContentCopy} 
                      onClick={() => onCopy(`CSS Code Copied`)}/>
                  </CopyToClipboard>
                </Flex>
                <Box 
                  display={'flex'} 
                  flexDirection={'column'}>
                  <Code 
                    bg='gray.800'
                    color='blue.300' 
                    fontSize={'11px'} mt={3}
                    children={`.pattern : {`}
                    />
                  <Code 
                    ml={5}
                    bg='gray.800'
                    color='blue.300' 
                    fontSize={'11px'}
                    >
                      width : 200px //custom your own width <br/>
                      height : 200px //custom your own height <br/>
                      opacity : {activeBg.opacity}; <br/>
                      border-radius : {activeBg.borderRadius}; <br/>
                      background-size : {activeBg.backgroundSize}; <br/>
                      background-image : {activeBg.backgroundImage}; <br/> 
                      background-position : {activeBg.backgroundPosition}; <br/>
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
        </Flex>
    </Layout>
  )
}

export default BgPattern