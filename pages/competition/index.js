import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import { Box } from "@chakra-ui/react";
import Countdown from "../../components/pages/home/Countdown";
import Jumbotron from "../../components/pages/competition/Jumbotron";
import WhatCanYouGet from "../../components/pages/competition/WhatCanYouGet";
import Timeline from "../../components/pages/competition/Timeline";
import Prize from "../../components/pages/competition/Prize";
import Judges from "../../components/pages/competition/Judges";
import FAQ from "../../components/pages/competition/FAQ";
import Category from "../../components/pages/competition/Category";
import getProfile from "../../services/profile/profile";
import Loading from "../../components/loading/Loading";

export default function Competition() {
  const profile = getProfile();
  return !profile.loading ? (
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

        <Jumbotron profile={profile} />
        </Box>
        <WhatCanYouGet />
        <Category />
        <Timeline />
        {/* <Prize /> */}
        {/* <Judges /> */}
        <FAQ />
    </Layout>
  ) : (
    <Loading/>
  )
}
