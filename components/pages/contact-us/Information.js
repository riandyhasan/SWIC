import { Box, Circle, Flex, Heading, Square, Text } from "@chakra-ui/react";
import { RiPhoneFill } from "react-icons/ri";
import { GoMail } from "react-icons/go";

export default function Information() {
  let fs = ["2em", "3em", "3em", "4em"];
  let pl = ["2em", "2em", "4.5em", "4.5em"];

  return (
    <Flex position="relative" justifyContent="start" h="40vw" color="white">
      <img src="/assets/images/pattern/contact-us-left.png" alt="pattern" />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        pl={pl}
      >
        <Heading fontSize={fs} fontWeight="medium">
          Contact Us
        </Heading>
        <Flex alignItems="center" py="0.5em">
          <Circle bg="white" size="2em" color="primary.blue">
            <RiPhoneFill size="1.4em" />
          </Circle>
          <Text fontWeight="medium" pl="0.5em">
            Phone : (+62) 812 9898 4688
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Circle bg="white" size="2em" color="primary.blue">
            <GoMail size="1.4em" />
          </Circle>
          <Text fontWeight="medium" pl="0.5em">
            E-mail : thariqzs@yahoo.com
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
