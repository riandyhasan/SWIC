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
    useToast,
    Select
} from "@chakra-ui/react";
import { db } from "../../../utils/firebase";
import {
  getAuth,
  updateEmail, 
  updateProfile
} from "firebase/auth";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { doc, updateDoc } from "firebase/firestore";
import { COUNTRIES } from "../../../constant"

export default function EditProfile({profile}) {
  const [email, setEmail] = useState(profile?.profiles.email);
  const [username, setUsername] = useState(profile?.profiles.username);
  const [name, setName] = useState(profile?.profiles.name);
  const [phone, setPhone] = useState(profile?.profiles.phone);
  const [institution, setInstitution] = useState(profile?.profiles.institution);
  const [majorfaculty, setMajorFaculty] = useState(profile?.profiles.majorfaculty);
  const [country, setCountry] = useState(profile?.profiles.country);
  const router = useRouter();
  const toast = useToast();

  const validateForm = () => {
    let errors = "";

    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
    ) {
      errors = "Phone number is not valid";
    }
    if (
      !email ||
      email == "" ||
      !username ||
      username == "" ||
      !name ||
      name == "" ||
      !phone ||
      phone == "" ||
      !institution ||
      institution == "" ||
      !majorfaculty ||
      majorfaculty == "" ||
      !country ||
      country == ""
    ) {
      errors = "Please fill the form!";
    }
    return errors;
  };

  async function handleSaveProfile(){
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
    try{
      if (email != profile.profiles.email){
        updateEmail(auth.currentUser, "user@example.com").then(() => {
          // Email updated!
          // ...
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
    const docRef = doc(db, `user`, profile.data.uid);
    await updateDoc(docRef, {
      username: username,
      name: name,
      email: email,
      phone: phone,
      institution: institution,
      majorfaculty: majorfaculty,
      country: country,
    });
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
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
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    router.push("/profile")
  }catch(e){
    var msg = e.message;
    const error = msg.replace("Firebase:", "");
    toast({
      title: "Error!",
      description: error,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }}
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
            Edit Profile
          </Heading>
        </Flex>

        <Grid
          gridTemplateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)"}}
          gap={4}
          w="100%"
          pt="2rem"
          pb="1rem"
        >
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="Username"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Username
              </FormLabel>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="email"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Email
              </FormLabel>
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
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="Name"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Full Name
              </FormLabel>
              <Input
                type="text"
                id="name"
                placeholder="Full name"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="Phone"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Phone Number
              </FormLabel>
              <Input
                type="text"
                id="phone"
                placeholder="Phone Number"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="Institution"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Institution
              </FormLabel>
              <Input
                type="text"
                id="institution"
                placeholder="Institution"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="Major/Faculty"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Major/Faculty
              </FormLabel>
              <Input
                type="text"
                id="majorfaculty"
                placeholder="Major/Faculty"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={majorfaculty}
                onChange={(e) => setMajorFaculty(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="Country"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Country
              </FormLabel>
              <Select
                id="country"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {COUNTRIES.map((c) => (
                  <option value={c.name}>{c.name}</option>
                ))
                }
              </Select>
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
            onClick={handleSaveProfile}
          >
              Save Profile
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
