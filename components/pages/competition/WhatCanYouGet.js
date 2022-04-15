import { Box, Flex, Text } from "@chakra-ui/react";

const SquareTemp = ({urlImg, description}) => {
    return(
        <Flex flexDirection={"column"} alignItems={"center"} w="14em" pb="2em"> 
            <Box w="6em" mb="1.8em" >
                <img src={urlImg} alt="img" />
            </Box>
            <Text px="0.6em" textAlign={"center"} fontSize={"0.8em"}>{description}</Text>
        </Flex>
    )
}

export default function WhatCanYouGet() {
    let content = [{
        urlImg: "/assets/images/logo/logo-wcyg1.png",
        desc: "Win a total of 6000 USD"
    }, {
        urlImg: "/assets/images/logo/logo-wcyg2.png",
        desc: "Showcase solutions to T20 panels and stakeholders"
    }, {
        urlImg: "/assets/images/logo/logo-wcyg3.png",
        desc: <Text>A chance to further develop and scale up your product at top living lab in Indonesia</Text>
    }, {
        urlImg: "/assets/images/logo/logo-wcyg4.png",
        desc: "A chance to take part in our exclusive incubation"
    }]

    return(
        <Flex flexDirection={"column"} alignItems={"center"} pt="3em">
            <Text
            mb="2em"
            fontSize={"2em"}
            fontWeight="bold"
            color={"primary.red"}>
                What Can You Get
            </Text>
            <Flex flexWrap={"wrap"} justifyContent={"center"}>
                {content.map((data, id) => {
                    return(
                        <Flex key={id} flexWrap={"wrap"}>
                            <SquareTemp urlImg={data.urlImg} description={data.desc} />
                        </Flex>

                    )
                })}
            </Flex>
        </Flex>
    )
}