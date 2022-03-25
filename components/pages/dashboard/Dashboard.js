import { Box, Flex, Heading, Text, Grid, GridItem, Input, Textarea } from "@chakra-ui/react"
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
    let fs = ["0.6em", "0.6em", "0.7em", "1em"]
    let w = ['full', '18rem', '18rem', '26rem']

    return(
        <Flex justifyContent='space-between' w={w} bg='secondary.gray' mt='0.3em' mb='1.2em'>
            <Flex flexDirection='column' alignItems='center'>
                <Text fontSize={fs}>Team Member</Text>
                <Box h='0.3em' w='full' bg='primary.blue'></Box>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Text fontSize={fs}>Notification</Text>
                <Box h='0.3em' w='full' bg='primary.blue'></Box>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Text fontSize={fs}>Submission</Text>
                <Box h='0.3em' w='full' bg='primary.blue'></Box>
            </Flex>
        </Flex>
    )
};

const DataForm = () => {
    let h = ['80vw', '', '24vw', '18vw'];
    let tr = [7, 6, 6, 6];
    let tc = [3, 1, 1, 1];
    let rs = [3, 4, 4, 4];
    let cs = [1, 2, 2, 2];
    let gap = [1, 2, 1, 1];
    let pb = ['0.5en', '1.5em', '1.5em', '1.5em'];


    return(
        <Grid 
            w='full' 
            h={h} 
            bg='green.500' 
            templateRows={`repeat(${tr}, 1fr)` }
            templateColumns={`repeat(${tc}, 1fr)`} 
            gap={[2, 0, 3, 4]}>
            <GridItem bg='red.400' rowSpan={rs}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Data</Text>
                    <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                    </Box>
                </Flex>
            </GridItem>
            <GridItem bg='red.400' rowSpan={rs} colSpan={cs}>
                <Flex flexDirection='column' h='full' w='full'>
                    <Text fontFamily='Coolvetica'>Members</Text>
                    <Grid w='full' h='full' templateRows='repeat(3, 1fr)' gap={gap}>
                        <GridItem>
                            <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
                            </Box>
                        </GridItem>
                    </Grid>
                </Flex>
            </GridItem>
            <GridItem bg='red.400' rowSpan={[1, 1, 1, 1]} colSpan={[1, 3, 3, 3]}>
                <Text fontFamily='Coolvetica'>Additional Data</Text>
                <Box h='full' w='full' pb={pb}>
                    <Box w='full' h={['62%', 'full', 'full', '80%']} bg='yellow.200' borderRadius='0.3em'></Box>
                </Box>
            </GridItem>
        </Grid>
        // <Grid 
        //     w='full' 
        //     h={h} 
        //     bg='green.500' 
        //     templateRows='repeat(7, 1fr)' 
        //     templateColumns='repeat(1, 1fr)' 
        //     gap={[2, 0, 3, 6]}>
        //     <GridItem bg='red.400' rowSpan={3}>
        //         <Flex flexDirection='column' h='full' w='full'>
        //             <Text fontFamily='Coolvetica'>Data</Text>
        //             <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
        //             </Box>
        //         </Flex>
        //     </GridItem>
        //     <GridItem bg='red.400' rowSpan={3}>
        //         <Flex flexDirection='column' h='full' w='full'>
        //             <Text fontFamily='Coolvetica'>Members</Text>
        //             <Grid w='full' h='full' templateRows='repeat(3, 1fr)' gap={1.5}>
        //                 <GridItem>
        //                     <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
        //                     </Box>
        //                 </GridItem>
        //                 <GridItem>
        //                     <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
        //                     </Box>
        //                 </GridItem>
        //                 <GridItem>
        //                     <Box h='full' w='full' bg='yellow.200' borderRadius='0.3em'>
        //                     </Box>
        //                 </GridItem>
        //             </Grid>
        //         </Flex>
        //     </GridItem>
        //     <GridItem bg='red.400'>
        //         <Text fontFamily='Coolvetica'>Additional Data</Text>
        //         <Box h='full' w='full' pb='0.5em'>
        //             <Box w='full' h='full' bg='yellow.200' borderRadius='0.3em'></Box>
        //         </Box>
        //     </GridItem>
        // </Grid>
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

    let px = ['2rem', '2em', '2em', '5em']
    let py = ['', '', '1em', '3em']
    let fs = ["2em", "2em", "2em", "2.7em"]
    let h = ['170vw', '', '50vw', '40vw']
    let fd = ['column', 'column', 'row', 'row']

    return(
        <Flex flexDirection={fd} h={h} w='full'>
            <img src={`${width < 767 ? "/assets/images/background/dashboard-top.png" : "/assets/images/background/dashboard.png"}`} alt="picture" />
            <img src={`${width < 767 ? '/assets/images/pattern/dashboard-horizontal.png' : '/assets/images/pattern/dashboard-center.png'}`} alt="picture" />
            <Box w='full' h='full' bg='red.100' px={px} py={py} >
                <Box bg='green.200' w='full' h='full'>
                    <Heading color='primary.red' fontWeight='medium' fontSize={fs}>Dashboard</Heading>
                    <Nav />
                    <DataForm />
                </Box>
            </Box>
        </Flex>
    )
}