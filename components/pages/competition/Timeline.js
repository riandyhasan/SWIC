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
                <Box  borderRadius={"0.6em"} bg="white" w={"full"} h="full" py="0.4em" px={["0.5em", "2em"]}>
                    <Box>
                        <Text color="primary.red" fontSize={["0.7em", "0.8em"]} fontWeight="semibold">{date}</Text>
                        <Text color="primary.blue" fontSize={["0.6em", "1em"]}>{description}</Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default function Timeline() {
    let timeline = [{
        date: "13 April 2022",
        description: "1st Round Submission Period"
    }, {
        date: "26 April 2022",
        description: "Opening Ceremony"
    }, {
        date: "04 June 2022",
        description: "1st Round Assesment"
    }, {
        date: "06 July 2022",
        description: "Top 18 Semi-finalists Announcement"
    }, {
        date: "07 July 2022 - 21 August 2022",
        description: "Incubation and Second Round Submission"
    }, {
        date: "22 August - 01 Sept 2022",
        description: "Second Round Assessment"
    }, {
        date: "02 Sept 2022",
        description: "Top 9 Announcement"
    }, {
        date: "05 Sept 2022",
        description: "Demo Day and Top 3 Announcement"
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
            <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} w={["80%", "70%"]}>
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