import React from 'react'
import { Box, HStack, Image, Heading, Stack, Text} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Review = ({top, left, color, title, rev, id}) => {
    const one = '48% 52% 71% 29% / 67%  52% 48% 33%'
    const bord = {
        'one' : '48% 52% 71% 29% / 67%  52% 48% 33%',
        'two' : '42% 58% 35% 65% / 59%  48% 52% 41%',
        'three' :'42% 58% 76% 24% / 68% 62% 38% 32%'
    }
  return (
    <Box 
      as={motion.div}
      initial={{x : '40vw', y : '-50vh'}}
      animate={{x : '0', y : '0'}}
      mt={top} 
      ml={left} 
      h='200px' 
      w='200px' 
      bg={color} 
      borderRadius={bord[`${id}`]} zIndex={'-10'} 
      display='flex' 
      flexDirection={'column'} 
      justifyContent={'center'} 
      alignItems='center' 
      px={'12'}>
        <HStack gap={3}>
        {/* <Image w={'40%'}
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        /> */}
        <Heading size='sm' color={'white'}>{title}</Heading>
        </HStack>
        <Stack mt='6' spacing='3' h='42'>
            <Text fontSize={'14px'} fontWeight='semibold' color={'gray.600'}>{rev}</Text>
        </Stack>
        </Box>
  )
}

export default Review