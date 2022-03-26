import { Box, Flex, Text } from "@chakra-ui/react"

export default function Data({id, teamName, teamCode, pb}) {
    let fsTitle = '0.8em'
    let fsValue = '0.65em'
    let fw = 'semibold'
    let fw2 = 'medium'
    return(
        <Flex flexDirection='column' justifyContent='space-between' h='full' w='full' border='2px' borderColor='secondary.gray' borderRadius='0.3em' p='8px' pb={pb}>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw}>ID</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>{id}</Text>
            </Box>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw}>Team Name</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>{teamName}</Text>
            </Box>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw}>Team Code</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>{teamCode}</Text>
            </Box>
        </Flex>
    )
}