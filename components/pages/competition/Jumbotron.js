import { Flex, Text, Square } from "@chakra-ui/react";
import Countdown from "../home/Countdown";

export default function Jumbotron() {
    return (
        <Flex position="relative" justifyContent="start" h="40vw" color="white">
        <img src="/assets/images/pattern/contact-us-left.png" alt="pattern" />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          pl={"2em"}
        >
          <Text 
            fontWeight={"bold"} 
            fontSize={"3em"}
            mb="0.2em"
          >Competition
          </Text>
          <Countdown />
          <Square
            fontSize="0.8em"
            cursor="pointer"
            color="black"
            mt="1.4em"
            borderRadius="1.4em"
            p="0.6em"
            py="0.8em"
            bg="secondary.yellow"
            w={["10em", "12em"]}
          >
            Register Now!
          </Square>
        </Flex>
      </Flex>
    )
}