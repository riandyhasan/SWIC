import { Box, Circle, Flex, Square, Text } from "@chakra-ui/react";

const SmallBox = ({isFirst, isLast}) => {
    return(
        <Flex h={"85px"} w="full">
            <Flex position={"relative"} justifyContent={"center"} alignItems="center">
                <Circle position={"absolute"} zIndex={"10"} size="22px" bg={"white"}></Circle>
                <Box pt={isFirst ? "12px" : "0"} pb={isLast ? "12px" : "0"} h={"full"}>
                    <Box h={"full"} w="2px" bg={"white"}></Box>
                </Box>
            </Flex>
            <Box  py="12px" ml="2em" w={"full"} h="full">
                <Box  borderRadius={"0.6em"} bg="white" w={"full"} h="full"></Box>
            </Box>
        </Flex>
    )
}

export default function Timeline() {
    return(
        <Flex 
            py="2em"
            w="100%"
            bgImg="url('/assets/images/background/timeline.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            justifyContent={"center"}
        >
            <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} w="80%">
                <Text fontSize={"2em"} color="white" alignContent={"center"}>
                    Timeline
                </Text>
                <Box w="full">
                    <SmallBox isFirst={true}></SmallBox>
                    <SmallBox></SmallBox>
                    <SmallBox></SmallBox>
                    <SmallBox></SmallBox>
                    <SmallBox></SmallBox>
                    <SmallBox isLast={true}></SmallBox>
                </Box>
            </Flex>
        </Flex>
    )
}