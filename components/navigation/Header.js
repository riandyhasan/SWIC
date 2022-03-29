import React, { useState } from "react";
import { Box, Text, Heading, Flex, Stack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import getProfile from "../../services/profile/profile"

// SHOW MODE
// 0 = SHOW BOTH, when user is logged in  or not
// 1 = SHOW FOR LOGGED IN USER, when user is logged in
// 2 = SHOW FOR NOT LOGGED IN USER, when user is not logged in

const LINKS = [
  {
    name: "Home",
    path: "/",
    mode: 0,
  },
  // {
  //   name: "Virtual Booth",
  //   path: "/virtualbooth",
  // },
  {
    name: "Competition",
    path: "/competition",
    mode: 0,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    mode: 0,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    mode: 1,
  },
];

export default function Header({ ...props }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const profile = getProfile();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py="0.3em"
      paddingLeft={["2em", "4em", "4em"]}
      paddingRight={["2em", "4em", "4em"]}
      border="1px solid #D8D7D7"
      {...props}
    >
      <Box cursor="pointer" maxW="25vw">
        <Link href="/">
          <Image
            src="/assets/images/logo/logo-swic.png"
            height={64}
            width={130}
          />
        </Link>
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Box
        display={{ base: menuOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          mt={{ base: menuOpen ? "1em" : "0", md: "0" }}
          spacing={10}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
        >
          {LINKS.map((link) => {
            if (link.mode === 0 || (profile.data && link.mode === 1)){
            return(
            <Box key={link.name + "-nav"}>
              <Link href={link.path} key={link.name + "-nav"}>
                <Heading
                  fontSize="0.85em"
                  fontWeight={500}
                  cursor="pointer"
                  textAlign="center"
                  sx={{
                    background:
                      router.pathname == link.path
                        ? "linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)"
                        : "black",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    BackgroundClip: "text",
                    TextFillColor: "transparent",
                  }}
                >
                  {link.name}
                </Heading>
              </Link>
            </Box>
            );
            }
            return null;
          })}
          {!profile.data?
          <Link href="/login">
            <Box
              bg={
                router.pathname == "/login" || router.pathname == "/signup"
                  ? "linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)"
                  : "primary.blue"
              }
              fontFamily="Coolvetica"
              px="1rem"
              py="0.65rem"
              color="white"
              borderRadius="40px"
              fontSize="0.85em"
              cursor="pointer"
            >
              Login | Sign Up
            </Box>
          </Link>

            :
          <Link href="/profile">
            <Box
            bg={
              router.pathname.includes("/profile")
                ? "linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)"
                : "primary.blue"
            }
            fontFamily="Coolvetica"
            px="1rem"
            py="0.65rem"
            color="white"
            borderRadius="40px"
            cursor="pointer"
          >
            <Flex gridGap="1.2rem" alignItems="center">
              <FaUserCircle size="1.5em"/>
              <Text
              fontSize="0.85em">
                 Profile
              </Text>
            </Flex>
          </Box>
          </Link>
            }
        </Stack>
      </Box>
    </Flex>
  );
}
