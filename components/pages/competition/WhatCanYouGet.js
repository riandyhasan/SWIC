import { Flex, Text } from "@chakra-ui/react";

export default function WhatCanYouGet() {
    return(
        <Flex justifyContent={"center"} mt="1em" h={"30vw"}>
            <Text
            fontSize={"2em"}
            fontWeight="bold"
            color={"primary.red"}>
                What Can You Get
            </Text>
        </Flex>
    )
}