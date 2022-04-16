import { Flex, Text } from "@chakra-ui/react";

const SquareTemp = ({title, desc}) => {
    return(
        <Flex 
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
        borderRadius={"1em"}
        border="2px"
        w={["10em", "17em"]}
        sx={{
            borderColor: "linear(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)",
        }}
        borderColor={"red"}
        h={["10em", "11em"]}
        p={["0.5em", "1em"]}
        my="1.6em"
        mx={["0.2em", "1.6em"]}
        mt="0" 
        textAlign="center"
        _hover={{
            bg:"gray.200",
        }}
        >
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
    )
}

export default function Category() {
    let content = [{
        title: "Accessible Healthcare",
        desc: "How can rural residents obtain adequate healthcare services and equal treatment effortlessly?"
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
            mb="2em"
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