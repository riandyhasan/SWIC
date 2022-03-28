import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";
import Jumbotron from "../components/pages/home/Jumbotron";
import Benefits from "../components/pages/home/Benefits";
import Sponsor from "../components/pages/home/Sponsor";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SWIC</title>
      </Head>
      <Box
        w="100%"
        bgImg="url('/assets/images/background/home.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Jumbotron />
        <Benefits />
        <Sponsor />
      </Box>
    </Layout>
  );
}
