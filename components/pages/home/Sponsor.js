import react from "react";
import { Flex, Box, Square, Text, Heading, Spacer } from "@chakra-ui/react";
import Image from "next/image";

const SponsorImage = ({src, size}) => {
    return(
        <Square position='relative' size={`${size}em`}>
            <Image 
                src={`/assets/images/logo/logo-${src}.png`}
                layout="fill"
            />
        </Square>
    )
};

export default function Sponsor() {
    return(
        <Flex flexDirection='column' alignItems='center' color='white' w="full" mt='6em' mb='5em'>
            <Flex flexDirection='column' alignItems='center' p='2.5rem' pt='1.5rem' w='82%' border='2px' borderColor='rgba(255, 255, 255, 0.25)' borderRadius='2rem' bg="rgba(255,255,255,0.3)">
                <Heading textAlign='center' fontSize='3em' fontWeight='medium'>
                    Sponsored By
                </Heading>
                <Flex w='full' justifyContent='center' mt='2em'>
                    <SponsorImage src='ITB' size='12' />
                    <Spacer />
                    <SponsorImage src='ITB' size='12' />
                    <Spacer />
                    <SponsorImage src='ITB' size='12' />
                    <Spacer />
                    <SponsorImage src='ITB' size='12' />
                    <Spacer />
                    <SponsorImage src='ITB' size='12' />
                </Flex>
                <Flex w='94%' justifyContent='center' mt='2em'>
                    <SponsorImage src='ITB' size='8' />
                    <Spacer />
                    <SponsorImage src='ITB' size='8' />
                    <Spacer />
                    <SponsorImage src='ITB' size='8' />
                    <Spacer />
                    <SponsorImage src='ITB' size='8' />
                    <Spacer />
                    <SponsorImage src='ITB' size='8' />
                    <Spacer />
                    <SponsorImage src='ITB' size='8' />
                    <Spacer />
                    <SponsorImage src='ITB' size='8' />
                </Flex>
            </Flex>
        </Flex>
    )
};