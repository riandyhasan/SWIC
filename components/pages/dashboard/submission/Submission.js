import { Box, Flex, Square, Text, useToast } from "@chakra-ui/react";
import { MdCheckCircle, MdDoNotDisturbOn } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Submission({team}) {
    const [filePicked, setFilePicked] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const toast = useToast();
    const fileRef = useRef();
    const handleChange = (e) => {
        setFilePicked(e.target.files[0]);
    };

    async function handleSubmit(){
        try{
            const storage = getStorage();
            const storageRef = ref(storage, `team-submission/${team.teamCategory}/${team.teamName}/${filePicked.name}.pdf`);
            uploadBytes(storageRef, filePicked[0]).then((snapshot) => {
                getDownloadURL(ref(storage, `team-submission/${team.teamCategory}/${team.teamName}/${filePicked.name}.pdf`)).then(async function (url){
                    try{
                        const docRef = doc(db, `team`, team.id);
                        await updateDoc(docRef, {
                            isSubmit: true,
                            submission: url,
                            submissionName: filePicked.name,
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
                Submit your file! (Make sure you have picked your category correctly in the team member page and your file isn't more than 20MB)
                </Text>
                <Flex alignItems='center' mt='10px'>
                    <Square bg='secondary.blue' borderRadius='0.6em' cursor='pointer' onClick={() => fileRef.current.click()} fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} color='white' px='22px' py='7px'>
                        <Box pl='3px'>
                            <input type="file" hidden
                            ref={fileRef}
                            accept="application/pdf"
                            onChange={handleChange}
                            multiple={false}/>
                            {filePicked != null || team.submissionName ? "Change File" : "Upload File"} 
                        </Box>
                    </Square>
                    {filePicked != null || team.submissionName ?
                        <Box pl='0.5em'>
                        {filePicked != null ?
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{filePicked.name}</Text>
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
                        </Box>
                        :
                        null}
                </Flex>
            </Box>
            <Square  w='10em' cursor="pointer" py='8px' bg='primary.blue' borderRadius='full' color='white' fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} mt='1.5em' onClick={handleSubmit}>Submit</Square>
        </Box>
    )
}