import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  InputGroup,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import { app } from "../../../utils/firebase";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const validateForm = () => {
    let errors = "";
    if (!password || password == "") {
      errors = "Password is required";
    }
    if (!email || email == "") {
      errors = "Email is required";
    }
    return errors;
  };

  const handleLogin = async () => {
    const err = validateForm();
    if (err && err != "") {
      toast({
        title: 'Error!',
        description: err,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    } else {
      try {
        const auth = getAuth();
        const userData = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast({
          title: 'Login success!',
          description: "You have been logged in successfully.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        router.push("/");
      } catch (e) {
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        toast({
          title: 'Error!',
          description: error,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
    }
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try{
      signInWithPopup(auth, provider)
      .then((result) => {
        toast({
          title: 'Login success!',
          description: "You have been logged in successfully.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        router.push("/")
      }).catch((e) => {
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        toast({
          title: 'Error!',
          description: error,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      })
    }catch(e){
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        toast({
          title: 'Error!',
          description: error,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
  }
}

  return (
      <Flex w="100%" minH="100vh">
        <Flex
        display={{base:"none", md:"flex"}}
          alignItems="flex-start"
          justifyContent="flex-end"
          bgImage="url('/assets/images/background/login1.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          w="60%"
          h="100vh"
          pl="2.5rem"
          pt="4rem"
        >
        <Box bg="white"                  
            bgImage="url('/assets/images/background/login.png')"
            bgPosition="bottom"
            bgRepeat="no-repeat" 
            bgSize="contain"
            borderRadius="50px 0px 0px 50px"
        
        >
        <Box pl="2rem" py="3rem" 

        >
          <Heading color="primary.red" fontWeight={400}>Welcome to</Heading>
          <Heading fontWeight={500}
          size="2xl"
           sx={{
              background: "linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent"
          }}
          >Smarter World Innovation Challenge (SWIC) 2022</Heading>
          <Text color="primary.blue" fontSize="0.75em" fontWeight={500} mb="2rem" mt="1rem" maxW="80%">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
          </Box>
        </Box>
        
        </Flex>
        <Flex
          w={{ base: "100%", md: "70%" }}
          flexDir="column"
          px="4rem"
          pt="4rem"
        >
        <Flex justifyContent="flex-start" flexDir="column">
          <Heading textAlign="left" color="primary.red" fontWeight={500}>
            Login
          </Heading>
          <Text color="primary.blue">
          Don’t have an account? {" "}
            <a
              href="/signup"
              style={{ textDecoration: "none", color: "#EB222A", fontWeight: "bold" }}
            >
              Sign Up
            </a>
          </Text>
          </Flex>
        
          <Grid
            gridTemplateColumns="repeat(1, 1fr)"
            gap={4}
            w="100%"
            pt="2rem"
            pb="1rem"
          >
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="email" fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  borderRadius="10px"
                  border="2px solid #D8D7D7"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="password"  fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Password</FormLabel>
                <InputGroup>
                <InputRightElement>
                {showPass?
                <AiFillEye size="1.2em" cursor="pointer" onClick={() => setShowPass(!showPass)} color="#1C1D60" />
                :
                <AiFillEyeInvisible size="1.2em" cursor="pointer" onClick={() => setShowPass(!showPass)} color="#1C1D60" />
                }
                </InputRightElement>
                <Input
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password here"
                  borderRadius="10px"
                  border="2px solid #D8D7D7"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              </FormControl>
            </GridItem>
          </Grid>
          <Text fontWeight={500} fontFamily="Coolvetica" color="primary.blue">Or Login with</Text>
          <Flex justifyContent="space-between" mt="1rem" flexDir={{base:"column", sm:"row"}} gridGap={{base:"2rem", md:"0rem"}}>
          <Box
          maxW={{base:"45%", md:"100%"}}
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="secondary.yellow"
            borderRadius="19px"
            px="2rem"
            pt="0.6rem"
            pb={{base:"0.6rem", md:"0rem"}}
            cursor="pointer"
            onClick={handleGoogleLogin}
          >
            <Image w="60px" src="/assets/images/logo/google.png" />
          </Box>
          <Box
          maxW={{base:"65%", md:"100%"}}
          textAlign="center"
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="primary.blue"
            borderRadius="19px"
            px="2rem"
            py="0.4rem"
            cursor="pointer"
            onClick={handleLogin}
          >
            Login
          </Box>
          </Flex>
          <Text color="primary.blue" mt="2rem" mb={{base:"2rem", md:"0rem"}}>
          Forgot your password? {" "}
            <a
              href="/resetpassword"
              style={{ textDecoration: "none", color: "#EB222A", fontWeight: "bold" }}
            >
              Reset password
            </a>
          </Text>
        </Flex>
      </Flex>
  );
}