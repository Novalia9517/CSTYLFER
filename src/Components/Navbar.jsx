import React from 'react'
import { Box, HStack, Text, InputGroup, InputLeftElement, Input, Icon, Flex, Spacer} from '@chakra-ui/react'
import { Search2Icon, MoonIcon} from '@chakra-ui/icons'
import { IoLogoGithub} from 'react-icons/io'
import { ImLinkedin2} from 'react-icons/im'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex h='3rem' w='100%' borderColor='gray.200' px='32' py='10' alignItems='center'>
        <Link as={ReactLink} to='/' _hover={{ textDecorationn : 'none'}}>
            <Text fontSize='36px' color='pink.200' textShadow='0px 3px 5px skyblue' fontWeight='bold'>CStylfer</Text>
        </Link>
      <Spacer/>
      <InputGroup w='40%' borderColor='blue.300'>
        <InputLeftElement
          pointerEvents='none'
          children={<Search2Icon color='#FFC6D3' fontWeight={'semibold'}/>}
        />
        <Input type='text' color='#1385EF' bg={'white'} placeholder='Phone number' focusBorderColor='#1385EF' _placeholder={{ opacity: 0.4, color: '#FFC6D3' }}/>
      </InputGroup>
      <Spacer/>
      <HStack color='#1385EF'>
        <Icon as={IoLogoGithub}/>
        <Icon as={ImLinkedin2}/>
        <MoonIcon/>
      </HStack>
    </Flex>

  )
}

export default Navbar