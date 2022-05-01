import { useState } from "react";
import { Flex, Text, Square } from "@chakra-ui/react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function TableText ({no, namaTim, url, py, border, bg}) {
    const [verify, setVerify] = useState(false);
    const [deny, setDeny] = useState(false);

    const clickHandler = (e) => {
        console.log(e.target.id)
        if (e.target.id == "verify") {
            setVerify(true);
            setDeny(false);
        } else {
            setVerify(false);
            setDeny(true);
        }
    };

    return(
        <Flex
        justifyContent={"space-between"}
        alignItems="center"
        py={py}
        pl="0.2em"
        pr="1em"
        bg={bg ? bg : ""}
        color={"primary.blue"}
        fontWeight={"semibold"}
        borderBottom={border}
        borderColor="secondary.purple"
        >
            <Flex w={"10%"} justifyContent="center">
                <Text>{no}</Text>
            </Flex>
            <Flex w={"16%"} justifyContent="center">
                <Text>{namaTim}</Text>
            </Flex>
            <Flex w={"20%"} justifyContent="center">
                {no == "No" ? <Text>ID Card Member 1</Text>
                :
                <Square
                py="0.2em"
                px="1.3em"
                borderRadius={"1em"}
                bg={"secondary.yellow"}
                fontWeight="medium">
                    Download
                </Square>}
            </Flex>
            <Flex w={"20%"} justifyContent="center">
                {no == "No" ? <Text>ID Card Member 2</Text>
                :
                <Square
                py="0.2em"
                px="1.3em"
                borderRadius={"1em"}
                bg={"secondary.yellow"}
                fontWeight="medium">
                    Download
                </Square>}
            </Flex>
            <Flex w={"20%"} justifyContent="center">
                {no == "No" ? <Text>ID Card Member 3</Text>
                :
                <Square
                py="0.2em"
                px="1.3em"
                borderRadius={"1em"}
                bg={"secondary.yellow"}
                fontWeight="medium">
                    Download
                </Square>}
            </Flex>
            <Flex w="7%" justifyContent={"center"}>
                {no == "No" ? <Text>Verify</Text>
                :
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
                </Square>}
            </Flex>
            <Flex w="7%" justifyContent={"center"}>
                {no == "No" ? <Text>Deny</Text>
                :
                <Square
                
                onClick={clickHandler}
                cursor={"pointer"}
                border="2px"
                borderColor={"primary.red"}
                bg={deny && "primary.red"}
                w="1.5em"
                h="1.5em"
                borderRadius={"0.3em"}>
                    <AiOutlineClose id="deny" color="white" />
                </Square>}
            </Flex>
        </Flex> 
    )
}