import { Box, Circle, Flex, Square, Text } from "@chakra-ui/react";

const SmallBox = ({isFirst, isLast, date, description}) => {
    return(
        <Flex h={"85px"} w="full">
            <Flex position={"relative"} justifyContent={"center"} alignItems="center">
                <Circle position={"absolute"} zIndex={"10"} size="22px" bg={"white"}></Circle>
                <Box pt={isFirst ? "12px" : "0"} pb={isLast ? "12px" : "0"} h={"full"}>
                    <Box h={"full"} w="2px" bg={"white"}></Box>
                </Box>
            </Flex>
            <Box  py="12px" ml="2em" w={"full"} h="full">
                <Box  borderRadius={"0.6em"} bg="white" w={"full"} h="full" py="0.4em" px="2em">
                    <Box>
                        <Text color="primary.red" fontSize={"0.8em"} fontWeight="semibold">{date}</Text>
                        <Text>{description}</Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default function Timeline() {
    let timeline = [{
        date: "10 April 2022 - 20 May 2022",
        description: "1st Round Submission"
    }, {
        date: "30 May 2022",
        description: "Top 6 Finalist Announcement"
    }, {
        date: "1 June 2022 - 21 June 2022",
        description: "Incubation Period for Finalist"
    }, {
        date: "25 June 2022",
        description: "Demo Day & Winner Announcement"
    }]

    return(
        <Flex 
            py="2em"
            w="100%"
            bgImg="url('/assets/images/background/timeline.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            justifyContent={"center"}
        >
            <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} w="50%">
                <Text fontSize={"2em"} color="white" alignContent={"center"}>
                    Timeline
                </Text>
                <Box w="full">
                    {timeline.map((data, id) => {
                        if (id == 0) {
                            return <SmallBox isFirst={true} key={id} date={data.date} description={data.description}/>
                        } else if (id == timeline.length-1) {
                            return(
                                <SmallBox isLast={true} key={id} date={data.date} description={data.description}/>
                            )
                            }
                        return(
                            <SmallBox key={id} date={data.date} description={data.description}/>
                        )
                    })}
                </Box>
            </Flex>
        </Flex>
    )
}