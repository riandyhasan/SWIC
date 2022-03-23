import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import { ContactForm } from "../../components/pages/contact-us/ContactForm";
import Information from "../../components/pages/contact-us/Information";

export default function ContactUs() {
    return (
        <Layout>
            <Head>
                <title>SWIC</title>
            </Head>
            <Box
                w='100%'
                bgImg="url('/assets/images/background/contact-us.png')"
                bgRepeat="no-repeat"
                bgSize="cover">
                    
                <Information />
            </Box>
                <ContactForm />
        </Layout>
    )
}