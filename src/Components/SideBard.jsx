import React from 'react'
import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { CiSquareQuestion} from 'react-icons/ci'
import { IoIosCube, IoIosImage, IoMdImages, IoMdWater} from 'react-icons/io'
import { GiGlassHeart} from 'react-icons/gi'
import {MdOutlineGradient} from'react-icons/md'
import { Link as ReactLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'


const SideBard = () => {
  return (
    <Stack h='90vh' w='20%' mx={10} border={'1px'} borderColor='blue.300' alignItems={'left'} py='10' px='8' color={'gray.500'} cursor='pointer' fontWeight={'semibold'}>
        <Link as={ReactLink} to='/get-started' _hover={{textDecoration: 'none', textShadow : '1px 1px 1px blue'}}>
            <HStack color={'blue.300'}>
                <Icon as={CiSquareQuestion}/>
                <Text>Get Started</Text>
            </HStack>
        </Link>
        <Link as={ReactLink} to='/neu' _hover={{textDecoration: 'none', textShadow : '1px 1px 1px skyblue'}}>
        <HStack>
            <Icon as={IoIosCube}/>
            <Text>Neumhorphisme</Text>
        </HStack>
        </Link>
        <Link as={ReactLink} to='/glass' _hover={{textDecoration: 'none', textShadow : '1px 1px 1px skyblue'}}>
        <HStack>
            <Icon as={GiGlassHeart}/>
            <Text>Glassmhorphisme</Text>
        </HStack>
        </Link>
        <Link as={ReactLink} to='/gradient' _hover={{textDecoration: 'none', textShadow : '1px 1px 1px skyblue'}}>
        <HStack>
            <Icon as={MdOutlineGradient}/>
            <Text>Gradient Generator</Text>
        </HStack>
        </Link>
        <Link as={ReactLink} to='/geo-art' _hover={{textDecoration: 'none', textShadow : '1px 1px 1px skyblue'}}>
        <HStack>
            <Icon as={IoIosImage}/>
            <Text>Geometric Art</Text>
        </HStack>
        </Link>
        <Link as={ReactLink} to='/bg-pattern' _hover={{textDecoration: 'none', textShadow : '1px 1px 1px skyblue'}}>
        <HStack>
            <Icon as={IoMdImages}/>
            <Text>Background Pattern</Text>
        </HStack>
        </Link>
        <Link as={ReactLink} to='/blob-maker' _hover={{textDecoration: 'none', textShadow : '1px 1px 1px skyblue'}}>
        <HStack>
            <Icon as={IoMdWater}/>
            <Text>Blob Maker</Text>
        </HStack>
        </Link>
    </Stack>
  )
}

export default SideBard