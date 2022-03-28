import React from "react";
import { Flex, Heading, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      minH="32rem"
      p="1rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="primary.red"
        color="primary.blue"
        size="xl"
      />
      <Heading
        as="h1"
        size="lg"
        textAlign="center"
        fontSize={["1.2em", null, "1.4em"]}
        sx={{
            background:
              "linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "text-fill-color": "transparent",
          }}
      >
        Loading...
      </Heading>
    </Flex>
  );
}