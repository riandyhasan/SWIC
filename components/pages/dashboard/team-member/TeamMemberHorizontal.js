import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react"
import AdditionalData from "./AdditionalData";
import Data from "./Data";
import Member from "./Member";

export function TeamMemberHorizontal({data, profile}) {
    let h = ['', '', '15em', '15em'];
    let tr = [, , 6, 6];
    let tc = [, , 1, 1];
    let rs = [, , 4, 4];
    let cs = [, , 2, 2];
    let gap = [ , , 1, 1];

    return(
        <Grid 
            w='full' 
            h={h} 
            templateRows={`repeat(${tr}, 1fr)` }
            templateColumns={`repeat(${tc}, 1fr)`} 
            gap={[, , 3, 4]}>
            <GridItem rowSpan={rs}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Data</Text>
                    <Data id={data.id} teamName={data.teamName} teamCode="123456" />
                </Flex>
            </GridItem>
            <GridItem rowSpan={rs} colSpan={cs}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Members</Text>
                    <Grid w='full' h='full' templateRows='repeat(3, 1fr)' gap={gap}>
                        <Member name={data.membersName[0]} isTeamLeader={true} isVerified={data.membersValidation[0]} height='full' fsName='0.9em' fsTeamLeader='0.6em' />                        
                        <Member name={data.membersName[1]} isTeamLeader={false} isVerified={data.membersValidation[1]} height='full' fsName='0.9em' fsTeamLeader='0.6em' />                        
                        <Member name={data.membersName[2]} isTeamLeader={false} isVerified={data.membersValidation[2]} height='full' fsName='0.9em' fsTeamLeader='0.6em' />                        
                    </Grid>
                </Flex>
            </GridItem>
            <GridItem rowSpan={[, , 1, 1]} colSpan={[, , 3, 3]}>
                <Text fontFamily='Coolvetica'>Additional Data</Text>
                <Box h='full' w='full'>
                    <Box w='full' h={[, , '2.4rem', '2.4rem']}>
                        <AdditionalData team={data} profile={profile} />
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
};