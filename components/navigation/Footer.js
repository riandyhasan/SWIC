import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      as="footer"
      bgImg="url('/assets/images/background/footer.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      minW="100vw"
      p="1.5rem"
      color="white"
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(3, 1fr)",
      }}
      gridTemplateRows={{
        base: "repeat(1, 1fr)",
        md: "1fr",
      }}
      gridGap={{
        base: "0.5em",
        md: "0",
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box bg="white" p="1.2rem" borderRadius="30px" w="70%">
      <Flex
        alignItems="center"
        justifyContent="center"
        gridGap="0.5rem"
      >
        <Image
          src="/assets/images/logo/logo-swic.png"
          height={64}
          width={130}
        />
        <Image
          src="/assets/images/logo/logo-T20.png"
          height={95}
          width={136}
        />
      </Flex>
      </Box>
      <Box p="1.5rem" bg="white" borderRadius="30px">
          <Heading color="primary.blue" size="sm">Organized by</Heading>
      <Flex
        alignItems="center"
        justifyContent="center"
        gridGap="0.5rem"
      >
        <Image
          src="/assets/images/logo/logo-sccic.png"
          height={58}
          width={120}
        />
        <Image
          src="/assets/images/logo/logo-pii.png"
          height={72}
          width={72}
        />
        <Image
          src="/assets/images/logo/logo-ITB.png"
          height={60}
          width={60}
        />
        <Image
          src="/assets/images/logo/logo-apic.png"
          height={69}
          width={45}
        />
        <Image
          src="/assets/images/logo/logo-ieee.png"
          height={45}
          width={137}
        />
      </Flex>
      </Box>
      <Flex
        justifyContent="flex-end"
        alignItems="flex-end"
        gridGap="2rem"
        pr="6rem"
      >
        <Flex flexDir="column" gridGap="1rem">
        <a
          href="https://www.instagram.com/itb1920/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Flex gridGap="1rem" cursor="pointer">
              <Box bg="white" p="0.2rem" borderRadius="50px">
            <AiOutlineInstagram size="1.5em" color="#1C1D60" />
            </Box>
            <Text>@swic</Text>
          </Flex>
        </a>
        <a
          href="https://www.instagram.com/itb1920/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Flex gridGap="1rem" cursor="pointer">
          <Box bg="white" p="0.2rem" borderRadius="50px">
            <AiFillLinkedin size="1.5em" color="#1C1D60"/>
            </Box>
            <Text>SWICC</Text>
          </Flex>
        </a>
        </Flex>
      </Flex>
    </Box>
  );
}