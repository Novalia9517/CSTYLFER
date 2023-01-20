import React, { useState} from 'react'
import { Box, Hide, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { CiSquareQuestion} from 'react-icons/ci'
import { IoIosCube, IoIosImage, IoIosQuote, IoMdImages, IoMdWater} from 'react-icons/io'
import { GiGlassHeart} from 'react-icons/gi'
import {MdOutlineGradient} from'react-icons/md'
import { Link as ReactLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import { useEffect } from 'react'


const SideBard = () => {
    const activeLink = window.location.pathname
    const dataPath = [
        {
            title : 'Get Started',
            icon : IoIosQuote,
            link : '/get-started'
        },
        {
            title : 'Glassmhorphisme',
            icon : GiGlassHeart,
            link : '/glass'
        },
        {
            title : 'Neumhorphisme',
            icon : IoIosCube,
            link : '/neu'
        },
        {
            title : 'Gradient Generator',
            icon : MdOutlineGradient,
            link : '/gradient'
        },
        {
            title : 'Geometric Art',
            icon : IoIosImage,
            link : '/geo-art'
        },
        {
            title : 'Background Pattern',
            icon : IoMdImages,
            link : '/bg-pattern'
        },
        {
            title : 'Blob Maker',
            icon : IoMdWater,
            link : '/blob-maker'
        },
    ]


  return (
    <Stack 
        h='90vh' w='20%' mx={10} 
        border={'1px'} 
        borderColor='blue.300' 
        alignItems={'left'} 
        py='10' px='8' 
        color={'gray.500'} 
        cursor='pointer'>
        { dataPath.map((item, i) => {
            return <Link 
                        key={i}
                        as={ReactLink} 
                        to={item.link} 
                        _hover={{textDecoration: 'none', textShadow : '1px 1px 1px blue'}}
                        >
                        <HStack 
                            color={activeLink == item.link ? 'blue.300' : 'gray.400'}
                            fontWeight={activeLink == item.link ? 'bold' : 'semibold'}
                            
                            >
                            <Icon as={item.icon}/>
                            <Hide below='md'>
                                <Text fontSize={'12px'}>{item.title}</Text>
                            </Hide>
                        </HStack>
                    </Link>
        })}
        
    </Stack>
  )
}

export default SideBard