import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

const AccordionComp = ({caption, description}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleHandler = (e) => {
        setIsOpen(!isOpen);
    }

    return(
        <AccordionItem onClick={toggleHandler} bg="secondary.gray" borderRadius={"0.9em"} mb={"12px"}>
            <h2>
                <AccordionButton 
                _hover={{background: "linear-gradient(91.19deg, #EB222A -24.42%, #1C1D60 100%);"}}
                sx={{
                    background:"linear-gradient(91.19deg, #EB222A -24.42%, #1C1D60 100%);",
                    }}
                borderRadius="0.9em"
                borderColor="white">
                    <Flex w="full"  alignItems={"center"}>
                        <Text textAlign={"left"} fontSize={["0.7em", "0.8em"]} fontWeight="medium" fontFamily={"coolvetica"} pl={["0.2em", "0.5em"]} color={"white"}>
                            {caption}
                        </Text>
                    </Flex>
                    {isOpen ? 
                    <BiMinus size="30px" color="white"/>
                    :
                    <BiPlus size="30px" color="white"/>
                    }                    
                </AccordionButton>
            </h2>
            <AccordionPanel color={"primary.blue"} px={["1.2em", "2.5em"]} py={["0.9em", "1.4em"]} fontSize={["0.7em", "0.8em"]} borderBottomRadius={"0.9em"}>
                {description}            
            </AccordionPanel>
        </AccordionItem>
    )
}

export default function FAQ() {
    let faq = [{
        caption: "What is SWIC 2022?",
        description: "SMARTER WORLD Innovation Challenge (SWIC) is an official T20 social impact business and engineering innovation marketplace, aiming to unlock global digital potential to fulfill meaningful digital connectivity, cybersecurity, and empowerment."
    }, {
        caption: "What is the theme of SWIC 2022?",
        description: "The main theme of this year's SWIC 2022 is “Obliterate the digital status quo through technological advancement”."
    }, {
        caption: "Who is eligible to participate in SWIC 2022?",
        description: "Anyone aged 18 to 30 is eligible to register for SWIC 2022."
    }, {
        caption: "What are the benefits of joining SWIC 2022?",
        description: "Win a chance to get a total of 6000 USD, demo day experience, scale product at SCCIC Living lab and many more!"
    }, {
        caption: "What are the phases of the challenge?",
        description: 
        <UnorderedList>
            <ListItem>1st round submission (10 April 2022 - 10 May 2022)</ListItem>
            <ListItem>Incubation (1 June 2022 - 21 June 2022)</ListItem>
            <ListItem>Demo Day & Scale-up (25 June 2022)</ListItem>
        </UnorderedList>
        // description: `\u2022 1st round submission (10 April 2022 - 10 May 2022)\n\u2022 Incubation (1 June 2022 - 21 June 2022)\u2022 Demo Day & Scale-up (25 June 2022)`
    }, {   
        caption: "What makes SWIC 2022 Different from other competitions/challenges?",
        description: "SWIC 2022 will be joined by globally recognized think tanks, institutions, and corporations to provide a compelling experience for the participants."
    }]

    return(
        <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        w="full"
        mb="2em">
            <Text
            fontFamily={"coolvetica"}
            fontWeight="medium"
            fontSize={["1.6em", "2.4em"]}
            color="primary.red"
            py="1em">
                FAQ
            </Text>
            <Accordion w="80%" allowMultiple allowToggle>
                {faq.map((data, id) => {
                    return(
                        <AccordionComp 
                        key={id}
                        caption={data.caption}
                        description={data.description}
                        />
                    )
                })}
            </Accordion>
        </Flex>
    )
}