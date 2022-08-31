import { Box, Flex, Square, Text, useToast } from "@chakra-ui/react";
import { MdCheckCircle, MdDoNotDisturbOn } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Submission({team}) {
    const [filePickedPDF, setFilePickedPDF] = useState(null);
    const [filePickedZIP, setFilePickedZIP] = useState(null);
    const [submittedPDF, setSubmittedPDF] = useState(false);
    const [submittedZIP, setSubmittedZIP] = useState(false);
    const toast = useToast();
    const fileRefPDF = useRef();
    const fileRefZIP = useRef();
    const handleChangePDF = (e) => {
        setFilePickedPDF(e.target.files[0]);
    };
    const handleChangeZIP = (e) => {
        setFilePickedZIP(e.target.files[0]);
    };
    const validateSubmit = () => {
        let valid = true;
        if(!filePickedPDF) valid = false;
        return valid;
    }
    const validateSize = () => {
        let valid = true;
        if(filePickedPDF){
            if(filePickedPDF.size > 20971520) valid = false;
        }
        if(filePickedZIP){
            if(filePickedZIP.size > 50971520) valid = false;
        }
        return valid;
    }
    async function handleSubmit(){
        const valid = validateSubmit();
        if(!valid){
            toast({
                title: "Error!",
                description: "Please upload your presentation file!",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return
        }
        const validSize = validateSize();
        if(!validSize) {
            toast({
                title: "Error!",
                description: "Max size for your presentation file is 20 MB and your additional file is 50 MB!",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return
        }
        try{
            const storage = getStorage();
            const storageRef = ref(storage, `final-submission/${team.teamCategory}/${team.teamName}/${filePickedPDF.name}`);
            uploadBytes(storageRef, filePickedPDF).then((snapshot) => {
                getDownloadURL(ref(storage, `final-submission/${team.teamCategory}/${team.teamName}/${filePickedPDF.name}`)).then(async function (url){
                    try{
                        const docRef = doc(db, `team`, team.id);
                        await updateDoc(docRef, {
                            finalSubmissionPDF: url,
                            finalSubmissionPDFName: filePickedPDF.name
                          });
                          setSubmittedPDF(true);
                          if(!filePickedZIP){
                            toast({
                                title: "Submission uploaded",
                                description: "Your submission has been uploaded successfully",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                              });
                          }
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
            if(filePickedZIP){
                const storageRef = ref(storage, `final-submission/${team.teamCategory}/${team.teamName}/${filePickedZIP.name}`);
                uploadBytes(storageRef, filePickedZIP).then((snapshot) => {
                    getDownloadURL(ref(storage, `final-submission/${team.teamCategory}/${team.teamName}/${filePickedZIP.name}`)).then(async function (url){
                        try{
                            const docRef = doc(db, `team`, team.id);
                            await updateDoc(docRef, {
                                finalSubmissionZIP: url,
                                finalSubmissionZIPName: filePickedZIP.name
                              });
                              setSubmittedZIP(true);
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
            }
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
        <Box>
            <Box borderRadius='0.3em' border='2px' borderColor='secondary.gray' px='16px' py='12px'>
                <Text fontSize={['0.6em', '0.8em', '0.8em', '0.8em']}>
                Final submission (Presentation in .pdf) <span style={{ color: 'red' }}>*</span>
                </Text>
                <Flex alignItems='center' mt='10px'>
                    <Square bg='secondary.blue' borderRadius='0.6em' cursor='pointer' onClick={() => fileRefPDF.current.click()} fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} color='white' px='22px' py='7px'>
                        <Box pl='3px'>
                            <input type="file" hidden
                            ref={fileRefPDF}
                            accept="application/pdf"
                            onChange={handleChangePDF}
                            multiple={false}/>
                            {filePickedPDF != null || team.finalSubmissionPDF ? "Change File" : "Upload File"} 
                        </Box>
                    </Square>
                    {filePickedPDF != null || team.finalSubmissionPDF ?
                        <Box pl='0.5em'>
                        {filePickedPDF != null ?
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{filePickedPDF.name}</Text>
                            :
                            <a             
                            href={team.finalSubmissionPDF}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}>
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{team.finalSubmissionPDFName}</Text>
                            </a>
                            }
                            <Flex>
                                <svg width="0" height="0">
                                    <linearGradient id="color-gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                        <stop stopColor="#EB222A" offset="0%" />
                                        <stop stopColor="#1C1D60" offset="100%" />
                                    </linearGradient>
                                </svg>
                                {submittedPDF || team.finalSubmissionPDF ? <MdCheckCircle style={{ fill: "url(#color-gradient)" }} /> : <MdDoNotDisturbOn color="#FFD600"  />}
                                <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} pl='2px' fontWeight='medium'>{submittedPDF || team.finalSubmissionPDF ? "Submitted!" : "Not submitted!"}</Text>
                            </Flex>
                        </Box>
                        :
                        null}
                </Flex>
            </Box>
        </Box>
        <Box mt='2rem'>
            <Box borderRadius='0.3em' border='2px' borderColor='secondary.gray' px='16px' py='12px'>
                <Text fontSize={['0.6em', '0.8em', '0.8em', '0.8em']}>
                Final submission (Optional additional file in .zip)
                </Text>
                <Flex alignItems='center' mt='10px'>
                    <Square bg='secondary.blue' borderRadius='0.6em' cursor='pointer' onClick={() => fileRefZIP.current.click()} fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} color='white' px='22px' py='7px'>
                        <Box pl='3px'>
                            <input type="file" hidden
                            ref={fileRefZIP}
                            accept="application/zip"
                            onChange={handleChangeZIP}
                            multiple={false}/>
                            {filePickedZIP != null || team.finalSubmissionZIP ? "Change File" : "Upload File"} 
                        </Box>
                    </Square>
                    {filePickedZIP != null || team.finalSubmissionZIP ?
                        <Box pl='0.5em'>
                        {filePickedZIP != null ?
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{filePickedZIP.name}</Text>
                            :
                            <a             
                            href={team.finalSubmissionZIP}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}>
                            <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} fontWeight='bold'>{team.finalSubmissionZIPName}</Text>
                            </a>
                            }
                            <Flex>
                                <svg width="0" height="0">
                                    <linearGradient id="color-gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                        <stop stopColor="#EB222A" offset="0%" />
                                        <stop stopColor="#1C1D60" offset="100%" />
                                    </linearGradient>
                                </svg>
                                {submittedZIP || team.finalSubmissionZIP ? <MdCheckCircle style={{ fill: "url(#color-gradient)" }} /> : <MdDoNotDisturbOn color="#FFD600"  />}
                                <Text fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} pl='2px' fontWeight='medium'>{submittedZIP || team.finalSubmissionZIP ? "Submitted!" : "Not submitted!"}</Text>
                            </Flex>
                        </Box>
                        :
                        null}
                </Flex>
            </Box>
            <Square  w='10em' cursor="pointer" py='8px' bg='primary.blue' borderRadius='full' color='white' fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} mt='1.5em' onClick={handleSubmit}>Submit</Square>
        </Box>
        </Box>
    )
}