import { Card, CardBody, Image, Stack, Heading, Text, Divider, HStack } from "@chakra-ui/react";
import React from 'react'

const HomeCard = ({title, description, img}) => {
  return (
    <Card maxW='sm' p='5'  boxShadow='1px 2px 5px #75ADE1'>
    <CardBody>
        <HStack gap={3}>
            <Image w={'50%'}
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Heading size='sm' color={'blue.300'}>{title}</Heading>
        </HStack>
        <Stack mt='6' spacing='3' h='42'>
            <Text fontSize={'14px'} fontWeight='semibold' color={'gray.600'}>{description}</Text>
        </Stack>
    </CardBody>
    <Divider />
    {/* <CardFooter>
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
            Try now
        </Button>
        </ButtonGroup>
    </CardFooter> */}
    </Card>
  )
}

export default HomeCard