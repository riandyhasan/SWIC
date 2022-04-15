import { Circle, Flex, Heading, Text } from "@chakra-ui/react";
import { RiPhoneFill } from "react-icons/ri";
import { GoMail } from "react-icons/go";

export default function Information() {
  let fs = ["1.4em", "2em", "3em", "4em"];
  let fs2 = ["0.8em", "1em", "1.6em", "1.6em"]
  let pl = ["2em", "2em", "4.5em", "4.5em"];
  let size = ["1.3em", "1.5em", "2em", "2em"]
  let size2 = ["0.8em", "0.8em", "1.4em", "1.4em"]

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
          <Circle bg="white" size={size} color="primary.blue">
            <RiPhoneFill size="1em" />
          </Circle>
          <Text fontWeight="medium" pl="0.5em" fontSize={fs2}>
            Phone : (+62) 812 9898 4688
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Circle bg="white" size={size} color="primary.blue">
            <GoMail size="1em" />
          </Circle>
          <Text fontWeight="medium" pl="0.5em" fontSize={fs2}>
            E-mail : ameliaamanda123@gmail.com
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
