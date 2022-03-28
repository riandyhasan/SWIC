import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import {
  getAuth,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";

export default function Profile({profile}) {
  const router = useRouter();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex w="100%" minH="100vh" flexDir={{base:"column", md:"row"}}>
      <Flex
        display={{ base: "none", md: "flex" }}
        bgImage="url('/assets/images/background/profile.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="60%"
      />
      <Flex
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        justifyContent="flex-end"
        bgImage="url('/assets/images/background/profile-mobile.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="25vh"
      />

      <Flex
        w={{ base: "100%", md: "70%" }}
        flexDir="column"
        px="4rem"
        pt="1rem"
      >

        <Flex justifyContent="flex-end" mb="2rem">
        <Box
            textAlign="center"
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="#CB0E05"
            borderRadius="19px"
            px="2rem"
            py="0.4rem"
            cursor="pointer"
            onClick={handleLogOut}
          >
            Log Out
          </Box>
        </Flex>

        <Flex justifyContent="flex-start" flexDir="column">
          <Heading textAlign="left" color="primary.red" fontWeight={500}>
            Profile
          </Heading>
        </Flex>

        <Grid
          gridTemplateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)"}}
          gap={{base:"2rem", md:"3rem"}}
          w="100%"
          pt="2rem"
          pb="1rem"
        >
          <GridItem>
            <Flex flexDir="column" gridGap="0.2rem">
            <Heading fontWeight={400}
                color="primary.blue"
                fontSize="1.3em"
              >
                Username
            </Heading>
            <Text
                fontFamily="Inter, sans-serif"
                fontWeight={400}
                fontSize="1em"
                color="#5B5F5F"
            >
                {profile.profiles.username ? profile.profiles.username : "-"}
            </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" gridGap="0.2rem">
            <Heading fontWeight={400}
                color="primary.blue"
                fontSize="1.3em"
              >
                Email
            </Heading>
            <Text
                fontFamily="Inter, sans-serif"
                fontWeight={400}
                fontSize="1em"
                color="#5B5F5F"
            >
                {profile.profiles.email ? profile.profiles.email : "-"}
            </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" gridGap="0.2rem">
            <Heading fontWeight={400}
                color="primary.blue"
                fontSize="1.3em"
              >
                Full Name
            </Heading>
            <Text
                fontFamily="Inter, sans-serif"
                fontWeight={400}
                fontSize="1em"
                color="#5B5F5F"
            >
                {profile.profiles.name ? profile.profiles.name : "-"}
            </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" gridGap="0.2rem">
            <Heading fontWeight={400}
                color="primary.blue"
                fontSize="1.3em"
              >
                Phone Number
            </Heading>
            <Text
                fontFamily="Inter, sans-serif"
                fontWeight={400}
                fontSize="1em"
                color="#5B5F5F"
            >
                {profile.profiles.phone ? profile.profiles.phone : "-"}
            </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" gridGap="0.2rem">
            <Heading fontWeight={400}
                color="primary.blue"
                fontSize="1.3em"
              >
                Institution
            </Heading>
            <Text
                fontFamily="Inter, sans-serif"
                fontWeight={400}
                fontSize="1em"
                color="#5B5F5F"
            >
                {profile.profiles.institution ? profile.profiles.institution : "-"}
            </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" gridGap="0.2rem">
            <Heading fontWeight={400}
                color="primary.blue"
                fontSize="1.3em"
              >
                Major/Faculty
            </Heading>
            <Text
                fontFamily="Inter, sans-serif"
                fontWeight={400}
                fontSize="1em"
                color="#5B5F5F"
            >
                {profile.profiles.majorfaculty ? profile.profiles.majorfaculty : "-"}
            </Text>
            </Flex>
          </GridItem>
        </Grid>
        <Flex
          justifyContent="flex-start"
          alignItems="flex-start"
          mt="1rem"
          mb={{base:"2rem", md:"0rem"}}
          flexDir="column"
          gridGap="1rem"
        >
          <Box
            w={{base:"50%", md:"30%"}}
            textAlign="center"
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="primary.blue"
            borderRadius="19px"
            px="1rem"
            py="0.4rem"
            cursor="pointer"
            onClick={() => router.push("/profile/edit")}
          >
              Edit Profile
          </Box>
          <Box
            w={{base:"70%", md:"30%"}}
            textAlign="center"
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="primary.blue"
            borderRadius="19px"
            px="1rem"
            py="0.4rem"
            cursor="pointer"
            onClick={() => router.push("/profile/changepassword")}
          >
            Change Password
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
