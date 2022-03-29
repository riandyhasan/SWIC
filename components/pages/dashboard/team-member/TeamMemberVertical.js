import { Box, Flex, Text } from "@chakra-ui/react"
import AdditionalData from "./AdditionalData";
import Data from "./Data";
import Member from "./Member";

export function TeamMemberVertical({data}) {
    return(
        <Box w='full'>
            <Flex flexDirection='column' alignItems='center' mb='0.5em'>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Data</Text>
                    <Data id={data.id} teamName={data.teamName} teamCode="123456" pb='4px'/>
                </Flex>
            </Flex>
            <Box>
                <Text fontFamily='Coolvetica'>Member</Text>
                <Member name={data.leaderName} isTeamLeader={true} isVerified={true} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
                <Member name={data.member1Name} isTeamLeader={false} isVerified={true} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
                <Member name={data.member2Name} isTeamLeader={false} isVerified={true} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
            </Box>
            <Box>
                <Text fontFamily='Coolvetica'>Additional Data</Text>
                <AdditionalData isUploaded={false}/>
            </Box>
        </Box>
    )
}
