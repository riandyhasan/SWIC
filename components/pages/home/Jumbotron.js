import React from "react";
import { Box, Text, Flex, Heading, Square, Image } from "@chakra-ui/react";
import Link from "next/link";
import Countdown from "./Countdown";

export default function Jumbotron({profile}) {
  return (
    <Flex
      flexDirection={["column", "column", "column", "row-reverse"]}
      justifyContent="space-between"
      alignItems="center"
      px={["5em", "5em", "5em", "4em"]}
      py={["3em", "3em", "3em", "4em"]}
      color="white"
    >
      <Flex
        justifyContent="center"
        position="relative"
        mb={["1em", "2em", "2em", "0"]}
      >
        <Image
          src={"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/assets%2Fimages%2Fjumbotron.png?alt=media&token=8a2019f2-4a40-4450-afb9-aa4178c6cf71"}
          width="500"
          height="250"
        />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems={["center", "center", "center", "start"]}
      >
        <Box>
          <Heading
            fontSize={["2.3em", "4em", "4em", "4em"]}
            fontWeight="medium"
          >
            Smarter World <br /> Innovation Challenge
          </Heading>
          <Text
            fontSize="0.8em"
            pt="0.85em"
            pb="1.2em"
            mb={["1.5em", "1.5em", "1.5em", "0"]}
            w={["24.5em", "50em", "50em", "50em"]}
          >
            The Smarter World Innovation Challenge [SWIC] is an official T20
            impact business and engineering innovation marketplace, aiming to
            unlock global digital potential to fulfill meaningful digital
            connectivity, cybersecurity, and empowerment through the three
            vision.
          </Text>
        </Box>
        <Countdown />
        <Flex justifyContent={["center", "center", "center", "start"]}>
        <Link href={profile.data ? "/dashboard" : "/login"} >
          <Square
            fontSize="0.8em"
            cursor="pointer"
            color="black"
            mt={["3em", "3em", "3em", "1.4em"]}
            borderRadius="1.4em"
            p="0.6em"
            py="0.8em"
            bg="secondary.yellow"
            w={["10em", "12em"]}
          >
            Register Now!
          </Square>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
