import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Place = ({caption, description}) => {
    return(
        <Flex justifyContent={"center"} alignItems={"center"} h={["10em", "33%"]} >
            <Flex h={["40px", "60px"]} w={["3em", "5.7em"]}>
                <img src="/assets/images/pattern/prize.png" alt="img" />
            </Flex>
            <Box>
                <Text fontSize={["1em", "1.2em"]} fontWeight="bold">{caption}</Text>
                <Text fontSize={["0.6em", "1em"]}>{description}</Text>
            </Box>
        </Flex>
    )
}

export default function Prize() {
    let h = ["14em", "40vw", "30vw", "26vw"]
    let w = ["0","0","0","50%"]
    let w2 = ["100%","100%","100%","50%"]

    let prizes = [{
        caption: "1st Place",
        description: 
        <UnorderedList>
            <ListItem>USD 3000 + Living Lab R&D</ListItem>
            <ListItem>Full acomodation during incubation and demo day</ListItem>
        </UnorderedList>
    }, {
        caption: "2nd Place",
        description:
        <UnorderedList>
            <ListItem>USD 2000 + Living Lab R&D</ListItem>
            <ListItem>Full acomodation during incubation and demo day</ListItem>
        </UnorderedList>
    }, {
        caption: "3rd Place",
        description: 
        <UnorderedList>
            <ListItem>USD 1000 + Living Lab R&D</ListItem>
            <ListItem>Full acomodation during incubation and demo day</ListItem>
        </UnorderedList>
    }]

    return(
        <Flex w="full" flexDirection={"column"} justifyContent={"center"} alignItems="center">
            <Text
            fontSize={["1.6em", "2.4em"]}
            fontWeight="semibold"
            color="primary.red"
            py="0.7em">
                Prize
            </Text>
            <Flex w="full">
                <Flex flexDirection={"column"} h={h} w={w2}>
                    {prizes.map((data, id) => {
                        return(
                            <Place key={id} caption={data.caption} description={data.description} />
                        )
                    })}
                </Flex>
                <Box h={h} w={w}>
                    <img src="/assets/images/background/prize.png" alt="img" />
                </Box>
            </Flex>
        </Flex>
    )
}