import { useState } from "react";
import { 
    Square,   
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Box,
    Heading,
    Image,
    useToast,
    Text,
    Textarea
} from "@chakra-ui/react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { db, functions } from "../../../../utils/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import emailjs from "emailjs-com";


function VerifyDeny({id, onOpen, setType, setVerifySubmit, setDenySubmit, setIDSubmit}){
    const [verify, setVerify] = useState(false);
    const [deny, setDeny] = useState(false);
    const toast = useToast();

    const clickHandler = (e) => {
        if (verify == true || deny == true) {
          setVerify(false);
          setDeny(false); 
          setType("");
          return;
        }
        if (e.target.id == "verify") {
            setVerify(true);
            setDeny(false);
            setType("Verify");
        } else {
            setVerify(false);
            setDeny(true);
            setType("Deny");
        }
    };

    async function handleSubmit(){
        try{
        if(verify == false && deny == false){
            throw new Error("Please choose verify or deny first!")
    }else{
        onOpen();
        setVerifySubmit(verify);
        setDenySubmit(deny);
        setIDSubmit(id);
    }
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

    return(
        <>
        <Td>
          <Flex justifyContent="center">
            <Square
                id="verify"
                onClick={clickHandler}
                cursor={"pointer"}
                border="2px"
                borderColor={"primary.blue"}
                bg={verify && "primary.blue"}
                w="1.5em"
                h="1.5em"
                borderRadius={"0.3em"}>
                    <AiOutlineCheck id="verify" color="white"/>
              </Square>
          </Flex>
        </Td>
        <Td >
        <Flex justifyContent="center">
          <Square
              id="deny"
              onClick={clickHandler}
              cursor={"pointer"}
              border="2px"
              borderColor={"primary.red"}
              bg={deny && "primary.red"}
              w="1.5em"
              h="1.5em"
              borderRadius={"0.3em"}>
                  <AiOutlineClose id="deny" color="white" />
          </Square>
        </Flex>
        </Td>
        <Td>
        <Square
        cursor="pointer"
            py="0.2em"
            px="1.3em"
            textAlign="center"
            borderRadius={"1em"}
            bg={"secondary.yellow"}
            fontWeight="medium"
            onClick={handleSubmit}
            >
                Submit
            </Square>
        </Td>

  </>
    )
}

function ModalSubmit({isOpen, onClose, type, reason, setReason, writeToFirebase}){
    const handleOnClose = () => {
        setReason("");
        onClose();
    }
return(
    <Modal isOpen={isOpen} onClose={handleOnClose} size="sm"  borderRadius="40px">
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton color="white" bg="#EB222A" borderRadius="100px"
       _hover={{
          color: "white",
          bg: "#EB222A",
      }} />
      <ModalBody>
        <Flex w="100%" alignItems="center" justifyContent="center" flexDir="column" gridGap="2rem" py="2rem">
            <Box w={{base:"150px",md:"300px"}}>
                <Image src="/assets/images/background/verify.png"/>
            </Box>

            <Heading size="2xl" color="#303032" fontWeight={400} maxW="200px" textAlign="center">{`Confirm to ${type}`}</Heading>

            {type == "Deny" ? <Box w="100%">
            <Text fontWeight="medium" fontFamily={"Coolvetica"} color="primary.blue">
            Reason
          </Text>
          <Textarea
            id="reason"
            val={reason}
            placeholder="Write down your reason..."
            minH="150px"
            fontSize="0.75em"
            onChange={(e) => setReason(e.target.value)}
          />
            </Box> : null}

            <Square
                cursor="pointer"
                py="0.3em"
                px="2.5em"
                borderRadius={"1em"}
                bg={"primary.blue"}
                color="white"
                fontWeight="medium"
                onClick={writeToFirebase}
                >
                    {type}
                </Square>
        </Flex>
      </ModalBody>

    </ModalContent>
  </Modal>
)
}

export default function TableText ({teams}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [type, setType] = useState("");
    const [reason,setReason] = useState("");
    const [verifySubmit, setVerifySubmit] = useState(false);
    const [denySubmit, setDenySubmit] = useState(false);
    const [idSubmit, setIdSubmit] = useState("");
    const toast = useToast();


    async function writeToFirebase(){
      try{
        const docRef = doc(db, `team`, idSubmit);
        if(verifySubmit){
            await updateDoc(docRef, {
                membersValidation: [2,2,2],
                isChecked: true
            });
            const docSnap = await getDoc(docRef);
            const teamData = docSnap.data();
            const emailBody = {
              email: teamData.membersEmail[0],
              teamName: teamData.teamName,
            };
            emailjs
              .send("notif", "verify", emailBody, "RU94ICulmw970XzR2")
              .then(
                (result) => {
                  onClose();
                  toast({
                    title: "Success!",
                    description: "Verificationd sent!",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
                },
                (error) => {
                  console.log(error.text);
                }
              );
        }else if(denySubmit) {
            await updateDoc(docRef, {
                membersValidation: [0,0,0],
                isChecked: true
            });
            const docSnap = await getDoc(docRef);
            const teamData = docSnap.data();
            const emailBody = {
              email: teamData.membersEmail[0],
              teamName: teamData.teamName,
              reason: reason,
            };
            emailjs
              .send("notif", "deny", emailBody, "RU94ICulmw970XzR2")
              .then(
                (result) => {
                  onClose();
                  toast({
                    title: "Success!",
                    description: "Verificationd sent!",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
                },
                (error) => {
                  console.log(error.text);
                }
              );
        }
      }catch (e) {
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

    return(
        <>
<ModalSubmit  isOpen={isOpen} onClose={onClose} type={type} reason={reason} setReason={setReason} writeToFirebase={writeToFirebase} />
  <Table variant="simple" minW="67em"> 
    <Thead bg="#D8D7D7">
      <Tr>
        <Th color="#143061" textAlign="center" >No</Th>
        <Th color="#143061" textAlign="center" >Team Name</Th>
        <Th color="#143061" textAlign="center" >ID Card Member 1</Th>
        <Th color="#143061" textAlign="center" >ID Card Member 2</Th>
        <Th color="#143061" textAlign="center" >ID Card Member 3</Th>
        <Th color="#143061" textAlign="center" >Verify</Th>
        <Th color="#143061" textAlign="center" >Deny</Th>
        <Th color="#143061" textAlign="center" >Action</Th>
      </Tr>
    </Thead>
    <Tbody>
    {teams.map((team, no) => (
        team.isChecked == false ? 
      <Tr key={no}>
        <Td isNumeric color="#143061" fontWeight="bold"><Text textAlign={"center"}>{no+1}</Text></Td>
        <Td color="#143061" fontWeight="bold">{team.teamName}</Td>
        {team.membersData.map((item) =>(
            item != "" ? 
            <Td>
                <a href={item} target="_blank" rel="noreferrer">
            <Square
                py="0.2em"
                px="1.3em"
                borderRadius={"1em"}
                bg={"secondary.yellow"}
                fontWeight="medium">
                    Download
                </Square>
                </a>
            </Td>
            :
            <Td color="#143061" fontWeight="bold" textAlign="center">-</Td>
        ))
        }
        <VerifyDeny id={team.id} onOpen={onOpen} setType={setType} setIDSubmit={setIdSubmit} setVerifySubmit={setVerifySubmit} setDenySubmit={setDenySubmit}/>
      </Tr>
      :
      null
      ))}
    </Tbody>
  </Table>
  </>
    )
}



