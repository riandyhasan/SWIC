import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import { ContactForm } from "../../components/pages/contact-us/ContactForm";
import Information from "../../components/pages/contact-us/Information";

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>SWIC | Contact Us</title>
      </Head>
      <Box
        w="100%"
        bgImg="url('https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/assets%2Fimages%2Fcontact-us.png?alt=media&token=2ca6fb26-dce5-406d-a41e-03ecf120b0fb')"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Information />
      </Box>
      <ContactForm />
    </Layout>
  );
}
