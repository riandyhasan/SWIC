import React from "react";
import { Box, Text, Flex, Heading, Square } from "@chakra-ui/react";
import Countdown from "./Countdown";
import Image from "next/image";

export default function Jumbotron() {
    return(
        <Flex justifyContent='space-between' alignItems='center' p='5em' color='white'>
            <Box>
                <Heading fontSize='4em' fontWeight='medium'>
                    Smarter World <br/> Innovation Challenge
                </Heading>
                <Text fontSize='0.8em' pt='0.85em' pb='1.2em'>
                    The Smarter World Innovation Challenge [SWIC] is an official T20 impact <br/>
                    business and engineering innovation marketplace, aiming to unlock global digital potential to fulfill <br/> 
                    meaningful digital connectivity, cybersecurity, and empowerment through the three vision.        
                </Text>
                <Countdown />
                <Square fontSize='0.8em' cursor='pointer' color='black' mt='1.4em' borderRadius='1.4em' p='0.6em' bg='secondary.yellow' w='25%'>Register Now!</Square>
            </Box>
            <Box position='relative'>
                <Image 
                    src={'/assets/images/pattern/jumbotron.png'}
                    width='500'
                    height='250'
                    
                />
            </Box>
        </Flex>
    )
}