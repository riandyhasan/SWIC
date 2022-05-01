import { Flex } from "@chakra-ui/react";
import TableText from "./submission/TableText";

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
        w="full"
        minW={"50rem"}
        h={"full"}
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