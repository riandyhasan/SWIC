import { Box, Flex, Text } from "@chakra-ui/react"
import AdditionalData from "./AdditionalData";
import Data from "./Data";
import Member from "./Member";

export function TeamMemberVertical({data, profile}) {
    return(
        <Box w='full'>
            <Flex flexDirection='column' alignItems='center' mb='0.5em'>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Data</Text>
                    <Data id={data.id} teamName={data.teamName} teamCategory={data.teamCategory} pb='4px'/>
                </Flex>
            </Flex>
            <Box>
                <Text fontFamily='Coolvetica'>Member</Text>
                <Member name={data.membersName[0]} isTeamLeader={true} isVerified={data.membersValidation[0]} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
                <Member name={data.membersName[1]} isTeamLeader={false} isVerified={data.membersValidation[1]} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
                <Member name={data.membersName[2]} isTeamLeader={false} isVerified={data.membersValidation[2]} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
            </Box>
            <Box>
                <Text fontFamily='Coolvetica'>Additional Data</Text>
                <AdditionalData team={data} profile={profile} />
            </Box>
        </Box>
    )
}
