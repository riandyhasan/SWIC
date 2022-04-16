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
          pl={["0.6em", "2em"]}
        >
          <Text 
          fontFamily={"coolvetica"}
            fontWeight={"medium"} 
            fontSize={["1.6em", "2.4em"]}
            mb="0.2em"
          >Competition
          </Text>
          <Countdown isCompetition={true} />
          <Square
            fontSize="0.8em"
            cursor="pointer"
            color="black"
            mt="1.4em"
            borderRadius={["1em", "1.4em"]}
            p="0.6em"
            py={["0.3em", "0.8em"]}
            bg="secondary.yellow"
            w={["10em", "12em"]}
          >
            Register Now!
          </Square>
        </Flex>
      </Flex>
    )
}