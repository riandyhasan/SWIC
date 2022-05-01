import { useState, useRef } from "react";
import { Flex, Text, Square, useDisclosure, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";


export default function TableText ({no, namaTim, url, py, border, bg}) {
    const [verify, setVerify] = useState(false);
    const [deny, setDeny] = useState(false);
    const [modalFor, setModalFor] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef();

    // buat buka modal
    const modalHandler = (e) => {
        setModalFor(e.target.id);
        onOpen()
    };

    // buat kasih ngeset kalo udah diverifikasi
    const verifyHandler = () => {
        console.log("Verification completed for number", no);
        setVerify(true);
        setDeny(false);
        onClose();
    };
    
    // buat kasih ngeset kalo udah ditolak
    const denyHandler = () => {
        console.log("Team no", no, "verification is denied!");
        setVerify(false);
        setDeny(true);
        onClose();
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
                ref={finalRef}
                onClick={modalHandler}
                cursor={"pointer"}
                border="2px"
                borderColor={"primary.blue"}
                bg={verify && "primary.blue"}
                w="1.5em"
                h="1.5em"
                borderRadius={"0.3em"}>
                    <AiOutlineCheck color="white" id="verify" />
                </Square>}
            </Flex>
            <Flex w="7%" justifyContent={"center"}>
                {no == "No" ? <Text>Deny</Text>
                :
                <Square
                id="deny"
                ref={finalRef}
                onClick={modalHandler}
                cursor={"pointer"}
                border="2px"
                borderColor={"primary.red"}
                bg={deny && "primary.red"}
                w="1.5em"
                h="1.5em"
                borderRadius={"0.3em"}>
                    <AiOutlineClose color="white" id="deny" />
                </Square>}
            </Flex>
            <Modal 
            blockScrollOnMount={false} 
            isOpen={isOpen} 
            onClose={onClose}
            isCentered        
            motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent  
                w="15rem" 
                h={modalFor == "verify" ? "22rem" : "30rem"} 
                borderRadius="1rem">
                    <ModalCloseButton 
                    bg="primary.red" 
                    borderRadius={"3em"} 
                    w="1.6em" 
                    h="1.6em">
                        <AiOutlineClose color="white" />
                    </ModalCloseButton>
                    <ModalBody 
                    px="2.5em" 
                    py="2em" 
                    display="flex" 
                    flexDirection={"column"} 
                    alignItems="center" 
                    justifyContent={"space-between"}>
                        {modalFor == "verify" ? <Image src="/assets/images/background/confirmverify.png" /> : <Image src="/assets/images/background/confirmdeny.png" />}
                        {modalFor == "verify" && <Text 
                        fontSize={"1.7em"} 
                        align="center" 
                        fontWeight={"medium"} 
                        fontFamily="coolvetica">
                            Confirm to Verify
                        </Text>}
                        {modalFor == "verify" && <Square
                        onClick={verifyHandler}
                        cursor={"pointer"}
                        py="0.4em"
                        px="3em"
                        fontSize={"0.7em"}
                        borderRadius={"1.5em"}
                        color="white"
                        bg="primary.blue">
                            Verify
                        </Square>}                
                        {modalFor == "deny" && <Text
                        fontSize={"1.7em"} 
                        align="center" 
                        fontWeight={"medium"} 
                        fontFamily="coolvetica">
                            Confirm to Deny
                        </Text>}
                        {modalFor == "deny" && <Square
                        onClick={denyHandler}
                        cursor={"pointer"}
                        py="0.4em"
                        px="3em"
                        fontSize={"0.7em"}
                        borderRadius={"1.5em"}
                        color="white"
                        bg="primary.blue">
                            Deny
                        </Square>}   

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex> 
    )
}