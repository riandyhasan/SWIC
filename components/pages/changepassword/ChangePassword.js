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
    InputGroup,
    InputRightElement,
    useToast,
} from "@chakra-ui/react";
import { db } from "../../../utils/firebase";
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showOldPass, setShowOldPass] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const router = useRouter();
    const toast = useToast();

    const validateForm = () => {
      let errors = "";
      if (!oldPassword || oldPassword == ""){
        errors = "Old passowrd is required";
      }
      if (!confirmPassword || confirmPassword == ""){
        errors = "Confirm passowrd is required";
      }
      if (!newPassword || newPassword == ""){
        errors = "New passowrd is required";
      }
      if(newPassword != confirmPassword){
        errors = "Confirm password is not equal to new password";
      }
    }

  async function handleUpdatePass(){
    const err = validateForm();
    if (err && err != "") {
      toast({
        title: "Error!",
        description: err,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
  }else{
    const auth = getAuth();
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, oldPassword);
    reauthenticateWithCredential(user, credential).then(() => {
      
      const auth = getAuth();
      const user = auth.currentUser;
      updatePassword(user, newPassword).then(() => {
        toast({
          title: "Password updated",
          description: "Your password has been updated successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        router.push("/profile")
      }).catch((e) => {
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        toast({
          title: "Error!",
          description: error,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
    }).catch((e) => {
      var msg = e.message;
      const error = msg.replace("Firebase:", "");
      toast({
        title: "Error!",
        description: error,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    });
  }
  }

  return (
    <Flex w="100%" minH="100vh" flexDir={{base:"column", md:"row"}}>
      <Flex
        display={{ base: "none", md: "flex" }}
        bgImage="url('/assets/images/background/profile.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="60%"
      >
      <Box
        px={{ base: "0.5rem", md: "3rem" }}
        pt={{ base: "2rem", md: "2rem" }}
      >
        <Box
          p="0.5rem"
          bg="secondary.yellow"
          borderRadius="30px"
          onClick={() => router.back()}
          cursor="pointer"
        >
          <AiOutlineArrowLeft size="2em" color="#1C1D60" />
        </Box>
      </Box>
      </Flex>

      <Flex
        display={{ base: "flex", md: "none" }}
        alignItems="flex-start"
        justifyContent="flex-start"
        bgImage="url('/assets/images/background/profile-mobile.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="25vh"
      >
      <Box
        px={{ base: "0.5rem", md: "3rem" }}
        pt={{ base: "2rem", md: "2rem" }}
      >
        <Box
          p="0.5rem"
          bg="secondary.yellow"
          borderRadius="30px"
          onClick={() => router.back()}
          cursor="pointer"
        >
          <AiOutlineArrowLeft size="2em" color="#1C1D60" />
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
            Change Password
          </Heading>
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
              <FormLabel
                htmlFor="oldpassword"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Old Password
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  {showOldPass ? (
                    <AiFillEye
                      size="1.2em"
                      cursor="pointer"
                      onClick={() => setShowOldPass(!showOldPass)}
                      color="#1C1D60"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size="1.2em"
                      cursor="pointer"
                      onClick={() => setShowOldPass(!showOldPass)}
                      color="#1C1D60"
                    />
                  )}
                </InputRightElement>
                <Input
                  id="oldpassword"
                  type={showOldPass ? "text" : "password"}
                  placeholder="Enter your old password"
                  borderRadius="10px"
                  border="2px solid #D8D7D7"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="newpassword"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                New Password
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  {showNewPass ? (
                    <AiFillEye
                      size="1.2em"
                      cursor="pointer"
                      onClick={() => setShowNewPass(!showNewPass)}
                      color="#1C1D60"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size="1.2em"
                      cursor="pointer"
                      onClick={() => setShowNewPass(!showNewPass)}
                      color="#1C1D60"
                    />
                  )}
                </InputRightElement>
                <Input
                  id="newpassword"
                  type={showNewPass ? "text" : "password"}
                  placeholder="Enter your new password"
                  borderRadius="10px"
                  border="2px solid #D8D7D7"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="confirmpassword"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Confirm Password
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  {showConfirmPass ? (
                    <AiFillEye
                      size="1.2em"
                      cursor="pointer"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      color="#1C1D60"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size="1.2em"
                      cursor="pointer"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      color="#1C1D60"
                    />
                  )}
                </InputRightElement>
                <Input
                  id="confirmpassword"
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="Confirm your password"
                  borderRadius="10px"
                  border="2px solid #D8D7D7"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
            </FormControl>
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
            onClick={handleUpdatePass}
          >
              Save Password
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
