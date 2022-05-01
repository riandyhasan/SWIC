import { Flex, Square,  Text, Box, useToast } from "@chakra-ui/react"
import { MdCancel, MdCheckCircle, MdDoNotDisturbOn } from "react-icons/md";
import { useRef, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";


export default function AdditionalData({team, profile}) {

    const [filePicked, setFilePicked] = useState();
    const toast = useToast();
    const fileRef = useRef();
    const handleChange = (e) => {
        setFilePicked(e.target.files);
        console.log(e.target.files)
    };

    const getRole = () => {
        if(profile.profiles.teamRole == "leader"){
            return 0;
        }else if (profile.profiles.teamRole == "member1"){
            return 1;
        }else if (profile.profiles.teamRole == "member2"){
            return 2;
        }
    }

    const role = getRole();

    async function handleSave(){
        try{
            const storage = getStorage();
            const storageRef = ref(storage, `participant-data/${team.teamName}/${team.membersName[role]}-${profile.profiles.teamRole}.jpg`);
            uploadBytes(storageRef, filePicked[0]).then((snapshot) => {
                getDownloadURL(ref(storage, `participant-data/${team.teamName}/${team.membersName[role]}-${profile.profiles.teamRole}.jpg`)).then(async function (url){
                    try{
                        let membersValidation = team.membersValidation;
                        membersValidation[role] = 1;
                        let membersData = team.membersData;
                        membersData[role] = url;
                        const docRef = doc(db, `team`, team.id);
                        await updateDoc(docRef, {
                            membersValidation: membersValidation,
                            membersData: membersData,
                            isChecked: false 
                          });
                          toast({
                            title: "Data uploaded",
                            description: "Your data has been uploaded successfully, please wait for the validation.",
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
        <>
        <Flex alignItems='center' justifyContent='space-between' h='40px' borderRadius='0.3em' border='2px' borderColor='secondary.gray' p='8px'>
            <Flex>
                {team.membersValidation[role] == 1 || team.membersValidation[role] == 2 || filePicked ? team.membersValidation[role] == 2 ? <MdCheckCircle /> : <MdDoNotDisturbOn color="#FFD600" /> : <MdCancel color="red" />}
                <Text fontSize='0.8em' fontWeight='medium' pl={'1em'}>ID Card</Text>
            </Flex>
            <Square bg='secondary.blue' borderRadius='0.6em' cursor='pointer' onClick={() => fileRef.current.click()} fontSize={['0.5em', '0.7em', '0.7em', '0.7em']} color='white' px='22px' py='7px'>  
                {/* <MdFileUpload color="white"/> */}
                <Box pl='3px'>
                    <input type="file" hidden
                    ref={fileRef}
                    accept="image/png, application/pdf"
                    onChange={handleChange}
                    multiple={false}/>
                    {team.membersValidation[role] == 1 || team.membersValidation[role] == 2 || filePicked ? "Change File" : "Upload File"}
                </Box>
            </Square>
        </Flex>
        <Square bg='primary.blue' cursor="pointer" borderRadius='2rem' w='6em' color='white' py='1em' px='6em' fontSize='0.5em' mt='2em' onClick={handleSave}>Save</Square>
        </>
    );
}