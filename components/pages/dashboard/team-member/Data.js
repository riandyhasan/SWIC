import { Box, Flex, Select, Text } from "@chakra-ui/react"

export default function Data({id, teamName, teamCode, pb}) {
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
                <Text fontSize={fsTitle} fontWeight={fw}>Category</Text>
                <Select 
                variant='unstyled' 
                placeholder='Pick a category' 
                fontFamily={'Inter, sans-serif'} 
                size="xs"
                fontSize={"0.65em"}>
                    <option value={"AH"}>Accessible Healthcare</option>
                    <option value={"IL"}>Inclusive Literacy</option>
                    <option value={"MC"}>Meaningful Connectivity</option>
                    <option value={"SRFPM"}>Solving Resistance for Preventative Medicine</option>
                    <option value={"DFE"}>Decentralized Finance & Exchange</option>
                    <option value={"LAI"}>Low-carbon AI</option>
                </Select>
            </Box>
        </Flex>
    )
}