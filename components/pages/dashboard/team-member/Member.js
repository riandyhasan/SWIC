import { Flex, Text } from "@chakra-ui/react"
import { MdCancel, MdCheckCircle } from "react-icons/md";

export default function Member({name, isTeamLeader, isVerified, height, mb, fsName, fsTeamLeader}) {
    return(
        <Flex justifyContent='space-between' alignItems='center' border='2px' borderColor='secondary.gray' h={height} borderRadius='0.3em' px='8px' mb={mb}>
            <Flex flexDirection='column' justifyContent='center' fontWeight='medium'>
                <Text fontSize={fsName}>{name}</Text>
                {isTeamLeader ? <Text fontSize={fsTeamLeader}>Team Leader</Text> : <></>}
            </Flex>
            {isVerified ? 
            <Flex alignItems='center'>
                <MdCheckCircle />
                <Text fontSize='0.6em' pl='0.3em'>Verified</Text>
            </Flex>:
            <Flex alignItems='center'>
                <MdCancel color="red" />
                <Text fontSize='0.6em' pl='0.3em' color='red'>Not Verified</Text>
            </Flex>
            }
        </Flex>
    );
};