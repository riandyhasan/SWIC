import { Flex, Image, Square, Text } from "@chakra-ui/react";

export default function Guidebook() {
    return(
        <Flex
        w="100%"
        h={["220px", "300px", "300px"]}
        justifyContent="space-between"
        alignItems="center"
        mb="1em"
        mt="1em">
        <Image
          src="/assets/images/background/resetpass.png"
          maxH="300px"
          d={{ base: "none", md: "block" }}
        />
        <Flex h="full" w="full" justifyContent={"center"}>
          <Flex h="full" flexDirection="column" justifyContent="space-between" alignItems="center"> 
            <Text
            fontFamily={"coolvetica"}
            fontWeight="medium"
            fontSize={["1.6em", "2.4em"]}
            color={"primary.red"}>
                Competition Guidebook
            </Text>
            <Flex justifyContent={"center"}>
                <Image  w={["160px", "200px"]} src="/assets/images/background/guidebook.png" />
            </Flex>
            <a 
            href="https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Guideline.pdf?alt=media&token=190ce64d-3a3d-4546-96d1-bd7bdef3e91a"
            target="_blank" 
            rel="noreferrer" 
            cursor="pointer">
                <Square
                fontSize="0.8em"
                cursor="pointer"
                color="black"
                borderRadius={["1em", "1.4em"]}
                p="0.6em"
                py={["0.3em", "0.8em"]}
                bg="secondary.yellow"
                w={["7em", "10em"]}
                >
                Download
                </Square>
            </a>
          </Flex>
        </Flex>
        <Image
          src="/assets/images/background/resetpass.png"
          transform="rotate(180deg)"
          maxH="300px"
          d={{ base: "none", md: "block" }}
        />
      </Flex>
    )
}