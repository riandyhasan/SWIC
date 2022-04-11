import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

const Place = () => {
    return(
        <Flex justifyContent={"center"} alignItems={"center"} h="33%" >
            <Flex h="60px" w="5.7em">
                <img src="/assets/images/pattern/prize.png" alt="img" />
            </Flex>
            <Box>
                <Text fontSize={"1.2em"} fontWeight="bold">1st Place</Text>
                <Text>- USD 3000 + Living Lab R&D</Text>
                <Text>- Full acomodation during incubation and demo day</Text>
            </Box>
        </Flex>
    )
}

export default function Prize() {
    let h = ["50vw", "40vw", "30vw", "26vw"]
    let w = ["0","0","0","50%"]
    let w2 = ["100%","100%","100%","50%"]
    return(
        <Flex w="full" flexDirection={"column"} justifyContent={"center"} alignItems="center">
            <Text
            fontSize={"2em"}
            fontWeight="semibold"
            color="primary.red"
            py="0.7em">
                Prize
            </Text>
            <Flex w="full">
                <Flex flexDirection={"column"} h={h} w={w2}>
                    <Place />
                    <Place />
                    <Place />

                </Flex>
                <Box h={h} w={w}>
                    <img src="/assets/images/background/prize.png" alt="img" />
                </Box>
            </Flex>
        </Flex>
    )
}