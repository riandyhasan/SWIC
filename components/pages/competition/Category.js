import { Flex, Square, Text, useBoolean } from "@chakra-ui/react";

const SquareTemp = ({title, desc, href}) => {
    const [viewCase, setViewCase] = useBoolean();

    return(
        <Flex
        p="2px"
        mb="1em"
        mx={["0.2em", "1.6em"]}
        justifyContent="center"
        alignItems="center"
        borderRadius={"1em"}
        bgGradient="linear(99.32deg, #EB222A 10.14%, #1C1D60 57.05%)"
        onMouseEnter={setViewCase.on}
        onMouseLeave={setViewCase.off}
        >
            <Flex 
            position={"relative"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            bg="gray.100"

            borderRadius={"1em"}
            w={["10em", "17em"]}
            h={["10em", "11em"]}
            p={["0.5em", "1em"]}
            mt="0" 
            textAlign="center"
            
            transitionDuration='400ms'
            transitionTimingFunction='ease-in-out'
            >
            
                <a href={href} target="_blank" rel="noreferrer" cursor="pointer">
                    <Flex
                    href={href}
                    top="0" left={"0"}
                    w="full"
                    h={viewCase ? "full" : "0"}
                    opacity={viewCase ? "full" : "0"}
                    position={"absolute"}
                    borderRadius={"1em"}
                    overflowY={"hidden"}
                    justifyContent={"center"}
                    alignItems="end"
                    sx={{
                        background: "linear-gradient(183.68deg, rgba(28, 29, 96, 0) -18.7%, #1C1D60 67.09%)"
                    }}
                    transitionDuration="300ms"
                    transitionTimingFunction='ease-in-out'
                    color={"white"}
                    >   
                        <Text fontFamily={"coolvetica"} fontSize={["1.2em", "1.6em"]} fontWeight="medium" pb="14px">View Case</Text>
                    </Flex>
                </a>
                
                <Text 
                color={"primary.blue"}
                fontFamily={"coolvetica"}
                mb={["9px", "5px"]}>
                {title}
                </Text>
                <Text 
                fontSize={["0.4em", "0.6em"]}
                textAlign="justify">
                {desc}
                </Text>
            </Flex>
        </Flex>
    )
}

export default function Category() {
   let content = [{
        title: "Accessible Healthcare",
        desc: "How can rural residents obtain adequate healthcare services and equal treatment effortlessly?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Rural%20Healthcare.pdf?alt=media&token=052d4205-be88-4e21-af69-9cf0ab264543",
    }, {
        title: "Inclusive Literacy",
        desc: "How to leverage existing education infrastructure to increase financial literacy for rural populations?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Rural%20Economy.pdf?alt=media&token=d96b9bb5-7fcc-4a95-8ea1-a6176a043c0d",
    }, {
        title: "Meaningful Connectivity",
        desc: "How to provide low-cost reliable, and scalable connectivity to optimize off-grid rural eletrification solutions?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Rural%20Energy%20Transition.pdf?alt=media&token=69203e59-8cbe-4987-bd55-72489088dd35",
    }, {
        title: "Solving Resistance for Preventative Medicine",
        desc: "As Indonesia is approaching new area with Ibu Kota Nusantara (IKM), how digital healthcare can play significant role to sit urban's behavior towards preventative medicine through adequate access for all urban areas?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Urban%20Healthcare.pdf?alt=media&token=cd0cc80f-0ea3-4734-b108-533d57cfbf58",
    }, {
        title: "Decentralized Finance & Exchange",
        desc: "How to enable De-Fi and DeX to play critical role in improving local business, especially SMEs, profitability?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Urban%20Economy.pdf?alt=media&token=91cd94dd-c1ae-4b2a-9285-f3251ffd3c7b",
    }, {
        title: "Low-carbon AI",
        desc: "How applied AI and digitalization could improve clean energy product adaption to improve net zero emission pathaway time?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Urban%20Energy%20Transition.pdf?alt=media&token=7f570401-0632-4641-aafb-6e7ae9c58964",
    }]

    return(
        <Flex flexDirection={"column"} alignItems={"center"} py={["1.6em", "2em"]}>
            <Text
            fontSize={["1.6em", "2.4em"]}
            fontWeight="bold"
            mb="10px"
            color={"primary.red"}>
                Category
            </Text>
            {/* <a 
            href="https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Guideline.pdf?alt=media&token=190ce64d-3a3d-4546-96d1-bd7bdef3e91a"
            target="_blank" 
            rel="noreferrer" 
            cursor="pointer">
                <Square
                my="1.4em"
                fontSize="0.8em"
                cursor="pointer"
                color="black"
                borderRadius={["1em", "1.4em"]}
                p="0.6em"
                py={["0.3em", "0.5em"]}
                bg="secondary.yellow"
                w={["8em", "10em"]}
                >
                    Guidebook
                </Square>
            </a> */}
            <Flex flexWrap={"wrap"} justifyContent={"center"} px={["0", "4em"]} maxW={"70em"}>
                {content.map((data, id) => {
                    return(
                        <Flex key={id} flexWrap={"wrap"}>
                            <SquareTemp title={data.title} desc={data.desc} href={data.href}/>
                        </Flex>

                    )
                })}
            </Flex>
        </Flex>
    )
}