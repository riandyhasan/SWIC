import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Registration from "./Registration";
import Submission from "./Submission";


// IMPROVEMENT BISA DISATUIN SAMA NAV LAINNYA
const Nav = ({onClick, isOnSub, isOnReg}) => {
    let fs = ["0.7em", "0.7em", "0.7em", "1em"]
    let w = ['12em', '18rem', '18rem', '20rem']

    const MiniNav = ({id, name, isOn}) => {
        return(
            <Flex cursor='pointer' onClick={onClick} flexDirection='column' alignItems='center'>
                <Text 
                fontSize={fs} 
                fontWeight={isOn && 'semibold'} 
                sx={isOn ? {
                    background:"linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    BackgroundClip: "text",
                    TextFillColor: "transparent",
                  } : {}} id={id}>{name}</Text>
                {isOn && 
                <Box 
                id={id} 
                h='0.2em' 
                w='full'  
                sx={{
                    background:"linear-gradient(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)"
                }}
                borderRadius='full' />}
            </Flex>
        )
    }

    return(
        <Flex justifyContent='space-between' w={w} mt='0.3em' mb='1.2em'>
            <MiniNav id='submission' name='Submission' isOn={isOnSub}/>
            <MiniNav id='registration' name='Registration' isOn={isOnReg}/>
        </Flex>
    )
};

export default function Dashboard() {
    const [isOnSub, setIsOnSub] = useState(true);
    const [isOnReg, setIsOnReg] = useState(false);
    let px = ['2em', '2em', '2em', '5em']
    let py = ['10px', '', '1em', '3em']
    let h2 = ['31em', '32em', '20em', '24em']
    let fs = ["2em", "2em", "2em", "2.7em"]

    const onClickHandler = (e) => {
        switch(e.target.id) {
            case "submission":
                setIsOnSub(true);
                setIsOnReg(false);
                break;
            case "registration":
                setIsOnSub(false);
                setIsOnReg(true);
                break;
            default:
                break;
        }
    }

    return(
        <Flex
        flexDirection={["column", "column", "row"]}
        w="full"
        h={["38vw"]}
        minH={["50rem", "50rem", "35rem"]}
        >
            <Image sx={{display: ["none", "none", "block"]}} src={"/assets/images/background/dashboard-admin1.png"} />
            <Image sx={{display: ["block", "block", "none"]}} maxH="8rem" objectFit={"cover"} src={"/assets/images/background/dashboard-top.png"} />
            <Image sx={{display: ["none", "none", "block"]}} src={"/assets/images/pattern/dashboard-center.png"} />
            <Image sx={{display: ["block", "block", "none"]}} src={"/assets/images/pattern/dashboard-horizontal.png"} />
            <Box w='full' h='full' px={px} py={py}>
                <Box w='full' h={h2}>
                    <Heading color='primary.red' fontWeight='medium' fontSize={fs}>Admin</Heading>
                    <Nav onClick={onClickHandler} isOnSub={isOnSub} isOnReg={isOnReg}/>

                    <Box w={"full"} h="full" overflow="scroll">
                        {isOnSub && <Submission />}
                        {isOnReg && <Registration />}
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}