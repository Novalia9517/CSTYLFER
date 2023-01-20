import { Card, CardBody, Image, Stack, Heading, Text, Divider, HStack, Link } from "@chakra-ui/react";
import React from 'react'

const HomeCard = ({title, description, img, link}) => {
  return (
    <Card maxW='sm' p='5'  boxShadow='1px 2px 5px #75ADE1'>
    <CardBody>
        <HStack gap={3}>
            <Image w={'50%'}
            src={img}
            alt='Green double couch with wooden legs'
            borderRadius='10px'
            h={20}
            />
            <Link href={link} _hover={{textDecorationColor : '#75ADE1'}}>
                <Heading size='sm' color={'blue.300'}>{title}</Heading>
            </Link>
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