import { Box, Flex, Heading, Text, Grid, GridItem, Input, Textarea } from "@chakra-ui/react"
import { MdCancel, MdCheckCircle } from "react-icons/md";

export default function AdditionalData({isUploaded}) {
    return(
        <Flex alignItems='center' h='40px' borderRadius='0.3em' bg='yellow.200' p='8px'>
            {isUploaded ? <MdCheckCircle /> : <MdCancel color="red" />}
            <Text fontSize='0.8em' fontWeight='medium' pl={'1em'}>ID Card</Text>
        </Flex>
    )

}