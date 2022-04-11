import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Flex, Text } from "@chakra-ui/react";
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
                        <Text fontSize={"0.8em"} fontWeight="medium" fontFamily={"coolvetica"} pl="0.5em" color={"white"}>
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
            <AccordionPanel color={"primary.blue"} px="2.5em" py="1.4em" fontSize={"0.8em"} borderBottomRadius={"0.9em"}>
                {description}            
            </AccordionPanel>
        </AccordionItem>
    )
}

export default function FAQ() {
    return(
        <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        w="full"
        mb="2em">
            <Text
            fontSize={"2em"}
            fontWeight="semibold"
            color="primary.red"
            py="1em">
                FAQ
            </Text>
            <Accordion w="80%" allowMultiple allowToggle>
                <AccordionComp 
                caption={"What is SWIC 2022?"} 
                description="SMARTER WORLD Innovation Challenge (SWIC) is an official T20 social impact business and engineering innovation marketplace, aiming to unlock global digital potential to fulfill meaningful digital connectivity, cybersecurity, and empowerment."
                />
                <AccordionComp />
                <AccordionComp />
            </Accordion>
        </Flex>
    )
}