import { Box, Flex, Heading, Text, Grid, Square, GridItem, Input, Textarea } from "@chakra-ui/react"
import Image from "next/image";
import { useEffect, useState } from "react";
import Notification from "./notification/Notification";
import Submission from "./submission/Submission";
import { TeamMemberHorizontal } from "./team-member/TeamMemberHorizontal";
import { TeamMemberVertical } from "./team-member/TeamMemberVertical";

const Nav = ({onClick, isOnTeam, isOnNotif, isOnSub}) => {
    let fs = ["0.7em", "0.7em", "0.7em", "1em"]
    let w = ['full', '18rem', '18rem', '26rem']

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
            <MiniNav id='teamMember' name='Team Member' isOn={isOnTeam}/>
            <MiniNav id='notification' name='Notification' isOn={isOnNotif}/>
            <MiniNav id='submission' name='Submission' isOn={isOnSub}/>
        </Flex>
    )
};

// const useWindowSize = () => {
//     const [width, setWidth] = useState();
    
//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//         };
//         window.addEventListener("resize", handleResize);
//         console.log(window.innerWidth);
//     }, []);
//     return width;
// };

const useDeviceSize = () => {
    const [width, setWidth] = useState(0);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return width;
}


export default function Dashboard({profile, team}) {
    const [isOnTeam, setIsOnTeam] = useState(true);
    const [isOnNotif, setIsOnNotif] = useState(false);
    const [isOnSub, setIsOnSub] = useState(false);
    const width = useDeviceSize();

    let px = ['2em', '2em', '2em', '5em']
    let py = ['10px', '', '1em', '3em']
    let fs = ["2em", "2em", "2em", "2.7em"]
    let h = ['45em', '55em', '50vw', '45vw']
    let h2 = ['31em', '32em', '20em', '24em']
    let fd = ['column', 'column', 'row', 'row']

    const onClickHandler = (e) => {
        switch(e.target.id) {
            case "teamMember":
                setIsOnTeam(true);
                setIsOnNotif(false);
                setIsOnSub(false)
                break;
            case "notification":
                setIsOnTeam(false);                    
                setIsOnNotif(true);
                setIsOnSub(false)
                break;
            case "submission":
                setIsOnTeam(false);
                setIsOnNotif(false);
                setIsOnSub(true);
                break;
            default:
                break;
        }
        // console.log(e.target)
    }
    const getTeam = () => {
        let data = {};
        team.map((t) => {
            if(t.id == profile.profiles.teamID){
                data = t;
            }
        })
        return data;
    }

    const myTeam = getTeam();

    return(
        <Flex flexDirection={fd} h={h} w='full'>
            <img src={`${width < 767 ? "/assets/images/background/dashboard-top.png" : "/assets/images/background/dashboard.png"}`} alt="picture" />
            <img src={`${width < 767 ? '/assets/images/pattern/dashboard-horizontal.png' : '/assets/images/pattern/dashboard-center.png'}`} alt="picture" />
            <Box w='full' h='full' px={px} py={py} >
                <Box w='full' h={h2}>
                    <Heading color='primary.red' fontWeight='medium' fontSize={fs}>Dashboard</Heading>
                    <Nav onClick={onClickHandler} isOnTeam={isOnTeam} isOnNotif={isOnNotif} isOnSub={isOnSub}/>
                    
                    {width < 767 ? isOnTeam && <TeamMemberVertical data={myTeam} /> : isOnTeam && <TeamMemberHorizontal data={myTeam} />}                    
                    {isOnTeam && <Square bg='primary.blue' borderRadius='2rem' w='6em' color='white' py='1em' px='6em' fontSize='0.5em' mt='2em'>Save</Square>}
                    {isOnNotif && <Notification />}
                    {isOnSub && <Submission />}
                </Box>
            </Box>
        </Flex>
    )
}