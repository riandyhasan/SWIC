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
        w="17em"
        sx={{
            borderColor: "linear(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)",
        }}
        borderColor={"red"}
        h="11em"
        p={"1em"}
        m="1.6em"
        mt="0" 
        textAlign="center"
        _hover={{
            bg:"gray.200",
        }}
        >
            <Text fontSize={"1.2em"} mb="5px">{title}</Text>
            <Text fontSize={"0.6em"}>{desc}</Text>
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
        <Flex flexDirection={"column"} alignItems={"center"} py="2em">
            <Text
            mb="2em"
            fontSize={"2em"}
            fontWeight="bold"
            color={"primary.red"}>
                Category
            </Text>
            <Flex flexWrap={"wrap"} justifyContent={"center"} px="4em" maxW={"70em"}>
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