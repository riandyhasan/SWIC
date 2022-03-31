import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';

const Notif = () => {
    const [data, setData] = useState([]); 


    // [
    //     {
    //     title: "Lorem Ipsum",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet eu nisi sed pretium. Sed malesuada turpis vel sem tempor, eget vulputate felis gravida. Cras condimentum nibh et blandit suscipit. Fusce id accumsan metus. Integer rutrum augue id nunc semper feugiat. Mauris quis scelerisque erat."
    //     }
    // ]

    return(
        <Flex w='full' bg='white' borderRadius='0.3em' border='2px' borderColor='secondary.gray' px='15px' py='10px' mb='0.5em'>
            <Flex alignItems='start' h='full' w={['16px', '18px', '20px', '22px']}>
                <FaBell size='full'/>
            </Flex>
            {data.length < 1 &&
                <Box w='full' pl='10px'>
                    <Text w='full' fontSize={['0.7em', '0.7em', '0.9em', '0.9em']} fontWeight='medium'>There is no notification yet</Text>
                </Box>
            }
            {data.length > 0 && data.map((d, id) => {
                console.log(data.test)
                return(
                    <Box w='full' pl='10px' key={id}>
                        <Text w='full' fontSize={['0.7em', '0.7em', '0.9em', '0.9em']} fontWeight='medium'>{d.title}</Text>
                        <Text w='full' fontSize={['0.6em', '0.6em', '0.7em', '0.7em']}>{d.description}</Text>
                    </Box>
                )
            })}
        </Flex>
    )
}

export default function Notification() {
    return(
        <Box h={['80%', '80%', '30vw', '27vw']} p='0.5em' pb='0' bg='#d8d7d71a' overflowY='scroll'>
                <Notif />
        </Box>
    )
}