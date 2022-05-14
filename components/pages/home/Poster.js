import { Flex, Image } from "@chakra-ui/react";

export default function Poster() {
    return(
        <Flex justifyContent={"center"} w="100%">
            <Flex w={{ base:"80%", md:"40%" }} > 
                <Image src="/assets/images/background/poster.png" />
            </Flex>   
        </Flex>

    )
}