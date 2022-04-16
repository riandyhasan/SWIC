import { Box, Flex, Text } from "@chakra-ui/react";

const SquareTemp = ({urlImg, description}) => {
    return(//10 4
        <Flex flexDirection={"column"} alignItems={"center"} w={["10em", "14em"]} pb="2em"> 
            <Box w={["4em", "6em"]} mb="1.8em" >
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
        <Flex flexDirection={"column"} alignItems={"center"} pt={["1.6em", "3em"]}>
            <Text
            mb="2em"
            fontSize={["1.6em", "2.4em"]}
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