import { Box, Flex, Heading, Text, Grid, GridItem, Input, Textarea } from "@chakra-ui/react"

const Nav = () => {
    return(
        <Flex justifyContent='space-between' w='26rem' bg='secondary.gray' mt='0.3em' mb='1.2em'>
            <Flex flexDirection='column' alignItems='center'>
                <Text>Team Member</Text>
                <Box h='0.4em' w='full' bg='primary.blue'></Box>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Text>Notification</Text>
                <Box h='0.4em' w='full' bg='primary.blue'></Box>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Text>Submission</Text>
                <Box h='0.4em' w='full' bg='primary.blue'></Box>
            </Flex>
        </Flex>
    )
};

const DataForm = () => {
    return(
        <Grid 
            w='full' 
            h='17vw' 
            bg='green.500' 
            templateRows='repeat(6, 1fr)' 
            templateColumns='repeat(3, 1fr)' 
            gap={6}>
            <GridItem bg='red.400' rowSpan={4} colSpan={1}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Data</Text>
                    <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                    </Box>
                </Flex>
            </GridItem>
            <GridItem bg='red.400' rowSpan={4} colSpan={2}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Members</Text>
                    <Grid w='full' h='full' templateRows='repeat(3, 1fr)' gap={2}>
                        <GridItem>
                            <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                            </Box>
                        </GridItem>
                    </Grid>
                </Flex>
            </GridItem>
            <GridItem bg='red.400' rowSpan={2} colSpan={3}>
                <Text fontFamily='Coolvetica'>Additional Data</Text>
                <Box h='2.5em' w='full' bg='yellow.200' borderRadius='0.3em'>
                </Box>
            </GridItem>
        </Grid>
    )
};

export default function Dashboard() {
    return(
        <Flex h='40vw' w='full'>
            <img src="/assets/images/background/dashboard.png" alt="picture" />
            <img src="/assets/images/pattern/dashboard-center.png" alt="picture" />
            <Box w='full' h='full' bg='red.100' py='3em' px='5em'>
                <Box bg='green.200' w='full' h='full'>
                    <Heading color='primary.red' fontWeight='medium' fontSize='2.7em'>Dashboard</Heading>
                    <Nav />
                    <DataForm />
                </Box>
            </Box>
        </Flex>
    )
}