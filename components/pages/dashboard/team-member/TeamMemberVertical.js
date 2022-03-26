import { Box, Flex, Heading, Text, Grid, GridItem, Input, Textarea } from "@chakra-ui/react"
import { MdCancel, MdCheckCircle } from "react-icons/md";
import AdditionalData from "./AdditionalData";
import Data from "./Data";
import Member from "./Member";

export function TeamMemberVertical({data}) {
    return(
        <Box w='full'>
            <Flex flexDirection='column' alignItems='center' mb='0.5em'>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Data</Text>
                    <Data id={data.Data.ID} teamName={data.Data.teamName} teamCode={data.Data.teamCode} pb='4px'/>
                </Flex>
            </Flex>
            <Box>
                <Text fontFamily='Coolvetica'>Member</Text>
                <Member name={data.Members[0].name} isTeamLeader={data.Members[0].isTeamLeader} isVerified={data.Members[0].isVerified} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
                <Member name={data.Members[1].name} isTeamLeader={data.Members[1].isTeamLeader} isVerified={data.Members[1].isVerified} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
                <Member name={data.Members[2].name} isTeamLeader={data.Members[2].isTeamLeader} isVerified={data.Members[2].isVerified} height='44px' mb='0.2em' fsName='0.8em' fsTeamLeader='0.5em'/>
            </Box>
            <Box>
                <Text fontFamily='Coolvetica'>Additional Data</Text>
                <AdditionalData isUploaded={data.AdditionalData }/>
            </Box>
        </Box>
    )
}
