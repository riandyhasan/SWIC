import { Flex, Square, Text } from "@chakra-ui/react";

const TableText = ({no, namaTim, url, py, border, bg}) => {
    return(
        <Flex
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

export default function Submission() {
    const data = [{
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }, {
        namaTim: "Tim2an",
        url: "test"
    }]

    return(
        <Flex
        flexDirection={"column"}
        // border={"2px"}
        // borderColor="red.300"
        w="full"
        minW={"40rem"}
        h={"full"}
        overflowX="scroll"
        whiteSpace={"nowrap"}
        >
            <TableText 
            bg="secondary.gray" 
            py="0.4em" 
            no="No"
            namaTim="Nama Tim"/>
            {data.map((d, id) => {
                return(
                    <TableText py="0.8em" border="1px" namaTim={d.namaTim} no={id+1} url={d.url} key={id} />
                )
            })}
        </Flex>
   )
}