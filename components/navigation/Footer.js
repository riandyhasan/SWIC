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
      justifyContent={{base:"center", md:"space-between"}}
      alignItems="center"
    >
      <Box bg="white" p="1.2rem" borderRadius="30px" w="70%" display={{base:"none", md:"block"}}>
        <Flex alignItems="center" justifyContent="center" gridGap="0.5rem">
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
      <Box p="1.5rem" bg="white" borderRadius="30px" display={{base:"none", md:"block"}}>
        <Heading color="primary.blue" size="sm">
          Organized by
        </Heading>
        <Flex alignItems="center" justifyContent="center" gridGap="0.5rem">
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
      <Box p="1.5rem" bg="white" borderRadius="30px" display={{base:"block", md:"none"}}>
        <Flex alignItems="center" justifyContent="center" gridGap="0.5rem">
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
        <Heading color="primary.blue" size="md" textAlign="center" mb="1rem">
          Organized by
        </Heading>
        <Flex alignItems="center" justifyContent="center" gridGap="0.5rem">
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
        justifyContent={{base:"center", md:"flex-end"}}
        alignItems="flex-end"
        gridGap="2rem"
        pr={{base:"0rem", md:"6rem"}}
        pt={{base:"1rem", md:"0rem"}}
      >
        <Flex flexDir={{base:"row", md:"column"}} gridGap="1rem">
          <a
            href="https://www.instagram.com/ieeeitbsb"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Flex gridGap="1rem" cursor="pointer" alignItems="center">
              <Box bg="white" p="0.2rem" borderRadius="50px">
                <AiOutlineInstagram size="1.5em" color="#1C1D60" />
              </Box>
              <Text display={{base:"none", md:"block"}}>@ieeeitbsb</Text>
            </Flex>
          </a>
          <a
            href="https://www.linkedin.com/company/ieee-itb-student-branch/mycompany/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Flex gridGap="1rem" cursor="pointer" alignItems="center">
              <Box bg="white" p="0.2rem" borderRadius="50px">
                <AiFillLinkedin size="1.5em" color="#1C1D60" />
              </Box>
              <Text display={{base:"none", md:"block"}}>IEEE ITB Student Branch</Text>
            </Flex>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
}
