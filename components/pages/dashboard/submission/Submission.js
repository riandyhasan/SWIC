import { Box, Flex, Square, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useRef, useState } from "react";

export default function Submission() {
    const [filePicked, setFilePicked] = useState();
    const fileRef = useRef();
    const handleChange = (e) => {
        setFilePicked(e.target.files);
        console.log(e.target.files[0].name);

    };

    return(
        <Box>
            <Box borderRadius='0.3em' border='2px' borderColor='secondary.gray' px='16px' py='12px'>
                <Text fontSize={['0.6em', '0.8em', '0.8em', '0.8em']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam laoreet eu nisi sed pretium. Sed malesuada turpis vel sem tempor, 
                    eget vulputate felis gravida. Cras condimentum nibh et blandit suscipit. 
                    Fusce id accumsan metus. Integer rutrum augue id nunc semper feugiat. 
                    Mauris quis scelerisque erat.
                </Text>
                <Flex alignItems='center' mt='10px'>
                    <Square bg='secondary.blue' borderRadius='0.6em' cursor='pointer' onClick={() => fileRef.current.click()} fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} color='white' px='22px' py='7px'>
                        {filePicked ? 
                            <Box pl='3px'>
                                <input type="file" hidden
                                ref={fileRef}
                                accept="application/pdf"
                                onChange={handleChange}
                                multiple={false}/>
                                Change File
                            </Box> : 
                            <Box pl='3px'>
                                <input type="file" hidden
                                ref={fileRef}
                                accept="application/pdf"
                                onChange={handleChange}
                                multiple={false}/>
                                Upload File
                            </Box>}
                    </Square>
                    {filePicked && 
                        <Box pl='0.5em'>
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{filePicked[0].name}</Text>
                            <Flex>
                                <svg width="0" height="0">
                                    <linearGradient id="color-gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                        <stop stopColor="#EB222A" offset="0%" />
                                        <stop stopColor="#1C1D60" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <MdCheckCircle style={{ fill: "url(#color-gradient)" }} />
                                <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} pl='2px' fontWeight='medium'>Uploaded!</Text>
                            </Flex>
                        </Box>}
                </Flex>
            </Box>
            <Square w='10em' py='8px' bg='primary.blue' borderRadius='full' color='white' fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} mt='1.5em'>Submit</Square>
        </Box>
    )
}