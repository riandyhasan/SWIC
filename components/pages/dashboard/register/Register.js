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
  Alert,
  AlertIcon,
  AlertDescription,
  useToast,
  Select
} from "@chakra-ui/react";
import { db } from "../../../../utils/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Link from "next/link";
import { v4 as uuid } from 'uuid';


export default function DashboardRegister({user, team}) {
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [member1Name, setMember1Name] = useState("");
  const [member1Email, setMember1Email] = useState("");
  const [member2Name, setMember2Name] = useState("");
  const [member2Email, setMember2Email] = useState("");
  const [teamCategory, setTeamCategory] = useState({label:"Accessible Healthcare", value:"Accessible Healthcare"});
  const router = useRouter();
  const toast = useToast();

  const validateForm = () => {
    let errors = "";

    if(leaderEmail == member1Email || leaderEmail == member2Email || member1Email == member2Email){
        errors = "Email must not same with another member";
    }

    if(teamName == "" || leaderEmail == ""|| leaderName == "" || member1Email == "" || member1Name == ""){
        errors = "Please fill the form"
    }

    let isLeader = false;
    let isMember1 = false;
    let isMember2 = false;

    user.map((u) => {
        if(u.email == leaderEmail){
            isLeader = true;
        }
        if(u.email == member1Email){
            isMember1 = true;
        }
        if(u.email == member2Email){
            isMember2 = true;
        }
    })
    if(!isLeader){
        errors = "Cannot find leader email, please register first."
    }
    if(!isMember1){
        errors = "Cannot find member 1 email, please register first."
    }
    if(member2Email != "" && member2Name != "" && !isMember2){
        errors = "Cannot find member 2 email, please register first."
    }

    let isRegistered = false;
    user.map((u) => {
      if(u.email == leaderEmail || u.email == member1Email || u.email == member2Email){
          if(u.teamCode && u.teamCode != ""){
            isRegistered = true;
          }
      }
  })

  if(isRegistered){
    errors = "Cannot register team member that already registered."
  }
    return errors;
  }

  const generateID = () =>{
    const unique_id = uuid();
    let small_id = unique_id.slice(0,6);
    team.map((t) =>{
        if(small_id == t.id){
            const new_unique_id = uuid();
            small_id = new_unique_id.slice(0,6);
        }
    })
    return small_id;
  }

  async function updateUserTeam(teamID, user){
    try{
        let role = "";
        if(user.email == leaderEmail){
          role = "leader";
      }
      if(user.email == member1Email){
          role = "member1";
      }
      if(user.email == member2Email){
          role = "member2";
      }
        const docRef = doc(db, `user`, user.id);
        await updateDoc(docRef, {
            teamID: teamID,
            teamRole : role
          });
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
    }
  }

  async function handleRegister() {
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
    try{
    const teamID = generateID();
    await setDoc(doc(db, "team", teamID), {
        teamName: teamName,
        membersName: [leaderName, member1Name, member2Name == "" ? "-" : member2Name],
        membersEmail: [leaderEmail, member1Email, member2Email == "" ? "-" : member2Email],
        membersValidation: [0,0,0],
        membersData: ["", "", ""],
        isSubmit: false,
        submission: "",
        teamCategory: teamCategory,
        isChecked: false,
    });
    user.map((u) =>{
        if(leaderEmail == u.email|| member1Email == u.email || member2Email == u.email){
            updateUserTeam(teamID, u);
        }
    })
    toast({
        title: "Team registered",
        description: "Your team has been registered successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {  window.location.reload(); }, 1500);
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
    }
}
  }

  return (
    <Flex w="100%" minH="100vh" flexDir={{base:"column", md:"row"}}>
      <Flex
        display={{ base: "none", md: "flex" }}
        alignItems="flex-start"
        justifyContent="flex-end"
        bgImage="url('/assets/images/background/dashboard-register.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="30%"
        h="100vh"
      />
      <Flex
        w={{ base: "100%", md: "70%" }}
        flexDir="column"
        px="4rem"
      >
        <Flex justifyContent="flex-start" flexDir="column" py="1rem" >
          <Heading textAlign="left" color="primary.red" fontWeight={500}>
            Register
          </Heading>
        </Flex>

        <Flex w="100%">
        <FormControl isRequired>
              <FormLabel
                htmlFor="teamname"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Team Name
              </FormLabel>
              <Input
                type="text"
                id="teamname"
                placeholder="Team Name"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </FormControl>
        </Flex>

        <Flex w="100%">
        <FormControl isRequired>
              <FormLabel
                htmlFor="category"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Category
              </FormLabel>
              <Select
                id="category"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={teamCategory}
                onChange={(e) => setTeamCategory(e.target.value)}
              >
                  <option value='Accessible Healthcare'>Accessible Healthcare</option>
                  <option value='Inclusive Literacy'>Inclusive Literacy</option>
                  <option value='Meaningful Connectivity'>Meaningful Connectivity</option>
                  <option value='Solving Resistance for Preventative Medicine'>Solving Resistance for Preventative Medicine</option>
                  <option value='Decentralized Finance & Exchange'>Decentralized Finance & Exchange</option>
                  <option value='Low-carbon AI'>Low-carbon AI</option>
              </Select>
            </FormControl>
        </Flex>


        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          gap={4}
          w="100%"
          pt="2rem"
          pb="1rem"
        >
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="leadername"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Team Leader Full Name
              </FormLabel>
              <Input
                type="text"
                id="teamleadername"
                placeholder="Team Leader Full Name"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={leaderName}
                onChange={(e) => setLeaderName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="leaderemail"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Team Leader Email
              </FormLabel>
              <Input
                type="email"
                id="leaderemail"
                placeholder="email@gmail.com"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={leaderEmail}
                onChange={(e) => setLeaderEmail(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="member1name"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Team Member 1 Full Name
              </FormLabel>
              <Input
                type="text"
                id="member1name"
                placeholder="Team Member 1 Full Name"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={member1Name}
                onChange={(e) => setMember1Name(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="member1email"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Team Member 1 Email
              </FormLabel>
              <Input
                type="email"
                id="member1email"
                placeholder="email@gmail.com"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={member1Email}
                onChange={(e) => setMember1Email(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="member2name"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Team Member 2 Full Name
              </FormLabel>
              <Input
                type="text"
                id="member2name"
                placeholder="Team Member 2 Full Name"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={member2Name}
                onChange={(e) => setMember2Name(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="member2email"
                fontFamily="Coolvetica"
                color="primary.blue"
                fontSize="1.3em"
              >
                Team Member 2 Email
              </FormLabel>
              <Input
                type="email"
                id="member2email"
                placeholder="email@gmail.com"
                borderRadius="10px"
                border="2px solid #D8D7D7"
                value={member2Email}
                onChange={(e) => setMember2Email(e.target.value)}
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Alert status='error' bg="white" color="red">
            <AlertIcon />
            <AlertDescription fontFamily='Poppins' fontWeight={500} fontSize="0.85em">The email used is the email when signing up.</AlertDescription>
        </Alert>
        <Flex
          justifyContent="flex-start"
          mt="1rem"
        >
          <Box
            maxW={{ base: "65%", md: "100%" }}
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
            Register
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
