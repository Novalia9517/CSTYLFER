import { HStack, VStack, Icon, Text, Tooltip, Link } from '@chakra-ui/react'
import React from 'react'
import { IoLogoGithub} from 'react-icons/io'
import { ImLinkedin2} from 'react-icons/im'
import {IoLogoInstagram} from 'react-icons/io'

const Footer = () => {
  return (
    <VStack alignItems={'center'} color='blue.400' py='10' borderTop={'2px'} borderTopColor='blue.400' mt={'5'}>
        <Text>Proudly made in Indonesia by Novalia</Text>
        <HStack color='pink.400'>
          <Tooltip label='Go to Novalia`S Github' bg='blue.300' color='white'>
            <Link href='https://github.com/Novalia9517' isExternal>
            <Icon as={IoLogoGithub} />
            </Link>
          </Tooltip>
          <Tooltip label='Go to Novalia`S Linkedin' bg='blue.300' color='white'>
            <Link href='https://www.linkedin.com/in/nova-lia-53b911261/' isExternal>
            <Icon as={ImLinkedin2}/>
            </Link>
          </Tooltip>
            {/* <Icon as={IoLogoInstagram}/> */}
        </HStack>
        <Text>Deploy With Vercel</Text>
    </VStack>
  )
}

export default Footer
