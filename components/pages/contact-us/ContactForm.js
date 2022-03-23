import { Box, Heading, Flex, Text, Input, Square, Grid, GridItem, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const SmallInput = ({title, placeHolder, val, changeData}) => {
    return(
        <GridItem colSpan={1} fontWeight='semibold'>
            <Text fontWeight='medium' fontFamily={'Coolvetica'}>{title}</Text>
            <Input id={title} value={val} onChange={changeData} placeholder="Lorem Ipsum"/>
        </GridItem>
    )
};

export function ContactForm() {
    const [name, setName] = useState("");
    const [institution, setInstitution] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [inquiries, setInquiries] = useState("");

    let py = ['', '', '0.5em', '1.5em'];
    let gap = [0, 0, 4, 6];
    let h = ['', '', '70vw', '50vw']
    let mt = ['', '', '', ''];

    const onChangeData = (e) => {
        let id = e.target.id;
        let value = e.target.value;

        switch(id){
            case "Name":
                setName(value);
                break;
            case "Institution":
                setInstitution(value);
                break;
            case "City":
                setCity(value);
                break;
            case "Country":
                setCountry(value);
                break;
            case "Email":
                setEmail(value);
                break;
            case "Phone Number":
                setPhoneNumber(value);
                break;
            case "Inquiries":
                setInquiries(value);
                break;
                
            default:
                break;
        }
    }

    const handleSubmit = () => {
        console.log(name, institution, city, country, email, phoneNumber, inquiries)
    }

    return(
        <Box w='80%' h={h}>
            <Heading textAlign='center' color='primary.red' fontWeight='medium' py={py}>Drop Your Question Here!</Heading>
            <Grid h='60%' templateRows='repeat(6, 1fr)' templateColumns='repeat(2, 1fr)' gap={gap} color='primary.blue'>
                <SmallInput title='Name' val={name} changeData={onChangeData}/>
                <SmallInput title='Institution' val={institution} changeData={onChangeData}/>
                <SmallInput title='City' val={city} changeData={onChangeData}/>
                <SmallInput title='Country' val={country} changeData={onChangeData}/>
                <SmallInput title='Email' val={email} changeData={onChangeData}/>
                <SmallInput title='Phone Number' val={phoneNumber} changeData={onChangeData}/>
                
                <GridItem colSpan={2} rowSpan={3} fontWeight='semibold'>
                    <Text fontWeight='medium' fontFamily={'Coolvetica'}>Inquiries</Text>
                    <Textarea id="Inquiries" val={inquiries} placeholder="Lorem Ipsum" h='full' onChange={onChangeData}/>
                </GridItem>
            </Grid>
            <Square 
                fontSize='0.9em' 
                cursor='pointer' 
                mt={['3em','3em', '3em', '3em']} 
                borderRadius='1.4em' 
                py='0.6em' 
                bg='primary.blue' 
                color='white' 
                w={['10em', '12em']}
                onClick={handleSubmit}>
                Submit
            </Square>
        </Box>
    )
}