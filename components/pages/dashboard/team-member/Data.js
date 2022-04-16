import { useState } from "react";
import { Box, Flex, Text, Select } from "@chakra-ui/react"
import { db } from "../../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { MdArrowDropDown } from "react-icons/md";



export default function Data({id, teamName, teamCategory, pb}) {
    const [category, setCategory] = useState(teamCategory);
    async function changeCategory(e){
        setCategory(e.target.value);
        try{
            const docRef = doc(db, `team`, id);
            await updateDoc(docRef, {
              teamCategory : e.target.value
            });
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

    let fsTitle = '0.8em'
    let fsValue = '0.65em'
    let fw = 'semibold'
    let fw2 = 'medium'
    return(
        <Flex flexDirection='column' justifyContent='space-between' h='full' w='full' border='2px' borderColor='secondary.gray' borderRadius='0.3em' p='8px' pb={pb}>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw} mb="1px">ID</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>{id}</Text>
            </Box>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw} mb="2px">Team Name</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>{teamName}</Text>
            </Box>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw}>Team Code</Text>
                <Box >
                <Select
                id="category"
                fontSize={fsValue}
                fontWeight={fw}
                border="none"
                value={category}
                textAlign="left"
                variant="unstyled"
                icon={<MdArrowDropDown color="#1C1D60"/>}
                onChange={(e) =>  changeCategory(e)}
              >
                  <option value='Accessible Healthcare' >Accessible Healthcare</option>
                  <option value='Inclusive Literacy'>Inclusive Literacy</option>
                  <option value='Meaningful Connectivity'>Meaningful Connectivity</option>
                  <option value='Solving Resistance for Preventative Medicine'>Solving Resistance for Preventative Medicine</option>
                  <option value='Decentralized Finance & Exchange'>Decentralized Finance & Exchange</option>
                  <option value='Low-carbon AI'>Low-carbon AI</option>
              </Select>
                </Box>
            </Box>
        </Flex>
    )
}