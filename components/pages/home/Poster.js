import { Flex, Image } from "@chakra-ui/react";

export default function Poster() {
    return(
        <Flex justifyContent={"center"} h={["25rem", "40rem"]} w="full" > 
            <Image src="/assets/images/background/poster.png" />
        </Flex>
    )
}