import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import { Box } from "@chakra-ui/react";
import Countdown from "../../components/pages/home/Countdown";
import Jumbotron from "../../components/pages/competition/Jumbotron";
import WhatCanYouGet from "../../components/pages/competition/WhatCanYouGet";
import Timeline from "../../components/pages/competition/Timeline";

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>SWIC | Competition</title>
      </Head>
      <Box
        w="100%"
        bgImg="url('/assets/images/background/competition.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
      >

          <Jumbotron />
      </Box>
          <WhatCanYouGet />
          <Timeline />
    </Layout>
  );
}
