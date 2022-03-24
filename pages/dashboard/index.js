import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Dashboard from "../../components/pages/dashboard/Dashboard";

export default function ContactUs() {
    return (
        <Layout>
            <Head>
                <title>SWIC</title>
            </Head>
            <Box w='100%'>
                <Dashboard />
            </Box>
        </Layout>
    )
}