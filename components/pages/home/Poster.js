import { Flex, Image } from "@chakra-ui/react";

export default function Poster() {
    return(
        <Flex justifyContent={"center"} w="100%">
            <Flex w={{ base:"80%", md:"40%" }} > 
                <Image src="https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/assets%2Fimages%2Fposter.png?alt=media&token=f9b393db-a6b3-4881-8295-c118d064c012" />
            </Flex>   
        </Flex>

    )
}