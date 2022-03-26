import { Box, Flex, Heading, Text, Grid, Square, GridItem, Input, Textarea } from "@chakra-ui/react"
import Image from "next/image";
import { useEffect, useState } from "react";
import { TeamMemberHorizontal } from "./team-member/TeamMemberHorizontal";
import { TeamMemberVertical } from "./team-member/TeamMemberVertical";

const Nav = () => {
    let fs = ["0.6em", "0.6em", "0.7em", "1em"]
    let w = ['full', '18rem', '18rem', '26rem']

    return(
        <Flex justifyContent='space-between' w={w} bg='secondary.gray' mt='0.3em' mb='1.2em'>
            <Flex flexDirection='column' alignItems='center'>
                <Text fontSize={fs}>Team Member</Text>
                <Box h='0.2em' w='full' bg='primary.blue'></Box>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Text fontSize={fs}>Notification</Text>
                <Box h='0.2em' w='full' bg='primary.blue'></Box>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Text fontSize={fs}>Submission</Text>
                <Box h='0.2em' w='full' bg='primary.blue'></Box>
            </Flex>
        </Flex>
    )
};

const useWindowSize = () => {
    const [width, setWidth] = useState();
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        console.log(window.innerWidth);
    }, []);
    return width;
};


export default function Dashboard() {
    const width = useWindowSize();

    let px = ['2em', '2em', '2em', '5em']
    let py = ['10px', '', '1em', '3em']
    let fs = ["2em", "2em", "2em", "2.7em"]
    let h = ['45em', '55em', '50vw', '45vw']
    let h2 = ['31em', '32em', '20em', '24em']
    let fd = ['column', 'column', 'row', 'row']

    let dataItem = {
        Data: {ID: 18220092, teamName: 'SWIC', teamCode: 16520491},
        Members: [
            {id:1, name: 'Thariq Zhafran Satyagraha', isTeamLeader: true, isVerified: true},
            {id:2, name: 'Haris Soetnoyo', isTeamLeader: false, isVerified: true},
            {id:3, name: 'Ertantina Lopez', isTeamLeader: false, isVerified: false}
        ],
        AdditionalData: true
    }

    return(
        <Flex flexDirection={fd} h={h} w='full'>
            <img src={`${width < 767 ? "/assets/images/background/dashboard-top.png" : "/assets/images/background/dashboard.png"}`} alt="picture" />
            <img src={`${width < 767 ? '/assets/images/pattern/dashboard-horizontal.png' : '/assets/images/pattern/dashboard-center.png'}`} alt="picture" />
            <Box w='full' h='full' bg='red.100' px={px} py={py} >
                <Box bg='green.200' w='full' h={h2}>
                    <Heading color='primary.red' fontWeight='medium' fontSize={fs}>Dashboard</Heading>
                    <Nav />
                    {width < 767 ? <TeamMemberVertical data={dataItem} /> : <TeamMemberHorizontal data={dataItem} />}                    
                    <Square bg='primary.blue' borderRadius='2rem' w='6em' color='white' py='1em' px='6em' fontSize='0.5em' mt='2em'>Save</Square>
                </Box>
            </Box>
        </Flex>
    )
}