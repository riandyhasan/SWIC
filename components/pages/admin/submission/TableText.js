import { Flex, Text, Square } from "@chakra-ui/react";

export default function TableText ({no, namaTim, url, py, border, bg}) {
    return(        
        <Flex
        w="full"
        justifyContent={"space-between"}
        alignItems="center"
        py={py}
        pl="0.5em"
        pr="2em"
        bg={bg ? bg : ""}
        color={"primary.blue"}
        fontWeight={"semibold"}
        borderBottom={border}
        borderColor="secondary.purple"
        position={"sticky"}
        >
            <Flex w={"10%"} justifyContent="center">
                <Text>{no}</Text>
            </Flex>
            <Flex w={"60%"} justifyContent="center">
                <Text>{namaTim}</Text>
            </Flex>
            <Flex w={"30%"} justifyContent="center">
                {no == "No" ? <Text>Download Submission</Text>
                :
                <Square
                py="0.2em"
                px="1.3em"
                borderRadius={"1em"}
                bg={"secondary.yellow"}
                fontWeight="medium">
                    Download
                </Square>}
            </Flex>
        </Flex>
    )
}