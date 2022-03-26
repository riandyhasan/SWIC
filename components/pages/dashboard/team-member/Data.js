import { Box, Flex, Heading, Text, Grid, GridItem, Input, Textarea } from "@chakra-ui/react"

export default function Data({id, teamName, teamCode, pb, mb}) {
    let fsTitle = '0.8em'
    let fsValue = '0.65em'
    let fw = 'semibold'
    let fw2 = 'medium'
    return(
        <Flex flexDirection='column' justifyContent='space-between' h='full' w='full' bg='yellow.200' borderRadius='0.3em' p='8px' pb={pb}>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw}>ID</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>18220092</Text>
            </Box>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw}>Team Name</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>SWIC</Text>
            </Box>
            <Box pb={pb}>
                <Text fontSize={fsTitle} fontWeight={fw}>Team Code</Text>
                <Text fontSize={fsValue} fontWeight={fw2}>16520491</Text>
            </Box>
        </Flex>
    )
}