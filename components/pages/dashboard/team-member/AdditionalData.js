import { Flex, Square,  Text, Box } from "@chakra-ui/react"
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { useRef, useState } from "react";

export default function AdditionalData() {
    const [filePicked, setFilePicked] = useState();
    const fileRef = useRef();
    const handleChange = (e) => {
        setFilePicked(e.target.files);
    };

    return(
        <Flex alignItems='center' justifyContent='space-between' h='40px' borderRadius='0.3em' border='2px' borderColor='secondary.gray' p='8px'>
            <Flex>
                {filePicked ? <MdCheckCircle /> : <MdCancel color="red" />}
                <Text fontSize='0.8em' fontWeight='medium' pl={'1em'}>ID Card</Text>
            </Flex>
            <Square bg='secondary.blue' borderRadius='0.6em' cursor='pointer' onClick={() => fileRef.current.click()} fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} color='white' px='22px' py='7px'>  
                {/* <MdFileUpload color="white"/> */}
                <Box pl='3px'>
                    <input type="file" hidden
                    ref={fileRef}
                    accept="image/png, application/pdf"
                    onChange={handleChange}
                    multiple={false}/>
                    Upload File
                </Box>
            </Square>
        </Flex>
    )
}