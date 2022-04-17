import { useState } from 'react';
import { Flex, Text, Heading } from "@chakra-ui/react";

const SquareTemp = ({title, desc, show, setShow, href}) => {
    return(
        <Flex 
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
        border="2px solid #1C1D60"
        borderRadius="1em"
        w="17em"
        // sx={{
        //     borderImage: "linear-gradient(to right, #EB222A , #1C1D60)",
        //     borderImageSlice: 1,
        //     borderRadius: "inherit"

        // }}
        h="11em"
        p={"1em"}
        m="1.6em"
        mt="0" 
        textAlign="center"
        _hover={{
            bg:"linear-gradient(183.68deg, rgba(28, 29, 96, 0) -18.7%, #1C1D60 67.09%)",
            color:'primary.blue'
        }}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        >
            <Text fontSize={"1.2em"} mb="5px">{title}</Text>
            <Text fontSize={"0.6em"}>{desc}</Text>
            {show ? <a href={href} target="_blank" rel="noreferrer"><Heading fontFamily="Coolvetica" fontWeight="normal" color="white" cursor="pointer" >View Case</Heading></a> : null}
        </Flex>
    )
}

export default function Category() {
    const [show1, setShow1] = useState(false); 
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    let content = [{
        title: "Accessible Healthcare",
        desc: "How can rural residents obtain adequate healthcare services and equal treatment effortlessly?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Rural%20Healthcare.pdf?alt=media&token=052d4205-be88-4e21-af69-9cf0ab264543",
        show: show1,
        setShow: setShow1,
    }, {
        title: "Inclusive Literacy",
        desc: "How to leverage existing education infrastructure to increase financial literacy for rural populations?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Rural%20Economy.pdf?alt=media&token=d96b9bb5-7fcc-4a95-8ea1-a6176a043c0d",
        show: show2,
        setShow: setShow2,
    }, {
        title: "Meaningful Connectivity",
        desc: "How to provide low-cost reliable, and scalable connectivity to optimize off-grid rural eletrification solutions?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Rural%20Energy%20Transition.pdf?alt=media&token=69203e59-8cbe-4987-bd55-72489088dd35",
        show: show3,
        setShow: setShow3,
    }, {
        title: "Solving Resistance for Preventative Medicine",
        desc: "As Indonesia is approaching new area with Ibu Kota Nusantara (IKM), how digital healthcare can play significant role to sit urban's behavior towards preventative medicine through adequate access for all urban areas?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Urban%20Healthcare.pdf?alt=media&token=cd0cc80f-0ea3-4734-b108-533d57cfbf58",
        show: show4,
        setShow: setShow4,
    }, {
        title: "Decentralized Finance & Exchange",
        desc: "How to enable De-Fi and DeX to play critical role in improving local business, especially SMEs, profitability?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Urban%20Economy.pdf?alt=media&token=91cd94dd-c1ae-4b2a-9285-f3251ffd3c7b",
        show: show5,
        setShow: setShow5,
    }, {
        title: "Low-carbon AI",
        desc: "How applied AI and digitalization could improve clean energy product adaption to improve net zero emission pathaway time?",
        href:"https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/cases%2FSWIC_Case%20Overview_Urban%20Energy%20Transition.pdf?alt=media&token=7f570401-0632-4641-aafb-6e7ae9c58964",
        show: show6,
        setShow: setShow6,
    }]

    return(
        <Flex flexDirection={"column"} alignItems={"center"} py="2em">
            <Text
            mb="2em"
            fontSize={"2em"}
            fontWeight="bold"
            color={"primary.red"}>
                Category
            </Text>
            <Flex flexWrap={"wrap"} justifyContent={"center"} px="4em" maxW={"70em"}>
                {content.map((data, id) => {
                    return(
                        <Flex key={id} flexWrap={"wrap"}>
                            <SquareTemp title={data.title} desc={data.desc} setShow={data.setShow} show={data.show} href={data.href}/>
                        </Flex>

                    )
                })}
            </Flex>
        </Flex>
    )
}