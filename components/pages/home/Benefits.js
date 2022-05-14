import react from "react";
import { Flex, Box, Square, Text, Image } from "@chakra-ui/react";

const Template = (props) => {
  let s = ["4rem", "7rem", "9rem", "12rem"];
  let s1 = ["0.7em", "0.7em", "0.7em", "1em"];
  let s2 = ["0.7em", "0.7em", "0.7em", "2em"];
  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems=""
      mx={s2}
      w="full"
    >
      <Flex w="full" h={s} position="relative">
        <Image
          src={props.src}
          layout="fill"
          objectFit="contain"
        />
      </Flex>
      <Text textAlign="center" fontSize={s1} fontWeight="semibold" mt="1em">
        {props.text}
      </Text>
    </Flex>
  );
};

export default function Benefits() {
  let s = ["5em", "6em", "7em", "10em"];
  let s1 = ["full", "full", "full", "40rem"];
  let s2 = ["0.5em", "2.5m", "4em", "0"];
  return (
    <Flex
      mb="3rem"
      justifyContent="space-between"
      alignItems="center"
      color="white"
      mt={["0.6rem", "1em", "2em", "3em"]}
    >
      <Square h="400px" display={["none", "none", "none", "flex"]}>
        <Image
          src="/assets/images/pattern/benefits-left.png"
          width={200}
          height={400}
        />
      </Square>
      <Flex justifyContent="center" w={s1} px={s2}>
        <Template
          src="https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/assets%2Fimages%2Flogo-empathy.png?alt=media&token=52e473e7-9d76-4a9f-82eb-3c413375a547"
          text="Bridging digital gap between income levels"
        />
        <Template
          src="https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/assets%2Fimages%2Flogo-redcross.png?alt=media&token=e6ce573f-bcbc-44a2-b3a5-2e3b79035448"
          text="Endeavoring accssible digital healthcare technology for all"
        />
        <Template
          src="https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/assets%2Fimages%2Flogo-donation.png?alt=media&token=5a02ff8a-000a-46f7-a7c7-ae324e253a8b"
          text="Empowering rural communities through transformation"
        />
      </Flex>
      <Square h="400px" display={["none", "none", "none", "flex"]}>
        <Image
          src="/assets/images/pattern/benefits-right.png"
          width={200}
          height={400}
        />
      </Square>
    </Flex>
  );
}
