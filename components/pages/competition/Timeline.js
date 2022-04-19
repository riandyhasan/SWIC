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
            <Box  py={["18px", "16px"]} ml="2em" w={"full"} h="full">
                <Box  borderRadius={"0.6em"} bg="white" w={"full"} h="full" py="0.4em" px={["1em", "2em"]}>
                    <Box>
                        <Text color="primary.red" fontSize={["0.6em", "0.8em"]} fontWeight="semibold">{date}</Text>
                        <Text color="primary.blue" fontSize={["0.4em", "0.8em"]}>{description}</Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default function Timeline() {
    let timeline = [{
        date: "13 April 2022 - 26 April 2022",
        description: "Partners confirmation, Roadshow, Opening Ceremony"
    }, {
        date: "04 June 2022",
        description: "Call for Abstracts - 1st Round Submission Period, 1st Round Assessment"
    }, {
        date: "07 July 2022 - 02 September 2022",
        description: "Incubation Period, 2nd Round Assessment, Top 9 Announcement"
    }, {
        date: "05 September 2022",
        description: "Demo Day - T20 Indonesia Summit"
    }]

    return(
        <Flex 
            py={["1em", "2em"]}
            w="100%"
            bgImg="url('/assets/images/background/timeline.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            justifyContent={"center"}
        >
            <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} w={["90%", "90%"]}>
                <Text fontFamily={"coolvetica"}
            fontWeight="medium" fontSize={["1.6em", "2.4em"]} color="white" alignContent={"center"}>
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