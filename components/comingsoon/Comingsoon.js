import {
  Flex,
  Box,
  Heading,
  Image
} from "@chakra-ui/react";

export default function Comingsoon({imgUrl, title}) {


  return (
    <Flex w="100%" minH={{base: "0vh", md:"100vh"}} gridGap="2rem" py="2rem" alignItems="center" flexDir="column">
        <Box>
        <Image src={imgUrl}/>

        </Box>
        <Heading
              fontWeight={500}
              size="4xl"
              sx={{
                background: "linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                BackgroundClip: "text",
                TextFillColor: "transparent",
              }}
            >
              {title}
            </Heading>

    <Box w={{base:"80%", md:"40%"}} bg="linear-gradient(91.19deg, #EB222A -24.42%, #1C1D60 100%)" borderRadius="25px" fontFamily="Coolvetica" fontWeight={400} px="2rem" py="0.5rem" fontSize="2em" color="white" textAlign="center">COMING SOON</Box>

    </Flex>
  );
}
