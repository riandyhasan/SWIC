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
  Text,
  Image,
  useToast
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { db } from "../../../utils/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup, 
  GoogleAuthProvider,
  getAdditionalUserInfo
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [majorfaculty, setMajorFaculty] = useState("");
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    let errors = "";

    if (password != confirmPassword) {
      errors = "Confirm password is not equal to password";
    }
    if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone))){
      errors = "Phone number is not valid";
    }
    if (!email || email == "" || !password || password == "" || !username || username == "" || !confirmPassword || confirmPassword == "" || !name || name == "" || !phone || phone == "" || !institution || institution == "" || !majorfaculty || majorfaculty == "") {
      errors = "Please fill the form!";
    }
    return errors;
  };

  const handleRegister = async () => {
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
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(auth.currentUser, { displayName: name });
        await setDoc(doc(db, "user", user.uid), {
          username: username,
          name: name,
          email: user.email,
          phone: phone,
          institution: institution,
          "major/faculty": majorfaculty, 
          teamID: "",
        });
        toast({
          title: 'Register success',
          description: "Your account has been registered successfully",
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

  const handleGoogleRegister = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try{
      signInWithPopup(auth, provider)
      .then(async function(result){
        const user = result.user;
        const additionalUserInfo = getAdditionalUserInfo(result);
        try{
          if(additionalUserInfo.isNewUser){
            await setDoc(doc(db, "user", user.uid), {
              username: "",
              name: user.displayName,
              email: user.email,
              phone: user.phoneNumber ? user.phoneNumber : "",
              institution: "",
              "major/faculty": "", 
              teamID: "",
            });
            toast({
              title: 'Register success',
              description: "Your account has been registered successfully",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
          router.push("/")
          }else{
            toast({
              title: 'Error!',
              description: "Your account has been registered! Please log in.",
              status: 'error',
              duration: 2000,
              isClosable: true,
            })
          router.push("/login")
          }
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
      )}catch(e){
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
        <Box 
            bg="white"                  
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
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              BackgroundClip: "text",
              TextFillColor: "transparent"
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
          py="1rem"
        >
        <Flex justifyContent="flex-start" flexDir="column">
          <Heading textAlign="left" color="primary.red" fontWeight={500}>
          Sign Up
          </Heading>
          <Text color="primary.blue">
          Already have an account? {" "}
            <a
              href="/login"
              style={{ textDecoration: "none", color: "#EB222A", fontWeight: "bold" }}
            >
              Log In
            </a>
          </Text>
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
                <FormLabel htmlFor="Username" fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Username</FormLabel>
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
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="confirmpassword"  fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Confirm Password</FormLabel>
                <InputGroup>
                <InputRightElement>
                {showConfirmPass?
                <AiFillEye size="1.2em" cursor="pointer" onClick={() => setShowConfirmPass(!showConfirmPass)} color="#1C1D60" />
                :
                <AiFillEyeInvisible size="1.2em" cursor="pointer" onClick={() => setShowConfirmPass(!showConfirmPass)} color="#1C1D60" />
                }
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
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="Name" fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Full Name</FormLabel>
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
                <FormLabel htmlFor="Phone" fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Phone Number</FormLabel>
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
                <FormLabel htmlFor="Institution" fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Institution</FormLabel>
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
                <FormLabel htmlFor="Major/Faculty" fontFamily="Coolvetica" color="primary.blue" fontSize="1.3em">Major/Faculty</FormLabel>
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
          </Grid>
          <Text fontWeight={500} fontFamily="Coolvetica" color="primary.blue">Or Sign Up with</Text>
          <Flex justifyContent="space-between" mt="1rem" flexDir={{base:"column", sm:"row"}} gridGap={{base:"2rem", md:"0rem"}}>
          <Box
            maxW={{base:"50%", md:"100%"}}
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="secondary.yellow"
            borderRadius="19px"
            px="2rem"
            pt="0.6rem"
            pb={{base:"0.6rem", md:"0rem"}}
            cursor="pointer"
            onClick={handleGoogleRegister}
          >
            <Image w="60px" src="/assets/images/logo/google.png" />
          </Box>
          <Box
            maxW={{base:"70%", md:"100%"}}
            textAlign="center"
            color="white"
            fontFamily="Inter, sans-serif"
            fontWeight={400}
            bg="primary.blue"
            borderRadius="19px"
            px="2rem"
            py="0.4rem"
            cursor="pointer"
            onClick={handleRegister}
          >
            Create Account!
          </Box>
          </Flex>
        </Flex>
      </Flex>
  );
}