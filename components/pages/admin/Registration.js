import { Box, Flex } from "@chakra-ui/react";
import TableText from "./registration/TableText";

export default function Registration({teams}) {   
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