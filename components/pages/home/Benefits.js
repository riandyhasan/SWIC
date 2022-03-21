import react from "react";
import { Flex, Box, Square, Text } from "@chakra-ui/react";
import Image from "next/image";

const Template = (props) => {
    return (
        <Flex flexDirection='column' justifyContent='start' alignItems='' mx='2em' w='full'>
            <Flex w='full' h='12rem' position='relative'>
                <Image
                src={`/assets/images/logo/logo-${props.src}.png`}
                layout="fill"
                />
            </Flex>
            <Text textAlign='center' fontWeight='semibold' mt='1em'>
                {props.text}
            </Text>
        </Flex>
    )
}

export default function Benefits() {
    return(
        <Flex justifyContent='space-between' alignItems='center' color='white' mt='3rem'>
            <Image 
                src="/assets/images/pattern/benefits-left.png"
                width={200}
                height={500}
            />
            <Flex justifyContent='center' w='40rem'>
                <Template src='empathy' text='Bridging digital gap between income levels' />
                <Template src='redcross' text='Endeavoring accssible digital healthcare technology for all' />
                <Template src='donation' text='Empowering rural communities through transformation' />
            </Flex>
            <Image 
                src="/assets/images/pattern/benefits-right.png"
                width={200}
                height={500}
            />
        </Flex>
    )
}