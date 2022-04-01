import { Box, Flex, Square, Text, useToast } from "@chakra-ui/react";
import { MdCheckCircle, MdDoNotDisturbOn } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Submission({team}) {
    const [filePicked, setFilePicked] = useState();
    const [submitted, setSubmitted] = useState(false);
    const toast = useToast();
    const fileRef = useRef();
    const handleChange = (e) => {
        setFilePicked(e.target.files);
    };

    async function handleSubmit(){
        try{
            const storage = getStorage();
            const storageRef = ref(storage, `team-submission/${team.teamName}/${filePicked[0].name}.pdf`);
            uploadBytes(storageRef, filePicked[0]).then((snapshot) => {
                getDownloadURL(ref(storage, `team-submission/${team.teamName}/${filePicked[0].name}.pdf`)).then(async function (url){
                    try{
                        const docRef = doc(db, `team`, team.id);
                        await updateDoc(docRef, {
                            isSubmit: true,
                            submission: url,
                            submissionName: filePicked[0].name,
                          });
                          setSubmitted(true);
                          toast({
                            title: "Submission uploaded",
                            description: "Your submission has been uploaded successfully",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                          });
                    }catch(e){
                        var msg = e.message;
                        const error = msg.replace("Firebase:", "");
                        toast({
                            title: "Error!",
                            description: error,
                            status: "error",
                            duration: 2000,
                            isClosable: true,
                        });
                    }
                });
              });
        }catch(e){
            var msg = e.message;
            const error = msg.replace("Firebase:", "");
            toast({
                title: "Error!",
                description: error,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    }

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
                                {filePicked || team.submissionName ? "Change File" : "Upload File"} 
                            </Box>}
                    </Square>
                    {filePicked || team.submissionName && 
                        <Box pl='0.5em'>
                        {filePicked ?
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{filePicked[0].name}</Text>

                            :
                            <a             
                            href={team.submission}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}>
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{team.submissionName}</Text>
                            </a>
                            }
                            <Flex>
                                <svg width="0" height="0">
                                    <linearGradient id="color-gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                        <stop stopColor="#EB222A" offset="0%" />
                                        <stop stopColor="#1C1D60" offset="100%" />
                                    </linearGradient>
                                </svg>
                                {submitted || team.submissionName ? <MdCheckCircle style={{ fill: "url(#color-gradient)" }} /> : <MdDoNotDisturbOn color="#FFD600"  />}
                                <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} pl='2px' fontWeight='medium'>{submitted || team.submissionName ? "Uploaded!" : "Pending!"}</Text>
                            </Flex>
                        </Box>}
                </Flex>
            </Box>
            <Square  w='10em' cursor="pointer" py='8px' bg='primary.blue' borderRadius='full' color='white' fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} mt='1.5em' onClick={handleSubmit}>Submit</Square>
        </Box>
    )
}