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
import Guidebook from "../../components/pages/competition/Guidebook";

export default function Competition() {
  const profile = getProfile();
  return !profile.loading ? (
    <Layout>
      <Head>
        <title>SWIC | Competition</title>
      </Head>
      <Box
        w="100%"
        bgImg="url('https://firebasestorage.googleapis.com/v0/b/swic-2d4c2.appspot.com/o/assets%2Fimages%2Fcompetition.png?alt=media&token=9ba69c59-a43e-4ce2-9992-88907a305bd1')"
        bgRepeat="no-repeat"
        bgSize="cover"
      >

        <Jumbotron profile={profile} />
        </Box>
        <WhatCanYouGet />
        <Guidebook />
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
