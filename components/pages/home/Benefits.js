import react from "react";
import { Flex, Box, Square, Text } from "@chakra-ui/react";
import Image from "next/image";

const Template = (props) => {
    let s = ['4rem', '7rem', '9rem', '12rem']
    let s1 = ['0.7em', '0.7em', '0.7em', '1em']
    let s2 = ['0.7em', '0.7em', '0.7em', '2em']
    return (
        <Flex flexDirection='column' justifyContent='start' alignItems='' mx={s2} w='full'>
            <Flex w='full' h={s} position='relative'>
                <Image
                src={`/assets/images/logo/logo-${props.src}.png`}
                layout="fill"
                objectFit="contain"
                />
            </Flex>
            <Text textAlign='center' fontSize={s1} fontWeight='semibold' mt='1em'>
                {props.text}
            </Text>
        </Flex>
    )
}

export default function Benefits() {
    let s = ['5em', '6em', '7em', '10em']
    let s1 = ['full', 'full', 'full', '40rem']
    let s2 = ['0.5em', '2.5m', '4em', '0']
    return(
        <Flex justifyContent='space-between' alignItems='center' color='white' mt={['0.6rem', '1em', '2em', '3em']}>
            <Square size={s} display={['none', 'none', 'none', 'flex']}>
                <Image 
                    src="/assets/images/pattern/benefits-left.png"
                    width={200}
                    height={500}
                />
            </Square>
            <Flex justifyContent='center' w={s1} px={s2}>
                <Template src='empathy' text='Bridging digital gap between income levels' />
                <Template src='redcross' text='Endeavoring accssible digital healthcare technology for all' />
                <Template src='donation' text='Empowering rural communities through transformation' />
            </Flex>
            <Square size={s} display={['none', 'none', 'none', 'flex']}>
                <Image 
                    src="/assets/images/pattern/benefits-right.png"
                    width={200}
                    height={500}
                />
            </Square>
        </Flex>
    )
}