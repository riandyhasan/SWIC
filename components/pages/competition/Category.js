import { Flex, Text, useBoolean } from "@chakra-ui/react";

const SquareTemp = ({title, desc}) => {
    const [viewCase, setViewCase] = useBoolean();

    return(
        <Flex
        p="2px"
        mb="1em"
        mx={["0.2em", "1.6em"]}
        justifyContent="center"
        alignItems="center"
        borderRadius={"1em"}
        bgGradient="linear(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)"
        onMouseEnter={setViewCase.on}
        onMouseLeave={setViewCase.off}
        >
            <Flex 
            position={"relative"}
            cursor="pointer"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            bg="gray.100"

            borderRadius={"1em"}
            w={["10em", "17em"]}
            h={["10em", "11em"]}
            p={["0.5em", "1em"]}
            mt="0" 
            textAlign="center"
            
            transitionDuration='400ms'
            transitionTimingFunction='ease-in-out'
            >
            
                    <Flex
                    top="0"
                    w="full"
                    h={viewCase ? "full" : "0"}
                    opacity={viewCase ? "full" : "0"}
                    position={"absolute"}
                    borderRadius={"1em"}
                    overflowY={"hidden"}
                    justifyContent={"center"}
                    alignItems="end"
                    sx={{
                        background: "linear-gradient(183.68deg, rgba(28, 29, 96, 0) -18.7%, #1C1D60 67.09%)"
                    }}
                    transitionDuration="400ms"
                    transitionTimingFunction='ease-in-out'
                    color={"white"}
                    >
                        <Text fontSize={"1.4em"} fontWeight="semibold" pb="12px">View Case</Text>
                    </Flex>
                
                <Text 
                color={"primary.blue"}
                fontFamily={"coolvetica"}
                fontSize={["0.8em", "1.2em"]} 
                mb={["9px", "5px"]}>
                {title}
                </Text>
                <Text 
                fontSize={["0.4em", "0.6em"]}
                textAlign="justify">
                {desc}
                </Text>
            </Flex>
        </Flex>
    )
}

export default function Category() {
    let content = [{
        title: "Accessible Healthcare",
        desc: "How can rural residents obtain adequate healthcare services and equal treatment effortlessly?",
        href:""
    }, {
        title: "Inclusive Literacy",
        desc: "How to leverage existing education infrastructure to increase financial literacy for rural populations?"
    }, {
        title: "Meaningful Connectivity",
        desc: "How to provide low-cost reliable, and scalable connectivity to optimize off-grid rural eletrification solutions?"
    }, {
        title: "Solving Resistance for Preventative Medicine",
        desc: "As Indonesia is approaching new area with Ibu Kota Nusantara (IKM), how digital healthcare can play significant role to sit urban's behavior towards preventative medicine through adequate access for all urban areas?"
    }, {
        title: "Decentralized Finance & Exchange",
        desc: "How to enable De-Fi and DeX to play critical role in improving local business, especially SMEs, profitability?"
    }, {
        title: "Low-carbon AI",
        desc: "How applied AI and digitalization could improve clean energy product adaption to improve net zero emission pathaway time?"
    }]

    return(
        <Flex flexDirection={"column"} alignItems={"center"} py={["1.6em", "2em"]}>
            <Text
            mb="1.2em"
            fontSize={["1.6em", "2.4em"]}
            fontWeight="bold"
            color={"primary.red"}>
                Category
            </Text>
            <Flex flexWrap={"wrap"} justifyContent={"center"} px={["0", "4em"]} maxW={"70em"}>
                {content.map((data, id) => {
                    return(
                        <Flex key={id} flexWrap={"wrap"}>
                            <SquareTemp title={data.title} desc={data.desc}/>
                        </Flex>

                    )
                })}
            </Flex>
        </Flex>
    )
}