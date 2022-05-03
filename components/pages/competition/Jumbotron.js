import { Flex, Text, Square, Link } from "@chakra-ui/react";
import Countdown from "../home/Countdown";

export default function Jumbotron({profile}) {
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
          <Flex>
            <Link href={profile.data ? "/dashboard" : "/login"} style={{textDecoration:"none"}}>
              <Square
              fontSize="0.8em"
              cursor="pointer"
              color="black"
              mt="1.4em"
              borderRadius={["1em", "1.4em"]}
              p="0.6em"
              py={["0.3em", "0.8em"]}
              bg="secondary.yellow"
              w={["8.2em", "10em"]}
            >
              Register Now!
              </Square>
            </Link>
            <a 
            href="https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Guideline.pdf?alt=media&token=190ce64d-3a3d-4546-96d1-bd7bdef3e91a"
            target="_blank" 
            rel="noreferrer" 
            cursor="pointer">
            </a>
          </Flex>
        </Flex>
      </Flex>
    )
}