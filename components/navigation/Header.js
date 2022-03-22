import React, { useState } from "react";
import { Box, Text, Heading, Flex, Stack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// SHOW MODE
// 0 = SHOW BOTH, when user is logged in  or not
// 1 = SHOW FOR LOGGED IN USER, when user is logged in
// 2 = SHOW FOR NOT LOGGED IN USER, when user is not logged in

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Virtual Booth",
    path: "/virtualbooth",
  },
  {
    name: "Competition",
    path: "/competition",
  },
  {
    name: "Contact Us",
    path: "/contactus",
  },
];

export default function Header({ ...props }) {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" py="0.3em" paddingLeft={["2em", "4em", "4em"]} paddingRight={["2em", "4em", "4em"]} {...props}>
      <Box cursor="pointer" maxW="25vw">
        <Link href="/">
          <Image src="/assets/images/logo/logo-swic.png" height={64} width={130} />
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Box display={{ base: menuOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack mt={{ base: menuOpen ? "1em" : "0", md: "0" }} spacing={10} align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]}>
          {LINKS.map((link) => (
            <Box key={link.name + "-nav"}>
              <Link href={link.path} key={link.name + "-nav"}>
                <Heading
                  fontSize="0.85em"
                  fontWeight={500}
                  cursor="pointer"
                  textAlign="center"
                >
                  {link.name}
                </Heading>
              </Link>
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
}