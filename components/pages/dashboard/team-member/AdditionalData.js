import { Flex, Box, Square,  Text } from "@chakra-ui/react"
import { MdCancel, MdCheckCircle } from "react-icons/md";

export default function AdditionalData({isUploaded}) {
    return(
        <Flex alignItems='center' justifyContent='space-between' h='40px' borderRadius='0.3em' border='2px' borderColor='secondary.gray' p='8px'>
            <Flex>
                {isUploaded ? <MdCheckCircle /> : <MdCancel color="red" />}
                <Text fontSize='0.8em' fontWeight='medium' pl={'1em'}>ID Card</Text>
            </Flex>
            {!isUploaded &&
            <Square bg='secondary.blue' borderRadius='0.6em' fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} color='white' px='22px' py='7px'>  
                {/* <MdFileUpload color="white"/> */}
                <Text pl='3px'>Upload File</Text>
            </Square>}
        </Flex>
    )
}