import { Box, Flex } from "@chakra-ui/react";
import TableText from "./submission/TableText";

export default function Submission({teams}) {
    return(
        <Flex
        flexDirection={"column"}
        h={"full"}
        >
            <Box>
        <TableText teams={teams} />
        </Box>
        </Flex>
   )
}