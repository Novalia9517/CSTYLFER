import { Heading, Text, Box, Link } from '@chakra-ui/react'
import React from 'react'
import Layout from '../Components/Layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const GetStarted = () => {
  const designs = [
    {
      title : 'Glassmhorphisme',
      desc : 'Glassmorphism is a design style, coined by Michal Malewicz from Hype4.Academy to connect and combine all of the uses of the “frosted glass” effect in the UI. By categorizing it and giving it a common name, it became easier to find and learn about it from resources all around the web.',
      link : 'https://hype4.academy/tools/glassmorphism-generator'
    },
    {
      title : 'Gradient Generator',
      desc : 'Solid color is OK, but gradient makes the design look more modern. Playing with background image, should we?',
      link : 'https://www.magicpattern.design/tools/gradient-generator'
    },
    {
      title : 'Background Pattern',
      desc : 'Background not should be just a color, it could be a pattern to make it more artistic',
      link : 'https://www.magicpattern.design/tools/css-backgrounds'
    },
    {
      title : 'Blob Maker',
      desc : 'Playing with border radius to make it look like a blob.',
    },
    {
      title : 'Neumhorphisme',
      desc : 'Neumorphism embraces the idea of realism. Buttons should look like buttons, and UI elements should operate within the realms of physics. It believes that nothing is really flat, or floats above a surface, as flat design tends to suggest. However, it also believes that UI shouldn’t be draped in leather or baize. Instead, it should look and feel like a user interface made from materials that actual physical interfaces might be made from.',
      link : 'https://neumorphism.io/#e0e0e0'
    },
  ]
  return (
    <Layout>
        <Text fontSize={'3xl'} fontWeight='bold'>Getting Started</Text>
        <Box display='flex' fontSize={'lg'} mt='5' fontWeight={'semibold'}>
            <Text>What to do to start</Text>
            <Text color={'pink.300'} ml='2' fontWeight={'bold'}>CStylfer</Text>
        </Box>
        <Box px={'10'} mt='5'>
            <Text>No need to do. Just choose  what theme you wanna try on the side bar, play with it. Get  CSS code that you need, copy it to your Web Project</Text>
            <Text mt={5} fontWeight='semibold'>Have fun and enjoy</Text>
        </Box>
        <Text fontSize={'2xl'}>About The Designs theme</Text>
        {designs?.map((item, i) => {
          return (
            <Box mt={2}>
              <Text fontSize={'xl'} fontWeight={'semibold'} color={'blue.300'}>{item.title}</Text>
              <Text ml={2}>{item.desc}</Text>
              {item.link && <Text ml={2}>Reference link for this design is
                <Link href={item.link} isExternal ml={2} color={'blue.300'}>
                  here<ExternalLinkIcon mx='2px' />
                </Link>
              </Text>}
            </Box>
          )
        })

        }
    </Layout>
  )
}

export default GetStarted