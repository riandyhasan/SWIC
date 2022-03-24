import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Image,
  useToast
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { app } from "../../../utils/firebase";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default function ResetPassword(props) {
    const [email, setEmail] = useState("");
    const toast = useToast();
    const router = useRouter();
    const validateForm = () => {
        let errors = "";
        if (!email || email == ""){
            errors = "Email is required";
        }
        return errors;
    };
const handleSubmit = () => {
const err = validateForm();
if (err && err != ""){
    toast({
        title: 'Error!',
        description: err,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
}else{
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast({
            title: 'Email sent!',
            description: "Your reset password email has been sent!",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        setEmail("");
        props.setSubmit(!props.isSubmit);
      })
      .catch((e) => {
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        toast({
          title: 'Error!',
          description: error,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      });
}        

    }
    return(
        <Flex w="100%" minH={{base:"0vh", md:"100vh"}} flexDir="column" pb="2rem">
            <Flex w="100%" justifyContent="flex-start" px={{base:"0.5rem", md:"3rem"}} pt={{base:"2rem", md:"0rem"}}>
                <Box p="0.5rem" bg="secondary.yellow" borderRadius="30px" onClick={() => router.push("/login")} cursor="pointer">
                    <AiOutlineArrowLeft size="2em" color="#1C1D60"/>
                </Box>
            </Flex>
            <Flex flexDir="column" w="100%" justifyContent="center" alignItems="center" pt={{base:"4rem", md:"0rem"}}>
            <Heading color="primary.red" fontWeight={400} size="2xl">Reset Password</Heading>
            <Text color="primary.blue" fontSize="0.85em" fontWeight={500} mb="2rem" mt="1rem" maxW={{base:"60%", md:"100%"}} textAlign="center">Enter your registered email below to receive password reset instruction</Text>
            </Flex>
            <Flex  w="100%" justifyContent="space-between" alignItems="center" pb={{base:"4rem", md:"0rem"}}>
                <Image src="/assets/images/background/resetpass.png" maxW="100px" d={{base:"none", md:"block"}}/>
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                    <Box maxW="50%">
                <Image src={props.isSubmit? "/assets/images/background/resetpasssent.png": "/assets/images/background/resetpassnotsent.png"}/>
                </Box>
                <Box w="60%">
                    {props.isSubmit ? 
                    null :
                <FormControl isRequired>
                <FormLabel htmlFor="email" fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  borderRadius="10px"
                  border="2px solid #D8D7D7"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              }
              <Flex justifyContent={props.isSubmit ? "center":"flex-end"} mt="2rem">
                  {props.isSubmit ? 
                  <Flex flexDir="column">
                                <Box
                                textAlign="center"
                              color="white"
                              fontFamily="Inter, sans-serif"
                              fontWeight={400}
                              bg="primary.blue"
                              borderRadius="19px"
                              px="2rem"
                              py="0.4rem"
                              cursor="pointer"
                              onClick={() => router.push("/login")}
                            >
                              Login
                            </Box>
                            <Text color="primary.blue" mt="2rem" mb={{base:"2rem", md:"0rem"}} textAlign="center">
                            Don’t receive the mail?  {" "}
            <a
                href="/resetpassword"
                style={{ textDecoration: "none", color: "#EB222A", fontWeight: "bold" }}
            >
              Resend
            </a>
          </Text>
                        </Flex>
                  :
              <Box
              textAlign="center"
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="primary.blue"
            borderRadius="19px"
            px="2rem"
            py="0.4rem"
            cursor="pointer"
            onClick={handleSubmit}
          >
            Submit
          </Box>
          }
              </Flex>
              </Box>
                </Flex>
                <Image src="/assets/images/background/resetpass.png" transform="rotate(180deg)" maxW="100px" d={{base:"none", md:"block"}}/>
            </Flex>
        </Flex>
    )
}
