import { HStack, VStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IoLogoGithub} from 'react-icons/io'
import { ImLinkedin2} from 'react-icons/im'
import {IoLogoInstagram} from 'react-icons/io'

const Footer = () => {
  return (
    <VStack alignItems={'center'} color='blue.400' py='10' borderTop={'2px'} borderTopColor='blue.400' mt={'5'}>
        <Text>Proudly made in Indonesia by Novalia</Text>
        <HStack color='pink.400'>
            <Icon as={IoLogoGithub}/>
            <Icon as={ImLinkedin2}/>
            <Icon as={IoLogoInstagram}/>
        </HStack>
        <Text>Deploy With Vercel</Text>
    </VStack>
  )
}

export default Footer
