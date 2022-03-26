import { Box, Flex, Heading, Text, Grid, GridItem, Input, Textarea } from "@chakra-ui/react"
import { MdCancel, MdCheckCircle } from "react-icons/md";
import AdditionalData from "./AdditionalData";
import Data from "./Data";
import Member from "./Member";

export function TeamMemberHorizontal({data}) {
    let h = ['', '', '15em', '15em'];
    let tr = [7, 7, 6, 6];
    let tc = [3, 3, 1, 1];
    let rs = [3, 3, 4, 4];
    let cs = [1, 1, 2, 2];
    let gap = [0.5, 2, 1, 1];
    // let pb = ['0.5en', '1.5em', '1.5em', '1.5em'];
    let p = [];

    return(
        <Grid 
            w='full' 
            h={h} 
            bg='green.500' 
            templateRows={`repeat(${tr}, 1fr)` }
            templateColumns={`repeat(${tc}, 1fr)`} 
            gap={[1, 2, 3, 4]}>
            <GridItem bg='red.400' rowSpan={rs}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Data</Text>
                    <Data id={data.Data.ID} teamName={data.Data.teamName} teamCode={data.Data.teamCode} />
                </Flex>
            </GridItem>
            <GridItem bg='red.400' rowSpan={rs} colSpan={cs}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Members</Text>
                    <Grid w='full' h='full' templateRows='repeat(3, 1fr)' gap={gap}>
                        <Member name={data.Members[0].name} isTeamLeader={data.Members[0].isTeamLeader} isVerified={data.Members[0].isVerified} height='full' fsName='0.9em' fsTeamLeader='0.6em' />                        
                        <Member name={data.Members[1].name} isTeamLeader={data.Members[1].isTeamLeader} isVerified={data.Members[1].isVerified} height='full' fsName='0.9em' fsTeamLeader='0.6em' />                        
                        <Member name={data.Members[2].name} isTeamLeader={data.Members[2].isTeamLeader} isVerified={data.Members[2].isVerified} height='full' fsName='0.9em' fsTeamLeader='0.6em' />                        
                    </Grid>
                </Flex>
            </GridItem>
            <GridItem bg='red.400' rowSpan={[1, 1, 1, 1]} colSpan={[1, 1, 3, 3]}>
                <Text fontFamily='Coolvetica'>Additional Data</Text>
                <Box h='full' w='full'>
                    <Box w='full' h={['62%', 'full', '2.4rem', '2.4rem']} bg='yellow.200' borderRadius='0.3em'>
                        <AdditionalData isUploaded={data.AdditionalData}/>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
};