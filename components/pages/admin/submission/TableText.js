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

export default function TableText ({teams}) {
    return(        
        <Table variant="simple">
        <Thead bg="#D8D7D7" >
          <Tr>
            <Th color="#143061" textAlign="center">No</Th>
            <Th color="#143061" textAlign="center">Name Tim</Th>
            <Th color="#143061" textAlign="center">Download Submission</Th>
  
          </Tr>
        </Thead>
        <Tbody>
        {teams.map((team, no) => (
          <Tr key={no}>
            <Td isNumeric color="#143061" fontWeight="bold" textAlign="center">{no+1}</Td>
            <Td color="#143061" fontWeight="bold">{team.teamName}</Td>
            {team.submission != "" ? 
                <Td w="30%">
                    <a href={team.submission} target="_blank" rel="noreferrer">
                <Square
                    py="0.2em"
                    px="0.8em"
                    borderRadius={"1em"}
                    bg={"secondary.yellow"}
                    fontWeight="medium">
                        Download
                    </Square>
                    </a>
                </Td>
                :
                <Td color="#143061" fontWeight="bold" textAlign="center">-</Td>
            }
          </Tr>
          ))}
        </Tbody>
      </Table>
    )
}